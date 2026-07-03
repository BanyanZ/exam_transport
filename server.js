import "dotenv/config";
import express from "express";
import JSZip from "jszip";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

const PORT = Number(process.env.PORT || 5173);
const LLM_API_KEY = process.env.LLM_API_KEY || process.env.OPENAI_API_KEY || "";
const LLM_BASE_URL = (process.env.LLM_BASE_URL || "https://api.openai.com/v1").replace(/\/+$/, "");
const LLM_MODEL = process.env.LLM_MODEL || "gpt-4o-mini";
const EXTERNAL_KB_URL = process.env.EXTERNAL_KB_URL || "";
const EXTERNAL_KB_API_KEY = process.env.EXTERNAL_KB_API_KEY || "";

app.use(express.json({ limit: "30mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  if (req.method === "OPTIONS") {
    res.sendStatus(204);
    return;
  }
  next();
});

function clip(value, limit = 12000) {
  const text = String(value || "");
  return text.length > limit ? `${text.slice(0, limit)}\n...[已截断]` : text;
}

function answerId(value) {
  return String(value || "A").toUpperCase().match(/[A-D]/)?.[0] || "A";
}

function decodeXmlEntities(value) {
  const entities = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
  };

  return String(value || "").replace(/&(#x[0-9a-fA-F]+|#\d+|amp|lt|gt|quot|apos);/g, (_, entity) => {
    if (entity.startsWith("#x")) return String.fromCodePoint(Number.parseInt(entity.slice(2), 16));
    if (entity.startsWith("#")) return String.fromCodePoint(Number.parseInt(entity.slice(1), 10));
    return entities[entity] || _;
  });
}

function slideNumber(name) {
  return Number(name.match(/slide(\d+)\.xml$/)?.[1] || 0);
}

async function extractPptxText(file) {
  const zip = await JSZip.loadAsync(Buffer.from(file.base64, "base64"));
  const slideNames = Object.keys(zip.files)
    .filter((name) => /^ppt\/slides\/slide\d+\.xml$/.test(name))
    .sort((a, b) => slideNumber(a) - slideNumber(b));

  const slides = [];
  for (const slideName of slideNames) {
    const xml = await zip.file(slideName).async("string");
    const textRuns = [...xml.matchAll(/<a:t[^>]*>([\s\S]*?)<\/a:t>/g)]
      .map((match) => decodeXmlEntities(match[1]).trim())
      .filter(Boolean);
    if (textRuns.length) {
      slides.push(`幻灯片 ${slideNumber(slideName)}\n${textRuns.join("\n")}`);
    }
  }

  return slides.length
    ? `【${file.name}】\n${slides.join("\n\n")}`
    : `【${file.name}】未提取到可读幻灯片文本。`;
}

async function collectAttachmentText(attachments = []) {
  const chunks = [];
  for (const file of attachments) {
    if (file.text) {
      chunks.push(`【${file.name}】\n${clip(file.text, 24000)}`);
      continue;
    }

    if (file.ext === "pptx" && file.base64) {
      try {
        chunks.push(clip(await extractPptxText(file), 36000));
      } catch (error) {
        chunks.push(`【${file.name}】PPTX 解析失败：${error.message}`);
      }
      continue;
    }

    if (file.needsParsing) {
      chunks.push(`【${file.name}】已上传，但当前代理还没有解析 ${file.ext || file.type} 格式。`);
    }
  }

  return clip(chunks.join("\n\n"), 60000);
}

function compactResourceContext(context = {}) {
  const visible = context.visibleResources || [];
  const stats = context.courseStats || [];

  return clip([
    `当前筛选：${context.filter || "all"}；搜索词：${context.query || "无"}`,
    "课程统计：",
    ...stats.map((item) => `- ${item.name}：${item.total} 份资料，${item.papers} 套试卷`),
    "当前可见资料：",
    ...visible.map((item, index) => `${index + 1}. ${item.course} / ${item.type} / ${item.section}：${item.title}（${item.path}）`),
  ].join("\n"), 24000);
}

function formatKnowledgeResult(data) {
  if (!data) return "";
  if (typeof data === "string") return clip(data, 18000);

  const list = data.documents || data.results || data.items || data.data;
  if (Array.isArray(list)) {
    return clip(list.slice(0, 8).map((item, index) => {
      if (typeof item === "string") return `${index + 1}. ${item}`;
      const title = item.title || item.name || item.source || `条目 ${index + 1}`;
      const body = item.content || item.text || item.snippet || item.summary || JSON.stringify(item);
      return `${index + 1}. ${title}\n${body}`;
    }).join("\n\n"), 18000);
  }

  if (data.answer || data.content || data.text) {
    return clip(data.answer || data.content || data.text, 18000);
  }

  return clip(JSON.stringify(data), 18000);
}

async function fetchExternalKnowledge(prompt, payload) {
  if (!EXTERNAL_KB_URL) return { configured: false, text: "" };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(EXTERNAL_KB_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(EXTERNAL_KB_API_KEY ? { Authorization: `Bearer ${EXTERNAL_KB_API_KEY}` } : {}),
      },
      body: JSON.stringify({
        query: prompt,
        context: payload.context,
        attachments: (payload.attachments || []).map(({ base64, text, ...rest }) => rest),
      }),
      signal: controller.signal,
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const contentType = response.headers.get("content-type") || "";
    const data = contentType.includes("application/json") ? await response.json() : await response.text();
    return { configured: true, text: formatKnowledgeResult(data) };
  } catch (error) {
    return { configured: true, text: `外部知识库调用失败：${error.message}` };
  } finally {
    clearTimeout(timer);
  }
}

async function buildKnowledgeBlock(prompt, payload) {
  const [attachmentText, externalKnowledge] = await Promise.all([
    collectAttachmentText(payload.attachments || []),
    fetchExternalKnowledge(prompt, payload),
  ]);

  return {
    resources: compactResourceContext(payload.context),
    attachments: attachmentText || "无上传资料文本。",
    externalKnowledge,
  };
}

async function callModel(messages, temperature = 0.25) {
  if (!LLM_API_KEY) throw new Error("missing LLM_API_KEY");

  const response = await fetch(`${LLM_BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LLM_API_KEY}`,
    },
    body: JSON.stringify({
      model: LLM_MODEL,
      messages,
      temperature,
    }),
  });

  if (!response.ok) {
    throw new Error(clip(await response.text(), 800));
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content?.trim() || "";
}

function localChatAnswer(payload = {}) {
  const visible = payload.context?.visibleResources || [];
  const lines = visible.slice(0, 6).map((item, index) => `${index + 1}. ${item.course} / ${item.type}：${item.title}`);
  return [
    "当前代理服务还没有配置大模型 API，我先按本地资料库给你一个可执行建议。",
    lines.length ? `优先查看：\n${lines.join("\n")}` : "当前筛选下没有资料，建议先切回“全部”。",
    "配置 LLM_API_KEY 后，我会把本地资料、外部知识库和上传 PPT 一起放进上下文里回答。",
  ].join("\n\n");
}

const courseProfiles = {
  GIS: {
    name: "地理信息系统",
    topics: "空间数据模型、地图投影、拓扑关系、缓冲区分析、叠置分析、网络分析、空间插值、遥感与 GIS 集成",
  },
  OR: {
    name: "运筹学",
    topics: "线性规划、单纯形法、对偶问题、灵敏度分析、运输问题、整数规划、图与网络、最短路、最大流",
  },
  TD: {
    name: "交通大数据技术",
    topics: "交通大数据特征、数据采集、数据清洗、轨迹数据、交通状态识别、OD 分析、预测建模、隐私与安全",
  },
};

const examQuestionBank = {
  GIS: [
    {
      question: "在 GIS 中，缓冲区分析最适合用于解决哪类问题？",
      options: [
        { id: "A", text: "判断两个图层是否使用同一个坐标系统" },
        { id: "B", text: "分析某对象一定距离范围内受到影响的空间区域" },
        { id: "C", text: "把栅格数据压缩成更小的文件" },
        { id: "D", text: "将属性表中的字段名称自动翻译" },
      ],
      answer: "B",
      explanation: "缓冲区分析围绕点、线、面对象生成一定距离范围内的区域，常用于影响范围、服务范围和邻近性分析。",
    },
    {
      question: "下列哪一项最能体现 GIS 中拓扑关系的作用？",
      options: [
        { id: "A", text: "记录空间对象之间的邻接、连通和包含关系" },
        { id: "B", text: "提高地图符号的颜色饱和度" },
        { id: "C", text: "减少遥感影像的云量" },
        { id: "D", text: "自动决定地图标题字体" },
      ],
      answer: "A",
      explanation: "拓扑关系描述空间对象之间不随形变改变的关系，如邻接、连通、包含，有助于空间查询和错误检查。",
    },
    {
      question: "矢量数据与栅格数据相比，矢量数据更适合表达哪类对象？",
      options: [
        { id: "A", text: "连续变化的温度场" },
        { id: "B", text: "行政边界、道路、站点等离散地物" },
        { id: "C", text: "每个像元的灰度值" },
        { id: "D", text: "大范围遥感影像原始波段" },
      ],
      answer: "B",
      explanation: "矢量数据用点、线、面表达离散空间对象，适合道路、边界、设施点等明确边界或位置的地物。",
    },
  ],
  OR: [
    {
      question: "线性规划问题中，目标函数和约束条件共同决定了什么？",
      options: [
        { id: "A", text: "可行域以及在可行域内寻找最优解的方向" },
        { id: "B", text: "变量名称是否必须使用英文字母" },
        { id: "C", text: "计算结果的小数位数" },
        { id: "D", text: "数据表格的显示格式" },
      ],
      answer: "A",
      explanation: "约束条件形成可行域，目标函数给出优化方向，最优解通常在可行域的顶点处取得。",
    },
    {
      question: "关于线性规划的对偶问题，下列说法正确的是哪一项？",
      options: [
        { id: "A", text: "对偶问题与原问题完全无关" },
        { id: "B", text: "对偶变量常可解释为资源的影子价格" },
        { id: "C", text: "只有整数规划才存在对偶问题" },
        { id: "D", text: "对偶问题一定没有约束条件" },
      ],
      answer: "B",
      explanation: "对偶变量反映资源约束边际变化对目标值的影响，因此常被解释为影子价格。",
    },
    {
      question: "运输问题的基本目标通常是什么？",
      options: [
        { id: "A", text: "在供需约束下使总运输成本最小" },
        { id: "B", text: "让每个供应点都运输相同数量" },
        { id: "C", text: "使所有路线都被使用一次" },
        { id: "D", text: "只考虑距离而不考虑供需关系" },
      ],
      answer: "A",
      explanation: "运输问题在供应量和需求量约束下分配运输量，典型目标是最小化总运输成本。",
    },
  ],
  TD: [
    {
      question: "交通大数据的“实时性”主要体现在哪一类应用需求中？",
      options: [
        { id: "A", text: "多年后统一整理纸质档案" },
        { id: "B", text: "根据当前路况进行拥堵识别和诱导控制" },
        { id: "C", text: "只统计固定资产折旧" },
        { id: "D", text: "把所有数据永久不更新地保存" },
      ],
      answer: "B",
      explanation: "交通运行状态变化快，实时数据可支持拥堵检测、信号控制、路径诱导和应急管理。",
    },
    {
      question: "对出租车 GPS 轨迹数据进行地图匹配的主要目的是什么？",
      options: [
        { id: "A", text: "把轨迹点关联到实际道路网络上" },
        { id: "B", text: "删除所有时间戳" },
        { id: "C", text: "把车辆颜色统一改成蓝色" },
        { id: "D", text: "只保留乘客姓名" },
      ],
      answer: "A",
      explanation: "地图匹配用于将带误差的轨迹点匹配到道路网络，便于速度估计、路径识别和交通状态分析。",
    },
    {
      question: "交通数据清洗中，识别异常速度记录的主要意义是什么？",
      options: [
        { id: "A", text: "避免传感器错误或定位漂移影响后续分析" },
        { id: "B", text: "保证每辆车速度完全相同" },
        { id: "C", text: "删除所有高峰期数据" },
        { id: "D", text: "使数据文件名称更短" },
      ],
      answer: "A",
      explanation: "异常速度可能来自设备故障、定位漂移或数据传输错误，清洗后可提高交通状态识别和预测模型可靠性。",
    },
  ],
};

function courseCodeFromText(value = "") {
  const text = String(value);
  if (/GIS|地理信息/.test(text)) return "GIS";
  if (/OR|运筹/.test(text)) return "OR";
  if (/TD|交通大数据/.test(text)) return "TD";
  return "";
}

function getActiveCourseCodes(payload = {}) {
  const filter = payload.context?.filter;
  if (courseProfiles[filter]) return [filter];
  const visible = payload.context?.visibleResources || [];
  const codes = visible
    .map((item) => courseCodeFromText(`${item.course} ${item.title} ${item.section}`))
    .filter(Boolean);
  return codes.length ? [...new Set(codes)] : ["GIS", "OR", "TD"];
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function localQuiz(payload = {}) {
  const code = randomItem(getActiveCourseCodes(payload));
  const quiz = randomItem(examQuestionBank[code] || examQuestionBank.GIS);
  return {
    source: `${courseProfiles[code].name} · 考试模拟题`,
    question: quiz.question,
    options: quiz.options,
    answer: quiz.answer,
    explanation: quiz.explanation,
  };
}

function parseJsonObject(text) {
  try {
    return JSON.parse(text);
  } catch {
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}");
    if (start >= 0 && end > start) {
      return JSON.parse(text.slice(start, end + 1));
    }
    throw new Error("model did not return JSON");
  }
}

function quizCourseContext(payload = {}) {
  return getActiveCourseCodes(payload)
    .map((code) => `${courseProfiles[code].name}：${courseProfiles[code].topics}`)
    .join("\n");
}

function quizLooksLikeResourceIndex(quiz) {
  const text = [
    quiz.source,
    quiz.question,
    quiz.explanation,
    ...(quiz.options || []).map((option) => option.text || option.label || String(option)),
  ].join(" ");

  return /资料|文件|路径|展示柜|来源说明|哪一套|第[一二三四五六七八九十0-9]+套|最新|生成版|AI生成|\.pdf|\/|\\|PPT名称|课程总结|复习题解答|复习试卷/.test(text);
}

function normalizeQuizFromModel(text, payload) {
  const parsed = parseJsonObject(text);
  const quiz = parsed.quiz || parsed;
  if (!quiz.question || !Array.isArray(quiz.options) || quiz.options.length < 4) {
    return localQuiz(payload);
  }

  const normalized = {
    source: "考试模拟题",
    question: String(quiz.question).replace(/^题干[:：]\s*/, ""),
    options: quiz.options.slice(0, 4).map((option, index) => ({
      id: String(option.id || ["A", "B", "C", "D"][index]).trim().slice(0, 1).toUpperCase(),
      text: option.text || option.label || String(option),
    })),
    answer: answerId(quiz.answer || quiz.correctAnswer),
    explanation: quiz.explanation || "解析来自资料库、外部知识库与上传材料上下文。",
  };

  return quizLooksLikeResourceIndex(normalized) ? localQuiz(payload) : normalized;
}

function statusLabel(externalKnowledge) {
  const parts = ["大模型已调用"];
  if (externalKnowledge.configured) {
    parts.push(externalKnowledge.text.startsWith("外部知识库调用失败") ? "知识库调用失败" : "知识库已调用");
  }
  return parts.join(" / ");
}

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    modelConfigured: Boolean(LLM_API_KEY),
    model: LLM_MODEL,
    knowledgeBaseConfigured: Boolean(EXTERNAL_KB_URL),
    pptxParser: true,
  });
});

app.post("/api/agent/chat", async (req, res) => {
  const payload = req.body || {};
  const prompt = payload.prompt || "";

  if (!LLM_API_KEY) {
    res.json({ answer: localChatAnswer(payload), status: "本地后端模式" });
    return;
  }

  try {
    const knowledge = await buildKnowledgeBlock(prompt, payload);
    const answer = await callModel([
      {
        role: "system",
        content: "你是一个中文期末复习 Agent。回答要结合本地资料库、外部知识库和上传课件；不确定时说明依据不足；尽量给可执行的复习建议。",
      },
      {
        role: "user",
        content: [
          `用户问题：${prompt}`,
          `本地资料库：\n${knowledge.resources}`,
          `外部知识库：\n${knowledge.externalKnowledge.text || "未配置或无结果。"}`,
          `上传资料：\n${knowledge.attachments}`,
        ].join("\n\n"),
      },
    ]);

    res.json({ answer, status: statusLabel(knowledge.externalKnowledge) });
  } catch (error) {
    res.json({
      answer: `${localChatAnswer(payload)}\n\n大模型调用失败：${error.message}`,
      status: "大模型调用失败",
    });
  }
});

app.post("/api/agent/quiz", async (req, res) => {
  const payload = req.body || {};
  const prompt = payload.prompt || "生成一道单选题";

  if (!LLM_API_KEY) {
    res.json({ quiz: localQuiz(payload), status: "本地后端出题" });
    return;
  }

  try {
    const knowledge = await buildKnowledgeBlock(prompt, payload);
    const text = await callModel([
      {
        role: "system",
        content: [
          "你是中文期末考试出题 Agent。请生成一道真正的课程考试单选题，难度适合考前自测。",
          "必须只输出 JSON，不要 Markdown，不要额外解释。",
          "JSON 格式：{\"source\":\"来源说明\",\"question\":\"题干\",\"options\":[{\"id\":\"A\",\"text\":\"选项\"},{\"id\":\"B\",\"text\":\"选项\"},{\"id\":\"C\",\"text\":\"选项\"},{\"id\":\"D\",\"text\":\"选项\"}],\"answer\":\"A\",\"explanation\":\"解析\"}",
          "必须考课程知识点、概念辨析、方法应用、计算思路或案例判断。",
          "严禁考文件名、资料名、路径、PDF 名称、PPT 名称、第几套试卷、是否最新生成、资料来源或展示柜信息。",
          "选项中也严禁出现 .pdf、斜杠路径、资料标题、第几套、最新生成等元信息。",
        ].join("\n"),
      },
      {
        role: "user",
        content: [
          `出题要求：${prompt}`,
          `可出题课程与常见考点：\n${quizCourseContext(payload)}`,
          `外部知识库：\n${knowledge.externalKnowledge.text || "未配置或无结果。"}`,
          `上传资料：\n${knowledge.attachments}`,
        ].join("\n\n"),
      },
    ], 0.45);

    res.json({ quiz: normalizeQuizFromModel(text, payload), status: statusLabel(knowledge.externalKnowledge) });
  } catch (error) {
    const quiz = localQuiz(payload);
    quiz.explanation += ` 大模型出题失败，已使用本地规则兜底。失败信息：${error.message}`;
    res.json({ quiz, status: "本地兜底出题" });
  }
});

app.use(express.static(__dirname));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Review Agent Hub running at http://localhost:${PORT}`);
});

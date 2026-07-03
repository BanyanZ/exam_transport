const courses = {
  GIS: {
    code: "GIS",
    full: "地理信息系统",
    color: "#236fd6",
    intro: "课件重点、逐页梳理和 6 套期末复习试卷。",
  },
  OR: {
    code: "OR",
    full: "运筹学",
    color: "#108f75",
    intro: "复习笔记和 A-H 八套期末考试卷。",
  },
  TD: {
    code: "TD",
    full: "交通大数据技术",
    color: "#e05f48",
    intro: "课程总结、复习题解答和 7 套生成版试卷。",
  },
};

const resources = [
  { id: "gis-summary-1", course: "GIS", type: "summary", section: "重点总结（三份内容相同）", title: "地理信息系统课件内容梳理与逐页重点", path: "GIS期末/这三个是一样的总结/GIS_PPT内容梳理与逐页重点.pdf" },
  { id: "gis-summary-2", course: "GIS", type: "summary", section: "重点总结（三份内容相同）", title: "地理信息系统课件重点与答案", path: "GIS期末/这三个是一样的总结/GIS_PPT重点与答案.pdf" },
  { id: "gis-summary-3", course: "GIS", type: "summary", section: "重点总结（三份内容相同）", title: "地理信息系统重点问题与答案", path: "GIS期末/这三个是一样的总结/GIS_PPT重点问题与答案.pdf" },
  { id: "gis-paper-1", course: "GIS", type: "paper", section: "试卷", title: "地理信息系统期末复习试卷第一套", path: "GIS期末/试卷/GIS期末复习试卷1.pdf" },
  { id: "gis-paper-2", course: "GIS", type: "paper", section: "试卷", title: "地理信息系统期末复习试卷第二套", path: "GIS期末/试卷/GIS期末复习试卷2.pdf" },
  { id: "gis-paper-3", course: "GIS", type: "paper", section: "试卷", title: "地理信息系统期末复习试卷第三套", path: "GIS期末/试卷/GIS期末复习试卷3.pdf" },
  { id: "gis-paper-4", course: "GIS", type: "paper", section: "试卷", title: "地理信息系统期末复习试卷第四套", path: "GIS期末/试卷/GIS期末复习试卷4.pdf" },
  { id: "gis-paper-5", course: "GIS", type: "paper", section: "试卷", title: "地理信息系统期末复习试卷第五套", path: "GIS期末/试卷/GIS期末复习试卷5.pdf" },
  { id: "gis-paper-6", course: "GIS", type: "paper", section: "试卷", title: "地理信息系统期末复习试卷第六套", path: "GIS期末/试卷/GIS期末复习试卷6.pdf" },

  { id: "or-summary-1", course: "OR", type: "summary", section: "总结文件", title: "运筹学复习笔记", path: "OR期末/总结文件/or_review_notes.pdf" },
  { id: "or-paper-a", course: "OR", type: "paper", section: "期末考试", title: "运筹学期末考试卷第一套", path: "OR期末/期末考试/or_exam_set_a.pdf" },
  { id: "or-paper-b", course: "OR", type: "paper", section: "期末考试", title: "运筹学期末考试卷第二套", path: "OR期末/期末考试/or_exam_set_b.pdf" },
  { id: "or-paper-c", course: "OR", type: "paper", section: "期末考试", title: "运筹学期末考试卷第三套", path: "OR期末/期末考试/or_exam_set_c.pdf" },
  { id: "or-paper-d", course: "OR", type: "paper", section: "期末考试", title: "运筹学期末考试卷第四套", path: "OR期末/期末考试/or_exam_set_d.pdf" },
  { id: "or-paper-e", course: "OR", type: "paper", section: "期末考试", title: "运筹学期末考试卷第五套", path: "OR期末/期末考试/or_exam_set_e.pdf" },
  { id: "or-paper-f", course: "OR", type: "paper", section: "期末考试", title: "运筹学期末考试卷第六套", path: "OR期末/期末考试/or_exam_set_f.pdf" },
  { id: "or-paper-g", course: "OR", type: "paper", section: "期末考试", title: "运筹学期末考试卷第七套", path: "OR期末/期末考试/or_exam_set_g.pdf" },
  { id: "or-paper-h", course: "OR", type: "paper", section: "期末考试", title: "运筹学期末考试卷第八套", path: "OR期末/期末考试/or_exam_set_h.pdf" },

  { id: "td-summary-1", course: "TD", type: "summary", section: "复习资料总结", title: "交通大数据技术课程总结 2026", path: "TD期末/复习资料总结/7 交通大数据技术-课程总结_2026.pdf" },
  { id: "td-summary-2", course: "TD", type: "summary", section: "复习资料总结", title: "交通大数据技术复习题解答", path: "TD期末/复习资料总结/交通大数据技术复习题解答.pdf" },
  { id: "td-paper-1", course: "TD", type: "paper", section: "试卷（生成版）", title: "交通大数据技术复习试卷第一套", path: "TD期末/试卷（AI生成）/交通大数据技术复习试卷.pdf" },
  { id: "td-paper-2", course: "TD", type: "paper", section: "试卷（生成版）", title: "交通大数据技术复习试卷第二套", path: "TD期末/试卷（AI生成）/交通大数据技术复习试卷第二套.pdf" },
  { id: "td-paper-3", course: "TD", type: "paper", section: "试卷（生成版）", title: "交通大数据技术复习试卷第三套", path: "TD期末/试卷（AI生成）/交通大数据技术复习试卷第三套.pdf" },
  { id: "td-paper-4", course: "TD", type: "paper", section: "试卷（生成版）", title: "交通大数据技术复习试卷第四套", path: "TD期末/试卷（AI生成）/交通大数据技术复习试卷第四套.pdf" },
  { id: "td-paper-5", course: "TD", type: "paper", section: "试卷（生成版）", title: "交通大数据技术复习试卷第五套", path: "TD期末/试卷（AI生成）/交通大数据技术复习试卷第五套.pdf" },
  { id: "td-paper-6", course: "TD", type: "paper", section: "试卷（生成版）", title: "交通大数据技术复习试卷第六套", path: "TD期末/试卷（AI生成）/交通大数据技术复习试卷第六套.pdf" },
  { id: "td-paper-7", course: "TD", type: "paper", section: "试卷（生成版）", title: "交通大数据技术复习试卷第七套", path: "TD期末/试卷（AI生成）/交通大数据技术复习试卷第七套.pdf" },
];

const state = {
  filter: "all",
  query: "",
  showcaseType: null,
};

const courseGrid = document.querySelector("#courseGrid");
const resourceGrid = document.querySelector("#resourceGrid");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const filters = document.querySelector("#filters");
const toast = document.querySelector("#toast");
const previewDialog = document.querySelector("#previewDialog");
const previewFrame = document.querySelector("#previewFrame");
const previewTitle = document.querySelector("#previewTitle");
const previewCourse = document.querySelector("#previewCourse");
const openPreview = document.querySelector("#openPreview");
const downloadPreview = document.querySelector("#downloadPreview");
const copyPath = document.querySelector("#copyPath");
const showcaseDrawer = document.querySelector("#showcaseDrawer");
const closeShowcase = document.querySelector("#closeShowcase");
const showcaseTitle = document.querySelector("#showcaseTitle");
const showcaseMeta = document.querySelector("#showcaseMeta");
const showcaseStats = document.querySelector("#showcaseStats");
const showcaseGrid = document.querySelector("#showcaseGrid");
const showcaseEmpty = document.querySelector("#showcaseEmpty");
const agentDialog = document.querySelector("#agentDialog");
const agentLauncher = document.querySelector("#agentLauncher");
const closeAgent = document.querySelector("#closeAgent");
const agentStatus = document.querySelector("#agentStatus");
const agentMessages = document.querySelector("#agentMessages");
const agentForm = document.querySelector("#agentForm");
const agentInput = document.querySelector("#agentInput");
const agentUpload = document.querySelector("#agentUpload");
const agentFiles = document.querySelector("#agentFiles");
const generateQuiz = document.querySelector("#generateQuiz");
const nextQuiz = document.querySelector("#nextQuiz");
const agentQuiz = document.querySelector("#agentQuiz");
const quizSource = document.querySelector("#quizSource");
const quizQuestion = document.querySelector("#quizQuestion");
const quizOptions = document.querySelector("#quizOptions");
const quizFeedback = document.querySelector("#quizFeedback");

const agentState = {
  messages: [],
  attachments: [],
  currentQuiz: null,
  isBusy: false,
};

const isLocalHost = ["localhost", "127.0.0.1"].includes(location.hostname);
const API_BASE = location.protocol === "file:" || (isLocalHost && location.port !== "5173")
  ? "http://127.0.0.1:5173"
  : "";

function typeLabel(type) {
  return type === "paper" ? "试卷" : "总结";
}

function matchFilter(item) {
  if (state.filter === "all") return true;
  if (state.filter === "paper" || state.filter === "summary") return item.type === state.filter;
  return item.course === state.filter;
}

function matchQuery(item) {
  const q = state.query.trim().toLowerCase();
  if (!q) return true;
  const course = courses[item.course];
  return [item.title, item.section, item.course, course.full, typeLabel(item.type), item.path]
    .join(" ")
    .toLowerCase()
    .includes(q);
}

function getVisibleResources() {
  return resources.filter((item) => matchFilter(item) && matchQuery(item));
}

function getVisibleByType(type) {
  return getVisibleResources().filter((item) => item.type === type);
}

function typeIntro(type) {
  return type === "paper"
    ? "按课程收纳全部套卷，适合集中刷题和考前自测。"
    : "课程总结、重点答案和复习笔记集中在这里，适合先建立框架。";
}

function courseCountSummary(items) {
  return Object.values(courses)
    .map((course) => {
      const count = items.filter((item) => item.course === course.code).length;
      return count ? `<span style="--course-color:${course.color}">${course.full} ${count}</span>` : "";
    })
    .filter(Boolean)
    .join("");
}

function downloadName(item) {
  return item.path.split("/").pop();
}

function renderCourses() {
  courseGrid.innerHTML = Object.values(courses).map((course) => {
    const count = resources.filter((item) => item.course === course.code).length;
    const papers = resources.filter((item) => item.course === course.code && item.type === "paper").length;
    return `
      <article class="course-card tilt-card" style="--course-color:${course.color}" data-course="${course.code}" tabindex="0">
        <span class="course-code">${course.full.slice(0, 2)}</span>
        <h3>${course.full}</h3>
        <p>${course.intro}</p>
        <div class="course-meta">
          <span>${count} 份资料</span>
          <span>${papers} 套试卷</span>
        </div>
      </article>
    `;
  }).join("");
}

function renderResources() {
  const visible = getVisibleResources();
  const types = state.filter === "paper" || state.filter === "summary"
    ? [state.filter]
    : ["summary", "paper"];

  resourceGrid.innerHTML = types.map((type) => {
    const items = visible.filter((item) => item.type === type);
    const isEmpty = items.length === 0;
    return `
      <article class="resource-canvas tilt-card ${isEmpty ? "empty" : ""}" data-showcase-type="${type}" ${isEmpty ? "" : 'tabindex="0"'} aria-label="${typeLabel(type)}展示柜">
        <div class="canvas-top">
          <span>${typeLabel(type)}展示柜</span>
          <strong>${items.length}</strong>
        </div>
        <h3>${type === "paper" ? "试卷" : "总结资料"}</h3>
        <p>${typeIntro(type)}</p>
        <div class="canvas-courses">${courseCountSummary(items) || "<span>暂无匹配</span>"}</div>
        <button class="canvas-open" type="button" ${isEmpty ? "disabled" : ""}>点击这里查看总结与资料~</button>
      </article>
    `;
  }).join("");
  emptyState.hidden = visible.length > 0;
}

function renderShowcaseCard(item) {
  const course = courses[item.course];
  const href = encodeURI(item.path);
  return `
    <article class="showcase-card" style="--course-color:${course.color}" data-id="${item.id}">
      <div class="card-top">
        <span class="badge">${course.full}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${typeLabel(item.type)} / ${item.section}</p>
      <div class="card-actions showcase-actions">
        <button type="button" data-action="preview">预览</button>
        <a href="${href}" download="${escapeHtml(downloadName(item))}">下载</a>
        <a href="${href}" target="_blank" rel="noreferrer">打开</a>
      </div>
    </article>
  `;
}

function renderShowcase(type) {
  const items = getVisibleByType(type);
  state.showcaseType = type;
  showcaseTitle.textContent = `${typeLabel(type)}展示柜`;
  showcaseMeta.textContent = `当前筛选下 ${items.length} 份${typeLabel(type)}资料`;
  showcaseStats.innerHTML = courseCountSummary(items) || "<span>暂无匹配资料</span>";
  showcaseEmpty.hidden = true;
  showcaseGrid.innerHTML = Object.values(courses).map((course) => {
    const courseItems = items.filter((item) => item.course === course.code);
    return `
      <section class="showcase-course-section" style="--course-color:${course.color}">
        <div class="showcase-course-head">
          <div>
            <span>${course.code}</span>
            <h4>${course.full}</h4>
          </div>
          <strong>${courseItems.length} 份</strong>
        </div>
        <div class="showcase-course-items">
          ${courseItems.length ? courseItems.map(renderShowcaseCard).join("") : `<p class="showcase-course-empty">当前筛选下没有${course.full}的${typeLabel(type)}资料。</p>`}
        </div>
      </section>
    `;
  }).join("");
}

function openShowcase(type) {
  if (!getVisibleByType(type).length) {
    showToast(`当前筛选下没有${typeLabel(type)}资料`);
    return;
  }
  renderShowcase(type);
  if (typeof showcaseDrawer.showModal === "function") {
    showcaseDrawer.showModal();
  }
}

function refreshShowcase() {
  if (showcaseDrawer.open && state.showcaseType) {
    renderShowcase(state.showcaseType);
  }
}

function setFilter(filter) {
  state.filter = filter;
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.filter === filter);
  });
  renderResources();
  refreshShowcase();
  document.querySelector("#resources").scrollIntoView({ behavior: "smooth", block: "start" });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1700);
}

function openResourcePreview(item) {
  const course = courses[item.course];
  previewTitle.textContent = item.title;
  previewCourse.textContent = `${course.full} / ${typeLabel(item.type)}`;
  previewFrame.src = encodeURI(item.path);
  openPreview.href = encodeURI(item.path);
  downloadPreview.href = encodeURI(item.path);
  downloadPreview.setAttribute("download", item.path.split("/").pop());
  copyPath.dataset.path = item.path;
  if (typeof previewDialog.showModal === "function") {
    previewDialog.showModal();
  } else {
    window.open(encodeURI(item.path), "_blank", "noreferrer");
  }
}

function toggleSet(set, id) {
  if (set.has(id)) {
    set.delete(id);
  } else {
    set.add(id);
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char]);
}

function answerId(value) {
  return String(value || "A").toUpperCase().match(/[A-D]/)?.[0] || "A";
}

const clientExamQuestionBank = {
  GIS: [
    {
      source: "地理信息系统 · 考试模拟题",
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
      source: "地理信息系统 · 考试模拟题",
      question: "矢量数据更适合表达下列哪类对象？",
      options: [
        { id: "A", text: "连续变化的降雨量栅格" },
        { id: "B", text: "道路、站点、行政边界等离散地物" },
        { id: "C", text: "遥感影像的像元灰度" },
        { id: "D", text: "每个像元的温度值" },
      ],
      answer: "B",
      explanation: "矢量数据用点、线、面表达离散地物，适合道路、站点、边界等有明确位置或边界的对象。",
    },
  ],
  OR: [
    {
      source: "运筹学 · 考试模拟题",
      question: "线性规划中，约束条件的主要作用是什么？",
      options: [
        { id: "A", text: "确定变量允许取值所构成的可行域" },
        { id: "B", text: "决定答案必须保留几位小数" },
        { id: "C", text: "规定变量名称必须用英文" },
        { id: "D", text: "改变表格的显示颜色" },
      ],
      answer: "A",
      explanation: "约束条件限定决策变量的可行范围，目标函数则在可行域内寻找最优值。",
    },
    {
      source: "运筹学 · 考试模拟题",
      question: "对偶变量常被解释为什么？",
      options: [
        { id: "A", text: "资源的影子价格" },
        { id: "B", text: "随机误差项" },
        { id: "C", text: "样本编号" },
        { id: "D", text: "图表标题" },
      ],
      answer: "A",
      explanation: "对偶变量反映资源约束边际变化对目标函数值的影响，因此常解释为影子价格。",
    },
  ],
  TD: [
    {
      source: "交通大数据技术 · 考试模拟题",
      question: "交通大数据清洗中，识别异常速度记录的主要目的是什么？",
      options: [
        { id: "A", text: "降低传感器错误或定位漂移对分析结果的影响" },
        { id: "B", text: "让所有车辆速度完全相同" },
        { id: "C", text: "删除全部高峰期数据" },
        { id: "D", text: "缩短文件名称" },
      ],
      answer: "A",
      explanation: "异常速度可能来自设备故障、定位漂移或数据传输错误，清洗后能提高状态识别和预测模型可靠性。",
    },
    {
      source: "交通大数据技术 · 考试模拟题",
      question: "对车辆 GPS 轨迹做地图匹配的主要目的是什么？",
      options: [
        { id: "A", text: "把带误差的轨迹点关联到实际道路网络" },
        { id: "B", text: "删除所有时间戳" },
        { id: "C", text: "统计车辆颜色" },
        { id: "D", text: "隐藏道路拓扑结构" },
      ],
      answer: "A",
      explanation: "地图匹配将轨迹点匹配到道路网络，便于路径识别、速度估计和交通状态分析。",
    },
  ],
};

function currentCourseCodes() {
  if (courses[state.filter]) return [state.filter];
  const codes = getVisibleResources().map((item) => item.course);
  return codes.length ? [...new Set(codes)] : ["GIS", "OR", "TD"];
}

function quizLooksLikeResourceIndex(quiz) {
  const text = [
    quiz.source,
    quiz.question,
    quiz.explanation,
    ...(quiz.options || []).map((option) => option.text || ""),
  ].join(" ");
  return /资料|文件|路径|展示柜|来源说明|哪一套|第[一二三四五六七八九十0-9]+套|最新|生成版|AI生成|\.pdf|\/|\\|课程总结|复习题解答|复习试卷/.test(text);
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function formatFileSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function fileExtension(name) {
  return name.split(".").pop().toLowerCase();
}

function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file, "utf-8");
  });
}

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || "");
      resolve(result.includes(",") ? result.split(",")[1] : result);
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

async function createAttachment(file) {
  const ext = fileExtension(file.name);
  const attachment = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: file.name,
    type: file.type || "application/octet-stream",
    size: file.size,
    ext,
    text: "",
    base64: "",
    needsParsing: false,
  };

  if (file.type.startsWith("text/") || ["txt", "md", "csv", "json"].includes(ext)) {
    attachment.text = (await readFileAsText(file)).slice(0, 24000);
    return attachment;
  }

  if (ext === "pptx" && file.size <= 8 * 1024 * 1024) {
    attachment.base64 = await readFileAsBase64(file);
    attachment.needsParsing = true;
    return attachment;
  }

  attachment.needsParsing = true;
  return attachment;
}

function renderAgentFiles() {
  agentFiles.hidden = agentState.attachments.length === 0;
  agentFiles.innerHTML = agentState.attachments.map((file) => `
    <span class="agent-file" title="${escapeHtml(file.name)}">
      ${escapeHtml(file.name)} · ${formatFileSize(file.size)}
    </span>
  `).join("");
}

function setAgentStatus(text) {
  agentStatus.textContent = text;
}

function setAgentBusy(isBusy, statusText) {
  agentState.isBusy = isBusy;
  document.querySelector("#agentSend").disabled = isBusy;
  generateQuiz.disabled = isBusy;
  nextQuiz.disabled = isBusy;
  if (statusText) setAgentStatus(statusText);
}

function addAgentMessage(role, text) {
  const message = document.createElement("div");
  message.className = `agent-message ${role}`;
  message.textContent = text;
  agentMessages.append(message);
  agentMessages.scrollTop = agentMessages.scrollHeight;

  if (role === "user" || role === "assistant") {
    agentState.messages.push({ role, content: text });
    agentState.messages = agentState.messages.slice(-10);
  }
}

function seedAgentWelcome() {
  if (agentMessages.children.length) return;
  addAgentMessage("system", "我可以结合当前资料库、外部知识库和你上传的课件来回答，也可以点“自主出题”直接进入练习。");
}

function buildResourceContext() {
  const visible = getVisibleResources();
  const courseStats = Object.values(courses).map((course) => ({
    code: course.code,
    name: course.full,
    total: resources.filter((item) => item.course === course.code).length,
    papers: resources.filter((item) => item.course === course.code && item.type === "paper").length,
  }));

  return {
    filter: state.filter,
    query: state.query,
    visibleResources: visible.slice(0, 18).map((item) => ({
      course: courses[item.course].full,
      type: typeLabel(item.type),
      section: item.section,
      title: item.title,
      path: item.path,
    })),
    courseStats,
  };
}

function buildAgentPayload(prompt = "") {
  return {
    prompt,
    messages: agentState.messages,
    context: buildResourceContext(),
    attachments: agentState.attachments.map((file) => ({
      name: file.name,
      type: file.type,
      size: file.size,
      ext: file.ext,
      text: file.text,
      base64: file.base64,
      needsParsing: file.needsParsing,
    })),
  };
}

function localAgentReply(prompt) {
  const visible = getVisibleResources().slice(0, 6);
  const lines = visible.map((item, index) => `${index + 1}. ${courses[item.course].full}｜${typeLabel(item.type)}｜${item.title}`);
  return [
    "当前还没有连上后端大模型，我先按本地资料库给你一个可用建议：",
    lines.length ? lines.join("\n") : "当前筛选下没有资料，可以先切回“全部”。",
    "需要调用外部知识库时，启动本地服务并配置 LLM_API_KEY / EXTERNAL_KB_URL 即可。",
  ].join("\n\n");
}

async function callAgentApi(path, payload) {
  const response = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error(`Agent API ${response.status}`);
  return response.json();
}

async function sendAgentMessage(prompt) {
  const cleanPrompt = prompt.trim();
  if (!cleanPrompt || agentState.isBusy) return;

  addAgentMessage("user", cleanPrompt);
  agentInput.value = "";

  if (/出题|考我|测验|测试/.test(cleanPrompt)) {
    await generateAgentQuiz(cleanPrompt);
    return;
  }

  setAgentBusy(true, "正在调用知识库");
  try {
    const data = await callAgentApi("/api/agent/chat", buildAgentPayload(cleanPrompt));
    addAgentMessage("assistant", data.answer || "没有拿到有效回答。");
    setAgentStatus(data.status || "已连接");
  } catch {
    addAgentMessage("assistant", localAgentReply(cleanPrompt));
    setAgentStatus("本地模式");
  } finally {
    setAgentBusy(false);
  }
}

function createLocalQuiz(prompt = "") {
  const code = shuffle(currentCourseCodes())[0] || "GIS";
  const bank = clientExamQuestionBank[code] || clientExamQuestionBank.GIS;
  return shuffle(bank)[0];
}

function normalizeQuiz(rawQuiz) {
  const quiz = rawQuiz || createLocalQuiz();
  const ids = ["A", "B", "C", "D"];
  const options = (quiz.options || []).slice(0, 4).map((option, index) => {
    if (typeof option === "string") return { id: ids[index], text: option };
    return {
      id: String(option.id || ids[index]).trim().slice(0, 1).toUpperCase(),
      text: option.text || option.label || "",
    };
  }).filter((option) => option.text);

  const normalized = {
    source: quiz.source || "Agent 出题",
    question: String(quiz.question || "下面哪一项是正确的？").replace(/^题干[:：]\s*/, ""),
    options: options.length >= 2 ? options : createLocalQuiz().options,
    answer: answerId(quiz.answer || quiz.correctAnswer),
    explanation: quiz.explanation || "这道题来自当前资料库与知识库上下文。",
  };

  return quizLooksLikeResourceIndex(normalized) ? createLocalQuiz() : normalized;
}

function renderQuiz(rawQuiz) {
  const quiz = normalizeQuiz(rawQuiz);
  agentState.currentQuiz = quiz;
  agentQuiz.hidden = false;
  quizSource.textContent = quiz.source;
  quizQuestion.textContent = quiz.question;
  quizFeedback.hidden = true;
  quizFeedback.textContent = "";
  quizOptions.innerHTML = quiz.options.map((option) => `
    <button type="button" data-option="${escapeHtml(option.id)}">
      ${escapeHtml(option.id)}. ${escapeHtml(option.text)}
    </button>
  `).join("");
}

async function generateAgentQuiz(prompt = "请结合当前资料库、外部知识库和上传课件生成一道新的单选题。") {
  if (agentState.isBusy) return;
  agentQuiz.hidden = false;
  quizSource.textContent = "正在生成";
  quizQuestion.textContent = "Agent 正在出题...";
  quizOptions.innerHTML = "";
  quizFeedback.hidden = true;

  setAgentBusy(true, "正在生成题目");
  try {
    const data = await callAgentApi("/api/agent/quiz", buildAgentPayload(prompt));
    renderQuiz(data.quiz);
    setAgentStatus(data.status || "题目已生成");
  } catch {
    renderQuiz(createLocalQuiz(prompt));
    setAgentStatus("本地出题");
  } finally {
    setAgentBusy(false);
  }
}

function judgeQuizAnswer(button) {
  const quiz = agentState.currentQuiz;
  if (!quiz || quizFeedback.hidden === false) return;

  const selected = button.dataset.option;
  const answer = answerId(quiz.answer);
  const isCorrect = selected === answer;

  quizOptions.querySelectorAll("button").forEach((optionButton) => {
    optionButton.disabled = true;
    if (optionButton.dataset.option === answer) optionButton.classList.add("correct");
  });
  if (!isCorrect) button.classList.add("wrong");

  quizFeedback.hidden = false;
  quizFeedback.textContent = `${isCorrect ? "答对了。" : `答错了，正确答案是 ${answer}。`} ${quiz.explanation}`;
}

async function checkAgentHealth() {
  try {
    const response = await fetch(`${API_BASE}/api/health`);
    if (!response.ok) throw new Error("health check failed");
    const data = await response.json();
    if (data.modelConfigured && data.knowledgeBaseConfigured) {
      setAgentStatus(`大模型与知识库已连接：${data.model}`);
    } else if (data.modelConfigured) {
      setAgentStatus(`大模型已连接：${data.model}`);
    } else {
      setAgentStatus("本地模式");
    }
  } catch {
    setAgentStatus("本地模式");
  }
}

function bindTilt(event) {
  const card = event.target.closest(".tilt-card");
  if (!card || window.matchMedia("(max-width: 760px)").matches) return;
  const rect = card.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  card.style.transform = `perspective(800px) rotateX(${y * -4}deg) rotateY(${x * 5}deg) translateY(-3px)`;
}

function resetTilt(event) {
  const card = event.target.closest(".tilt-card");
  if (card) card.style.transform = "";
}

filters.addEventListener("click", (event) => {
  const chip = event.target.closest(".filter-chip");
  if (chip) setFilter(chip.dataset.filter);
});

courseGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".course-card");
  if (card) setFilter(card.dataset.course);
});

courseGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest(".course-card");
  if (card) setFilter(card.dataset.course);
});

searchInput.addEventListener("input", () => {
  state.query = searchInput.value;
  renderResources();
  refreshShowcase();
});

resourceGrid.addEventListener("click", (event) => {
  const canvas = event.target.closest(".resource-canvas");
  if (canvas && !canvas.classList.contains("empty")) {
    openShowcase(canvas.dataset.showcaseType);
  }
});

resourceGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const canvas = event.target.closest(".resource-canvas");
  if (!canvas || canvas.classList.contains("empty")) return;
  event.preventDefault();
  openShowcase(canvas.dataset.showcaseType);
});

showcaseGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const card = button.closest(".showcase-card");
  const item = resources.find((entry) => entry.id === card.dataset.id);
  if (!item) return;
  if (button.dataset.action === "preview") {
    openResourcePreview(item);
  }
});

closeShowcase.addEventListener("click", () => {
  showcaseDrawer.close();
});

showcaseDrawer.addEventListener("close", () => {
  state.showcaseType = null;
});

document.querySelector("#closePreview").addEventListener("click", () => {
  previewDialog.close();
});

previewDialog.addEventListener("close", () => {
  previewFrame.src = "about:blank";
});

copyPath.addEventListener("click", async () => {
  const path = copyPath.dataset.path || "";
  try {
    await navigator.clipboard.writeText(path);
    showToast("路径已复制");
  } catch {
    showToast(path);
  }
});

agentLauncher.addEventListener("click", () => {
  seedAgentWelcome();
  checkAgentHealth();
  if (typeof agentDialog.showModal === "function") {
    agentDialog.showModal();
    agentInput.focus();
  }
});

closeAgent.addEventListener("click", () => {
  agentDialog.close();
});

agentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  sendAgentMessage(agentInput.value);
});

agentInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || event.shiftKey || event.ctrlKey || event.altKey || event.metaKey) return;
  event.preventDefault();
  agentForm.requestSubmit();
});

document.querySelector(".agent-prompts").addEventListener("click", (event) => {
  const button = event.target.closest("[data-agent-prompt]");
  if (!button) return;
  sendAgentMessage(button.dataset.agentPrompt);
});

agentUpload.addEventListener("change", async () => {
  const files = [...agentUpload.files];
  if (!files.length) return;

  setAgentBusy(true, "正在读取上传资料");
  try {
    const attachments = await Promise.all(files.map((file) => createAttachment(file)));
    agentState.attachments.push(...attachments);
    renderAgentFiles();
    showToast(`已加入 ${attachments.length} 份资料`);
    setAgentStatus("上传资料已加入上下文");
  } catch {
    showToast("有资料读取失败");
    setAgentStatus("上传读取失败");
  } finally {
    agentUpload.value = "";
    setAgentBusy(false);
  }
});

generateQuiz.addEventListener("click", () => {
  generateAgentQuiz();
});

nextQuiz.addEventListener("click", () => {
  generateAgentQuiz("请换一个角度重新生成一道单选题，避免和上一题重复。");
});

quizOptions.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-option]");
  if (button) judgeQuizAnswer(button);
});

document.querySelector("#themeToggle").addEventListener("click", () => {
  const isDark = document.documentElement.dataset.theme === "dark";
  document.documentElement.dataset.theme = isDark ? "light" : "dark";
  localStorage.setItem("reviewHub.theme", document.documentElement.dataset.theme);
});

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
    searchInput.select();
  }
});

document.addEventListener("pointermove", bindTilt);
document.addEventListener("pointerleave", resetTilt, true);
document.addEventListener("pointerout", resetTilt);

const savedTheme = localStorage.getItem("reviewHub.theme");
if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
}

renderCourses();
renderResources();

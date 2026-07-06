const courses = {
  GIS: {
    code: "GIS",
    badge: "GIS",
    full: "地理信息系统",
    english: "Geographic Information System",
    color: "#236fd6",
    intro: "课件重点、逐页梳理和 6 套期末复习试卷。",
  },
  OR: {
    code: "OR",
    badge: "运筹",
    full: "运筹学",
    english: "Operations Research",
    color: "#108f75",
    intro: "复习笔记和 A-H 八套期末考试卷。",
  },
  TD: {
    code: "TD",
    badge: "交数",
    full: "交通大数据技术",
    english: "Traffic Big Data",
    color: "#e05f48",
    intro: "课程总结、复习题解答和 7 套生成版试卷。",
  },
  IV: {
    code: "IV",
    badge: "车联",
    full: "车联网技术",
    english: "Internet of Vehicles",
    color: "#5b68d8",
    intro: "重点总结、课件画图部分汇总和 6 套车联网试卷。",
  },
  MAO: {
    code: "MAO",
    badge: "毛概",
    full: "毛泽东思想与中国特色社会主义概论",
    english: "Chaiman's Wisdom",
    color: "#ba8b16",
    intro: "背诵重点、复习重点和期末题目先放在这里。",
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

  { id: "iv-summary-1", course: "IV", type: "summary", section: "总结", title: "车联网技术重点总结", path: "IV期末/总结/车联网技术重点总结.pdf" },
  { id: "iv-summary-2", course: "IV", type: "summary", section: "总结", title: "车联网课件画图部分汇总", path: "IV期末/总结/车联网课件画图部分汇总.pdf" },
  { id: "iv-paper-1", course: "IV", type: "paper", section: "试卷", title: "车联网技术复习试卷第一套", path: "IV期末/试卷/车联网1.pdf" },
  { id: "iv-paper-2", course: "IV", type: "paper", section: "试卷", title: "车联网技术复习试卷第二套", path: "IV期末/试卷/车联网2.pdf" },
  { id: "iv-paper-3", course: "IV", type: "paper", section: "试卷", title: "车联网技术复习试卷第三套", path: "IV期末/试卷/车联网3.pdf" },
  { id: "iv-paper-4", course: "IV", type: "paper", section: "试卷", title: "车联网技术复习试卷第四套", path: "IV期末/试卷/车联网4.pdf" },
  { id: "iv-paper-5", course: "IV", type: "paper", section: "试卷", title: "车联网技术复习试卷第五套", path: "IV期末/试卷/车联网5.pdf" },
  { id: "iv-paper-6", course: "IV", type: "paper", section: "试卷", title: "车联网技术复习试卷第六套", path: "IV期末/试卷/车联网6.pdf" },

  { id: "mao-summary-1", course: "MAO", type: "summary", section: "总结", title: "毛概重点背诵内容", path: "毛概期末/总结/毛概重点背诵内容.pdf" },
  { id: "mao-summary-2", course: "MAO", type: "summary", section: "总结", title: "毛概复习重点 2023", path: "毛概期末/总结/毛概复习重点2023.pdf" },
  { id: "mao-paper-1", course: "MAO", type: "paper", section: "题目", title: "毛概 2024 年 1 月期末题目", path: "毛概期末/题目/24年1月毛概.docx" },
  { id: "mao-paper-2", course: "MAO", type: "paper", section: "题目", title: "毛概 2024 年 6 月期末题目", path: "毛概期末/题目/246月.docx" },
];

const state = {
  selectedCourse: null,
  showcaseType: null,
  previewToken: 0,
};

const PDFJS_URL = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
const PDFJS_WORKER_URL = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
const MAMMOTH_URL = "https://cdn.jsdelivr.net/npm/mammoth@1.8.0/mammoth.browser.min.js";
const scriptLoads = new Map();

const courseGrid = document.querySelector("#courseGrid");
const courseDrawer = document.querySelector("#courseDrawer");
const closeCourseDrawer = document.querySelector("#closeCourseDrawer");
const courseDrawerTitle = document.querySelector("#courseDrawerTitle");
const courseDrawerMeta = document.querySelector("#courseDrawerMeta");
const courseDrawerStats = document.querySelector("#courseDrawerStats");
const courseDrawerGrid = document.querySelector("#courseDrawerGrid");
const toast = document.querySelector("#toast");
const previewDialog = document.querySelector("#previewDialog");
const previewBody = document.querySelector("#previewBody");
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

function typeLabel(type) {
  return type === "paper" ? "试卷" : "总结资料";
}

function typeIntro(type, course) {
  return type === "paper"
    ? `${course.full}的套卷与题目集中在这里，适合刷题和考前自测。`
    : `${course.full}的重点、笔记和复习总结集中在这里，适合先搭框架。`;
}

function getCourseItems(courseCode) {
  return resources.filter((item) => item.course === courseCode);
}

function getCourseItemsByType(courseCode, type) {
  return getCourseItems(courseCode).filter((item) => item.type === type);
}

function downloadName(item) {
  return item.path.split("/").pop();
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

function showDialog(dialog) {
  if (typeof dialog.showModal === "function" && !dialog.open) {
    dialog.showModal();
  }
}

function renderCourses() {
  courseGrid.innerHTML = Object.values(courses).map((course) => {
    const count = getCourseItems(course.code).length;
    const summaries = getCourseItemsByType(course.code, "summary").length;
    const papers = getCourseItemsByType(course.code, "paper").length;
    return `
      <article class="course-card tilt-card" style="--course-color:${course.color}" data-course="${course.code}" tabindex="0">
        <span class="course-code">${course.badge}</span>
        <small class="course-english">${course.english}</small>
        <h3>${course.full}</h3>
        <p>${course.intro}</p>
        <div class="course-meta">
          <span>${summaries} 份总结</span>
          <span>${papers} 套试卷</span>
          <span>${count} 份资料</span>
        </div>
      </article>
    `;
  }).join("");
}

function renderCourseDrawer(courseCode) {
  const course = courses[courseCode];
  const summaries = getCourseItemsByType(courseCode, "summary");
  const papers = getCourseItemsByType(courseCode, "paper");
  state.selectedCourse = courseCode;

  courseDrawerTitle.textContent = course.full;
  courseDrawerMeta.textContent = `${course.badge} / ${course.english}`;
  courseDrawerStats.innerHTML = `
    <span style="--course-color:${course.color}">${summaries.length} 份总结资料</span>
    <span style="--course-color:${course.color}">${papers.length} 套试卷</span>
  `;

  courseDrawerGrid.innerHTML = ["summary", "paper"].map((type) => {
    const items = getCourseItemsByType(courseCode, type);
    const isEmpty = items.length === 0;
    return `
      <article class="resource-canvas tilt-card ${isEmpty ? "empty" : ""}" style="--canvas-color:${type === "paper" ? "var(--coral)" : course.color}" data-showcase-type="${type}" ${isEmpty ? "" : 'tabindex="0"'} aria-label="${course.full}${typeLabel(type)}展示柜">
        <div class="canvas-top">
          <span>${typeLabel(type)}展示柜</span>
          <strong>${items.length}</strong>
        </div>
        <h3>${type === "paper" ? "试卷" : "总结资料"}</h3>
        <p>${typeIntro(type, course)}</p>
        <div class="canvas-courses">
          <span style="--course-color:${course.color}">${course.badge} ${items.length}</span>
        </div>
        <button class="canvas-open" type="button" ${isEmpty ? "disabled" : ""}>打开${typeLabel(type)}合集</button>
      </article>
    `;
  }).join("");
}

function openCourseDrawer(courseCode) {
  renderCourseDrawer(courseCode);
  showDialog(courseDrawer);
}

function renderShowcaseCard(item) {
  const course = courses[item.course];
  const href = encodeURI(item.path);
  return `
    <article class="showcase-card" style="--course-color:${course.color}" data-id="${item.id}">
      <div class="card-top">
        <span class="badge">${course.badge}</span>
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
  const course = courses[state.selectedCourse];
  const items = getCourseItemsByType(course.code, type);
  state.showcaseType = type;

  showcaseTitle.textContent = `${course.badge}${typeLabel(type)}合集`;
  showcaseMeta.textContent = `${course.full} / ${course.english}`;
  showcaseStats.innerHTML = `
    <span style="--course-color:${course.color}">${items.length} 份${typeLabel(type)}</span>
    <span style="--course-color:${course.color}">${course.full}</span>
  `;
  showcaseEmpty.hidden = items.length > 0;
  showcaseGrid.innerHTML = items.map(renderShowcaseCard).join("");
}

function openShowcase(type) {
  if (!state.selectedCourse) return;
  const course = courses[state.selectedCourse];
  if (!getCourseItemsByType(course.code, type).length) {
    showToast(`${course.full}暂时没有${typeLabel(type)}`);
    return;
  }
  renderShowcase(type);
  if (courseDrawer.open) {
    courseDrawer.close();
  }
  showDialog(showcaseDrawer);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1700);
}

function loadScript(src) {
  if (scriptLoads.has(src)) return scriptLoads.get(src);
  const load = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      existing.addEventListener("load", resolve, { once: true });
      existing.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`无法加载预览组件：${src}`));
    document.head.append(script);
  });
  scriptLoads.set(src, load);
  return load;
}

function setPreviewMessage(message, actionHref = "") {
  const safeHref = escapeHtml(actionHref);
  previewBody.innerHTML = `
    <div class="preview-message">
      <p>${message}</p>
      ${safeHref ? `<a href="${safeHref}" target="_blank" rel="noreferrer">新窗口打开</a>` : ""}
    </div>
  `;
}

function previewExtension(path) {
  return path.split("?")[0].split(".").pop().toLowerCase();
}

function isCurrentPreview(token) {
  return token === state.previewToken && previewDialog.open;
}

async function renderPdfPreview(href, token) {
  setPreviewMessage("正在加载 PDF 预览");
  await loadScript(PDFJS_URL);
  if (!isCurrentPreview(token)) return;

  const pdfLibrary = window.pdfjsLib;
  if (!pdfLibrary) throw new Error("PDF 预览组件不可用");
  pdfLibrary.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_URL;
  const loadingTask = pdfLibrary.getDocument(href);
  const pdf = await loadingTask.promise;
  if (!isCurrentPreview(token)) return;

  previewBody.innerHTML = "";
  const pageCount = document.createElement("div");
  pageCount.className = "preview-count";
  pageCount.textContent = `${pdf.numPages} 页`;
  previewBody.append(pageCount);

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    if (!isCurrentPreview(token)) return;
    const page = await pdf.getPage(pageNumber);
    if (!isCurrentPreview(token)) return;

    const wrapper = document.createElement("figure");
    wrapper.className = "pdf-page";

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const baseViewport = page.getViewport({ scale: 1 });
    const availableWidth = Math.max(280, Math.min(previewBody.clientWidth - 28, 920));
    const scale = Math.min(2, availableWidth / baseViewport.width);
    const viewport = page.getViewport({ scale });
    const outputScale = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.floor(viewport.width * outputScale);
    canvas.height = Math.floor(viewport.height * outputScale);
    canvas.style.width = `${Math.floor(viewport.width)}px`;
    canvas.style.height = `${Math.floor(viewport.height)}px`;
    context.setTransform(outputScale, 0, 0, outputScale, 0, 0);

    const caption = document.createElement("figcaption");
    caption.textContent = `第 ${pageNumber} 页`;
    wrapper.append(canvas, caption);
    previewBody.append(wrapper);

    await page.render({ canvasContext: context, viewport }).promise;
  }
}

async function renderDocxPreview(href, token) {
  setPreviewMessage("正在加载 Word 预览");
  await loadScript(MAMMOTH_URL);
  if (!window.mammoth) throw new Error("Word 预览组件不可用");
  const response = await fetch(href);
  if (!response.ok) throw new Error("文件读取失败");

  const arrayBuffer = await response.arrayBuffer();
  if (!isCurrentPreview(token)) return;

  const result = await window.mammoth.convertToHtml({ arrayBuffer });
  if (!isCurrentPreview(token)) return;

  previewBody.innerHTML = `
    <article class="docx-preview">
      ${result.value || "<p>这个文档暂时没有可显示的文本内容。</p>"}
    </article>
  `;
}

async function renderPreview(item, href, token) {
  try {
    const extension = previewExtension(item.path);
    if (extension === "pdf") {
      await renderPdfPreview(href, token);
      return;
    }

    if (extension === "docx") {
      await renderDocxPreview(href, token);
      return;
    }

    setPreviewMessage("这个文件类型暂时不支持站内预览，可以用新窗口打开。", href);
  } catch {
    if (isCurrentPreview(token)) {
      setPreviewMessage("预览加载失败，可以用新窗口打开或下载查看。", href);
    }
  }
}

function openResourcePreview(item) {
  const course = courses[item.course];
  const href = encodeURI(item.path);
  const token = state.previewToken + 1;
  state.previewToken = token;
  previewTitle.textContent = item.title;
  previewCourse.textContent = `${course.full} / ${typeLabel(item.type)}`;
  setPreviewMessage("正在准备预览");
  openPreview.href = href;
  downloadPreview.href = href;
  downloadPreview.setAttribute("download", downloadName(item));
  copyPath.dataset.path = item.path;
  if (typeof previewDialog.showModal === "function") {
    showDialog(previewDialog);
  } else {
    previewDialog.setAttribute("open", "");
  }
  renderPreview(item, href, token);
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

courseGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".course-card");
  if (card) openCourseDrawer(card.dataset.course);
});

courseGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest(".course-card");
  if (!card) return;
  event.preventDefault();
  openCourseDrawer(card.dataset.course);
});

courseDrawerGrid.addEventListener("click", (event) => {
  const canvas = event.target.closest(".resource-canvas");
  if (canvas && !canvas.classList.contains("empty")) {
    openShowcase(canvas.dataset.showcaseType);
  }
});

courseDrawerGrid.addEventListener("keydown", (event) => {
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
  if (item && button.dataset.action === "preview") {
    openResourcePreview(item);
  }
});

closeCourseDrawer.addEventListener("click", () => {
  courseDrawer.close();
});

courseDrawer.addEventListener("close", () => {
  if (!state.showcaseType && !showcaseDrawer.open) {
    state.selectedCourse = null;
  }
});

closeShowcase.addEventListener("click", () => {
  showcaseDrawer.close();
});

showcaseDrawer.addEventListener("close", () => {
  state.showcaseType = null;
  if (state.selectedCourse) {
    showDialog(courseDrawer);
  }
});

document.querySelector("#closePreview").addEventListener("click", () => {
  if (typeof previewDialog.close === "function") {
    previewDialog.close();
  } else {
    previewDialog.removeAttribute("open");
    state.previewToken += 1;
    previewBody.innerHTML = '<div class="preview-message">正在准备预览</div>';
  }
});

previewDialog.addEventListener("close", () => {
  state.previewToken += 1;
  previewBody.innerHTML = '<div class="preview-message">正在准备预览</div>';
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

document.querySelector("#themeToggle").addEventListener("click", () => {
  const isDark = document.documentElement.dataset.theme === "dark";
  document.documentElement.dataset.theme = isDark ? "light" : "dark";
  localStorage.setItem("reviewHub.theme", document.documentElement.dataset.theme);
});

document.addEventListener("pointermove", bindTilt);
document.addEventListener("pointerleave", resetTilt, true);
document.addEventListener("pointerout", resetTilt);

const savedTheme = localStorage.getItem("reviewHub.theme");
if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
}

renderCourses();

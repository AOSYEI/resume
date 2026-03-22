const resumeData = {
  profile: {
    name: "谢锦标",
    role: "前端开发工程师 / Web Engineer",
    summary:
      "专注构建清晰、稳定且易维护的 Web 界面体验，关注组件设计、性能优化与业务可交付性。当前版本使用占位信息搭建页面结构，后续可直接替换为你的真实经历、项目与联系方式。",
    avatarSrc: "assets/identification.jpg",
    avatarFallback: "assets/identification.jpg",
    avatarAlt: "职业头像占位图",
    location: "上海 · 可远程 / 可到岗面谈",
    availability: "目前开放面试与项目沟通",
    tags: ["前端开发", "组件化思维", "用户体验", "工程化协作"],
    metrics: [
      { value: "6+", label: "项目案例占位" },
      { value: "3+", label: "核心技术方向" },
      { value: "100%", label: "可替换真实内容" },
    ],
    note: "下载简历按钮默认指向 assets/resume.pdf；添加文件并将 available 改为 true 后即可启用。",
    resume: {
      file: "assets/resume.pdf",
      available: false,
    },
  },
  about: {
    description:
      "我倾向于用简洁可靠的方式完成前端页面与交互实现，重视信息结构、视觉秩序与细节打磨。在团队协作中，我关注需求拆解、组件复用、可维护性和上线质量，适合承担企业官网、后台系统、活动页或产品展示类页面的开发工作。",
    facts: [
      { label: "目标岗位", value: "前端开发工程师" },
      { label: "工作风格", value: "简洁、专业、可交付" },
      { label: "擅长方向", value: "响应式页面 / 组件化开发" },
      { label: "协作偏好", value: "重视沟通与文档沉淀" },
    ],
    highlights: [
      {
        title: "结构清晰",
        text: "善于将复杂内容拆为清晰模块，让页面既有层次又便于快速浏览。",
      },
      {
        title: "体验导向",
        text: "在视觉统一、交互反馈、可读性与移动端适配之间保持平衡。",
      },
      {
        title: "可维护性",
        text: "偏好语义化结构、统一样式规范与可复用的数据驱动渲染方式。",
      },
    ],
  },
  experience: [
    {
      company: "某互联网产品团队（占位）",
      role: "前端开发工程师",
      period: "2024.03 - 至今",
      location: "上海",
      summary: "负责业务后台与官网页面的迭代开发，推进组件复用与页面规范统一。",
      bullets: [
        "参与中后台模块开发与重构，提升页面可维护性与信息展示效率。",
        "与产品、设计协作落地多个业务需求，关注交互一致性与响应式体验。",
        "沉淀通用 UI 结构和页面模板，降低后续页面开发成本。",
      ],
      stack: ["HTML5", "CSS3", "JavaScript", "Vue / React（可替换）"],
    },
    {
      company: "某企业数字化项目（占位）",
      role: "Web 前端开发",
      period: "2022.07 - 2024.02",
      location: "杭州",
      summary: "聚焦多端适配与企业展示类页面开发，参与多个专题页与管理页面交付。",
      bullets: [
        "独立完成页面切图、样式搭建与交互实现，保证跨端一致性。",
        "优化公共样式与表单交互细节，提升页面完成度与使用体验。",
        "配合后端完成接口联调和页面状态处理，确保提测与上线节奏稳定。",
      ],
      stack: ["JavaScript", "Sass", "REST API", "Git"],
    },
    {
      company: "湖南工业大学",
      role: "数字媒体技术",
      period: "2021.09 - 2025.06",
      location: "湖南·株洲",
      summary: "2025届湖南省普通高等学校优秀毕业生（2/76）",
      bullets: [
        "完成多种单页展示站与简历页面练习，提升信息分层与视觉排版能力。",
        "尝试使用原生 JavaScript 组织数据渲染，减少重复结构维护成本。",
        "持续整理代码片段与页面模板，为后续真实项目复用做准备。",
      ],
      stack: ["HTML", "CSS", "JavaScript", "响应式设计"],
    },
  ],
  projects: [
    {
      name: "企业官网改版项目（占位）",
      role: "前端负责人 / 页面主开发",
      period: "8 周交付",
      summary:
        "围绕品牌升级需求，重构官网首页与多模块信息架构，提升专业感和页面转化承接能力。",
      highlights: [
        "重新组织首屏、产品模块、案例展示和联系区域的信息优先级。",
        "建立统一按钮、卡片、区块标题和色彩规范，减少页面风格分散问题。",
        "兼顾桌面端视觉表现与移动端可读性，保持单页滚动体验流畅。",
      ],
      stack: ["HTML5", "CSS3", "JavaScript", "响应式布局"],
      links: [
        { label: "联系我了解更多", href: "#contact" },
        { label: "源码链接待补充", href: "#", disabled: true },
      ],
    },
    {
      name: "数据看板页面（占位）",
      role: "前端开发",
      period: "持续迭代",
      summary:
        "为内部管理场景搭建可扩展页面布局，聚焦信息层次、模块复用与交互反馈。",
      highlights: [
        "使用可复用卡片和列表结构快速搭建新页面。",
        "统一表格、筛选、状态标签等组件样式，降低迭代成本。",
        "针对小屏设备调整布局与间距，确保核心信息优先展示。",
      ],
      stack: ["组件化", "工程化协作", "UI 规范"],
      links: [{ label: "项目说明待补充", href: "#", disabled: true }],
    },
    {
      name: "个人作品展示页（占位）",
      role: "独立设计与开发",
      period: "个人练习",
      summary:
        "通过单页作品展示个人介绍、项目与技能，强调简洁专业风格与快速阅读体验。",
      highlights: [
        "将内容集中管理，便于后续替换真实文案与资源。",
        "加入吸顶导航、滚动高亮、回到顶部等实用交互。",
        "在无需框架的前提下保持结构整洁，适合快速部署与投递展示。",
      ],
      stack: ["原生 HTML/CSS/JS", "IntersectionObserver", "可访问性"],
      links: [{ label: "当前页面即示例", href: "#home" }],
    },
  ],
  skills: [
    {
      category: "前端基础",
      description: "偏重页面语义、布局系统、交互细节与浏览器兼容性。",
      items: ["HTML5", "CSS3", "Flexbox", "Grid", "JavaScript ES6+", "响应式设计"],
    },
    {
      category: "工程与协作",
      description: "关注可维护性、模块复用、版本管理和多人协作效率。",
      items: ["Git", "组件拆分", "代码规范", "需求拆解", "接口联调", "文档沉淀"],
    },
    {
      category: "框架经验",
      description: "可根据真实经历替换为熟悉的框架与生态工具链。",
      items: ["Vue", "React", "Vite", "Sass", "状态管理", "路由组织"],
    },
    {
      category: "软技能",
      description: "适配技术岗位简历中同样重要的沟通与交付能力。",
      items: ["沟通协作", "时间管理", "问题定位", "细节意识", "学习能力", "结果导向"],
    },
  ],
  contact: {
    intro:
      "如果你正在寻找一位能兼顾页面质量、交互体验与交付效率的前端开发者，欢迎通过以下方式联系我。当前均为占位信息，可替换为你的真实邮箱、手机号、GitHub 或作品链接。",
    items: [
      { label: "邮箱", value: "hello@example.com", href: "mailto:hello@example.com" },
      { label: "手机号", value: "+86 138 0000 0000", href: "tel:+8613800000000" },
      { label: "GitHub", value: "github.com/yourname", href: "https://github.com/yourname" },
      { label: "作品集", value: "your-portfolio.com", href: "https://your-portfolio.com" },
    ],
    note: "提示：将真实简历文件放入 assets/resume.pdf，并把 main.js 中的 resume.available 改为 true，即可启用下载按钮。",
  },
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const byId = (id) => document.getElementById(id);

function createChip(text) {
  const span = document.createElement("span");
  span.className = "chip";
  span.textContent = text;
  return span;
}

function renderHero() {
  byId("hero-name").textContent = resumeData.profile.name;
  byId("hero-role").textContent = resumeData.profile.role;
  byId("hero-summary").textContent = resumeData.profile.summary;
  byId("hero-location").textContent = resumeData.profile.location;
  byId("hero-availability").textContent = resumeData.profile.availability;
  byId("hero-note").textContent = resumeData.profile.note;

  const avatar = byId("hero-avatar");
  avatar.src = resumeData.profile.avatarSrc;
  avatar.alt = resumeData.profile.avatarAlt;
  avatar.addEventListener("error", () => {
    if (avatar.dataset.fallbackApplied === "true") return;
    avatar.dataset.fallbackApplied = "true";
    avatar.src = resumeData.profile.avatarFallback;
  });

  const tags = byId("hero-tags");
  resumeData.profile.tags.forEach((tag) => tags.appendChild(createChip(tag)));

  const metrics = byId("hero-metrics");
  resumeData.profile.metrics.forEach((item) => {
    const card = document.createElement("article");
    card.className = "metric-card";
    card.innerHTML = `
      <span class="metric-value">${item.value}</span>
      <span class="metric-label">${item.label}</span>
    `;
    metrics.appendChild(card);
  });

  const resumeAction = byId("resume-action");
  resumeAction.setAttribute("href", resumeData.profile.resume.file);

  if (resumeData.profile.resume.available) {
    resumeAction.setAttribute("download", "");
    resumeAction.removeAttribute("aria-disabled");
    resumeAction.classList.remove("is-disabled");
    resumeAction.tabIndex = 0;
  } else {
    resumeAction.removeAttribute("download");
    resumeAction.setAttribute("aria-disabled", "true");
    resumeAction.classList.add("is-disabled");
    resumeAction.tabIndex = -1;
  }
}

function renderAbout() {
  byId("about-text").textContent = resumeData.about.description;

  const facts = byId("about-facts");
  resumeData.about.facts.forEach((item) => {
    const wrapper = document.createElement("div");
    wrapper.className = "fact-item";
    wrapper.innerHTML = `<dt>${item.label}</dt><dd>${item.value}</dd>`;
    facts.appendChild(wrapper);
  });

  const highlights = byId("about-highlights");
  resumeData.about.highlights.forEach((item) => {
    const card = document.createElement("article");
    card.className = "highlight-card reveal";
    card.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p>`;
    highlights.appendChild(card);
  });
}

function renderExperience() {
  const list = byId("experience-list");

  resumeData.experience.forEach((item) => {
    const card = document.createElement("article");
    card.className = "timeline-item reveal";
    card.innerHTML = `
      <div class="timeline-top">
        <div>
          <h3>${item.company}</h3>
          <p class="timeline-role">${item.role}</p>
        </div>
        <p class="timeline-meta">${item.period} · ${item.location}</p>
      </div>
      <p class="timeline-summary">${item.summary}</p>
      <ul class="timeline-list">
        ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
      </ul>
      <div class="chip-list">
        ${item.stack.map((tech) => `<span class="chip">${tech}</span>`).join("")}
      </div>
    `;
    list.appendChild(card);
  });
}

function renderProjects() {
  const list = byId("projects-list");

  resumeData.projects.forEach((item) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";

    const linksHtml = item.links
      .map((link) => {
        const classes = ["inline-link"];
        const attrs = [];

        if (link.disabled) {
          classes.push("is-disabled");
          attrs.push('aria-disabled="true"');
        } else if (link.href.startsWith("http")) {
          attrs.push('target="_blank" rel="noreferrer"');
        }

        return `<a class="${classes.join(" ")}" href="${link.href}" ${attrs.join(" ")}>${link.label}</a>`;
      })
      .join("");

    card.innerHTML = `
      <div class="project-top">
        <div>
          <h3>${item.name}</h3>
          <p class="project-role">${item.role}</p>
        </div>
        <p class="project-meta">${item.period}</p>
      </div>
      <p class="project-summary">${item.summary}</p>
      <ul class="project-list">
        ${item.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}
      </ul>
      <div class="chip-list">
        ${item.stack.map((tech) => `<span class="chip">${tech}</span>`).join("")}
      </div>
      <div class="project-links">${linksHtml}</div>
    `;

    list.appendChild(card);
  });
}

function renderSkills() {
  const wrapper = byId("skills-groups");

  resumeData.skills.forEach((group) => {
    const card = document.createElement("article");
    card.className = "skill-group reveal";
    card.innerHTML = `
      <h3>${group.category}</h3>
      <p>${group.description}</p>
      <div class="chip-list">
        ${group.items.map((item) => `<span class="chip">${item}</span>`).join("")}
      </div>
    `;
    wrapper.appendChild(card);
  });
}

function renderContact() {
  byId("contact-intro").textContent = resumeData.contact.intro;
  byId("contact-note").textContent = resumeData.contact.note;

  const list = byId("contact-list");
  resumeData.contact.items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "contact-row";
    card.innerHTML = `
      <h3>${item.label}</h3>
      <p><a href="${item.href}" ${item.href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>${item.value}</a></p>
    `;
    list.appendChild(card);
  });

  byId("footer-note").textContent = `© ${new Date().getFullYear()} ${resumeData.profile.name} · 单页简历展示`;
}

function setupNavigation() {
  const toggle = byId("nav-toggle");
  const nav = byId("site-nav");
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));

  const closeMenu = () => {
    nav.classList.remove("is-open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "打开导航菜单");
    document.body.classList.remove("menu-open");
  };

  const openMenu = () => {
    nav.classList.add("is-open");
    toggle.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "关闭导航菜单");
    document.body.classList.add("menu-open");
  };

  toggle.addEventListener("click", () => {
    if (nav.classList.contains("is-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 820) closeMenu();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (window.innerWidth > 820 || !nav.classList.contains("is-open")) return;
    if (nav.contains(event.target) || toggle.contains(event.target)) return;
    closeMenu();
  });

  const sections = Array.from(document.querySelectorAll("[data-section]"));
  const navObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (!visibleEntries.length) return;
      const activeId = visibleEntries[0].target.id;

      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${activeId}`;
        link.classList.toggle("is-active", isActive);
        if (isActive) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    },
    {
      rootMargin: "-35% 0px -45% 0px",
      threshold: [0.15, 0.3, 0.55],
    }
  );

  sections.forEach((section) => navObserver.observe(section));
}

function setupReveal() {
  const revealElements = Array.from(document.querySelectorAll(".reveal"));

  if (prefersReducedMotion) {
    revealElements.forEach((element) => element.classList.add("visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

function setupBackToTop() {
  const button = byId("back-to-top");

  const syncVisibility = () => {
    button.classList.toggle("is-visible", window.scrollY > 520);
  };

  syncVisibility();
  window.addEventListener("scroll", syncVisibility, { passive: true });

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  });
}

function init() {
  renderHero();
  renderAbout();
  renderExperience();
  renderProjects();
  renderSkills();
  renderContact();
  setupNavigation();
  setupReveal();
  setupBackToTop();
}

document.addEventListener("DOMContentLoaded", init);

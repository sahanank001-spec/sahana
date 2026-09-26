/* ============================================================
   PORTFOLIO INTERACTIONS
   Students rarely edit this — except the ROTATING_ROLES list.
   ============================================================ */

// ✏️ EDIT: words that rotate after "A ..." in the hero
const ROTATING_ROLES = [
  "Web Developer",
  "Problem Solver",
  "Open-Source Fan",
  "Lifelong Learner",
];

/* ---------- rotating role text ---------- */
(function rotateRoles() {
  const el = document.getElementById("rotate");
  if (!el || ROTATING_ROLES.length === 0) return;
  let i = 0;
  setInterval(() => {
    i = (i + 1) % ROTATING_ROLES.length;
    el.style.opacity = 0;
    setTimeout(() => { el.textContent = ROTATING_ROLES[i]; el.style.opacity = 1; }, 250);
  }, 2200);
})();

/* ---------- theme toggle (remembers choice) ---------- */
(function themeToggle() {
  const btn = document.getElementById("themeBtn");
  const root = document.documentElement;
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const start = saved || (prefersLight ? "light" : "dark");
  root.setAttribute("data-theme", start);
  if (btn) btn.textContent = start === "dark" ? "☀️" : "🌙";
  btn && btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    btn.textContent = next === "dark" ? "☀️" : "🌙";
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
})();

/* ---------- mobile menu ---------- */
(function mobileMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const links = document.getElementById("navLinks");
  if (!menuBtn || !links) return;
  menuBtn.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
})();

/* ---------- navbar shadow + scroll progress + back-to-top ---------- */
(function onScrollFx() {
  const nav = document.getElementById("nav");
  const bar = document.getElementById("scrollProgress");
  const toTop = document.getElementById("toTop");
  const run = () => {
    const y = window.scrollY;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    if (nav) nav.classList.toggle("scrolled", y > 8);
    if (bar) bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    if (toTop) toTop.classList.toggle("show", y > 500);
  };
  window.addEventListener("scroll", run, { passive: true });
  run();
  toTop && toTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
})();

/* ---------- mouse spotlight ---------- */
(function spotlight() {
  const sp = document.getElementById("spotlight");
  if (!sp || window.matchMedia("(pointer: coarse)").matches) return;
  window.addEventListener("mousemove", (e) => {
    sp.style.setProperty("--mx", e.clientX + "px");
    sp.style.setProperty("--my", e.clientY + "px");
  }, { passive: true });
})();

/* ---------- 3D tilt on profile card ---------- */
(function tilt() {
  const card = document.getElementById("tilt");
  if (!card || window.matchMedia("(pointer: coarse)").matches) return;
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg)`;
  });
  card.addEventListener("mouseleave", () => (card.style.transform = ""));
})();

/* ---------- animated stat counters ---------- */
(function counters() {
  const nums = document.querySelectorAll("[data-count]");
  if (!nums.length) return;
  const animate = (el) => {
    const target = parseFloat(el.getAttribute("data-count")) || 0;
    const suffix = el.getAttribute("data-suffix") || "";
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const tick = () => {
      cur += step;
      if (cur >= target) { el.textContent = target + suffix; }
      else { el.textContent = cur + suffix; requestAnimationFrame(tick); }
    };
    tick();
  };
  if (!("IntersectionObserver" in window)) { nums.forEach(animate); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); } });
  }, { threshold: 0.5 });
  nums.forEach((n) => io.observe(n));
})();

/* ---------- reveal sections on scroll ---------- */
(function scrollReveal() {
  const items = document.querySelectorAll(".section");
  items.forEach((el) => el.classList.add("reveal"));
  if (!("IntersectionObserver" in window)) { items.forEach((el) => el.classList.add("show")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  items.forEach((el) => io.observe(el));
})();

/* ---------- active nav link (scrollspy) ---------- */
(function scrollSpy() {
  const links = Array.from(document.querySelectorAll(".nav-links a"));
  const map = {};
  links.forEach((a) => { const id = a.getAttribute("href").slice(1); if (id) map[id] = a; });
  const sections = Object.keys(map).map((id) => document.getElementById(id)).filter(Boolean);
  if (!sections.length || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        links.forEach((l) => l.classList.remove("active"));
        map[e.target.id] && map[e.target.id].classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => io.observe(s));
})();

/* ---------- contact form (Formspree, no page reload) ---------- */
(function contactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (!form) return;
  form.addEventListener("submit", async (e) => {
    // If the Formspree URL hasn't been set, fall back to opening email.
    if (form.action.includes("your-id")) {
      e.preventDefault();
      show("⚠️ Set your Formspree URL in index.html to receive messages.", "err");
      return;
    }
    e.preventDefault();
    show("Sending…", "");
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) { show("✅ Thanks! Your message was sent.", "ok"); form.reset(); }
      else { show("❌ Something went wrong. Try again.", "err"); }
    } catch (err) { show("❌ Network error. Try again.", "err"); }
  });
  function show(msg, kind) {
    if (!status) return;
    status.textContent = msg;
    status.className = "form-status " + kind;
    status.hidden = false;
  }
})();

/* ---------- current year ---------- */
(function year() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

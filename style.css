/* ============================================================
   PORTFOLIO STYLES  ·  dark-first, premium
   ✏️  Re-skin everything by editing --accent-1 / --accent-2.
   ============================================================ */

:root {
  /* 🎨 EDIT THESE two to re-brand the whole site */
  --accent-1: #7c5cff;   /* main brand color  */
  --accent-2: #22d3ee;   /* gradient partner  */

  /* dark theme = default */
  --bg:      #08070f;
  --bg-2:    #0e0c18;
  --surface: #14111f;
  --surface-2: #1b1730;
  --text:    #f3f1fb;
  --muted:   #9c96b8;
  --line:    rgba(255,255,255,.09);
  --line-2:  rgba(255,255,255,.14);
  --chip:    rgba(255,255,255,.05);
  --glass:   rgba(24,20,40,.55);

  --radius: 18px;
  --shadow: 0 20px 60px rgba(0,0,0,.45);
  --glow:   0 0 40px rgba(124,92,255,.35);
  --max: 1120px;

  --font-display: 'Sora', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', ui-monospace, monospace;

  color-scheme: dark;
}

/* ☀️ light theme */
[data-theme="light"] {
  --bg:      #f6f5fb;
  --bg-2:    #eeecf7;
  --surface: #ffffff;
  --surface-2: #f4f2fc;
  --text:    #17131f;
  --muted:   #5c5772;
  --line:    rgba(20,10,40,.10);
  --line-2:  rgba(20,10,40,.16);
  --chip:    rgba(124,92,255,.07);
  --glass:   rgba(255,255,255,.7);
  --shadow:  0 18px 50px rgba(80,50,140,.13);
  color-scheme: light;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  position: relative;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }

.container { max-width: var(--max); margin: 0 auto; padding: 0 24px; }
.center { text-align: center; }
.muted { color: var(--muted); }
.small { font-size: .85rem; }

/* ---------- background layers ---------- */
.bg-aurora, .bg-grid, .spotlight { position: fixed; inset: 0; z-index: -1; pointer-events: none; }
.bg-aurora {
  background:
    radial-gradient(45% 45% at 15% 8%,  color-mix(in srgb, var(--accent-1) 55%, transparent), transparent 70%),
    radial-gradient(40% 40% at 85% 15%, color-mix(in srgb, var(--accent-2) 45%, transparent), transparent 70%),
    radial-gradient(50% 50% at 60% 95%, color-mix(in srgb, var(--accent-1) 30%, transparent), transparent 70%);
  filter: blur(30px);
  opacity: .55;
  animation: drift 16s ease-in-out infinite alternate;
}
[data-theme="light"] .bg-aurora { opacity: .35; }
@keyframes drift {
  0%   { transform: translate3d(0,0,0) scale(1); }
  100% { transform: translate3d(0,-4%,0) scale(1.1); }
}
.bg-grid {
  background-image:
    linear-gradient(var(--line) 1px, transparent 1px),
    linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size: 46px 46px;
  mask-image: radial-gradient(circle at 50% 0%, #000 30%, transparent 80%);
  opacity: .5;
}
/* mouse-follow spotlight */
.spotlight {
  background: radial-gradient(300px circle at var(--mx, 50%) var(--my, 0%),
              color-mix(in srgb, var(--accent-1) 22%, transparent), transparent 70%);
  transition: background .2s ease;
}

/* ---------- scroll progress ---------- */
.scroll-progress {
  position: fixed; top: 0; left: 0; height: 3px; width: 0;
  background: linear-gradient(90deg, var(--accent-1), var(--accent-2));
  z-index: 100; box-shadow: var(--glow);
}

/* ---------- shared type ---------- */
.tag {
  font-family: var(--font-mono);
  font-size: .78rem; letter-spacing: .12em; text-transform: uppercase;
  color: var(--accent-2); font-weight: 500;
  display: inline-flex; align-items: center; gap: .6em;
}
.tag.center { justify-content: center; }
.tag-num {
  font-weight: 700; color: var(--accent-1);
  border: 1px solid var(--line-2); border-radius: 6px; padding: 2px 7px; font-size: .72rem;
}
.section-title {
  font-family: var(--font-display); font-weight: 800;
  font-size: clamp(1.9rem, 4.2vw, 2.8rem); letter-spacing: -.02em; margin: 10px 0 30px;
}
.gradient-text, .rotate {
  background: linear-gradient(120deg, var(--accent-1), var(--accent-2));
  -webkit-background-clip: text; background-clip: text; color: transparent;
}

/* ---------- buttons ---------- */
.btn {
  display: inline-flex; align-items: center; gap: .5em;
  font-family: var(--font-display); font-weight: 600; font-size: .95rem;
  padding: 12px 24px; border-radius: 999px; border: 1px solid transparent; cursor: pointer;
  transition: transform .15s ease, box-shadow .25s ease, background .2s;
}
.btn:hover { transform: translateY(-2px); }
.btn-primary {
  background: linear-gradient(120deg, var(--accent-1), var(--accent-2));
  color: #fff; box-shadow: 0 10px 30px rgba(124,92,255,.4);
}
.btn-primary:hover { box-shadow: 0 14px 40px rgba(124,92,255,.55); }
.btn-ghost { background: var(--glass); border-color: var(--line-2); color: var(--text); backdrop-filter: blur(8px); }
.btn.big { padding: 15px 32px; font-size: 1.02rem; }

/* ---------- navbar ---------- */
.nav {
  position: sticky; top: 12px; z-index: 60;
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 18px; max-width: var(--max); margin: 12px auto 0;
  background: var(--glass); backdrop-filter: blur(16px) saturate(1.4);
  border: 1px solid var(--line); border-radius: 999px;
  transition: box-shadow .3s, border-color .3s;
}
.nav.scrolled { box-shadow: var(--shadow); border-color: var(--line-2); }
.logo span {
  font-family: var(--font-display); font-weight: 800; font-size: 1.15rem;
  border: 2px solid transparent;
  background: linear-gradient(var(--surface), var(--surface)) padding-box,
              linear-gradient(120deg, var(--accent-1), var(--accent-2)) border-box;
  border-radius: 12px; padding: 4px 11px; display: inline-block;
}
.nav-links { display: flex; gap: 8px; }
.nav-links a {
  font-weight: 500; font-size: .92rem; color: var(--muted);
  padding: 8px 14px; border-radius: 999px; transition: color .2s, background .2s;
}
.nav-links a:hover { color: var(--text); background: var(--chip); }
.nav-links a.active { color: var(--text); background: var(--chip); }
.nav-right { display: flex; gap: 8px; align-items: center; }
.icon-btn {
  width: 40px; height: 40px; border-radius: 12px; border: 1px solid var(--line-2);
  background: var(--chip); color: var(--text); font-size: 1.1rem; cursor: pointer;
  transition: border-color .2s, transform .15s;
}
.icon-btn:hover { border-color: var(--accent-1); transform: translateY(-1px); }
.menu-btn { display: none; }

/* ---------- hero ---------- */
.hero { max-width: var(--max); margin: 0 auto; padding: clamp(40px,7vh,80px) 24px 0; }
.hero-inner {
  display: grid; grid-template-columns: 1.25fr .75fr; gap: 48px; align-items: center;
  min-height: 62vh;
}
.hero-left { max-width: 620px; }
.status-badge {
  display: inline-flex; align-items: center; gap: .55em;
  font-family: var(--font-mono); font-size: .78rem; color: var(--text);
  background: var(--chip); border: 1px solid var(--line-2); border-radius: 999px;
  padding: 6px 14px; margin-bottom: 22px;
}
.ping { width: 8px; height: 8px; border-radius: 50%; background: #2fd47a; box-shadow: 0 0 0 0 rgba(47,212,122,.6); animation: ping 1.8s infinite; }
@keyframes ping { 0%{box-shadow:0 0 0 0 rgba(47,212,122,.55)} 70%{box-shadow:0 0 0 8px rgba(47,212,122,0)} 100%{box-shadow:0 0 0 0 rgba(47,212,122,0)} }
.eyebrow { font-family: var(--font-mono); color: var(--muted); font-size: .95rem; margin-bottom: 8px; }
.hero-name {
  font-family: var(--font-display); font-weight: 800;
  font-size: clamp(2.8rem, 7vw, 5rem); line-height: 1; letter-spacing: -.03em; margin-bottom: 10px;
}
.hero-role { font-family: var(--font-display); font-weight: 700; font-size: clamp(1.4rem,3.6vw,2.1rem); color: var(--muted); margin-bottom: 20px; }
.rotate { transition: opacity .25s ease; }
.hero-bio { font-size: 1.08rem; color: var(--muted); max-width: 52ch; margin-bottom: 28px; }
.hero-cta { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 26px; }
.socials { display: flex; gap: 20px; flex-wrap: wrap; }
.socials a { font-family: var(--font-mono); font-size: .9rem; color: var(--muted); border-bottom: 1px solid transparent; transition: color .2s, border-color .2s; }
.socials a:hover { color: var(--accent-2); border-color: var(--accent-2); }
.socials.center { justify-content: center; margin-top: 22px; }

/* profile card */
.profile-card {
  position: relative; background: var(--glass); backdrop-filter: blur(16px);
  border: 1px solid var(--line-2); border-radius: 24px; padding: 26px;
  box-shadow: var(--shadow); overflow: hidden;
  transform-style: preserve-3d; transition: transform .2s ease;
}
.pc-glow {
  position: absolute; inset: -1px; border-radius: 24px; padding: 1px; pointer-events: none;
  background: linear-gradient(140deg, color-mix(in srgb,var(--accent-1) 60%,transparent), transparent 40%, color-mix(in srgb,var(--accent-2) 50%,transparent));
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor; mask-composite: exclude;
}
.pc-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; }
.pc-avatar {
  width: 76px; height: 76px; border-radius: 20px;
  background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
  display: grid; place-items: center; font-family: var(--font-display); font-weight: 800; font-size: 1.8rem; color: #fff;
}
.pc-avatar img, .avatar img { width: 100%; height: 100%; object-fit: cover; border-radius: inherit; }
.pc-live { font-family: var(--font-mono); font-size: .72rem; color: var(--muted); display: inline-flex; align-items: center; gap: .4em; }
.pc-live i { width: 7px; height: 7px; border-radius: 50%; background: #2fd47a; }
.pc-name { font-family: var(--font-display); font-size: 1.3rem; }
.pc-handle { font-family: var(--font-mono); color: var(--accent-2); font-size: .85rem; margin-bottom: 18px; }
.pc-stats { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; margin-bottom: 18px; }
.pc-stats div { background: var(--chip); border: 1px solid var(--line); border-radius: 12px; padding: 12px 8px; text-align: center; }
.pc-stats b { display: block; font-family: var(--font-display); font-size: 1.5rem; font-weight: 800; color: var(--text); }
.pc-stats span { font-size: .72rem; color: var(--muted); }
.pc-stack { display: flex; flex-wrap: wrap; gap: 7px; }
.pc-stack span { font-family: var(--font-mono); font-size: .74rem; background: var(--chip); border: 1px solid var(--line); border-radius: 999px; padding: 5px 11px; }

/* marquee */
.marquee { margin-top: 46px; overflow: hidden; border-block: 1px solid var(--line); padding: 16px 0; -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent); mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent); }
.marquee-track { display: flex; gap: 44px; width: max-content; animation: scroll 26s linear infinite; }
.marquee-track span { font-family: var(--font-display); font-weight: 700; font-size: 1.4rem; color: var(--muted); opacity: .55; white-space: nowrap; }
@keyframes scroll { to { transform: translateX(-50%); } }

/* ---------- sections ---------- */
.section { padding: clamp(52px, 9vh, 100px) 0; position: relative; }
.section.alt { background: var(--bg-2); }

/* about */
.about-grid { display: grid; grid-template-columns: 280px 1fr; gap: 48px; align-items: center; }
.avatar {
  width: 230px; height: 230px; border-radius: 30px;
  background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
  display: grid; place-items: center; font-family: var(--font-display); font-weight: 800; font-size: 4rem; color: #fff;
  box-shadow: var(--shadow); margin: 0 auto;
}
.about-text p { color: var(--muted); margin-bottom: 14px; }
.facts { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 22px; }
.fact { background: var(--surface); border: 1px solid var(--line); border-radius: 14px; padding: 13px 16px; display: flex; flex-direction: column; gap: 3px; }
.fact b { font-size: .82rem; }
.fact span { color: var(--muted); font-size: .9rem; }

/* services */
.services-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
.service {
  background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius);
  padding: 28px; transition: transform .2s, border-color .2s, box-shadow .3s;
}
.service:hover { transform: translateY(-6px); border-color: color-mix(in srgb,var(--accent-1) 45%,transparent); box-shadow: var(--shadow); }
.service-icon {
  width: 56px; height: 56px; border-radius: 16px; display: grid; place-items: center; font-size: 1.7rem; margin-bottom: 16px;
  background: color-mix(in srgb, var(--accent-1) 16%, transparent); border: 1px solid var(--line-2);
}
.service h4 { font-family: var(--font-display); font-size: 1.2rem; margin-bottom: 8px; }
.service p { color: var(--muted); font-size: .93rem; }

/* skills */
.skills-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
.skill-group { background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); padding: 24px; }
.skill-group h4 { font-family: var(--font-display); margin-bottom: 16px; font-size: 1.08rem; }
.chips { display: flex; flex-wrap: wrap; gap: 8px; }
.chips span {
  font-family: var(--font-mono); font-size: .82rem; background: var(--chip);
  border: 1px solid var(--line-2); border-radius: 999px; padding: 6px 14px; transition: transform .15s, border-color .2s, color .2s;
}
.skill-group .chips span:hover, .project .chips span:hover { transform: translateY(-2px); border-color: var(--accent-1); color: var(--accent-2); }
.chips.small span { font-size: .74rem; padding: 4px 11px; }

/* projects */
.projects-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; }
.project {
  position: relative; background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius);
  padding: 24px; display: flex; flex-direction: column; gap: 12px; overflow: hidden;
  transition: transform .2s ease, border-color .2s, box-shadow .3s;
}
.project::before { content:""; position:absolute; inset:0 0 auto 0; height:3px; background: linear-gradient(90deg,var(--accent-1),var(--accent-2)); opacity:0; transition:opacity .3s; }
.project:hover { transform: translateY(-6px); border-color: var(--line-2); box-shadow: var(--shadow); }
.project:hover::before { opacity: 1; }
.project-top { display: flex; justify-content: space-between; align-items: center; }
.project-icon {
  font-size: 1.6rem; width: 52px; height: 52px; border-radius: 14px; display: grid; place-items: center;
  background: color-mix(in srgb, var(--accent-1) 14%, transparent); border: 1px solid var(--line);
}
.project-links { display: flex; gap: 10px; }
.project-links a { font-family: var(--font-mono); font-size: .85rem; color: var(--muted); border: 1px solid var(--line-2); border-radius: 9px; width: 34px; height: 34px; display: grid; place-items: center; transition: color .2s, border-color .2s; }
.project-links a:hover { color: var(--accent-2); border-color: var(--accent-1); }
.project h4 { font-family: var(--font-display); font-size: 1.2rem; }
.project p { color: var(--muted); font-size: .92rem; flex: 1; }

/* timeline */
.timeline { position: relative; max-width: 640px; margin: 0 auto; padding-left: 30px; }
.timeline::before { content:""; position:absolute; left:7px; top:6px; bottom:6px; width:2px; background: linear-gradient(var(--accent-1), var(--accent-2)); }
.tl-item { position: relative; padding-bottom: 30px; }
.tl-item:last-child { padding-bottom: 0; }
.tl-dot { position: absolute; left: -30px; top: 4px; width: 16px; height: 16px; border-radius: 50%; background: var(--bg); border: 3px solid var(--accent-1); box-shadow: 0 0 0 4px color-mix(in srgb,var(--accent-1) 18%,transparent); }
.tl-date { font-family: var(--font-mono); font-size: .8rem; color: var(--accent-2); }
.tl-item h4 { font-family: var(--font-display); font-size: 1.15rem; margin: 3px 0; }
.tl-item p { color: var(--muted); font-size: .92rem; }

/* contact */
.contact { display: flex; justify-content: center; }
.contact-card {
  width: 100%; max-width: 640px; text-align: center;
  background: var(--glass); backdrop-filter: blur(14px);
  border: 1px solid var(--line-2); border-radius: 28px; padding: clamp(28px,5vw,48px); box-shadow: var(--shadow);
}
.contact-form { display: flex; flex-direction: column; gap: 12px; margin: 22px 0 10px; text-align: left; }
.field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.contact-form input, .contact-form textarea {
  font-family: var(--font-body); font-size: .95rem; color: var(--text);
  background: var(--surface); border: 1px solid var(--line-2); border-radius: 12px; padding: 13px 15px; width: 100%; resize: vertical;
  transition: border-color .2s, box-shadow .2s;
}
.contact-form input:focus, .contact-form textarea:focus { outline: none; border-color: var(--accent-1); box-shadow: 0 0 0 3px color-mix(in srgb,var(--accent-1) 22%,transparent); }
.contact-form .btn { align-self: center; margin-top: 6px; }
.form-status { text-align: center; font-size: .9rem; margin-top: 4px; }
.form-status.ok { color: #2fd47a; } .form-status.err { color: #ff6b6b; }
.inline-link { color: var(--accent-2); border-bottom: 1px solid var(--accent-2); }

/* footer */
.footer { text-align: center; padding: 44px 24px; border-top: 1px solid var(--line); color: var(--muted); }
.footer p { font-size: .9rem; }

/* back to top */
.to-top {
  position: fixed; right: 22px; bottom: 22px; z-index: 70;
  width: 46px; height: 46px; border-radius: 14px; cursor: pointer;
  background: linear-gradient(120deg,var(--accent-1),var(--accent-2)); color: #fff; border: none; font-size: 1.2rem;
  box-shadow: var(--shadow); opacity: 0; transform: translateY(12px) scale(.9); pointer-events: none; transition: .25s;
}
.to-top.show { opacity: 1; transform: none; pointer-events: auto; }
.to-top:hover { transform: translateY(-2px); }

/* ---------- scroll reveal ---------- */
.reveal { opacity: 0; transform: translateY(26px); transition: opacity .6s ease, transform .6s ease; }
.reveal.show { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
  .bg-aurora, .ping, .marquee-track { animation: none; }
  html { scroll-behavior: auto; }
}

/* ---------- responsive ---------- */
@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; gap: 34px; min-height: 0; }
  .profile-card { max-width: 380px; }
  .about-grid { grid-template-columns: 1fr; gap: 26px; }
  .services-grid, .skills-grid { grid-template-columns: 1fr; }
  .projects-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 620px) {
  .nav-links {
    position: fixed; inset: 74px 12px auto 12px; flex-direction: column; gap: 4px;
    background: var(--surface); border: 1px solid var(--line-2); border-radius: 18px; padding: 10px;
    transform: translateY(-160%); transition: transform .3s ease; box-shadow: var(--shadow);
  }
  .nav-links.open { transform: translateY(0); }
  .nav-links a { padding: 12px 16px; border-radius: 12px; }
  .menu-btn { display: grid; place-items: center; }
  .projects-grid { grid-template-columns: 1fr; }
  .facts, .field-row { grid-template-columns: 1fr; }
}

:focus-visible { outline: 2px solid var(--accent-2); outline-offset: 2px; }

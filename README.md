# 🚀 Student Portfolio Website

A beautiful, ready-to-use personal portfolio built with plain **HTML, CSS & JavaScript** — no frameworks, no build step. Just edit the text, push to GitHub, and it goes live with **GitHub Pages**.

**Live demo:** `https://pratikthakkar.github.io/student_portfolio_website/`

![HTML](https://img.shields.io/badge/HTML-5-orange) ![CSS](https://img.shields.io/badge/CSS-3-blue) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

---

## ✨ Features

- 🌗 Light / dark mode (remembers your choice, follows your system)
- 🌌 Animated aurora + grid background & mouse-follow spotlight
- 🪪 Floating 3D-tilt profile card with animated stat counters
- 🎞️ Scrolling tech marquee, scroll-progress bar & scrollspy navigation
- 📇 Working contact form (via free [Formspree](https://formspree.io)) + back-to-top button
- 📱 Fully responsive — phone, tablet & desktop
- 🎨 Re-skin the whole site by changing **2 colors**
- 🧩 Sections: Hero · About · Services · Skills · Projects · Journey · Contact

---

## 🖊️ How to make it yours (the fun part)

Everywhere you see a **`✏️ EDIT`** comment, that's a spot to change. You only need 3 files:

| File | What to change |
|------|----------------|
| `index.html` | All your text — name, about, skills, projects, links |
| `style.css`  | Colors — edit `--accent-1` and `--accent-2` at the very top |
| `script.js`  | The rotating job titles (`ROTATING_ROLES` list) |

**To add your photo:** put `photo.jpg` in this folder, then in `index.html` replace the
`<div class="avatar">AS</div>` with `<img src="photo.jpg" alt="Your name" />`.

**To add your CV:** drop `resume.pdf` in this folder — the "Download CV" button already points to it.

---

## 💻 Run it on your computer

No tools needed — just **double-click `index.html`** to open it in your browser.
(For live-reload, use the "Live Server" extension in VS Code.)

---

## ☁️ Publish it live with GitHub Pages

### First time (upload your code)

```bash
# inside this folder
git init
git add .
git commit -m "My portfolio"
git remote add origin https://github.com/pratikthakkar/student_portfolio_website.git
git branch -M main
git push -u origin main
```

### Turn on GitHub Pages

1. On GitHub, open the repo → **Settings** → **Pages**
2. Under **Source**, choose branch **`main`** and folder **`/ (root)`**
3. Click **Save** and wait ~1–2 minutes

Your site is now live at:
`https://pratikthakkar.github.io/student_portfolio_website/`

> 💡 **Tip:** If you name your repo `your-username.github.io` instead, the site lives at the shorter `https://your-username.github.io`.

### Every time you make a change

```bash
git add .
git commit -m "update portfolio"
git push
```

The live site updates itself automatically. 🎉

---

## 🆘 Troubleshooting

| Problem | Fix |
|---------|-----|
| Page is blank | Main file must be named `index.html` (lowercase) |
| Site not showing | Wait 1–2 min after enabling Pages, then hard-refresh |
| CSS not loading | Check the file is named exactly `style.css` |
| Push asks for a password | Use a GitHub **Personal Access Token**, not your account password |

---

Made for the RYMEC workshop · Fork it, edit it, ship it. Happy coding! 💜

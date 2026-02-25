# Gandreddy Lokesh — Personal Portfolio

> *"I architect intelligent systems that think, automate, and scale. This is where ideas become infrastructure."*

A premium, editorial-grade developer portfolio built with React — featuring cinematic animations, a jaw-drop Dynamic Island navbar, and an infinite-symbol preloader. Every pixel is intentional.

---

## ✦ Live Preview

🔗 **[lokesh-ai-portfolio.vercel.app](https://lokesh-ai-portfolio.vercel.app)**

---

## ✦ Highlights

| Feature | Detail |
|---|---|
| **Dynamic Island Navbar** | Floating pill with breathing gradient glow beam, scroll-reactive shadow, rotating hamburger → X morph |
| **Infinity Preloader** | 5-layer animated ∞ SVG (track + outer halo + mid glow + core streak + white spark), Web Audio API loading pulse |
| **Full-Screen Menu** | Cinematic curtain drop, parallax ambient orbs, split-panel with ghost section numbers |
| **Editorial Typography** | Cormorant Garamond serif headlines, mono labels, `clamp()` fluid type scale |
| **Light / Dark Mode** | Default light mode, persisted in localStorage, instant toggle with themed orbs/shadows |
| **Responsive** | Mobile-first from 320px → 4K, `clamp()` font sizing, viewport-capped elements |
| **Custom Cursor** | Magnetic, context-aware cursor that reacts to interactive elements |
| **Smooth Scroll** | Lenis-style smooth scrolling across all sections |
| **Ambient Orbs** | Mouse-parallax reactive color orbs in Hero, ManifestoBreak, and Menu overlay |

---

## ✦ Sections

```
/ Hero           — Full-screen editorial opening statement
/ Work           — Expanding project cards (Sara.ai, Vaagisha)
/ Core Directive — Full-height manifesto break ("Systems don't just run — they think.")
/ The Architect  — About section with sticky portrait card
/ Connect        — Contact section
```

---

## ✦ Tech Stack

```
React 18          — UI framework
Tailwind CSS      — Utility-first styling
CRACO             — CRA config override (custom PostCSS/plugins)
Lucide Icons      — Icon set
Web Audio API     — Synthesised loading pulse sounds
SVG animation     — stroke-dashoffset infinity animation
CSS clip-path     — Menu curtain + preloader TV-off exit
```

---

## ✦ Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/Lokeshgandreddy81/meh.portifolio.git
cd meh.portifolio/frontend

# 2. Install dependencies
npm install

# 3. Start dev server
npm start
# → http://localhost:3000
```

### Customise

Everything personal lives in one file:

```
frontend/src/config/siteConfig.js
```

Update your name, tagline, photo URLs, work experience, social links, and footer copy there — the entire site re-renders from that single config.

---

## ✦ Project Structure

```
frontend/
├── public/
│   └── images/            # Static images (architect photo, etc.)
├── src/
│   ├── components/
│   │   ├── Header.jsx     # Dynamic Island + full-screen menu
│   │   ├── Hero.jsx       # Opening hero section
│   │   ├── WorkSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Preloader.jsx  # ∞ infinity loader
│   │   └── ui/            # CustomCursor, SmoothScroll, MagneticButton
│   ├── config/
│   │   └── siteConfig.js  ← edit this file to personalise
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── pages/
│   │   └── Home.jsx
│   └── index.css
└── package.json
```

---

## ✦ Design Decisions

- **No framework UI kit** — every component hand-crafted in vanilla JSX + inline styles + Tailwind utilities to maintain pixel control
- **gradient-ring border via backdrop trick** — positioned absolute div at `inset: -1.5px` with `linear-gradient` background + inner fill div creates a true gradient border without `border-image` (which breaks `border-radius`)
- **Fluid typography** — `clamp(2.2rem, 10vw, 11rem)` ensures editorial headlines never overflow at any viewport width
- **Web Audio API for sound** — zero external audio files; completion pulse is synthesised with a shared `AudioContext` + `resume()` to bypass autoplay policy

---

## ✦ Contact

| | |
|---|---|
| **Email** | [gandreddylokesh7@gmail.com](mailto:gandreddylokesh7@gmail.com) |
| **LinkedIn** | [linkedin.com/in/lokeshh-hhh](https://linkedin.com/in/lokeshh-hhh) |
| **GitHub** | [github.com/Lokeshgandreddy81](https://github.com/Lokeshgandreddy81) |
| **Blog** | [lokeshgandreddy.hashnode.dev](https://lokeshgandreddy.hashnode.dev) |

---

<p align="center">
  <sub>Built with intention. Deployed with purpose. — Gandreddy Lokesh © 2025</sub>
</p>

# Libby Shefferly — Portfolio Website

Personal portfolio website for Libby Shefferly, Information Systems student at Grand Valley State University.

**Live site:** https://www2.gvsu.edu/shefferl/portfolio/
**GitHub:** https://github.com/ShefLibby
**LinkedIn:** https://www.linkedin.com/in/libby-shefferly-0689692a7/

---

## Overview

A single-page, fully responsive portfolio built with vanilla HTML5, CSS3, and JavaScript — no frameworks or dependencies. Designed with GVSU branding (navy `#003366`, white, black) and smooth scroll-reveal animations.

---

## Features

- **Single-page layout** — smooth scrolling between all sections
- **Sticky navbar** — transparent on load, solid navy on scroll; active section highlighted via scrollspy
- **Fade + slide-up animations** — hero elements cascade in on load; all other sections animate in as you scroll
- **Floating hero avatar** — CSS `@keyframes float` on the sticker logo
- **Responsive** — mobile-first, three breakpoints (mobile / 640px / 900px)
- **Mobile hamburger menu** — animated open/close toggle
- **Back-to-top button** — appears after 320px scroll
- **No frameworks** — pure HTML/CSS/JS, fast and portable

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Full-viewport navy header with dot-grid background, floating avatar, name, tagline, and two CTA buttons |
| **About** | Personal bio + GVSU education card (degree, GPA, graduation date, honors) |
| **Skills** | Grouped skill badges — Programming & Web, Tools & Platforms, Concepts & Methods |
| **Projects** | Five project cards with descriptions and tech tag chips |
| **Experience** | Animated vertical timeline — two work positions with dates and descriptions |
| **Contact** | Four clickable cards (Phone, Email, LinkedIn, GitHub) + embedded GVSU map |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic elements) |
| Styling | CSS3 — custom properties, Grid, Flexbox, `clip-path`, `@keyframes` |
| Behavior | Vanilla JavaScript — IntersectionObserver, scrollspy, smooth scroll |
| Fonts | Google Fonts — Noto Sans (headings), Arimo (body) |
| Favicon | Custom SVG monogram (`LS`) |

---

## Project Structure

```
ultimate/
├── index.html          ← single-page portfolio
├── css/
│   └── style.css       ← all styles (~600 lines)
├── js/
│   └── main.js         ← scrollspy, reveal, menu, back-to-top
├── images/
│   ├── sticker_libby.png
│   ├── favicon.svg     ← navy circle with white "LS"
│   ├── favicon.ico
│   └── apple-touch-icon.png
└── README.md
```

---

## Color Palette

| Role | Value |
|---|---|
| Primary (Navy) | `#003366` |
| Dark Navy | `#001a33` |
| Mid Navy | `#004d99` |
| Secondary (White) | `#ffffff` |
| Accent (Black) | `#0d0d0d` |
| Surface | `#f8f9fb` |
| Muted text | `#4b5563` |

---

## Projects Featured

1. **C# / .NET Application Development** — Windows Forms apps with event-driven logic and input validation
2. **SQL Coffee Shop Database** — Relational DB design, BCNF normalization, complex queries
3. **IT Infrastructure Proposal** — Full IT upgrade proposal for a medical practice (RAID-10, Citrix, Epic EHR)
4. **Forward Fitness Club Website** — Responsive HTML5/CSS3 site with Grid, Flexbox, and accessibility standards
5. **Portfolio Website** — This site; mobile-first, semantic HTML, scroll-reveal animations

---

## Author

**Libby Shefferly**
B.S. Management of Information Systems — Grand Valley State University
Expected Graduation: December 2027 | GPA: 3.2 | Dean's List — Fall 2024 & Winter 2025

&copy; 2025 Libby Shefferly. All Rights Reserved.

# Mohamed Ait Bourice — Modern Next.js Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-success)](https://mohamed-portfolio-roan.vercel.app)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animations-ff69b4)
![Three.js](https://img.shields.io/badge/Three.js-3D-black)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black)

A fast, responsive, and thoughtfully designed developer portfolio showcasing my projects, experience, and approach. Built with **Next.js**, **Tailwind CSS**, **Framer Motion**, and **Three.js** to deliver smooth interactions, modern UI patterns, and memorable visuals.

> **Live:** [https://mohamed-portfolio-roan.vercel.app](https://mohamed-portfolio-roan.vercel.app)

---

## 📋 Table of Contents

* [Introduction](#-introduction)
* [Tech Stack](#-tech-stack)
* [Features](#-features)
* [Project Structure](#-project-structure)
* [Getting Started](#-getting-started)
* [Available Scripts](#-available-scripts)
* [Environment Variables](#-environment-variables)
* [Deployment](#-deployment)
* [Code Quality](#-code-quality)
* [Accessibility](#-accessibility)
* [Performance Notes](#-performance-notes)
* [Roadmap](#-roadmap)
* [Credits](#-credits)
* [Contact](#-contact)
* [License](#-license)

---

## 🤖 Introduction

This portfolio is a practical demonstration of my full‑stack skill set with a strong focus on **frontend craft** and **animation quality**. It combines:

* a clean, bento-style layout for clarity,
* interactive 3D accents for delight,
* motion that supports—not distracts from—content,
* and a codebase that favors reusability and maintainability.

The goal is a site that loads fast, looks sharp on every device, and communicates who I am in under 10 seconds.

---

## ⚙️ Tech Stack

* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS, CSS Modules where needed
* **Animations:** Framer Motion
* **3D / WebGL:** Three.js (select interactive elements)
* **Icons:** Lucide, custom SVGs
* **Forms & Email:** (Optional) Resend / Email API or Form handling service
* **Deployment:** Vercel

---

## 🔋 Features

* **Hero** – Spotlight intro with subtle gradients, fluid text reveal, and call‑to‑action.
* **Bento Grid** – Modern sections for About, Skills, and Services using CSS Grid & utility classes.
* **3D Elements** – Tasteful Three.js moments (e.g., globe / card depth) to enhance feel without hurting performance.
* **Projects Gallery** – Filterable, responsive cards with hover states and modal/lightbox details.
* **Testimonials** – Animated carousel / marquee for social proof.
* **Experience Timeline** – Highlight roles, responsibilities, and impact with a scannable timeline.
* **Canvas Effects** – Lightweight canvas shaders/particles in the “Approach” section.
* **Contact Section** – Accessible form with validation and helpful success/error states.
* **Responsive** – Pixel‑perfect on mobile, tablet, and desktop.
* **SEO & Sharing** – Dynamic metadata, Open Graph tags, and social previews.

> Plus: component-driven architecture, layout composition, and utilities for motion, media, and formatting.

---

## 🗂️ Project Structure

```
├── app/
│   ├── (site)/              # Route groups for pages
│   │   ├── page.tsx         # Home
│   │   ├── projects/        # Projects listing & details
│   │   ├── contact/         # Contact page
│   │   └── sitemap.ts       # SEO
│   ├── api/                 # (Optional) server actions / endpoints
│   └── layout.tsx           # Root layout & metadata
├── components/
│   ├── ui/                  # Reusable UI primitives
│   ├── sections/            # Hero, About, Projects, etc.
│   └── 3d/                  # Three.js canvases & helpers
├── lib/                     # utils, hooks, constants
├── public/                  # static assets (images, icons)
├── styles/                  # globals.css, tailwind.css
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## 🤸 Getting Started

### Prerequisites

* **Node.js** v18+
* **pnpm**/npm/yarn (choose one)

### Installation

```bash
# clone
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# install deps
pnpm install   # or npm install / yarn

# run dev server
pnpm dev       # or npm run dev / yarn dev

# build & preview
pnpm build && pnpm start
```

---

## 🕹️ Available Scripts

* `dev` – Start Next.js in development mode.
* `build` – Production build (analyzes, tree-shakes, optimizes).
* `start` – Run the production build locally.
* `lint` – Lint the codebase with ESLint.
* `format` – Format with Prettier (configure script).

---

## 🔐 Environment Variables

> Not all setups need these. If you enable forms, email, analytics, or third‑party APIs, create a `.env.local`:

```
# example
NEXT_PUBLIC_SITE_URL=https://mohamed-portfolio-roan.vercel.app
RESEND_API_KEY=...
CONTACT_INBOX=you@example.com
```

---

## 🚀 Deployment

Deployed on **Vercel**.

1. Push to GitHub.
2. Import repo on Vercel.
3. Set environment variables (if any).
4. Trigger a production deployment.

> Tip: enable **Image Optimization**, **Edge Functions** (where relevant), and add a custom domain.

---

## 🧹 Code Quality

* **Type Safety:** Prefer TypeScript for components & utils.
* **Linting:** ESLint (Next.js + React + Tailwind plugins).
* **Formatting:** Prettier.
* **Commit Style:** Conventional Commits (e.g., `feat:`, `fix:`).

---

## ♿ Accessibility

* Semantic HTML, labeled controls, proper heading order
* Keyboard focus states & skip links
* Sufficient color contrast & prefers‑reduced‑motion support
* Alt text for all meaningful images

---

## ⚡ Performance Notes

* Optimize images with `next/image`
* Lazy‑load 3D/canvas and heavy sections
* Split motion features; avoid layout thrash
* Cache static assets; use `revalidate` where appropriate

---

## 🗺️ Roadmap

* [ ] Add blog/notes with MDX
* [ ] Project detail pages with case studies
* [ ] Light/dark theme toggle
* [ ] Analytics (Vercel / Umami) & simple A/B tests

---

## 🙌 Credits

This portfolio draws inspiration from modern UI patterns and public education resources. Special thanks to the **JavaScript Mastery** community for ideas on 3D, motion, and layout techniques.

---

## 📬 Contact

* **Name:** Mohamed Ait Bourice
* **Email:** [mohamedaitbourice@gmail.com](mailto:mohamedaitbourice@gmail.com)
* **LinkedIn:** [https://www.linkedin.com/in/mohamed-ait-bourice-09499a2a6](https://www.linkedin.com/in/mohamed-ait-bourice-09499a2a6)
* **GitHub:** [https://github.com/mohamed-2300](https://github.com/mohamed-2300)
* **Website:** [https://mohamed-portfolio-roan.vercel.app](https://mohamed-portfolio-roan.vercel.app)

---

## 📄 License

© Mohamed Ait Bourice. All rights reserved.

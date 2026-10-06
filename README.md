# ⚡ TEDDY SETIAWAN — BACKEND ENGINEER PORTFOLIO
### Extreme Neobrutalism Web Application built with Bun, Svelte 5, Vite, TypeScript & Tailwind CSS

[![Bun](https://img.shields.io/badge/Bun-1.3-FBF0DF?style=for-the-badge&logo=bun&logoColor=black)](https://bun.sh)
[![Svelte](https://img.shields.io/badge/Svelte-5-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)](https://svelte.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Docker](https://img.shields.io/badge/Docker-Multi--Stage-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com)

---

## 🎨 Design Philosophy: Extreme Neobrutalism

This portfolio is crafted with **Extreme Neobrutalism** aesthetic guidelines:
- **High Contrast & Hard Borders**: 3px - 4px solid black outlines with high definition.
- **Offset Drop Shadows**: Unblurred hard geometry shadows (`4px 4px 0 #000`, `6px 6px 0 #000`, `8px 8px 0 #000`).
- **High-Saturation Pop Colors**:
  - Canary Electric Yellow: `#FFE600`
  - Punch Pink: `#FF5E97`
  - Electric Cyan: `#00F0FF`
  - Vivid Mint Green: `#54E346`
  - Bold Orange: `#FF8A00`
- **Tactile Click Feedback**: Micro-interactions with physical button depressions on `:hover` and `:active`.
- **Light & Dark Mode**:
  - **Default Light Mode**: Warm vintage off-white (`#FFFDF0`), pitch-black borders and shadows.
  - **Extreme Dark Mode**: Charcoal black background (`#0C0D15`), crisp white borders, and electric yellow/cyan neobrutalist offset glow shadows.

---

## 🚀 Key Features

1. **GitHub Projects by Page ("Project by Page GitHub")**:
   - Live synchronization with public GitHub API (`https://api.github.com/users/teddys48/repos`).
   - Resilient offline / rate-limit fallback data reflecting Teddy's actual repositories.
   - Interactive pagination (`Page 1, 2, 3...`, Next, Prev, and adjustable Page Size: 6 / 9 / 12 items).
   - Real-time search query filtering (by repo name, description, and topics).
   - Language filtering tabs (All, Go, TypeScript/JS, PHP, Rust).
   - One-click `git clone` command copying with animated confirmation.
2. **Interactive Backend System Monitor**:
   - Real-time uptime timer.
   - Core engine telemetry (Go Fiber, Prometheus metrics, Loki stream, SAP RFC Connector).
   - Live simulated structured JSON/text log feed.
3. **Work History Dossier**:
   - Detailed timeline for PT Nutech Integrasi (Go, Fiber, Node.js, SAP, Grafana, Loki, etc.).
   - Key deliverables and technologies deployed badges.
4. **Skills & Capabilities Matrix**:
   - Categorized across Languages, Backend Development, Databases, DevOps & Infrastructure, and Enterprise Systems.
5. **Credentials Bento**:
   - Education: Universitas Pakuan (D3 Informatics Management, GPA 3.69).
   - Certifications: BNSP Junior Web Developer (2021) and Google Cybersecurity Specialization (Coursera 2024).
6. **Communications & Inquiry Dispatcher**:
   - Interactive mailto composer, direct email & phone copy actions, WhatsApp direct chat link.
7. **Production Best Practices & SEO**:
   - Semantic HTML5 structure.
   - Complete Open Graph & Twitter Card meta headers.
   - JSON-LD Structured Data (`Person` schema with job title, links, and expertise).
   - Valid `robots.txt` and `sitemap.xml`.
   - WCAG AA accessibility compliance with visible keyboard focus rings.

---

## 🛠️ Tech Stack

- **Runtime & Package Manager**: [Bun 1.3](https://bun.sh)
- **Frontend Framework**: [Svelte 5](https://svelte.dev) (Runes `$state`, `$derived`, `$props`, `$effect`)
- **Bundler & Tooling**: [Vite 8](https://vitejs.dev)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) + `@tailwindcss/vite`
- **Icons**: Lucide Svelte + Custom SVG Brand Badges
- **Containerization**: Multi-stage Dockerfile with Nginx Alpine

---

## 💻 Local Development

### Prerequisites
- [Bun](https://bun.sh) installed (or Node.js 20+)

### 1. Install Dependencies
```bash
bun install
```

### 2. Start Dev Server
```bash
bun run dev
```
Open `http://localhost:5173` in your browser.

### 3. Type Checking
```bash
bun run check
```

### 4. Build for Production
```bash
bun run build
```

### 5. Preview Production Build
```bash
bun run preview
```

---

## 🐳 Docker Deployment

The repository includes a production-ready multi-stage `Dockerfile` and `nginx.conf`:

### Build Docker Image
```bash
docker build -t teddy-portfolio:latest .
```

### Run Docker Container
```bash
docker run -d -p 8080:80 --name teddy-portfolio teddy-portfolio:latest
```

Open `http://localhost:8080` in your browser.

---

## 📄 License & Attribution

Designed and developed for **Teddy Setiawan** (Backend Engineer).
All rights reserved © 2026.

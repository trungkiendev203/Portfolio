# 🚀 Nguyen Trung Kien — Portfolio

A premium, Apple-inspired personal portfolio website built with **React**, **TypeScript**, **Vite**, and **React Three Fiber**.

![Portfolio Preview](/public/images/ecommerce-mockup.png)

---

## ✨ Features

- **Apple Design System** — Clean typography, frosted glass navigation, and full-bleed tile layout
- **3D Hero Background** — Floating geometric shapes using React Three Fiber with dynamic performance scaling
- **TypeWriter Animation** — Animated tagline cycling through key strengths
- **Bento Grid Skills** — Interactive terminal simulation, SVG icons, and tech marquee
- **Project Showcase** — 4 projects with hover zoom effects and technical challenge descriptions
- **Fully Responsive** — Mobile hamburger menu with slide-down panel, adaptive layouts for all screen sizes
- **SEO Optimized** — Meta tags, Open Graph, and semantic HTML structure
- **CV Download** — Resume PDF accessible from Hero, navigation, and footer

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 + TypeScript |
| **Build Tool** | Vite 8 |
| **3D Graphics** | React Three Fiber + drei |
| **Styling** | Vanilla CSS (Apple Design Tokens) |
| **Deployment** | Static (Vercel / Netlify / GitHub Pages) |

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── images/              # Project mockups & avatar
│   ├── favicon.svg          # Site favicon
│   ├── icons.svg            # SVG icon sprite
│   └── Nguyen-Trung-Kien-CV.pdf
├── src/
│   ├── components/
│   │   ├── Hero3D.tsx       # 3D background (R3F Canvas)
│   │   ├── TypeWriter.tsx   # Typing animation
│   │   └── MobileMenu.tsx   # Hamburger menu
│   ├── styles/
│   │   ├── design-tokens.css # Colors, spacing, typography
│   │   └── components.css    # All component styles
│   ├── App.tsx              # Main page layout
│   ├── main.tsx             # React entry point
│   └── index.css            # Global imports
├── index.html               # HTML shell + SEO meta
├── vite.config.ts
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ 
- **npm** 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/trungkiendev203/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📊 Performance

- **3D Rendering**: Adaptive DPR with `PerformanceMonitor` — auto-scales quality based on device capability
- **Lazy Loading**: All project images use `loading="lazy"`
- **No Unused Dependencies**: Optimized bundle with only essential packages
- **CSS-only Animations**: Scroll reveal, marquee, and hover effects use pure CSS transitions

## 📬 Contact

- **Email**: trungkiendev203@gmail.com
- **GitHub**: [trungkiendev203](https://github.com/trungkiendev203)
- **Phone**: 0966 313 528

---

**Built with ❤️ by Nguyen Trung Kien** — Final-year IT student at Thuy Loi University

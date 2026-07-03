# 🎬 AURA CINEMATIC — Cinematic Documentary Portfolio

A premium, high-end editorial portfolio website for **AURA CINEMATIC**, an award-winning independent documentary production company. Designed with a sleek, minimalist, and high-contrast obsidian aesthetic, this interactive application serves as a powerful hub for client acquisition, film showcases, subcultural chronicles, and industry contacts.

[![React](https://img.shields.io/badge/React-19.0.0-blue?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-purple?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-12.23-ff007f?logo=framer&logoColor=white)](https://motion.dev/)

---

## ✨ Key Features

- **🎥 Editorial selected filmography**: Dynamic project listing with advanced content-filtering (e.g. Cinematic Features, subcultural portraits, environmental series) and deep search functionality. Includes complete crew listings, ratings, reviews, and running times.
- **🏔️ Immersive Hover Effects**: Specific project cards—such as the award-winning *The Last Glacier*—feature a smooth, custom, high-contrast grayscale-to-color transition combined with a gentle cinematic scale/zoom upon hover.
- **🎵 Music Chronicles Section**: A dedicated subsection highlighting documentary projects centered around acoustic geography, subcultural soundscapes, and artist profiles.
- **🍿 Cinematic Lightboxes & Video Integration**: Instant full-screen overlays supporting seamless video playback for cinematic showreels, vimeo showcases, and YouTube trailers without leaving the site.
- **⚡ CountUp Stats & Interactive Timeline**: Animated statistics showing completed films, filming countries, and awards, paired with an interactive history chronicle of the studio.
- **📩 Interactive Inquiry Builder**: A multi-faceted contact facility with direct communication options, interactive subject fields, and customizable enquiry types tailored to prospective streaming partners, buyers, and festival scouts.
- **🎹 Keyboard Navigation & Help Overlay**: Integrated keyboard shortcuts (`H`, `W`, `M`, `A`, `C`, `?`) enabling tactile, lightning-fast accessibility.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) (Functional Components & Hooks)
- **Runtime & Tooling**: [Vite](https://vite.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Esbuild](https://esbuild.github.io/)

---

## 📁 File Structure

```bash
/src
├── components/           # Reusable UI components
│   ├── ImageWithFallback.tsx  # Dynamic image loaders with default presets
│   ├── Lightbox.tsx           # Immersive full-screen media overlays
│   ├── VideoModal.tsx         # Embedded YouTube/Vimeo stream players
│   ├── CountUp.tsx            # Animated numerical stats counter
│   ├── Navbar.tsx             # Interactive, blur-backed master navigation header
│   ├── Footer.tsx             # Editorial credentials & site directory
│   ├── ScrollProgress.tsx     # Cinematic progress indicator bar
│   ├── ScrollToTop.tsx        # Fluent scrolling helper
│   └── KeyboardShortcutsHelp.tsx # Overlay helping users explore keyboard shortcuts
├── pages/                # Main view components (Route targets)
│   ├── Home.tsx               # Master showcase landing page
│   ├── SelectedWork.tsx       # Filterable catalog of the studio's filmography
│   ├── MusicDocs.tsx          # Sound & Subcultural portrait showcase
│   ├── About.tsx              # Timeline, studio values, awards, and team
│   └── Contact.tsx            # Highly tailored customer & client acquisition engine
├── types.ts              # Strongly-typed schema definitions & interfaces
├── data.ts               # Core database with film synopses, reviews, and statistics
├── index.css             # Root styles containing global tailwind imports and font configurations
└── main.tsx              # SPA entry point
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18.x or higher) and `npm` installed.

### 2. Clone the Repository
```bash
git clone https://github.com/your-username/aura-cinematic-portfolio.git
cd aura-cinematic-portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the Development Server
```bash
npm run dev
```
The server will boot and be accessible at `http://localhost:3000` (or your local environment port).

### 5. Compile & Production Build
To build the application for deployment:
```bash
npm run build
```
The production-ready static assets will be output to the `dist/` folder.

---

## 🎨 Visual Design System

- **Primary Colors**: Deep Obsidian Charcoal (`#0a0a0a`), Crisp Ice Silver (`#f2f2f2`), and Cinematic Gold Accents (`#e5c158`).
- **Typography Pairings**: Elegantly spaced display headings paired with high-contrast, razor-sharp technical labels in `JetBrains Mono` and clean, highly readable `Inter` for general prose.
- **Transitions**: Controlled, cinematic duration-700 eased layouts mimicking slow shutter speeds and premium projection feel.

---

## 🌐 Deploying the Portfolio (Free Methods)

You can host this Single Page Application (SPA) completely for free using several modern cloud platforms:

### A. Netlify (Drag-and-Drop or GitHub Sync)
1. Sign up on [Netlify](https://www.netlify.com/).
2. Click **Add new site** -> **Import from Git** or drag and drop your `/dist` folder.
3. Configure the Build Settings:
   - **Build Command**: `npm run build`
   - **Publish directory**: `dist`
4. Add a `_redirects` file inside `public/` directory with `/* /index.html 200` to support React Router single-page navigation reload.

### B. Vercel (Instant GitHub Deploy)
1. Sign up on [Vercel](https://vercel.com/).
2. Link your GitHub repository.
3. Click **Import** next to your `aura-cinematic-portfolio` repo.
4. Vercel will automatically detect Vite and set the build configurations. Click **Deploy**.

### C. GitHub Pages
1. Install the GitHub Pages package in devDependencies:
   ```bash
   npm install -D gh-pages
   ```
2. Configure `base` inside `vite.config.ts` if deploying to a sub-path:
   ```typescript
   export default defineConfig({
     base: '/aura-cinematic-portfolio/', // match your repo name
     // ...other configs
   });
   ```
3. Add deployment scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run `npm run deploy`.

---

## 🐳 Running with Docker

This project comes equipped with a production-ready, multi-stage **Dockerfile** and customized **Nginx** configuration to serve your cinematic portfolio with optimal caching, gzip compression, and secure client-side routing support.

### 1. Build the Docker Image
Navigate to the root directory and run:
```bash
docker build -t aura-cinematic .
```

### 2. Run the Container
Run the built container and map host port `8080` to the container's Nginx port `80`:
```bash
docker run -d -p 8080:80 --name aura-portfolio-live aura-cinematic
```

Once running, navigate to `http://localhost:8080` in your web browser to view the fully deployed application.

### 3. Stop the Container
```bash
docker stop aura-portfolio-live
docker rm aura-portfolio-live
```


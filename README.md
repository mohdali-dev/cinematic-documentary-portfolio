
<div align="center">

  # 🎬 AURA CINEMATIC
  ### *Cinematic Documentary Portfolio*

  <p>
    A premium, high-end editorial portfolio website for an award-winning independent documentary production company.
    <br/>
    <em>Designed with a sleek, minimalist, and high-contrast obsidian aesthetic.</em>
  </p>

  <p>
    <a href="https://github.com/your-username/aura-cinematic-portfolio/stargazers">
      <img src="https://img.shields.io/github/stars/your-username/aura-cinematic-portfolio?style=for-the-badge&color=e5c158&logo=github&logoColor=white" alt="Stars">
    </a>
    <a href="https://github.com/your-username/aura-cinematic-portfolio/network/members">
      <img src="https://img.shields.io/github/forks/your-username/aura-cinematic-portfolio?style=for-the-badge&color=38bdf8&logo=github&logoColor=white" alt="Forks">
    </a>
    <a href="https://github.com/your-username/aura-cinematic-portfolio/issues">
      <img src="https://img.shields.io/github/issues/your-username/aura-cinematic-portfolio?style=for-the-badge&color=ff007f&logo=github&logoColor=white" alt="Issues">
    </a>
    <a href="https://github.com/your-username/aura-cinematic-portfolio/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/your-username/aura-cinematic-portfolio?style=for-the-badge&color=0a0a0a&logo=github&logoColor=white" alt="License">
    </a>
  </p>

  <hr />
</div>

<!-- TABLE OF CONTENTS -->
<details open>
  <summary><b>📑 Table of Contents</b></summary>
  <ol>
    <li><a href="#-about-the-project">About The Project</a></li>
    <li><a href="#-key-features">Key Features</a></li>
    <li><a href="#-tech-stack">Tech Stack</a></li>
    <li><a href="#-visual-design-system">Visual Design System</a></li>
    <li><a href="#-getting-started">Getting Started</a></li>
    <li><a href="#-project-structure">Project Structure</a></li>
    <li><a href="#-deployment">Deployment</a></li>
    <li><a href="#-running-with-docker">Running with Docker</a></li>
    <li><a href="#-contributing">Contributing</a></li>
    <li><a href="#-license">License</a></li>
    <li><a href="#-contact">Contact</a></li>
  </ol>
</details>

---

## 🎞️ About The Project

**AURA CINEMATIC** is a premium, high-end editorial portfolio built for independent documentary production companies. This interactive application serves as a powerful hub for client acquisition, film showcases, subcultural chronicles, and industry contacts. 

It features a sleek, minimalist, and high-contrast obsidian aesthetic, delivering an immersive, cinematic browsing experience that mirrors the premium quality of the films it hosts.

> *"Where storytelling meets digital elegance."*

---

## ✨ Key Features

- **🎥 Editorial Filmography:** Dynamic project listing with advanced content-filtering (Cinematic Features, Subcultural Portraits, Environmental Series) and deep search functionality. Includes complete crew listings, ratings, reviews, and running times.
- **🏔️ Immersive Hover Effects:** Specific project cards—such as the award-winning *The Last Glacier*—feature a smooth, custom, high-contrast grayscale-to-color transition combined with a gentle cinematic scale/zoom upon hover.
- **🎵 Music Chronicles:** A dedicated subsection highlighting documentary projects centered around acoustic geography, subcultural soundscapes, and artist profiles.
- **🍿 Cinematic Lightboxes:** Instant full-screen overlays supporting seamless video playback for cinematic showreels, Vimeo showcases, and YouTube trailers without leaving the site.
- **⚡ CountUp Stats & Timeline:** Animated statistics showing completed films, filming countries, and awards, paired with an interactive history chronicle of the studio.
- **📩 Interactive Inquiry Builder:** A multi-faceted contact facility with direct communication options, interactive subject fields, and customizable enquiry types tailored to prospective streaming partners, buyers, and festival scouts.
- **🎹 Keyboard Navigation:** Integrated keyboard shortcuts (`H`, `W`, `M`, `A`, `C`, `?`) enabling tactile, lightning-fast accessibility and a help overlay.

---

## 🛠️ Tech Stack

This project is built using a modern, high-performance web development stack:

| Category | Technology | Version |
| :--- | :--- | :--- |
| **Framework** | [React](https://react.dev/) | `19.0.0` |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `5.8` |
| **Build Tool** | [Vite](https://vite.dev/) | `6.2` |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `v4.0` |
| **Animations** | [Motion](https://motion.dev/) (Framer Motion) | `12.23` |
| **Icons** | [Lucide React](https://lucide.dev/) | Latest |
| **Bundler** | [Esbuild](https://esbuild.github.io/) | Latest |

---

## 🎨 Visual Design System

The design language is crafted to evoke the feeling of a high-end film festival catalog:

- **🎨 Primary Colors:** 
  - Deep Obsidian Charcoal (`#0a0a0a`)
  - Crisp Ice Silver (`#f2f2f2`)
  - Cinematic Gold Accents (`#e5c158`)
- **🔠 Typography Pairings:** 
  - **Headings:** Elegantly spaced display fonts.
  - **Labels:** Razor-sharp technical labels in `JetBrains Mono`.
  - **Prose:** Clean, highly readable `Inter` for general text.
- **🎬 Transitions:** Controlled, cinematic `duration-700` eased layouts mimicking slow shutter speeds and premium projection feels.

---

## 🚀 Getting Started

Follow these simple steps to get a local copy up and running.

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18.x or higher) and `npm` installed.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/aura-cinematic-portfolio.git
   cd aura-cinematic-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or your configured port) in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```
   The production-ready static assets will be output to the `dist/` folder.

---

## 📁 Project Structure

```bash
/src
├── components/                 # Reusable UI components
│   ├── ImageWithFallback.tsx   # Dynamic image loaders with default presets
│   ├── Lightbox.tsx            # Immersive full-screen media overlays
│   ├── VideoModal.tsx          # Embedded YouTube/Vimeo stream players
│   ├── CountUp.tsx             # Animated numerical stats counter
│   ├── Navbar.tsx              # Interactive, blur-backed master navigation header
│   ├── Footer.tsx              # Editorial credentials & site directory
│   ├── ScrollProgress.tsx      # Cinematic progress indicator bar
│   ├── ScrollToTop.tsx         # Fluent scrolling helper
│   └── KeyboardShortcutsHelp.tsx # Overlay for keyboard shortcuts
├── pages/                      # Main view components (Route targets)
│   ├── Home.tsx                # Master showcase landing page
│   ├── SelectedWork.tsx        # Filterable catalog of the studio's filmography
│   ├── MusicDocs.tsx           # Sound & Subcultural portrait showcase
│   ├── About.tsx               # Timeline, studio values, awards, and team
│   └── Contact.tsx             # Highly tailored customer & client acquisition engine
├── types.ts                    # Strongly-typed schema definitions & interfaces
├── data.ts                     # Core database with film synopses, reviews, and stats
├── index.css                   # Root styles, global tailwind imports, font configs
└── main.tsx                    # SPA entry point
```

---

## 🌐 Deployment

You can host this Single Page Application (SPA) completely for free using several modern cloud platforms:

<details>
<summary><b>A. Vercel (Recommended - Instant GitHub Deploy)</b></summary>
<br/>

1. Sign up on [Vercel](https://vercel.com/).
2. Link your GitHub repository.
3. Click **Import** next to your `aura-cinematic-portfolio` repo.
4. Vercel will automatically detect Vite and set the build configurations. Click **Deploy**.

</details>

<details>
<summary><b>B. Netlify (Drag-and-Drop or GitHub Sync)</b></summary>
<br/>

1. Sign up on [Netlify](https://www.netlify.com/).
2. Click **Add new site** -> **Import from Git** or drag and drop your `/dist` folder.
3. Configure the Build Settings:
   - **Build Command**: `npm run build`
   - **Publish directory**: `dist`
4. Add a `_redirects` file inside the `public/` directory with `/* /index.html 200` to support React Router single-page navigation reload.

</details>

<details>
<summary><b>C. GitHub Pages</b></summary>
<br/>

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

</details>

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
Once running, navigate to [http://localhost:8080](http://localhost:8080) in your web browser.

### 3. Stop the Container
```bash
docker stop aura-portfolio-live
docker rm aura-portfolio-live
```

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📬 Contact

**Project Link:** [https://github.com/your-username/aura-cinematic-portfolio](https://github.com/your-username/aura-cinematic-portfolio)

<div align="center">
  <sub>Built with ❤️ and a passion for cinematic storytelling.</sub>
</div>
```

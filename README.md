<div align="center">

<img src="./public/logo.svg" alt="Red Dead — The Frontier" width="120" />

# Red Dead — The Frontier

*An unofficial, fan-made editorial journal from the American West, 1899.*

<p>
  <img src="https://img.shields.io/badge/status-fan%20project-8b1a1a?style=for-the-badge" alt="Fan project" />
  <img src="https://img.shields.io/badge/node-%E2%89%A518-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node 18+" />
  <img src="https://img.shields.io/badge/license-unofficial-555?style=for-the-badge" alt="Unofficial" />
</p>

<p>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,ts,vite,tailwind,nodejs&theme=dark" alt="Tech stack icons" />
  </a>
</p>

</div>

> [!NOTE]
> Unofficial fan project. Not affiliated with, endorsed or sponsored by Rockstar Games or Take-Two Interactive.

---

## 📜 About

Dark and paper-light sections alternate; typography, grain, thin borders and sepia-treated plates give the site the feel of an old newspaper rather than a game portal.

## 🧰 Tech Stack

| | Technology | Purpose |
|---|---|---|
| <img src="https://skillicons.dev/icons?i=react" width="32" /> | **React 18** | UI components |
| <img src="https://skillicons.dev/icons?i=ts" width="32" /> | **TypeScript** | Static typing |
| <img src="https://skillicons.dev/icons?i=vite" width="32" /> | **Vite** | Dev server and bundler |
| <img src="https://skillicons.dev/icons?i=tailwind" width="32" /> | **Tailwind CSS 3** | Styling |
| <img src="https://cdn.simpleicons.org/framer/0055FF" width="32" /> | **Framer Motion** | Animations and transitions |
| <img src="https://cdn.simpleicons.org/lucide/F56565" width="32" /> | **Lucide React** | Icons |

<p>
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/Lucide-F56565?style=flat-square&logo=lucide&logoColor=white" />
</p>

## ✨ Features

- 🎬 **Hero**: cinematic slow background movement, parallax, 1899 stamp, scroll indicator
- 📰 **Story**: asymmetric editorial layout with plates, annotations and a timeline
- 🤠 **Characters**: previous/next buttons, clickable index, animated active indicator, slide/fade transitions
- 🗺️ **Frontier**: interactive SVG map plus region selector that swaps image and description
- 🔥 **The Gang**: tabbed documentary-style field notes
- 📓 **Journal**: asymmetric card grid with a working article modal (Esc to close, scroll lock)
- 🖼️ **Gallery**: masonry layout with hover captions and a lightbox (arrow keys, Esc, buttons)
- ⚙️ **Polish**: scroll progress bar, mobile menu, `prefers-reduced-motion` support, lazy-loaded images
- 🎨 **Fallbacks**: every image slot has a procedural fallback, so the site is complete before real photos are added

## 🚀 Getting Started

> Requires **Node.js 18+**

```bash
npm install
```

### Development

```bash
npm run dev        # http://localhost:5173
npm run typecheck  # TypeScript only
```

### Production build

```bash
npm run build      # type-check + build into dist/
npm run preview    # serve the production build locally
```

## 🖼️ Adding Images

See [`IMAGES.md`](./IMAGES.md) for the full manifest. Place files with the listed names under `public/images/`; they replace the fallback art automatically.

## 🗂️ Project Structure

```
src/
├─ assets/textures/   grain.svg, paper.svg
├─ components/        Header, Footer, Button, SectionHeading, Img, SceneArt,
│                     CharacterShowcase, RegionExplorer, Gallery, Lightbox,
│                     JournalCard, ArticleModal, Reveal, Logo, Stamp
├─ sections/          Hero, Story, Characters, Frontier, Gang, Journal,
│                     GallerySection, Closing
├─ data/              story, characters, regions, gang, journal, gallery
├─ hooks/             useScrollProgress, useLockBodyScroll
├─ types/             shared TypeScript types
├─ App.tsx · main.tsx · index.css
public/
├─ logo.svg           project logo
└─ images/            drop-in photographs (see IMAGES.md)
```

## 📝 Notes

- Character quotes are original, fan-written epigraphs in the spirit of each character, not transcripts of in-game dialogue.
- Social icons in the footer are placeholders; replace the `href` values in `src/components/Footer.tsx`.

---

<div align="center">
  <sub>Made with ♥ by a fan · Not affiliated with Rockstar Games or Take-Two Interactive</sub>
</div>

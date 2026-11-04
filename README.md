# Red Dead — The Frontier

An unofficial, fan-made editorial website styled as an interactive journal from the American West, 1899. Dark and paper-light sections alternate; typography, grain, thin borders and sepia-treated plates give it the feel of an old newspaper rather than a game portal.

> Unofficial fan project. Not affiliated with, endorsed or sponsored by Rockstar Games or Take-Two Interactive.

## Features

- Cinematic hero with slow background movement, parallax, 1899 stamp, scroll indicator
- Asymmetric editorial **Story** section with plates, annotations and a timeline
- **Characters** showcase: previous/next buttons, clickable index, animated active indicator, slide/fade transitions
- **Frontier** explorer: interactive SVG map plus region selector that swaps image and description
- **The Gang**: tabbed documentary-style field notes
- **Journal**: asymmetric card grid with a working article modal (Esc to close, scroll lock)
- **Gallery**: masonry layout with hover captions and a lightbox (arrow keys, Esc, buttons)
- Scroll progress bar, mobile menu, `prefers-reduced-motion` support, lazy-loaded images
- Every image slot has a procedural fallback, so the site is complete before real photos are added

## Technologies

React 18 · TypeScript · Vite · Tailwind CSS 3 · Framer Motion · Lucide React

## Installation

```bash
npm install
```

Requires Node.js 18+.

## Development

```bash
npm run dev        # http://localhost:5173
npm run typecheck  # TypeScript only
```

## Production build

```bash
npm run build      # type-check + build into dist/
npm run preview    # serve the production build locally
```

## Adding images

See [`IMAGES.md`](./IMAGES.md) for the full manifest. Place files with the listed names under `public/images/`; they replace the fallback art automatically.

## Project structure

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
public/images/        drop-in photographs (see IMAGES.md)
```

## Notes

- Character quotes are original, fan-written epigraphs in the spirit of each character, not transcripts of in-game dialogue.
- Social icons in the footer are placeholders; replace the `href` values in `src/components/Footer.tsx`.

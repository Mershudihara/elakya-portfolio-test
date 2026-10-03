# Elakya Sekar — Visual Designer

Single-page portfolio built with React + Vite and plain CSS.

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run preview  # serve the build
npm run lint     # oxlint
```

## Editing

- **Copy, links, projects** — `src/content.js` (email and LinkedIn are placeholders).
- **Colours, type scale, spacing, easing** — `src/styles/tokens.css`.
- **Base styles & shared utilities** (reveal-on-scroll, underline links, labels) — `src/styles/base.css`.
- **Sections** — `src/components/*.jsx`, each with a matching `.css` file.
- **Project artwork** — CSS-only placeholders in `src/components/visuals/`. Swap one for an image by
  changing the component mapped in `visuals/index.js`.

## Case studies

- **Surya OS** lives at `/work/surya-os/` (`work/surya-os/index.html` → `src/pages/SuryaCaseStudy.jsx`).
  It is a second Vite entry, registered in `vite.config.js` under `build.rollupOptions.input`.
- Copy and image slots are in `src/content/surya-os.js`. To replace a placeholder, add the image to
  `public/images/surya-os/` and set `file` and `alt` on the matching slot.
- Shared case-study styles: `src/components/case-study/CaseStudy.css`.

## Notes

- Fonts: Fraunces and Inter Tight (open source, self-hosted via Fontsource — no external requests).
- No images or stock assets; all project visuals are built with HTML/CSS.
- Motion respects `prefers-reduced-motion`. Scroll reveals use IntersectionObserver; the visuals'
  scroll-linked "settle" uses CSS scroll-driven animations where supported.
- Breakpoints: 1024px (tablet) and 640px (mobile).

# clone-linktree-app

A Linktree-style personal landing page for **Diego Motta**, Senior Fullstack Developer. One page with a short bio and social links, plus a second page listing career achievements. It works in English and Spanish.

**Live site:** https://diegomottadev.github.io

## Features

- **Profile page** (`/`): photo, title, bio and links to the career guide, portfolio, website, X (Twitter) and contact.
- **Results page** (`/results`): past jobs and projects in collapsible cards. URLs in the text become clickable links.
- **English / Spanish toggle**: English is the default. Switching language also updates the `<html lang>` attribute.
- **Animated background**, built with plain CSS.
- **SEO**: Open Graph and meta tags plus Google Analytics, set in `public/index.html`.

## Tech stack

- React 18 (Create React App), JavaScript/JSX
- React Router v6
- Plain CSS with custom properties: no preprocessors, CSS-in-JS or Tailwind
- Font Awesome icons (CDN)

## Getting started

You need Node.js and npm.

```bash
git clone https://github.com/diegomottadev/clone-linktree-app
cd clone-linktree-app
npm install
npm start        # dev server at http://localhost:3000
```

### Other scripts

```bash
npm run build    # production build in /build
npm test         # Jest in watch mode
```

## Project structure

```
src/
├── App.js                 # Routes, language state, language selector, background
├── index.css              # Global CSS variables (colors, font)
├── languajes/             # Translations (folder name is spelled "languajes")
│   ├── en.js
│   └── es.js
└── components/
    ├── Accordion.jsx      # Collapsible card; auto-links URLs and splits on 📌
    ├── Result/Result.jsx  # Achievements page and its bilingual data
    ├── Bio/  Title/  Subtitle/  UserName/  ProfilePicture/
    ├── HiperLink/         # Social / external link buttons
    └── DescriptionHyperlinks/
```

## Editing content

All content is hardcoded. There is no backend or API.

| What to change | Where |
| --- | --- |
| Title, bio, link labels | `src/languajes/en.js` and `src/languajes/es.js` |
| Jobs and projects on `/results` | `accordionData` (ES) and `accordionDataEn` (EN) in `src/components/Result/Result.jsx` |
| Colors and font | CSS variables in `src/index.css` |
| SEO meta tags and Analytics | `public/index.html` |

Change both language files together so English and Spanish stay in sync.

## Deployment

The site is served from [diegomottadev.github.io](https://diegomottadev.github.io); `homepage` in `package.json` is set to that URL. To deploy, run `npm run build` and commit the updated `build/` folder.

## Author

**Diego Motta**: [diegomottadev.github.io](https://diegomottadev.github.io) · [GitHub](https://github.com/diegomottadev)

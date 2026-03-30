# Venchidex

[![GitHub Pages](https://img.shields.io/static/v1?label=demo&message=GitHub%20Pages&color=blue&logo=github)](https://lexxakaatune.github.io/venchidex)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](#license)
[![Language: JavaScript](https://img.shields.io/badge/language-JavaScript-yellow.svg)](https://github.com/lexxakaatune/venchidex)

Live demo: https://lexxakaatune.github.io/venchidex

---

A lightweight advertisement website for Venchidex Electronics — browse and post electronics listings built with React and Vite.

Features
- Browse electronics listings with images and descriptions
- Create, edit, and delete advertisement posts (UI ready)
- Client-side routing with react-router
- SEO helpers via react-helmet-async
- Responsive design ready for mobile and desktop
- Deployable to GitHub Pages

Tech stack
- Frontend: React (React 19) + Vite
- Routing: react-router-dom
- SEO: react-helmet-async
- Build & dev: Vite
- Deployment: gh-pages to GitHub Pages

Repository
- Homepage (GitHub Pages): https://lexxakaatune.github.io/venchidex
- Repo: https://github.com/lexxakaatune/venchidex

Prerequisites
- Node.js (recommended >= 14.x)
- npm (or yarn)

Quick start (development)
```bash
# clone
git clone https://github.com/lexxakaatune/venchidex.git
cd venchidex

# install dependencies
npm install

# start dev server
npm run dev
# open http://localhost:5173 (default Vite port) or follow terminal output
```

Build & preview
```bash
# build for production
npm run build

# locally preview the production build
npm run preview
```

Deploy to GitHub Pages
This project is already configured to deploy to GitHub Pages using gh-pages. The package.json includes:
- "predeploy": "npm run build"
- "deploy": "gh-pages -d dist"
- "homepage": "https://lexxakaatune.github.io/venchidex"

To deploy:
```bash
npm run deploy
```
This will build the app and publish the contents of the dist folder to the gh-pages branch.

Scripts (from package.json)
- npm run dev — start Vite dev server
- npm run build — build production bundle
- npm run preview — preview production build locally
- npm run lint — run eslint
- npm run predeploy — runs build before deploy
- npm run deploy — publish dist via gh-pages

Dependencies (high level)
- react
- react-dom
- react-router-dom
- react-helmet-async

Dev Dependencies (high level)
- vite
- @vitejs/plugin-react
- eslint and related plugins
- gh-pages

Project structure (expected)
- /src — React source code
- /public or index.html — static entry
- package.json — scripts & deps
- vite.config.js — Vite config
- docs/ or assets/ — screenshots or docs (add as needed)

Screenshots
(Add real screenshots to /docs and update paths)
- docs/screenshot-home.png
- docs/screenshot-listing.png

Contributing
Contributions are welcome — please follow these steps:
1. Fork the repository
2. Create a branch: git checkout -b feature/your-feature
3. Commit your changes: git commit -m "Add my feature"
4. Push to your branch: git push origin feature/your-feature
5. Open a pull request

Please include tests and update documentation for any substantial changes.

Testing & linting
- Lint: npm run lint
- Add test setup as needed (not included by default)

Environment & API
- If you integrate a backend or external APIs, create a .env (or .env.example) and document required variables here.
- If using a database or auth provider, include setup and seeding instructions.

License
This project is to be licensed under the MIT License — include a LICENSE file in the repository.

Author
- lexxakaatune — https://github.com/lexxakaatune

Acknowledgements
- Built with Vite and React
- Deployment via gh-pages

To-do
- Add backend or persistent storage for ads (if required)
- Add user accounts & authentication
- Add tests and CI pipeline
- Add real screenshots and a detailed contributors guide

---

# AXONO IoT Solutions — React App

## Project Structure

```
axono-react/
├── index.html                        # Vite HTML entry
├── package.json                      # React 18 + React Router v6 + Vite 5
├── vite.config.js
└── src/
    ├── main.jsx                      # Entry — wraps app in <BrowserRouter>
    ├── App.jsx                       # Root — renders <AppRouter>
    ├── styles.css                    # Global CSS (original site styles)
    │
    ├── router/
    │   ├── AppRouter.jsx             # <Routes> wired from routes config + <Suspense>
    │   └── routes.jsx                # Route definitions — path / component / label
    │
    ├── layouts/
    │   └── MainLayout.jsx            # Navbar + scroll-to-top + padding logic
    │
    ├── components/
    │   ├── Navbar.jsx                # React Router <Link> / useLocation / useNavigate
    │   ├── Footer.jsx                # Footer with legal links
    │   └── PageLoader.jsx            # Suspense fallback spinner
    │
    ├── hooks/
    │   └── useHeroCanvas.js          # IoT network canvas animation (requestAnimationFrame)
    │
    ├── assets/
    │   └── logo.js                   # AXONO logo as base64 export
    │
    └── pages/
        ├── HomePage.jsx              # / 
        ├── SoftwarePage.jsx          # /software
        ├── EdgePage.jsx              # /edge
        ├── ScadaPage.jsx             # /scada
        ├── HardwarePage.jsx          # /hardware  (image placeholders ready)
        ├── AboutPage.jsx             # /about
        ├── ContactPage.jsx           # /contact
        ├── PrivacyPage.jsx           # /privacy
        ├── TermsPage.jsx             # /terms
        ├── EulaPage.jsx              # /eula
        ├── UnderConstructionPage.jsx # /construction
        └── NotFoundPage.jsx          # * (404 fallback)
```

## Routing Architecture

Uses **React Router v6** (`react-router-dom@6.22`):

| File | Role |
|------|------|
| `main.jsx` | Provides `<BrowserRouter>` at the top level |
| `router/routes.jsx` | Single source of truth for all route definitions |
| `router/AppRouter.jsx` | Renders `<Routes>` with `<Suspense>` for lazy loading |
| `layouts/MainLayout.jsx` | Wraps every page: `useLocation` → scroll-to-top + nav padding |
| `components/Navbar.jsx` | `<Link>` for nav, `useLocation` for active state |

Unknown routes fall through to `NotFoundPage` via the `path="*"` wildcard.

## Getting Started

```bash
# 1. Install
npm install

# 2. Dev server (http://localhost:5173)
npm run dev

# 3. Production build
npm run build

# 4. Preview build
npm run preview
```

## Requirements
- Node.js 18+
- npm 9+

## Adding Gateway Product Images (HardwarePage)

Each product card has a placeholder section. To replace with a real photo:

1. Add your image to `src/assets/` (e.g. `axg-max.png`)
2. Import it at the top of `HardwarePage.jsx`:
   ```js
   import axgMaxImg from '../assets/axg-max.png'
   ```
3. Pass it into the `inner` template string, or switch the page to JSX and use an `<img>` tag directly.

Recommended image size: **600 × 400 px**, white or transparent background.

## Legal Pages
- `/privacy` — Privacy Policy
- `/terms` — Terms of Use  
- `/eula` — End User License Agreement

All linked from the footer.

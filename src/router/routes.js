// ─── Route definitions — single source of truth ───────────────────────────
// All page imports are lazy-loaded for code splitting

import { lazy } from 'react'

export const ROUTES = [
  { path: '/',            label: 'Home',         nav: true,  component: lazy(() => import('@/pages/HomePage'))            },
  { path: '/software',    label: 'IoT Software', nav: true,  component: lazy(() => import('@/pages/SoftwarePage'))        },
  { path: '/edge',        label: 'Edge Computing',nav: true, component: lazy(() => import('@/pages/EdgePage'))            },
  { path: '/scada',       label: 'SCADA',        nav: true,  component: lazy(() => import('@/pages/ScadaPage'))           },
  { path: '/hardware',    label: 'IoT Gateway',  nav: true,  component: lazy(() => import('@/pages/HardwarePage'))        },
  { path: '/about',       label: 'About',        nav: true,  component: lazy(() => import('@/pages/AboutPage'))           },
  { path: '/contact',     label: 'Contact',      nav: false, component: lazy(() => import('@/pages/ContactPage'))         },
  { path: '/privacy',     label: 'Privacy Policy',nav: false,component: lazy(() => import('@/pages/PrivacyPage'))         },
  { path: '/terms',       label: 'Terms of Use', nav: false, component: lazy(() => import('@/pages/TermsPage'))           },
  { path: '/eula',        label: 'EULA',         nav: false, component: lazy(() => import('@/pages/EulaPage'))            },
  { path: '/construction',label: 'Coming Soon',  nav: false, component: lazy(() => import('@/pages/UnderConstructionPage'))},
]

export const NAV_ROUTES = ROUTES.filter(r => r.nav)

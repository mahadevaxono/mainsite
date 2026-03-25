import HomePage               from '../pages/HomePage.jsx'
import SoftwarePage           from '../pages/SoftwarePage.jsx'
import EdgePage               from '../pages/EdgePage.jsx'
import ScadaPage              from '../pages/ScadaPage.jsx'
import HardwarePage           from '../pages/HardwarePage.jsx'
import AboutPage              from '../pages/AboutPage.jsx'
import ContactPage            from '../pages/ContactPage.jsx'
import PrivacyPage            from '../pages/PrivacyPage.jsx'
import TermsPage              from '../pages/TermsPage.jsx'
import EulaPage               from '../pages/EulaPage.jsx'
import UnderConstructionPage  from '../pages/UnderConstructionPage.jsx'
import NotFoundPage           from '../pages/NotFoundPage.jsx'

/**
 * Application route definitions.
 * Each entry maps a URL path to a page component + metadata.
 * Used by <AppRouter> and the <Navbar> to render nav links.
 */
export const ROUTES = [
  { path: '/',            component: HomePage,              label: 'Home',         showInNav: true  },
  { path: '/software',    component: SoftwarePage,          label: 'IoT Software', showInNav: true  },
  { path: '/edge',        component: EdgePage,              label: 'Edge Computing', showInNav: true },
  { path: '/scada',       component: ScadaPage,             label: 'SCADA',        showInNav: true  },
  { path: '/hardware',    component: HardwarePage,          label: 'IoT Gateway',  showInNav: true  },
  { path: '/about',       component: AboutPage,             label: 'About',        showInNav: true  },
  { path: '/contact',     component: ContactPage,           label: 'Contact',      showInNav: false },
  { path: '/privacy',     component: PrivacyPage,           label: 'Privacy',      showInNav: false },
  { path: '/terms',       component: TermsPage,             label: 'Terms',        showInNav: false },
  { path: '/eula',        component: EulaPage,              label: 'EULA',         showInNav: false },
  { path: '/construction',component: UnderConstructionPage, label: 'Coming Soon',  showInNav: false },
  { path: '*',            component: NotFoundPage,          label: '404',          showInNav: false },
]

export default ROUTES

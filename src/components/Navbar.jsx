import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LOGO_SRC from '../assets/logo.js'

const NAV_LINKS = [
  { to: '/',         label: 'Home'           },
  { to: '/software', label: 'IoT Software'   },
  { to: '/edge',     label: 'Edge Computing' },
  { to: '/scada',    label: 'SCADA'          },
  { to: '/hardware', label: 'IoT Gateway'    },
  { to: '/about',    label: 'About'          },
  { to: '/contact',  label: 'Contact'        },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Scrolled shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav id="mainNav" className={scrolled ? 'scrolled' : ''}>

        {/* Logo */}
        <Link to="/" className="nav-logo">
          <img src="/images/axono-dark.png" alt="AXONO IoT Solutions" />
        </Link>

        {/* Desktop links */}
        <ul className="nav-links">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className={pathname === to ? 'active' : ''}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <Link to="/contact" className="nav-cta">Get a Demo</Link>

        {/* Hamburger */}
        <div
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 'var(--nav-h,72px)', left: 0, right: 0, zIndex: 999,
          background: 'white', borderBottom: '1px solid var(--border)',
          padding: '16px 24px',
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  style={{
                    display: 'block', padding: '10px 12px',
                    fontWeight: 600,
                    color: pathname === to ? 'var(--cyan)' : 'var(--gear)',
                    textDecoration: 'none', borderRadius: 6,
                    background: pathname === to ? 'var(--cyan-light)' : 'transparent',
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

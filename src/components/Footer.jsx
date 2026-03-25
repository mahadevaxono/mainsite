import { Link } from 'react-router-dom'
import LOGO_SRC from '../assets/logo.js'

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">

          <div className="footer-brand">
            <img src="/images/axono-light.png" alt="AXONO IoT Solutions"
              style={{ height: 40, display: 'block', marginBottom: 16 }}
            />
            <p>AXONO IoT Solutions delivers intelligent industrial IoT platforms, edge computing, SCADA systems and custom hardware for Industry 4.0.</p>
          </div>

          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li><Link to="/software">IoT Software</Link></li>
              <li><Link to="/edge">Edge Computing</Link></li>
              <li><Link to="/scada">SCADA System</Link></li>
              <li><Link to="/hardware">IoT Gateway</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/construction">Careers</Link></li>
              <li><Link to="/construction">Partners</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/construction">Documentation</Link></li>
              <li><Link to="/construction">API Reference</Link></li>
              <li><Link to="/construction">Case Studies</Link></li>
              <li><Link to="/construction">Support</Link></li>
              
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <span>&copy; 2026 AXONO IoT Solutions. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
            <Link to="/privacy"
              style={{ fontSize: 12, color: 'rgba(255,255,255,.45)', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <Link to="/terms"
              style={{ fontSize: 12, color: 'rgba(255,255,255,.45)', textDecoration: 'none' }}>
              Terms of Use
            </Link>
            <Link to="/eula"
              style={{ fontSize: 12, color: 'rgba(255,255,255,.45)', textDecoration: 'none' }}>
              EULA
            </Link>
          </div>
          <div className="footer-socials">
            <a className="social-link" title="LinkedIn">in</a>
            <a className="social-link" title="Twitter">𝕏</a>
            <a className="social-link" title="GitHub">⌥</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

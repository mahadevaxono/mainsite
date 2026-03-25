import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
  const navigate = useNavigate()

  const inner = `
  <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding-top:72px;background:linear-gradient(135deg,var(--navy) 0%,var(--navy2) 60%,#0a2540 100%);position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(0,191,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(0,191,255,.06) 1px,transparent 1px);background-size:48px 48px;"></div>
    <div style="position:absolute;bottom:-100px;left:-100px;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(239,68,68,.07) 0%,transparent 70%);pointer-events:none;"></div>
    <div style="text-align:center;position:relative;z-index:1;max-width:580px;padding:48px;">
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:clamp(100px,18vw,180px);font-weight:800;color:transparent;-webkit-text-stroke:2px rgba(0,191,255,.25);line-height:1;margin-bottom:8px;user-select:none;">404</div>
      <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.3);border-radius:100px;padding:6px 18px;margin-bottom:24px;">
        <span style="width:7px;height:7px;border-radius:50%;background:#EF4444;display:inline-block;"></span>
        <span style="font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#EF4444;">Page Not Found</span>
      </div>
      <h1 style="font-family:'Barlow Condensed',sans-serif;font-size:clamp(32px,4vw,52px);font-weight:800;color:var(--white);line-height:1.05;margin-bottom:18px;">Looks Like You're<br/>Lost in the Network</h1>
      <p style="font-size:16px;font-weight:300;color:rgba(255,255,255,.55);line-height:1.8;margin-bottom:36px;">The page you're looking for doesn't exist or has been moved. Let's get you back on track — here are some useful links.</p>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:32px;max-width:380px;margin-left:auto;margin-right:auto;">
        <button data-route="/" style="display:flex;align-items:center;justify-content:center;gap:8px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:14px;color:rgba(255,255,255,.7);font-family:'Barlow',sans-serif;font-size:14px;font-weight:600;cursor:pointer;transition:all .2s;" onmouseover="this.style.background='rgba(0,191,255,.1)';this.style.borderColor='rgba(0,191,255,.35)';this.style.color='var(--cyan)'" onmouseout="this.style.background='rgba(255,255,255,.05)';this.style.borderColor='rgba(255,255,255,.1)';this.style.color='rgba(255,255,255,.7)'">🏠 Home</button>
        <button data-route="/software" style="display:flex;align-items:center;justify-content:center;gap:8px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:14px;color:rgba(255,255,255,.7);font-family:'Barlow',sans-serif;font-size:14px;font-weight:600;cursor:pointer;transition:all .2s;" onmouseover="this.style.background='rgba(0,191,255,.1)';this.style.borderColor='rgba(0,191,255,.35)';this.style.color='var(--cyan)'" onmouseout="this.style.background='rgba(255,255,255,.05)';this.style.borderColor='rgba(255,255,255,.1)';this.style.color='rgba(255,255,255,.7)'">💻 IoT Software</button>
        <button data-route="/hardware" style="display:flex;align-items:center;justify-content:center;gap:8px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:14px;color:rgba(255,255,255,.7);font-family:'Barlow',sans-serif;font-size:14px;font-weight:600;cursor:pointer;transition:all .2s;" onmouseover="this.style.background='rgba(0,191,255,.1)';this.style.borderColor='rgba(0,191,255,.35)';this.style.color='var(--cyan)'" onmouseout="this.style.background='rgba(255,255,255,.05)';this.style.borderColor='rgba(255,255,255,.1)';this.style.color='rgba(255,255,255,.7)'">📡 IoT Gateway</button>
        <button data-route="/contact" style="display:flex;align-items:center;justify-content:center;gap:8px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:14px;color:rgba(255,255,255,.7);font-family:'Barlow',sans-serif;font-size:14px;font-weight:600;cursor:pointer;transition:all .2s;" onmouseover="this.style.background='rgba(0,191,255,.1)';this.style.borderColor='rgba(0,191,255,.35)';this.style.color='var(--cyan)'" onmouseout="this.style.background='rgba(255,255,255,.05)';this.style.borderColor='rgba(255,255,255,.1)';this.style.color='rgba(255,255,255,.7)'">📧 Contact</button>
      </div>
      <button data-route="/" class="btn-primary" style="font-size:15px;padding:14px 36px;cursor:pointer;">Back to Home &rarr;</button>
    </div>
  </div>`

  return (
    <div
      id="section-404"
      className="page-section active"
      dangerouslySetInnerHTML={{ __html: inner }}
      onClick={(e) => {
        const t = e.target.closest('[data-route]')
        if (t) { e.preventDefault(); navigate(t.dataset.route) }
      }}
    />
  )
}

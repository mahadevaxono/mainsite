import { useNavigate } from 'react-router-dom'

export default function UnderConstructionPage() {
  const navigate = useNavigate()

  const inner = `
  <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding-top:72px;background:linear-gradient(135deg,var(--navy) 0%,var(--navy2) 60%,#0a2540 100%);position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(0,191,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(0,191,255,.06) 1px,transparent 1px);background-size:48px 48px;"></div>
    <div style="position:absolute;top:-100px;right:-100px;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(0,191,255,.1) 0%,transparent 70%);pointer-events:none;"></div>
    <div style="text-align:center;position:relative;z-index:1;max-width:560px;padding:48px;">
      <div style="font-size:80px;margin-bottom:24px;animation:float 3s ease-in-out infinite;">🚧</div>
     
      <p style="font-size:16px;font-weight:300;color:rgba(255,255,255,.6);line-height:1.8;margin-bottom:36px;">This page is currently under development. Our team is working hard to bring it to you soon. In the meantime, explore what's already live or get in touch with us.</p>
      <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
        <button data-route="/" style="cursor:pointer" class="btn-primary">Go to Home &rarr;</button>
        <button data-route="/contact" style="display:inline-flex;align-items:center;background:transparent;color:var(--white);border:1.5px solid rgba(255,255,255,.25);cursor:pointer;font-family:'Barlow',sans-serif;font-size:15px;font-weight:500;padding:14px 28px;border-radius:6px;transition:all .25s;" onmouseover="this.style.borderColor='var(--cyan)';this.style.color='var(--cyan)'" onmouseout="this.style.borderColor='rgba(255,255,255,.25)';this.style.color='var(--white)'">Contact Us</button>
      </div>
    </div>
  </div>`

  return (
    <div
      id="section-construction"
      className="page-section active"
      dangerouslySetInnerHTML={{ __html: inner }}
      onClick={(e) => {
        const t = e.target.closest('[data-route]')
        if (t) { e.preventDefault(); navigate(t.dataset.route) }
      }}
    />
  )
}

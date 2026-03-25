import { useNavigate } from 'react-router-dom'

export default function TermsPage() {
  const navigate = useNavigate()

  const inner = `
  <div class="section-hero section-pt" style="padding-bottom:60px;">
    <div class="section-hero-inner">
      <span class="sec-tag">Legal</span>
      <h2 class="sec-title">Terms of Use</h2>
      <p class="sec-subtitle" style="font-size:14px;color:rgba(255,255,255,.5);">Last updated: January 2025 &nbsp;·&nbsp; AXONO IoT Solutions</p>
    </div>
  </div>
  <div class="content-wrap" style="max-width:860px;">
    
    <div style="display:flex;flex-direction:column;gap:36px;">

      <div>
        <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800;color:var(--navy);margin-bottom:12px;">1. Acceptance of Terms</h3>
        <p style="font-size:15px;color:var(--muted);line-height:1.85;">By accessing or using the AXONO IoT platform, website or any related services, you agree to be bound by these Terms of Use. If you do not agree, do not use our services. These terms apply to all users including customers, trial users and API integrators.</p>
      </div>

      <div>
        <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800;color:var(--navy);margin-bottom:12px;">2. Permitted Use</h3>
        <p style="font-size:15px;color:var(--muted);line-height:1.85;margin-bottom:12px;">You may use AXONO services for lawful industrial monitoring, automation and control purposes. You agree NOT to:</p>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;">
          <li style="display:flex;gap:10px;font-size:14px;color:var(--muted);"><span style="color:var(--cyan);font-weight:700;flex-shrink:0;">•</span>Attempt to gain unauthorised access to other customer data or platform systems</li>
          <li style="display:flex;gap:10px;font-size:14px;color:var(--muted);"><span style="color:var(--cyan);font-weight:700;flex-shrink:0;">•</span>Use the platform to transmit malware, spam or disruptive content</li>
          <li style="display:flex;gap:10px;font-size:14px;color:var(--muted);"><span style="color:var(--cyan);font-weight:700;flex-shrink:0;">•</span>Reverse-engineer, decompile or disassemble the platform software</li>
          <li style="display:flex;gap:10px;font-size:14px;color:var(--muted);"><span style="color:var(--cyan);font-weight:700;flex-shrink:0;">•</span>Resell or sublicense access to the platform without written agreement</li>
          <li style="display:flex;gap:10px;font-size:14px;color:var(--muted);"><span style="color:var(--cyan);font-weight:700;flex-shrink:0;">•</span>Use the platform for safety-critical applications without appropriate validation</li>
        </ul>
      </div>

      <div>
        <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800;color:var(--navy);margin-bottom:12px;">3. Account Responsibilities</h3>
        <p style="font-size:15px;color:var(--muted);line-height:1.85;">You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately at <strong>security@axono.io</strong> if you suspect unauthorised access.</p>
      </div>

      <div>
        <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800;color:var(--navy);margin-bottom:12px;">4. Data Ownership</h3>
        <p style="font-size:15px;color:var(--muted);line-height:1.85;">You retain full ownership of all device telemetry and operational data you transmit to the AXONO platform. AXONO does not claim ownership of your data and will not use it for any purpose other than providing the contracted services. You may export or delete your data at any time.</p>
      </div>

      <div>
        <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800;color:var(--navy);margin-bottom:12px;">5. Service Availability</h3>
        <p style="font-size:15px;color:var(--muted);line-height:1.85;">AXONO targets 99.9% platform uptime for cloud-hosted deployments. Scheduled maintenance will be communicated in advance. The AXONO Edge node is designed for continuous offline operation — cloud unavailability does not affect local monitoring or data logging.</p>
      </div>

      <div>
        <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800;color:var(--navy);margin-bottom:12px;">6. Limitation of Liability</h3>
        <p style="font-size:15px;color:var(--muted);line-height:1.85;">AXONO shall not be liable for indirect, incidental, consequential or punitive damages arising from use of the platform. Our maximum liability is limited to the fees paid in the 12 months preceding the claim. AXONO is not responsible for decisions made based on platform data without appropriate validation.</p>
      </div>

      <div>
        <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800;color:var(--navy);margin-bottom:12px;">7. Termination</h3>
        <p style="font-size:15px;color:var(--muted);line-height:1.85;">Either party may terminate the service agreement with 30 days written notice. Upon termination, you will have 30 days to export your data before it is permanently deleted from our servers.</p>
      </div>

      <div>
        <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800;color:var(--navy);margin-bottom:12px;">8. Governing Law</h3>
        <p style="font-size:15px;color:var(--muted);line-height:1.85;">These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu, India.</p>
      </div>

    </div>

    <div style="margin-top:48px;padding:24px;background:var(--off-white);border-radius:12px;border:1px solid var(--border);text-align:center;">
      <p style="font-size:14px;color:var(--muted);">Questions about this document? Contact us at <strong>legal@axono.io</strong></p>
    </div>
  </div>`

  return (
    <div
      id="section-terms"
      className="page-section active"
      dangerouslySetInnerHTML={{ __html: inner }}
      onClick={(e) => {
        const t = e.target.closest('[data-route]')
        if (t) { e.preventDefault(); navigate(t.dataset.route) }
      }}
    />
  )
}

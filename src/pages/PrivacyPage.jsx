import { useNavigate } from 'react-router-dom'

export default function PrivacyPage() {
  const navigate = useNavigate()

  const inner = `
  <div class="section-hero section-pt" style="padding-bottom:60px;">
    <div class="section-hero-inner">
      <span class="sec-tag">Legal</span>
      <h2 class="sec-title">Privacy Policy</h2>
      <p class="sec-subtitle" style="font-size:14px;color:rgba(255,255,255,.5);">Last updated: January 2025 &nbsp;·&nbsp; AXONO IoT Solutions</p>
    </div>
  </div>
  <div class="content-wrap" style="max-width:860px;">
    
    <div style="display:flex;flex-direction:column;gap:36px;">

      <div>
        <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800;color:var(--navy);margin-bottom:12px;">1. Introduction</h3>
        <p style="font-size:15px;color:var(--muted);line-height:1.85;">AXONO IoT Solutions ("AXONO", "we", "our", "us") is committed to protecting your personal data and your right to privacy. This Privacy Policy explains how we collect, use, store and share information when you use our platform, website and IoT services.</p>
      </div>

      <div>
        <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800;color:var(--navy);margin-bottom:12px;">2. Information We Collect</h3>
        <p style="font-size:15px;color:var(--muted);line-height:1.85;margin-bottom:12px;">We collect information in the following categories:</p>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:10px;">
          <li style="display:flex;gap:10px;font-size:14px;color:var(--muted);line-height:1.7;"><span style="color:var(--cyan);font-weight:700;flex-shrink:0;">•</span><span><strong style="color:var(--text);">Account Information:</strong> Name, email address, company name, phone number and role — provided when you create an account or contact us.</span></li>
          <li style="display:flex;gap:10px;font-size:14px;color:var(--muted);line-height:1.7;"><span style="color:var(--cyan);font-weight:700;flex-shrink:0;">•</span><span><strong style="color:var(--text);">Device Telemetry:</strong> Industrial sensor readings, device status, alarm events and operational data transmitted by your connected devices to the AXONO platform.</span></li>
          <li style="display:flex;gap:10px;font-size:14px;color:var(--muted);line-height:1.7;"><span style="color:var(--cyan);font-weight:700;flex-shrink:0;">•</span><span><strong style="color:var(--text);">Usage Data:</strong> Log data, browser type, pages visited, dashboard interactions and feature usage to help us improve the platform.</span></li>
          <li style="display:flex;gap:10px;font-size:14px;color:var(--muted);line-height:1.7;"><span style="color:var(--cyan);font-weight:700;flex-shrink:0;">•</span><span><strong style="color:var(--text);">Payment Information:</strong> Processed securely through third-party payment processors. We do not store raw card data.</span></li>
        </ul>
      </div>

      <div>
        <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800;color:var(--navy);margin-bottom:12px;">3. How We Use Your Information</h3>
        <p style="font-size:15px;color:var(--muted);line-height:1.85;margin-bottom:12px;">We use collected data to:</p>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;">
          <li style="display:flex;gap:10px;font-size:14px;color:var(--muted);"><span style="color:var(--cyan);font-weight:700;flex-shrink:0;">•</span>Provide, operate and improve the AXONO platform and services</li>
          <li style="display:flex;gap:10px;font-size:14px;color:var(--muted);"><span style="color:var(--cyan);font-weight:700;flex-shrink:0;">•</span>Send service notifications, security alerts and support messages</li>
          <li style="display:flex;gap:10px;font-size:14px;color:var(--muted);"><span style="color:var(--cyan);font-weight:700;flex-shrink:0;">•</span>Analyse usage patterns to improve performance and user experience</li>
          <li style="display:flex;gap:10px;font-size:14px;color:var(--muted);"><span style="color:var(--cyan);font-weight:700;flex-shrink:0;">•</span>Comply with legal obligations and enforce our terms</li>
        </ul>
      </div>

      <div>
        <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800;color:var(--navy);margin-bottom:12px;">4. Data Storage &amp; Security</h3>
        <p style="font-size:15px;color:var(--muted);line-height:1.85;">Your data is stored on secure cloud infrastructure with encryption at rest (AES-256) and in transit (TLS 1.3). We maintain access controls, audit logging, regular vulnerability assessments and follow industry-standard security practices. Device telemetry data is stored in isolated tenant environments — your data is never shared with other customers.</p>
      </div>

      <div>
        <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800;color:var(--navy);margin-bottom:12px;">5. Data Sharing</h3>
        <p style="font-size:15px;color:var(--muted);line-height:1.85;">We do not sell, rent or trade your personal data. We may share data with trusted service providers who assist in operating our platform (cloud hosting, payment processing, email delivery) under strict confidentiality obligations. We may disclose data when required by law or to protect our rights.</p>
      </div>

      <div>
        <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800;color:var(--navy);margin-bottom:12px;">6. Your Rights</h3>
        <p style="font-size:15px;color:var(--muted);line-height:1.85;">You have the right to access, correct, delete or export your personal data. You may withdraw consent or request restriction of processing at any time. To exercise these rights, contact us at <strong>privacy@axono.io</strong>.</p>
      </div>

      <div>
        <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800;color:var(--navy);margin-bottom:12px;">7. Cookies</h3>
        <p style="font-size:15px;color:var(--muted);line-height:1.85;">We use essential cookies for authentication and session management, and optional analytics cookies to understand platform usage. You can control cookie preferences through your browser settings.</p>
      </div>

      <div>
        <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800;color:var(--navy);margin-bottom:12px;">8. Changes to This Policy</h3>
        <p style="font-size:15px;color:var(--muted);line-height:1.85;">We may update this Privacy Policy periodically. We will notify you of significant changes by email or prominent notice on the platform. Continued use after changes constitutes acceptance.</p>
      </div>

    </div>

    <div style="margin-top:48px;padding:24px;background:var(--off-white);border-radius:12px;border:1px solid var(--border);text-align:center;">
      <p style="font-size:14px;color:var(--muted);">Questions about this document? Contact us at <strong>legal@axono.io</strong></p>
    </div>
  </div>`

  return (
    <div
      id="section-privacy"
      className="page-section active"
      dangerouslySetInnerHTML={{ __html: inner }}
      onClick={(e) => {
        const t = e.target.closest('[data-route]')
        if (t) { e.preventDefault(); navigate(t.dataset.route) }
      }}
    />
  )
}

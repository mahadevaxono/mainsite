import { useNavigate } from 'react-router-dom'

export default function EulaPage() {
  const navigate = useNavigate()

  const inner = `
  <div class="section-hero section-pt" style="padding-bottom:60px;">
    <div class="section-hero-inner">
      <span class="sec-tag">EULA</span>
      <h2 class="sec-title">End User License Agreement</h2>
      <p class="sec-subtitle" style="font-size:14px;color:rgba(255,255,255,.5);">Last updated: January 2025 &nbsp;·&nbsp; AXONO IoT Solutions</p>
    </div>
  </div>
  <div class="content-wrap" style="max-width:860px;">
    
    <div style="margin-bottom:24px;padding:20px 24px;background:var(--cyan-light);border:1.5px solid rgba(0,191,255,.3);border-radius:10px;">
      <p style="font-size:14px;font-weight:600;color:var(--navy);line-height:1.7;">IMPORTANT: Please read this End User License Agreement carefully before installing or using AXONO software. By installing, copying or using the software, you agree to be bound by the terms of this agreement.</p>
    </div>
    <div style="display:flex;flex-direction:column;gap:36px;">

      <div>
        <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800;color:var(--navy);margin-bottom:12px;">1. Grant of License</h3>
        <p style="font-size:15px;color:var(--muted);line-height:1.85;">AXONO IoT Solutions grants you a non-exclusive, non-transferable, limited license to install and use the AXONO platform software (including Edge node software, gateway firmware and web application) solely for your own internal business operations and in accordance with the documentation and these terms.</p>
      </div>

      <div>
        <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800;color:var(--navy);margin-bottom:12px;">2. Open-Source Components</h3>
        <p style="font-size:15px;color:var(--muted);line-height:1.85;">The AXONO platform incorporates open-source software components, including code licensed under Apache License 2.0. These components are subject to their respective licenses. AXONO customisations, branding, configuration and proprietary integrations remain the intellectual property of AXONO IoT Solutions.</p>
      </div>

      <div>
        <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800;color:var(--navy);margin-bottom:12px;">3. Restrictions</h3>
        <p style="font-size:15px;color:var(--muted);line-height:1.85;margin-bottom:12px;">You may not:</p>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;">
          <li style="display:flex;gap:10px;font-size:14px;color:var(--muted);"><span style="color:var(--cyan);font-weight:700;flex-shrink:0;">•</span>Copy, modify, merge, sublicense or distribute the proprietary portions of the software</li>
          <li style="display:flex;gap:10px;font-size:14px;color:var(--muted);"><span style="color:var(--cyan);font-weight:700;flex-shrink:0;">•</span>Reverse-engineer, decompile or disassemble the software except as permitted by law</li>
          <li style="display:flex;gap:10px;font-size:14px;color:var(--muted);"><span style="color:var(--cyan);font-weight:700;flex-shrink:0;">•</span>Remove or alter copyright, trademark or proprietary notices</li>
          <li style="display:flex;gap:10px;font-size:14px;color:var(--muted);"><span style="color:var(--cyan);font-weight:700;flex-shrink:0;">•</span>Use the software to build a competing product or service</li>
          <li style="display:flex;gap:10px;font-size:14px;color:var(--muted);"><span style="color:var(--cyan);font-weight:700;flex-shrink:0;">•</span>Install the software on hardware or systems not authorised under your license</li>
        </ul>
      </div>

      <div>
        <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800;color:var(--navy);margin-bottom:12px;">4. Firmware License (IoT Gateway)</h3>
        <p style="font-size:15px;color:var(--muted);line-height:1.85;">AXONO IoT Gateway hardware is supplied with proprietary firmware. The firmware is licensed, not sold. You may use the firmware solely on AXONO-supplied or AXONO-approved hardware. Firmware updates delivered via OTA are subject to this EULA. Unauthorised modification of gateway firmware voids warranty.</p>
      </div>

      <div>
        <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800;color:var(--navy);margin-bottom:12px;">5. Intellectual Property</h3>
        <p style="font-size:15px;color:var(--muted);line-height:1.85;">All proprietary components of the AXONO platform — including but not limited to the dashboard builder, rule engine customisations, SCADA HMI framework, gateway management system and AI modules — are and remain the intellectual property of AXONO IoT Solutions.</p>
      </div>

      <div>
        <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800;color:var(--navy);margin-bottom:12px;">6. Updates &amp; Upgrades</h3>
        <p style="font-size:15px;color:var(--muted);line-height:1.85;">AXONO may provide software updates, patches or new versions. Updates delivered via OTA or platform upgrade are subject to this EULA. Major version upgrades may require a new license agreement. AXONO may discontinue support for older versions with 90 days notice.</p>
      </div>

      <div>
        <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800;color:var(--navy);margin-bottom:12px;">7. Warranty Disclaimer</h3>
        <p style="font-size:15px;color:var(--muted);line-height:1.85;">The software is provided "as is" without warranty of any kind, express or implied. AXONO does not warrant that the software will be error-free or uninterrupted. You assume all risk for the selection and use of the software for your intended application.</p>
      </div>

      <div>
        <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800;color:var(--navy);margin-bottom:12px;">8. Termination</h3>
        <p style="font-size:15px;color:var(--muted);line-height:1.85;">This license is effective until terminated. Your rights under this EULA terminate automatically without notice if you fail to comply with any term. Upon termination you must cease all use and destroy all copies of the software in your possession.</p>
      </div>

    </div>

    <div style="margin-top:48px;padding:24px;background:var(--off-white);border-radius:12px;border:1px solid var(--border);text-align:center;">
      <p style="font-size:14px;color:var(--muted);">Questions about this document? Contact us at <strong>legal@axono.io</strong></p>
    </div>
  </div>`

  return (
    <div
      id="section-eula"
      className="page-section active"
      dangerouslySetInnerHTML={{ __html: inner }}
      onClick={(e) => {
        const t = e.target.closest('[data-route]')
        if (t) { e.preventDefault(); navigate(t.dataset.route) }
      }}
    />
  )
}

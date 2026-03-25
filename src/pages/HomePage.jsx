import { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useHeroCanvas } from '../hooks/useHeroCanvas'

export default function HomePage() {
  const canvasRef = useRef(null)
  useHeroCanvas(canvasRef)
  useEffect(() => {
    const canvas = document.getElementById('heroCanvas')
    if (canvas) canvasRef.current = canvas
  }, [])
  const navigate = useNavigate()

  const inner = `

  <!-- HERO -->
  <section class="hero">
    <div class="hero-grid-bg"></div>
    <div class="hero-orb o1"></div>
    <div class="hero-orb o2"></div>
    <div class="hero-inner">
      <div class="hero-content">
        <div class="hero-badge"><span class="dot"></span><span>Industrial IoT Platform</span></div>
        <h1 class="hero-title">
          Connect. Monitor.<br/><span class="accent">Automate.</span><br/>Everything.
        </h1>
        <p class="hero-sub">AXONO delivers end-to-end IoT solutions — from edge-intelligent gateways to cloud-powered SCADA. Real-time monitoring, automated alerts, OTA firmware updates, and zero data loss.</p>
        <div class="hero-btns">
          <button class="btn-primary" data-route="/software" style="cursor:pointer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Explore Platform
          </button>
          <button class="btn-outline" data-route="/contact" style="cursor:pointer">Request Demo →</button>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-canvas-wrap">
          <canvas id="heroCanvas" height="380"></canvas>
          <div class="hero-stats" style="position:relative;margin-top:16px;">
            <div class="hstat"><div class="hstat-val">4&#8209;in&#8209;1</div><div class="hstat-label">Integrated IoT Stack</div></div>
            <div class="hstat"><div class="hstat-val">99.9%</div><div class="hstat-label">Platform Uptime</div></div>
            <div class="hstat"><div class="hstat-val">&lt;50ms</div><div class="hstat-label">Edge Latency</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PRODUCT OVERVIEW STRIP -->
  <section class="products-strip">
    <div class="products-strip-inner">
      <p class="strip-title">Our Product Portfolio</p>
      <div class="product-cards">
        <div class="product-card" data-route="/software" style="cursor:pointer">
          <div class="pc-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>
          </div>
          <div class="pc-title">IoT Software Platform</div>
          <div class="pc-desc">Monitor, control, report, alerts, notifications, remote control & OTA firmware updates.</div>
          <div class="pc-arrow">Learn More <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
        </div>
        <div class="product-card" data-route="/edge" style="cursor:pointer">
          <div class="pc-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
          </div>
          <div class="pc-title">Edge Computing</div>
          <div class="pc-desc">Local monitoring & processing. No data loss. Offline operation with seamless cloud sync.</div>
          <div class="pc-arrow">Learn More <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
        </div>
        <div class="product-card" data-route="/scada" style="cursor:pointer">
          <div class="pc-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          </div>
          <div class="pc-title">SCADA System</div>
          <div class="pc-desc">Connect any PLC. Modbus, OPC-UA, DNP3 support. Industrial automation & visualization.</div>
          <div class="pc-arrow">Learn More <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
        </div>
        <div class="product-card" data-route="/hardware" style="cursor:pointer">
          <div class="pc-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
          </div>
          <div class="pc-title">IoT Gateway & Hardware</div>
          <div class="pc-desc">Custom hardware to connect, control & configure devices, sensors & industrial machines.</div>
          <div class="pc-arrow">Learn More <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ KEY FEATURES / WHY CHOOSE AXONO ═══ -->
  <section style="background:var(--white);padding:80px 48px;border-top:1px solid var(--border);">
    <div style="max-width:1280px;margin:0 auto;">
      <div style="text-align:center;margin-bottom:56px;">
        <span class="sec-tag" style="color:var(--cyan-dark);display:block;text-align:center;">Why Choose AXONO</span>
        <h2 style="font-family:'Barlow Condensed',sans-serif;font-size:clamp(32px,4vw,52px);font-weight:800;color:var(--navy);letter-spacing:-.5px;margin-bottom:16px;">One Platform. Edge to Cloud.<br/>Zero Compromise.</h2>
        <p style="font-size:16px;color:var(--muted);max-width:560px;margin:0 auto;line-height:1.8;">Most IoT platforms force you to choose between cloud capability and edge resilience. AXONO delivers both — always collecting, always processing, always available.</p>
      </div>

      <div class="features-grid">

        <div class="feature-card">
          <div class="fc-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          </div>
          <div class="fc-title">Real-Time Monitoring</div>
          <div class="fc-desc">Live dashboards with drag-and-drop widgets — charts, gauges, maps, tables. Sub-second refresh across thousands of simultaneous data points from any browser or mobile device.</div>
          <div class="fc-tags">
            <span class="tag">Live Charts</span>
            <span class="tag">Custom Widgets</span>
            <span class="tag">Mobile App</span>
          </div>
        </div>

        <div class="feature-card">
          <div class="fc-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <div class="fc-title">Zero Data Loss Edge</div>
          <div class="fc-desc">Edge nodes run fully offline, buffering all data locally. Every single record syncs automatically on reconnect — zero data loss guaranteed, no exceptions, no gaps.</div>
          <div class="fc-tags">
            <span class="tag">Offline Mode</span>
            <span class="tag">Auto Sync</span>
            <span class="tag">&lt;50ms Latency</span>
          </div>
        </div>

        <div class="feature-card">
          <div class="fc-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          </div>
          <div class="fc-title">Universal SCADA</div>
          <div class="fc-desc">Connect any PLC — Siemens, Allen-Bradley, Schneider, Mitsubishi — via Modbus, OPC-UA or BACnet. Web-based HMI with live P&amp;ID mimics. No desktop software needed.</div>
          <div class="fc-tags">
            <span class="tag">Any PLC</span>
            <span class="tag">Modbus · OPC-UA</span>
            <span class="tag">Web HMI</span>
          </div>
        </div>

        <div class="feature-card">
          <div class="fc-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          </div>
          <div class="fc-title">Smart Alerts</div>
          <div class="fc-desc">Threshold-based alarms with escalation policies. Deliver to Email, SMS, Slack, Teams, WhatsApp or Webhook. Visual rule chain builder — no coding required.</div>
          <div class="fc-tags">
            <span class="tag">Rule Engine</span>
            <span class="tag">Multi-channel</span>
            <span class="tag">Escalation</span>
          </div>
        </div>

        <div class="feature-card">
          <div class="fc-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.5"/></svg>
          </div>
          <div class="fc-title">OTA Firmware Updates</div>
          <div class="fc-desc">Push firmware to entire device fleets remotely. Staged rollouts, automatic rollback on failure, per-device version tracking. No site visits, ever.</div>
          <div class="fc-tags">
            <span class="tag">Fleet Updates</span>
            <span class="tag">Staged Rollout</span>
            <span class="tag">Auto Rollback</span>
          </div>
        </div>

        <div class="feature-card">
          <div class="fc-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div class="fc-title">Enterprise Security</div>
          <div class="fc-desc">TLS 1.3 encryption, X.509 certificates, OAuth2/LDAP/SSO, full RBAC, multi-tenancy and immutable audit logs. Security built-in from the ground up, not bolted on.</div>
          <div class="fc-tags">
            <span class="tag">TLS 1.3</span>
            <span class="tag">RBAC</span>
            <span class="tag">SSO / LDAP</span>
          </div>
        </div>

      </div>

      <!-- Why AXONO 4-point strip -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);border-radius:12px;overflow:hidden;margin-top:16px;">
        <div style="background:var(--off-white);padding:28px 24px;transition:all .25s;"
          onmouseover="this.style.background='var(--cyan-light)';this.style.borderColor='var(--cyan)'"
          onmouseout="this.style.background='var(--off-white)'">
          <div style="font-size:28px;margin-bottom:12px;">🔓</div>
          <div style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:var(--navy);margin-bottom:6px;">No Vendor Lock-in</div>
          <div style="font-size:13px;color:var(--muted);line-height:1.65;">Deploy on your servers, any cloud, or AXONO-hosted. Your data stays yours.</div>
        </div>
        <div style="background:var(--off-white);padding:28px 24px;transition:all .25s;"
          onmouseover="this.style.background='var(--cyan-light)'"
          onmouseout="this.style.background='var(--off-white)'">
          <div style="font-size:28px;margin-bottom:12px;">🔧</div>
          <div style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:var(--navy);margin-bottom:6px;">Existing Equipment</div>
          <div style="font-size:13px;color:var(--muted);line-height:1.65;">Connects to any PLC, meter or sensor. RS485, Ethernet, 4G. No replacements needed.</div>
        </div>
        <div style="background:var(--off-white);padding:28px 24px;transition:all .25s;"
          onmouseover="this.style.background='var(--cyan-light)'"
          onmouseout="this.style.background='var(--off-white)'">
          <div style="font-size:28px;margin-bottom:12px;">🚀</div>
          <div style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:var(--navy);margin-bottom:6px;">Pilot in Weeks</div>
          <div style="font-size:13px;color:var(--muted);line-height:1.65;">Pre-built connectors, plug-and-play gateways and ready-made dashboards.</div>
        </div>
        <div style="background:var(--off-white);padding:28px 24px;transition:all .25s;"
          onmouseover="this.style.background='var(--cyan-light)'"
          onmouseout="this.style.background='var(--off-white)'">
          <div style="font-size:28px;margin-bottom:12px;">🏗️</div>
          <div style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:var(--navy);margin-bottom:6px;">Industrial Grade</div>
          <div style="font-size:13px;color:var(--muted);line-height:1.65;">Harsh environments, wide temperature range, 24/7 continuous operation.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ HOW IT WORKS — STEP BY STEP ═══ -->
  <section class="workflow-section" style="padding:80px 48px;">
    <div style="max-width:1280px;margin:0 auto;">
      <p class="workflow-title">How AXONO Works — Step by Step</p>
      <p class="workflow-sub">Five steps from raw sensor data to actionable intelligence, all managed from one platform.</p>

      <div style="display:flex;flex-direction:column;gap:24px;margin-top:48px;position:relative;">

        <!-- Vertical timeline connector -->
        <div style="position:absolute;left:35px;top:44px;bottom:44px;width:2px;background:linear-gradient(180deg,var(--cyan) 0%,rgba(0,191,255,0.15) 100%);z-index:0;"></div>

        <!-- Step 1 -->
        <div style="display:grid;grid-template-columns:72px 1fr;gap:28px;align-items:start;position:relative;z-index:1;">
          <div style="width:72px;height:72px;border-radius:50%;background:var(--cyan);display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 0 24px rgba(0,191,255,0.4);">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/></svg>
          </div>
          <div class="feature-card" style="margin-top:8px;">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
              <span style="font-size:10px;font-weight:800;letter-spacing:2px;color:var(--cyan);background:var(--cyan-light);padding:4px 12px;border-radius:100px;border:1px solid rgba(0,191,255,0.25);">STEP 01</span>
              <h3 class="fc-title" style="margin:0;">Connect Your Devices &amp; Machines</h3>
            </div>
            <p class="fc-desc" style="margin-bottom:16px;">Install the AXONO IoT Gateway on-site. Connect your existing sensors, PLCs, energy meters and machines via RS485, Ethernet or wireless — no rewiring, no equipment replacement needed.</p>
            <div class="fc-tags">
              <span class="tag">RS485 / RS232</span>
              <span class="tag">Ethernet / LAN</span>
              <span class="tag">4G LTE / Wi-Fi</span>
              <span class="tag">LoRa / BLE</span>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div style="display:grid;grid-template-columns:72px 1fr;gap:28px;align-items:start;position:relative;z-index:1;">
          <div style="width:72px;height:72px;border-radius:50%;background:var(--white);border:2px solid var(--cyan);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <div class="feature-card" style="margin-top:8px;">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
              <span style="font-size:10px;font-weight:800;letter-spacing:2px;color:var(--cyan);background:var(--cyan-light);padding:4px 12px;border-radius:100px;border:1px solid rgba(0,191,255,0.25);">STEP 02</span>
              <h3 class="fc-title" style="margin:0;">Edge Processing — Always On</h3>
            </div>
            <p class="fc-desc" style="margin-bottom:16px;">The AXONO Edge node processes data locally in real time, 100% independently of internet connectivity. Dashboards, alarms and rules run locally. All data is buffered during outages and syncs automatically on reconnect — guaranteed zero data loss.</p>
            <div class="fc-tags">
              <span class="tag">100% Offline Capable</span>
              <span class="tag">Local Alarms &amp; Control</span>
              <span class="tag">Auto Cloud Sync</span>
              <span class="tag">Zero Data Loss</span>
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div style="display:grid;grid-template-columns:72px 1fr;gap:28px;align-items:start;position:relative;z-index:1;">
          <div style="width:72px;height:72px;border-radius:50%;background:var(--white);border:2px solid var(--cyan);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" stroke-width="2.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
          </div>
          <div class="feature-card" style="margin-top:8px;">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
              <span style="font-size:10px;font-weight:800;letter-spacing:2px;color:var(--cyan);background:var(--cyan-light);padding:4px 12px;border-radius:100px;border:1px solid rgba(0,191,255,0.25);">STEP 03</span>
              <h3 class="fc-title" style="margin:0;">Data Flows to the AXONO Cloud</h3>
            </div>
            <p class="fc-desc" style="margin-bottom:16px;">Processed data streams securely to the AXONO platform over encrypted channels. The cloud ingests millions of data points per minute, stores them in a time-series database and makes them instantly available for dashboards, analytics and reporting.</p>
            <div class="fc-tags">
              <span class="tag">MQTT · HTTPS · gRPC</span>
              <span class="tag">Time-Series Storage</span>
              <span class="tag">TLS 1.3 · X.509</span>
              <span class="tag">1M+ msg/min</span>
            </div>
          </div>
        </div>

        <!-- Step 4 -->
        <div style="display:grid;grid-template-columns:72px 1fr;gap:28px;align-items:start;position:relative;z-index:1;">
          <div style="width:72px;height:72px;border-radius:50%;background:var(--white);border:2px solid var(--cyan);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" stroke-width="2.5"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>
          </div>
          <div class="feature-card" style="margin-top:8px;">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
              <span style="font-size:10px;font-weight:800;letter-spacing:2px;color:var(--cyan);background:var(--cyan-light);padding:4px 12px;border-radius:100px;border:1px solid rgba(0,191,255,0.25);">STEP 04</span>
              <h3 class="fc-title" style="margin:0;">Monitor, Visualise &amp; Control</h3>
            </div>
            <p class="fc-desc" style="margin-bottom:16px;">Access your live dashboard from any browser or mobile device. View real-time charts, SCADA P&amp;ID mimics, alarm consoles and device status. Send remote commands and control outputs directly — from anywhere in the world, no client software needed.</p>
            <div class="fc-tags">
              <span class="tag">Web Browser</span>
              <span class="tag">iOS &amp; Android</span>
              <span class="tag">SCADA HMI</span>
              <span class="tag">REST API</span>
            </div>
          </div>
        </div>

        <!-- Step 5 -->
        <div style="display:grid;grid-template-columns:72px 1fr;gap:28px;align-items:start;position:relative;z-index:1;">
          <div style="width:72px;height:72px;border-radius:50%;background:var(--white);border:2px solid var(--cyan);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          </div>
          <div class="feature-card" style="margin-top:8px;">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
              <span style="font-size:10px;font-weight:800;letter-spacing:2px;color:var(--cyan);background:var(--cyan-light);padding:4px 12px;border-radius:100px;border:1px solid rgba(0,191,255,0.25);">STEP 05</span>
              <h3 class="fc-title" style="margin:0;">Automated Reports, Alerts &amp; OTA</h3>
            </div>
            <p class="fc-desc" style="margin-bottom:16px;">The platform continuously runs your rule chains — triggering alarms, sending notifications to Email/SMS/Slack and generating scheduled PDF/Excel reports automatically. Update device firmware fleet-wide over-the-air without a single site visit.</p>
            <div class="fc-tags">
              <span class="tag">Smart Alerts</span>
              <span class="tag">Auto PDF/Excel Reports</span>
              <span class="tag">OTA Fleet Updates</span>
              <span class="tag">Analytics</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ═══ INDUSTRIES WE SERVE ═══ -->
  <section style="background:var(--white);padding:80px 48px;border-top:1px solid var(--border);">
    <div style="max-width:1280px;margin:0 auto;">
      <div style="text-align:center;margin-bottom:56px;">
        <span class="sec-tag" style="color:var(--cyan-dark);display:block;text-align:center;">Industries We Serve</span>
        <h2 style="font-family:'Barlow Condensed',sans-serif;font-size:clamp(32px,4vw,52px);font-weight:800;color:var(--navy);letter-spacing:-.5px;margin-bottom:16px;">Built for Every Industrial Sector</h2>
        <p style="font-size:16px;color:var(--muted);max-width:520px;margin:0 auto;line-height:1.8;">From factory floors to utility substations — AXONO connects, monitors and automates across every sector.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;">

        <div class="feature-card" style="display:flex;gap:20px;align-items:flex-start;padding:28px;">
          <div style="font-size:40px;flex-shrink:0;line-height:1;">🏭</div>
          <div>
            <div class="fc-title">Manufacturing</div>
            <div class="fc-desc">Machine monitoring, OEE tracking, production counts, quality alerts, predictive maintenance and automated shift reporting across production lines.</div>
          </div>
        </div>

        <div class="feature-card" style="display:flex;gap:20px;align-items:flex-start;padding:28px;">
          <div style="font-size:40px;flex-shrink:0;line-height:1;">⚡</div>
          <div>
            <div class="fc-title">Energy &amp; Power</div>
            <div class="fc-desc">Energy meters, power factor, substation monitoring, solar/wind integration, demand management and automated monthly billing reports.</div>
          </div>
        </div>

        <div class="feature-card" style="display:flex;gap:20px;align-items:flex-start;padding:28px;">
          <div style="font-size:40px;flex-shrink:0;line-height:1;">💧</div>
          <div>
            <div class="fc-title">Water Treatment</div>
            <div class="fc-desc">Pump control, tank levels, flow rates, chlorine dosing, pH monitoring and full P&amp;ID SCADA visualisation with ISA-18.2 alarm management.</div>
          </div>
        </div>

        <div class="feature-card" style="display:flex;gap:20px;align-items:flex-start;padding:28px;">
          <div style="font-size:40px;flex-shrink:0;line-height:1;">🏗️</div>
          <div>
            <div class="fc-title">Infrastructure</div>
            <div class="fc-desc">Remote site monitoring, generator status, structural sensors, environment monitoring and automated alarm escalation to on-call teams.</div>
          </div>
        </div>

        <div class="feature-card" style="display:flex;gap:20px;align-items:flex-start;padding:28px;">
          <div style="font-size:40px;flex-shrink:0;line-height:1;">🌾</div>
          <div>
            <div class="fc-title">Agriculture</div>
            <div class="fc-desc">Soil moisture, weather station, irrigation automation, cold-chain temperature monitoring and pump management via long-range LoRa gateways.</div>
          </div>
        </div>

        <div class="feature-card" style="display:flex;gap:20px;align-items:flex-start;padding:28px;">
          <div style="font-size:40px;flex-shrink:0;line-height:1;">🏢</div>
          <div>
            <div class="fc-title">Smart Buildings</div>
            <div class="fc-desc">HVAC, lighting, access control, energy sub-metering, BACnet integration and facility management dashboards for multi-floor, multi-site buildings.</div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ═══ CTA BANNER ═══ -->
  <div class="highlight-box" style="margin:0;border-radius:0;background:linear-gradient(135deg,var(--cyan-light) 0%,#EFF6FF 100%);border:none;border-top:1.5px solid rgba(0,191,255,0.3);border-bottom:1.5px solid rgba(0,191,255,0.3);padding:72px 48px;">
    <div style="max-width:840px;margin:0 auto;text-align:center;">
      <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(0,191,255,0.15);border:1px solid rgba(0,191,255,0.35);border-radius:100px;padding:6px 20px;margin-bottom:24px;">
        <span style="width:7px;height:7px;border-radius:50%;background:var(--cyan);animation:pulse 2s infinite;display:inline-block;flex-shrink:0;"></span>
        <span style="font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:var(--cyan-dark);">Ready to Get Started?</span>
      </div>
      <h2 style="font-family:'Barlow Condensed',sans-serif;font-size:clamp(34px,5vw,60px);font-weight:800;color:var(--navy);line-height:1.05;letter-spacing:-1px;margin-bottom:18px;">Transform Your Industrial<br/>Operations with AXONO</h2>
      <p style="font-size:17px;color:var(--muted);line-height:1.8;max-width:560px;margin:0 auto 40px;">Talk to our team — we'll understand your process, recommend the right solution and get you from pilot to production in weeks.</p>
      <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-bottom:36px;">
        <button data-route="/contact" class="btn-primary" style="font-size:16px;padding:16px 40px;cursor:pointer;">
          Request a Free Demo &#8594;
        </button>
        <button data-route="/software"
          style="display:inline-flex;align-items:center;gap:10px;background:var(--navy);color:#ffffff;border:2px solid var(--navy);cursor:pointer;font-family:'Barlow',sans-serif;font-size:16px;font-weight:700;padding:16px 40px;border-radius:6px;transition:all .25s;box-shadow:0 4px 16px rgba(13,27,46,0.2);"
          onmouseover="this.style.background='#1a3a6e';this.style.borderColor='#1a3a6e';this.style.transform='translateY(-2px)';this.style.boxShadow='0 8px 28px rgba(13,27,46,0.3)'"
          onmouseout="this.style.background='var(--navy)';this.style.borderColor='var(--navy)';this.style.transform='translateY(0)';this.style.boxShadow='0 4px 16px rgba(13,27,46,0.2)'">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>
          Explore the Platform
        </button>
      </div>
      <div style="display:flex;gap:0;justify-content:center;padding-top:28px;border-top:1px solid rgba(0,191,255,0.2);">
        <div style="text-align:center;padding:0 32px;border-right:1px solid rgba(0,191,255,0.2);">
          <div style="font-size:13px;color:var(--muted);margin-bottom:4px;">Response time</div>
          <div style="font-size:15px;font-weight:700;color:var(--navy);">Within 24 hours</div>
        </div>
        <div style="text-align:center;padding:0 32px;border-right:1px solid rgba(0,191,255,0.2);">
          <div style="font-size:13px;color:var(--muted);margin-bottom:4px;">Consultation</div>
          <div style="font-size:15px;font-weight:700;color:var(--navy);">Free, no commitment</div>
        </div>
        <div style="text-align:center;padding:0 32px;">
          <div style="font-size:13px;color:var(--muted);margin-bottom:4px;">Deployment</div>
          <div style="font-size:15px;font-weight:700;color:var(--navy);">Weeks, not months</div>
        </div>
      </div>
    </div>
  </div>
</div>
`

  return (
    <div
      id="section-home"
      className="page-section active"
      dangerouslySetInnerHTML={{ __html: inner }}
      onClick={(e) => {
        const t = e.target.closest('[data-route]')
        if (t) { e.preventDefault(); navigate(t.dataset.route) }
      }}
    />
  )
}

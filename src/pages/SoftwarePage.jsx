import { useNavigate } from 'react-router-dom'

export default function SoftwarePage() {
  const navigate = useNavigate()

  const inner = `
  <div class="section-hero section-pt">
    <div class="section-hero-inner">
      <span class="sec-tag">IoT Software Platform</span>
      <h2 class="sec-title">Complete IoT Management<br/>Software Suite</h2>
      <p class="sec-subtitle">A unified platform to monitor, control, automate and optimize your connected devices — from the edge to the cloud.</p>
    </div>
  </div>

  <div class="content-wrap">
    <!-- Key features -->
    <span class="sec-tag" style="color:var(--cyan-dark);">Core Capabilities</span>
    <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:32px;font-weight:800;color:var(--navy);margin-bottom:36px;">Everything You Need in One Platform</h3>
    <div class="features-grid">
      <div class="feature-card">
        <div class="fc-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
        <div class="fc-title">Real-Time Monitoring</div>
        <div class="fc-desc">Live dashboards with customizable widgets showing sensor readings, device status, and KPIs in real time. Supports thousands of concurrent data points with sub-second refresh.</div>
        <div class="fc-tags"><span class="tag">Live Charts</span><span class="tag">Custom Widgets</span><span class="tag">Historical Data</span></div>
      </div>
      <div class="feature-card">
        <div class="fc-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg></div>
        <div class="fc-title">Remote Control</div>
        <div class="fc-desc">Send commands, toggle relays, adjust setpoints and control actuators remotely from any browser or mobile device. Full audit trail of all control actions.</div>
        <div class="fc-tags"><span class="tag">Command Sending</span><span class="tag">Relay Control</span><span class="tag">Audit Log</span></div>
      </div>
      <div class="feature-card">
        <div class="fc-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></div>
        <div class="fc-title">Report Generation</div>
        <div class="fc-desc">Automated PDF and Excel reports with charts, statistics and trend analysis. Schedule daily, weekly, or monthly delivery to any email. Custom report templates available.</div>
        <div class="fc-tags"><span class="tag">PDF / Excel</span><span class="tag">Scheduled</span><span class="tag">Custom Templates</span></div>
      </div>
      <div class="feature-card">
        <div class="fc-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg></div>
        <div class="fc-title">Smart Alerts & Notifications</div>
        <div class="fc-desc">Configure threshold-based alerts with escalation policies. Deliver notifications via Email, SMS, WhatsApp, Telegram, or webhook. Supports multi-condition logic rules.</div>
        <div class="fc-tags"><span class="tag">Email/SMS</span><span class="tag">WhatsApp</span><span class="tag">Webhook</span><span class="tag">Escalation</span></div>
      </div>
      <div class="feature-card">
        <div class="fc-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.5"/></svg></div>
        <div class="fc-title">OTA Firmware Updates</div>
        <div class="fc-desc">Push firmware updates to individual devices or entire fleets over-the-air. Supports rollback, staged rollouts, and update scheduling. Firmware version tracking per device.</div>
        <div class="fc-tags"><span class="tag">Fleet Updates</span><span class="tag">Rollback</span><span class="tag">Staged Rollout</span></div>
      </div>
      <div class="feature-card">
        <div class="fc-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <div class="fc-title">Device Management</div>
        <div class="fc-desc">Centralized inventory of all connected devices. Group management, tag-based filtering, device health scoring, and lifecycle tracking from provisioning to decommission.</div>
        <div class="fc-tags"><span class="tag">Inventory</span><span class="tag">Grouping</span><span class="tag">Lifecycle</span></div>
      </div>
    </div>

    <!-- Additional features row -->
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:64px;">
      <div style="background:var(--off-white);border:1px solid var(--border);border-radius:10px;padding:20px;">
        <div style="font-size:20px;margin-bottom:8px;">📈</div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:var(--navy);margin-bottom:6px;">Analytics Engine</div>
        <div style="font-size:13px;color:var(--muted);line-height:1.6;">Trend analysis, aggregations, moving averages, and predictive alerts.</div>
      </div>
      <div style="background:var(--off-white);border:1px solid var(--border);border-radius:10px;padding:20px;">
        <div style="font-size:20px;margin-bottom:8px;">🔗</div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:var(--navy);margin-bottom:6px;">REST API & Webhooks</div>
        <div style="font-size:13px;color:var(--muted);line-height:1.6;">Full REST API for integration with ERP, MES, and third-party systems.</div>
      </div>
      <div style="background:var(--off-white);border:1px solid var(--border);border-radius:10px;padding:20px;">
        <div style="font-size:20px;margin-bottom:8px;">👥</div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:var(--navy);margin-bottom:6px;">Multi-Tenant & RBAC</div>
        <div style="font-size:13px;color:var(--muted);line-height:1.6;">Role-based access control, multi-tenant support, SSO integration.</div>
      </div>
      <div style="background:var(--off-white);border:1px solid var(--border);border-radius:10px;padding:20px;">
        <div style="font-size:20px;margin-bottom:8px;">📱</div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:var(--navy);margin-bottom:6px;">Mobile App</div>
        <div style="font-size:13px;color:var(--muted);line-height:1.6;">iOS & Android apps for on-the-go monitoring and control.</div>
      </div>
    </div>

    <!-- Workflow: Software -->
    <div class="highlight-box">
      <h4>Software Architecture Overview</h4>
      <p>AXONO's IoT Platform is built on a microservices architecture with separate services for data ingestion, processing, storage, alerting, and visualization. Supports MQTT, HTTP/REST, and WebSocket protocols for device communication.</p>
    </div>
    <div class="workflow-section" style="background:white;border:1px solid var(--border);border-radius:16px;padding:40px;margin-bottom:48px;">
      <div class="wf-row" style="justify-content:flex-start;gap:0;">
        <div class="wf-box" style="min-width:110px;"><span class="wf-icon">📟</span><div class="wf-label">Device</div><div class="wf-sub">MQTT / HTTP</div></div>
        <div class="wf-arrow"><svg viewBox="0 0 32 20" fill="none"><line x1="0" y1="10" x2="26" y2="10" stroke="#00BFFF" stroke-width="2"/><polyline points="18,4 26,10 18,16" stroke="#00BFFF" stroke-width="2" fill="none"/></svg></div>
        <div class="wf-box" style="min-width:120px;"><span class="wf-icon">🔀</span><div class="wf-label">Ingestion</div><div class="wf-sub">Message Broker</div></div>
        <div class="wf-arrow"><svg viewBox="0 0 32 20" fill="none"><line x1="0" y1="10" x2="26" y2="10" stroke="#00BFFF" stroke-width="2"/><polyline points="18,4 26,10 18,16" stroke="#00BFFF" stroke-width="2" fill="none"/></svg></div>
        <div class="wf-box highlight" style="min-width:120px;"><span class="wf-icon">⚙️</span><div class="wf-label">Processing</div><div class="wf-sub">Rules Engine</div></div>
        <div class="wf-arrow"><svg viewBox="0 0 32 20" fill="none"><line x1="0" y1="10" x2="26" y2="10" stroke="#00BFFF" stroke-width="2"/><polyline points="18,4 26,10 18,16" stroke="#00BFFF" stroke-width="2" fill="none"/></svg></div>
        <div class="wf-box" style="min-width:120px;"><span class="wf-icon">🗄️</span><div class="wf-label">Time-Series DB</div><div class="wf-sub">InfluxDB / PG</div></div>
        <div class="wf-arrow"><svg viewBox="0 0 32 20" fill="none"><line x1="0" y1="10" x2="26" y2="10" stroke="#00BFFF" stroke-width="2"/><polyline points="18,4 26,10 18,16" stroke="#00BFFF" stroke-width="2" fill="none"/></svg></div>
        <div class="wf-box highlight" style="min-width:120px;"><span class="wf-icon">📊</span><div class="wf-label">Dashboard</div><div class="wf-sub">Web + Mobile</div></div>
      </div>
    </div>



  <!-- IoT Dashboard mockup section -->
  <section class="mock-section">
    <div class="mock-wrap">
      <div class="mock-header">
        <span class="sec-tag" style="color:var(--cyan-dark);">Live Platform Preview</span>
        <h3>IoT Monitoring Dashboard</h3>
        <p>Real-time web dashboard with device status, KPI cards, time-series charts, alarm management, and live data tables — accessible from any browser, no client software needed.</p>
      </div>
      <div class="mock-browser">
        <div class="mock-browser-bar">
          <div class="mock-browser-dots">
            <div class="mock-browser-dot r"></div>
            <div class="mock-browser-dot y"></div>
            <div class="mock-browser-dot g"></div>
          </div>
          <div class="mock-browser-url">https://cloud.axono.io/dashboard/plant-overview</div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 580" style="width:100%;display:block;">
  <defs>
    <linearGradient id="chartGrad1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#00BFFF" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#00BFFF" stop-opacity="0.02"/>
    </linearGradient>
    <linearGradient id="chartGrad2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#22C55E" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#22C55E" stop-opacity="0.02"/>
    </linearGradient>
    <linearGradient id="tempGrad" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#0D1B2E"/>
      <stop offset="60%" stop-color="#00BFFF"/>
    </linearGradient>
  </defs>

  <!-- App background -->
  <rect width="960" height="580" fill="#0f172a"/>

  <!-- LEFT SIDEBAR -->
  <rect x="0" y="0" width="180" height="580" fill="#0D1B2E"/>
  <!-- Logo area -->
  <rect x="12" y="14" width="156" height="36" rx="6" fill="#112240"/>
  <rect x="22" y="22" width="20" height="20" rx="4" fill="#00BFFF"/>
  <text x="48" y="37" font-family="sans-serif" font-size="13" font-weight="700" fill="white">AXONO IoT</text>
  <!-- Nav items -->
  <rect x="8" y="62" width="164" height="32" rx="6" fill="#00BFFF" fill-opacity="0.15"/>
  <rect x="18" y="70" width="14" height="14" rx="3" fill="#00BFFF" fill-opacity="0.8"/>
  <text x="38" y="81" font-family="sans-serif" font-size="11" font-weight="600" fill="#00BFFF">Dashboard</text>
  <text x="28" y="113" font-family="sans-serif" font-size="11" fill="#64748B">Devices</text>
  <text x="28" y="141" font-family="sans-serif" font-size="11" fill="#64748B">Alarms</text>
  <text x="28" y="169" font-family="sans-serif" font-size="11" fill="#64748B">Reports</text>
  <text x="28" y="197" font-family="sans-serif" font-size="11" fill="#64748B">OTA Updates</text>
  <text x="28" y="225" font-family="sans-serif" font-size="11" fill="#64748B">Rule Engine</text>
  <text x="28" y="253" font-family="sans-serif" font-size="11" fill="#64748B">SCADA HMI</text>
  <text x="28" y="281" font-family="sans-serif" font-size="11" fill="#64748B">Settings</text>
  <!-- Online badge -->
  <circle cx="22" cy="540" r="4" fill="#22C55E"/>
  <text x="32" y="544" font-family="sans-serif" font-size="10" fill="#64748B">All systems online</text>

  <!-- MAIN CONTENT AREA -->
  <!-- Top bar -->
  <rect x="180" y="0" width="780" height="48" fill="#0D1B2E"/>
  <text x="196" y="20" font-family="sans-serif" font-size="11" fill="#64748B">Industrial IoT Monitor</text>
  <text x="196" y="36" font-family="sans-serif" font-size="14" font-weight="700" fill="white">Plant Overview Dashboard</text>
  <!-- Time & controls -->
  <rect x="720" y="10" width="110" height="28" rx="5" fill="#1e2d45"/>
  <text x="775" y="29" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#94A3B8">Last 24 hours ▾</text>
  <rect x="838" y="10" width="32" height="28" rx="5" fill="#00BFFF"/>
  <text x="854" y="29" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0D1B2E">+</text>
  <rect x="876" y="10" width="76" height="28" rx="5" fill="#1e2d45"/>
  <text x="914" y="29" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#94A3B8">⚙ Settings</text>

  <!-- ── KPI CARDS ROW ── -->
  <!-- Card 1: Devices Online -->
  <rect x="190" y="58" width="165" height="78" rx="8" fill="#1e2d45"/>
  <text x="204" y="76" font-family="sans-serif" font-size="10" fill="#64748B">DEVICES ONLINE</text>
  <text x="204" y="105" font-family="sans-serif" font-size="28" font-weight="700" fill="#00BFFF">1,247</text>
  <text x="204" y="124" font-family="sans-serif" font-size="10" fill="#22C55E">▲ 98.4% uptime</text>

  <!-- Card 2: Active Alarms -->
  <rect x="364" y="58" width="165" height="78" rx="8" fill="#1e2d45"/>
  <text x="378" y="76" font-family="sans-serif" font-size="10" fill="#64748B">ACTIVE ALARMS</text>
  <text x="378" y="105" font-family="sans-serif" font-size="28" font-weight="700" fill="#F59E0B">3</text>
  <text x="378" y="124" font-family="sans-serif" font-size="10" fill="#F59E0B">2 critical · 1 warning</text>

  <!-- Card 3: Data Points Today -->
  <rect x="538" y="58" width="165" height="78" rx="8" fill="#1e2d45"/>
  <text x="552" y="76" font-family="sans-serif" font-size="10" fill="#64748B">DATA POINTS TODAY</text>
  <text x="552" y="105" font-family="sans-serif" font-size="28" font-weight="700" fill="white">4.2M</text>
  <text x="552" y="124" font-family="sans-serif" font-size="10" fill="#22C55E">▲ 12% from yesterday</text>

  <!-- Card 4: Avg Temperature -->
  <rect x="712" y="58" width="240" height="78" rx="8" fill="#1e2d45"/>
  <text x="726" y="76" font-family="sans-serif" font-size="10" fill="#64748B">AVG TEMPERATURE</text>
  <text x="726" y="105" font-family="sans-serif" font-size="28" font-weight="700" fill="#00BFFF">42.6°C</text>
  <text x="726" y="124" font-family="sans-serif" font-size="10" fill="#94A3B8">Across 24 sensors</text>

  <!-- ── MAIN CHART: Energy / Temperature time series ── -->
  <rect x="190" y="148" width="462" height="220" rx="8" fill="#1e2d45"/>
  <text x="206" y="168" font-family="sans-serif" font-size="11" font-weight="700" fill="white">Energy Consumption &amp; Temperature — 24h</text>
  <!-- X axis labels -->
  <text x="210" y="360" font-family="sans-serif" font-size="9" fill="#475569">00:00</text>
  <text x="278" y="360" font-family="sans-serif" font-size="9" fill="#475569">04:00</text>
  <text x="346" y="360" font-family="sans-serif" font-size="9" fill="#475569">08:00</text>
  <text x="414" y="360" font-family="sans-serif" font-size="9" fill="#475569">12:00</text>
  <text x="482" y="360" font-family="sans-serif" font-size="9" fill="#475569">16:00</text>
  <text x="550" y="360" font-family="sans-serif" font-size="9" fill="#475569">20:00</text>
  <text x="618" y="360" font-family="sans-serif" font-size="9" fill="#475569">Now</text>
  <!-- Grid lines -->
  <line x1="206" y1="340" x2="642" y2="340" stroke="#2a3a52" stroke-width="1"/>
  <line x1="206" y1="310" x2="642" y2="310" stroke="#2a3a52" stroke-width="1"/>
  <line x1="206" y1="280" x2="642" y2="280" stroke="#2a3a52" stroke-width="1"/>
  <line x1="206" y1="250" x2="642" y2="250" stroke="#2a3a52" stroke-width="1"/>
  <line x1="206" y1="220" x2="642" y2="220" stroke="#2a3a52" stroke-width="1"/>
  <line x1="206" y1="190" x2="642" y2="190" stroke="#2a3a52" stroke-width="1"/>
  <!-- Y axis labels -->
  <text x="197" y="344" text-anchor="end" font-family="sans-serif" font-size="8" fill="#475569">0</text>
  <text x="197" y="314" text-anchor="end" font-family="sans-serif" font-size="8" fill="#475569">20</text>
  <text x="197" y="284" text-anchor="end" font-family="sans-serif" font-size="8" fill="#475569">40</text>
  <text x="197" y="254" text-anchor="end" font-family="sans-serif" font-size="8" fill="#475569">60</text>
  <text x="197" y="224" text-anchor="end" font-family="sans-serif" font-size="8" fill="#475569">80</text>
  <text x="197" y="194" text-anchor="end" font-family="sans-serif" font-size="8" fill="#475569">100</text>
  <!-- Area fill - energy (cyan) -->
  <path d="M206,310 L240,295 L274,290 L308,285 L342,250 L376,235 L410,220 L444,230 L478,245 L512,255 L546,240 L580,230 L614,238 L642,245 L642,340 L206,340 Z" fill="url(#chartGrad1)"/>
  <!-- Line - energy -->
  <polyline points="206,310 240,295 274,290 308,285 342,250 376,235 410,220 444,230 478,245 512,255 546,240 580,230 614,238 642,245" fill="none" stroke="#00BFFF" stroke-width="2" stroke-linejoin="round"/>
  <!-- Area fill - temperature (green) -->
  <path d="M206,320 L240,315 L274,308 L308,305 L342,300 L376,298 L410,295 L444,298 L478,302 L512,299 L546,296 L580,293 L614,295 L642,298 L642,340 L206,340 Z" fill="url(#chartGrad2)"/>
  <!-- Line - temperature -->
  <polyline points="206,320 240,315 274,308 308,305 342,300 376,298 410,295 444,298 478,302 512,299 546,296 580,293 614,295 642,298" fill="none" stroke="#22C55E" stroke-width="1.5" stroke-linejoin="round" stroke-dasharray="5,3"/>
  <!-- Legend -->
  <rect x="460" y="175" width="10" height="10" rx="2" fill="#00BFFF"/>
  <text x="474" y="184" font-family="sans-serif" font-size="9" fill="#94A3B8">Energy (kWh)</text>
  <rect x="548" y="175" width="10" height="10" rx="2" fill="#22C55E"/>
  <text x="562" y="184" font-family="sans-serif" font-size="9" fill="#94A3B8">Temperature (°C)</text>
  <!-- Tooltip marker -->
  <line x1="478" y1="180" x2="478" y2="340" stroke="#00BFFF" stroke-width="1" stroke-dasharray="3,3"/>
  <circle cx="478" cy="245" r="4" fill="#00BFFF"/>
  <rect x="488" y="228" width="88" height="38" rx="4" fill="#0D1B2E" stroke="#00BFFF" stroke-width="0.8"/>
  <text x="498" y="242" font-family="sans-serif" font-size="9" font-weight="600" fill="white">12:00 — 16:00</text>
  <text x="498" y="256" font-family="sans-serif" font-size="9" fill="#00BFFF">Energy: 58.4 kWh</text>

  <!-- ── RIGHT COLUMN WIDGETS ── -->
  <!-- Gauge: Power Factor -->
  <rect x="662" y="148" width="145" height="145" rx="8" fill="#1e2d45"/>
  <text x="735" y="167" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748B">POWER FACTOR</text>
  <circle cx="735" cy="240" r="44" fill="none" stroke="#2a3a52" stroke-width="10"/>
  <circle cx="735" cy="240" r="44" fill="none" stroke="#00BFFF" stroke-width="10" stroke-dasharray="221 48" stroke-dashoffset="69" transform="rotate(-90 735 240)"/>
  <text x="735" y="246" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="700" fill="white">0.92</text>
  <text x="735" y="262" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#22C55E">GOOD</text>
  <!-- Gauge: Humidity -->
  <rect x="812" y="148" width="140" height="145" rx="8" fill="#1e2d45"/>
  <text x="882" y="167" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748B">HUMIDITY</text>
  <circle cx="882" cy="240" r="44" fill="none" stroke="#2a3a52" stroke-width="10"/>
  <circle cx="882" cy="240" r="44" fill="none" stroke="#8B5CF6" stroke-width="10" stroke-dasharray="166 103" stroke-dashoffset="69" transform="rotate(-90 882 240)"/>
  <text x="882" y="246" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="700" fill="white">62%</text>
  <text x="882" y="262" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#8B5CF6">NORMAL</text>

  <!-- ── ALARM TABLE ── -->
  <rect x="662" y="302" width="290" height="170" rx="8" fill="#1e2d45"/>
  <text x="676" y="322" font-family="sans-serif" font-size="11" font-weight="700" fill="white">Active Alarms</text>
  <rect x="676" y="316" width="262" height="1" fill="#2a3a52"/>
  <!-- Alarm rows -->
  <circle cx="686" cy="344" r="5" fill="#EF4444"/>
  <text x="698" y="348" font-family="sans-serif" font-size="10" font-weight="600" fill="white">High Temperature</text>
  <text x="698" y="361" font-family="sans-serif" font-size="9" fill="#64748B">Sensor #12 — Zone A · 14:32</text>
  <rect x="880" y="335" width="50" height="18" rx="4" fill="#EF444422"/>
  <text x="905" y="348" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#EF4444">CRITICAL</text>
  <line x1="676" y1="370" x2="938" y2="370" stroke="#2a3a52" stroke-width="1"/>
  <circle cx="686" cy="388" r="5" fill="#EF4444"/>
  <text x="698" y="392" font-family="sans-serif" font-size="10" font-weight="600" fill="white">Comm. Failure</text>
  <text x="698" y="405" font-family="sans-serif" font-size="9" fill="#64748B">Gateway AXG-03 · 14:41</text>
  <rect x="880" y="379" width="50" height="18" rx="4" fill="#EF444422"/>
  <text x="905" y="392" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#EF4444">CRITICAL</text>
  <line x1="676" y1="414" x2="938" y2="414" stroke="#2a3a52" stroke-width="1"/>
  <circle cx="686" cy="432" r="5" fill="#F59E0B"/>
  <text x="698" y="436" font-family="sans-serif" font-size="10" font-weight="600" fill="white">Low Battery</text>
  <text x="698" y="449" font-family="sans-serif" font-size="9" fill="#64748B">Sensor #07 · 15:02</text>
  <rect x="878" y="423" width="54" height="18" rx="4" fill="#F59E0B22"/>
  <text x="905" y="436" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#F59E0B">WARNING</text>

  <!-- ── DEVICE STATUS TABLE ── -->
  <rect x="190" y="378" width="462" height="192" rx="8" fill="#1e2d45"/>
  <text x="206" y="398" font-family="sans-serif" font-size="11" font-weight="700" fill="white">Device Status — All Sites</text>
  <!-- Header -->
  <rect x="190" y="404" width="462" height="22" fill="#162035"/>
  <text x="206" y="419" font-family="sans-serif" font-size="9" font-weight="700" fill="#64748B">DEVICE NAME</text>
  <text x="370" y="419" font-family="sans-serif" font-size="9" font-weight="700" fill="#64748B">PROTOCOL</text>
  <text x="454" y="419" font-family="sans-serif" font-size="9" font-weight="700" fill="#64748B">LAST SEEN</text>
  <text x="560" y="419" font-family="sans-serif" font-size="9" font-weight="700" fill="#64748B">STATUS</text>
  <!-- Rows -->
  <text x="206" y="440" font-family="sans-serif" font-size="10" fill="white">Energy Meter EM-01</text>
  <text x="370" y="440" font-family="sans-serif" font-size="10" fill="#94A3B8">Modbus RTU</text>
  <text x="454" y="440" font-family="sans-serif" font-size="10" fill="#94A3B8">2s ago</text>
  <rect x="554" y="430" width="46" height="16" rx="4" fill="#22C55E22"/>
  <text x="577" y="442" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#22C55E">ONLINE</text>
  <line x1="206" y1="450" x2="638" y2="450" stroke="#2a3a52" stroke-width="1"/>
  <text x="206" y="468" font-family="sans-serif" font-size="10" fill="white">PLC Siemens S7-1200</text>
  <text x="370" y="468" font-family="sans-serif" font-size="10" fill="#94A3B8">OPC-UA</text>
  <text x="454" y="468" font-family="sans-serif" font-size="10" fill="#94A3B8">5s ago</text>
  <rect x="554" y="458" width="46" height="16" rx="4" fill="#22C55E22"/>
  <text x="577" y="470" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#22C55E">ONLINE</text>
  <line x1="206" y1="478" x2="638" y2="478" stroke="#2a3a52" stroke-width="1"/>
  <text x="206" y="496" font-family="sans-serif" font-size="10" fill="white">Gateway AXG-03</text>
  <text x="370" y="496" font-family="sans-serif" font-size="10" fill="#94A3B8">MQTT</text>
  <text x="454" y="496" font-family="sans-serif" font-size="10" fill="#94A3B8">8m ago</text>
  <rect x="548" y="486" width="58" height="16" rx="4" fill="#EF444422"/>
  <text x="577" y="498" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#EF4444">OFFLINE</text>
  <line x1="206" y1="508" x2="638" y2="508" stroke="#2a3a52" stroke-width="1"/>
  <text x="206" y="526" font-family="sans-serif" font-size="10" fill="white">Flow Meter FM-04</text>
  <text x="370" y="526" font-family="sans-serif" font-size="10" fill="#94A3B8">Modbus TCP</text>
  <text x="454" y="526" font-family="sans-serif" font-size="10" fill="#94A3B8">1s ago</text>
  <rect x="554" y="516" width="46" height="16" rx="4" fill="#22C55E22"/>
  <text x="577" y="528" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#22C55E">ONLINE</text>
  <line x1="206" y1="536" x2="638" y2="536" stroke="#2a3a52" stroke-width="1"/>
  <text x="206" y="554" font-family="sans-serif" font-size="10" fill="#64748B">Showing 4 of 1,247 devices</text>
  <text x="590" y="554" font-family="sans-serif" font-size="10" fill="#00BFFF">View All →</text>
</svg>
      </div>
    </div>
  </section>

  <!-- Mobile App mockup -->
  <section class="mock-section-white">
    <div class="mock-wrap">
      <div class="mock-two-col">
        <div>
          <span class="sec-tag" style="color:var(--cyan-dark);">Mobile Application</span>
          <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:36px;font-weight:800;color:var(--navy);margin-bottom:16px;line-height:1.1;">Monitor &amp; Control<br/>From Anywhere</h3>
          <p style="font-size:15px;color:var(--muted);line-height:1.8;margin-bottom:24px;">The AXONO mobile app gives you full dashboard access, real-time device status, alarm notifications, and remote control — on iOS and Android.</p>
          <ul class="mock-feature-list">
            <li>Live dashboard widgets — charts, gauges, value cards</li>
            <li>Push notifications for critical alarms</li>
            <li>Device status and last-seen timestamps</li>
            <li>Remote control — send RPC commands to devices</li>
            <li>Full offline-aware sync with Edge nodes</li>
            <li>Biometric login — fingerprint &amp; face unlock</li>
          </ul>
        </div>
        <div class="mock-phone-wrap">
          <div class="mock-phone">
            <div class="mock-phone-notch"></div>
            <div class="mock-phone-screen">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 480" style="width:100%;display:block;max-width:240px;">
  <!-- Phone body -->
  <rect width="240" height="480" rx="28" fill="#111827"/>
  <!-- Status bar -->
  <rect x="0" y="0" width="240" height="28" rx="28" fill="#0D1B2E"/>
  <text x="16" y="18" font-family="sans-serif" font-size="9" fill="white">9:41</text>
  <text x="185" y="18" font-family="sans-serif" font-size="9" fill="white">▋▋▋ ▌</text>
  <!-- Top bar -->
  <rect x="0" y="28" width="240" height="42" fill="#0D1B2E"/>
  <text x="16" y="46" font-family="sans-serif" font-size="10" fill="#64748B">AXONO IoT</text>
  <text x="16" y="62" font-family="sans-serif" font-size="13" font-weight="700" fill="white">Overview</text>
  <rect x="196" y="36" width="28" height="28" rx="6" fill="#1e2d45"/>
  <text x="210" y="55" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#F59E0B">🔔</text>
  <!-- KPI mini cards -->
  <rect x="8" y="78" width="106" height="60" rx="8" fill="#1e2d45"/>
  <text x="18" y="93" font-family="sans-serif" font-size="8" fill="#64748B">DEVICES</text>
  <text x="18" y="115" font-family="sans-serif" font-size="20" font-weight="700" fill="#00BFFF">1,247</text>
  <circle cx="96" cy="88" r="5" fill="#22C55E"/>
  <rect x="126" y="78" width="106" height="60" rx="8" fill="#1e2d45"/>
  <text x="136" y="93" font-family="sans-serif" font-size="8" fill="#64748B">ALARMS</text>
  <text x="136" y="115" font-family="sans-serif" font-size="20" font-weight="700" fill="#F59E0B">3</text>
  <!-- Mini chart -->
  <rect x="8" y="146" width="224" height="100" rx="8" fill="#1e2d45"/>
  <text x="18" y="162" font-family="sans-serif" font-size="9" font-weight="700" fill="white">Energy Today</text>
  <text x="195" y="162" text-anchor="end" font-family="sans-serif" font-size="9" fill="#00BFFF">58.4 kWh</text>
  <line x1="18" y1="232" x2="222" y2="232" stroke="#2a3a52" stroke-width="1"/>
  <line x1="18" y1="210" x2="222" y2="210" stroke="#2a3a52" stroke-width="1"/>
  <line x1="18" y1="188" x2="222" y2="188" stroke="#2a3a52" stroke-width="1"/>
  <polyline points="18,225 46,210 74,200 102,195 130,185 158,190 186,182 214,178 222,176" fill="none" stroke="#00BFFF" stroke-width="2" stroke-linejoin="round"/>
  <path d="M18,225 L46,210 L74,200 L102,195 L130,185 L158,190 L186,182 L214,178 L222,176 L222,232 L18,232Z" fill="#00BFFF" fill-opacity="0.12"/>
  <!-- Device list -->
  <rect x="8" y="254" width="224" height="30" rx="6" fill="#162035"/>
  <text x="18" y="274" font-family="sans-serif" font-size="8" font-weight="700" fill="#64748B">DEVICE NAME</text>
  <text x="170" y="274" font-family="sans-serif" font-size="8" font-weight="700" fill="#64748B">STATUS</text>
  <!-- Row 1 -->
  <text x="18" y="298" font-family="sans-serif" font-size="10" fill="white">Energy Meter EM-01</text>
  <circle cx="190" cy="293" r="4" fill="#22C55E"/>
  <text x="198" y="297" font-family="sans-serif" font-size="9" fill="#22C55E">Online</text>
  <line x1="8" y1="305" x2="232" y2="305" stroke="#2a3a52" stroke-width="0.8"/>
  <!-- Row 2 -->
  <text x="18" y="322" font-family="sans-serif" font-size="10" fill="white">PLC Siemens S7-1200</text>
  <circle cx="190" cy="317" r="4" fill="#22C55E"/>
  <text x="198" y="321" font-family="sans-serif" font-size="9" fill="#22C55E">Online</text>
  <line x1="8" y1="329" x2="232" y2="329" stroke="#2a3a52" stroke-width="0.8"/>
  <!-- Row 3 -->
  <text x="18" y="346" font-family="sans-serif" font-size="10" fill="white">Gateway AXG-03</text>
  <circle cx="190" cy="341" r="4" fill="#EF4444"/>
  <text x="198" y="345" font-family="sans-serif" font-size="9" fill="#EF4444">Offline</text>
  <line x1="8" y1="353" x2="232" y2="353" stroke="#2a3a52" stroke-width="0.8"/>
  <!-- Row 4 -->
  <text x="18" y="370" font-family="sans-serif" font-size="10" fill="white">Flow Meter FM-04</text>
  <circle cx="190" cy="365" r="4" fill="#22C55E"/>
  <text x="198" y="369" font-family="sans-serif" font-size="9" fill="#22C55E">Online</text>
  <!-- Bottom nav -->
  <rect x="0" y="440" width="240" height="40" fill="#0D1B2E"/>
  <text x="30" y="466" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#00BFFF">⊞</text>
  <text x="80" y="466" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#64748B">📡</text>
  <text x="130" y="466" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#64748B">🔔</text>
  <text x="180" y="466" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#64748B">⚙</text>
  <line x1="24" y1="454" x2="46" y2="454" stroke="#00BFFF" stroke-width="2" stroke-linecap="round"/>
</svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    <h3 class="arch-section-title">Platform Architecture Diagram</h3>
    <p class="arch-section-sub">End-to-end data flow: from field devices through the transport, processing, storage, and presentation layers. Every component in the AXONO IoT Platform is purpose-built for industrial reliability and scalability.</p>
    <div class="arch-wrap">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 600" style="font-family:'Barlow',sans-serif;width:100%;max-width:960px;">
  <defs>
    <marker id="arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#00BFFF"/>
    </marker>
    <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#64748B"/>
    </marker>
  </defs>

  <!-- BACKGROUND LAYERS -->
  <!-- Device Layer -->
  <rect x="10" y="20" width="940" height="100" rx="12" fill="#EFF6FF" stroke="#BFDBFE" stroke-width="1.5"/>
  <text x="30" y="42" font-size="10" font-weight="700" fill="#1D4ED8" letter-spacing="2">DEVICE LAYER</text>

  <!-- Transport Layer -->
  <rect x="10" y="140" width="940" height="100" rx="12" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.5"/>
  <text x="30" y="162" font-size="10" font-weight="700" fill="#15803D" letter-spacing="2">TRANSPORT / INGESTION LAYER</text>

  <!-- Processing Layer -->
  <rect x="10" y="260" width="940" height="110" rx="12" fill="#FFF7ED" stroke="#FED7AA" stroke-width="1.5"/>
  <text x="30" y="282" font-size="10" font-weight="700" fill="#C2410C" letter-spacing="2">PROCESSING LAYER</text>

  <!-- Storage Layer -->
  <rect x="10" y="390" width="940" height="90" rx="12" fill="#F5F3FF" stroke="#C4B5FD" stroke-width="1.5"/>
  <text x="30" y="412" font-size="10" font-weight="700" fill="#6D28D9" letter-spacing="2">STORAGE LAYER</text>

  <!-- Presentation Layer -->
  <rect x="10" y="500" width="940" height="90" rx="12" fill="#FFF1F2" stroke="#FECDD3" stroke-width="1.5"/>
  <text x="30" y="522" font-size="10" font-weight="700" fill="#BE123C" letter-spacing="2">PRESENTATION LAYER</text>

  <!-- ── DEVICE LAYER BOXES ── -->
  <!-- Sensors -->
  <rect x="30" y="50" width="130" height="54" rx="8" fill="white" stroke="#93C5FD" stroke-width="1.5"/>
  <text x="95" y="71" text-anchor="middle" font-size="12" font-weight="700" fill="#1D4ED8">Sensors</text>
  <text x="95" y="88" text-anchor="middle" font-size="10" fill="#64748B">Temp·Pressure·Flow</text>

  <!-- PLCs -->
  <rect x="185" y="50" width="130" height="54" rx="8" fill="white" stroke="#93C5FD" stroke-width="1.5"/>
  <text x="250" y="71" text-anchor="middle" font-size="12" font-weight="700" fill="#1D4ED8">PLCs / RTUs</text>
  <text x="250" y="88" text-anchor="middle" font-size="10" fill="#64748B">Modbus·OPC-UA</text>

  <!-- AXONO Gateway -->
  <rect x="340" y="45" width="150" height="64" rx="8" fill="#0D1B2E" stroke="#00BFFF" stroke-width="2"/>
  <text x="415" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="#00BFFF">AXONO Gateway</text>
  <text x="415" y="84" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.7)">AXG-4000 / AXG-1000</text>
  <text x="415" y="100" text-anchor="middle" font-size="9" fill="rgba(0,191,255,0.8)">Protocol Bridge · OTA</text>

  <!-- Mobile/Edge devices -->
  <rect x="515" y="50" width="130" height="54" rx="8" fill="white" stroke="#93C5FD" stroke-width="1.5"/>
  <text x="580" y="71" text-anchor="middle" font-size="12" font-weight="700" fill="#1D4ED8">Mobile Devices</text>
  <text x="580" y="88" text-anchor="middle" font-size="10" fill="#64748B">iOS · Android</text>

  <!-- Legacy equipment -->
  <rect x="670" y="50" width="130" height="54" rx="8" fill="white" stroke="#93C5FD" stroke-width="1.5"/>
  <text x="735" y="71" text-anchor="middle" font-size="12" font-weight="700" fill="#1D4ED8">Legacy Equipment</text>
  <text x="735" y="88" text-anchor="middle" font-size="10" fill="#64748B">RS485·RS232·CAN</text>

  <!-- Third-party -->
  <rect x="820" y="50" width="120" height="54" rx="8" fill="white" stroke="#93C5FD" stroke-width="1.5"/>
  <text x="880" y="71" text-anchor="middle" font-size="12" font-weight="700" fill="#1D4ED8">3rd Party APIs</text>
  <text x="880" y="88" text-anchor="middle" font-size="10" fill="#64748B">HTTP·REST·SOAP</text>

  <!-- ARROWS Device → Transport -->
  <line x1="95" y1="104" x2="95" y2="138" stroke="#00BFFF" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr1)"/>
  <line x1="250" y1="104" x2="250" y2="138" stroke="#00BFFF" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr1)"/>
  <line x1="415" y1="109" x2="415" y2="138" stroke="#00BFFF" stroke-width="2" marker-end="url(#arr1)"/>
  <line x1="580" y1="104" x2="580" y2="138" stroke="#00BFFF" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr1)"/>
  <line x1="735" y1="104" x2="735" y2="138" stroke="#00BFFF" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr1)"/>
  <line x1="880" y1="104" x2="880" y2="138" stroke="#00BFFF" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr1)"/>

  <!-- ── TRANSPORT LAYER BOXES ── -->
  <rect x="30" y="165" width="140" height="54" rx="8" fill="white" stroke="#86EFAC" stroke-width="1.5"/>
  <text x="100" y="185" text-anchor="middle" font-size="12" font-weight="700" fill="#15803D">MQTT Broker</text>
  <text x="100" y="202" text-anchor="middle" font-size="10" fill="#64748B">Port 1883 / 8883 TLS</text>

  <rect x="190" y="165" width="140" height="54" rx="8" fill="white" stroke="#86EFAC" stroke-width="1.5"/>
  <text x="260" y="185" text-anchor="middle" font-size="12" font-weight="700" fill="#15803D">HTTP/S REST API</text>
  <text x="260" y="202" text-anchor="middle" font-size="10" fill="#64748B">Port 80 / 443</text>

  <rect x="350" y="165" width="140" height="54" rx="8" fill="white" stroke="#86EFAC" stroke-width="1.5"/>
  <text x="420" y="185" text-anchor="middle" font-size="12" font-weight="700" fill="#15803D">WebSocket</text>
  <text x="420" y="202" text-anchor="middle" font-size="10" fill="#64748B">Real-time push</text>

  <rect x="510" y="165" width="140" height="54" rx="8" fill="white" stroke="#86EFAC" stroke-width="1.5"/>
  <text x="580" y="185" text-anchor="middle" font-size="12" font-weight="700" fill="#15803D">CoAP / LwM2M</text>
  <text x="580" y="202" text-anchor="middle" font-size="10" fill="#64748B">Low-power devices</text>

  <rect x="670" y="165" width="140" height="54" rx="8" fill="white" stroke="#86EFAC" stroke-width="1.5"/>
  <text x="740" y="185" text-anchor="middle" font-size="12" font-weight="700" fill="#15803D">OPC-UA / Modbus</text>
  <text x="740" y="202" text-anchor="middle" font-size="10" fill="#64748B">Industrial bridge</text>

  <rect x="830" y="165" width="110" height="54" rx="8" fill="#0D1B2E" stroke="#00BFFF" stroke-width="1.5"/>
  <text x="885" y="185" text-anchor="middle" font-size="12" font-weight="700" fill="#00BFFF">Auth / TLS</text>
  <text x="885" y="202" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.6)">X.509 · JWT · OAuth</text>

  <!-- ARROWS Transport → Processing -->
  <line x1="100" y1="219" x2="200" y2="258" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3" marker-end="url(#arr2)"/>
  <line x1="260" y1="219" x2="280" y2="258" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3" marker-end="url(#arr2)"/>
  <line x1="420" y1="219" x2="420" y2="258" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3" marker-end="url(#arr2)"/>
  <line x1="580" y1="219" x2="560" y2="258" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3" marker-end="url(#arr2)"/>
  <line x1="740" y1="219" x2="700" y2="258" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3" marker-end="url(#arr2)"/>

  <!-- ── PROCESSING LAYER BOXES ── -->
  <!-- Message Queue -->
  <rect x="30" y="285" width="140" height="64" rx="8" fill="white" stroke="#FED7AA" stroke-width="1.5"/>
  <text x="100" y="307" text-anchor="middle" font-size="12" font-weight="700" fill="#C2410C">Message Queue</text>
  <text x="100" y="323" text-anchor="middle" font-size="10" fill="#64748B">Kafka / RabbitMQ</text>
  <text x="100" y="338" text-anchor="middle" font-size="9" fill="#9CA3AF">High throughput</text>

  <!-- Rule Engine -->
  <rect x="200" y="285" width="160" height="64" rx="8" fill="#0D1B2E" stroke="#00BFFF" stroke-width="2"/>
  <text x="280" y="307" text-anchor="middle" font-size="12" font-weight="700" fill="#00BFFF">Rule Engine</text>
  <text x="280" y="323" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.7)">Threshold · Logic · Actions</text>
  <text x="280" y="338" text-anchor="middle" font-size="9" fill="rgba(0,191,255,0.8)">Alert triggers · Automation</text>

  <!-- OTA Manager -->
  <rect x="385" y="285" width="140" height="64" rx="8" fill="white" stroke="#FED7AA" stroke-width="1.5"/>
  <text x="455" y="307" text-anchor="middle" font-size="12" font-weight="700" fill="#C2410C">OTA Manager</text>
  <text x="455" y="323" text-anchor="middle" font-size="10" fill="#64748B">Firmware registry</text>
  <text x="455" y="338" text-anchor="middle" font-size="9" fill="#9CA3AF">Fleet · Staged rollout</text>

  <!-- Report Engine -->
  <rect x="550" y="285" width="140" height="64" rx="8" fill="white" stroke="#FED7AA" stroke-width="1.5"/>
  <text x="620" y="307" text-anchor="middle" font-size="12" font-weight="700" fill="#C2410C">Report Engine</text>
  <text x="620" y="323" text-anchor="middle" font-size="10" fill="#64748B">PDF · Excel · CSV</text>
  <text x="620" y="338" text-anchor="middle" font-size="9" fill="#9CA3AF">Scheduled delivery</text>

  <!-- Notification Service -->
  <rect x="715" y="285" width="150" height="64" rx="8" fill="white" stroke="#FED7AA" stroke-width="1.5"/>
  <text x="790" y="307" text-anchor="middle" font-size="12" font-weight="700" fill="#C2410C">Notification Service</text>
  <text x="790" y="323" text-anchor="middle" font-size="10" fill="#64748B">Email·SMS·WhatsApp</text>
  <text x="790" y="338" text-anchor="middle" font-size="9" fill="#9CA3AF">Telegram · Webhook</text>

  <!-- ARROWS Processing → Storage -->
  <line x1="100" y1="349" x2="100" y2="388" stroke="#64748B" stroke-width="1" marker-end="url(#arr2)"/>
  <line x1="280" y1="349" x2="280" y2="388" stroke="#64748B" stroke-width="1" marker-end="url(#arr2)"/>
  <line x1="455" y1="349" x2="455" y2="388" stroke="#64748B" stroke-width="1" marker-end="url(#arr2)"/>
  <line x1="620" y1="349" x2="620" y2="388" stroke="#64748B" stroke-width="1" marker-end="url(#arr2)"/>

  <!-- ── STORAGE LAYER BOXES ── -->
  <rect x="30" y="415" width="160" height="54" rx="8" fill="white" stroke="#C4B5FD" stroke-width="1.5"/>
  <text x="110" y="437" text-anchor="middle" font-size="12" font-weight="700" fill="#6D28D9">Time-Series DB</text>
  <text x="110" y="454" text-anchor="middle" font-size="10" fill="#64748B">InfluxDB / TimescaleDB</text>

  <rect x="215" y="415" width="160" height="54" rx="8" fill="white" stroke="#C4B5FD" stroke-width="1.5"/>
  <text x="295" y="437" text-anchor="middle" font-size="12" font-weight="700" fill="#6D28D9">Relational DB</text>
  <text x="295" y="454" text-anchor="middle" font-size="10" fill="#64748B">PostgreSQL (config·users)</text>

  <rect x="400" y="415" width="160" height="54" rx="8" fill="white" stroke="#C4B5FD" stroke-width="1.5"/>
  <text x="480" y="437" text-anchor="middle" font-size="12" font-weight="700" fill="#6D28D9">Cache</text>
  <text x="480" y="454" text-anchor="middle" font-size="10" fill="#64748B">Redis (sessions · live data)</text>

  <rect x="585" y="415" width="160" height="54" rx="8" fill="white" stroke="#C4B5FD" stroke-width="1.5"/>
  <text x="665" y="437" text-anchor="middle" font-size="12" font-weight="700" fill="#6D28D9">File Storage</text>
  <text x="665" y="454" text-anchor="middle" font-size="10" fill="#64748B">Reports · Firmware blobs</text>

  <rect x="770" y="415" width="170" height="54" rx="8" fill="#0D1B2E" stroke="#00BFFF" stroke-width="1.5"/>
  <text x="855" y="437" text-anchor="middle" font-size="12" font-weight="700" fill="#00BFFF">Audit &amp; Event Log</text>
  <text x="855" y="454" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.6)">Immutable history</text>

  <!-- ARROWS Storage → Presentation -->
  <line x1="295" y1="469" x2="295" y2="498" stroke="#64748B" stroke-width="1" marker-end="url(#arr2)"/>
  <line x1="480" y1="469" x2="480" y2="498" stroke="#64748B" stroke-width="1" marker-end="url(#arr2)"/>
  <line x1="665" y1="469" x2="665" y2="498" stroke="#64748B" stroke-width="1" marker-end="url(#arr2)"/>

  <!-- ── PRESENTATION LAYER BOXES ── -->
  <rect x="30" y="525" width="130" height="54" rx="8" fill="white" stroke="#FECDD3" stroke-width="1.5"/>
  <text x="95" y="547" text-anchor="middle" font-size="12" font-weight="700" fill="#BE123C">Web Dashboard</text>
  <text x="95" y="564" text-anchor="middle" font-size="10" fill="#64748B">React · Responsive</text>

  <rect x="180" y="525" width="130" height="54" rx="8" fill="white" stroke="#FECDD3" stroke-width="1.5"/>
  <text x="245" y="547" text-anchor="middle" font-size="12" font-weight="700" fill="#BE123C">Mobile App</text>
  <text x="245" y="564" text-anchor="middle" font-size="10" fill="#64748B">iOS · Android</text>

  <rect x="330" y="525" width="130" height="54" rx="8" fill="white" stroke="#FECDD3" stroke-width="1.5"/>
  <text x="395" y="547" text-anchor="middle" font-size="12" font-weight="700" fill="#BE123C">SCADA HMI</text>
  <text x="395" y="564" text-anchor="middle" font-size="10" fill="#64748B">Mimic · Alarms</text>

  <rect x="480" y="525" width="130" height="54" rx="8" fill="white" stroke="#FECDD3" stroke-width="1.5"/>
  <text x="545" y="547" text-anchor="middle" font-size="12" font-weight="700" fill="#BE123C">REST API</text>
  <text x="545" y="564" text-anchor="middle" font-size="10" fill="#64748B">3rd Party · ERP/MES</text>

  <rect x="630" y="525" width="130" height="54" rx="8" fill="white" stroke="#FECDD3" stroke-width="1.5"/>
  <text x="695" y="547" text-anchor="middle" font-size="12" font-weight="700" fill="#BE123C">Reports</text>
  <text x="695" y="564" text-anchor="middle" font-size="10" fill="#64748B">PDF · Excel · Email</text>

  <rect x="780" y="525" width="160" height="54" rx="8" fill="#0D1B2E" stroke="#00BFFF" stroke-width="1.5"/>
  <text x="860" y="547" text-anchor="middle" font-size="12" font-weight="700" fill="#00BFFF">OTA Console</text>
  <text x="860" y="564" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.6)">Firmware management</text>
</svg>

    </div>
    <!-- Specs table -->
    <span class="sec-tag" style="color:var(--cyan-dark);">Technical Specifications</span>
    <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:28px;font-weight:800;color:var(--navy);margin-bottom:28px;">Platform Specifications</h3>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-bottom:28px;">
      <table class="specs-table">
        <tr><th colspan="2">Scalability &amp; Performance</th></tr>
        <tr><td>Single Node Capacity</td><td class="spec-val-cyan">Tens to hundreds of thousands of devices</td></tr>
        <tr><td>Cluster Capacity</td><td class="spec-val-cyan">Millions of concurrent device connections</td></tr>
        <tr><td>Database (Standard)</td><td>PostgreSQL — up to ~5,000 msg/sec</td></tr>
        <tr><td>Database (High Volume)</td><td class="spec-val-cyan">PostgreSQL + Cassandra hybrid for 1M+ devices</td></tr>
        <tr><td>Message Queue</td><td class="spec-val-cyan">Kafka (production) · In-Memory (development)</td></tr>
        <tr><td>Deployment Modes</td><td class="spec-val-cyan">Monolithic · Microservices · Docker · Kubernetes</td></tr>
        <tr><td>High Availability</td><td class="spec-val-cyan">Active-active cluster · No single point of failure</td></tr>
        <tr><td>Min. Server (Recommended)</td><td>4+ CPU cores · 8 GB+ RAM</td></tr>
      </table>
      <table class="specs-table">
        <tr><th colspan="2">Device Connectivity Protocols</th></tr>
        <tr><td>MQTT</td><td class="spec-val-cyan">v3.1 / v5.0 — Port 1883 / 8883 (TLS)</td></tr>
        <tr><td>HTTP / HTTPS</td><td class="spec-val-cyan">REST API — Port 80 / 443</td></tr>
        <tr><td>CoAP</td><td class="spec-val-cyan">Lightweight constrained devices</td></tr>
        <tr><td>LwM2M</td><td class="spec-val-cyan">OMA standard — device &amp; firmware management</td></tr>
        <tr><td>SNMP</td><td>Network device monitoring</td></tr>
        <tr><td>WebSocket</td><td class="spec-val-cyan">Real-time bidirectional data push</td></tr>
        <tr><td>Gateway API</td><td class="spec-val-cyan">Multi-device MQTT gateway protocol</td></tr>
        <tr><td>Payload Formats</td><td>JSON · Protocol Buffers (Protobuf)</td></tr>
      </table>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-bottom:28px;">
      <table class="specs-table">
        <tr><th colspan="2">Security &amp; Access Control</th></tr>
        <tr><td>Transport Encryption</td><td class="spec-val-cyan">TLS / SSL across all protocols</td></tr>
        <tr><td>Device Authentication</td><td class="spec-val-cyan">Access Tokens · X.509 Certificates · MQTT Basic Auth</td></tr>
        <tr><td>User Authentication</td><td class="spec-val-cyan">OAuth 2.0 · LDAP · SAML / SSO</td></tr>
        <tr><td>Access Control (RBAC)</td><td class="spec-val-cyan">System Admin · Tenant Admin · Customer · Custom roles · Group permissions</td></tr>
        <tr><td>Multi-Tenancy</td><td class="spec-val-cyan">Built-in — full isolation between tenants</td></tr>
        <tr><td>Audit Logging</td><td class="spec-val-cyan">Full immutable user action history</td></tr>
        <tr><td>White-Labelling</td><td class="spec-val-cyan">Custom logo, domain &amp; branding — fully white-labelled</td></tr>
      </table>
      <table class="specs-table">
        <tr><th colspan="2">Industrial Protocol Connectors</th></tr>
        <tr><td>Modbus RTU / TCP</td><td class="spec-val-cyan">RS485 / RS232 / Ethernet</td></tr>
        <tr><td>OPC-UA Client</td><td class="spec-val-cyan">Siemens S7, ABB, Rockwell, generic servers</td></tr>
        <tr><td>BACnet IP / MS/TP</td><td class="spec-val-cyan">Building automation — HVAC, lighting</td></tr>
        <tr><td>SNMP Connector</td><td>Network devices — switches, UPS, routers</td></tr>
        <tr><td>CAN Bus</td><td class="spec-val-cyan">Automotive &amp; industrial CAN-connected devices</td></tr>
        <tr><td>MQTT Broker Bridge</td><td class="spec-val-cyan">Connect external brokers as data sources</td></tr>
        <tr><td>HTTP Pull / Push</td><td>REST polling &amp; webhook data ingestion</td></tr>
        <tr><td>Custom Connector</td><td class="spec-val-cyan">Python-extensible framework for any device</td></tr>
      </table>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:28px;">
      <table class="specs-table">
        <tr><th colspan="2">Platform Features</th></tr>
        <tr><td>Dashboards</td><td class="spec-val-cyan">Drag-and-drop · Real-time widgets · Custom SCADA HMI</td></tr>
        <tr><td>Rule Engine</td><td class="spec-val-cyan">Visual drag &amp; drop chain designer · Full automation</td></tr>
        <tr><td>Alarms</td><td class="spec-val-cyan">Threshold · Multi-condition · Escalation policies</td></tr>
        <tr><td>Notifications</td><td>Email · SMS · Slack · Microsoft Teams · Webhook</td></tr>
        <tr><td>OTA Firmware Updates</td><td class="spec-val-cyan">Fleet-wide · Staged rollout · Version tracking</td></tr>
        <tr><td>Report Generation</td><td class="spec-val-cyan">Scheduled PDF / Excel reports · Auto email delivery</td></tr>
        <tr><td>Device Library</td><td class="spec-val-cyan">400+ pre-built device converters including LoRaWAN</td></tr>
        <tr><td>REST API</td><td class="spec-val-cyan">Full REST API · WebSocket subscriptions</td></tr>
      </table>
      <table class="specs-table">
        <tr><th colspan="2">Deployment Options</th></tr>
        <tr><td>Cloud (Managed)</td><td class="spec-val-cyan">AXONO-hosted — zero infrastructure management</td></tr>
        <tr><td>On-Premise (Self-Managed)</td><td class="spec-val-cyan">Ubuntu · CentOS · Docker · Kubernetes</td></tr>
        <tr><td>Hybrid</td><td class="spec-val-cyan">Cloud server + Edge nodes at site level</td></tr>
        <tr><td>Private Cloud</td><td class="spec-val-cyan">Dedicated managed cluster with SLA guarantees</td></tr>
        <tr><td>OS Support</td><td>Linux (Ubuntu 20.04+, CentOS 7+) · Windows</td></tr>
        <tr><td>Containerisation</td><td class="spec-val-cyan">Docker · Docker Compose · Helm Charts (K8s)</td></tr>
        <tr><td>Seamless Upgrade Path</td><td class="spec-val-cyan">Full data &amp; config preserved across all plan tiers</td></tr>
        <tr><td>Data Sovereignty</td><td class="spec-val-cyan">Host in any region — full data control</td></tr>
      </table>
    </div>
  </div>`

  return (
    <div
      id="section-software"
      className="page-section active"
      dangerouslySetInnerHTML={{ __html: inner }}
      onClick={(e) => {
        const t = e.target.closest('[data-route]')
        if (t) { e.preventDefault(); navigate(t.dataset.route) }
      }}
    />
  )
}

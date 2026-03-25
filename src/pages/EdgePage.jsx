import { useNavigate } from 'react-router-dom'

export default function EdgePage() {
  const navigate = useNavigate()

  const inner = `
  <div class="section-hero section-pt">
    <div class="section-hero-inner">
      <span class="sec-tag">Edge Computing</span>
      <h2 class="sec-title">Intelligence at the Edge.<br/>Zero Data Loss.</h2>
      <p class="sec-subtitle">AXONO Edge brings computation closer to your devices — enabling local monitoring, real-time decisions, and uninterrupted operation even during cloud connectivity loss.</p>
    </div>
  </div>

  <div class="content-wrap">
    <!-- Architecture diagram -->
    <span class="sec-tag" style="color:var(--cyan-dark);">Architecture</span>
    <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:32px;font-weight:800;color:var(--navy);margin-bottom:36px;">Three-Tier Edge Architecture</h3>
    <div class="edge-arch">
      <div class="edge-layers">
        <div class="edge-layer el-cloud">
          <div class="el-icon">☁️</div>
          <div class="el-content">
            <div class="el-title">Cloud Layer — AXONO Platform</div>
            <div class="el-desc">Central data storage, analytics, reporting, user dashboards, OTA management, and remote access. Receives synchronized data from Edge nodes. Handles long-term data retention and cross-site analytics.</div>
            <div class="el-features"><span class="el-feat">Long-term Storage</span><span class="el-feat">Analytics</span><span class="el-feat">Multi-site Dashboard</span><span class="el-feat">OTA Management</span></div>
          </div>
        </div>
        <div class="edge-connector">
          <svg width="2" height="32" viewBox="0 0 2 32"><line x1="1" y1="0" x2="1" y2="32" stroke="#00BFFF" stroke-width="2" stroke-dasharray="4 3"/></svg>
          <span>Encrypted sync when online · Buffered when offline</span>
          <svg width="2" height="32" viewBox="0 0 2 32"><line x1="1" y1="0" x2="1" y2="32" stroke="#00BFFF" stroke-width="2" stroke-dasharray="4 3"/></svg>
        </div>
        <div class="edge-layer el-edge">
          <div class="el-icon">⚡</div>
          <div class="el-content">
            <div class="el-title">Edge Layer — AXONO Edge Node</div>
            <div class="el-desc">Runs on local hardware (industrial PC, gateway). Collects data from devices, processes locally, stores in local DB during connectivity loss, triggers alerts independently of cloud, and syncs automatically when connection restores.</div>
            <div class="el-features"><span class="el-feat">Local Processing</span><span class="el-feat">Offline Buffer (30 days+)</span><span class="el-feat">Local Alerts</span><span class="el-feat">Auto Sync</span><span class="el-feat">Local Dashboard</span></div>
          </div>
        </div>
        <div class="edge-connector">
          <svg width="2" height="32" viewBox="0 0 2 32"><line x1="1" y1="0" x2="1" y2="32" stroke="#00BFFF" stroke-width="2" stroke-dasharray="4 3"/></svg>
          <span>Industrial protocols · RS485 · Modbus · OPC-UA</span>
          <svg width="2" height="32" viewBox="0 0 2 32"><line x1="1" y1="0" x2="1" y2="32" stroke="#00BFFF" stroke-width="2" stroke-dasharray="4 3"/></svg>
        </div>
        <div class="edge-layer el-device">
          <div class="el-icon">🔌</div>
          <div class="el-content">
            <div class="el-title">Device Layer — Sensors, PLCs & Machines</div>
            <div class="el-desc">Physical sensors, actuators, PLCs, VFDs, energy meters, flow meters, and industrial machinery. Connected via RS485, RS232, Ethernet, or wireless interfaces.</div>
            <div class="el-features"><span class="el-feat">Sensors</span><span class="el-feat">PLCs</span><span class="el-feat">Energy Meters</span><span class="el-feat">Flow Meters</span><span class="el-feat">Actuators</span></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Key advantages -->
    <div class="features-grid" style="margin-bottom:48px;">
      <div class="feature-card">
        <div class="fc-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
        <div class="fc-title">No Data Loss</div>
        <div class="fc-desc">Data is stored locally in the edge node's database during any connectivity interruption. Upon reconnection, all buffered data is automatically synchronized to the cloud — guaranteed no gap in history.</div>
      </div>
      <div class="feature-card">
        <div class="fc-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
        <div class="fc-title">Independent Operation</div>
        <div class="fc-desc">Edge nodes operate completely independently of cloud connectivity. Local alerts, rules engine, and dashboards remain fully functional during outages. Critical processes never stop.</div>
      </div>
      <div class="feature-card">
        <div class="fc-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
        <div class="fc-title">Ultra-Low Latency</div>
        <div class="fc-desc">Local processing eliminates round-trip to cloud. Decision latency under 50ms for time-critical control loops. Ideal for safety-critical applications requiring immediate response.</div>
      </div>
    </div>



  <!-- Edge dashboard mockup -->
  <section class="mock-section">
    <div class="mock-wrap">
      <div class="mock-header">
        <span class="sec-tag" style="color:var(--cyan-dark);">Edge Node — Local Dashboard</span>
        <h3>Real-Time Local Dashboard<br/>Running Completely Offline</h3>
        <p>AXONO Edge runs a full web dashboard on-site, accessible over your local LAN without any internet connection. All sensor data, alarms, and control functions remain active during cloud outages — and every record is automatically synced when connectivity restores.</p>
      </div>
      <div class="mock-browser">
        <div class="mock-browser-bar">
          <div class="mock-browser-dots">
            <div class="mock-browser-dot r"></div>
            <div class="mock-browser-dot y"></div>
            <div class="mock-browser-dot g"></div>
          </div>
          <div class="mock-browser-url">http://192.168.1.100:8080/dashboard/local-monitor &nbsp;·&nbsp; <span style="color:#22C55E;">⚡ Offline Mode</span></div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 580" style="width:100%;display:block;">
  <defs>
    <linearGradient id="edgeChartG" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#00BFFF" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#00BFFF" stop-opacity="0.02"/>
    </linearGradient>
  </defs>
  <!-- Background -->
  <rect width="960" height="580" fill="#0f172a"/>
  <!-- Sidebar -->
  <rect x="0" y="0" width="172" height="580" fill="#0D1B2E"/>
  <rect x="10" y="14" width="152" height="36" rx="6" fill="#112240"/>
  <rect x="20" y="22" width="20" height="20" rx="4" fill="#00BFFF"/>
  <text x="46" y="37" font-family="sans-serif" font-size="12" font-weight="700" fill="white">AXONO Edge</text>
  <!-- Offline badge -->
  <rect x="10" y="58" width="152" height="22" rx="4" fill="#15803D22" stroke="#15803D" stroke-width="1"/>
  <circle cx="22" cy="69" r="4" fill="#22C55E"/>
  <text x="30" y="73" font-family="sans-serif" font-size="9" font-weight="700" fill="#22C55E">OPERATING OFFLINE</text>
  <!-- Nav -->
  <rect x="8" y="88" width="156" height="28" rx="5" fill="#00BFFF" fill-opacity="0.15"/>
  <text x="24" y="107" font-family="sans-serif" font-size="10" font-weight="600" fill="#00BFFF">Local Dashboard</text>
  <text x="24" y="134" font-family="sans-serif" font-size="10" fill="#64748B">Devices</text>
  <text x="24" y="158" font-family="sans-serif" font-size="10" fill="#64748B">Local Alarms</text>
  <text x="24" y="182" font-family="sans-serif" font-size="10" fill="#64748B">Rule Engine</text>
  <text x="24" y="206" font-family="sans-serif" font-size="10" fill="#64748B">Sync Queue</text>
  <text x="24" y="230" font-family="sans-serif" font-size="10" fill="#64748B">Diagnostics</text>
  <!-- Sync status at bottom -->
  <rect x="8" y="500" width="156" height="66" rx="6" fill="#1e2d45"/>
  <text x="18" y="516" font-family="sans-serif" font-size="9" font-weight="700" fill="#64748B">CLOUD SYNC STATUS</text>
  <circle cx="18" cy="530" r="4" fill="#EF4444"/>
  <text x="28" y="534" font-family="sans-serif" font-size="9" fill="#EF4444">Disconnected from cloud</text>
  <text x="18" y="548" font-family="sans-serif" font-size="9" fill="#F59E0B">Queue: 4,823 records</text>
  <text x="18" y="562" font-family="sans-serif" font-size="9" fill="#22C55E">Will sync on reconnect</text>

  <!-- TOP BAR -->
  <rect x="172" y="0" width="788" height="46" fill="#0D1B2E"/>
  <text x="188" y="19" font-family="sans-serif" font-size="10" fill="#64748B">Edge Node: Site-A · Chennai Plant</text>
  <text x="188" y="35" font-family="sans-serif" font-size="13" font-weight="700" fill="white">Local Monitoring Dashboard</text>
  <rect x="820" y="10" width="130" height="26" rx="4" fill="#15803D22" stroke="#15803D" stroke-width="1"/>
  <text x="885" y="27" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#22C55E">⚡ FULL OFFLINE MODE</text>

  <!-- KPI ROW -->
  <rect x="182" y="56" width="140" height="70" rx="7" fill="#1e2d45"/>
  <text x="196" y="73" font-family="sans-serif" font-size="9" fill="#64748B">LOCAL DEVICES</text>
  <text x="196" y="100" font-family="sans-serif" font-size="26" font-weight="700" fill="#00BFFF">48</text>
  <text x="196" y="116" font-family="sans-serif" font-size="9" fill="#22C55E">All responding</text>

  <rect x="332" y="56" width="140" height="70" rx="7" fill="#1e2d45"/>
  <text x="346" y="73" font-family="sans-serif" font-size="9" fill="#64748B">QUEUED RECORDS</text>
  <text x="346" y="100" font-family="sans-serif" font-size="26" font-weight="700" fill="#F59E0B">4,823</text>
  <text x="346" y="116" font-family="sans-serif" font-size="9" fill="#F59E0B">Pending cloud sync</text>

  <rect x="482" y="56" width="140" height="70" rx="7" fill="#1e2d45"/>
  <text x="496" y="73" font-family="sans-serif" font-size="9" fill="#64748B">LOCAL ALARMS</text>
  <text x="496" y="100" font-family="sans-serif" font-size="26" font-weight="700" fill="#EF4444">2</text>
  <text x="496" y="116" font-family="sans-serif" font-size="9" fill="#EF4444">1 critical · 1 warning</text>

  <rect x="632" y="56" width="140" height="70" rx="7" fill="#1e2d45"/>
  <text x="646" y="73" font-family="sans-serif" font-size="9" fill="#64748B">OFFLINE DURATION</text>
  <text x="646" y="100" font-family="sans-serif" font-size="26" font-weight="700" fill="white">3h 24m</text>
  <text x="646" y="116" font-family="sans-serif" font-size="9" fill="#22C55E">Data logger active</text>

  <rect x="782" y="56" width="168" height="70" rx="7" fill="#1e2d45"/>
  <text x="796" y="73" font-family="sans-serif" font-size="9" fill="#64748B">STORAGE USED</text>
  <text x="796" y="100" font-family="sans-serif" font-size="26" font-weight="700" fill="white">2.1 GB</text>
  <text x="796" y="116" font-family="sans-serif" font-size="9" fill="#22C55E">46.9 GB free</text>

  <!-- MAIN CHART: Local real-time data -->
  <rect x="182" y="138" width="480" height="210" rx="8" fill="#1e2d45"/>
  <text x="198" y="157" font-family="sans-serif" font-size="11" font-weight="700" fill="white">Real-Time Sensor Data — Local</text>
  <text x="620" y="157" text-anchor="end" font-family="sans-serif" font-size="9" fill="#22C55E">● Live · Offline mode</text>
  <!-- Grid -->
  <line x1="198" y1="320" x2="648" y2="320" stroke="#2a3a52" stroke-width="1"/>
  <line x1="198" y1="295" x2="648" y2="295" stroke="#2a3a52" stroke-width="1"/>
  <line x1="198" y1="270" x2="648" y2="270" stroke="#2a3a52" stroke-width="1"/>
  <line x1="198" y1="245" x2="648" y2="245" stroke="#2a3a52" stroke-width="1"/>
  <line x1="198" y1="220" x2="648" y2="220" stroke="#2a3a52" stroke-width="1"/>
  <line x1="198" y1="195" x2="648" y2="195" stroke="#2a3a52" stroke-width="1"/>
  <line x1="198" y1="170" x2="648" y2="170" stroke="#2a3a52" stroke-width="1"/>
  <!-- Sensor 1: Temperature -->
  <polyline points="198,280 238,270 278,265 318,258 358,250 398,245 438,252 478,260 518,255 558,248 598,240 638,235 648,232" fill="none" stroke="#00BFFF" stroke-width="2" stroke-linejoin="round"/>
  <!-- Sensor 2: Pressure -->
  <polyline points="198,295 238,290 278,288 318,285 358,290 398,292 438,288 478,284 518,282 558,286 598,290 638,288 648,285" fill="none" stroke="#22C55E" stroke-width="1.5" stroke-linejoin="round"/>
  <!-- Sensor 3: Flow rate -->
  <polyline points="198,310 238,308 278,305 318,302 358,306 398,304 438,300 478,298 518,303 558,305 598,302 638,298 648,295" fill="none" stroke="#8B5CF6" stroke-width="1.5" stroke-linejoin="round" stroke-dasharray="4,2"/>
  <!-- Legend -->
  <rect x="210" y="162" width="8" height="8" rx="1" fill="#00BFFF"/>
  <text x="222" y="170" font-family="sans-serif" font-size="9" fill="#94A3B8">Temperature (°C)</text>
  <rect x="318" y="162" width="8" height="8" rx="1" fill="#22C55E"/>
  <text x="330" y="170" font-family="sans-serif" font-size="9" fill="#94A3B8">Pressure (bar)</text>
  <rect x="420" y="162" width="8" height="8" rx="1" fill="#8B5CF6"/>
  <text x="432" y="170" font-family="sans-serif" font-size="9" fill="#94A3B8">Flow Rate (m³/h)</text>
  <!-- X axis -->
  <text x="198" y="338" font-family="sans-serif" font-size="8" fill="#475569">14:00</text>
  <text x="278" y="338" font-family="sans-serif" font-size="8" fill="#475569">14:30</text>
  <text x="358" y="338" font-family="sans-serif" font-size="8" fill="#475569">15:00</text>
  <text x="438" y="338" font-family="sans-serif" font-size="8" fill="#475569">15:30</text>
  <text x="518" y="338" font-family="sans-serif" font-size="8" fill="#475569">16:00</text>
  <text x="598" y="338" font-family="sans-serif" font-size="8" fill="#475569">16:30</text>
  <text x="638" y="338" font-family="sans-serif" font-size="8" fill="#475569">Now</text>

  <!-- SYNC QUEUE PANEL -->
  <rect x="672" y="138" width="278" height="210" rx="8" fill="#1e2d45"/>
  <text x="688" y="158" font-family="sans-serif" font-size="11" font-weight="700" fill="white">Sync Queue Monitor</text>
  <text x="688" y="174" font-family="sans-serif" font-size="9" fill="#64748B">Records buffered during cloud outage</text>
  <!-- Queue bars -->
  <text x="688" y="200" font-family="sans-serif" font-size="9" fill="#94A3B8">Sensor telemetry</text>
  <rect x="688" y="204" width="230" height="12" rx="3" fill="#2a3a52"/>
  <rect x="688" y="204" width="185" height="12" rx="3" fill="#00BFFF" fill-opacity="0.7"/>
  <text x="924" y="215" text-anchor="end" font-family="sans-serif" font-size="9" fill="#00BFFF">3,240</text>
  <text x="688" y="230" font-family="sans-serif" font-size="9" fill="#94A3B8">Alarm events</text>
  <rect x="688" y="234" width="230" height="12" rx="3" fill="#2a3a52"/>
  <rect x="688" y="234" width="52" height="12" rx="3" fill="#EF4444" fill-opacity="0.7"/>
  <text x="924" y="245" text-anchor="end" font-family="sans-serif" font-size="9" fill="#EF4444">521</text>
  <text x="688" y="260" font-family="sans-serif" font-size="9" fill="#94A3B8">Device attributes</text>
  <rect x="688" y="264" width="230" height="12" rx="3" fill="#2a3a52"/>
  <rect x="688" y="264" width="106" height="12" rx="3" fill="#8B5CF6" fill-opacity="0.7"/>
  <text x="924" y="275" text-anchor="end" font-family="sans-serif" font-size="9" fill="#8B5CF6">1,062</text>
  <line x1="688" y1="288" x2="936" y2="288" stroke="#2a3a52" stroke-width="1"/>
  <text x="688" y="306" font-family="sans-serif" font-size="9" font-weight="700" fill="#64748B">TOTAL QUEUED</text>
  <text x="936" y="306" text-anchor="end" font-family="sans-serif" font-size="16" font-weight="700" fill="#F59E0B">4,823</text>
  <rect x="688" y="318" width="230" height="24" rx="5" fill="#15803D22" stroke="#15803D" stroke-width="1"/>
  <text x="803" y="334" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#22C55E">Auto-sync on reconnect · No data loss</text>

  <!-- LOCAL ALARM TABLE -->
  <rect x="182" y="360" width="480" height="200" rx="8" fill="#1e2d45"/>
  <text x="198" y="380" font-family="sans-serif" font-size="11" font-weight="700" fill="white">Local Alarms — Triggered Offline</text>
  <rect x="182" y="385" width="480" height="20" fill="#162035"/>
  <text x="198" y="399" font-family="sans-serif" font-size="9" font-weight="700" fill="#64748B">ALARM</text>
  <text x="380" y="399" font-family="sans-serif" font-size="9" font-weight="700" fill="#64748B">DEVICE</text>
  <text x="490" y="399" font-family="sans-serif" font-size="9" font-weight="700" fill="#64748B">TIME</text>
  <text x="570" y="399" font-family="sans-serif" font-size="9" font-weight="700" fill="#64748B">SEVERITY</text>
  <!-- Row 1 -->
  <circle cx="208" cy="418" r="4" fill="#EF4444"/>
  <text x="220" y="422" font-family="sans-serif" font-size="10" fill="white">High Temperature — Zone A</text>
  <text x="380" y="422" font-family="sans-serif" font-size="10" fill="#94A3B8">Sensor-12</text>
  <text x="490" y="422" font-family="sans-serif" font-size="10" fill="#94A3B8">14:32:05</text>
  <rect x="562" y="410" width="58" height="16" rx="3" fill="#EF444422"/>
  <text x="591" y="422" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#EF4444">CRITICAL</text>
  <line x1="198" y1="433" x2="648" y2="433" stroke="#2a3a52" stroke-width="1"/>
  <!-- Row 2 -->
  <circle cx="208" cy="452" r="4" fill="#F59E0B"/>
  <text x="220" y="456" font-family="sans-serif" font-size="10" fill="white">Pressure Deviation</text>
  <text x="380" y="456" font-family="sans-serif" font-size="10" fill="#94A3B8">Sensor-07</text>
  <text x="490" y="456" font-family="sans-serif" font-size="10" fill="#94A3B8">15:10:43</text>
  <rect x="562" y="444" width="58" height="16" rx="3" fill="#F59E0B22"/>
  <text x="591" y="456" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#F59E0B">WARNING</text>
  <line x1="198" y1="467" x2="648" y2="467" stroke="#2a3a52" stroke-width="1"/>
  <text x="198" y="530" font-family="sans-serif" font-size="9" fill="#64748B">These alarms will sync to cloud when connectivity restores</text>

  <!-- DEVICE STATUS -->
  <rect x="672" y="360" width="278" height="200" rx="8" fill="#1e2d45"/>
  <text x="688" y="380" font-family="sans-serif" font-size="11" font-weight="700" fill="white">Local Device Health</text>
  <rect x="688" y="388" width="246" height="1" fill="#2a3a52"/>
  <text x="688" y="408" font-family="sans-serif" font-size="10" fill="white">Modbus RTU (RS485)</text>
  <text x="906" y="408" text-anchor="end" font-family="sans-serif" font-size="9" fill="#22C55E">14 / 14 ●</text>
  <text x="688" y="428" font-family="sans-serif" font-size="10" fill="white">OPC-UA Devices</text>
  <text x="906" y="428" text-anchor="end" font-family="sans-serif" font-size="9" fill="#22C55E">8 / 8 ●</text>
  <text x="688" y="448" font-family="sans-serif" font-size="10" fill="white">MQTT Sensors</text>
  <text x="906" y="448" text-anchor="end" font-family="sans-serif" font-size="9" fill="#22C55E">22 / 22 ●</text>
  <text x="688" y="468" font-family="sans-serif" font-size="10" fill="white">Digital I/O Channels</text>
  <text x="906" y="468" text-anchor="end" font-family="sans-serif" font-size="9" fill="#22C55E">4 / 4 ●</text>
  <line x1="688" y1="476" x2="934" y2="476" stroke="#2a3a52" stroke-width="1"/>
  <text x="688" y="494" font-family="sans-serif" font-size="11" font-weight="700" fill="#22C55E">48 / 48 devices responding</text>
  <text x="688" y="510" font-family="sans-serif" font-size="9" fill="#64748B">Local rule engine: active · 6 rule chains running</text>
  <text x="688" y="526" font-family="sans-serif" font-size="9" fill="#64748B">Local DB: InfluxDB · Write: 1,247 pts/sec</text>
  <text x="688" y="542" font-family="sans-serif" font-size="9" fill="#64748B">JVM Heap: 1.2 GB / 4 GB · CPU: 18%</text>
</svg>
      </div>
    </div>
  </section>

    <h3 class="arch-section-title">Edge Computing Architecture Diagram</h3>
    <p class="arch-section-sub">Three-tier architecture: Cloud Platform — Edge Node — Field Devices. The Edge Node operates fully independently, buffering all data locally and synchronizing automatically when connectivity is restored — guaranteeing zero data loss.</p>
    <div class="arch-wrap">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" style="font-family:'Barlow',sans-serif;width:100%;max-width:960px;">
  <defs>
    <marker id="ae" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#00BFFF"/>
    </marker>
    <marker id="ae2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#64748B"/>
    </marker>
  </defs>

  <!-- CLOUD LAYER -->
  <rect x="10" y="15" width="940" height="120" rx="12" fill="#EFF6FF" stroke="#93C5FD" stroke-width="1.5"/>
  <text x="30" y="36" font-size="10" font-weight="700" fill="#1D4ED8" letter-spacing="2">CLOUD LAYER — AXONO PLATFORM (Data Center / Cloud)</text>

  <!-- Cloud boxes -->
  <rect x="30" y="48" width="170" height="70" rx="8" fill="#0D1B2E" stroke="#00BFFF" stroke-width="2"/>
  <text x="115" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#00BFFF">AXONO Cloud</text>
  <text x="115" y="90" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.7)">Multi-site Dashboard</text>
  <text x="115" y="106" text-anchor="middle" font-size="9" fill="rgba(0,191,255,0.7)">Analytics · Reports · OTA</text>

  <rect x="225" y="48" width="150" height="70" rx="8" fill="white" stroke="#93C5FD" stroke-width="1.5"/>
  <text x="300" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="#1D4ED8">Long-term Storage</text>
  <text x="300" y="90" text-anchor="middle" font-size="10" fill="#64748B">InfluxDB Cluster</text>
  <text x="300" y="106" text-anchor="middle" font-size="9" fill="#94A3B8">Years of history</text>

  <rect x="395" y="48" width="150" height="70" rx="8" fill="white" stroke="#93C5FD" stroke-width="1.5"/>
  <text x="470" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="#1D4ED8">Cloud Rule Engine</text>
  <text x="470" y="90" text-anchor="middle" font-size="10" fill="#64748B">Cross-site analytics</text>
  <text x="470" y="106" text-anchor="middle" font-size="9" fill="#94A3B8">ML · Predictions</text>

  <rect x="565" y="48" width="150" height="70" rx="8" fill="white" stroke="#93C5FD" stroke-width="1.5"/>
  <text x="640" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="#1D4ED8">User Management</text>
  <text x="640" y="90" text-anchor="middle" font-size="10" fill="#64748B">RBAC · Multi-tenant</text>
  <text x="640" y="106" text-anchor="middle" font-size="9" fill="#94A3B8">SSO · OAuth2</text>

  <rect x="735" y="48" width="200" height="70" rx="8" fill="white" stroke="#93C5FD" stroke-width="1.5"/>
  <text x="835" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="#1D4ED8">OTA Firmware Manager</text>
  <text x="835" y="90" text-anchor="middle" font-size="10" fill="#64748B">Version control · Registry</text>
  <text x="835" y="106" text-anchor="middle" font-size="9" fill="#94A3B8">Staged fleet rollout</text>

  <!-- SYNC arrows (bidirectional) -->
  <text x="480" y="155" text-anchor="middle" font-size="10" font-weight="700" fill="#00BFFF" letter-spacing="1">⟵ Encrypted Sync (TLS 1.3 · MQTT / HTTPS) · Auto-reconnect · Zero data loss ⟶</text>
  <line x1="115" y1="118" x2="115" y2="168" stroke="#00BFFF" stroke-width="2" stroke-dasharray="5,4" marker-end="url(#ae)"/>
  <line x1="300" y1="118" x2="300" y2="168" stroke="#00BFFF" stroke-width="1.5" stroke-dasharray="5,4" marker-end="url(#ae)"/>
  <line x1="470" y1="118" x2="470" y2="168" stroke="#00BFFF" stroke-width="1.5" stroke-dasharray="5,4" marker-end="url(#ae)"/>
  <line x1="640" y1="118" x2="640" y2="168" stroke="#00BFFF" stroke-width="1.5" stroke-dasharray="5,4" marker-end="url(#ae)"/>
  <line x1="835" y1="118" x2="835" y2="168" stroke="#00BFFF" stroke-width="1.5" stroke-dasharray="5,4" marker-end="url(#ae)"/>

  <!-- EDGE LAYER -->
  <rect x="10" y="168" width="940" height="200" rx="12" fill="#F0FDF4" stroke="#86EFAC" stroke-width="2"/>
  <text x="30" y="190" font-size="10" font-weight="700" fill="#15803D" letter-spacing="2">EDGE LAYER — AXONO EDGE NODE (On-Premise / Site)</text>
  <!-- Offline badge -->
  <rect x="820" y="175" width="120" height="22" rx="6" fill="#15803D"/>
  <text x="880" y="191" text-anchor="middle" font-size="10" font-weight="700" fill="white">OFFLINE CAPABLE</text>

  <!-- Edge boxes -->
  <rect x="30" y="200" width="155" height="148" rx="8" fill="#0D1B2E" stroke="#00BFFF" stroke-width="2"/>
  <text x="108" y="222" text-anchor="middle" font-size="12" font-weight="700" fill="#00BFFF">Edge Runtime</text>
  <text x="108" y="240" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.7)">AXONO Edge OS</text>
  <text x="108" y="260" text-anchor="middle" font-size="9" fill="rgba(0,191,255,0.7)">Linux · Docker</text>
  <rect x="45" y="272" width="125" height="20" rx="4" fill="rgba(0,191,255,0.1)" stroke="rgba(0,191,255,0.3)" stroke-width="1"/>
  <text x="108" y="286" text-anchor="middle" font-size="9" fill="#00BFFF">256MB–4GB RAM</text>
  <rect x="45" y="298" width="125" height="20" rx="4" fill="rgba(0,191,255,0.1)" stroke="rgba(0,191,255,0.3)" stroke-width="1"/>
  <text x="108" y="312" text-anchor="middle" font-size="9" fill="#00BFFF">Watchdog · Auto-restart</text>
  <rect x="45" y="323" width="125" height="20" rx="4" fill="rgba(0,191,255,0.1)" stroke="rgba(0,191,255,0.3)" stroke-width="1"/>
  <text x="108" y="337" text-anchor="middle" font-size="9" fill="#00BFFF">OTA self-update</text>

  <rect x="205" y="200" width="145" height="148" rx="8" fill="white" stroke="#86EFAC" stroke-width="1.5"/>
  <text x="278" y="222" text-anchor="middle" font-size="12" font-weight="700" fill="#15803D">Local Data Store</text>
  <text x="278" y="242" text-anchor="middle" font-size="10" fill="#64748B">SQLite / InfluxDB</text>
  <text x="278" y="260" text-anchor="middle" font-size="10" fill="#64748B">Local</text>
  <text x="278" y="278" text-anchor="middle" font-size="9" fill="#94A3B8">30 day+ buffer</text>
  <text x="278" y="298" text-anchor="middle" font-size="9" fill="#15803D">● Auto sync on reconnect</text>
  <text x="278" y="316" text-anchor="middle" font-size="9" fill="#15803D">● Zero data loss guarantee</text>
  <text x="278" y="334" text-anchor="middle" font-size="9" fill="#15803D">● Compression</text>

  <rect x="370" y="200" width="145" height="148" rx="8" fill="white" stroke="#86EFAC" stroke-width="1.5"/>
  <text x="443" y="222" text-anchor="middle" font-size="12" font-weight="700" fill="#15803D">Local Rule Engine</text>
  <text x="443" y="242" text-anchor="middle" font-size="10" fill="#64748B">Threshold alerts</text>
  <text x="443" y="262" text-anchor="middle" font-size="10" fill="#64748B">Logic rules</text>
  <text x="443" y="282" text-anchor="middle" font-size="9" fill="#94A3B8">&lt;100ms trigger time</text>
  <text x="443" y="300" text-anchor="middle" font-size="9" fill="#15803D">● Works offline</text>
  <text x="443" y="318" text-anchor="middle" font-size="9" fill="#15803D">● SMS/Email alerts</text>
  <text x="443" y="336" text-anchor="middle" font-size="9" fill="#15803D">● Relay control</text>

  <rect x="535" y="200" width="145" height="148" rx="8" fill="white" stroke="#86EFAC" stroke-width="1.5"/>
  <text x="608" y="222" text-anchor="middle" font-size="12" font-weight="700" fill="#15803D">Local Dashboard</text>
  <text x="608" y="242" text-anchor="middle" font-size="10" fill="#64748B">LAN accessible</text>
  <text x="608" y="262" text-anchor="middle" font-size="10" fill="#64748B">No internet needed</text>
  <text x="608" y="282" text-anchor="middle" font-size="9" fill="#94A3B8">Browser-based HMI</text>
  <text x="608" y="300" text-anchor="middle" font-size="9" fill="#15803D">● Real-time charts</text>
  <text x="608" y="318" text-anchor="middle" font-size="9" fill="#15803D">● Alarm console</text>
  <text x="608" y="336" text-anchor="middle" font-size="9" fill="#15803D">● Control commands</text>

  <rect x="700" y="200" width="145" height="148" rx="8" fill="white" stroke="#86EFAC" stroke-width="1.5"/>
  <text x="773" y="222" text-anchor="middle" font-size="12" font-weight="700" fill="#15803D">Protocol Gateway</text>
  <text x="773" y="242" text-anchor="middle" font-size="10" fill="#64748B">Modbus RTU/TCP</text>
  <text x="773" y="262" text-anchor="middle" font-size="10" fill="#64748B">OPC-UA · DNP3</text>
  <text x="773" y="282" text-anchor="middle" font-size="10" fill="#64748B">MQTT · HTTP</text>
  <text x="773" y="302" text-anchor="middle" font-size="9" fill="#94A3B8">Multi-protocol bridge</text>
  <text x="773" y="320" text-anchor="middle" font-size="9" fill="#15803D">● Polling engine</text>
  <text x="773" y="338" text-anchor="middle" font-size="9" fill="#15803D">● Tag mapping</text>

  <rect x="865" y="200" width="75" height="148" rx="8" fill="white" stroke="#86EFAC" stroke-width="1.5"/>
  <text x="903" y="230" text-anchor="middle" font-size="11" font-weight="700" fill="#15803D">Sync</text>
  <text x="903" y="250" text-anchor="middle" font-size="11" font-weight="700" fill="#15803D">Queue</text>
  <text x="903" y="275" text-anchor="middle" font-size="9" fill="#64748B">Buffer</text>
  <text x="903" y="293" text-anchor="middle" font-size="9" fill="#64748B">when</text>
  <text x="903" y="311" text-anchor="middle" font-size="9" fill="#64748B">offline</text>
  <text x="903" y="330" text-anchor="middle" font-size="9" fill="#15803D">⟲ Auto</text>
  <text x="903" y="346" text-anchor="middle" font-size="9" fill="#15803D">sync</text>

  <!-- Arrows edge → devices -->
  <line x1="108" y1="368" x2="108" y2="395" stroke="#00BFFF" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#ae)"/>
  <line x1="443" y1="348" x2="443" y2="395" stroke="#00BFFF" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#ae)"/>
  <line x1="773" y1="348" x2="773" y2="395" stroke="#00BFFF" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#ae)"/>

  <!-- DEVICE LAYER -->
  <rect x="10" y="395" width="940" height="130" rx="12" fill="#FFF7ED" stroke="#FED7AA" stroke-width="1.5"/>
  <text x="30" y="415" font-size="10" font-weight="700" fill="#C2410C" letter-spacing="2">FIELD DEVICE LAYER</text>

  <rect x="30" y="425" width="130" height="88" rx="8" fill="white" stroke="#FED7AA" stroke-width="1.5"/>
  <text x="95" y="447" text-anchor="middle" font-size="12" font-weight="700" fill="#C2410C">Sensors</text>
  <text x="95" y="465" text-anchor="middle" font-size="10" fill="#64748B">Temperature</text>
  <text x="95" y="483" text-anchor="middle" font-size="10" fill="#64748B">Pressure · Flow</text>
  <text x="95" y="501" text-anchor="middle" font-size="10" fill="#64748B">Level · Vibration</text>

  <rect x="180" y="425" width="130" height="88" rx="8" fill="white" stroke="#FED7AA" stroke-width="1.5"/>
  <text x="245" y="447" text-anchor="middle" font-size="12" font-weight="700" fill="#C2410C">PLCs</text>
  <text x="245" y="465" text-anchor="middle" font-size="10" fill="#64748B">Siemens S7</text>
  <text x="245" y="483" text-anchor="middle" font-size="10" fill="#64748B">Allen-Bradley</text>
  <text x="245" y="501" text-anchor="middle" font-size="10" fill="#64748B">Mitsubishi</text>

  <rect x="330" y="425" width="130" height="88" rx="8" fill="white" stroke="#FED7AA" stroke-width="1.5"/>
  <text x="395" y="447" text-anchor="middle" font-size="12" font-weight="700" fill="#C2410C">Energy Meters</text>
  <text x="395" y="465" text-anchor="middle" font-size="10" fill="#64748B">kWh · Power</text>
  <text x="395" y="483" text-anchor="middle" font-size="10" fill="#64748B">PF · Harmonics</text>
  <text x="395" y="501" text-anchor="middle" font-size="10" fill="#64748B">Modbus RTU</text>

  <rect x="480" y="425" width="130" height="88" rx="8" fill="white" stroke="#FED7AA" stroke-width="1.5"/>
  <text x="545" y="447" text-anchor="middle" font-size="12" font-weight="700" fill="#C2410C">VFDs / Drives</text>
  <text x="545" y="465" text-anchor="middle" font-size="10" fill="#64748B">Speed · Torque</text>
  <text x="545" y="483" text-anchor="middle" font-size="10" fill="#64748B">Alarm status</text>
  <text x="545" y="501" text-anchor="middle" font-size="10" fill="#64748B">RS485 · Modbus</text>

  <rect x="630" y="425" width="130" height="88" rx="8" fill="white" stroke="#FED7AA" stroke-width="1.5"/>
  <text x="695" y="447" text-anchor="middle" font-size="12" font-weight="700" fill="#C2410C">Actuators</text>
  <text x="695" y="465" text-anchor="middle" font-size="10" fill="#64748B">Valves · Relays</text>
  <text x="695" y="483" text-anchor="middle" font-size="10" fill="#64748B">Pumps · Motors</text>
  <text x="695" y="501" text-anchor="middle" font-size="10" fill="#64748B">Digital outputs</text>

  <rect x="780" y="425" width="160" height="88" rx="8" fill="#0D1B2E" stroke="#00BFFF" stroke-width="1.5"/>
  <text x="860" y="447" text-anchor="middle" font-size="12" font-weight="700" fill="#00BFFF">AXONO Gateway</text>
  <text x="860" y="465" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.7)">AXG-4000</text>
  <text x="860" y="483" text-anchor="middle" font-size="10" fill="rgba(0,191,255,0.7)">Protocol bridge</text>
  <text x="860" y="501" text-anchor="middle" font-size="10" fill="rgba(0,191,255,0.7)">RS485 · 4G · ETH</text>
</svg>

    </div>
    <!-- Specs -->
    <span class="sec-tag" style="color:var(--cyan-dark);">Specifications</span>
    <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:28px;font-weight:800;color:var(--navy);margin-bottom:28px;">Edge Node Requirements &amp; Capabilities</h3>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-bottom:28px;">
      <table class="specs-table">
        <tr><th colspan="2">Hardware Requirements</th></tr>
        <tr><td>Minimum CPU</td><td class="spec-val-cyan">2-core x86-64 processor</td></tr>
        <tr><td>Minimum RAM</td><td class="spec-val-cyan">2 GB</td></tr>
        <tr><td>Minimum Storage</td><td class="spec-val-cyan">20 GB free disk space</td></tr>
        <tr><td>Supported Platforms</td><td>Compact PC · Intel NUC · Mini-PC · Industrial PC</td></tr>
        <tr><td>OS Support</td><td class="spec-val-cyan">Linux (Debian, CentOS) · Windows · Raspberry Pi OS</td></tr>
        <tr><td>Java Runtime</td><td class="spec-val-cyan">JDK 17 (preferred) · JDK 8+</td></tr>
        <tr><td>Container Support</td><td class="spec-val-cyan">Docker · Docker Compose</td></tr>
        <tr><td>Typical Hardware</td><td>Raspberry Pi 4 · Intel NUC · x86 industrial mini-PC</td></tr>
      </table>
      <table class="specs-table">
        <tr><th colspan="2">Capacity &amp; Reliability</th></tr>
        <tr><td>Max Devices per Node</td><td class="spec-val-cyan">Up to 1,000 (hardware-dependent)</td></tr>
        <tr><td>Clustering (v4.0+)</td><td class="spec-val-cyan">Multiple Edge nodes — active-active HA</td></tr>
        <tr><td>Offline Operation</td><td class="spec-val-cyan">Fully continuous — no time limit</td></tr>
        <tr><td>Data During Outage</td><td class="spec-val-cyan">Stored locally — auto-synced on reconnect</td></tr>
        <tr><td>Zero Data Loss</td><td class="spec-val-cyan">Guaranteed — rule-based push-to-cloud sync queue</td></tr>
        <tr><td>Traffic Filtering</td><td>Push only subset of data to cloud — saves bandwidth</td></tr>
        <tr><td>Batch Config Update</td><td class="spec-val-cyan">Thousands of Edge nodes updated in one click</td></tr>
        <tr><td>Edge ↔ Cloud Link</td><td class="spec-val-cyan">gRPC over SSL/TLS — bidirectional async sync</td></tr>
      </table>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:28px;">
      <table class="specs-table">
        <tr><th colspan="2">Connectivity &amp; Protocols</th></tr>
        <tr><td>Native Device Protocols</td><td class="spec-val-cyan">MQTT · CoAP · HTTP · SNMP · LwM2M</td></tr>
        <tr><td>Industrial (via IoT Gateway)</td><td class="spec-val-cyan">Modbus RTU/TCP · OPC-UA · BACnet · CAN</td></tr>
        <tr><td>Payload Formats</td><td>JSON · Protocol Buffers (Protobuf)</td></tr>
        <tr><td>Device Auth</td><td class="spec-val-cyan">Access Tokens · X.509 Certificates</td></tr>
        <tr><td>Transport Security</td><td class="spec-val-cyan">TLS / SSL on all transport protocols</td></tr>
        <tr><td>LAN-Only Operation</td><td>Devices work fully over LAN — no internet needed</td></tr>
        <tr><td>Cloud Connection</td><td class="spec-val-cyan">gRPC (only link required to AXONO cloud server)</td></tr>
        <tr><td>Fully Offline Mode</td><td class="spec-val-cyan">Yes — runs completely disconnected from cloud</td></tr>
      </table>
      <table class="specs-table">
        <tr><th colspan="2">Edge Software Features</th></tr>
        <tr><td>Local Dashboards</td><td class="spec-val-cyan">Real-time SCADA/HMI — LAN accessible, no cloud</td></tr>
        <tr><td>Local Rule Engine</td><td class="spec-val-cyan">Full rule chain automation runs at the edge</td></tr>
        <tr><td>Local Alarms</td><td class="spec-val-cyan">Instant alarm triggering — no cloud dependency</td></tr>
        <tr><td>Two-Way RPC</td><td class="spec-val-cyan">Edge ↔ Cloud ↔ Device remote commands</td></tr>
        <tr><td>OTA Firmware</td><td class="spec-val-cyan">Firmware updates pushed from cloud to devices</td></tr>
        <tr><td>AI / ML Rule Node</td><td class="spec-val-cyan">AI and ML model integration within the rule engine</td></tr>
        <tr><td>Multi-Tenancy</td><td class="spec-val-cyan">Full multi-tenant isolation supported at Edge</td></tr>
        <tr><td>Solution Templates</td><td class="spec-val-cyan">Pre-built dashboards, rule chains &amp; device configs</td></tr>
      </table>
    </div>`

  return (
    <div
      id="section-edge"
      className="page-section active"
      dangerouslySetInnerHTML={{ __html: inner }}
      onClick={(e) => {
        const t = e.target.closest('[data-route]')
        if (t) { e.preventDefault(); navigate(t.dataset.route) }
      }}
    />
  )
}

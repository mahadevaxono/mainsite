import { useNavigate } from 'react-router-dom'

export default function ScadaPage() {
  const navigate = useNavigate()

  const inner = `
  <div class="section-hero section-pt">
    <div class="section-hero-inner">
      <span class="sec-tag">SCADA System</span>
      <h2 class="sec-title">Connect Any PLC.<br/>Control Everything.</h2>
      <p class="sec-subtitle">AXONO SCADA connects to any PLC or industrial controller via standard protocols. Real-time visualization, alarming, trending, and control from a single pane of glass.</p>
    </div>
  </div>

  <div class="content-wrap">
    <!-- Protocols -->
    <span class="sec-tag" style="color:var(--cyan-dark);">Supported Protocols</span>
    <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:32px;font-weight:800;color:var(--navy);margin-bottom:28px;">Universal Protocol Support</h3>
    <div class="protocol-grid">
      <div class="proto-card"><div class="proto-name">Modbus RTU</div><div class="proto-desc">Serial RS485/RS232 for legacy PLCs & meters</div><span class="proto-badge">Serial</span></div>
      <div class="proto-card"><div class="proto-name">Modbus TCP</div><div class="proto-desc">Ethernet-based Modbus for modern PLCs</div><span class="proto-badge">Ethernet</span></div>
      <div class="proto-card"><div class="proto-name">OPC-UA</div><div class="proto-desc">Unified Architecture for Siemens, Allen-Bradley</div><span class="proto-badge">Universal</span></div>
      <div class="proto-card"><div class="proto-name">DNP3</div><div class="proto-desc">Utility & energy sector standard protocol</div><span class="proto-badge">Utility</span></div>
      <div class="proto-card"><div class="proto-name">BACnet</div><div class="proto-desc">Building automation & HVAC systems</div><span class="proto-badge">Building</span></div>
      <div class="proto-card"><div class="proto-name">PROFIBUS</div><div class="proto-desc">Siemens S7 & process automation</div><span class="proto-badge">Industrial</span></div>
      <div class="proto-card"><div class="proto-name">EtherNet/IP</div><div class="proto-desc">Allen-Bradley / Rockwell automation</div><span class="proto-badge">Ethernet</span></div>
      <div class="proto-card"><div class="proto-name">IEC 61850</div><div class="proto-desc">Substation automation standard</div><span class="proto-badge">Power</span></div>
    </div>

    <!-- SCADA Features -->
    <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:32px;font-weight:800;color:var(--navy);margin-bottom:28px;margin-top:48px;">SCADA Features</h3>
    <div class="features-grid">
      <div class="feature-card">
        <div class="fc-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
        <div class="fc-title">HMI Builder</div>
        <div class="fc-desc">Drag-and-drop HMI builder with industrial symbols — valves, pumps, tanks, pipes, motors. Create process mimics in minutes. Pixel-perfect SVG graphics, real-time animated state changes.</div>
        <div class="fc-tags"><span class="tag">Drag & Drop</span><span class="tag">SVG Symbols</span><span class="tag">Animated</span></div>
      </div>
      <div class="feature-card">
        <div class="fc-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
        <div class="fc-title">Alarm Management</div>
        <div class="fc-desc">ISA-18.2 compliant alarm system. Priority-based alarming with shelving, suppression, and acknowledgement. Alarm journals, flood detection, and rationalization tools.</div>
        <div class="fc-tags"><span class="tag">ISA-18.2</span><span class="tag">Priority Levels</span><span class="tag">Alarm Journal</span></div>
      </div>
      <div class="feature-card">
        <div class="fc-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div>
        <div class="fc-title">Trending & Historian</div>
        <div class="fc-desc">Tag-based historian with configurable compression. Multi-pen trend views, XY scatter plots, process correlation analysis. Export to Excel with one click.</div>
        <div class="fc-tags"><span class="tag">Historian</span><span class="tag">Trend Views</span><span class="tag">Correlation</span></div>
      </div>
    </div>

    <!-- SCADA Workflow -->
    <div style="background:var(--off-white);border:1px solid var(--border);border-radius:16px;padding:40px;margin-top:48px;margin-bottom:48px;">
      <h4 style="font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800;color:var(--navy);margin-bottom:24px;text-align:center;">SCADA Data Flow</h4>
      <div class="wf-row">
        <div class="wf-box"><span class="wf-icon">🔧</span><div class="wf-label">PLC / RTU</div><div class="wf-sub">Field Device</div></div>
        <div class="wf-arrow"><svg viewBox="0 0 32 20" fill="none"><line x1="0" y1="10" x2="26" y2="10" stroke="#00BFFF" stroke-width="2"/><polyline points="18,4 26,10 18,16" stroke="#00BFFF" stroke-width="2" fill="none"/></svg></div>
        <div class="wf-box highlight"><span class="wf-icon">📡</span><div class="wf-label">Protocol Driver</div><div class="wf-sub">Modbus/OPC-UA</div></div>
        <div class="wf-arrow"><svg viewBox="0 0 32 20" fill="none"><line x1="0" y1="10" x2="26" y2="10" stroke="#00BFFF" stroke-width="2"/><polyline points="18,4 26,10 18,16" stroke="#00BFFF" stroke-width="2" fill="none"/></svg></div>
        <div class="wf-box"><span class="wf-icon">🗄️</span><div class="wf-label">Tag Database</div><div class="wf-sub">Point Mapping</div></div>
        <div class="wf-arrow"><svg viewBox="0 0 32 20" fill="none"><line x1="0" y1="10" x2="26" y2="10" stroke="#00BFFF" stroke-width="2"/><polyline points="18,4 26,10 18,16" stroke="#00BFFF" stroke-width="2" fill="none"/></svg></div>
        <div class="wf-box highlight"><span class="wf-icon">🖥️</span><div class="wf-label">HMI Display</div><div class="wf-sub">Mimics & Trends</div></div>
        <div class="wf-arrow"><svg viewBox="0 0 32 20" fill="none"><line x1="0" y1="10" x2="26" y2="10" stroke="#00BFFF" stroke-width="2"/><polyline points="18,4 26,10 18,16" stroke="#00BFFF" stroke-width="2" fill="none"/></svg></div>
        <div class="wf-box"><span class="wf-icon">🔔</span><div class="wf-label">Alarm Engine</div><div class="wf-sub">Alerts & Logs</div></div>
      </div>
    </div>



  <!-- SCADA mimic mockup -->
  <section class="mock-section">
    <div class="mock-wrap">
      <div class="mock-header">
        <span class="sec-tag" style="color:var(--cyan-dark);">SCADA — Process Mimic</span>
        <h3>Interactive SCADA HMI<br/>P&amp;ID Process Visualization</h3>
        <p>AXONO SCADA renders live animated process mimics in your browser — valves, pumps, tanks, flow meters, and instruments update in real time from your PLC. No desktop client, no ActiveX, no installation required.</p>
      </div>
      <div class="mock-browser">
        <div class="mock-browser-bar">
          <div class="mock-browser-dots">
            <div class="mock-browser-dot r"></div>
            <div class="mock-browser-dot y"></div>
            <div class="mock-browser-dot g"></div>
          </div>
          <div class="mock-browser-url">https://cloud.axono.io/scada/water-treatment-unit2</div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 580" style="width:100%;display:block;">
  <!-- Background -->
  <rect width="960" height="580" fill="#0f172a"/>

  <!-- TOP BAR -->
  <rect x="0" y="0" width="960" height="52" fill="#0D1B2E"/>
  <rect x="0" y="0" width="180" height="52" fill="#0a1628"/>
  <rect x="14" y="10" width="20" height="20" rx="4" fill="#00BFFF"/>
  <text x="40" y="26" font-family="sans-serif" font-size="13" font-weight="700" fill="white">AXONO SCADA</text>
  <text x="196" y="22" font-family="sans-serif" font-size="11" fill="#64748B">Water Treatment Plant — Unit 2 Process Overview</text>
  <text x="196" y="39" font-family="sans-serif" font-size="10" fill="#94A3B8">Last updated: 16:47:23 · Scan rate: 500ms</text>
  <!-- Status pills -->
  <rect x="650" y="12" width="90" height="28" rx="5" fill="#15803D22" stroke="#15803D" stroke-width="1"/>
  <circle cx="665" cy="26" r="4" fill="#22C55E"/>
  <text x="673" y="30" font-family="sans-serif" font-size="9" font-weight="700" fill="#22C55E">PLC ONLINE</text>
  <rect x="748" y="12" width="90" height="28" rx="5" fill="#1e2d45"/>
  <text x="793" y="30" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#94A3B8">⏱ SCAN 498ms</text>
  <rect x="846" y="12" width="100" height="28" rx="5" fill="#EF444422" stroke="#EF4444" stroke-width="1"/>
  <circle cx="861" cy="26" r="4" fill="#EF4444"/>
  <text x="869" y="30" font-family="sans-serif" font-size="9" font-weight="700" fill="#EF4444">2 ALARMS</text>

  <!-- ─── SCADA MIMIC DIAGRAM ─── -->
  <rect x="8" y="60" width="650" height="450" rx="10" fill="#0D1B2E" stroke="#1e2d45" stroke-width="1.5"/>
  <text x="24" y="80" font-family="sans-serif" font-size="10" font-weight="700" fill="#64748B" letter-spacing="2">PROCESS MIMIC — P&amp;ID VIEW</text>

  <!-- RAW WATER INTAKE -->
  <rect x="20" y="95" width="90" height="50" rx="6" fill="#1e3a5f" stroke="#3B82F6" stroke-width="1.5"/>
  <text x="65" y="114" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="700" fill="#3B82F6">RAW WATER</text>
  <text x="65" y="127" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#3B82F6">INTAKE</text>
  <text x="65" y="140" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="white">248 m³/h</text>
  <!-- Pipe from intake -->
  <rect x="110" y="115" width="50" height="10" rx="3" fill="#1e3a5f" stroke="#3B82F6" stroke-width="1"/>
  <!-- Flow arrow -->
  <polygon points="156,115 164,120 156,125" fill="#3B82F6"/>

  <!-- PUMP 1 (animated circle = pump) -->
  <circle cx="200" cy="120" r="24" fill="#1e2d45" stroke="#00BFFF" stroke-width="2"/>
  <text x="200" y="114" text-anchor="middle" font-family="sans-serif" font-size="7" font-weight="700" fill="#00BFFF">PUMP</text>
  <text x="200" y="126" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="700" fill="white">P-01</text>
  <text x="200" y="138" text-anchor="middle" font-family="sans-serif" font-size="7" fill="#22C55E">RUN</text>
  <!-- Pump pipe out -->
  <rect x="224" y="115" width="46" height="10" rx="3" fill="#1e3a5f" stroke="#00BFFF" stroke-width="1"/>
  <polygon points="266,115 274,120 266,125" fill="#00BFFF"/>

  <!-- FILTER TANK -->
  <rect x="278" y="90" width="70" height="60" rx="6" fill="#1a3d1a" stroke="#22C55E" stroke-width="1.5"/>
  <text x="313" y="108" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="700" fill="#22C55E">FILTER</text>
  <text x="313" y="120" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#22C55E">TANK-01</text>
  <!-- Filter level bar -->
  <rect x="290" y="128" width="46" height="14" rx="3" fill="#2a3a52"/>
  <rect x="290" y="128" width="34" height="14" rx="3" fill="#22C55E" fill-opacity="0.7"/>
  <text x="313" y="139" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="700" fill="white">73%</text>
  <!-- Pipe out of filter -->
  <rect x="348" y="115" width="40" height="10" rx="3" fill="#1e3a5f" stroke="#22C55E" stroke-width="1"/>
  <polygon points="384,115 392,120 384,125" fill="#22C55E"/>

  <!-- CHEMICAL DOSING -->
  <rect x="396" y="100" width="60" height="40" rx="5" fill="#3d1a3d" stroke="#A855F7" stroke-width="1.5"/>
  <text x="426" y="118" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="700" fill="#A855F7">DOSING</text>
  <text x="426" y="130" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#A855F7">Cl₂ 4.2 mg/L</text>
  <!-- Dosing pipe down to main -->
  <line x1="426" y1="140" x2="426" y2="160" stroke="#A855F7" stroke-width="1.5" stroke-dasharray="4,2"/>

  <!-- MAIN HORIZONTAL PIPE -->
  <rect x="20" y="190" width="610" height="12" rx="4" fill="#1e3a5f" stroke="#3B82F6" stroke-width="1"/>

  <!-- CHLORINE CONTACT TANK -->
  <rect x="460" y="90" width="80" height="75" rx="7" fill="#1e3a5f" stroke="#00BFFF" stroke-width="2"/>
  <text x="500" y="110" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="700" fill="#00BFFF">CONTACT</text>
  <text x="500" y="122" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#00BFFF">TANK-02</text>
  <text x="500" y="140" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="white">68%</text>
  <rect x="472" y="147" width="56" height="10" rx="3" fill="#2a3a52"/>
  <rect x="472" y="147" width="38" height="10" rx="3" fill="#00BFFF" fill-opacity="0.7"/>

  <!-- PUMP 2 -->
  <circle cx="580" cy="120" r="24" fill="#1e2d45" stroke="#00BFFF" stroke-width="2"/>
  <text x="580" y="114" text-anchor="middle" font-family="sans-serif" font-size="7" font-weight="700" fill="#00BFFF">PUMP</text>
  <text x="580" y="126" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="700" fill="white">P-02</text>
  <text x="580" y="138" text-anchor="middle" font-family="sans-serif" font-size="7" fill="#EF4444">FAULT</text>
  <!-- Alarm indicator on pump -->
  <rect x="594" y="96" width="30" height="14" rx="3" fill="#EF4444"/>
  <text x="609" y="107" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="700" fill="white">ALM</text>

  <!-- CLEAR WELL / STORAGE -->
  <rect x="440" y="220" width="95" height="100" rx="8" fill="#1a3040" stroke="#00BFFF" stroke-width="2"/>
  <text x="487" y="242" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#00BFFF">CLEAR</text>
  <text x="487" y="255" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#00BFFF">WELL</text>
  <!-- Water level visual -->
  <rect x="452" y="265" width="71" height="46" rx="3" fill="#2a3a52"/>
  <rect x="452" y="282" width="71" height="29" rx="3" fill="#00BFFF" fill-opacity="0.35"/>
  <text x="487" y="298" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="white">62%</text>

  <!-- DISTRIBUTION PUMP 3 -->
  <circle cx="580" cy="290" r="24" fill="#1e2d45" stroke="#00BFFF" stroke-width="2"/>
  <text x="580" y="284" text-anchor="middle" font-family="sans-serif" font-size="7" font-weight="700" fill="#00BFFF">PUMP</text>
  <text x="580" y="296" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="700" fill="white">P-03</text>
  <text x="580" y="308" text-anchor="middle" font-family="sans-serif" font-size="7" fill="#22C55E">RUN</text>

  <!-- Pipe to distribution -->
  <rect x="604" y="285" width="40" height="10" rx="3" fill="#1e3a5f" stroke="#00BFFF" stroke-width="1"/>
  <polygon points="640,285 648,290 640,295" fill="#00BFFF"/>

  <!-- DISTRIBUTION OUTPUT -->
  <rect x="548" y="355" width="95" height="50" rx="6" fill="#1e3a5f" stroke="#22C55E" stroke-width="1.5"/>
  <text x="595" y="374" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="700" fill="#22C55E">DISTRIBUTION</text>
  <text x="595" y="387" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#22C55E">196 m³/h</text>
  <text x="595" y="400" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#22C55E">2.4 bar</text>

  <!-- FLOW METERS (inline sensors) -->
  <ellipse cx="160" cy="196" rx="14" ry="8" fill="#1e2d45" stroke="#F59E0B" stroke-width="1.5"/>
  <text x="160" y="200" text-anchor="middle" font-family="sans-serif" font-size="7" fill="#F59E0B">FT</text>
  <text x="160" y="213" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#F59E0B">248</text>

  <ellipse cx="380" cy="196" rx="14" ry="8" fill="#1e2d45" stroke="#F59E0B" stroke-width="1.5"/>
  <text x="380" y="200" text-anchor="middle" font-family="sans-serif" font-size="7" fill="#F59E0B">FT</text>
  <text x="380" y="213" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#F59E0B">241</text>

  <!-- SENSORS/INSTRUMENTS on pipes -->
  <rect x="100" y="225" width="50" height="36" rx="4" fill="#1e2d45" stroke="#94A3B8" stroke-width="1"/>
  <text x="125" y="239" text-anchor="middle" font-family="sans-serif" font-size="7" fill="#94A3B8">TURB.</text>
  <text x="125" y="250" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="white">0.12</text>
  <text x="125" y="259" text-anchor="middle" font-family="sans-serif" font-size="7" fill="#22C55E">NTU ✓</text>

  <rect x="270" y="225" width="50" height="36" rx="4" fill="#1e2d45" stroke="#94A3B8" stroke-width="1"/>
  <text x="295" y="239" text-anchor="middle" font-family="sans-serif" font-size="7" fill="#94A3B8">pH</text>
  <text x="295" y="250" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="white">7.42</text>
  <text x="295" y="259" text-anchor="middle" font-family="sans-serif" font-size="7" fill="#22C55E">NORMAL</text>

  <!-- CHLORINE ANALYSER -->
  <rect x="160" y="360" width="65" height="45" rx="5" fill="#3d1a3d" stroke="#A855F7" stroke-width="1.5"/>
  <text x="192" y="378" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="700" fill="#A855F7">CHLORINE</text>
  <text x="192" y="392" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="white">0.38</text>
  <text x="192" y="403" text-anchor="middle" font-family="sans-serif" font-size="7" fill="#A855F7">mg/L ✓</text>

  <!-- PIPE LEGEND -->
  <rect x="20" y="460" width="270" height="42" rx="5" fill="#1e2d45"/>
  <rect x="30" y="476" width="18" height="5" rx="2" fill="#3B82F6"/>
  <text x="52" y="481" font-family="sans-serif" font-size="8" fill="#94A3B8">Raw water</text>
  <rect x="110" y="476" width="18" height="5" rx="2" fill="#00BFFF"/>
  <text x="132" y="481" font-family="sans-serif" font-size="8" fill="#94A3B8">Treated water</text>
  <rect x="210" y="476" width="18" height="5" rx="2" fill="#A855F7"/>
  <text x="232" y="481" font-family="sans-serif" font-size="8" fill="#94A3B8">Chemical dosing</text>

  <!-- ─── RIGHT PANEL ─── -->
  <!-- Trend chart -->
  <rect x="666" y="60" width="286" height="180" rx="8" fill="#1e2d45"/>
  <text x="682" y="79" font-family="sans-serif" font-size="10" font-weight="700" fill="white">Flow Rate — 8h Trend</text>
  <line x1="682" y1="220" x2="938" y2="220" stroke="#2a3a52" stroke-width="1"/>
  <line x1="682" y1="198" x2="938" y2="198" stroke="#2a3a52" stroke-width="1"/>
  <line x1="682" y1="176" x2="938" y2="176" stroke="#2a3a52" stroke-width="1"/>
  <line x1="682" y1="154" x2="938" y2="154" stroke="#2a3a52" stroke-width="1"/>
  <line x1="682" y1="132" x2="938" y2="132" stroke="#2a3a52" stroke-width="1"/>
  <polyline points="682,195 710,188 738,182 766,186 794,178 822,171 850,175 878,168 906,162 934,158" fill="none" stroke="#00BFFF" stroke-width="2" stroke-linejoin="round"/>
  <polyline points="682,205 710,202 738,200 766,205 794,200 822,196 850,198 878,194 906,190 934,188" fill="none" stroke="#22C55E" stroke-width="1.5" stroke-linejoin="round" stroke-dasharray="4,2"/>
  <text x="682" y="236" font-family="sans-serif" font-size="8" fill="#475569">08:00</text>
  <text x="808" y="236" font-family="sans-serif" font-size="8" fill="#475569">12:00</text>
  <text x="930" y="236" text-anchor="end" font-family="sans-serif" font-size="8" fill="#475569">Now</text>
  <rect x="682" y="85" width="8" height="8" rx="1" fill="#00BFFF"/>
  <text x="694" y="93" font-family="sans-serif" font-size="8" fill="#94A3B8">Inlet (m³/h)</text>
  <rect x="770" y="85" width="8" height="8" rx="1" fill="#22C55E"/>
  <text x="782" y="93" font-family="sans-serif" font-size="8" fill="#94A3B8">Outlet (m³/h)</text>

  <!-- TAG VALUES PANEL -->
  <rect x="666" y="250" width="286" height="260" rx="8" fill="#1e2d45"/>
  <text x="682" y="270" font-family="sans-serif" font-size="10" font-weight="700" fill="white">Live Tag Values</text>
  <rect x="666" y="276" width="286" height="18" fill="#162035"/>
  <text x="682" y="289" font-family="sans-serif" font-size="9" font-weight="700" fill="#64748B">TAG</text>
  <text x="840" y="289" font-family="sans-serif" font-size="9" font-weight="700" fill="#64748B">VALUE</text>
  <text x="906" y="289" font-family="sans-serif" font-size="9" font-weight="700" fill="#64748B">STATUS</text>
  <!-- Tag rows -->
  <text x="682" y="312" font-family="sans-serif" font-size="10" fill="white">FT-01 Inlet Flow</text>
  <text x="840" y="312" font-family="sans-serif" font-size="10" font-weight="700" fill="white">248 m³/h</text>
  <circle cx="924" cy="307" r="5" fill="#22C55E"/>
  <line x1="682" y1="320" x2="938" y2="320" stroke="#2a3a52" stroke-width="0.8"/>
  <text x="682" y="338" font-family="sans-serif" font-size="10" fill="white">FT-02 Outlet Flow</text>
  <text x="840" y="338" font-family="sans-serif" font-size="10" font-weight="700" fill="white">241 m³/h</text>
  <circle cx="924" cy="333" r="5" fill="#22C55E"/>
  <line x1="682" y1="346" x2="938" y2="346" stroke="#2a3a52" stroke-width="0.8"/>
  <text x="682" y="364" font-family="sans-serif" font-size="10" fill="white">LT-01 CW Level</text>
  <text x="840" y="364" font-family="sans-serif" font-size="10" font-weight="700" fill="white">62 %</text>
  <circle cx="924" cy="359" r="5" fill="#22C55E"/>
  <line x1="682" y1="372" x2="938" y2="372" stroke="#2a3a52" stroke-width="0.8"/>
  <text x="682" y="390" font-family="sans-serif" font-size="10" fill="white">AT-01 Chlorine</text>
  <text x="840" y="390" font-family="sans-serif" font-size="10" font-weight="700" fill="white">0.38 mg/L</text>
  <circle cx="924" cy="385" r="5" fill="#22C55E"/>
  <line x1="682" y1="398" x2="938" y2="398" stroke="#2a3a52" stroke-width="0.8"/>
  <text x="682" y="416" font-family="sans-serif" font-size="10" fill="white">AT-02 pH</text>
  <text x="840" y="416" font-family="sans-serif" font-size="10" font-weight="700" fill="white">7.42</text>
  <circle cx="924" cy="411" r="5" fill="#22C55E"/>
  <line x1="682" y1="424" x2="938" y2="424" stroke="#2a3a52" stroke-width="0.8"/>
  <text x="682" y="442" font-family="sans-serif" font-size="10" fill="white">P-02 Speed</text>
  <text x="840" y="442" font-family="sans-serif" font-size="10" font-weight="700" fill="#EF4444">FAULT</text>
  <circle cx="924" cy="437" r="5" fill="#EF4444"/>
  <line x1="682" y1="450" x2="938" y2="450" stroke="#2a3a52" stroke-width="0.8"/>
  <text x="682" y="468" font-family="sans-serif" font-size="10" fill="white">TT-01 Inlet Temp</text>
  <text x="840" y="468" font-family="sans-serif" font-size="10" font-weight="700" fill="#F59E0B">32.8 °C</text>
  <circle cx="924" cy="463" r="5" fill="#F59E0B"/>
  <line x1="682" y1="476" x2="938" y2="476" stroke="#2a3a52" stroke-width="0.8"/>
  <text x="682" y="494" font-family="sans-serif" font-size="10" fill="white">PT-01 Supply Press.</text>
  <text x="840" y="494" font-family="sans-serif" font-size="10" font-weight="700" fill="white">2.4 bar</text>
  <circle cx="924" cy="489" r="5" fill="#22C55E"/>
</svg>
      </div>
    </div>
  </section>

    <h3 class="arch-section-title">SCADA System Architecture Diagram</h3>
    <p class="arch-section-sub">From field PLCs and RTUs through protocol drivers into the AXONO SCADA Core — historian, alarm engine, rule engine, and reporting — delivered to operators via HMI, trend viewer, alarm console, and mobile app.</p>
    <div class="arch-wrap">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 520" style="font-family:'Barlow',sans-serif;width:100%;max-width:960px;">
  <defs>
    <marker id="as" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#00BFFF"/>
    </marker>
  </defs>

  <!-- FIELD DEVICES -->
  <rect x="10" y="15" width="940" height="110" rx="12" fill="#FFF7ED" stroke="#FED7AA" stroke-width="1.5"/>
  <text x="30" y="35" font-size="10" font-weight="700" fill="#C2410C" letter-spacing="2">FIELD / OT LAYER — Physical Devices</text>

  <rect x="28" y="46" width="120" height="64" rx="8" fill="white" stroke="#FED7AA" stroke-width="1.5"/>
  <text x="88" y="66" text-anchor="middle" font-size="11" font-weight="700" fill="#C2410C">Siemens S7</text>
  <text x="88" y="82" text-anchor="middle" font-size="9" fill="#64748B">S7-1200/1500</text>
  <text x="88" y="98" text-anchor="middle" font-size="9" fill="#64748B">OPC-UA / S7Comm</text>

  <rect x="165" y="46" width="120" height="64" rx="8" fill="white" stroke="#FED7AA" stroke-width="1.5"/>
  <text x="225" y="66" text-anchor="middle" font-size="11" font-weight="700" fill="#C2410C">Allen-Bradley</text>
  <text x="225" y="82" text-anchor="middle" font-size="9" fill="#64748B">CompactLogix</text>
  <text x="225" y="98" text-anchor="middle" font-size="9" fill="#64748B">EtherNet/IP</text>

  <rect x="302" y="46" width="120" height="64" rx="8" fill="white" stroke="#FED7AA" stroke-width="1.5"/>
  <text x="362" y="66" text-anchor="middle" font-size="11" font-weight="700" fill="#C2410C">Schneider</text>
  <text x="362" y="82" text-anchor="middle" font-size="9" fill="#64748B">Modicon M340</text>
  <text x="362" y="98" text-anchor="middle" font-size="9" fill="#64748B">Modbus TCP</text>

  <rect x="439" y="46" width="120" height="64" rx="8" fill="white" stroke="#FED7AA" stroke-width="1.5"/>
  <text x="499" y="66" text-anchor="middle" font-size="11" font-weight="700" fill="#C2410C">Generic RTU</text>
  <text x="499" y="82" text-anchor="middle" font-size="9" fill="#64748B">Modbus RTU</text>
  <text x="499" y="98" text-anchor="middle" font-size="9" fill="#64748B">RS485 · RS232</text>

  <rect x="576" y="46" width="120" height="64" rx="8" fill="white" stroke="#FED7AA" stroke-width="1.5"/>
  <text x="636" y="66" text-anchor="middle" font-size="11" font-weight="700" fill="#C2410C">Energy Meters</text>
  <text x="636" y="82" text-anchor="middle" font-size="9" fill="#64748B">kWh / kVAR</text>
  <text x="636" y="98" text-anchor="middle" font-size="9" fill="#64748B">Modbus RTU</text>

  <rect x="713" y="46" width="120" height="64" rx="8" fill="white" stroke="#FED7AA" stroke-width="1.5"/>
  <text x="773" y="66" text-anchor="middle" font-size="11" font-weight="700" fill="#C2410C">Field Sensors</text>
  <text x="773" y="82" text-anchor="middle" font-size="9" fill="#64748B">4-20mA · 0-10V</text>
  <text x="773" y="98" text-anchor="middle" font-size="9" fill="#64748B">Pt100 · Thermocouple</text>

  <rect x="843" y="46" width="107" height="64" rx="8" fill="white" stroke="#FED7AA" stroke-width="1.5"/>
  <text x="897" y="66" text-anchor="middle" font-size="11" font-weight="700" fill="#C2410C">IED / Relays</text>
  <text x="897" y="82" text-anchor="middle" font-size="9" fill="#64748B">IEC 61850</text>
  <text x="897" y="98" text-anchor="middle" font-size="9" fill="#64748B">DNP3 · GOOSE</text>

  <!-- Arrows Field → Communication -->
  <line x1="88" y1="110" x2="88" y2="148" stroke="#00BFFF" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#as)"/>
  <line x1="225" y1="110" x2="225" y2="148" stroke="#00BFFF" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#as)"/>
  <line x1="362" y1="110" x2="362" y2="148" stroke="#00BFFF" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#as)"/>
  <line x1="499" y1="110" x2="499" y2="148" stroke="#00BFFF" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#as)"/>
  <line x1="636" y1="110" x2="636" y2="148" stroke="#00BFFF" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#as)"/>
  <line x1="773" y1="110" x2="773" y2="148" stroke="#00BFFF" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#as)"/>
  <line x1="897" y1="110" x2="897" y2="148" stroke="#00BFFF" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#as)"/>

  <!-- COMMUNICATION / DRIVER LAYER -->
  <rect x="10" y="148" width="940" height="90" rx="12" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.5"/>
  <text x="30" y="168" font-size="10" font-weight="700" fill="#15803D" letter-spacing="2">COMMUNICATION / DRIVER LAYER</text>

  <rect x="28" y="178" width="180" height="48" rx="8" fill="white" stroke="#86EFAC" stroke-width="1.5"/>
  <text x="118" y="198" text-anchor="middle" font-size="12" font-weight="700" fill="#15803D">OPC-UA Client</text>
  <text x="118" y="215" text-anchor="middle" font-size="10" fill="#64748B">Siemens · AB · Generic</text>

  <rect x="225" y="178" width="170" height="48" rx="8" fill="white" stroke="#86EFAC" stroke-width="1.5"/>
  <text x="310" y="198" text-anchor="middle" font-size="12" font-weight="700" fill="#15803D">Modbus Driver</text>
  <text x="310" y="215" text-anchor="middle" font-size="10" fill="#64748B">RTU (RS485) · TCP (ETH)</text>

  <rect x="412" y="178" width="170" height="48" rx="8" fill="white" stroke="#86EFAC" stroke-width="1.5"/>
  <text x="497" y="198" text-anchor="middle" font-size="12" font-weight="700" fill="#15803D">EtherNet/IP Driver</text>
  <text x="497" y="215" text-anchor="middle" font-size="10" fill="#64748B">Allen-Bradley CIP</text>

  <rect x="599" y="178" width="170" height="48" rx="8" fill="white" stroke="#86EFAC" stroke-width="1.5"/>
  <text x="684" y="198" text-anchor="middle" font-size="12" font-weight="700" fill="#15803D">IEC 61850 / DNP3</text>
  <text x="684" y="215" text-anchor="middle" font-size="10" fill="#64748B">Substation · Utility</text>

  <rect x="786" y="178" width="164" height="48" rx="8" fill="#0D1B2E" stroke="#00BFFF" stroke-width="1.5"/>
  <text x="868" y="198" text-anchor="middle" font-size="12" font-weight="700" fill="#00BFFF">AXONO Gateway</text>
  <text x="868" y="215" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.6)">AXG-4000 Hardware</text>

  <!-- Arrows → SCADA Core -->
  <line x1="480" y1="238" x2="480" y2="272" stroke="#00BFFF" stroke-width="2" marker-end="url(#as)"/>

  <!-- SCADA CORE -->
  <rect x="10" y="272" width="940" height="120" rx="12" fill="#0D1B2E" stroke="#00BFFF" stroke-width="2"/>
  <text x="480" y="295" text-anchor="middle" font-size="10" font-weight="700" fill="#00BFFF" letter-spacing="2">AXONO SCADA CORE ENGINE</text>

  <rect x="28" y="304" width="140" height="72" rx="8" fill="rgba(0,191,255,0.08)" stroke="rgba(0,191,255,0.3)" stroke-width="1"/>
  <text x="98" y="325" text-anchor="middle" font-size="12" font-weight="700" fill="#00BFFF">Tag Database</text>
  <text x="98" y="343" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.65)">Point mapping</text>
  <text x="98" y="360" text-anchor="middle" font-size="9" fill="rgba(0,191,255,0.7)">Unlimited tags</text>

  <rect x="185" y="304" width="140" height="72" rx="8" fill="rgba(0,191,255,0.08)" stroke="rgba(0,191,255,0.3)" stroke-width="1"/>
  <text x="255" y="325" text-anchor="middle" font-size="12" font-weight="700" fill="#00BFFF">Historian</text>
  <text x="255" y="343" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.65)">Time-series store</text>
  <text x="255" y="360" text-anchor="middle" font-size="9" fill="rgba(0,191,255,0.7)">1ms precision</text>

  <rect x="342" y="304" width="140" height="72" rx="8" fill="rgba(0,191,255,0.08)" stroke="rgba(0,191,255,0.3)" stroke-width="1"/>
  <text x="412" y="325" text-anchor="middle" font-size="12" font-weight="700" fill="#00BFFF">Alarm Engine</text>
  <text x="412" y="343" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.65)">ISA-18.2 compliant</text>
  <text x="412" y="360" text-anchor="middle" font-size="9" fill="rgba(0,191,255,0.7)">Priority · Journal</text>

  <rect x="499" y="304" width="140" height="72" rx="8" fill="rgba(0,191,255,0.08)" stroke="rgba(0,191,255,0.3)" stroke-width="1"/>
  <text x="569" y="325" text-anchor="middle" font-size="12" font-weight="700" fill="#00BFFF">Rule Engine</text>
  <text x="569" y="343" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.65)">Automation logic</text>
  <text x="569" y="360" text-anchor="middle" font-size="9" fill="rgba(0,191,255,0.7)">Control · Interlocks</text>

  <rect x="656" y="304" width="140" height="72" rx="8" fill="rgba(0,191,255,0.08)" stroke="rgba(0,191,255,0.3)" stroke-width="1"/>
  <text x="726" y="325" text-anchor="middle" font-size="12" font-weight="700" fill="#00BFFF">Report Engine</text>
  <text x="726" y="343" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.65)">Shift / Daily / Custom</text>
  <text x="726" y="360" text-anchor="middle" font-size="9" fill="rgba(0,191,255,0.7)">PDF · Excel · Email</text>

  <rect x="813" y="304" width="137" height="72" rx="8" fill="rgba(0,191,255,0.08)" stroke="rgba(0,191,255,0.3)" stroke-width="1"/>
  <text x="882" y="325" text-anchor="middle" font-size="12" font-weight="700" fill="#00BFFF">Security</text>
  <text x="882" y="343" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.65)">RBAC · Audit log</text>
  <text x="882" y="360" text-anchor="middle" font-size="9" fill="rgba(0,191,255,0.7)">TLS 1.3 · VPN</text>

  <!-- Arrows Core → HMI -->
  <line x1="480" y1="392" x2="480" y2="420" stroke="#00BFFF" stroke-width="2" marker-end="url(#as)"/>

  <!-- HMI / PRESENTATION -->
  <rect x="10" y="420" width="940" height="90" rx="12" fill="#F5F3FF" stroke="#C4B5FD" stroke-width="1.5"/>
  <text x="30" y="440" font-size="10" font-weight="700" fill="#6D28D9" letter-spacing="2">HMI / VISUALIZATION LAYER</text>

  <rect x="28" y="450" width="160" height="50" rx="8" fill="white" stroke="#C4B5FD" stroke-width="1.5"/>
  <text x="108" y="472" text-anchor="middle" font-size="12" font-weight="700" fill="#6D28D9">HMI Mimic</text>
  <text x="108" y="490" text-anchor="middle" font-size="10" fill="#64748B">P&amp;ID · Process views</text>

  <rect x="208" y="450" width="160" height="50" rx="8" fill="white" stroke="#C4B5FD" stroke-width="1.5"/>
  <text x="288" y="472" text-anchor="middle" font-size="12" font-weight="700" fill="#6D28D9">Trend Viewer</text>
  <text x="288" y="490" text-anchor="middle" font-size="10" fill="#64748B">Multi-pen · Historical</text>

  <rect x="388" y="450" width="160" height="50" rx="8" fill="white" stroke="#C4B5FD" stroke-width="1.5"/>
  <text x="468" y="472" text-anchor="middle" font-size="12" font-weight="700" fill="#6D28D9">Alarm Console</text>
  <text x="468" y="490" text-anchor="middle" font-size="10" fill="#64748B">Active · History · ACK</text>

  <rect x="568" y="450" width="160" height="50" rx="8" fill="white" stroke="#C4B5FD" stroke-width="1.5"/>
  <text x="648" y="472" text-anchor="middle" font-size="12" font-weight="700" fill="#6D28D9">Report Console</text>
  <text x="648" y="490" text-anchor="middle" font-size="10" fill="#64748B">On-demand · Scheduled</text>

  <rect x="748" y="450" width="195" height="50" rx="8" fill="#0D1B2E" stroke="#00BFFF" stroke-width="1.5"/>
  <text x="846" y="472" text-anchor="middle" font-size="12" font-weight="700" fill="#00BFFF">Mobile SCADA</text>
  <text x="846" y="490" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.6)">iOS · Android App</text>
</svg>

    </div>
    <!-- Specs -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-bottom:28px;">
      <table class="specs-table">
        <tr><th colspan="2">SCADA Platform Specifications</th></tr>
        <tr><td>Max Tag / Data Points</td><td class="spec-val-cyan">Unlimited — no software cap</td></tr>
        <tr><td>Dashboard Widgets</td><td class="spec-val-cyan">Unlimited custom widgets — drag &amp; drop builder</td></tr>
        <tr><td>Concurrent Web Clients</td><td class="spec-val-cyan">Unlimited — browser-based, no client install</td></tr>
        <tr><td>HMI Type</td><td class="spec-val-cyan">Web-based SVG SCADA — real-time animated mimics</td></tr>
        <tr><td>Alarm System</td><td class="spec-val-cyan">Threshold · Multi-condition · Escalation policies</td></tr>
        <tr><td>Alarm Notifications</td><td>Email · SMS · Slack · Microsoft Teams · Webhook</td></tr>
        <tr><td>Report Types</td><td class="spec-val-cyan">Shift · Daily · Weekly · Monthly · Custom period</td></tr>
        <tr><td>Report Formats</td><td class="spec-val-cyan">PDF · Excel (XLS) · CSV — scheduled email delivery</td></tr>
        <tr><td>Historian</td><td class="spec-val-cyan">PostgreSQL / Cassandra — millisecond precision</td></tr>
        <tr><td>Mobile Access</td><td class="spec-val-cyan">iOS &amp; Android — full SCADA dashboards on mobile</td></tr>
      </table>
      <table class="specs-table">
        <tr><th colspan="2">Industrial Protocol Support</th></tr>
        <tr><td>Modbus RTU</td><td class="spec-val-cyan">RS485 / RS232 — energy meters, PLCs, sensors</td></tr>
        <tr><td>Modbus TCP</td><td class="spec-val-cyan">Ethernet — modern PLCs and controllers</td></tr>
        <tr><td>OPC-UA Client</td><td class="spec-val-cyan">Siemens S7, ABB, Rockwell — generic OPC-UA</td></tr>
        <tr><td>BACnet IP / MS/TP</td><td class="spec-val-cyan">HVAC · Lighting · Building automation</td></tr>
        <tr><td>SNMP</td><td>Network devices — UPS, switches, routers</td></tr>
        <tr><td>MQTT</td><td class="spec-val-cyan">Smart sensors, IoT devices, custom firmware</td></tr>
        <tr><td>CoAP / LwM2M</td><td class="spec-val-cyan">Low-power and constrained device support</td></tr>
        <tr><td>HTTP / REST</td><td>Web-connected devices and third-party APIs</td></tr>
        <tr><td>Custom Protocol</td><td class="spec-val-cyan">Python-extensible connector — any serial/TCP device</td></tr>
      </table>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:28px;">
      <table class="specs-table">
        <tr><th colspan="2">Supported PLCs &amp; Controllers</th></tr>
        <tr><td>Siemens</td><td class="spec-val-cyan">S7-200, S7-300, S7-400, S7-1200, S7-1500 (OPC-UA / Modbus TCP)</td></tr>
        <tr><td>Allen-Bradley / Rockwell</td><td class="spec-val-cyan">MicroLogix, CompactLogix, ControlLogix (EtherNet/IP via OPC-UA)</td></tr>
        <tr><td>Schneider Electric</td><td>Modicon M340, Premium, Quantum (Modbus TCP)</td></tr>
        <tr><td>Mitsubishi Electric</td><td>MELSEC-Q, iQ-R, FX series (Modbus TCP)</td></tr>
        <tr><td>ABB</td><td class="spec-val-cyan">AC500, Freelance (OPC-UA)</td></tr>
        <tr><td>Omron</td><td>CJ2, NX/NJ series (Modbus TCP / OPC-UA)</td></tr>
        <tr><td>Generic RTUs</td><td class="spec-val-cyan">Any Modbus RTU/TCP compatible device</td></tr>
        <tr><td>Custom / Legacy</td><td class="spec-val-cyan">Custom connector development available</td></tr>
      </table>
      <table class="specs-table">
        <tr><th colspan="2">Rule Engine &amp; Automation</th></tr>
        <tr><td>Rule Chain Designer</td><td class="spec-val-cyan">Visual drag &amp; drop — no coding required</td></tr>
        <tr><td>Trigger Nodes</td><td>Message type · Entity type · Attribute check · JS filter</td></tr>
        <tr><td>Action Nodes</td><td class="spec-val-cyan">Create alarm · Send email · RPC call · Save telemetry · REST call</td></tr>
        <tr><td>Transformation</td><td class="spec-val-cyan">JSON transform · Math · Scaling · Unit conversion</td></tr>
        <tr><td>External Integration</td><td>Kafka · RabbitMQ · AWS SQS · Azure IoT Hub</td></tr>
        <tr><td>RPC Control</td><td class="spec-val-cyan">Two-way — server ↔ device remote commands</td></tr>
        <tr><td>Scheduler</td><td class="spec-val-cyan">Auto report generation · Device commands · Config updates</td></tr>
        <tr><td>Processing Modes</td><td class="spec-val-cyan">Shared (multi-tenant) · Isolated (per-device rule chain)</td></tr>
      </table>
    </div>

    <!-- Use cases -->
    <div class="usecase-row">
      <div class="usecase-card"><div class="uc-num">USE CASE 01</div><div class="uc-title">Water Treatment Plant</div><div class="uc-desc">Monitor pumps, tanks, chlorine levels, and flow rates. Automated dosing control with alarm management.</div></div>
      <div class="usecase-card"><div class="uc-num">USE CASE 02</div><div class="uc-title">Power Substation</div><div class="uc-desc">IEC 61850 compliant monitoring of breakers, transformers, and busbars with real-time single-line diagrams.</div></div>
      <div class="usecase-card"><div class="uc-num">USE CASE 03</div><div class="uc-title">Manufacturing Line</div><div class="uc-desc">Production tracking, OEE calculation, machine status monitoring, and predictive maintenance alerts.</div></div>
    </div>
  </div>`

  return (
    <div
      id="section-scada"
      className="page-section active"
      dangerouslySetInnerHTML={{ __html: inner }}
      onClick={(e) => {
        const t = e.target.closest('[data-route]')
        if (t) { e.preventDefault(); navigate(t.dataset.route) }
      }}
    />
  )
}

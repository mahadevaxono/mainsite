import { useNavigate } from 'react-router-dom'

export default function HardwarePage() {
  const navigate = useNavigate()

  const inner = `
  <div class="section-hero section-pt">
    <div class="section-hero-inner">
      <span class="sec-tag">IoT Gateway & Hardware</span>
      <h2 class="sec-title">Industrial-Grade Hardware<br/>Built to Last.</h2>
      <p class="sec-subtitle">AXONO designs and manufactures rugged IoT gateways and custom hardware for connecting, controlling, and configuring industrial devices, sensors, and machines.</p>
    </div>
  </div>

  <div class="content-wrap">
    <span class="sec-tag" style="color:var(--cyan-dark);">Product Range</span>
    <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:32px;font-weight:800;color:var(--navy);margin-bottom:32px;">IoT Gateway Product Line</h3>

    <div class="hw-cards">
      <!-- AXG-MAX -->
      <div class="hw-card">
        <div class="hw-card-header">
          <div class="hw-badge">MAX SERIES</div>
          <div class="hw-model">AXG-MAX</div>
          <div class="hw-type">Multi-path Gateway — 4G + LAN + Wi-Fi + LoRa</div>
        </div>
        <div style="background:linear-gradient(135deg,#f0f7ff 0%,#e8f4ff 100%);border-bottom:2px dashed #93c5fd;min-height:260px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:40px 32px;position:relative;overflow:hidden;">
            <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(0,191,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,191,255,.04) 1px,transparent 1px);background-size:24px 24px;"></div>
            <div style="position:relative;z-index:1;width:80px;height:80px;background:rgba(0,191,255,.1);border:2px dashed #93c5fd;border-radius:16px;display:flex;align-items:center;justify-content:center;">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            </div>
            <div style="position:relative;z-index:1;text-align:center;">
              <p style="font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:700;color:#3b82f6;margin-bottom:6px;">Product Image</p>
              <span style="font-size:12px;color:#94a3b8;display:block;">Replace this area with your gateway photo</span>
              <span style="font-size:11px;color:#cbd5e1;display:block;margin-top:4px;">Recommended: 600×400px, transparent or white background</span>
            </div>
          </div>
          <div class="hw-card-body">
          <div class="hw-desc">AXONO's most versatile gateway. Connects RTU/TCP Modbus, I/O and LoRa nodes to 4G, LAN and Wi-Fi simultaneously with Primary/Secondary failover. Inbuilt RTOS data logger ensures not a single packet is lost during connectivity outages. Full remote configuration — no physical device access required.</div>
          <div class="hw-specs-mini">
            <div class="hw-spec-item"><div class="hw-spec-key">Connectivity</div><div class="hw-spec-val">4G LTE + LAN + Wi-Fi + BLE (Primary/Secondary failover)</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">LoRa Support</div><div class="hw-spec-val">LoRa node aggregation over 4G / LAN / Wi-Fi</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Serial Interfaces</div><div class="hw-spec-val">1× RS485 (Modbus RTU) + 1× RS232 (utility/config)</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">TCP Modbus</div><div class="hw-spec-val">Poll multiple TCP/IP Modbus slaves over LAN</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Cloud Protocols</div><div class="hw-spec-val">TCP · HTTP · MQTT with SSL/TLS</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Data Formats</div><div class="hw-spec-val">ASCII / HEX / RawHEX · CSV / JSON — configurable</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Polling Modes</div><div class="hw-spec-val">Scheduled · Time-based · IO-based · Query-based</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Offline Logger</div><div class="hw-spec-val">Inbuilt RTOS smart logger — auto-sync on reconnect</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Modbus Write</div><div class="hw-spec-val">Supported — remote write to slave registers</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Remote Config</div><div class="hw-spec-val">PC Utility · FTP · SMS · Server IP Commands (OTA)</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">SSL Certificates</div><div class="hw-spec-val">Upload device &amp; server certificates for secure comms</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Power Supply</div><div class="hw-spec-val">12–24V DC · DIN Rail mount</div></div>
          </div>
        </div>
      </div>
      <!-- AXG-PRO 4G -->
      <div class="hw-card">
        <div class="hw-card-header">
          <div class="hw-badge">PRO SERIES</div>
          <div class="hw-model">AXG-PRO 4G</div>
          <div class="hw-type">Modbus RTU/TCP to 4G PRO — Edge Trigger</div>
        </div>
        <div style="background:linear-gradient(135deg,#f0f7ff 0%,#e8f4ff 100%);border-bottom:2px dashed #93c5fd;min-height:260px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:40px 32px;position:relative;overflow:hidden;">
            <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(0,191,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,191,255,.04) 1px,transparent 1px);background-size:24px 24px;"></div>
            <div style="position:relative;z-index:1;width:80px;height:80px;background:rgba(0,191,255,.1);border:2px dashed #93c5fd;border-radius:16px;display:flex;align-items:center;justify-content:center;">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            </div>
            <div style="position:relative;z-index:1;text-align:center;">
              <p style="font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:700;color:#3b82f6;margin-bottom:6px;">Product Image</p>
              <span style="font-size:12px;color:#94a3b8;display:block;">Replace this area with your gateway photo</span>
              <span style="font-size:11px;color:#cbd5e1;display:block;margin-top:4px;">Recommended: 600×400px, transparent or white background</span>
            </div>
          </div>
          <div class="hw-card-body">
          <div class="hw-desc">Feature-rich 4G gateway with edge trigger capability and automatic fallback across GPRS/2G/3G/4G/LTE bands. Handles up to 64 poll requests per device, supports Modbus write operations, and delivers secure two-way communication. Inbuilt smart data logger prevents data loss during outages.</div>
          <div class="hw-specs-mini">
            <div class="hw-spec-item"><div class="hw-spec-key">Connectivity</div><div class="hw-spec-val">4G LTE / 3G / 2G / GPRS fallback</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Serial Interface</div><div class="hw-spec-val">1× RS485 (Modbus RTU) + 1× utility/config port</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Max Poll Requests</div><div class="hw-spec-val">Up to 64 different Modbus poll requests</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Modbus Write</div><div class="hw-spec-val">Supported — remote write to Modbus registers</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Edge Trigger</div><div class="hw-spec-val">IO-based event trigger with local intelligence</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Cloud Protocols</div><div class="hw-spec-val">TCP · HTTP · MQTT with SSL mode</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Data Formats</div><div class="hw-spec-val">ASCII / HEX / RawHEX · CSV / JSON</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Offline Logger</div><div class="hw-spec-val">Inbuilt RTOS logger — auto-sync on reconnect</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Data Conversion</div><div class="hw-spec-val">Byte swapping · Scaling factor · Data type selection</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Remote Config</div><div class="hw-spec-val">PC Utility · SMS · HFS · TCP Remote · Server IP</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">OTA Updates</div><div class="hw-spec-val">Firmware + configuration update over-the-air</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Power Supply</div><div class="hw-spec-val">12–24V DC · DIN Rail mount</div></div>
          </div>
        </div>
      </div>
    </div>

    <div class="hw-cards" style="margin-top:24px;">
      <!-- AXG-ETH PRO -->
      <div class="hw-card">
        <div class="hw-card-header">
          <div class="hw-badge">ETHERNET</div>
          <div class="hw-model">AXG-ETH PRO</div>
          <div class="hw-type">Modbus RTU + TCP to Ethernet LAN Gateway</div>
        </div>
        <div style="background:linear-gradient(135deg,#f0f7ff 0%,#e8f4ff 100%);border-bottom:2px dashed #93c5fd;min-height:260px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:40px 32px;position:relative;overflow:hidden;">
            <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(0,191,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,191,255,.04) 1px,transparent 1px);background-size:24px 24px;"></div>
            <div style="position:relative;z-index:1;width:80px;height:80px;background:rgba(0,191,255,.1);border:2px dashed #93c5fd;border-radius:16px;display:flex;align-items:center;justify-content:center;">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            </div>
            <div style="position:relative;z-index:1;text-align:center;">
              <p style="font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:700;color:#3b82f6;margin-bottom:6px;">Product Image</p>
              <span style="font-size:12px;color:#94a3b8;display:block;">Replace this area with your gateway photo</span>
              <span style="font-size:11px;color:#cbd5e1;display:block;margin-top:4px;">Recommended: 600×400px, transparent or white background</span>
            </div>
          </div>
          <div class="hw-card-body">
          <div class="hw-desc">Designed for factory floors with wired LAN infrastructure. Simultaneously reads both Modbus RTU (RS485) and Modbus TCP slaves, using a single Ethernet port for both device polling and cloud connectivity. Ideal for plant-wide energy monitoring, PLC data collection, and process control integration.</div>
          <div class="hw-specs-mini">
            <div class="hw-spec-item"><div class="hw-spec-key">Connectivity</div><div class="hw-spec-val">Ethernet LAN (10/100 Mbps)</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Serial Interface</div><div class="hw-spec-val">1× RS485 (Modbus RTU) + 1× utility/config port</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">TCP Modbus</div><div class="hw-spec-val">Poll multiple Modbus TCP slaves over Ethernet</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Cloud Protocols</div><div class="hw-spec-val">TCP · HTTP · MQTT · HTTPS (GET/POST)</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">I/O Channels</div><div class="hw-spec-val">2× Digital/Analog (0–24V) + 1× 4–20mA channel</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Offline Logger</div><div class="hw-spec-val">Inbuilt logger — auto-sync when server reconnects</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Alerts</div><div class="hw-spec-val">Power failure · Low battery · Digital IN state change</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Remote Config</div><div class="hw-spec-val">Web Portal · PC Utility · Server IP Commands</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">OTA Updates</div><div class="hw-spec-val">Firmware + configuration update over-the-air</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">LED Indicators</div><div class="hw-spec-val">Connectivity · Signal · Modbus Tx/Rx status</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">SSL Security</div><div class="hw-spec-val">Upload device &amp; server certificates</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Power Supply</div><div class="hw-spec-val">12–24V DC · DIN Rail / Wall mount</div></div>
          </div>
        </div>
      </div>
      <!-- AXG-WiFi -->
      <div class="hw-card">
        <div class="hw-card-header">
          <div class="hw-badge">WI-FI</div>
          <div class="hw-model">AXG-WiFi</div>
          <div class="hw-type">Modbus RTU to Wi-Fi Gateway — Smart Data Logger</div>
        </div>
        <div style="background:linear-gradient(135deg,#f0f7ff 0%,#e8f4ff 100%);border-bottom:2px dashed #93c5fd;min-height:260px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:40px 32px;position:relative;overflow:hidden;">
            <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(0,191,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,191,255,.04) 1px,transparent 1px);background-size:24px 24px;"></div>
            <div style="position:relative;z-index:1;width:80px;height:80px;background:rgba(0,191,255,.1);border:2px dashed #93c5fd;border-radius:16px;display:flex;align-items:center;justify-content:center;">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            </div>
            <div style="position:relative;z-index:1;text-align:center;">
              <p style="font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:700;color:#3b82f6;margin-bottom:6px;">Product Image</p>
              <span style="font-size:12px;color:#94a3b8;display:block;">Replace this area with your gateway photo</span>
              <span style="font-size:11px;color:#cbd5e1;display:block;margin-top:4px;">Recommended: 600×400px, transparent or white background</span>
            </div>
          </div>
          <div class="hw-card-body">
          <div class="hw-desc">Collects Modbus RTU data from energy meters, solar inverters, PLCs, flow meters, and industrial sensors — transmitting securely to cloud via Wi-Fi. Dual-path redundancy and an inbuilt smart data logger ensure zero data loss during Wi-Fi outages. Full remote configuration via web portal.</div>
          <div class="hw-specs-mini">
            <div class="hw-spec-item"><div class="hw-spec-key">Connectivity</div><div class="hw-spec-val">Wi-Fi 2.4GHz with built-in smart redundancy paths</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Serial Interface</div><div class="hw-spec-val">1× RS485 (Modbus RTU) + 1× utility/config port</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Cloud Protocols</div><div class="hw-spec-val">TCP · HTTP · MQTT · HTTPS (GET/POST)</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Data Formats</div><div class="hw-spec-val">ASCII / HEX / RawHEX · CSV / JSON — configurable</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">I/O Channels</div><div class="hw-spec-val">2× Digital/Analog (0–24V) + 1× 4–20mA channel</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Slave Support</div><div class="hw-spec-val">Multiple Slave IDs — selectable register addresses</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Data Conversion</div><div class="hw-spec-val">Byte swapping · Scaling factor · Data type selection</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Offline Logger</div><div class="hw-spec-val">Inbuilt RTOS smart logger — auto-sync on reconnect</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Remote Config</div><div class="hw-spec-val">Web Portal · PC Utility · Server IP Commands</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">OTA Updates</div><div class="hw-spec-val">Firmware + device configuration update OTA</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Typical Use</div><div class="hw-spec-val">Buildings · Agriculture · Solar · Retail · Factories</div></div>
            <div class="hw-spec-item"><div class="hw-spec-key">Power Supply</div><div class="hw-spec-val">12–24V DC · DIN Rail / Wall mount</div></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Full specs comparison -->    <!-- Full specs comparison -->
    <span class="sec-tag" style="color:var(--cyan-dark);">Detailed Comparison</span>
    <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:28px;font-weight:800;color:var(--navy);margin-bottom:24px;">Full Gateway Comparison Table</h3>
    <div style="overflow-x:auto;margin-bottom:48px;">
      <table class="specs-table" style="width:100%;">
        <tr>
          <th style="width:22%;">Specification</th>
          <th>AXG-MAX</th>
          <th>AXG-PRO 4G</th>
          <th>AXG-ETH PRO</th>
          <th>AXG-WiFi</th>
        </tr>
        <tr><td>Primary Connectivity</td><td class="spec-val-cyan">4G LTE + LAN + Wi-Fi</td><td class="spec-val-cyan">4G LTE</td><td>Ethernet LAN</td><td>Wi-Fi 2.4GHz</td></tr>
        <tr><td>Network Fallback</td><td class="spec-val-cyan">4G ↔ LAN ↔ Wi-Fi failover</td><td class="spec-val-cyan">4G → 3G → 2G → GPRS</td><td>—</td><td>Dual-path redundancy</td></tr>
        <tr><td>LoRa Node Support</td><td class="spec-val-cyan">Yes — aggregate LoRa nodes</td><td>—</td><td>—</td><td>—</td></tr>
        <tr><td>BLE</td><td class="spec-val-cyan">Yes</td><td>—</td><td>—</td><td>—</td></tr>
        <tr><td>RS485 (Modbus RTU)</td><td class="spec-val-cyan">1× port</td><td class="spec-val-cyan">1× port</td><td class="spec-val-cyan">1× port</td><td class="spec-val-cyan">1× port</td></tr>
        <tr><td>Modbus TCP Support</td><td class="spec-val-cyan">Yes — poll TCP slaves over LAN</td><td>—</td><td class="spec-val-cyan">Yes — poll TCP slaves over ETH</td><td>—</td></tr>
        <tr><td>Max Poll Requests</td><td class="spec-val-cyan">Multiple — fully configurable</td><td class="spec-val-cyan">Up to 64 requests</td><td>Multiple — configurable</td><td>Multiple — configurable</td></tr>
        <tr><td>Modbus Write</td><td class="spec-val-cyan">Supported</td><td class="spec-val-cyan">Supported</td><td class="spec-val-cyan">Supported</td><td class="spec-val-cyan">Supported</td></tr>
        <tr><td>Edge Trigger</td><td class="spec-val-cyan">Yes — IO / event-based</td><td class="spec-val-cyan">Yes — IO-based</td><td>—</td><td>—</td></tr>
        <tr><td>Cloud Protocols</td><td class="spec-val-cyan">TCP · HTTP · MQTT + SSL</td><td class="spec-val-cyan">TCP · HTTP · MQTT + SSL</td><td class="spec-val-cyan">TCP · HTTP · MQTT · HTTPS</td><td class="spec-val-cyan">TCP · HTTP · MQTT · HTTPS</td></tr>
        <tr><td>SSL / TLS Security</td><td class="spec-val-cyan">Device + Server certificates</td><td class="spec-val-cyan">SSL mode supported</td><td class="spec-val-cyan">Device + Server certificates</td><td class="spec-val-cyan">SSL mode supported</td></tr>
        <tr><td>Data Formats</td><td>ASCII / HEX / RawHEX · CSV / JSON</td><td>ASCII / HEX / RawHEX · CSV / JSON</td><td>CSV / JSON</td><td>ASCII / HEX / RawHEX · CSV / JSON</td></tr>
        <tr><td>Byte Swapping / Scaling</td><td class="spec-val-cyan">Yes — per register</td><td class="spec-val-cyan">Yes — per register</td><td class="spec-val-cyan">Yes</td><td class="spec-val-cyan">Yes</td></tr>
        <tr><td>I/O Channels</td><td class="spec-val-cyan">Digital + Analog + 4–20mA</td><td>Digital + Analog + 4–20mA</td><td>2× D/A (0–24V) + 1× 4–20mA</td><td>2× D/A (0–24V) + 1× 4–20mA</td></tr>
        <tr><td>Offline Data Logger</td><td class="spec-val-cyan">Inbuilt RTOS — no data loss</td><td class="spec-val-cyan">Inbuilt RTOS — no data loss</td><td class="spec-val-cyan">Inbuilt logger</td><td class="spec-val-cyan">Inbuilt RTOS logger</td></tr>
        <tr><td>Auto-sync on Reconnect</td><td class="spec-val-cyan">Yes</td><td class="spec-val-cyan">Yes</td><td class="spec-val-cyan">Yes</td><td class="spec-val-cyan">Yes</td></tr>
        <tr><td>Configuration Methods</td><td class="spec-val-cyan">PC Utility · FTP · SMS · Server IP</td><td class="spec-val-cyan">PC Utility · SMS · HFS · TCP · Server IP</td><td>Web Portal · PC Utility · Server IP</td><td>Web Portal · PC Utility · Server IP</td></tr>
        <tr><td>Remote Config (No Site Visit)</td><td class="spec-val-cyan">Yes</td><td class="spec-val-cyan">Yes</td><td class="spec-val-cyan">Yes</td><td class="spec-val-cyan">Yes</td></tr>
        <tr><td>OTA Firmware Update</td><td class="spec-val-cyan">Yes</td><td class="spec-val-cyan">Yes</td><td class="spec-val-cyan">Yes</td><td class="spec-val-cyan">Yes</td></tr>
        <tr><td>LED Status Indicators</td><td>GSM · Signal · Modbus Tx/Rx</td><td>GSM · GPRS · Signal · Modbus Tx/Rx</td><td>Connectivity · Signal · Modbus Tx/Rx</td><td>Wi-Fi · Signal · Modbus Tx/Rx</td></tr>
        <tr><td>Power Supply</td><td>12–24V DC</td><td>12–24V DC</td><td>12–24V DC</td><td>12–24V DC</td></tr>
        <tr><td>Mounting</td><td>DIN Rail</td><td>DIN Rail</td><td>DIN Rail / Wall</td><td>DIN Rail / Wall</td></tr>
        <tr><td>Best For</td><td class="spec-val-cyan">Multi-path remote + LAN hybrid sites</td><td>Remote monitoring · Mobile assets</td><td>Factory floor · Wired LAN infrastructure</td><td>Buildings · Agriculture · Solar · Retail</td></tr>
      </table>
    </div>
    <!-- Custom Hardware -->    <!-- Custom Hardware -->
    <div class="highlight-box">
      <h4>Custom Hardware Design</h4>
      <p>AXONO designs and manufactures custom IoT hardware tailored to specific application requirements. Whether you need a specialized sensor interface, a custom form factor, specific certifications, or integration with proprietary protocols — our engineering team delivers hardware that fits perfectly into your system.</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:48px;">
      <div style="background:var(--off-white);border:1px solid var(--border);border-radius:12px;padding:24px;">
        <div style="font-size:28px;margin-bottom:12px;">🎨</div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:700;color:var(--navy);margin-bottom:8px;">Custom Form Factor</div>
        <div style="font-size:13px;color:var(--muted);line-height:1.65;">PCB design and enclosure for any form factor — panel-mount, DIN, handheld, embedded OEM module.</div>
      </div>
      <div style="background:var(--off-white);border:1px solid var(--border);border-radius:12px;padding:24px;">
        <div style="font-size:28px;margin-bottom:12px;">🔌</div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:700;color:var(--navy);margin-bottom:8px;">Custom Interfaces</div>
        <div style="font-size:13px;color:var(--muted);line-height:1.65;">Design with any combination of protocols: RS485, CAN, 4-20mA, Pt100, pulse counting, high-voltage isolation.</div>
      </div>
      <div style="background:var(--off-white);border:1px solid var(--border);border-radius:12px;padding:24px;">
        <div style="font-size:28px;margin-bottom:12px;">📋</div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:700;color:var(--navy);margin-bottom:8px;">Certification Support</div>
        <div style="font-size:13px;color:var(--muted);line-height:1.65;">Assistance with CE, FCC, ATEX, IECEx, UL certifications for hazardous area or regulated applications.</div>
      </div>
    </div>

    <!-- Hardware workflow -->
    <div style="background:var(--off-white);border:1px solid var(--border);border-radius:16px;padding:40px;">
      <h4 style="font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800;color:var(--navy);margin-bottom:24px;text-align:center;">Gateway Communication Architecture</h4>
      <div class="wf-row">
        <div class="wf-box"><span class="wf-icon">🌡️</span><div class="wf-label">Sensors</div><div class="wf-sub">Temp, Pressure,<br/>Flow, Level</div></div>
        <div class="wf-arrow"><svg viewBox="0 0 32 20" fill="none"><line x1="0" y1="10" x2="26" y2="10" stroke="#00BFFF" stroke-width="2"/><polyline points="18,4 26,10 18,16" stroke="#00BFFF" stroke-width="2" fill="none"/></svg></div>
        <div class="wf-box highlight"><span class="wf-icon">📡</span><div class="wf-label">AXG Gateway</div><div class="wf-sub">Protocol<br/>Translation</div></div>
        <div class="wf-arrow"><svg viewBox="0 0 32 20" fill="none"><line x1="0" y1="10" x2="26" y2="10" stroke="#00BFFF" stroke-width="2"/><polyline points="18,4 26,10 18,16" stroke="#00BFFF" stroke-width="2" fill="none"/></svg></div>
        <div class="wf-box"><span class="wf-icon">🔧</span><div class="wf-label">PLC / SCADA</div><div class="wf-sub">Modbus/OPC-UA<br/>Ethernet</div></div>
        <div class="wf-arrow"><svg viewBox="0 0 32 20" fill="none"><line x1="0" y1="10" x2="26" y2="10" stroke="#00BFFF" stroke-width="2"/><polyline points="18,4 26,10 18,16" stroke="#00BFFF" stroke-width="2" fill="none"/></svg></div>
        <div class="wf-box"><span class="wf-icon">☁️</span><div class="wf-label">AXONO Cloud</div><div class="wf-sub">MQTT/HTTPS<br/>4G / Ethernet</div></div>
      </div>
    </div>
  </div>`

  return (
    <div
      id="section-hardware"
      className="page-section active"
      dangerouslySetInnerHTML={{ __html: inner }}
      onClick={(e) => {
        const t = e.target.closest('[data-route]')
        if (t) { e.preventDefault(); navigate(t.dataset.route) }
      }}
    />
  )
}

import { useNavigate } from 'react-router-dom'

export default function AboutPage() {
  const navigate = useNavigate()

  const inner = `
  <div class="section-hero section-pt">
    <div class="section-hero-inner">
      <span class="sec-tag">About AXONO</span>
      <h2 class="sec-title">Building the Future<br/>of Industrial IoT</h2>
      <p class="sec-subtitle">AXONO IoT Solutions is an early-stage industrial technology startup on a mission to make industrial IoT truly accessible, reliable, and intelligent — from the edge to the cloud.</p>
    </div>
  </div>

  <div class="content-wrap">

    <!-- Who We Are — startup honest story -->
    <div class="about-grid">
      <div class="about-text">
        <h3>Who We Are</h3>
        <p>AXONO IoT Solutions is a <strong>new industrial IoT startup</strong> founded with one clear mission: build the tools that give every industrial operation — from a single factory floor to a multi-site utility network — the intelligence they deserve.</p>
        <p>We are a team of engineers, automation specialists, embedded systems developers and cloud architects who have seen first-hand how fragmented, expensive and unreliable existing IoT solutions are. We are building something better — <strong>an end-to-end platform that just works</strong>, whether you are online or offline, in a data centre or in the field.</p>
        <p>We are at the beginning of our journey, but we are building on proven open-source foundations, modern cloud-native architecture and industrial-grade hardware partnerships. Our platform is ready, our hardware is tested, and we are actively seeking early customers who want a truly integrated industrial IoT solution.</p>
      </div>
      <div class="about-visual">
        <div class="astat"><div class="astat-val" style="font-size:28px;line-height:1.2;">Day 1</div><div class="astat-label">Fresh start, clean slate</div></div>
        <div class="astat"><div class="astat-val">4+</div><div class="astat-label">Gateway Models Ready</div></div>
        <div class="astat"><div class="astat-val">100%</div><div class="astat-label">Platform Built In-house</div></div>
        <div class="astat"><div class="astat-val" style="font-size:22px;line-height:1.3;">Built</div><div class="astat-label">To scale from day one</div></div>
      </div>
    </div>

    <!-- Values -->
    <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:32px;font-weight:800;color:var(--navy);margin-bottom:28px;margin-top:16px;">Our Values</h3>
    <div class="values-grid">
      <div class="value-card">
        <div class="value-icon">⚙️</div>
        <div class="value-title">Engineering Excellence</div>
        <div class="value-desc">We obsess over reliability. Every component is tested to perform in the harshest industrial environments — wide temperature, high vibration, 24/7 continuous duty.</div>
      </div>
      <div class="value-card">
        <div class="value-icon">🤝</div>
        <div class="value-title">Customer Partnership</div>
        <div class="value-desc">As a startup we work closely with every customer. We co-design solutions, learn from real deployments and iterate fast to solve your actual problems.</div>
      </div>
      <div class="value-card">
        <div class="value-icon">🔒</div>
        <div class="value-title">Security First</div>
        <div class="value-desc">Industrial cybersecurity is non-negotiable. TLS 1.3, X.509 certificate auth, RBAC, audit logs and secure OTA — built-in, not bolted on.</div>
      </div>
    </div>

    <!-- Technology Stack — modern & detailed -->
    <div style="margin-top:56px;margin-bottom:12px;">
      <span class="sec-tag" style="color:var(--cyan-dark);">Technology Stack</span>
      <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:32px;font-weight:800;color:var(--navy);margin-bottom:12px;">Built on the Best Modern Technologies</h3>
      <p style="font-size:15px;color:var(--muted);line-height:1.8;max-width:680px;margin-bottom:36px;">Every layer of the AXONO platform is built using proven, battle-tested open-source and cloud-native technologies — giving you reliability, scalability and long-term maintainability without proprietary lock-in.</p>
    </div>

    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:48px;">

      <div class="feature-card">
        <div class="fc-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg></div>
        <div class="fc-title">Cloud Platform</div>
        <div class="fc-desc">Built on an open-source industrial IoT platform (Apache 2.0 licensed). Microservices architecture deployed on Docker/Kubernetes for horizontal scalability. PostgreSQL + Cassandra for time-series data. Redis for caching. Kafka for high-throughput message queuing.</div>
        <div class="fc-tags">
          <span class="tag">Java / Spring Boot</span>
          <span class="tag">Kafka</span>
          <span class="tag">PostgreSQL</span>
          <span class="tag">Cassandra</span>
          <span class="tag">Redis</span>
          <span class="tag">Docker / K8s</span>
        </div>
      </div>

      <div class="feature-card">
        <div class="fc-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
        <div class="fc-title">Edge Runtime</div>
        <div class="fc-desc">The AXONO Edge node runs on Linux — from Raspberry Pi to industrial mini-PCs. Containerised with Docker for easy deployment and OTA updates. gRPC for bidirectional cloud sync. Embedded local time-series DB for offline buffering.</div>
        <div class="fc-tags">
          <span class="tag">Linux / RTOS</span>
          <span class="tag">Docker</span>
          <span class="tag">gRPC</span>
          <span class="tag">InfluxDB</span>
          <span class="tag">JDK 17</span>
        </div>
      </div>

      <div class="feature-card">
        <div class="fc-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/></svg></div>
        <div class="fc-title">Gateway Firmware</div>
        <div class="fc-desc">AXONO gateways run a lightweight RTOS firmware with hardened Modbus RTU/TCP stack, built-in smart data logger, OTA update support and hardware watchdog. Connects RS485, Ethernet, 4G, Wi-Fi and LoRa through a unified protocol abstraction layer.</div>
        <div class="fc-tags">
          <span class="tag">RTOS</span>
          <span class="tag">Modbus RTU/TCP</span>
          <span class="tag">OTA</span>
          <span class="tag">MQTT / TLS</span>
          <span class="tag">4G / LoRa</span>
        </div>
      </div>

      <div class="feature-card">
        <div class="fc-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <div class="fc-title">Security Architecture</div>
        <div class="fc-desc">Zero-trust security model. All device-to-cloud communication encrypted with TLS 1.3. X.509 certificate-based device identity. OAuth 2.0, LDAP and SAML/SSO for users. Full RBAC with audit logging. Regular vulnerability scanning.</div>
        <div class="fc-tags">
          <span class="tag">TLS 1.3</span>
          <span class="tag">X.509</span>
          <span class="tag">OAuth 2.0</span>
          <span class="tag">SAML / SSO</span>
          <span class="tag">RBAC</span>
          <span class="tag">Audit Logs</span>
        </div>
      </div>

      <div class="feature-card">
        <div class="fc-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
        <div class="fc-title">Data &amp; Analytics</div>
        <div class="fc-desc">Time-series storage optimised for high-frequency industrial telemetry. Real-time stream processing via rule engine. REST API and WebSocket subscriptions for third-party integrations. Full data export in JSON, CSV, Excel and PDF.</div>
        <div class="fc-tags">
          <span class="tag">InfluxDB / TimescaleDB</span>
          <span class="tag">WebSocket</span>
          <span class="tag">REST API</span>
          <span class="tag">Grafana-compatible</span>
        </div>
      </div>

      <div class="feature-card">
        <div class="fc-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg></div>
        <div class="fc-title">Frontend &amp; UI</div>
        <div class="fc-desc">Web application built with React and modern JavaScript. Fully responsive — works on desktop, tablet and mobile. Real-time WebSocket-powered dashboard updates. SVG-based SCADA HMI builder with animated process mimics.</div>
        <div class="fc-tags">
          <span class="tag">React</span>
          <span class="tag">WebSocket</span>
          <span class="tag">SVG / HMI</span>
          <span class="tag">Progressive Web App</span>
        </div>
      </div>

    </div>

    <!-- Tech badge strip -->
    <div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:56px;padding:24px;background:var(--off-white);border-radius:12px;border:1px solid var(--border);">
      <span style="font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:1px;width:100%;margin-bottom:4px;">Core Technologies</span>
      <span class="tag">Java 17</span><span class="tag">Spring Boot</span><span class="tag">React 18</span><span class="tag">Docker</span>
      <span class="tag">Kubernetes</span><span class="tag">Apache Kafka</span><span class="tag">PostgreSQL</span><span class="tag">Cassandra</span>
      <span class="tag">InfluxDB</span><span class="tag">Redis</span><span class="tag">gRPC</span><span class="tag">MQTT 5.0</span>
      <span class="tag">TLS 1.3</span><span class="tag">X.509 PKI</span><span class="tag">OAuth 2.0</span><span class="tag">Linux / RTOS</span>
      <span class="tag">Modbus RTU/TCP</span><span class="tag">OPC-UA</span><span class="tag">4G LTE</span><span class="tag">LoRa</span>
    </div>

    <!-- AI Roadmap -->
    <div style="margin-bottom:12px;">
      <span class="sec-tag" style="color:var(--cyan-dark);">AI &amp; Future Roadmap</span>
      <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:32px;font-weight:800;color:var(--navy);margin-bottom:12px;">AI-Powered Industrial Intelligence — Coming Soon</h3>
      <p style="font-size:15px;color:var(--muted);line-height:1.8;max-width:680px;margin-bottom:36px;">The AXONO platform is architected from day one to integrate AI and machine learning — not as an afterthought, but as a core capability layer that sits directly on top of your real-time industrial data.</p>
    </div>

    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin-bottom:48px;">

      <div style="background:linear-gradient(135deg,var(--cyan-light) 0%,#EFF6FF 100%);border:1.5px solid rgba(0,191,255,.3);border-radius:14px;padding:32px;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <div style="font-size:32px;">🤖</div>
          <div>
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:22px;font-weight:800;color:var(--navy);">Predictive Maintenance</div>
            <span style="font-size:10px;font-weight:700;letter-spacing:2px;color:var(--cyan-dark);background:rgba(0,191,255,.15);padding:2px 10px;border-radius:100px;text-transform:uppercase;">Roadmap Q3 2025</span>
          </div>
        </div>
        <p style="font-size:14px;color:var(--muted);line-height:1.8;">AI models trained on your equipment's historical telemetry will predict failures before they happen — analysing vibration patterns, temperature trends, current signatures and cycle counts to alert your team days before a breakdown occurs.</p>
        <ul style="list-style:none;margin-top:14px;display:flex;flex-direction:column;gap:7px;">
          <li style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--text);"><span style="width:6px;height:6px;background:var(--cyan);border-radius:50%;flex-shrink:0;"></span>Anomaly detection on sensor streams</li>
          <li style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--text);"><span style="width:6px;height:6px;background:var(--cyan);border-radius:50%;flex-shrink:0;"></span>Remaining Useful Life (RUL) estimation</li>
          <li style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--text);"><span style="width:6px;height:6px;background:var(--cyan);border-radius:50%;flex-shrink:0;"></span>Automatic work-order generation</li>
        </ul>
      </div>

      <div style="background:linear-gradient(135deg,var(--cyan-light) 0%,#EFF6FF 100%);border:1.5px solid rgba(0,191,255,.3);border-radius:14px;padding:32px;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <div style="font-size:32px;">📈</div>
          <div>
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:22px;font-weight:800;color:var(--navy);">AI-Powered Forecasting</div>
            <span style="font-size:10px;font-weight:700;letter-spacing:2px;color:var(--cyan-dark);background:rgba(0,191,255,.15);padding:2px 10px;border-radius:100px;text-transform:uppercase;">Roadmap Q4 2025</span>
          </div>
        </div>
        <p style="font-size:14px;color:var(--muted);line-height:1.8;">Time-series forecasting models will predict energy demand, production output, water consumption and process variables — enabling proactive operations rather than reactive firefighting.</p>
        <ul style="list-style:none;margin-top:14px;display:flex;flex-direction:column;gap:7px;">
          <li style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--text);"><span style="width:6px;height:6px;background:var(--cyan);border-radius:50%;flex-shrink:0;"></span>Energy demand forecasting</li>
          <li style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--text);"><span style="width:6px;height:6px;background:var(--cyan);border-radius:50%;flex-shrink:0;"></span>Production yield prediction</li>
          <li style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--text);"><span style="width:6px;height:6px;background:var(--cyan);border-radius:50%;flex-shrink:0;"></span>Process optimisation suggestions</li>
        </ul>
      </div>

      <div style="background:linear-gradient(135deg,var(--cyan-light) 0%,#EFF6FF 100%);border:1.5px solid rgba(0,191,255,.3);border-radius:14px;padding:32px;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <div style="font-size:32px;">🔍</div>
          <div>
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:22px;font-weight:800;color:var(--navy);">AI Audit Assistant</div>
            <span style="font-size:10px;font-weight:700;letter-spacing:2px;color:var(--cyan-dark);background:rgba(0,191,255,.15);padding:2px 10px;border-radius:100px;text-transform:uppercase;">Roadmap Q1 2026</span>
          </div>
        </div>
        <p style="font-size:14px;color:var(--muted);line-height:1.8;">An AI assistant that analyses your historical data and alarm logs to produce compliance audit reports, root-cause analysis documents and operational review summaries — automatically, on schedule.</p>
        <ul style="list-style:none;margin-top:14px;display:flex;flex-direction:column;gap:7px;">
          <li style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--text);"><span style="width:6px;height:6px;background:var(--cyan);border-radius:50%;flex-shrink:0;"></span>Auto-generated audit trail reports</li>
          <li style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--text);"><span style="width:6px;height:6px;background:var(--cyan);border-radius:50%;flex-shrink:0;"></span>Root-cause analysis from alarm history</li>
          <li style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--text);"><span style="width:6px;height:6px;background:var(--cyan);border-radius:50%;flex-shrink:0;"></span>Compliance documentation generation</li>
        </ul>
      </div>

      <div style="background:linear-gradient(135deg,var(--cyan-light) 0%,#EFF6FF 100%);border:1.5px solid rgba(0,191,255,.3);border-radius:14px;padding:32px;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <div style="font-size:32px;">💬</div>
          <div>
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:22px;font-weight:800;color:var(--navy);">Natural Language Queries</div>
            <span style="font-size:10px;font-weight:700;letter-spacing:2px;color:var(--cyan-dark);background:rgba(0,191,255,.15);padding:2px 10px;border-radius:100px;text-transform:uppercase;">Roadmap Q2 2026</span>
          </div>
        </div>
        <p style="font-size:14px;color:var(--muted);line-height:1.8;">Ask your plant data questions in plain English. "What caused the temperature spike on Line 3 last Tuesday?" or "Show me energy consumption compared to last month" — the AI queries your data and responds with charts and insights.</p>
        <ul style="list-style:none;margin-top:14px;display:flex;flex-direction:column;gap:7px;">
          <li style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--text);"><span style="width:6px;height:6px;background:var(--cyan);border-radius:50%;flex-shrink:0;"></span>Plain-English data queries</li>
          <li style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--text);"><span style="width:6px;height:6px;background:var(--cyan);border-radius:50%;flex-shrink:0;"></span>AI-generated chart &amp; insight summaries</li>
          <li style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--text);"><span style="width:6px;height:6px;background:var(--cyan);border-radius:50%;flex-shrink:0;"></span>Voice-enabled control room assistant</li>
        </ul>
      </div>

    </div>

  </div>`

  return (
    <div
      id="section-about"
      className="page-section active"
      dangerouslySetInnerHTML={{ __html: inner }}
      onClick={(e) => {
        const t = e.target.closest('[data-route]')
        if (t) { e.preventDefault(); navigate(t.dataset.route) }
      }}
    />
  )
}

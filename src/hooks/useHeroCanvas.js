import { useEffect } from 'react'

/**
 * useHeroCanvas — production-safe IoT network canvas animation.
 *
 * Root cause of production failure:
 *   The canvas sits inside dangerouslySetInnerHTML. In production builds
 *   the DOM is painted but getBoundingClientRect() still returns 0 because
 *   CSS layout hasn't run yet. We must wait for the element to have a real
 *   width before starting — use ResizeObserver for this.
 *
 * Strategy:
 *   1. Poll with rAF until #heroCanvas is in the DOM (handles dangerouslySetInnerHTML delay)
 *   2. Once found, attach a ResizeObserver — start animation only when width > 0
 *   3. On resize, restart with correct dimensions (handles responsive resizing too)
 */
export function useHeroCanvas() {
  useEffect(() => {
    let rafId = null
    let animRafId = null
    let resizeObs = null
    let started = false

    // ── Animation core ──────────────────────────────────────────────────────
    function startAnimation(canvas, W) {
      // Cancel any previous animation loop
      if (animRafId) cancelAnimationFrame(animRafId)

      canvas.width  = W
      canvas.height = 340
      const H   = 340
      const ctx = canvas.getContext('2d')

      const nodes = []
      const edges = []
      const N = 22

      for (let i = 0; i < N; i++) {
        nodes.push({
          x:     40 + Math.random() * (W - 80),
          y:     20 + Math.random() * (H - 40),
          vx:    (Math.random() - 0.5) * 0.4,
          vy:    (Math.random() - 0.5) * 0.4,
          r:     i < 3 ? 10 : 5 + Math.random() * 4,
          pulse: Math.random() * Math.PI * 2,
          type:  i < 3 ? 'hub' : (Math.random() > 0.6 ? 'sensor' : 'device'),
        })
      }

      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < 120) edges.push({ a: i, b: j, dist: d })
        }
      }

      const packets = []
      for (let i = 0; i < 6; i++) {
        const edge = edges[Math.floor(Math.random() * edges.length)]
        if (edge) packets.push({ edge, t: Math.random() })
      }

      function draw() {
        ctx.clearRect(0, 0, W, H)
        ctx.fillStyle = '#0D1B2E'
        ctx.fillRect(0, 0, W, H)

        // Grid
        ctx.strokeStyle = 'rgba(0,191,255,0.06)'
        ctx.lineWidth = 0.5
        for (let x = 0; x < W; x += 40) {
          ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke()
        }
        for (let y = 0; y < H; y += 40) {
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
        }

        // Edges
        edges.forEach(e => {
          const a = nodes[e.a], b = nodes[e.b]
          ctx.strokeStyle = `rgba(0,191,255,${Math.max(0, 1 - e.dist / 130) * 0.25})`
          ctx.lineWidth = 0.8
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
        })

        // Packets
        packets.forEach(p => {
          p.t += 0.008
          if (p.t >= 1) { p.t = 0; p.edge = edges[Math.floor(Math.random() * edges.length)] }
          if (!p.edge) return
          const a = nodes[p.edge.a], b = nodes[p.edge.b]
          const px = a.x + (b.x - a.x) * p.t
          const py = a.y + (b.y - a.y) * p.t
          const t2 = Math.max(0, p.t - 0.06)
          ctx.beginPath()
          ctx.moveTo(a.x + (b.x - a.x) * t2, a.y + (b.y - a.y) * t2)
          ctx.lineTo(px, py)
          ctx.strokeStyle = 'rgba(0,191,255,0.5)'; ctx.lineWidth = 1.5; ctx.stroke()
          ctx.beginPath(); ctx.arc(px, py, 3, 0, Math.PI * 2)
          ctx.fillStyle = '#00BFFF'; ctx.fill()
        })

        // Nodes
        nodes.forEach(n => {
          n.x += n.vx; n.y += n.vy
          if (n.x < n.r || n.x > W - n.r) n.vx *= -1
          if (n.y < n.r || n.y > H - n.r) n.vy *= -1
          n.pulse += 0.04

          if (n.type === 'hub') {
            const pr = n.r + 6 + Math.sin(n.pulse) * 4
            ctx.beginPath(); ctx.arc(n.x, n.y, pr, 0, Math.PI * 2)
            ctx.strokeStyle = `rgba(0,191,255,${0.15 + Math.sin(n.pulse) * 0.1})`
            ctx.lineWidth = 1; ctx.stroke()
            ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
            ctx.fillStyle = '#00BFFF'; ctx.fill()
          } else if (n.type === 'sensor') {
            ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
            ctx.fillStyle = 'rgba(0,191,255,0.6)'; ctx.fill()
          } else {
            ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
            ctx.fillStyle = 'rgba(74,74,74,0.9)'
            ctx.strokeStyle = 'rgba(0,191,255,0.4)'; ctx.lineWidth = 1
            ctx.fill(); ctx.stroke()
          }
        })

        animRafId = requestAnimationFrame(draw)
      }

      draw()
      started = true
    }

    // ── Attach ResizeObserver once canvas is in DOM ──────────────────────────
    function attachToCanvas(canvas) {
      // Cancel DOM polling
      if (rafId) cancelAnimationFrame(rafId)

      // ResizeObserver fires with real layout dimensions —
      // even in production where getBoundingClientRect is 0 on first render
      resizeObs = new ResizeObserver(entries => {
        const entry = entries[0]
        if (!entry) return
        // contentRect.width is the CSS layout width — always correct
        const W = Math.floor(entry.contentRect.width)
        if (W > 0) {
          startAnimation(canvas, W)
        }
      })

      resizeObs.observe(canvas)

      // Also try immediately in case ResizeObserver already has dimensions
      const rect = canvas.getBoundingClientRect()
      if (rect.width > 0) {
        startAnimation(canvas, Math.floor(rect.width))
      }
    }

    // ── Poll until #heroCanvas appears in the DOM ────────────────────────────
    // dangerouslySetInnerHTML is synchronous but React flushes it after the
    // component function returns, so the element may not exist on first rAF tick.
    let pollCount = 0
    const MAX_POLLS = 600 // 10 seconds at 60fps — more than enough

    function poll() {
      const canvas = document.getElementById('heroCanvas')
      if (canvas) {
        attachToCanvas(canvas)
        return
      }
      if (++pollCount < MAX_POLLS) {
        rafId = requestAnimationFrame(poll)
      }
    }

    rafId = requestAnimationFrame(poll)

    // ── Cleanup ──────────────────────────────────────────────────────────────
    return () => {
      if (rafId)      cancelAnimationFrame(rafId)
      if (animRafId)  cancelAnimationFrame(animRafId)
      if (resizeObs)  resizeObs.disconnect()
    }
  }, [])
}
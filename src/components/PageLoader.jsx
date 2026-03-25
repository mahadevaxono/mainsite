/**
 * AXONO IoT Solutions — Page Loader
 * Shown by <Suspense> while a lazy page chunk is loading.
 */
export default function PageLoader() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', background: 'var(--navy)',
      flexDirection: 'column', gap: 20,
    }}>
      <svg width="48" height="48" viewBox="0 0 48 48"
        style={{ animation: 'spin 0.9s linear infinite' }}>
        <style>{'@keyframes spin { to { transform: rotate(360deg) } }'}</style>
        <circle cx="24" cy="24" r="20" fill="none"
          stroke="rgba(0,191,255,0.15)" strokeWidth="4"/>
        <path d="M24 4 a20 20 0 0 1 20 20" fill="none"
          stroke="#00BFFF" strokeWidth="4" strokeLinecap="round"/>
      </svg>
      <span style={{ fontFamily:"'Barlow',sans-serif", fontSize:13,
        fontWeight:600, color:'rgba(255,255,255,0.35)',
        letterSpacing:2, textTransform:'uppercase' }}>Loading…</span>
    </div>
  )
}

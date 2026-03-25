import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const INITIAL = {
  firstName: '', lastName: '', email: '', phone: '',
  company: '', product: '', message: ''
}
const BLANK_ERRORS = {
  firstName: '', lastName: '', email: '', phone: '',
  company: '', product: '', message: ''
}

function validate(f) {
  const e = { ...BLANK_ERRORS }
  if (!f.firstName.trim()) e.firstName = 'First name is required'
  if (!f.lastName.trim()) e.lastName = 'Last name is required'
  if (!f.email.trim()) e.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid email address'
  if (!f.phone.trim()) e.phone = 'Phone number is required'
  else if (!/^[+]?[\d\s\-().]{7,20}$/.test(f.phone)) e.phone = 'Enter a valid phone number'
  if (!f.company.trim()) e.company = 'Company name is required'
  if (!f.product) e.product = 'Please select a product'
  if (!f.message.trim()) e.message = 'Project description is required'
  else if (f.message.trim().length < 20) e.message = 'Please provide at least 20 characters'
  return e
}

const hasErrors = e => Object.values(e).some(v => v !== '')

export default function ContactPage() {
  const navigate = useNavigate()
  const [fields, setFields] = useState(INITIAL)
  const [errors, setErrors] = useState(BLANK_ERRORS)
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [serverError, setServerError] = useState('')

  const set = (k, v) => {
    const next = { ...fields, [k]: v }
    setFields(next)
    if (touched[k]) {
      const e = validate(next)
      setErrors(prev => ({ ...prev, [k]: e[k] }))
    }
  }

  const blur = (k) => {
    setTouched(prev => ({ ...prev, [k]: true }))
    const e = validate(fields)
    setErrors(prev => ({ ...prev, [k]: e[k] }))
  }

  const submit = async (ev) => {
    ev.preventDefault()
    const allTouched = Object.keys(INITIAL).reduce((a, k) => ({ ...a, [k]: true }), {})
    setTouched(allTouched)
    const e = validate(fields)
    setErrors(e)
    if (hasErrors(e)) return
    setStatus('submitting')
    setServerError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: fields.firstName.trim(), lastName: fields.lastName.trim(),
          email: fields.email.trim(), phone: fields.phone.trim(),
          company: fields.company.trim(), product: fields.product,
          message: fields.message.trim(),
        })
      })
      if (!res.ok) {
        const d = await res.json().catch(() => ({}))
        throw new Error(d.error || 'Server error, please try again')
      }
      setStatus('success')
      setFields(INITIAL); setTouched({}); setErrors(BLANK_ERRORS)
    } catch (err) {
      setStatus('error')
      setServerError(err.message)
    }
  }

  const inputSt = (k) => ({
    background: 'var(--off-white)',
    border: `1.5px solid ${touched[k] && errors[k] ? '#ef4444' : 'var(--border)'}`,
    borderRadius: 8, padding: '12px 16px',
    fontFamily: "'Barlow',sans-serif", fontSize: 14, color: 'var(--text)',
    outline: 'none', width: '100%', boxSizing: 'border-box', transition: 'border-color .2s',
  })
  const errSt = { fontSize: 12, color: '#ef4444', marginTop: 4, display: 'block' }
  const req = <span style={{ color: '#ef4444' }}>*</span>

  if (status === 'success') return (
    <div className="page-section active">
      <div className="section-hero section-pt"><div className="section-hero-inner">
        <span className="sec-tag">Contact Us</span>
        <h2 className="sec-title">Let's Build Something<br/>Together.</h2>
      </div></div>
      <div className="content-wrap" style={{ textAlign: 'center' }}>
        <div style={{ width: 80, height: 80, background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: 36 }}>✓</div>
        <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 32, fontWeight: 800, color: 'var(--navy)', marginBottom: 12 }}>Message Sent!</h3>
        <p style={{ fontSize: 16, color: 'var(--muted)', marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>Thanks for reaching out. Our team will get back to you within 24 hours.</p>
        <button className="btn-primary" style={{ cursor: 'pointer', border: 'none' }} onClick={() => setStatus('idle')}>Send Another Message</button>
      </div>
    </div>
  )

  return (
    <div className="page-section active" onClick={(e) => {
      const t = e.target.closest('[data-route]')
      if (t) { e.preventDefault(); navigate(t.dataset.route) }
    }}>
      <div className="section-hero section-pt"><div className="section-hero-inner">
        <span className="sec-tag">Contact Us</span>
        <h2 className="sec-title">Let's Build Something<br/>Together.</h2>
        <p className="sec-subtitle">Talk to our team about your IoT project. We'll help you find the right solution, whether it's our standard platform or a custom-engineered system.</p>
      </div></div>

      <div className="content-wrap">
        <div className="contact-grid">

          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Our team of IoT engineers is ready to help you plan, design, and deploy your industrial IoT solution. From a quick consultation to a full project engagement — we're here.</p>
            <div className="contact-items">
              <div className="ci-item">
                <div className="ci-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
                <div className="ci-text"><div className="ci-label">Email</div><div className="ci-val"><a href="mailto:info@axonoiot.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@axonoiot.com</a></div></div>
              </div>
              <div className="ci-item">
                <div className="ci-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17.92z"/></svg></div>
                <div className="ci-text"><div className="ci-label">Phone / WhatsApp</div><div className="ci-val"><a href="tel:+919566722424" style={{ color: 'inherit', textDecoration: 'none' }}>+91 95667 22424</a></div></div>
              </div>
              <div className="ci-item">
                <div className="ci-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                <div className="ci-text"><div className="ci-label">Location</div><div className="ci-val">India (serving globally)</div></div>
              </div>
              <div className="ci-item">
                <div className="ci-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                <div className="ci-text"><div className="ci-label">Response Time</div><div className="ci-val">Within 24 hours</div></div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 26, fontWeight: 800, color: 'var(--navy)', marginBottom: 28 }}>Send Us a Message</h3>
            <form onSubmit={submit} noValidate>

              <div className="form-row">
                <div className="form-group">
                  <label>First Name {req}</label>
                  <input type="text" placeholder="John" value={fields.firstName}
                    onChange={e => set('firstName', e.target.value)} onBlur={() => blur('firstName')} style={inputSt('firstName')}/>
                  {touched.firstName && errors.firstName && <span style={errSt}>{errors.firstName}</span>}
                </div>
                <div className="form-group">
                  <label>Last Name {req}</label>
                  <input type="text" placeholder="Smith" value={fields.lastName}
                    onChange={e => set('lastName', e.target.value)} onBlur={() => blur('lastName')} style={inputSt('lastName')}/>
                  {touched.lastName && errors.lastName && <span style={errSt}>{errors.lastName}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email Address {req}</label>
                  <input type="email" placeholder="john@company.com" value={fields.email}
                    onChange={e => set('email', e.target.value)} onBlur={() => blur('email')} style={inputSt('email')}/>
                  {touched.email && errors.email && <span style={errSt}>{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label>Phone Number {req}</label>
                  <input type="tel" placeholder="+91 98765 43210" value={fields.phone}
                    onChange={e => set('phone', e.target.value)} onBlur={() => blur('phone')} style={inputSt('phone')}/>
                  {touched.phone && errors.phone && <span style={errSt}>{errors.phone}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Company {req}</label>
                <input type="text" placeholder="Your Company Name" value={fields.company}
                  onChange={e => set('company', e.target.value)} onBlur={() => blur('company')} style={inputSt('company')}/>
                {touched.company && errors.company && <span style={errSt}>{errors.company}</span>}
              </div>

              <div className="form-group">
                <label>Product Interest {req}</label>
                <select value={fields.product} onChange={e => set('product', e.target.value)} onBlur={() => blur('product')} style={inputSt('product')}>
                  <option value="">Select a product...</option>
                  <option>IoT Software Platform</option>
                  <option>Edge Computing Solution</option>
                  <option>SCADA System</option>
                  <option>IoT Gateway / Hardware</option>
                  <option>Custom Hardware Development</option>
                  <option>Full System Integration</option>
                </select>
                {touched.product && errors.product && <span style={errSt}>{errors.product}</span>}
              </div>

              <div className="form-group">
                <label>Project Description {req}</label>
                <textarea placeholder="Briefly describe your project, number of devices, current pain points, and what you're looking to achieve..."
                  value={fields.message} onChange={e => set('message', e.target.value)} onBlur={() => blur('message')}
                  style={{ ...inputSt('message'), minHeight: 120, resize: 'vertical' }}/>
                {touched.message && errors.message && <span style={errSt}>{errors.message}</span>}
              </div>

              {status === 'error' && (
                <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: '12px 16px', marginBottom: 16, fontSize: 14, color: '#dc2626' }}>
                  ⚠ {serverError}
                </div>
              )}

              <button type="submit" disabled={status === 'submitting'} className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', fontSize: 15, padding: 16, cursor: status === 'submitting' ? 'not-allowed' : 'pointer', opacity: status === 'submitting' ? 0.7 : 1, border: 'none' }}>
                {status === 'submitting' ? 'Sending...' : 'Send Message →'}
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

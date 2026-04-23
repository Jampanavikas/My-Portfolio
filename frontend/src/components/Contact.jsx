import { useRef } from 'react'
import { motion } from 'framer-motion'
import { personal } from '../data/portfolio-data'

export default function Contact() {
  const formRef = useRef(null)

  const addRipple = (e) => {
    const btn = e.currentTarget
    const ripple = document.createElement('span')
    const rect = btn.getBoundingClientRect()
    ripple.className = 'ripple-effect'
    ripple.style.left = `${e.clientX - rect.left}px`
    ripple.style.top = `${e.clientY - rect.top}px`
    btn.appendChild(ripple)
    setTimeout(() => ripple.remove(), 700)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(formRef.current)
    const subject = encodeURIComponent(data.get('subject') || 'Portfolio Contact')
    const body = encodeURIComponent(`Name: ${data.get('name')}\n\n${data.get('message')}`)
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
  }

  const inputStyle = {
    background: '#f8fafc',
    border: '1.5px solid #e2e8f0',
    borderRadius: '10px',
    outline: 'none',
    color: '#0f172a',
    width: '100%',
    padding: '10px 14px',
    fontSize: '14px',
    transition: 'border-color 0.2s',
  }

  const focusStyle = (e) => (e.target.style.borderColor = '#2563eb')
  const blurStyle  = (e) => (e.target.style.borderColor = '#e2e8f0')

  return (
    <section id="contact" className="py-24 px-6" style={{ background: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <p className="section-subtitle">open to opportunities & collaborations</p>
          <p className="text-slate-500 max-w-lg mx-auto text-sm">
            Whether it's a full-time role, freelance project, or AI collaboration —
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.65 }} className="space-y-4">
            <h3 className="text-lg font-bold text-slate-800 mb-5">Contact Information</h3>
            {[
              { icon: '📧', label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
              { icon: '📱', label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
              { icon: '📍', label: 'Location', value: personal.location, href: null },
              { icon: '💼', label: 'LinkedIn', value: 'jampana-vikas-varma', href: personal.linkedin },
            ].map((item) => (
              <div key={item.label} className="card-hover p-4 flex items-center gap-4 rounded-xl">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-xs font-mono text-slate-400">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-slate-700">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="card p-5 mt-4">
              <p className="text-xs font-mono text-slate-400 mb-2">availability</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-green-600 font-semibold">Open to new opportunities</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">Full-time, contract, and freelance roles</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.65, delay: 0.1 }}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: 'name',    label: 'Your Name',    type: 'text',  placeholder: 'John Doe', delay: 0 },
                { name: 'email',   label: 'Email Address', type: 'email', placeholder: 'john@example.com', delay: 0.05 },
                { name: 'subject', label: 'Subject',       type: 'text',  placeholder: 'Job Opportunity / Collaboration', delay: 0.1 },
              ].map((f) => (
                <motion.div key={f.name}
                  initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.45, delay: f.delay }}>
                  <label className="block text-xs font-mono text-slate-500 mb-1.5">{f.label}</label>
                  <input type={f.type} name={f.name} placeholder={f.placeholder} required
                    style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                </motion.div>
              ))}

              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.45, delay: 0.15 }}>
                <label className="block text-xs font-mono text-slate-500 mb-1.5">Message</label>
                <textarea name="message" placeholder="Tell me about the project or opportunity..."
                  rows={5} required style={{ ...inputStyle, resize: 'none' }}
                  onFocus={focusStyle} onBlur={blurStyle} />
              </motion.div>

              <motion.button type="submit"
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.45, delay: 0.2 }}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                onClick={addRipple}
                className="w-full btn-primary py-3.5 text-base justify-center ripple-container">
                Send Message ✉️
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 text-center" style={{ borderTop: '1px solid #f1f5f9' }}>
          <p className="text-slate-400 text-sm font-mono">
            Designed & Built by <span className="text-blue-600 font-semibold">Jampana Vikas Varma</span> · {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

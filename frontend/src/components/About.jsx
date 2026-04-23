import { motion } from 'framer-motion'
import { personal } from '../data/portfolio-data'

export default function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="section-title">About <span>Me</span></h2>
          <p className="section-subtitle">who I am & what I do</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Visual */}
          <motion.div initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.65 }} className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-3xl float overflow-hidden card"
                style={{ boxShadow: '0 20px 50px rgba(37,99,235,0.15)' }}>
                <img src="/vikas.jpeg" alt="Vikas Varma"
                  className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-50 blur-2xl pointer-events-none"
                style={{ background: '#bfdbfe' }} />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-40 blur-2xl pointer-events-none"
                style={{ background: '#ddd6fe' }} />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 card px-4 py-2 text-xs font-mono whitespace-nowrap"
                style={{ color: '#059669', border: '1px solid #d1fae5' }}>
                ● Available for opportunities
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.65, delay: 0.1 }} className="space-y-5">
            <p className="text-slate-600 leading-relaxed">
              I'm <span className="font-semibold text-blue-600">Jampana Vikas Varma</span> — a Full Stack & Agentic AI Developer
              at Dynamatix Analytics, Hyderabad. I design and build production-grade Flask APIs,
              LangGraph multi-agent systems, and OCR-powered document intelligence pipelines.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Currently deepening AI/ML expertise through a{' '}
              <span className="font-semibold text-purple-600">PG Program in AI</span> from McCombs School
              of Business (UT Austin) + Great Lakes — covering GenAI, RAG, and agentic systems.
            </p>

            {/* Key strengths */}
            <div className="grid grid-cols-1 gap-2.5 pt-1">
              {[
                { icon: '🤖', title: 'AI + Backend', desc: 'LangGraph, LangChain, LLM workflows' },
                { icon: '🔒', title: 'Secure Systems', desc: 'JWT, RBAC, API security, MongoDB' },
                { icon: '📄', title: 'Document AI', desc: 'OCR + AI pipelines, PaddleOCR' },
                { icon: '🚀', title: 'Production Ready', desc: 'Docker, Gunicorn, 80%+ test coverage' },
              ].map((s) => (
                <div key={s.title} className="flex items-center gap-3 p-3 rounded-xl transition-colors hover:bg-slate-50"
                  style={{ border: '1px solid #f1f5f9' }}>
                  <span className="text-xl">{s.icon}</span>
                  <div>
                    <span className="font-semibold text-sm text-slate-700">{s.title}</span>
                    <span className="text-slate-400 text-sm"> · {s.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap pt-2">
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                Connect on LinkedIn
              </a>
              <a href={`mailto:${personal.email}`} className="btn-outline text-sm">
                {personal.email}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

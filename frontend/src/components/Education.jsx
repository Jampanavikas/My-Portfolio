import { motion } from 'framer-motion'
import { education } from '../data/portfolio-data'

export default function Education() {
  return (
    <section id="education" className="py-24 px-6" style={{ background: '#f8fafc' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">academic background</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {education.map((edu, i) => (
            <motion.div key={edu.id}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.55, delay: i * 0.1 }}
              className="edu-card h-60">
              <div className="edu-card-inner relative w-full h-full">
                {/* Front */}
                <div className="edu-card-front absolute inset-0 card rounded-2xl p-5 flex flex-col justify-between cursor-default"
                  style={{ borderColor: `${edu.color}25` }}>
                  {edu.badge && (
                    <span className="self-start text-xs px-2.5 py-0.5 rounded-full font-mono font-semibold"
                      style={{ background: `${edu.color}12`, color: edu.color, border: `1px solid ${edu.color}25` }}>
                      {edu.badge}
                    </span>
                  )}
                  <div className={`flex-1 flex flex-col justify-center ${!edu.badge ? 'mt-3' : ''}`}>
                    <div className="text-3xl mb-3">{edu.icon}</div>
                    <h3 className="font-bold text-sm text-slate-800 leading-snug mb-1">{edu.degree}</h3>
                    <p className="text-sm font-semibold" style={{ color: edu.color }}>{edu.institution}</p>
                  </div>
                  <div className="flex justify-between items-end pt-2 border-t" style={{ borderColor: '#f1f5f9' }}>
                    <span className="text-xs text-slate-400 font-mono">{edu.period}</span>
                    <span className="text-xs text-slate-400">{edu.status}</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 text-center">hover →</p>
                </div>

                {/* Back */}
                <div className="edu-card-back absolute inset-0 rounded-2xl p-5 flex flex-col justify-center gap-3 cursor-default"
                  style={{ background: `linear-gradient(135deg, ${edu.color}08, #fff)`, border: `1px solid ${edu.color}25` }}>
                  <div className="text-2xl">{edu.icon}</div>
                  <div>
                    <p className="text-xs font-mono text-slate-400 mb-0.5">Institution</p>
                    <p className="text-sm font-semibold text-slate-800">{edu.institution}</p>
                  </div>
                  {edu.affiliation && (
                    <div>
                      <p className="text-xs font-mono text-slate-400 mb-0.5">Affiliation</p>
                      <p className="text-xs text-slate-600">{edu.affiliation}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-xs font-mono text-slate-400 mb-0.5">Grade / Duration</p>
                    <p className="text-sm font-bold" style={{ color: edu.color }}>{edu.grade}</p>
                  </div>
                  <p className="text-xs text-slate-500">{edu.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

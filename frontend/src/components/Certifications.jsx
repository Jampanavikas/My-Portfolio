import { motion } from 'framer-motion'
import { certifications } from '../data/portfolio-data'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6" style={{ background: '#f8fafc' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">achievements & recognition</p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          {certifications.map((cert, i) => (
            <motion.div key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.15 }}
              whileHover={{ scale: 1.04, rotate: i % 2 === 0 ? 1 : -1 }}
              className="card p-8 flex flex-col items-center gap-4 text-center flex-1 max-w-xs mx-auto transition-all duration-250">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                style={{ background: `${cert.color}10`, border: `1px solid ${cert.color}25` }}>
                {cert.icon}
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-800 leading-snug mb-2">{cert.title}</h3>
                <p className="text-sm font-semibold" style={{ color: cert.color }}>{cert.issuer}</p>
                <p className="text-xs text-slate-400 font-mono mt-1">{cert.year}</p>
              </div>
              <div className="w-full h-1 rounded-full" style={{ background: `linear-gradient(to right, ${cert.color}50, transparent)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

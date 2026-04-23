import { motion } from 'framer-motion'
import { skills } from '../data/portfolio-data'

// Convert internal level number to interview-friendly label + bar count
function proficiency(level) {
  if (level >= 85) return { label: 'Expert',      bars: 4, color: '#059669' }
  if (level >= 75) return { label: 'Advanced',    bars: 3, color: '#2563eb' }
  if (level >= 65) return { label: 'Proficient',  bars: 2, color: '#7c3aed' }
  return               { label: 'Familiar',     bars: 1, color: '#0891b2' }
}

function SkillCard({ name, level, groupColor }) {
  const { label, bars, color } = proficiency(level)

  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
      className="card p-4 flex flex-col gap-3 cursor-default"
      transition={{ duration: 0.2 }}
    >
      <span className="font-semibold text-sm text-slate-800 leading-tight">{name}</span>

      {/* 4-segment bar */}
      <div className="flex gap-1">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="flex-1 h-1.5 rounded-full transition-all duration-300"
            style={{ background: i <= bars ? color : '#e2e8f0' }}
          />
        ))}
      </div>

      <span
        className="text-xs font-mono font-semibold tracking-wide"
        style={{ color }}
      >
        {label}
      </span>
    </motion.div>
  )
}

const extraTech = [
  'JWT', 'RBAC', 'OpenAPI', 'Prometheus', 'Gunicorn',
  'pytest', 'Black', 'Ruff', 'mypy', 'Azure Blob',
  'Postman', 'Git', 'PyMuPDF', 'Flask Blueprints', 'Pandas', 'NumPy',
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6" style={{ background: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="section-title">Technical <span>Skills</span></h2>
          <p className="section-subtitle">tech stack & proficiencies</p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: false }} transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          {[
            { label: 'Expert',     bars: 4, color: '#059669' },
            { label: 'Advanced',   bars: 3, color: '#2563eb' },
            { label: 'Proficient', bars: 2, color: '#7c3aed' },
            { label: 'Familiar',   bars: 1, color: '#0891b2' },
          ].map(({ label, bars, color }) => (
            <div key={label} className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-3 h-1.5 rounded-full" style={{ background: i <= bars ? color : '#e2e8f0' }} />
                ))}
              </div>
              <span className="text-xs font-mono text-slate-500">{label}</span>
            </div>
          ))}
        </motion.div>

        <div className="space-y-12">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.55, delay: gi * 0.08 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-lg">{group.icon}</span>
                <h3 className="font-bold text-sm text-slate-600 uppercase tracking-widest">{group.category}</h3>
                <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, ${group.color}30, transparent)` }} />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {group.items.map((skill) => (
                  <SkillCard key={skill.name} name={skill.name} level={skill.level} groupColor={group.color} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 card p-6"
        >
          <p className="text-xs font-mono text-slate-400 mb-4 text-center uppercase tracking-widest">also experienced with</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {extraTech.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

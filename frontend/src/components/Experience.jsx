import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experience } from '../data/portfolio-data'

function CategoryBlock({ cat, open, onToggle, color }) {
  return (
    <div className="rounded-xl overflow-hidden" style={{ border: '1px solid #f1f5f9' }}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors hover:bg-slate-50"
        style={{ background: open ? `${color}08` : '#fafafa' }}
      >
        <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
          <span>{cat.icon}</span> {cat.title}
        </span>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="#94a3b8" strokeWidth="2.5"
        >
          <path d="M6 9l6 6 6-6"/>
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <ul className="px-4 pb-4 pt-1 space-y-2">
              {cat.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ExperienceCard({ item, index }) {
  const [openCats, setOpenCats] = useState(
    item.categories.reduce((acc, _, i) => ({ ...acc, [i]: i === 0 }), {})
  )

  const toggle = (i) => setOpenCats((prev) => ({ ...prev, [i]: !prev[i] }))

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card p-6 md:p-8"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: `${item.color}12`, border: `1px solid ${item.color}20` }}>
            {item.icon}
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-900">{item.role}</h3>
            <p className="font-semibold text-sm" style={{ color: item.color }}>
              {item.company}
              {item.companyNote && (
                <span className="text-slate-400 font-normal"> · {item.companyNote}</span>
              )}
            </p>
            <div className="flex gap-2 mt-1.5 flex-wrap">
              <span className="badge">{item.type}</span>
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                🗓 {item.duration}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable categories */}
      <div className="space-y-2">
        {item.categories.map((cat, ci) => (
          <CategoryBlock
            key={ci}
            cat={cat}
            color={item.color}
            open={!!openCats[ci]}
            onToggle={() => toggle(ci)}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6" style={{ background: '#f8fafc' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="section-title">Work <span>Experience</span></h2>
          <p className="section-subtitle">where I've built real-world systems</p>
        </motion.div>

        <div className="space-y-6">
          {experience.map((item, i) => (
            <ExperienceCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

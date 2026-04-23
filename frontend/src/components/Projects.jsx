import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/portfolio-data'

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    import('vanilla-tilt').then((mod) => {
      if (cardRef.current) {
        mod.default.init(cardRef.current, { max: 8, speed: 500, glare: true, 'max-glare': 0.08, perspective: 900 })
      }
    })
    return () => { if (cardRef.current?.vanillaTilt) cardRef.current.vanillaTilt.destroy() }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      ref={cardRef}
      className="card p-6 flex flex-col gap-4 h-full cursor-default transition-all duration-250"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{ background: `${project.typeColor}10`, border: `1px solid ${project.typeColor}20` }}>
          {project.icon}
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full font-mono font-medium"
          style={{ background: `${project.typeColor}10`, color: project.typeColor, border: `1px solid ${project.typeColor}20` }}>
          {project.type}
        </span>
      </div>

      <div>
        <h3 className="font-bold text-base text-slate-900 leading-tight">{project.title}</h3>
        <p className="text-sm font-mono mt-0.5" style={{ color: project.typeColor }}>{project.subtitle}</p>
      </div>

      <p className="text-sm text-slate-500 leading-relaxed flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 pt-3 border-t" style={{ borderColor: '#f1f5f9' }}>
        {project.tech.map((t) => (
          <span key={t} className="tag text-xs">{t}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6" style={{ background: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="section-title">Projects & <span>Work</span></h2>
          <p className="section-subtitle">things I've designed & built</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

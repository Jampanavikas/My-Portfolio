import { motion } from 'framer-motion'
import { personal } from '../data/portfolio-data'
import { useTypewriter } from '../hooks/useTypewriter'
import DotsCanvas from './DotsCanvas'

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const { displayed, done } = useTypewriter(personal.name, { delay: 400, speed: 72 })
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(145deg,#dbeafe 0%,#eff6ff 35%,#f5f3ff 65%,#fafafa 100%)',
      }}
    >
      {/* Dot grid — gentle mouse-repulsion like Antigravity background */}
      <DotsCanvas />

      {/* Ambient blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-40 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle,#bfdbfe,transparent)', transform: 'translate(-30%,-30%)' }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle,#ddd6fe,transparent)', transform: 'translate(25%,25%)' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left — text */}
          <div className="flex-1 text-center lg:text-left">

            <motion.p {...up(0.1)} className="font-mono text-blue-500 text-xs md:text-sm mb-4 tracking-widest uppercase">
              Hello, World! · Full Stack &amp; AI Engineer
            </motion.p>

            <motion.h1 {...up(0.22)}
              className="font-extrabold leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', color: '#0f172a', letterSpacing: '-0.03em', minHeight: '1.2em' }}>
              {displayed}
              <span className="inline-block w-0.5 h-[0.85em] ml-1 align-middle rounded-sm"
                style={{ background: '#2563eb', opacity: done ? 0 : 1,
                  animation: done ? 'none' : 'blinkCaret 0.75s step-end infinite', verticalAlign: 'middle' }} />
            </motion.h1>

            <motion.div {...up(0.38)} className="mb-8">
              <p className="text-base md:text-xl font-semibold mb-3"
                style={{ background: 'linear-gradient(135deg,#2563eb 0%,#7c3aed 60%,#0891b2 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {personal.title}
              </p>
              <p className="text-slate-500 text-sm md:text-base max-w-lg font-light leading-relaxed mx-auto lg:mx-0">
                Building scalable Flask APIs, LangGraph multi-agent systems, and production-ready AI applications at Dynamatix Analytics.
              </p>
            </motion.div>

            <motion.div {...up(0.52)}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center mb-10">
              <button onClick={() => scrollTo('#projects')} className="btn-primary text-sm w-full sm:w-auto justify-center">View Projects</button>
              <button onClick={() => scrollTo('#experience')} className="btn-outline text-sm w-full sm:w-auto justify-center">My Experience</button>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                className="btn-outline text-sm w-full sm:w-auto justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </motion.div>

            <motion.div {...up(0.64)} className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {[
                { value: '3+',   label: 'Years Exp',     color: '#2563eb' },
                { value: 'AI',   label: 'LangGraph/LLM', color: '#7c3aed' },
                { value: '80%+', label: 'Test Coverage', color: '#0891b2' },
                { value: 'PG',   label: 'AI in Progress',color: '#059669' },
              ].map((s) => (
                <div key={s.label} className="card px-4 py-2.5 text-center" style={{ minWidth: '82px' }}>
                  <div className="font-bold text-base" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5 whitespace-nowrap">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 relative"
          >
            <div className="absolute inset-0 rounded-full blur-3xl opacity-50 scale-110 pointer-events-none"
              style={{ background: 'radial-gradient(circle,#bfdbfe 0%,#ddd6fe 50%,transparent 70%)' }} />

            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Spinning ring */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full p-[3px]"
                style={{ background: 'conic-gradient(from 0deg,#2563eb,#7c3aed,#0891b2,#059669,#2563eb)' }}>
                <div className="w-full h-full rounded-full" style={{ background: '#eff6ff' }} />
              </motion.div>

              {/* Photo */}
              <div className="absolute inset-[4px] rounded-full overflow-hidden"
                style={{ boxShadow: '0 20px 60px rgba(37,99,235,0.18)' }}>
                <img src="/vikas.jpeg" alt="Jampana Vikas Varma"
                  className="w-full h-full object-cover object-top" />
              </div>

              {/* Status badge */}
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 card px-4 py-2 whitespace-nowrap text-xs font-mono"
                style={{ color: '#059669', borderColor: '#d1fae5', boxShadow: '0 4px 20px rgba(5,150,105,0.12)' }}>
                ● Open to opportunities
              </motion.div>

              {/* Orbiting badges */}
              {[
                { label: 'LangGraph', angle: -50, color: '#2563eb' },
                { label: 'Flask',     angle: 220, color: '#7c3aed' },
                { label: 'Docker',    angle: 145, color: '#0891b2' },
              ].map((b, i) => {
                const rad = (b.angle * Math.PI) / 180
                return (
                  <motion.div key={b.label}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3.5 + i * 0.8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute card px-2.5 py-1 text-xs font-mono font-semibold whitespace-nowrap"
                    style={{
                      left: `${50 + Math.cos(rad) * 60}%`,
                      top:  `${50 + Math.sin(rad) * 60}%`,
                      transform: 'translate(-50%,-50%)',
                      color: b.color, borderColor: `${b.color}25`,
                      background: `${b.color}08`, boxShadow: `0 2px 12px ${b.color}15`,
                    }}>
                    {b.label}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        onClick={() => scrollTo('#about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-10"
      >
        <span className="text-xs font-mono text-slate-400 tracking-widest">SCROLL</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

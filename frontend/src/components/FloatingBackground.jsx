import { useEffect, useRef } from 'react'
import gsap from 'gsap'

// Tech elements at different depth layers (depth: 0=far/slow, 1=close/fast)
const ELEMENTS = [
  // Code snippets — far layer
  { label: 'def ai_agent():',  x: 8,  y: 12, depth: 0.12, rot: -8,  size: 11, type: 'code',  color: '#7c3aed' },
  { label: 'await llm.run()',  x: 82, y: 18, depth: 0.10, rot: 6,   size: 11, type: 'code',  color: '#0891b2' },
  { label: 'POST /api/chat',   x: 72, y: 72, depth: 0.14, rot: -5,  size: 11, type: 'code',  color: '#2563eb' },
  { label: 'docker build .',   x: 15, y: 75, depth: 0.11, rot: 4,   size: 11, type: 'code',  color: '#059669' },
  { label: 'graph.compile()',  x: 50, y: 88, depth: 0.13, rot: -6,  size: 11, type: 'code',  color: '#7c3aed' },
  { label: 'pytest -v',        x: 90, y: 50, depth: 0.09, rot: 3,   size: 11, type: 'code',  color: '#d97706' },
  // Tech chips — mid layer
  { label: 'LangGraph',   x: 5,  y: 35, depth: 0.28, rot: -3,  size: 12, type: 'chip',  color: '#2563eb' },
  { label: 'Python',      x: 88, y: 38, depth: 0.22, rot: 5,   size: 12, type: 'chip',  color: '#059669' },
  { label: 'Flask',       x: 18, y: 55, depth: 0.25, rot: -6,  size: 12, type: 'chip',  color: '#7c3aed' },
  { label: 'MongoDB',     x: 78, y: 85, depth: 0.20, rot: 4,   size: 12, type: 'chip',  color: '#059669' },
  { label: 'LangChain',   x: 60, y: 10, depth: 0.30, rot: -4,  size: 12, type: 'chip',  color: '#0891b2' },
  { label: 'Docker',      x: 40, y: 82, depth: 0.26, rot: 6,   size: 12, type: 'chip',  color: '#2563eb' },
  { label: 'JWT',         x: 93, y: 65, depth: 0.18, rot: -5,  size: 12, type: 'chip',  color: '#d97706' },
  { label: 'React',       x: 3,  y: 62, depth: 0.24, rot: 3,   size: 12, type: 'chip',  color: '#0891b2' },
  // Big symbols — close layer
  { label: '{ }',  x: 25, y: 22, depth: 0.50, rot: 12,  size: 28, type: 'symbol', color: 'rgba(37,99,235,0.12)' },
  { label: '</>',  x: 68, y: 55, depth: 0.55, rot: -15, size: 26, type: 'symbol', color: 'rgba(124,58,237,0.10)' },
  { label: '⟨AI⟩', x: 10, y: 82, depth: 0.45, rot: 8,   size: 22, type: 'symbol', color: 'rgba(8,145,178,0.12)' },
  { label: '∞',    x: 85, y: 22, depth: 0.48, rot: -10, size: 30, type: 'symbol', color: 'rgba(5,150,105,0.10)' },
  { label: '◈',    x: 50, y: 30, depth: 0.42, rot: 20,  size: 20, type: 'symbol', color: 'rgba(217,119,6,0.10)'  },
]

// Drift animation parameters per element (randomised on mount, stable via index)
const DRIFTS = ELEMENTS.map((_, i) => ({
  dx: (((i * 37) % 80) - 40) * 0.25,
  dy: (((i * 53) % 80) - 40) * 0.25,
  dr: (((i * 19) % 20) - 10) * 0.4,
  dur: 6 + (i % 7) * 1.2,
}))

export default function FloatingBackground() {
  const containerRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)
  const elemRefs = useRef([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Start drift animations per element via GSAP
    elemRefs.current.forEach((el, i) => {
      if (!el) return
      const d = DRIFTS[i]
      gsap.to(el, {
        x: `+=${d.dx}`,
        y: `+=${d.dy}`,
        rotation: `+=${d.dr}`,
        duration: d.dur,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })
    })

    // Mouse parallax — smooth lerp toward target
    const target = { x: 0, y: 0 }
    const current = ELEMENTS.map(() => ({ x: 0, y: 0 }))

    const onMouse = (e) => {
      const rect = container.getBoundingClientRect()
      target.x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
      target.y = (e.clientY - rect.top  - rect.height / 2) / (rect.height / 2)
    }

    const PARALLAX_STRENGTH = 55

    const tick = () => {
      elemRefs.current.forEach((el, i) => {
        if (!el) return
        const depth = ELEMENTS[i].depth
        current[i].x += (target.x * depth * PARALLAX_STRENGTH - current[i].x) * 0.06
        current[i].y += (target.y * depth * PARALLAX_STRENGTH - current[i].y) * 0.06
        gsap.set(el, { xPercent: 0, yPercent: 0,
          x: `+=${current[i].x}`, y: `+=${current[i].y}` })
      })
      rafRef.current = requestAnimationFrame(tick)
    }

    container.addEventListener('mousemove', onMouse)
    // propagate from document so it works even when mouse is on hero content
    document.addEventListener('mousemove', onMouse)
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMouse)
      cancelAnimationFrame(rafRef.current)
      elemRefs.current.forEach((el) => { if (el) gsap.killTweensOf(el) })
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {ELEMENTS.map((el, i) => {
        const isSymbol = el.type === 'symbol'
        const isCode   = el.type === 'code'
        const isChip   = el.type === 'chip'

        return (
          <div
            key={i}
            ref={(r) => (elemRefs.current[i] = r)}
            className="absolute will-change-transform"
            style={{
              left: `${el.x}%`,
              top:  `${el.y}%`,
              transform: `rotate(${el.rot}deg)`,
              opacity: isSymbol ? 1 : isCode ? 0.55 : 0.75,
              transition: 'none',
              zIndex: Math.round(el.depth * 10),
            }}
          >
            {isSymbol && (
              <span style={{ fontSize: `${el.size}px`, color: el.color, fontWeight: 700,
                fontFamily: 'JetBrains Mono, monospace', lineHeight: 1 }}>
                {el.label}
              </span>
            )}
            {isCode && (
              <span style={{
                fontSize: `${el.size}px`,
                color: el.color,
                fontFamily: '"JetBrains Mono", monospace',
                background: `${el.color}08`,
                border: `1px solid ${el.color}20`,
                padding: '3px 8px',
                borderRadius: '6px',
                whiteSpace: 'nowrap',
              }}>
                {el.label}
              </span>
            )}
            {isChip && (
              <span style={{
                fontSize: `${el.size}px`,
                color: el.color,
                fontFamily: '"JetBrains Mono", monospace',
                fontWeight: 600,
                background: `${el.color}12`,
                border: `1.5px solid ${el.color}30`,
                padding: '4px 12px',
                borderRadius: '999px',
                whiteSpace: 'nowrap',
                boxShadow: `0 2px 12px ${el.color}15`,
              }}>
                {el.label}
              </span>
            )}
          </div>
        )
      })}
    </div>
  )
}

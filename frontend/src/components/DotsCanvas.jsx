import { useEffect, useRef } from 'react'

const GRID      = 32        // px between dots
const DOT_R     = 1.4       // dot radius px
const DOT_COLOR = 'rgba(99,102,241,0.28)'  // indigo, subtle
const PUSH_R    = 110       // mouse influence radius px
const PUSH_STR  = 22        // max push distance px
const LERP      = 0.07      // spring-back speed (lower = slower/smoother)

export default function DotsCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let raf
    let dots = []
    let mouse = { x: -999, y: -999 }

    // ── Build grid of dots ──────────────────────────────────────────
    function build() {
      const W = canvas.offsetWidth
      const H = canvas.offsetHeight
      canvas.width  = W
      canvas.height = H
      dots = []
      for (let x = GRID / 2; x < W; x += GRID) {
        for (let y = GRID / 2; y < H; y += GRID) {
          dots.push({ ox: x, oy: y, x, y, vx: 0, vy: 0 })
        }
      }
    }

    build()

    // ── Mouse tracking ──────────────────────────────────────────────
    const hero = canvas.parentElement
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => { mouse.x = -999; mouse.y = -999 }

    hero?.addEventListener('mousemove', onMove)
    hero?.addEventListener('mouseleave', onLeave)

    // ── Render loop ─────────────────────────────────────────────────
    function tick() {
      raf = requestAnimationFrame(tick)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = DOT_COLOR
      dots.forEach(d => {
        // Repulsion from mouse
        const dx = d.ox - mouse.x
        const dy = d.oy - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        let tx = d.ox
        let ty = d.oy
        if (dist < PUSH_R && dist > 0) {
          const force = (1 - dist / PUSH_R) * PUSH_STR
          tx = d.ox + (dx / dist) * force
          ty = d.oy + (dy / dist) * force
        }

        // Smooth lerp toward target
        d.x += (tx - d.x) * LERP
        d.y += (ty - d.y) * LERP

        ctx.beginPath()
        ctx.arc(d.x, d.y, DOT_R, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    tick()

    // ── Resize ──────────────────────────────────────────────────────
    const ro = new ResizeObserver(build)
    ro.observe(canvas.parentElement || document.body)

    return () => {
      cancelAnimationFrame(raf)
      hero?.removeEventListener('mousemove', onMove)
      hero?.removeEventListener('mouseleave', onLeave)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks, personal } from '../data/portfolio-data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid #e2e8f0' : 'none',
        boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#hero"
          onClick={(e) => handleNav(e, '#hero')}
          className="font-mono font-bold text-lg"
          style={{ color: '#2563eb' }}
        >
          {'<VV />'}
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="text-sm font-medium transition-colors duration-200 hover:text-blue-600"
                style={{ color: '#475569' }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${personal.email}`} className="btn-primary text-sm px-4 py-2">
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: '#374151' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12"/>
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18"/>
            )}
          </motion.svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t"
            style={{ background: 'rgba(255,255,255,0.97)', borderColor: '#e2e8f0' }}
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="block py-2 text-sm font-medium text-slate-600 hover:text-blue-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href={`mailto:${personal.email}`} className="btn-primary text-sm inline-flex">
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

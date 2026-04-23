import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const fadeInUp = (element, delay = 0, duration = 0.8) =>
  gsap.fromTo(element,
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0, duration, delay, ease: 'power3.out' }
  )

export const staggerReveal = (selector, trigger, stagger = 0.12) =>
  gsap.fromTo(selector,
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0, duration: 0.65, stagger, ease: 'power2.out',
      scrollTrigger: { trigger, start: 'top 80%', once: true },
    }
  )

export const drawTimeLine = (element) =>
  gsap.fromTo(element,
    { scaleY: 0 },
    {
      scaleY: 1, duration: 1.6, ease: 'power2.inOut',
      scrollTrigger: { trigger: element, start: 'top 75%', end: 'bottom 25%', scrub: 0.8 },
    }
  )

export const heroTimeline = (elements) => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  const { greeting, name, title, cta, scroll } = elements
  tl.fromTo(greeting, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.55 })
    .fromTo(name,     { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.75 }, '-=0.2')
    .fromTo(title,    { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.55 }, '-=0.3')
    .fromTo(cta,      { opacity: 0, y: 18, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.5 }, '-=0.2')
    .fromTo(scroll,   { opacity: 0 }, { opacity: 1, duration: 0.45 }, '-=0.1')
  return tl
}

// Framer Motion variants — reusable across section components
export const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

export const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

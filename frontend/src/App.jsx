import { useLenis } from './hooks/useLenis'
import CustomCursor from './components/CustomCursor'
import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Chatbot from './components/Chatbot'

export default function App() {
  useLenis()

  return (
    <>
      <CustomCursor />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Chatbot />
    </>
  )
}

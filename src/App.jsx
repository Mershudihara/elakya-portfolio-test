import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Work from './components/Work.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import useReveal from './hooks/useReveal.js'
import useActiveSection from './hooks/useActiveSection.js'
import useHashScroll from './hooks/useHashScroll.js'
import { navLinks } from './content.js'

const sectionIds = navLinks.map((link) => link.id)

export default function App() {
  useReveal()
  useHashScroll()
  const activeId = useActiveSection(sectionIds)

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav activeId={activeId} />
      <main id="main">
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

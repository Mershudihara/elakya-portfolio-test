import { useEffect, useState } from 'react'
import { navLinks, site } from '../content.js'
import './Nav.css'

export default function Nav({ activeId }) {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    let ticking = false

    const update = () => {
      const y = window.scrollY
      setScrolled(y > 12)
      setHidden(y > 200 && y > lastY + 2)
      lastY = y
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const className = ['nav', scrolled && 'is-scrolled', hidden && 'is-hidden']
    .filter(Boolean)
    .join(' ')

  return (
    <header className={className}>
      <div className="container nav__inner">
        <a href="#top" className="nav__wordmark">
          <span>{site.name.split(' ')[0]}</span> <em>{site.name.split(' ')[1]}</em>
          <span className="nav__dot" aria-hidden="true" />
        </a>
        <nav aria-label="Primary">
          <ul className="nav__links">
            {navLinks.map((link, i) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="nav__link"
                  aria-current={activeId === link.id ? 'location' : undefined}
                >
                  <span className="nav__index" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <span className="text-link">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

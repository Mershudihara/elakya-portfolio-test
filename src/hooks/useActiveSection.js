import { useEffect, useState } from 'react'

// Returns the id of the section currently crossing the middle of the viewport.
export default function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(null)
  const key = ids.join(',')

  useEffect(() => {
    const sections = key
      .split(',')
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))

    const clearAtTop = () => {
      if (window.scrollY < window.innerHeight * 0.4) setActiveId(null)
    }
    window.addEventListener('scroll', clearAtTop, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', clearAtTop)
    }
  }, [key])

  return activeId
}

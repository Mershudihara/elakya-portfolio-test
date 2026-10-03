import { useEffect } from 'react'

// The page renders after load, so the browser can't jump to a #hash from another page.
// Scroll to it once the sections exist.
export default function useHashScroll() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' })
    })
    return () => cancelAnimationFrame(frame)
  }, [])
}

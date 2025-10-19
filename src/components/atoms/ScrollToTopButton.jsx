import { useEffect, useState } from 'react'

function ScrollToTopButton({ threshold = 360 }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  if (!isVisible) {
    return null
  }

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button type="button" className="scroll-to-top" onClick={onClick} aria-label="Volver arriba">
      ↑
    </button>
  )
}

export default ScrollToTopButton

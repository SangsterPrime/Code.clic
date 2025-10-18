import { useCallback, useEffect, useState } from 'react'

function useResponsiveNav(breakpoint = 900) {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = useCallback(() => {
    setIsNavOpen((prev) => !prev)
  }, [])

  const closeNav = useCallback(() => {
    setIsNavOpen(false)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > breakpoint) {
        setIsNavOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [breakpoint])

  return { isNavOpen, toggleNav, closeNav }
}

export default useResponsiveNav

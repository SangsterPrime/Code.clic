import { useEffect, useState } from 'react'

function useActiveSection(sectionIds = [], options = {}) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? null)

  useEffect(() => {
    if (!Array.isArray(sectionIds) || sectionIds.length === 0) {
      return undefined
    }

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) {
      return undefined
    }

    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '-40% 0px -55% 0px',
      ...options,
    }

    const observer = new IntersectionObserver((entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        .forEach((entry) => {
          setActiveId(entry.target.id)
        })
    }, observerOptions)

    elements.forEach((element) => observer.observe(element))

    return () => {
      elements.forEach((element) => observer.unobserve(element))
      observer.disconnect()
    }
  }, [sectionIds, options])

  return activeId
}

export default useActiveSection

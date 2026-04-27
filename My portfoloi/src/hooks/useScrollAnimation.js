import { useEffect, useRef } from 'react'

const defaultDependencies = []

export default function useScrollAnimation(dependencies = defaultDependencies) {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return undefined

    if (!('IntersectionObserver' in window)) {
      root.querySelectorAll('.fade-in').forEach((el) => el.classList.add('visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const observeFadeIns = () => {
      root.querySelectorAll('.fade-in:not(.visible)').forEach((el) => observer.observe(el))
    }

    observeFadeIns()

    const mutationObserver = new MutationObserver(observeFadeIns)
    mutationObserver.observe(root, { childList: true, subtree: true })

    return () => {
      mutationObserver.disconnect()
      observer.disconnect()
    }
  }, dependencies)

  return ref
}

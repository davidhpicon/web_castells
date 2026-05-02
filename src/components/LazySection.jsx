import { useRef, useState, useEffect } from 'react'

export default function LazySection({ children, minHeight = 400, rootMargin = '200px 0px' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin])

  return (
    <div ref={ref}>
      {visible
        ? children
        : <div style={{ minHeight, background: 'transparent' }} aria-hidden="true" />
      }
    </div>
  )
}

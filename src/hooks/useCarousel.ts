import { useState, useEffect } from 'react'

export function useCarousel(itemCount: number, autoPlay = true, interval = 5000) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % itemCount)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, itemCount])

  const next = () => setCurrent(prev => (prev + 1) % itemCount)
  const prev = () => setCurrent(prev => (prev - 1 + itemCount) % itemCount)
  const go = (index: number) => setCurrent(index % itemCount)

  return { current, next, prev, go }
}

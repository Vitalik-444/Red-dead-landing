import { useScroll, useSpring } from 'framer-motion'

/** Spring-smoothed 0…1 page scroll progress, ready to use as `scaleX`. */
export function useScrollProgress() {
  const { scrollYProgress } = useScroll()
  return useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 })
}

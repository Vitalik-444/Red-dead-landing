import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import type { ImageSlot } from '../types'
import { img } from '../data/image'
import Img from '../components/Img'
import Button from '../components/Button'
import Stamp from '../components/Stamp'

const heroImage: ImageSlot = { src: img('hero/hero.jpg'), alt: 'A lone rider on a ridge at sunset' }
const places = ['Ambarino', 'New Hanover', 'West Elizabeth', 'Lemoyne', 'New Austin']

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} id="top" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink">
      <motion.div className="absolute inset-0" style={{ y }}>
        <motion.div className="absolute inset-0" animate={{ scale: [1, 1.1] }} transition={{ duration: 32, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}>
          <Img image={heroImage} className="h-full w-full" priority />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(23,19,15,.75)_100%)]" />

      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto w-full max-w-[1500px] px-5 pb-28 pt-40 md:px-10">
        <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="mb-5 flex items-center gap-4 font-sans text-xs uppercase tracking-[.4em] text-gold">
          <span className="h-px w-12 bg-gold" /> America, 1899
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 0.8, 0.28, 1] }} className="max-w-[16ch] font-display text-[clamp(3.4rem,11.5vw,10.5rem)] font-extrabold uppercase leading-[.84] text-paper">
          The West was <em className="font-serif font-normal normal-case italic text-gold">never</em> wild enough.
        </motion.h1>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 1 }} className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="font-serif text-xl italic leading-snug text-paper/90">A land of opportunity. A time of outlaws. And the end of an era that refused to die.</p>
            <Button href="#story" className="mt-8">Discover the story</Button>
          </div>
        </motion.div>
      </motion.div>

      <Stamp className="absolute right-6 top-28 z-10 hidden h-36 w-36 opacity-80 md:block lg:right-14 lg:h-48 lg:w-48" />

      <div className="relative z-10 border-t border-line/70 bg-ink/50">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-5 py-3 md:px-10">
          <ul className="hidden gap-6 font-sans text-[10px] uppercase tracking-[.3em] text-mute lg:flex">
            {places.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <p className="font-sans text-[10px] uppercase tracking-[.3em] text-mute lg:hidden">Ambarino → New Austin</p>
          <a href="#story" aria-label="Scroll to the story" className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-[.3em] text-gold">
            Scroll <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}><ChevronDown size={16} /></motion.span>
          </a>
        </div>
      </div>
    </section>
  )
}

import { useCallback, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { GalleryItem } from '../types'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'
import Img from './Img'

interface Props {
  items: GalleryItem[]
  index: number
  onChange: (i: number) => void
  onClose: () => void
}

const RATIO = { portrait: 'aspect-[3/4] max-h-[78vh]', landscape: 'aspect-[4/3] max-h-[78vh]', square: 'aspect-square max-h-[78vh]', wide: 'aspect-[16/9] max-h-[78vh]' } as const

export default function Lightbox({ items, index, onChange, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const item = items[index]
  useLockBodyScroll(true)

  const step = useCallback((d: number) => onChange((index + d + items.length) % items.length), [index, items.length, onChange])

  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, step])

  return (
    <motion.div role="dialog" aria-modal="true" aria-label="Image gallery" className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-ink/95 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <button ref={closeRef} type="button" onClick={onClose} aria-label="Close" className="absolute right-4 top-4 grid h-11 w-11 place-items-center border border-line text-paper transition-colors hover:bg-rust"><X size={22} /></button>
      <button type="button" onClick={(e) => { e.stopPropagation(); step(-1) }} aria-label="Previous image" className="absolute left-2 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center border border-line bg-ink/60 text-paper transition-colors hover:bg-rust md:left-6"><ChevronLeft size={24} /></button>
      <button type="button" onClick={(e) => { e.stopPropagation(); step(1) }} aria-label="Next image" className="absolute right-2 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center border border-line bg-ink/60 text-paper transition-colors hover:bg-rust md:right-6"><ChevronRight size={24} /></button>

      <div className="relative flex w-full max-w-5xl justify-center" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.div key={item.id} className={`relative w-full border border-line p-2 ${RATIO[item.ratio]}`} style={{ maxWidth: item.ratio === 'portrait' ? '60vh' : undefined }} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <Img image={item.image} className="h-full w-full" priority />
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="mt-5 text-center font-serif text-xl italic text-paper" onClick={(e) => e.stopPropagation()}>
        {item.caption} <span className="ml-3 font-sans text-xs not-italic tracking-[.3em] text-gold">{index + 1} / {items.length}</span>
      </p>
    </motion.div>
  )
}

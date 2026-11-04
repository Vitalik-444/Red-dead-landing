import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Maximize2 } from 'lucide-react'
import type { GalleryItem } from '../types'
import Img from './Img'
import Lightbox from './Lightbox'
import Reveal from './Reveal'

const RATIO = { portrait: 'aspect-[3/4]', landscape: 'aspect-[4/3]', square: 'aspect-square', wide: 'aspect-[16/9]' } as const

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((it, i) => (
          <Reveal key={it.id} className="mb-4 break-inside-avoid" y={24}>
            <button type="button" onClick={() => setOpen(i)} aria-label={`Open: ${it.caption}`} className="group relative block w-full border border-line p-1.5 text-left transition-colors hover:border-rust">
              <Img image={it.image} className={`w-full ${RATIO[it.ratio]}`} />
              <span className="pointer-events-none absolute inset-1.5 flex items-end justify-between bg-gradient-to-t from-ink/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="font-serif text-lg italic text-paper">{it.caption}</span>
                <Maximize2 size={18} className="text-gold" />
              </span>
            </button>
          </Reveal>
        ))}
      </div>
      <AnimatePresence>
        {open !== null && <Lightbox items={items} index={open} onChange={setOpen} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </>
  )
}

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { Character } from '../types'
import Img from './Img'

export default function CharacterShowcase({ characters }: { characters: Character[] }) {
  const [[index, dir], setState] = useState<[number, number]>([0, 1])
  const c = characters[index]
  const total = characters.length

  const go = (next: number, d: number) => setState([(next + total) % total, d])

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="relative lg:col-span-7">
        <div className="relative aspect-[4/5] w-full border border-line p-2 sm:aspect-[5/6] lg:aspect-auto lg:h-[78vh]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={c.id}
              custom={dir}
              className="absolute inset-2"
              initial={{ opacity: 0, x: dir * 50, scale: 1.04 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: dir * -50 }}
              transition={{ duration: 0.6, ease: [0.22, 0.8, 0.28, 1] }}
            >
              <Img image={c.image} className="h-full w-full" priority />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/20" />
            </motion.div>
          </AnimatePresence>
          <span aria-hidden="true" className="pointer-events-none absolute -bottom-6 left-4 select-none font-display text-[clamp(7rem,20vw,16rem)] font-extrabold leading-none text-transparent [-webkit-text-stroke:1px_#B99A70]">
            {c.number}
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between lg:col-span-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            aria-live="polite"
          >
            <p className="font-sans text-[11px] uppercase tracking-[.3em] text-gold">
              N° {c.number} <span className="text-mute">/ 0{total}</span>
            </p>
            <h3 className="mt-3 font-display text-[clamp(2.6rem,6vw,5.5rem)] font-extrabold uppercase leading-[.9] text-paper">{c.name}</h3>
            <p className="mt-3 font-serif text-xl italic text-gold">{c.role}</p>
            <p className="mt-6 font-sans text-[15px] leading-relaxed text-paper/80">{c.bio}</p>
            <figure className="mt-8 border-l-2 border-rust pl-5">
              <blockquote className="font-serif text-xl italic leading-snug text-paper">“{c.quote}”</blockquote>
              <figcaption className="mt-2 font-sans text-[10px] uppercase tracking-[.25em] text-mute">Fan-written epigraph · in the spirit of the character</figcaption>
            </figure>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10">
          <ul className="mb-8 divide-y divide-line border-y border-line" aria-label="Choose a character">
            {characters.map((ch, i) => (
              <li key={ch.id}>
                <button
                  type="button"
                  onClick={() => go(i, i > index ? 1 : -1)}
                  aria-current={i === index}
                  className={`relative flex w-full items-center gap-4 py-2.5 text-left font-display text-lg font-bold uppercase tracking-widest transition-colors ${i === index ? 'text-paper' : 'text-mute hover:text-paper'}`}
                >
                  {i === index && <motion.span layoutId="char-indicator" className="absolute inset-y-0 left-0 w-[3px] bg-rust" />}
                  <span className="ml-4 w-6 font-sans text-[11px] tracking-normal text-rust">{ch.number}</span>
                  {ch.name}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <button type="button" aria-label="Previous character" onClick={() => go(index - 1, -1)} className="grid h-12 w-12 place-items-center border border-gold/70 text-paper transition-colors hover:border-rust hover:bg-rust">
              <ArrowLeft size={20} />
            </button>
            <button type="button" aria-label="Next character" onClick={() => go(index + 1, 1)} className="grid h-12 w-12 place-items-center border border-gold/70 text-paper transition-colors hover:border-rust hover:bg-rust">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

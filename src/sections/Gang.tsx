import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { gangImage, gangTopics } from '../data/gang'
import SectionHeading from '../components/SectionHeading'
import Img from '../components/Img'

export default function Gang() {
  const [id, setId] = useState(gangTopics[0].id)
  const topic = gangTopics.find((t) => t.id === id) ?? gangTopics[0]

  return (
    <section id="gang" className="relative overflow-hidden bg-ink px-5 py-24 md:px-10 md:py-40">
      <Img image={gangImage} className="absolute inset-0 h-full w-full opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
      <div className="relative mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionHeading number="05" label="Field notes">
            The <em className="font-serif font-normal normal-case italic text-rust">Van der Linde</em> gang.
          </SectionHeading>
          <p className="mt-8 max-w-md font-serif text-xl italic text-paper/80">
            A documentary record of the outlaws who gathered around one fire and one man’s promise.
          </p>
          <ul className="mt-12 border-t border-line" aria-label="Topics">
            {gangTopics.map((t, i) => (
              <li key={t.id} className="border-b border-line">
                <button type="button" onClick={() => setId(t.id)} aria-pressed={t.id === id} className={`flex w-full items-center gap-5 py-4 text-left font-display text-2xl font-bold uppercase tracking-widest transition-colors ${t.id === id ? 'text-paper' : 'text-mute hover:text-paper'}`}>
                  <span className="w-8 font-sans text-xs tracking-normal text-rust">0{i + 1}</span>
                  {t.label}
                  <span className={`ml-auto h-px transition-all duration-500 ${t.id === id ? 'w-16 bg-rust' : 'w-4 bg-line'}`} />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-end lg:col-span-6">
          <AnimatePresence mode="wait">
            <motion.article key={topic.id} className="border border-line bg-ink/70 p-8 backdrop-blur-[2px] md:p-12" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.5 }} aria-live="polite">
              <p className="font-sans text-[11px] uppercase tracking-[.3em] text-gold">{topic.label}</p>
              <h3 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[.95] text-paper md:text-5xl">{topic.title}</h3>
              <div className="my-6 h-px w-20 bg-rust" />
              {topic.text.map((p, i) => <p key={i} className="mb-4 font-serif text-xl leading-relaxed text-paper/85">{p}</p>)}
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

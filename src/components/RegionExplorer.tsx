import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Region } from '../types'
import Img from './Img'

export default function RegionExplorer({ regions }: { regions: Region[] }) {
  const [activeId, setActiveId] = useState(regions[0].id)
  const active = regions.find((r) => r.id === activeId) ?? regions[0]

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <figure className="lg:col-span-5">
        <div className="border border-line bg-aged p-3 shadow-[0_20px_60px_rgba(0,0,0,.5)]">
          <svg viewBox="0 0 400 300" className="w-full" role="group" aria-label="Map of the frontier regions">
            <rect width="400" height="300" fill="#D8CBB5" />
            {[60, 120, 180, 240].map((v) => <line key={`h${v}`} x1="0" x2="400" y1={v} y2={v} stroke="#514437" strokeWidth=".4" strokeDasharray="2 4" opacity=".5" />)}
            {[80, 160, 240, 320].map((v) => <line key={`v${v}`} y1="0" y2="300" x1={v} x2={v} stroke="#514437" strokeWidth=".4" strokeDasharray="2 4" opacity=".5" />)}
            {regions.map((r) => {
              const on = r.id === activeId
              return (
                <g
                  key={r.id}
                  role="button"
                  tabIndex={0}
                  aria-label={r.name}
                  aria-pressed={on}
                  className="cursor-pointer outline-none focus-visible:[&>polygon]:stroke-[3]"
                  onClick={() => setActiveId(r.id)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveId(r.id) } }}
                >
                  <polygon points={r.shape} fill={on ? '#A33B2D' : '#B99A70'} fillOpacity={on ? 0.85 : 0.25} stroke="#514437" strokeWidth="1.5" strokeLinejoin="round" className="transition-all duration-300" />
                  <text x={r.label.x} y={r.label.y} textAnchor="middle" fontFamily="'IM Fell English', serif" fontStyle="italic" fontSize="15" fill={on ? '#E9DFCE' : '#17130F'} pointerEvents="none">{r.name}</text>
                </g>
              )
            })}
            <g transform="translate(36 262)" stroke="#17130F" fill="none" strokeWidth="1">
              <circle r="16" /><polygon points="0,-20 4,0 0,20 -4,0" fill="#17130F" />
              <text y="-24" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#17130F" stroke="none">N</text>
            </g>
            <rect x="0" y="0" width="400" height="300" fill="none" stroke="#17130F" strokeWidth="2" />
          </svg>
          <figcaption className="mt-2 flex justify-between font-serif text-xs italic text-ink/70">
            <span>The Territories — surveyed 1899</span><span>Not to scale</span>
          </figcaption>
        </div>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Choose a region">
          {regions.map((r) => (
            <li key={r.id}>
              <button type="button" onClick={() => setActiveId(r.id)} aria-pressed={r.id === activeId} className={`border px-4 py-2 font-display text-sm font-bold uppercase tracking-[.25em] transition-colors ${r.id === activeId ? 'border-rust bg-rust text-paper' : 'border-line text-mute hover:border-gold hover:text-paper'}`}>
                {r.name}
              </button>
            </li>
          ))}
        </ul>
      </figure>

      <div className="lg:col-span-7">
        <div className="relative aspect-[16/10] w-full border border-line p-2">
          <AnimatePresence mode="wait">
            <motion.div key={active.id} className="absolute inset-2" initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
              <Img image={active.image} className="h-full w-full" />
            </motion.div>
          </AnimatePresence>
          <span className="absolute left-5 top-5 bg-ink/80 px-3 py-1 font-sans text-[10px] uppercase tracking-[.3em] text-gold">Fig. {regions.indexOf(active) + 1} — {active.tagline}</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={active.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }} className="mt-8 grid gap-8 md:grid-cols-5" aria-live="polite">
            <div className="md:col-span-3">
              <h3 className="font-display text-5xl font-extrabold uppercase text-paper md:text-6xl">{active.name}</h3>
              <p className="mt-4 font-serif text-lg leading-relaxed text-paper/85">{active.description}</p>
            </div>
            <dl className="space-y-3 border-l border-line pl-6 font-sans text-sm md:col-span-2">
              {[['Terrain', active.terrain], ['Climate', active.climate], ['Notable', active.places.join(' · ')]].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[10px] uppercase tracking-[.3em] text-rust">{k}</dt>
                  <dd className="text-paper/85">{v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

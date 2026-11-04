import type { Article } from '../types'
import Img from './Img'
import { ArrowUpRight } from 'lucide-react'

const SPAN = { 2: 'md:col-span-2', 3: 'md:col-span-3', 4: 'md:col-span-4' } as const
const RATIO = { wide: 'aspect-[16/10]', tall: 'aspect-[3/4]', square: 'aspect-square' } as const

interface Props {
  article: Article
  index: number
  onOpen: (id: string) => void
}

export default function JournalCard({ article: a, index, onOpen }: Props) {
  return (
    <article className={`group ${SPAN[a.span]} ${index % 3 === 1 ? 'md:mt-14' : ''}`}>
      <button type="button" onClick={() => onOpen(a.id)} className="block w-full text-left" aria-label={`Read: ${a.title}`}>
        <div className="border border-line p-1.5 transition-colors duration-300 group-hover:border-rust">
          <Img image={a.image} className={`w-full ${RATIO[a.ratio]}`} />
        </div>
        <p className="mt-4 font-sans text-[11px] uppercase tracking-[.3em] text-rust">{a.category}</p>
        <h3 className="mt-2 font-display text-3xl font-extrabold uppercase leading-[.95] text-ink md:text-4xl">{a.title}</h3>
        <p className="mt-2 max-w-md font-serif text-lg leading-snug text-ink/75">{a.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-2 border-b border-ink font-display text-sm font-bold uppercase tracking-[.28em] text-ink transition-colors group-hover:border-rust group-hover:text-rust">
          Read more <ArrowUpRight size={16} />
        </span>
      </button>
    </article>
  )
}

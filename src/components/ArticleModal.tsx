import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import type { Article } from '../types'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'
import Img from './Img'

export default function ArticleModal({ article, onClose }: { article: Article; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  useLockBodyScroll(true)

  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <motion.div className="fixed inset-0 z-[70] overflow-y-auto bg-ink/90 p-4 md:p-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.article
        role="dialog"
        aria-modal="true"
        aria-labelledby="article-title"
        className="paper relative mx-auto max-w-3xl border border-line text-ink"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 0.8, 0.28, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} type="button" onClick={onClose} aria-label="Close article" className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center bg-ink text-paper transition-colors hover:bg-rust">
          <X size={20} />
        </button>
        <Img image={article.image} className="aspect-[16/9] w-full" priority />
        <div className="px-6 py-10 md:px-14">
          <p className="font-sans text-[11px] uppercase tracking-[.3em] text-rust">{article.category}</p>
          <h3 id="article-title" className="mt-2 font-display text-5xl font-extrabold uppercase leading-[.9] md:text-6xl">{article.title}</h3>
          <div className="my-6 h-px bg-line/50" />
          {article.body.map((p, i) => (
            <p key={i} className={`mb-5 font-serif text-xl leading-relaxed text-ink/90 ${i === 0 ? 'first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:font-extrabold first-letter:leading-[.8] first-letter:text-rust' : ''}`}>{p}</p>
          ))}
        </div>
      </motion.article>
    </motion.div>
  )
}

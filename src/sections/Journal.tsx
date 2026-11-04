import { useCallback, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { articles } from '../data/journal'
import SectionHeading from '../components/SectionHeading'
import JournalCard from '../components/JournalCard'
import ArticleModal from '../components/ArticleModal'

export default function Journal() {
  const [openId, setOpenId] = useState<string | null>(null)
  const open = articles.find((a) => a.id === openId)
  const close = useCallback(() => setOpenId(null), [])

  return (
    <section id="journal" className="paper overflow-hidden px-5 py-24 text-ink md:px-10 md:py-36">
      <div className="mx-auto max-w-[1500px]">
        <SectionHeading number="06" label="Field journal" light className="mb-20">
          The outlaw’s <em className="font-serif font-normal normal-case italic text-rust">journal.</em>
        </SectionHeading>
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-6">
          {articles.map((a, i) => <JournalCard key={a.id} article={a} index={i} onOpen={setOpenId} />)}
        </div>
      </div>
      <AnimatePresence>{open && <ArticleModal article={open} onClose={close} />}</AnimatePresence>
    </section>
  )
}

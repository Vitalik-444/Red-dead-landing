import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrollProgress } from '../hooks/useScrollProgress'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'
import Logo from './Logo'

export const NAV_LINKS = [
  { label: 'Story', href: '#story' },
  { label: 'Characters', href: '#characters' },
  { label: 'Frontier', href: '#frontier' },
  { label: 'Journal', href: '#journal' },
] as const

export default function Header() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const progress = useScrollProgress()
  useLockBodyScroll(open)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid || open ? 'bg-ink/90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-3" aria-label="Red Dead — The Frontier, back to top">
          <Logo />
          <span className="hidden font-display text-lg font-bold uppercase leading-none tracking-[.25em] text-paper sm:block">
            Red Dead
            <span className="block text-[10px] font-medium tracking-[.4em] text-gold">The Frontier</span>
          </span>
        </a>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-10">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="group relative font-display text-sm font-bold uppercase tracking-[.3em] text-paper">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-rust transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="text-paper md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <motion.div className="h-px origin-left bg-rust" style={{ scaleX: progress }} />
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            className="fixed inset-x-0 bottom-0 top-[73px] flex flex-col justify-center bg-ink px-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul className="space-y-6">
              {NAV_LINKS.map((l, i) => (
                <motion.li key={l.href} initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.08 * i }}>
                  <a href={l.href} onClick={() => setOpen(false)} className="font-display text-6xl font-extrabold uppercase text-paper">
                    <span className="mr-4 font-sans text-xs tracking-widest text-rust">0{i + 2}</span>
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

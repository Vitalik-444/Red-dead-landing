import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
  number: string
  label: string
  children: ReactNode
  light?: boolean
  className?: string
}

export default function SectionHeading({ number, label, children, light = false, className = '' }: Props) {
  return (
    <div className={className}>
      <motion.div
        className={`mb-6 flex items-center gap-4 font-sans text-[11px] uppercase tracking-[.3em] ${light ? 'text-line' : 'text-gold'}`}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="font-display text-2xl font-bold tracking-normal text-rust">{number}</span>
        <span className={`h-px w-14 ${light ? 'bg-line/60' : 'bg-line'}`} />
        <span>{label}</span>
      </motion.div>
      <motion.h2
        className={`font-display text-[clamp(2.8rem,8vw,7rem)] font-extrabold uppercase leading-[.88] ${light ? 'text-ink' : 'text-paper'}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.22, 0.8, 0.28, 1] }}
      >
        {children}
      </motion.h2>
    </div>
  )
}

import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'solid' | 'outline'
  className?: string
}

export default function Button({ children, href, onClick, variant = 'solid', className = '' }: Props) {
  const base =
    'group inline-flex items-center gap-3 border px-7 py-3.5 font-display text-sm font-bold uppercase tracking-[.28em] transition-colors duration-300'
  const styles =
    variant === 'solid'
      ? 'border-rust bg-rust text-paper hover:bg-transparent hover:text-paper'
      : 'border-gold/70 text-paper hover:border-rust hover:bg-rust'
  const cls = `${base} ${styles} ${className}`
  return href ? (
    <a href={href} className={cls}>{children}</a>
  ) : (
    <button type="button" onClick={onClick} className={cls}>{children}</button>
  )
}

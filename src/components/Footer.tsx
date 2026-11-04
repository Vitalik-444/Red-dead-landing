import { ArrowUp, Instagram, Twitter, Youtube } from 'lucide-react'
import Logo from './Logo'

const links = [
  { label: 'Story', href: '#story' },
  { label: 'Characters', href: '#characters' },
  { label: 'Frontier', href: '#frontier' },
  { label: 'The Gang', href: '#gang' },
  { label: 'Journal', href: '#journal' },
  { label: 'Gallery', href: '#gallery' },
]

const socials = [
  { label: 'Instagram', Icon: Instagram },
  { label: 'X / Twitter', Icon: Twitter },
  { label: 'YouTube', Icon: Youtube },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink px-5 pb-10 pt-16 md:px-10">
      <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <Logo className="h-14 w-14" />
            <p className="font-display text-3xl font-extrabold uppercase leading-none tracking-wider text-paper">
              <span className="text-rust">Red Dead</span>
              <span className="block text-sm font-medium tracking-[.4em] text-gold">The Frontier</span>
            </p>
          </div>
          <p className="mt-6 max-w-sm font-serif text-lg italic text-mute">
            An unofficial journal from the last days of the American West.
          </p>
        </div>
        <nav aria-label="Footer" className="md:col-span-4">
          <ul className="grid grid-cols-2 gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="font-display text-sm font-bold uppercase tracking-[.3em] text-paper transition-colors hover:text-rust">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-3 md:text-right">
          <ul className="flex gap-3 md:justify-end">
            {socials.map(({ label, Icon }) => (
              <li key={label}>
                {/* Placeholder links: replace "#" with your own profiles. */}
                <a href="#" onClick={(e) => e.preventDefault()} aria-label={`${label} (placeholder)`} title="Placeholder — add your link" className="grid h-10 w-10 place-items-center border border-line text-gold transition-colors hover:border-rust hover:bg-rust hover:text-paper">
                  <Icon size={16} />
                </a>
              </li>
            ))}
          </ul>
          <a href="#top" className="mt-8 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[.3em] text-gold transition-colors hover:text-paper">
            Back to top <ArrowUp size={16} />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-14 max-w-[1500px] border-t border-line pt-6 font-sans text-[11px] leading-relaxed text-mute">
        Unofficial fan-made project. Not affiliated with, endorsed or sponsored by Rockstar Games or Take-Two Interactive.
        Red Dead Redemption is a trademark of its respective owners. All names and references are used for fan commentary only. © 2026.
      </p>
    </footer>
  )
}

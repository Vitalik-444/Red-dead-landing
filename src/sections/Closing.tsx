import { ArrowUp } from 'lucide-react'
import type { ImageSlot } from '../types'
import { img } from '../data/image'
import Img from '../components/Img'
import Button from '../components/Button'
import Reveal from '../components/Reveal'

const bg: ImageSlot = { src: img('hero/closing.jpg'), alt: 'A wide plain under a burning sunset', scene: 'plains', tone: 'dusk', seed: 77 }

export default function Closing() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink px-5 py-24 md:px-10">
      <Img image={bg} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/40 to-ink" />
      <div className="relative mx-auto w-full max-w-[1500px]">
        <Reveal>
          <h2 className="max-w-[12ch] font-display text-[clamp(3.6rem,12vw,11rem)] font-extrabold uppercase leading-[.84] text-paper">
            Take a deep breath. <em className="font-serif font-normal normal-case italic text-gold">Ride on.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-lg border-l-2 border-rust pl-5 font-serif text-2xl italic leading-snug text-paper/90">
            The road does not care who you were. It only asks which way you are headed when the light begins to fade.
          </p>
          <Button href="#top" variant="outline" className="mt-10">
            <ArrowUp size={18} /> Return to the beginning
          </Button>
        </Reveal>
      </div>
    </section>
  )
}

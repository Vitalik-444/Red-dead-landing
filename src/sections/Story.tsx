import { storyBeats, storyImages, storyIntro } from '../data/story'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Img from '../components/Img'

export default function Story() {
  return (
    <section id="story" className="paper relative overflow-hidden px-5 py-24 text-ink md:px-10 md:py-36">
      <span aria-hidden="true" className="absolute left-3 top-40 hidden select-none font-sans text-[10px] uppercase tracking-[.5em] text-line [writing-mode:vertical-rl] lg:block">
        The Van der Linde gang — a record of the year 1899
      </span>
      <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-12 lg:pl-10">
        <div className="lg:col-span-5">
          <SectionHeading number="02" label="The story" light>
            Every end <em className="font-serif font-normal normal-case italic text-rust">has</em> a beginning.
          </SectionHeading>
          <Reveal delay={0.1}>
            <p className="mt-10 font-serif text-2xl leading-snug first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-[5.5rem] first-letter:font-extrabold first-letter:leading-[.8] first-letter:text-rust md:text-[1.7rem]">
              {storyIntro}
            </p>
          </Reveal>
          <ol className="mt-12 divide-y divide-line/50 border-y border-line/50">
            {storyBeats.map((b) => (
              <li key={b.title}>
                <Reveal className="grid grid-cols-[6.5rem_1fr] gap-4 py-5">
                  <span className="font-display text-xl font-bold uppercase tracking-widest text-rust">{b.year}</span>
                  <div>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-wide">{b.title}</h3>
                    <p className="mt-1 font-sans text-sm leading-relaxed text-ink/75">{b.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative lg:col-span-7">
          <Reveal className="group relative ml-auto w-[88%]">
            <div className="border border-ink/60 bg-paper p-2 shadow-[0_18px_40px_rgba(23,19,15,.35)]">
              <Img image={storyImages.a} className="aspect-[4/5] w-full" />
            </div>
            <p className="mt-3 font-serif text-sm italic text-ink/70">Plate I — Main Street, a boomtown awaiting the railroad.</p>
          </Reveal>
          <Reveal className="group relative -mt-16 w-[62%] md:-mt-28" delay={0.15}>
            <div className="rotate-[-2deg] border border-ink/60 bg-paper p-2 shadow-[0_18px_40px_rgba(23,19,15,.4)]">
              <Img image={storyImages.b} className="aspect-[4/3] w-full" />
            </div>
            <p className="mt-3 font-serif text-sm italic text-ink/70">Plate II — A camp, hastily pitched, 1899.</p>
          </Reveal>
          <p className="absolute right-0 top-[48%] hidden max-w-[11rem] border-l-2 border-rust pl-3 font-serif text-sm italic text-rust xl:block">
            “The country is changing faster than any of them can ride.”
            <span className="mt-1 block font-sans text-[10px] not-italic uppercase tracking-[.3em] text-ink/60">Marginal note</span>
          </p>
        </div>
      </div>
    </section>
  )
}

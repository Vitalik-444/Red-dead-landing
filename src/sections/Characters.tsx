import { characters } from '../data/characters'
import SectionHeading from '../components/SectionHeading'
import CharacterShowcase from '../components/CharacterShowcase'

export default function Characters() {
  return (
    <section id="characters" className="overflow-hidden bg-ink2 px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1500px]">
        <SectionHeading number="03" label="Portraits" className="mb-16">
          Known by <em className="font-serif font-normal normal-case italic text-gold">their</em> deeds.
        </SectionHeading>
        <CharacterShowcase characters={characters} />
      </div>
    </section>
  )
}

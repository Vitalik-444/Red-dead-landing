import { regions } from '../data/regions'
import SectionHeading from '../components/SectionHeading'
import RegionExplorer from '../components/RegionExplorer'

export default function Frontier() {
  return (
    <section id="frontier" className="overflow-hidden bg-ink px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1500px]">
        <SectionHeading number="04" label="The territories" className="mb-16">
          The frontier <em className="font-serif font-normal normal-case italic text-gold">awaits.</em>
        </SectionHeading>
        <RegionExplorer regions={regions} />
      </div>
    </section>
  )
}

import { gallery } from '../data/gallery'
import SectionHeading from '../components/SectionHeading'
import Gallery from '../components/Gallery'

export default function GallerySection() {
  return (
    <section id="gallery" className="overflow-hidden bg-ink2 px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1500px]">
        <SectionHeading number="07" label="Plates" className="mb-16">
          Pictures from <em className="font-serif font-normal normal-case italic text-gold">the road.</em>
        </SectionHeading>
        <Gallery items={gallery} />
      </div>
    </section>
  )
}

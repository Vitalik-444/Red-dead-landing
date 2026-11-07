import { useState } from 'react'
import type { ImageSlot } from '../types'

interface Props {
  image: ImageSlot
  className?: string
  priority?: boolean
}

/**
 * Renders an image loaded from the web (see src/data/image.ts).
 * If the image can't be loaded, only the plain dark background is shown.
 * Add `group` to a parent to get the slow hover zoom.
 */
export default function Img({ image, className = '', priority = false }: Props) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`relative overflow-hidden bg-ink2 ${className}`} role="img" aria-label={image.alt}>
      <div className="absolute inset-0 transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]">
        {!failed && image.src && (
          <img
            src={image.src}
            alt=""
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onError={() => setFailed(true)}
            className="photo absolute inset-0 h-full w-full object-cover"
          />
        )}
      </div>
    </div>
  )
}

export type SceneKind =
  | 'ridges' | 'plains' | 'forest' | 'camp' | 'town' | 'rider' | 'portrait' | 'swamp' | 'desert'

export type Tone = 'dusk' | 'dawn' | 'night' | 'snow' | 'noon' | 'swamp' | 'desert'

/** A photo slot: `src` is looked up in public/images; the procedural scene is the fallback. */
export interface ImageSlot {
  src: string
  alt: string
  scene: SceneKind
  tone: Tone
  seed: number
}

export interface StoryBeat { year: string; title: string; text: string }

export interface Character {
  id: string
  number: string
  name: string
  role: string
  bio: string
  quote: string
  image: ImageSlot
}

export interface Region {
  id: string
  name: string
  tagline: string
  description: string
  terrain: string
  climate: string
  places: string[]
  shape: string
  label: { x: number; y: number }
  image: ImageSlot
}

export interface GangTopic { id: string; label: string; title: string; text: string[] }

export interface Article {
  id: string
  category: string
  title: string
  excerpt: string
  body: string[]
  span: 2 | 3 | 4
  ratio: 'wide' | 'tall' | 'square'
  image: ImageSlot
}

export interface GalleryItem {
  id: string
  caption: string
  ratio: 'portrait' | 'landscape' | 'square' | 'wide'
  image: ImageSlot
}

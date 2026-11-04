import type { GalleryItem } from '../types'
import { img } from './image'

const g = (id: string, caption: string, ratio: GalleryItem['ratio'], scene: GalleryItem['image']['scene'], tone: GalleryItem['image']['tone'], seed: number): GalleryItem => ({
  id, caption, ratio, image: { src: img(`gallery/${id}.jpg`), alt: caption, scene, tone, seed },
})

export const gallery: GalleryItem[] = [
  g('arthur-portrait', 'An outlaw in the last light', 'portrait', 'portrait', 'dusk', 51),
  g('horse-ridge', 'A rider on the ridge', 'landscape', 'rider', 'dusk', 52),
  g('snow-peaks', 'Ambarino, before the storm', 'wide', 'ridges', 'snow', 53),
  g('pine-mist', 'Morning mist in the pines', 'portrait', 'forest', 'noon', 54),
  g('main-street', 'Main Street, 1899', 'landscape', 'town', 'dusk', 55),
  g('plains-sunset', 'Sunset over the heartlands', 'wide', 'plains', 'dusk', 56),
  g('gang-camp', 'The camp at night', 'square', 'camp', 'night', 57),
  g('bayou', 'The bayou at first light', 'landscape', 'swamp', 'swamp', 58),
  g('mesa', 'Mesa country', 'wide', 'desert', 'desert', 59),
  g('river-dawn', 'River valley, dawn', 'portrait', 'ridges', 'dawn', 60),
]

import type { GalleryItem } from '../types'
import { img } from './image'

const g = (id: string, caption: string, ratio: GalleryItem['ratio']): GalleryItem => ({
  id, caption, ratio, image: { src: img(`gallery/${id}.jpg`), alt: caption },
})

export const gallery: GalleryItem[] = [
  g('arthur-portrait', 'An outlaw in the last light', 'portrait'),
  g('horse-ridge', 'A rider on the ridge', 'landscape'),
  g('snow-peaks', 'Ambarino, before the storm', 'wide'),
  g('pine-mist', 'Morning mist in the pines', 'portrait'),
  g('main-street', 'Main Street, 1899', 'landscape'),
  g('plains-sunset', 'Sunset over the heartlands', 'wide'),
  g('gang-camp', 'The camp at night', 'square'),
  g('bayou', 'The bayou at first light', 'landscape'),
  g('mesa', 'Mesa country', 'wide'),
  g('river-dawn', 'River valley, dawn', 'portrait'),
]

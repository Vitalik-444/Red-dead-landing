/**
 * Real Red Dead Redemption 2 screenshots and official artwork.
 *
 * Images are served from iRedDead's public image CDN. The original site
 * keeps its image files on this host, so the project does not need a large
 * local image bundle. SceneArt remains as an offline fallback if a host
 * image cannot be reached.
 */
const IMAGE_BASE = 'https://www.ireddead.com/content/images/'

const images: Record<string, string> = {
  // Hero / closing
  'hero/hero.jpg': 'red-dead-redemption-2-wide-1824.jpg',
  'hero/closing.jpg': 'mount-hagen-post-card-1507.jpg',

  // Story
  'story/blackwater.jpg': 'busy-valentine-street-1573.jpg',
  'story/camp-1899.jpg': 'van-der-linde-gang-1811.jpg',

  // Character artwork
  'characters/arthur-morgan.jpg': 'arthur-morgan-1473.jpg',
  'characters/john-marston.jpg': 'john-marston-1486.jpg',
  'characters/dutch-van-der-linde.jpg': 'dutch-van-der-linde-1495.jpg',
  'characters/sadie-adler.jpg': 'sadie-adler-1474.jpg',
  'characters/hosea-matthews.jpg': 'hosea-matthews-1494.jpg',
  'characters/charles-smith.jpg': 'charles-draws-down-1529.jpg',

  // Territories
  'regions/ambarino.jpg': 'mount-hagen-post-card-1507.jpg',
  'regions/new-hanover.jpg': 'busy-valentine-street-1573.jpg',
  'regions/west-elizabeth.jpg': 'mount-hagen-gunfight-1508.jpg',
  'regions/lemoyne.jpg': 'lagras-walking-the-swamp-1517.jpg',
  'regions/new-austin.jpg': 'saint-denis-post-card-1504.jpg',

  // Gang
  'gang/campfire.jpg': 'van-der-linde-gang-1811.jpg',

  // Journal
  'journal/camp-life.jpg': 'van-der-linde-gang-1811.jpg',
  'journal/wildlife.jpg': 'mount-hagen-gunfight-1508.jpg',
  'journal/weapons.jpg': 'saint-denis-saloon-1506.jpg',
  'journal/horses.jpg': 'charles-with-a-horse-1700.jpg',
  'journal/exploration.jpg': 'mount-hagen-post-card-1507.jpg',
  'journal/hidden-details.jpg': 'dutch-and-hosea-1807.jpg',
  'journal/encounters.jpg': 'lagras-walking-the-swamp-1517.jpg',

  // Gallery
  'gallery/arthur-portrait.jpg': 'arthur-morgan-1473.jpg',
  'gallery/horse-ridge.jpg': 'charles-with-a-horse-1700.jpg',
  'gallery/snow-peaks.jpg': 'mount-hagen-post-card-1507.jpg',
  'gallery/pine-mist.jpg': 'mount-hagen-gunfight-1508.jpg',
  'gallery/main-street.jpg': 'busy-valentine-street-1573.jpg',
  'gallery/plains-sunset.jpg': 'red-dead-redemption-2-wide-1824.jpg',
  'gallery/gang-camp.jpg': 'van-der-linde-gang-1811.jpg',
  'gallery/bayou.jpg': 'lagras-walking-the-swamp-1517.jpg',
  'gallery/mesa.jpg': 'saint-denis-post-card-1504.jpg',
  'gallery/river-dawn.jpg': 'mount-hagen-post-card-1507.jpg',
}

/** Resolves a local image slot to a real game image. */
export const img = (path: string) => {
  const filename = images[path]
  return filename ? `${IMAGE_BASE}${filename}` : `${import.meta.env.BASE_URL}images/${path}`
}

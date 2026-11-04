# Image sources

The project now uses real Red Dead Redemption 2 screenshots and official character artwork
instead of relying on the procedural SVG scenes as the primary visuals.

Image URLs are mapped in `src/data/image.ts` and served from the public image CDN at
`www.ireddead.com/content/images/`. The `Img` component still keeps its procedural
`SceneArt` layer underneath as a fallback if an external image host is unavailable.

The image selection includes:
- Official character artwork for Arthur, John, Dutch, Sadie and Hosea
- Official in-game screenshots featuring Charles and the Van der Linde gang
- Landscapes and location screenshots from Ambarino, Valentine and Bayou Nwa
- Town, saloon, gang and exploration imagery for the journal and gallery

Source gallery: https://www.ireddead.com/rdr2/images
Official Rockstar screenshot archive: https://www.rockstargames.com/newswire/article/9k1248838o1a1k/Screens-From-Red-Dead-Redemption-2

If you prefer to self-host the images, download the mapped files and place them in the
matching folders under `public/images/`, then change the `img()` resolver back to local
Vite paths.

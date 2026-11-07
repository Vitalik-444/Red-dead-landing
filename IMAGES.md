# Image sources

The project uses only real Red Dead Redemption 2 screenshots and official character artwork
loaded online. There are no generated or procedural images.

Image URLs are mapped in `src/data/image.ts` and served from the public image CDN at
`www.ireddead.com/content/images/`. If an image can't be loaded, the `Img` component
shows just a plain dark background.

The image selection includes:
- Official character artwork for Arthur, John, Dutch, Sadie and Hosea
- Official in-game screenshots featuring Charles and the Van der Linde gang
- Landscapes and location screenshots from Ambarino, Valentine and Bayou Nwa
- Town, saloon, gang and exploration imagery for the journal and gallery

Source gallery: https://www.ireddead.com/rdr2/images
Official Rockstar screenshot archive: https://www.rockstargames.com/newswire/article/9k1248838o1a1k/Screens-From-Red-Dead-Redemption-2

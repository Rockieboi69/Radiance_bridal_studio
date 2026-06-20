/**
 * Central registry for the studio's photography (the owner's real work).
 * Files live in /public/images. To swap an image, just replace the file
 * of the same name or update a path here.
 *
 * photo-1 … photo-5  → portrait orientation (best for tall/feature slots)
 * photo-6 … photo-10 → square orientation
 */
const p = (n: number) => `/images/photo-${n}.jpg`

// Masonry gallery — alternating portrait / square for a pleasing rhythm.
export const gallery = [
  p(1),
  p(6),
  p(2),
  p(7),
  p(3),
  p(8),
  p(4),
  p(9),
  p(5),
  p(10),
] as const

export const images = {
  heroMain: p(1), // portrait
  heroDetail: p(7), // square
  aboutPrimary: p(2), // portrait
  aboutSecondary: p(8), // square
  bookingSide: p(4), // portrait
  gallery,
}

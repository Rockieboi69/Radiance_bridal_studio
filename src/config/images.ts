/**
 * Central registry for the studio's photography (the owner's real work).
 * Files live in /public/images. To swap an image, just replace the file
 * of the same name or update a path here.
 */
const w = (n: number) => `/images/work-${n}.png`

export const gallery = [w(1), w(2), w(3), w(4), w(5), w(6), w(7), w(8), w(9)] as const

export const images = {
  heroMain: w(1),
  heroDetail: w(4),
  aboutPrimary: w(2),
  aboutSecondary: w(7),
  bookingSide: w(5),
  gallery,
  // Bride/testimonial portraits (reusing the studio's bridal work)
  testimonials: [w(3), w(6), w(8), w(9)] as const,
}

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import StudioImage from '../components/StudioImage'
import { gallery } from '../config/images'

const categories = [
  'All',
  'Traditional Brides',
  'Modern Brides',
  'Reception Looks',
  'Engagement Looks',
  'Editorial Looks',
] as const

type Category = (typeof categories)[number]

interface Item {
  id: number
  category: Exclude<Category, 'All'>
  ratio: string
  src: string
}

// Varied aspect ratios create a true masonry rhythm.
const items: Item[] = [
  { id: 1, category: 'Traditional Brides', ratio: 'aspect-[3/4]', src: gallery[0] },
  { id: 2, category: 'Modern Brides', ratio: 'aspect-square', src: gallery[1] },
  { id: 3, category: 'Reception Looks', ratio: 'aspect-[4/5]', src: gallery[2] },
  { id: 4, category: 'Editorial Looks', ratio: 'aspect-[3/4]', src: gallery[3] },
  { id: 5, category: 'Engagement Looks', ratio: 'aspect-square', src: gallery[4] },
  { id: 6, category: 'Traditional Brides', ratio: 'aspect-[4/5]', src: gallery[5] },
  { id: 7, category: 'Modern Brides', ratio: 'aspect-[3/4]', src: gallery[6] },
  { id: 8, category: 'Reception Looks', ratio: 'aspect-square', src: gallery[7] },
  { id: 9, category: 'Editorial Looks', ratio: 'aspect-[4/5]', src: gallery[8] },
]

export default function Portfolio() {
  const [active, setActive] = useState<Category>('All')

  const filtered =
    active === 'All' ? items : items.filter((i) => i.category === active)

  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Bridal Portfolio"
          title={
            <>
              A gallery of <span className="italic gold-text">radiant brides</span>
            </>
          }
          description="A curated glimpse into our artistry across traditions, styles and unforgettable moments."
        />

        {/* Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`relative rounded-full px-5 py-2 text-[0.8rem] font-medium tracking-wide transition-colors duration-300 ${
                active === c
                  ? 'text-ivory'
                  : 'text-charcoal-soft hover:text-champagne-dark'
              }`}
            >
              {active === c && (
                <motion.span
                  layoutId="portfolio-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-charcoal"
                  transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                />
              )}
              {c}
            </button>
          ))}
        </div>

        {/* Masonry */}
        <motion.div layout className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mb-5 break-inside-avoid"
              >
                <div className="group relative">
                  <StudioImage
                    src={item.src}
                    alt={`${item.category} — Radiance Bridal Studio`}
                    ratio={item.ratio}
                    rounded="rounded-[1.4rem]"
                  />
                  <div className="pointer-events-none absolute inset-x-3 bottom-3 flex translate-y-3 items-center justify-between rounded-xl bg-charcoal/55 px-4 py-2.5 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-[0.7rem] uppercase tracking-luxe text-ivory">
                      {item.category}
                    </span>
                    <span className="text-ivory">↗</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

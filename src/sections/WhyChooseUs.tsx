import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { fadeUp, staggerContainer } from '../lib/motion'
import type { ReactNode } from 'react'

interface Feature {
  title: string
  text: string
  icon: ReactNode
}

const stroke = {
  fill: 'none',
  stroke: '#A6843E',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const features: Feature[] = [
  {
    title: 'HD Bridal Makeup',
    text: 'Camera-ready, high-definition finish that stays flawless from vows to last dance.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
      </svg>
    ),
  },
  {
    title: 'Traditional Bridal Looks',
    text: 'Rich, heritage-inspired artistry honouring your culture and rituals.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
        <path d="M12 3c2 3 5 4 8 5-3 1-6 2-8 5-2-3-5-4-8-5 3-1 6-2 8-5Z" />
      </svg>
    ),
  },
  {
    title: 'Reception Looks',
    text: 'Glamorous, contemporary glam designed to dazzle under evening lights.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
        <path d="M12 2 9 8l-7 1 5 5-1 7 6-3 6 3-1-7 5-5-7-1Z" />
      </svg>
    ),
  },
  {
    title: 'Engagement Makeup',
    text: 'Soft, luminous looks that feel intimate, romantic and refined.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
        <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10Z" />
      </svg>
    ),
  },
  {
    title: 'Hairstyling',
    text: 'Sculpted updos, soft waves and adornments crafted to complete your look.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
        <path d="M4 14c0-5 4-9 8-9s8 4 8 9M6 14c0 3 2 5 6 5s6-2 6-5M9 19c-1 0-3 1-3 2M15 19c1 0 3 1 3 2" />
      </svg>
    ),
  },
  {
    title: 'Saree Draping',
    text: 'Impeccable, photo-perfect drapes in every regional and contemporary style.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
        <path d="M7 3c1 4 1 8-1 11-1 2-1 5 1 7M17 3c-3 3-5 7-5 11s1 6 3 7M7 3h10" />
      </svg>
    ),
  },
  {
    title: 'Premium Products',
    text: 'A curated kit of luxury, skin-first brands trusted by editorial artists.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
        <rect x="8" y="9" width="8" height="12" rx="2" />
        <path d="M10 9V5a2 2 0 0 1 4 0v4" />
      </svg>
    ),
  },
  {
    title: 'On-location Services',
    text: 'We bring the full atelier experience to your home, hotel or venue.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
        <path d="M12 21s-6-5.7-6-10a6 6 0 0 1 12 0c0 4.3-6 10-6 10Z" />
        <circle cx="12" cy="11" r="2" />
      </svg>
    ),
  },
]

export default function WhyChooseUs() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      {/* soft band background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-blush-light/30 to-transparent" />

      <div className="container-luxe">
        <SectionHeading
          eyebrow="Why Brides Choose Us"
          title={
            <>
              A complete <span className="italic gold-text">bridal experience</span>
            </>
          }
          description="Everything your day requires, delivered with the precision and warmth of a dedicated luxury atelier."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((f) => (
            <motion.article
              key={f.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              className="card-luxe group relative flex flex-col gap-4 p-7 transition-shadow duration-500 hover:shadow-soft-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-ivory-200 to-blush-light ring-1 ring-champagne/20 transition-transform duration-500 group-hover:scale-110">
                {f.icon}
              </span>
              <h3 className="font-serif text-lg text-charcoal">{f.title}</h3>
              <p className="text-sm leading-relaxed text-charcoal-soft">{f.text}</p>

              <span className="absolute right-6 top-6 font-serif text-3xl text-champagne/15 transition-colors duration-500 group-hover:text-champagne/30">
                ✦
              </span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

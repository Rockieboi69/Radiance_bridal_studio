import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { fadeUp, staggerContainer } from '../lib/motion'

interface Pkg {
  name: string
  tagline: string
  features: string[]
  featured?: boolean
}

const packages: Pkg[] = [
  {
    name: 'Bridal Package',
    tagline: 'The essentials, beautifully done',
    features: [
      'HD bridal makeup',
      'Signature hairstyling',
      'Saree / outfit draping',
      'Lashes & finishing touches',
      'Pre-event consultation',
    ],
  },
  {
    name: 'Premium Bridal Package',
    tagline: 'Our most-loved bridal journey',
    featured: true,
    features: [
      'Everything in Bridal',
      'Dedicated trial session',
      'Engagement or reception look',
      'Premium product line',
      'On-day touch-up support',
      'Personalised look board',
    ],
  },
  {
    name: 'Luxury Bridal Package',
    tagline: 'The complete white-glove experience',
    features: [
      'Everything in Premium',
      'Multiple bridal looks',
      'Family & entourage styling',
      'On-location atelier service',
      'Full-day artist presence',
      'Priority calendar booking',
    ],
  },
]

export default function Packages() {
  return (
    <section id="packages" className="relative py-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Bridal Packages"
          title={
            <>
              Thoughtfully crafted{' '}
              <span className="italic gold-text">bridal collections</span>
            </>
          }
          description="Each package is a starting point — every bride's experience is tailored to her day. Reach out and we will craft a proposal made just for you."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-3"
        >
          {packages.map((p) => (
            <motion.article
              key={p.name}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              className={`relative flex flex-col rounded-[1.8rem] p-8 transition-shadow duration-500 ${
                p.featured
                  ? 'bg-charcoal text-ivory shadow-soft-lg ring-1 ring-champagne/40'
                  : 'card-luxe hover:shadow-soft-lg'
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-champagne-dark to-champagne px-4 py-1 text-[0.6rem] font-semibold uppercase tracking-luxe text-ivory shadow-soft">
                  Most Loved
                </span>
              )}

              <h3
                className={`font-serif text-2xl ${
                  p.featured ? 'text-ivory' : 'text-charcoal'
                }`}
              >
                {p.name}
              </h3>
              <p
                className={`mt-1.5 text-sm ${
                  p.featured ? 'text-ivory/70' : 'text-charcoal-soft'
                }`}
              >
                {p.tagline}
              </p>

              <div
                className={`my-6 h-px w-full ${
                  p.featured ? 'bg-ivory/15' : 'bg-champagne/20'
                }`}
              />

              <ul className="flex flex-1 flex-col gap-3.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                        p.featured
                          ? 'bg-champagne/30 text-champagne-light'
                          : 'bg-champagne/15 text-champagne-dark'
                      }`}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span className={p.featured ? 'text-ivory/85' : 'text-charcoal-light'}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <p
                className={`mt-7 text-center text-[0.78rem] italic ${
                  p.featured ? 'text-champagne-light' : 'text-champagne-dark'
                }`}
              >
                Contact us for detailed pricing
              </p>

              <Link
                to="/book"
                className={`mt-4 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-500 ${
                  p.featured
                    ? 'bg-ivory text-charcoal hover:bg-champagne-light'
                    : 'bg-charcoal text-ivory hover:shadow-soft-lg'
                }`}
              >
                Enquire Now
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

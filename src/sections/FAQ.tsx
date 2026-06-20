import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const faqs = [
  {
    q: 'How early should I book?',
    a: 'We recommend reserving your date 4 to 6 months in advance, as our bridal calendar fills quickly during peak season. For weddings during festive months, even earlier is ideal to secure your preferred artist.',
  },
  {
    q: 'Do you provide trial sessions?',
    a: 'Yes. A dedicated trial is included in our Premium and Luxury packages and available as an add-on for all brides. It lets us perfect your shades, style and drape so your wedding day feels completely effortless.',
  },
  {
    q: 'Do you travel to venues?',
    a: 'Absolutely. We offer on-location services to your home, hotel or venue, bringing our full atelier setup. Travel for outstation and destination weddings can be arranged on request.',
  },
  {
    q: 'Which makeup products are used?',
    a: 'We work exclusively with premium, skin-loving and HD-friendly brands trusted by editorial artists. If you have sensitivities or preferences, we happily tailor the kit to suit your skin.',
  },
  {
    q: 'Can multiple looks be created?',
    a: 'Yes. Many brides choose distinct looks for their engagement, wedding and reception. Our Premium and Luxury packages are designed to accommodate multiple looks across your celebrations.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-luxe grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          align="left"
          eyebrow="Questions & Answers"
          title={
            <>
              Everything you{' '}
              <span className="italic gold-text">might wonder</span>
            </>
          }
          description="Still curious about something? Reach out any time — we love helping brides feel completely at ease."
        />

        <div className="flex flex-col">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className="border-b border-champagne/20">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span
                    className={`font-serif text-lg transition-colors duration-300 sm:text-xl ${
                      isOpen ? 'text-champagne-dark' : 'text-charcoal'
                    }`}
                  >
                    {f.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? 'rotate-45 border-champagne bg-champagne/10 text-champagne-dark'
                        : 'border-champagne/30 text-charcoal-soft'
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-12 text-sm leading-relaxed text-charcoal-soft">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

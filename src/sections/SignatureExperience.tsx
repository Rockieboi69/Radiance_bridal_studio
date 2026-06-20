import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import SectionHeading from '../components/SectionHeading'
import { fadeUp } from '../lib/motion'

const steps = [
  {
    no: '01',
    title: 'Consultation',
    text: 'We begin with an intimate conversation — understanding your vision, attire, skin and the spirit of your celebrations.',
  },
  {
    no: '02',
    title: 'Look Planning',
    text: 'Your artist curates a bespoke look board, balancing tradition, trend and your personal aesthetic.',
  },
  {
    no: '03',
    title: 'Trial Session',
    text: 'A full preview before the day, so every shade, drape and detail is perfected and confidently yours.',
  },
  {
    no: '04',
    title: 'Wedding Day Glam',
    text: 'On the day, we craft your look with calm, unhurried precision — present for every moment that matters.',
  },
  {
    no: '05',
    title: 'Final Touch-ups',
    text: 'We stay to refine and refresh, ensuring you remain radiant from first look to final farewell.',
  },
]

export default function SignatureExperience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="experience" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="The Signature Experience"
          title={
            <>
              Five steps to your{' '}
              <span className="italic gold-text">most radiant day</span>
            </>
          }
          description="A considered, white-glove journey designed to feel as effortless as it is unforgettable."
        />

        <div ref={ref} className="relative mx-auto mt-16 max-w-3xl">
          {/* Center / left rail */}
          <div className="absolute bottom-0 left-[1.15rem] top-0 w-px bg-champagne/15 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute bottom-0 left-[1.15rem] top-0 w-px origin-top bg-gradient-to-b from-champagne via-champagne to-blush md:left-1/2 md:-translate-x-1/2"
          />

          <div className="flex flex-col gap-10">
            {steps.map((s, i) => {
              const isRight = i % 2 === 1
              return (
                <motion.div
                  key={s.no}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  className={`relative flex items-start gap-6 pl-12 md:w-1/2 md:pl-0 ${
                    isRight
                      ? 'md:ml-auto md:pl-12'
                      : 'md:pr-12 md:text-right md:flex-row-reverse'
                  }`}
                >
                  {/* Node */}
                  <span
                    className={`absolute top-1 flex h-9 w-9 items-center justify-center rounded-full border border-champagne/40 bg-ivory text-[0.7rem] font-semibold text-champagne-dark shadow-soft left-0 md:left-auto ${
                      isRight ? 'md:-left-[1.15rem]' : 'md:-right-[1.15rem]'
                    }`}
                  >
                    {s.no}
                  </span>

                  <div className="card-luxe flex-1 p-6">
                    <h3 className="font-serif text-xl text-charcoal">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                      {s.text}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

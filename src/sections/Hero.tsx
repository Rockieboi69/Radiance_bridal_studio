import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import StudioImage from '../components/StudioImage'
import { FloatingPetals } from '../components/Decor'
import { fadeUp, staggerContainer } from '../lib/motion'
import { images } from '../config/images'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Parallax layers
  const yImage = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '-14%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      <FloatingPetals />

      <div className="container-luxe grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <motion.div
          style={{ y: yText, opacity }}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-xl"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            Luxury Bridal Atelier
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-[2.6rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4.1rem]"
          >
            Where Beauty Meets{' '}
            <span className="italic gold-text">Timeless Elegance</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-md text-base leading-relaxed text-charcoal-soft sm:text-lg"
          >
            Luxury bridal makeup crafted to make your most important day
            unforgettable — refined artistry, personalised for every bride.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <Link to="/book" className="btn-gold">
              Book Appointment
            </Link>
            <button
              onClick={() =>
                document
                  .getElementById('portfolio')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="btn-outline"
            >
              View Portfolio
            </button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex items-center gap-4 border-t border-champagne/20 pt-7 sm:gap-8"
          >
            <Stat value="500+" label="Brides Styled" />
            <span className="h-8 w-px bg-champagne/20" />
            <Stat value="12 yrs" label="Of Artistry" />
            <span className="h-8 w-px bg-champagne/20" />
            <Stat value="On-site" label="At Your Venue" />
          </motion.div>
        </motion.div>

        {/* Imagery */}
        <motion.div
          style={{ y: yImage }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative z-10"
        >
          <div className="relative mx-auto max-w-md">
            <StudioImage
              src={images.heroMain}
              alt="Radiance Bridal Studio signature bridal look"
              ratio="aspect-[4/5]"
              rounded="rounded-[2rem]"
              className="shadow-soft-lg"
              loading="eager"
              position="top"
            />

            {/* Floating accent card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="card-luxe absolute -left-6 bottom-12 hidden w-48 p-4 sm:block"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
                <p className="text-[0.6rem] font-semibold uppercase tracking-luxe text-champagne-dark">
                  Signature Service
                </p>
              </div>
              <p className="mt-2 font-serif text-sm italic leading-snug text-charcoal">
                HD Bridal · Hairstyling · Saree Draping
              </p>
            </motion.div>

            {/* Small floating image */}
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-6 -top-6 hidden w-32 sm:block"
            >
              <StudioImage
                src={images.heroDetail}
                alt="Bridal makeup detail by Radiance Bridal Studio"
                ratio="aspect-square"
                rounded="rounded-2xl"
                className="shadow-soft"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[0.6rem] uppercase tracking-luxe text-champagne-dark">
          Scroll
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-champagne/30">
          <motion.span
            animate={{ y: [-40, 40] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-x-0 top-0 h-4 bg-champagne"
          />
        </span>
      </motion.div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-serif text-2xl text-charcoal">{value}</span>
      <span className="text-[0.62rem] uppercase tracking-luxe text-charcoal-soft">
        {label}
      </span>
    </div>
  )
}

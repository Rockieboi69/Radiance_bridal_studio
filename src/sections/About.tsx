import { motion } from 'framer-motion'
import StudioImage from '../components/StudioImage'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { GoldDivider } from '../components/Decor'
import { fadeUp, staggerContainer } from '../lib/motion'
import { images } from '../config/images'

const pillars = [
  {
    title: 'Personalised Artistry',
    text: 'Every look is designed around your features, attire and the story of your day.',
  },
  {
    title: 'Obsessive Detail',
    text: 'From lash placement to drape pleats, nothing is left to chance.',
  },
  {
    title: 'Premium Products',
    text: 'Only luxury, skin-loving cosmetics that photograph beautifully and last.',
  },
  {
    title: 'Bridal Expertise',
    text: 'Over a decade dedicated solely to brides and their most cherished moments.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-luxe grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        {/* Imagery cluster */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-md">
            <StudioImage
              src={images.aboutPrimary}
              alt="Signature bridal artistry by Radiance Bridal Studio"
              ratio="aspect-[4/5]"
              rounded="rounded-[2rem]"
              className="shadow-soft-lg"
            />
            <div className="absolute -bottom-10 -right-6 w-40 sm:w-48">
              <StudioImage
                src={images.aboutSecondary}
                alt="Bridal look crafted by Radiance Bridal Studio"
                ratio="aspect-square"
                rounded="rounded-2xl"
                className="border-4 border-ivory shadow-soft"
              />
            </div>
            <div className="absolute -left-5 top-8 hidden h-24 w-24 rounded-full border border-champagne/30 sm:block" />
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="About Radiance"
            title={
              <>
                Bridal beauty,{' '}
                <span className="italic gold-text">elevated to an art form</span>
              </>
            }
            description="Radiance Bridal Studio is a luxury atelier devoted to the modern bride. We blend timeless technique with contemporary refinement to create looks that feel effortlessly you — radiant in person and flawless through every frame."
          />

          <GoldDivider className="mt-8 justify-start" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
          >
            {pillars.map((p) => (
              <motion.div key={p.title} variants={fadeUp} className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
                  <h3 className="font-serif text-lg text-charcoal">{p.title}</h3>
                </div>
                <p className="pl-3.5 text-sm leading-relaxed text-charcoal-soft">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

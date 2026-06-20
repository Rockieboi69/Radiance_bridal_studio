import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, staggerContainer } from '../lib/motion'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'center' | 'left'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignment =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={`flex max-w-2xl flex-col gap-5 ${alignment} ${className}`}
    >
      {eyebrow && (
        <motion.span variants={fadeUp} className="eyebrow">
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="text-3xl leading-[1.15] sm:text-4xl md:text-[2.9rem]"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className="max-w-xl text-base leading-relaxed text-charcoal-soft"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}

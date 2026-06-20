import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp } from '../lib/motion'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  /** When true, animates the element as a stagger child instead of on its own viewport trigger. */
  asChild?: boolean
}

/**
 * Scroll-triggered fade-up reveal. Wrap any block to animate it elegantly
 * the first time it enters the viewport.
 */
export default function Reveal({ children, className, delay = 0, asChild = false }: RevealProps) {
  if (asChild) {
    return (
      <motion.div variants={fadeUp} className={className}>
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

import { motion } from 'framer-motion'

interface StudioImageProps {
  src: string
  alt: string
  /** Tailwind aspect ratio class, e.g. 'aspect-[3/4]' */
  ratio?: string
  className?: string
  /** Enables the slow zoom-on-hover editorial effect. */
  zoom?: boolean
  rounded?: string
  /** Loading strategy — use 'eager' for above-the-fold imagery. */
  loading?: 'lazy' | 'eager'
}

/**
 * Real photography wrapper that mirrors ImagePlaceholder's styling
 * (rounded corners, soft sheen, editorial zoom on hover).
 */
export default function StudioImage({
  src,
  alt,
  ratio = 'aspect-[3/4]',
  className = '',
  zoom = true,
  rounded = 'rounded-[1.4rem]',
  loading = 'lazy',
}: StudioImageProps) {
  return (
    <div className={`group relative overflow-hidden ${rounded} ${ratio} ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        whileHover={zoom ? { scale: 1.06 } : undefined}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* subtle gradient + inner sheen for a premium finish */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/15 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/30" />
    </div>
  )
}

import { motion } from 'framer-motion'

interface ImagePlaceholderProps {
  label: string
  /** Tailwind aspect ratio class, e.g. 'aspect-[3/4]' */
  ratio?: string
  className?: string
  /** Enables the slow zoom-on-hover editorial effect. */
  zoom?: boolean
  rounded?: string
}

/**
 * Clearly labelled image placeholder. Replace with real photography later
 * by swapping this component for an <img> using the same wrapper classes.
 */
export default function ImagePlaceholder({
  label,
  ratio = 'aspect-[3/4]',
  className = '',
  zoom = true,
  rounded = 'rounded-[1.4rem]',
}: ImagePlaceholderProps) {
  return (
    <div className={`group relative overflow-hidden ${rounded} ${ratio} ${className}`}>
      <motion.div
        className="absolute inset-0"
        whileHover={zoom ? { scale: 1.06 } : undefined}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          backgroundImage:
            'linear-gradient(135deg, #F5E6E2 0%, #F5EFE6 45%, #EFE7D9 100%)',
        }}
      >
        {/* Subtle texture lines */}
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, rgba(201,168,106,0.05) 0px, rgba(201,168,106,0.05) 1px, transparent 1px, transparent 22px)',
          }}
        />
      </motion.div>

      {/* Label chip */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-champagne/50 bg-white/60 backdrop-blur-sm">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#A6843E"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <circle cx="8.5" cy="8.5" r="1.6" />
            <path d="m21 15-5-5L5 21" />
          </svg>
        </span>
        <span className="max-w-[80%] text-[0.7rem] font-medium uppercase tracking-luxe text-champagne-dark">
          {label}
        </span>
      </div>

      {/* Inner border sheen */}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/50" />
    </div>
  )
}

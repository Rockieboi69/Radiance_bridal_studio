/**
 * Subtle floating decorative elements — soft petals, gold dust and rings.
 * Purely ornamental and hidden from assistive tech.
 */
export function FloatingPetals({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <span className="absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-champagne/40 animate-float-slow" />
      <span className="absolute right-[12%] top-[28%] h-3 w-3 rounded-full bg-blush/50 animate-float" />
      <span className="absolute left-[22%] bottom-[22%] h-1.5 w-1.5 rounded-full bg-champagne-light/60 animate-float" />
      <span className="absolute right-[26%] bottom-[16%] h-2.5 w-2.5 rounded-full bg-blush/40 animate-float-slow" />

      {/* Soft outline ring */}
      <span className="absolute -right-10 top-1/3 h-40 w-40 rounded-full border border-champagne/15 animate-float-slow" />
      <span className="absolute -left-16 bottom-1/4 h-56 w-56 rounded-full border border-blush/20 animate-float" />
    </div>
  )
}

export function GoldDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden>
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-champagne" />
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2c1.5 4 4.5 7 8.5 8.5-4 1.5-7 4.5-8.5 8.5-1.5-4-4.5-7-8.5-8.5C7.5 9 10.5 6 12 2Z"
          fill="#C9A86A"
          opacity="0.85"
        />
      </svg>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-champagne" />
    </div>
  )
}

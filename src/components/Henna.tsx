/**
 * Hand-built henna / mehndi inspired ornamentation drawn as SVG.
 * Used as a subtle, elegant background texture across the site.
 * Purely decorative — hidden from assistive tech.
 */

const RING = 12

/** A single intricate mandala motif (mehndi style). Colour via `currentColor`. */
export function HennaMandala({ className = '' }: { className?: string }) {
  const spokes = Array.from({ length: RING })

  return (
    <svg
      viewBox="-60 -60 120 120"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.85"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {/* core flower */}
      <circle r="3.2" />
      <circle r="6.5" />

      {/* inner petal ring */}
      {spokes.map((_, i) => (
        <g key={`a${i}`} transform={`rotate(${i * (360 / RING)})`}>
          <path d="M0,-7 C 4.5,-15 4.5,-26 0,-33 C -4.5,-26 -4.5,-15 0,-7 Z" />
          <circle cx="0" cy="-36" r="1.4" fill="currentColor" stroke="none" />
        </g>
      ))}

      {/* mid scallop ring */}
      <circle r="40" strokeDasharray="0.5 3.5" />

      {/* outer paisley/teardrop ring */}
      {spokes.map((_, i) => (
        <g key={`b${i}`} transform={`rotate(${i * (360 / RING) + 15})`}>
          <path d="M0,-40 C 5,-46 5,-53 0,-57 C -5,-53 -5,-46 0,-40 Z" />
          <path d="M0,-44 C 2,-47 2,-50 0,-52 C -2,-50 -2,-47 0,-44 Z" />
        </g>
      ))}

      {/* fine outer dotted halo */}
      <circle r="56" strokeDasharray="0.4 5" />
    </svg>
  )
}

/** A flowing paisley (buti) motif for borders and accents. */
export function HennaPaisley({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 80"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M40 6c14 6 18 22 8 34-7 8-20 9-24 1 7 3 16-1 18-9 2-9-3-18-12-21-7-2-15 1-18 8-4 9 1 20 11 24-15-2-25-16-21-30C5 8 24-1 40 6Z" />
      <path d="M34 24c6 2 8 9 4 14-3 4-9 4-11 0 4 1 8-1 9-5 1-4-2-8-6-9Z" />
      <circle cx="30" cy="33" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="22" cy="58" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="46" cy="20" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Site-wide fixed henna backdrop. Renders faint mandalas and paisleys
 * anchored to the edges so content always reads clearly over them.
 */
export function HennaBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden text-champagne"
    >
      <HennaMandala className="absolute -left-28 -top-28 h-[26rem] w-[26rem] opacity-[0.13] animate-float-slow" />
      <HennaMandala className="absolute -right-32 top-[30%] h-[30rem] w-[30rem] opacity-[0.11]" />
      <HennaMandala className="absolute -left-24 bottom-[6%] h-[22rem] w-[22rem] opacity-[0.11] animate-float-slow" />
      <HennaMandala className="absolute right-[6%] top-[6%] hidden h-44 w-44 opacity-[0.1] lg:block" />

      <HennaPaisley className="absolute left-[8%] top-[44%] hidden h-28 w-28 opacity-[0.12] lg:block" />
      <HennaPaisley className="absolute right-[10%] bottom-[16%] hidden h-32 w-32 -scale-x-100 opacity-[0.12] lg:block" />
    </div>
  )
}

/**
 * Henna / mehndi inspired ornamentation drawn as SVG.
 * Used as a subtle, elegant background texture across the site.
 * Purely decorative — hidden from assistive tech. Colour via `currentColor`.
 */

/** An intricate, multi-ring henna / mehndi mandala. Colour via `currentColor`. */
export function HennaMandala({ className = '' }: { className?: string }) {
  const r8 = Array.from({ length: 8 })
  const r16 = Array.from({ length: 16 })
  const r12 = Array.from({ length: 12 })
  const r24 = Array.from({ length: 24 })

  return (
    <svg
      viewBox="-100 -100 200 200"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {/* --- core: tiny 8-petal flower --- */}
      <circle r="3.5" fill="currentColor" stroke="none" />
      {r8.map((_, i) => (
        <g key={`c${i}`} transform={`rotate(${i * 45})`}>
          <path d="M0 -5 C3 -10 3 -16 0 -20 C-3 -16 -3 -10 0 -5 Z" />
        </g>
      ))}
      <circle r="22" />

      {/* --- ring 1: 16 fine teardrop petals with tip dots --- */}
      {r16.map((_, i) => (
        <g key={`p${i}`} transform={`rotate(${i * 22.5})`}>
          <path d="M0 -22 C4 -30 4 -40 0 -46 C-4 -40 -4 -30 0 -22 Z" />
          <circle cx="0" cy="-50" r="1.4" fill="currentColor" stroke="none" />
        </g>
      ))}
      <circle r="52" strokeDasharray="0.6 3" />

      {/* --- ring 2: 12 layered lotus petals --- */}
      {r12.map((_, i) => (
        <g key={`l${i}`} transform={`rotate(${i * 30})`}>
          <path d="M0 -52 C12 -62 13 -76 0 -88 C-13 -76 -12 -62 0 -52 Z" />
          <path d="M0 -58 C5 -65 5 -74 0 -80 C-5 -74 -5 -65 0 -58 Z" />
        </g>
      ))}
      <circle r="62" />
      <circle r="90" strokeDasharray="0.6 3.5" />

      {/* --- ring 3: 12 outward paisleys offset between petals --- */}
      {r12.map((_, i) => (
        <g key={`pa${i}`} transform={`rotate(${i * 30 + 15})`}>
          <path d="M0 -64 C8 -72 9 -82 3 -90 C0 -86 -3 -76 0 -64 Z" />
          <circle cx="0" cy="-94" r="1.2" fill="currentColor" stroke="none" />
        </g>
      ))}

      {/* --- ring 4: scalloped crown border --- */}
      {r24.map((_, i) => (
        <g key={`s${i}`} transform={`rotate(${i * 15})`}>
          <path d="M-6 -92 C-3 -98 3 -98 6 -92" />
          <circle cx="0" cy="-90" r="0.8" fill="currentColor" stroke="none" />
        </g>
      ))}
      {/* fine outer dotted halo */}
      <circle r="98" strokeDasharray="0.4 5" />
    </svg>
  )
}

/**
 * Site-wide fixed henna backdrop. Renders ornate mehndi mandalas anchored
 * to the edges, with a soft veil clearing the central reading area so text
 * always stays bold and legible.
 */
export function TraditionalBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden text-[#5E3F1E]"
    >
      {/* Henna mandalas anchored to the edges */}
      <HennaMandala className="absolute -left-28 -top-28 h-[26rem] w-[26rem] opacity-[0.42] animate-float-slow" />
      <HennaMandala className="absolute -right-32 top-[32%] h-[30rem] w-[30rem] opacity-[0.38]" />
      <HennaMandala className="absolute -left-24 bottom-[6%] h-[22rem] w-[22rem] opacity-[0.38] animate-float-slow" />
      <HennaMandala className="absolute right-[5%] top-[5%] hidden h-44 w-44 opacity-[0.36] lg:block" />

      {/* Strong cream reading pool that clears the central area so text stays
          bold and legible, while the darker henna stays prominent at the edges. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1250px 860px at 50% 32%, rgba(248, 242, 228, 0.96), rgba(248, 242, 228, 0.6) 52%, rgba(248, 242, 228, 0) 78%)',
        }}
      />
    </div>
  )
}

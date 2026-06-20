import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { label: 'About', to: 'about' },
  { label: 'Services', to: 'services' },
  { label: 'Experience', to: 'experience' },
  { label: 'Portfolio', to: 'portfolio' },
  { label: 'Packages', to: 'packages' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const goToSection = (id: string) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      // wait for home to mount before scrolling
      window.setTimeout(() => scrollToId(id), 120)
    } else {
      scrollToId(id)
    }
  }

  const scrollToId = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-champagne/15 bg-ivory/85 backdrop-blur-md shadow-glass'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-luxe flex h-[4.6rem] items-center justify-between">
        {/* Brand */}
        <Link to="/" className="group flex flex-col leading-none" aria-label="Radiance Bridal Studio home">
          <span className="font-serif text-xl tracking-wide text-charcoal">
            Radiance
          </span>
          <span className="text-[0.6rem] font-medium uppercase tracking-wide2 text-champagne-dark">
            Bridal Studio
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <button
                onClick={() => goToSection(l.to)}
                className="relative text-sm font-medium text-charcoal-light transition-colors hover:text-champagne-dark after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-champagne after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/book" className="btn-gold !px-7 !py-3 text-[0.82rem]">
            Book Appointment
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-champagne/30 text-charcoal lg:hidden"
        >
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-charcoal transition-all duration-300 ${
                open ? 'top-1/2 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-px w-full bg-charcoal transition-all duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-full bg-charcoal transition-all duration-300 ${
                open ? 'bottom-1/2 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-champagne/15 bg-ivory/95 backdrop-blur-md lg:hidden"
          >
            <ul className="container-luxe flex flex-col gap-1 py-5">
              {links.map((l) => (
                <li key={l.to}>
                  <button
                    onClick={() => goToSection(l.to)}
                    className="w-full rounded-xl px-3 py-3 text-left text-base font-medium text-charcoal-light transition-colors hover:bg-champagne/10 hover:text-champagne-dark"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li className="mt-2">
                <Link to="/book" className="btn-gold w-full">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export { links as navLinks }

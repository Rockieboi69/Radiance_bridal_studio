import { Link, useNavigate, useLocation } from 'react-router-dom'
import { siteConfig } from '../config/site'
import { GoldDivider } from './Decor'
import { Icon } from './Icons'

const quickLinks = [
  { label: 'About', to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Portfolio', to: 'portfolio' },
  { label: 'Packages', to: 'packages' },
  { label: 'Contact', to: 'contact' },
]

const services = [
  'HD Bridal Makeup',
  'Traditional Looks',
  'Reception Looks',
  'Hairstyling',
  'Saree Draping',
]

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const goToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/')
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 120)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const socials = [
    { icon: 'instagram' as const, href: siteConfig.social.instagram, label: 'Instagram' },
    { icon: 'whatsapp' as const, href: siteConfig.social.whatsapp, label: 'WhatsApp' },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-champagne/15 bg-charcoal text-ivory">
      <div className="container-luxe py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex flex-col leading-none">
              <span className="font-serif text-2xl tracking-wide text-ivory">Radiance</span>
              <span className="text-[0.6rem] font-medium uppercase tracking-wide2 text-champagne-light">
                Bridal Studio
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-ivory/60">
              A luxury bridal atelier crafting timeless, radiant looks for the
              modern bride.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-all duration-300 hover:-translate-y-1 hover:border-champagne hover:text-champagne-light"
                >
                  <Icon name={s.icon} className="" size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <FooterColumn title="Quick Links">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <button
                  onClick={() => goToSection(l.to)}
                  className="text-sm text-ivory/60 transition-colors hover:text-champagne-light"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </FooterColumn>

          {/* Services */}
          <FooterColumn title="Services">
            {services.map((s) => (
              <li key={s} className="text-sm text-ivory/60">
                {s}
              </li>
            ))}
          </FooterColumn>

          {/* Contact */}
          <FooterColumn title="Contact">
            <li className="text-sm leading-relaxed text-ivory/60">
              {siteConfig.contact.address}
            </li>
            <li>
              <a
                href={`tel:${siteConfig.contact.phoneHref}`}
                className="text-sm text-ivory/60 transition-colors hover:text-champagne-light"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-sm text-ivory/60 transition-colors hover:text-champagne-light"
              >
                {siteConfig.contact.email}
              </a>
            </li>
          </FooterColumn>
        </div>

        <GoldDivider className="mt-14" />

        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-center text-xs text-ivory/40 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Radiance Bridal Studio. All rights reserved.</p>
          <p>Crafted with care for unforgettable brides.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-[0.7rem] font-semibold uppercase tracking-luxe text-champagne-light">
        {title}
      </h4>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  )
}

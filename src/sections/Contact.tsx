import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { siteConfig } from '../config/site'
import { Icon } from '../components/Icons'

export default function Contact() {
  const { contact, social } = siteConfig

  const details = [
    { icon: 'pin' as const, label: 'Studio Address', value: contact.address },
    { icon: 'phone' as const, label: 'Phone', value: contact.phoneDisplay, href: `tel:${contact.phoneHref}` },
    { icon: 'mail' as const, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: 'clock' as const, label: 'Studio Hours', value: contact.hours },
  ]

  const socials = [
    { icon: 'whatsapp' as const, label: 'WhatsApp', href: social.whatsapp },
    { icon: 'instagram' as const, label: 'Instagram', href: social.instagram },
  ]

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Get In Touch"
          title={
            <>
              Let's begin your{' '}
              <span className="italic gold-text">bridal story</span>
            </>
          }
          description="Reach out to check availability, ask a question, or simply share your vision. We would love to hear from you."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Details */}
          <Reveal className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {details.map((d) => (
                <div key={d.label} className="card-luxe flex flex-col gap-3 p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blush-light ring-1 ring-champagne/20">
                    <Icon name={d.icon} />
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-luxe text-champagne-dark">
                    {d.label}
                  </span>
                  {d.href ? (
                    <a
                      href={d.href}
                      className="text-sm leading-relaxed text-charcoal-light transition-colors hover:text-champagne-dark"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="text-sm leading-relaxed text-charcoal-light">{d.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="card-luxe flex flex-col gap-4 p-6">
              <span className="text-[0.65rem] uppercase tracking-luxe text-champagne-dark">
                Follow The Artistry
              </span>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-champagne/30 text-charcoal-light transition-all duration-300 hover:-translate-y-1 hover:border-champagne hover:bg-champagne/10 hover:text-champagne-dark"
                  >
                    <Icon name={s.icon} />
                  </a>
                ))}
              </div>
              <Link to="/book" className="btn-gold mt-2 w-full sm:w-auto sm:self-start">
                Book Your Appointment
              </Link>
            </div>
          </Reveal>

          {/* Live Google Map */}
          <Reveal delay={0.1}>
            <div className="relative flex h-full min-h-[22rem] flex-col overflow-hidden rounded-[1.8rem] border border-white/60 shadow-glass">
              <iframe
                title="Radiance Bridal Studio location on Google Maps"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  contact.address,
                )}&z=16&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grow border-0"
                style={{ minHeight: '18rem' }}
              />
              <a
                href={contact.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-t border-champagne/20 bg-white/80 px-5 py-3.5 text-sm font-semibold text-charcoal backdrop-blur-sm transition-colors hover:bg-champagne/10 hover:text-champagne-dark"
              >
                <Icon name="pin" size={18} />
                Get Directions
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

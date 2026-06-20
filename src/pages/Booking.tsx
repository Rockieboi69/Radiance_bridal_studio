import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { siteConfig } from '../config/site'
import StudioImage from '../components/StudioImage'
import { FloatingPetals, GoldDivider } from '../components/Decor'
import { fadeUp, staggerContainer } from '../lib/motion'
import { images } from '../config/images'

interface FormState {
  name: string
  phone: string
  email: string
  eventType: string
  date: string
  time: string
  location: string
  message: string
}

const initialState: FormState = {
  name: '',
  phone: '',
  email: '',
  eventType: '',
  date: '',
  time: '',
  location: '',
  message: '',
}

const eventTypes = [
  'Bridal Makeup',
  'Engagement',
  'Reception',
  'Pre-wedding / Trial',
  'Other Event',
]

type Errors = Partial<Record<keyof FormState, string>>

export default function Booking() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }))
      setErrors((prev) => ({ ...prev, [key]: undefined }))
    }

  const validate = (): boolean => {
    const next: Errors = {}

    if (!form.name.trim()) next.name = 'Please enter your name'
    else if (form.name.trim().length < 2) next.name = 'Name looks too short'

    const phoneDigits = form.phone.replace(/\D/g, '')
    if (!form.phone.trim()) next.phone = 'Please enter your phone number'
    else if (phoneDigits.length < 10) next.phone = 'Enter a valid phone number'

    if (!form.email.trim()) next.email = 'Please enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'Enter a valid email address'

    if (!form.eventType) next.eventType = 'Select an event type'
    if (!form.date) next.date = 'Choose a preferred date'
    if (!form.time) next.time = 'Choose a preferred time'
    if (!form.location.trim()) next.location = 'Please enter a location'
    if (!form.message.trim()) next.message = 'Tell us a little about your requirements'

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const buildWhatsAppUrl = (): string => {
    const message = [
      'Hello Radiance Bridal Studio,',
      'I would like to book an appointment.',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Event Type: ${form.eventType}`,
      `Date: ${form.date}`,
      `Time: ${form.time}`,
      `Location: ${form.location}`,
      `Requirements: ${form.message}`,
      '',
      'Please contact me regarding availability.',
      'Thank you.',
    ].join('\n')

    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const url = buildWhatsAppUrl()
    setSubmitted(true)
    // Allow the success animation a beat before redirecting.
    window.setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer')
    }, 1400)
  }

  const resetForm = () => {
    setForm(initialState)
    setErrors({})
    setSubmitted(false)
  }

  return (
    <div className="relative overflow-hidden pb-24 pt-28 sm:pt-32">
      <FloatingPetals />

      <div className="container-luxe">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow mx-auto">
            Book Your Appointment
          </motion.span>
          <motion.h1 variants={fadeUp} className="mt-5 text-4xl sm:text-5xl">
            Reserve your <span className="italic gold-text">radiant day</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-charcoal-soft"
          >
            Share a few details and we'll continue the conversation on WhatsApp to
            confirm availability and craft your bespoke experience.
          </motion.p>
          <GoldDivider className="mt-7" />
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-[1fr_0.7fr]">
          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="card-luxe relative overflow-hidden p-7 sm:p-10"
          >
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Bride Name"
                  value={form.name}
                  onChange={update('name')}
                  error={errors.name}
                  placeholder="Your full name"
                />
                <Field
                  id="phone"
                  label="Phone Number"
                  type="tel"
                  value={form.phone}
                  onChange={update('phone')}
                  error={errors.phone}
                  placeholder="+91 ..."
                />
              </div>

              <Field
                id="email"
                label="Email"
                type="email"
                value={form.email}
                onChange={update('email')}
                error={errors.email}
                placeholder="you@example.com"
              />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <SelectField
                  id="eventType"
                  label="Event Type"
                  value={form.eventType}
                  onChange={update('eventType')}
                  error={errors.eventType}
                  options={eventTypes}
                />
                <Field
                  id="location"
                  label="Location"
                  value={form.location}
                  onChange={update('location')}
                  error={errors.location}
                  placeholder="City / venue"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  id="date"
                  label="Preferred Date"
                  type="date"
                  value={form.date}
                  onChange={update('date')}
                  error={errors.date}
                />
                <Field
                  id="time"
                  label="Preferred Time"
                  type="time"
                  value={form.time}
                  onChange={update('time')}
                  error={errors.time}
                />
              </div>

              <TextAreaField
                id="message"
                label="Message / Requirements"
                value={form.message}
                onChange={update('message')}
                error={errors.message}
                placeholder="Tell us about your looks, number of people, timings, inspirations and anything else you'd love us to know..."
              />

              <button type="submit" className="btn-gold mt-2 w-full">
                <span>Send Booking Request</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Z" />
                </svg>
              </button>

              <p className="text-center text-xs text-charcoal-soft">
                Your request opens a pre-filled WhatsApp message — no details are
                stored on this site.
              </p>
            </form>
          </motion.div>

          {/* Side panel */}
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <StudioImage
              src={images.bookingSide}
              alt="Bridal look by Radiance Bridal Studio"
              ratio="aspect-[4/5]"
              rounded="rounded-[1.8rem]"
              className="shadow-soft-lg"
              position="top"
            />
            <div className="card-luxe flex flex-col gap-3 p-6">
              <h3 className="font-serif text-lg text-charcoal">What happens next?</h3>
              <ul className="flex flex-col gap-2.5 text-sm text-charcoal-soft">
                {[
                  'We receive your details on WhatsApp',
                  'Our team confirms date availability',
                  'We share a tailored proposal',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/"
            className="text-sm text-charcoal-soft transition-colors hover:text-champagne-dark"
          >
            ← Back to home
          </Link>
        </div>
      </div>

      {/* Success overlay */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/40 px-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.85, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 240, damping: 22 }}
              className="relative w-full max-w-sm rounded-[1.8rem] bg-ivory p-9 text-center shadow-soft-lg"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: 'spring', stiffness: 260, damping: 16 }}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-champagne to-champagne-dark text-ivory"
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <motion.path
                    d="M20 6 9 17l-5-5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
                  />
                </svg>
              </motion.span>
              <h3 className="mt-6 font-serif text-2xl text-charcoal">
                Request ready!
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">
                Opening WhatsApp to send your booking request to Radiance Bridal
                Studio. If it doesn't open automatically, use the button below.
              </p>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-6 w-full"
              >
                Open WhatsApp
              </a>
              <button
                onClick={resetForm}
                className="mt-3 text-xs text-charcoal-soft transition-colors hover:text-champagne-dark"
              >
                Make another request
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ── Field primitives ─────────────────────────────────────────────── */

interface BaseFieldProps {
  id: keyof FormState
  label: string
  value: string
  error?: string
}

const fieldClasses = (hasError?: boolean) =>
  `w-full rounded-xl border bg-white/70 px-4 py-3 text-sm text-charcoal placeholder:text-charcoal-soft/50 outline-none transition-all duration-300 focus:bg-white focus:ring-2 ${
    hasError
      ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
      : 'border-champagne/25 focus:border-champagne focus:ring-champagne/20'
  }`

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-[0.7rem] font-semibold uppercase tracking-luxe text-champagne-dark"
    >
      {children}
    </label>
  )
}

function ErrorText({ msg }: { msg?: string }) {
  return (
    <AnimatePresence>
      {msg && (
        <motion.span
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="text-xs text-red-400"
        >
          {msg}
        </motion.span>
      )}
    </AnimatePresence>
  )
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = 'text',
  placeholder,
}: BaseFieldProps & {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  placeholder?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={!!error}
        className={fieldClasses(!!error)}
      />
      <ErrorText msg={error} />
    </div>
  )
}

function SelectField({
  id,
  label,
  value,
  onChange,
  error,
  options,
}: BaseFieldProps & {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: string[]
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        className={`${fieldClasses(!!error)} appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat`}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23A6843E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
        }}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ErrorText msg={error} />
    </div>
  )
}

function TextAreaField({
  id,
  label,
  value,
  onChange,
  error,
  placeholder,
}: BaseFieldProps & {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={5}
        aria-invalid={!!error}
        className={`${fieldClasses(!!error)} resize-none`}
      />
      <ErrorText msg={error} />
    </div>
  )
}

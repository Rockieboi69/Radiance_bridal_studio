/**
 * Central site configuration.
 * Update brand contact details, social links and the WhatsApp number here.
 *
 * WHATSAPP_NUMBER must be in full international format WITHOUT the leading '+',
 * spaces or dashes. Example for India: '919876543210'
 */
export const siteConfig = {
  brand: 'Radiance Bridal Studio',
  tagline: 'Where Beauty Meets Timeless Elegance',

  // ── Booking / WhatsApp ──────────────────────────────────────────────
  // Used to build the WhatsApp deep link on the booking page.
  // Full international format (no '+', spaces or dashes). 91 = India.
  whatsappNumber: '919321387033',

  // ── Contact details (placeholders — replace with real values) ───────
  contact: {
    phoneDisplay: '+91 93213 87033',
    phoneHref: '+919321387033',
    email: 'hello@radiancebridalstudio.com',
    address:
      '1st Floor, Netaji Road, Opposite Srinivasa Perumal Kovil, Pappanaickenpalayam, Coimbatore, Tamil Nadu 641037',
    hours: 'Mon – Sat · 10:00 AM – 8:00 PM (By appointment)',
    // Shareable Google Maps link (opens directions / full map).
    mapLink: 'https://maps.app.goo.gl/Simy9sUwCg6Lz7so6',
  },

  // ── Social links ────────────────────────────────────────────────────
  social: {
    instagram:
      'https://www.instagram.com/radiance_bridal_studio?igsh=ZmJhaWZkM3JyMDU1',
    whatsapp: 'https://wa.me/919321387033',
  },
} as const

export type SiteConfig = typeof siteConfig

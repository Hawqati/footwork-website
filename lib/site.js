export const site = {
  name: 'FOOTWORK ACADEMY',
  fullName: 'FOOTWORK ACADEMY — Dutch Football Performance',
  location: "’t Gooi",
  tagline: 'BUILD THE ATHLETE. IMPROVE THE PLAYER.',
  promise: 'Sterker • Sneller • Explosiever • Weerbaarder',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@footworkacademy.nl',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM || '@footworkacademy',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '',
  domain: process.env.NEXT_PUBLIC_SITE_URL || 'https://footwork-website.vercel.app',
};

export const mainNav = [
  { href: '/methode', label: 'Methode' },
  { href: '/trainingen-prijzen', label: 'Trainingen' },
  { href: '/footwork-8', label: 'FOOTWORK 8' },
  { href: '/performance-test', label: 'Test' },
  { href: '/voor-clubs', label: 'Clubs' },
  { href: '/over-ons', label: 'Over ons' },
];

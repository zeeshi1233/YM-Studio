export type CategorySlug =
  | 'makeup'
  | 'lash-brow-waxing'
  | 'skin'
  | 'hair'
  | 'henna'
  | 'beauty-education';

export interface ServiceDetail {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  price: string;
  priceNote?: string;
  image: string;
  popular?: boolean;
  unavailable?: boolean;
  tags?: string[];
  includes?: string[];
  duration?: string;
}

export interface ServiceCategory {
  id: CategorySlug;
  slug: CategorySlug;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  image: string;
  accent: string;
  navLabel: string;
  services: ServiceDetail[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'makeup',
    slug: 'makeup',
    name: 'Makeup Artistry',
    shortName: 'Makeup',
    navLabel: 'Makeup',
    tagline: 'Bridal, soft glam & occasion looks',
    description:
      'HD bridal makeup, event glam, soft and natural looks — tailored for every occasion, including mobile makeup across Victoria.',
    image: '/images/bridal-hero-sharp.png',
    accent: '#1FD1B2',
    services: [
      {
        id: 'bridal-makeup',
        slug: 'bridal-makeup',
        name: 'Bridal Makeup',
        subtitle: 'Your dream bridal look for your special day',
        description:
          'Bespoke HD bridal artistry engineered to photograph flawlessly and last 16+ hours. Includes skin prep, custom lashes and touch-up guidance.',
        longDescription:
          'From soft romantic bridal to full glam, we design a look that feels like you — waterproof, camera-ready and timed for your wedding schedule. Mobile bridal makeup available across Melbourne & Victoria.',
        price: 'Custom Quote',
        image: '/images/bridal-makeup.png',
        popular: true,
        tags: ['Bridal', 'Mobile available'],
        includes: ['Premium skin prep', 'Custom lash application', 'Long-wear HD finish', 'Touch-up protocol'],
      },
      {
        id: 'event-glam',
        slug: 'event-glam',
        name: 'Event & Occasion Glam',
        subtitle: 'Camera-ready for every celebration',
        description:
          'Striking, sophisticated makeup for galas, birthdays and formal events with sculpted complexion and radiant eyes.',
        price: '$110',
        image: '/images/event-glam.png',
        popular: true,
        tags: ['Events'],
      },
      {
        id: 'soft-glam',
        slug: 'soft-glam',
        name: 'Soft Glam Makeup',
        subtitle: 'Ethereal, luminous elegance',
        description:
          'Soft blended neutrals, feathered brows and fluttery lashes that elevate natural features with a luminous glow.',
        price: '$95',
        image: '/images/soft-glam.png',
        tags: ['Soft glam'],
      },
      {
        id: 'natural-glam',
        slug: 'natural-glam',
        name: 'Natural Glam Makeup',
        subtitle: 'Fresh polished no-makeup makeup',
        description:
          'Lightweight dewy finish for daytime events, headshots and effortless everyday polish.',
        price: '$85',
        image: '/images/natural-glam.png',
        tags: ['Natural'],
      },
      {
        id: 'addon-lashes',
        slug: 'luxury-lash-addon',
        name: 'Luxury Lash Add-On',
        subtitle: 'Hand-crafted flutter lashes',
        description: 'Mink-feel, cluster or strip lashes customised to your eye shape.',
        price: '$15 – $25',
        image: '/images/lash-tint.png',
      },
      {
        id: 'nail-paint',
        slug: 'express-nail-paint',
        name: 'Express Nail Paint',
        subtitle: 'Matching salon finish',
        description: 'Precision cuticle care and lacquer or gel finish to match your glam.',
        price: '$25',
        image: '/images/makeup-atelier.png',
      },
    ],
  },
  {
    id: 'lash-brow-waxing',
    slug: 'lash-brow-waxing',
    name: 'Lash, Brow & Waxing',
    shortName: 'Lash & Brow',
    navLabel: 'Lash & Brow',
    tagline: 'Tint, laminate & precision waxing',
    description:
      'In-studio lash tint, brow tint & lamination, plus face and body waxing priced per area.',
    image: '/images/brow-lamination.png',
    accent: '#B829A0',
    services: [
      {
        id: 'lash-tint',
        slug: 'lash-tint',
        name: 'Lash Tint',
        subtitle: 'Darker defined lashes without mascara',
        description: 'Professional lash tint for a wide-awake, mascara-free finish that lasts weeks.',
        price: '$25',
        image: '/images/lash-tint.png',
      },
      {
        id: 'brow-tint',
        slug: 'brow-tint',
        name: 'Brow Tint',
        subtitle: 'Richer colour and fuller brows',
        description: 'Custom brow tint that fills sparse areas and frames the eyes.',
        price: '$25',
        image: '/images/brow-lamination.png',
      },
      {
        id: 'lash-brow-package',
        slug: 'lash-brow-package',
        name: 'Lash & Brow Package',
        subtitle: 'Tinted lashes and brows together',
        description: 'Lash tint plus brow tint for balanced, camera-ready definition.',
        price: '$45',
        image: '/images/lash-tint.png',
        popular: true,
      },
      {
        id: 'brow-lamination',
        slug: 'brow-lamination',
        name: 'Brow Lamination',
        subtitle: 'Fluffy brushed-up brows',
        description: 'Keratin brow lamination that lifts and sets hairs for 6–8 weeks.',
        price: '$40',
        image: '/images/brow-lamination.png',
        popular: true,
      },
      {
        id: 'brow-lamination-tint',
        slug: 'brow-lamination-tint',
        name: 'Brow Lamination with Tint',
        subtitle: 'Lifted shape with richer colour',
        description: 'Lamination plus custom tint for fuller, darker, perfectly set brows.',
        price: '$60',
        image: '/images/brow-lamination.png',
        popular: true,
      },
      {
        id: 'brow-lamination-tint-shaping',
        slug: 'brow-lamination-tint-shaping',
        name: 'Brow Lamination, Tint & Shaping',
        subtitle: 'Complete brow transformation',
        description: 'Lamination, tint and precision shaping in one appointment.',
        price: 'Enquire',
        image: '/images/brow-lamination.png',
      },
      {
        id: 'wax-full-body',
        slug: 'full-body-wax',
        name: 'Full Body Wax',
        subtitle: 'Complete waxing package',
        description: 'Full body waxing for a smooth, salon finish. Other areas available individually.',
        price: '$100',
        image: '/images/waxing-spa.png',
        popular: true,
        tags: ['Waxing'],
      },
      {
        id: 'wax-brazilian',
        slug: 'brazilian-wax',
        name: 'Brazilian Wax',
        subtitle: 'Precise hygienic waxing',
        description: 'Professional Brazilian wax with hygiene-first technique.',
        price: '$45',
        image: '/images/waxing-spa.png',
        tags: ['Waxing'],
      },
      {
        id: 'wax-face-body',
        slug: 'face-body-waxing',
        name: 'Face & Body Waxing Menu',
        subtitle: 'Eyebrow, lip, arms, legs & more',
        description:
          'Eyebrow $15 · Side $15 · Upper lip $10 · Chin $20 · Full face $45 · Under arms $15 · Half arms $25 · Full arms $35 · Half legs $30 · Full legs $45 · Back $35 · Stomach $25 · Chest $25 · Bikini line $25',
        price: 'From $10',
        image: '/images/waxing-spa.png',
        tags: ['Waxing'],
      },
    ],
  },
  {
    id: 'skin',
    slug: 'skin',
    name: 'Skin Treatments & Facials',
    shortName: 'Skin',
    navLabel: 'Skin',
    tagline: 'HydraFacial, peels & clinical glow',
    description:
      'Deep cleansing facials, HydraFacial, microdermabrasion, peels, LED therapy and clinical add-ons. Free 10-minute skin consultation with any facial.',
    image: '/images/skin-treatment-sharp.png',
    accent: '#1FD1B2',
    services: [
      {
        id: 'hydra-infusion',
        slug: 'hydra-facial',
        name: 'Hydra-Infusion / Hydro-Dermabrasion',
        subtitle: 'Deep cleanse, hydrate & serum infusion',
        description:
          'Multi-step clinical treatment that cleanses, exfoliates, extracts and infuses serums for glass-skin results with zero downtime.',
        price: 'From $65',
        priceNote: '30 min $65 · 1 hr $85',
        duration: '30–60 min',
        image: '/images/skin-treatment-sharp.png',
        popular: true,
        tags: ['Clinical'],
      },
      {
        id: 'microdermabrasion',
        slug: 'microdermabrasion',
        name: 'Diamond Microdermabrasion',
        subtitle: 'Diamond-tip resurfacing',
        description: 'Polishes away dead cells to refine texture, dullness and fine lines.',
        price: 'From $65',
        priceNote: '30 min $65 · 1 hr $85',
        duration: '30–60 min',
        image: '/images/skin-treatment-sharp.png',
        tags: ['Clinical'],
      },
      {
        id: 'chemical-peels',
        slug: 'chemical-peels',
        name: 'Chemical Peels (AHA / BHA / TCA)',
        subtitle: 'Targeted cellular renewal',
        description: 'Custom acid peels for pigmentation, breakouts and collagen turnover.',
        price: '$90',
        duration: '30–45 min',
        image: '/images/skin-treatment-sharp.png',
      },
      {
        id: 'led-light-therapy',
        slug: 'led-light-therapy',
        name: 'LED Light Therapy Facial',
        subtitle: 'Blue & red light regeneration',
        description: 'Purifying blue light and anti-aging red/NIR light therapy.',
        price: '$45',
        duration: '30–40 min',
        image: '/images/skin-treatment-sharp.png',
      },
      {
        id: 'classic-european',
        slug: 'classic-european-facial',
        name: 'Classic European Facial',
        subtitle: 'Deep relaxation and skin health',
        description: 'Dual cleanse, exfoliation, extractions, massage and customised mask.',
        price: '$50',
        duration: '45 min',
        image: '/images/skin-treatment-sharp.png',
        popular: true,
      },
      {
        id: 'basic-3-steps',
        slug: 'basic-3-step-facial',
        name: 'Basic 3-Step Facial',
        subtitle: 'Essential skin reset',
        description: 'Deep cleanse, gentle exfoliation and hydrating or detox mask.',
        price: '$35',
        duration: '40 min',
        image: '/images/skin-treatment-sharp.png',
      },
      {
        id: 'face-lift-aroma',
        slug: 'face-lift-aroma-facial',
        name: 'Face Lift Aroma Massage Facial',
        subtitle: 'Lifting massage & aromatherapy',
        description: 'Sculpting facial massage with botanicals for lymphatic drainage and glow.',
        price: '$100',
        duration: '45–60 min',
        image: '/images/skin-treatment-sharp.png',
        popular: true,
      },
      {
        id: 'acne-clarifying',
        slug: 'acne-clarifying-facial',
        name: 'Acne-Clarifying Clinical Facial',
        subtitle: 'For congested & blemish-prone skin',
        description: 'Ultrasonic extractions, high-frequency and calming actives for acne-prone skin.',
        price: '$80',
        duration: '45 min',
        image: '/images/skin-treatment-sharp.png',
      },
      {
        id: 'anti-aging-firming',
        slug: 'anti-aging-firming-facial',
        name: 'Anti-Aging Firming & Peptide Facial',
        subtitle: 'Elasticity and peptide infusion',
        description: 'Peptide serums, Gua Sha and collagen-firming mask to tone and restore.',
        price: '$100',
        duration: '45 min',
        image: '/images/skin-treatment-sharp.png',
      },
    ],
  },
  {
    id: 'hair',
    slug: 'hair',
    name: 'Hair Styling & Cuts',
    shortName: 'Hair',
    navLabel: 'Hair',
    tagline: 'Sleek, curls, updos & cuts',
    description: 'Straight & sleek, Hollywood curls, bridal updos, braids, trimming and style cuts. Pricing depends on hair length & volume.',
    image: '/images/makeup-application-sharp.png',
    accent: '#D4AF37',
    services: [
      {
        id: 'hair-straight',
        slug: 'straight-sleek',
        name: 'Straight & Sleek',
        subtitle: 'Glass-like smoothing',
        description: 'Ultra-glossy smoothing with thermal shield protection and frizz control.',
        price: 'Quote on length',
        image: '/images/makeup-application-sharp.png',
      },
      {
        id: 'hair-curls',
        slug: 'hollywood-curls',
        name: 'Voluminous & Hollywood Curls',
        subtitle: 'Waves & bombshell curls',
        description: 'Textured waves, bombshell curls or vintage Hollywood waves.',
        price: 'Quote on length',
        image: '/images/makeup-application-sharp.png',
      },
      {
        id: 'hair-buns',
        slug: 'bridal-updos',
        name: 'Bridal & Formal Updos / Buns',
        subtitle: 'Chignons, textured buns & pinned looks',
        description: 'Structured and romantic updos for weddings and formal events.',
        price: 'Quote on length',
        image: '/images/bridal-hero-sharp.png',
        popular: true,
      },
      {
        id: 'hair-braids',
        slug: 'hair-braids',
        name: 'Intricate Hair Braids',
        subtitle: 'Fishtail, Dutch, crown & boho',
        description: 'Festival, function and wedding-ready braid styles.',
        price: 'Quote on length',
        image: '/images/makeup-application-sharp.png',
      },
      {
        id: 'hair-trimming',
        slug: 'split-end-trimming',
        name: 'Split-End Hair Trimming',
        subtitle: 'Refresh dead ends',
        description: 'Precision maintenance trim to preserve length and refresh ends.',
        price: 'Quote on length',
        image: '/images/makeup-application-sharp.png',
      },
      {
        id: 'hair-style-cut',
        slug: 'any-style-cut',
        name: 'Any Style Cut',
        subtitle: 'Custom cut & face framing',
        description: 'Haircut crafted for your aesthetic and texture.',
        price: 'Quote on length',
        image: '/images/makeup-application-sharp.png',
      },
    ],
  },
  {
    id: 'henna',
    slug: 'henna',
    name: 'Henna & Mehndi Artistry',
    shortName: 'Henna',
    navLabel: 'Henna',
    tagline: 'Beautifully handcrafted. Meaningfully celebrated.',
    description:
      'Handcrafted henna for weddings, brides, birthdays, parties, corporate events and special celebrations. Custom designs, bridal henna, guest henna and event bookings — pricing on enquiry.',
    image: '/images/henna-bridal.png',
    accent: '#D4AF37',
    services: [
      {
        id: 'bridal-henna',
        slug: 'bridal-henna',
        name: 'Bridal Henna & Mehndi',
        subtitle: 'Handcrafted bridal designs',
        description:
          'Custom bridal henna for your wedding celebrations — designed for your preferred coverage, style and guests including bridesmaids and family.',
        longDescription:
          'Make your wedding celebrations even more special with beautifully handcrafted bridal henna. Bookings are customised by design, coverage, number of people and event requirements.',
        price: 'Enquire',
        image: '/images/henna-bridal.png',
        popular: true,
        tags: ['Bridal', 'Weddings'],
        includes: ['Custom design consult', 'Bridal coverage options', 'Bridesmaids & guest add-ons'],
      },
      {
        id: 'event-henna',
        slug: 'event-henna',
        name: 'Event Henna Experience',
        subtitle: 'Interactive guest henna',
        description:
          'Personalised henna for parties, birthdays, corporate events, cultural celebrations and private functions — individual guests or larger groups.',
        price: 'Enquire',
        image: '/images/henna-bridal.png',
        tags: ['Events', 'Parties'],
      },
      {
        id: 'henna-workshop',
        slug: 'henna-workshops',
        name: 'Henna Experiences & Workshops',
        subtitle: 'Learn & celebrate together',
        description: 'Henna experiences and workshops for community, corporate and special events.',
        price: 'Enquire',
        image: '/images/henna-bridal.png',
        tags: ['Workshops'],
      },
    ],
  },
  {
    id: 'beauty-education',
    slug: 'beauty-education',
    name: 'Beauty Education',
    shortName: 'Academy',
    navLabel: 'Academy',
    tagline: 'Learn makeup. Build confidence. Elevate your skills.',
    description:
      'Practical, hands-on makeup training for beginners, beauty enthusiasts and aspiring artists. Online and face-to-face options with a YM Studios Certificate of Completion.',
    image: '/images/makeup-education.png',
    accent: '#F472B6',
    services: [
      {
        id: 'personal-makeup-grooming',
        slug: 'personal-makeup-grooming',
        name: 'Personal Makeup & Grooming',
        subtitle: 'Practical personal makeup training',
        description:
          'Learn how to confidently create your own everyday, natural or glam makeup look. Perfect for anyone wanting to improve personal makeup skills.',
        longDescription:
          'Build everyday confidence with guided training in skin prep, complexion, eyes and finishing. Choose online learning or face-to-face coaching.',
        price: 'From $50',
        priceNote: 'Online from $50 · Face-to-Face from $75',
        image: '/images/makeup-education.png',
        tags: ['Online', 'Face-to-Face'],
        includes: ['Everyday & glam looks', 'Product & brush guidance', 'Personalised application tips'],
      },
      {
        id: 'makeup-for-beginners',
        slug: 'makeup-for-beginners',
        name: 'Makeup for Beginners',
        subtitle: 'Practical professional makeup training',
        description:
          'A practical introduction to professional makeup techniques, products, tools and application for beginners and aspiring artists.',
        longDescription:
          'Build foundational skills across complexion, colour matching, eyes, brows and lasting makeup — with a YM Studios Certificate of Completion included.',
        price: 'From $80',
        priceNote: 'Online from $80 · Face-to-Face from $100',
        image: '/images/natural-glam.png',
        popular: true,
        tags: ['Certificate included'],
        includes: ['Certificate of Completion', 'Tools & product knowledge', 'Foundation skill building'],
      },
      {
        id: 'bridal-party-masterclass',
        slug: 'bridal-party-makeup-masterclass',
        name: 'Bridal & Party Makeup Masterclass',
        subtitle: '3-day bridal & event training',
        description:
          'Focused training in bridal and event makeup for polished, long-lasting looks suitable for weddings, parties and special occasions.',
        longDescription:
          'Take your skills further with a 3-day masterclass covering bridal workflows, long-wear techniques and camera-ready finishing. Certificate of Completion included.',
        price: '$250',
        priceNote: '3-Day Masterclass',
        duration: '3 days',
        image: '/images/bridal-makeup.png',
        popular: true,
        tags: ['Certificate included', 'Masterclass'],
        includes: ['Certificate of Completion', 'Bridal & party techniques', 'Long-lasting makeup methods'],
      },
    ],
  },
];

export const EDUCATION_LEARNING_POINTS = [
  'Skin preparation and skincare for makeup',
  'Understanding foundations and complexion products',
  'Colour matching and undertones',
  'Concealing and correcting',
  'Contouring and highlighting',
  'Eye makeup techniques',
  'Eyeliner and lash application',
  'Brow shaping and definition',
  'Blush and complexion finishing',
  'Natural, soft glam and full glam techniques',
  'Bridal and event makeup techniques',
  'Product and brush knowledge',
  'Hygiene and professional makeup practices',
  'Tips for creating long-lasting makeup',
  'Working with different skin types and face shapes',
];

export const EDUCATION_WHY = [
  {
    title: 'Practical & Skill-Focused',
    desc: 'Learn techniques you can actually use rather than simply completing theory.',
  },
  {
    title: 'Industry Experience',
    desc: 'Training by an experienced beauty therapist, dermal clinician and makeup artist.',
  },
  {
    title: 'Personalised Guidance',
    desc: 'Small-group and face-to-face learning with practical feedback.',
  },
  {
    title: 'Portfolio & Confidence Building',
    desc: 'Develop skills and knowledge you can continue practising and building upon.',
  },
  {
    title: 'Certificate of Completion',
    desc: 'Receive a YM Studios Certificate of Completion for your selected training.',
  },
];

export const CERTIFICATE_DISCLAIMER =
  '*YM Studios makeup courses are privately delivered, non-accredited skills-based programs. Successful participants receive a YM Studios Certificate of Completion. This certificate is not a nationally recognised qualification.';

export const getCategoryBySlug = (slug: string) =>
  SERVICE_CATEGORIES.find((c) => c.slug === slug);

export const getServiceBySlug = (categorySlug: string, serviceSlug: string) => {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;
  const service = category.services.find((s) => s.slug === serviceSlug);
  if (!service) return null;
  return { category, service };
};

export const findServiceEverywhere = (serviceSlug: string) => {
  for (const category of SERVICE_CATEGORIES) {
    const service = category.services.find((s) => s.slug === serviceSlug);
    if (service) return { category, service };
  }
  return null;
};

/** Keep legacy exports used by quote calculator */
export { FACIAL_ADDONS, PRODUCTS_3D } from './servicesData';

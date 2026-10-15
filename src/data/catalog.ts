export type CategorySlug =
  | 'makeup'
  | 'lash-brow-waxing'
  | 'skin'
  | 'hair'
  | 'henna'
  | 'beauty-education';

export interface StepBreakdownItem {
  step: string;
  detail: string;
}

export interface TargetOptionItem {
  title: string;
  desc: string;
}

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
  unavailableReason?: string;
  tags?: string[];
  includes?: string[];
  duration?: string;
  /** Tailwind object-position class so faces stay visible in cover crops */
  imageFocus?: string;
  treatmentTime?: string;
  downtime?: string;
  bestFor?: string;
  keyBenefits?: string[];
  stepBreakdown?: StepBreakdownItem[];
  targetOptions?: TargetOptionItem[];
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
      'HD bridal beauty, statement looks and soft glam — tailored for every occasion, including mobile services across Victoria.',
    image: '/images/bridal-hero-sharp.png',
    accent: '#1FD1B2',
    services: [
      {
        id: 'natural-soft-glam',
        slug: 'natural-soft-glam',
        name: 'Natural & Soft Glam',
        subtitle: 'Natural, everyday, and soft glam makeup',
        description:
          'Natural, everyday, and soft glam makeup designed to elevate your features with an effortless, glowing finish.',
        longDescription:
          'Luminous skin, soft neutral tones, feathered brows, and fluttery lashes. Perfect for everyday confidence, daytime celebrations, work events, or effortless evening elegance.',
        price: '$95',
        image: '/images/services/svc-soft-glam.jpg',
        imageFocus: 'object-[50%_50%]',
        popular: true,
        tags: ['Natural', 'Everyday', 'Soft Glam'],
        includes: ['Skin prep & hydration', 'Luminous skin finish', 'Soft neutral eye design', 'Lash application option'],
      },
      {
        id: 'party-special-occasion',
        slug: 'party-special-occasion',
        name: 'Party & Special Occasion',
        subtitle: 'Party, birthday, formal, evening makeup and corporate events',
        description:
          'Party, birthday, formal, evening makeup and corporate events with sculpted complexion and radiant, camera-ready eyes.',
        longDescription:
          'Striking, sophisticated artistry featuring sculpted complexion, radiant eyes, seamless contouring, and camera-ready finishing built to last through dinner, dancing, and high-flash photography.',
        price: '$220',
        image: '/images/services/svc-party-makeup.jpg',
        imageFocus: 'object-[center_22%]',
        popular: true,
        tags: ['Party', 'Birthdays', 'Formals', 'Corporate Events'],
        includes: ['HD complexion sculpting', 'Statement eye design', 'Custom lash application', 'All-night setting finish'],
      },
      {
        id: 'bridal-makeup',
        slug: 'bridal-makeup',
        name: 'Bridal Makeup',
        subtitle: 'Bridal, engagement, and bridal party',
        description:
          'Bespoke HD bridal artistry engineered to photograph flawlessly and last 16+ hours. Tailored for brides, engagements, and bridal parties.',
        longDescription:
          'From soft romantic bridal to full glam, we design a look that feels like you — waterproof, camera-ready and timed for your wedding schedule. Mobile bridal beauty available across Melbourne & Victoria.',
        price: 'Custom Quote',
        image: '/images/services/svc-bridal-makeup.jpg',
        imageFocus: 'object-[50%_18%]',
        popular: true,
        tags: ['Bridal', 'Engagement', 'Bridal Party', 'Mobile available'],
        includes: ['Premium skin prep', 'Custom lash application', 'Long-wear HD finish', 'Touch-up protocol'],
      },
      {
        id: 'photoshoot-editorial',
        slug: 'photoshoot-editorial',
        name: 'Photoshoot & Editorial',
        subtitle: 'Photoshoots, fashion, portfolios, and personal branding',
        description:
          'Photoshoots, fashion, portfolios, and personal branding (get the quote). Engineered for studio flash and high-definition photography.',
        longDescription:
          'Engineered specifically for camera lighting, studio flash, and high-resolution digital lenses. Texture-less complexion, crisp contouring, and artistic balance for agency portfolios, commercial campaigns, and personal branding shoots. Get a quote for half-day or full-day shoot bookings.',
        price: 'Custom Quote',
        priceNote: 'Get the quote for half-day / full-day shoots',
        image: '/images/IMG-20261014-WA0051.jpg',
        imageFocus: 'object-[center_25%]',
        tags: ['Photoshoots', 'Fashion', 'Portfolios', 'Personal Branding'],
        includes: ['Studio lighting calibrated base', 'On-set touchup readiness', 'High-definition finish', 'Concept styling alignment'],
      },
      {
        id: 'eye-makeup-only',
        slug: 'eye-makeup-only',
        name: 'Eye Makeup Only',
        subtitle: 'Graphic liners, eyemakeup, photoshoot eye makeup, eye enhancement',
        description:
          'Graphic liners, eyemakeup, photoshoot eye makeup, and eye enhancement for an expressive, high-impact gaze.',
        longDescription:
          'Focus purely on your eyes. Whether you want sharp graphic wings, smoky halo eyes, glitter cut creases, or photoshoot-ready lash & liner enhancements — sculpted to complement your eye shape.',
        price: '$70',
        image: '/images/IMG-20261014-WA0050.jpg',
        imageFocus: 'object-[center_30%]',
        popular: true,
        tags: ['Graphic Liners', 'Eye Makeup', 'Photoshoot Eyes', 'Eye Enhancement'],
        includes: ['Eye primer & base prep', 'Custom eye shadow design', 'Precision eyeliner styling', 'Lash application'],
      },
      {
        id: 'makeup-lessons-education',
        slug: 'makeup-lessons-education',
        name: 'Makeup Lessons & Education',
        subtitle: 'Personal lessons, beginner classes, and masterclasses',
        description:
          'Personal lessons, beginner classes, and masterclasses. Hands-on learning tailored to your skill level.',
        longDescription:
          'Step into YM Studios Academy. Learn how to master everyday makeup, proper brush handling, foundation shade matching, or train professionally for bridal and party clients. Online and face-to-face coaching with a YM Studios Certificate of Completion.',
        price: 'From $50',
        priceNote: 'Personal lessons from $50 · Masterclasses available',
        image: '/images/services/svc-edu-beginners.png',
        tags: ['Lessons', 'Beginner Classes', 'Masterclasses', 'Academy'],
        includes: ['Hands-on coaching', 'Brush & product guidance', 'Personalized step-by-step', 'Certificate of Completion'],
      },
      {
        id: 'girls-makeup',
        slug: 'girls-makeup-under-16',
        name: 'Girls (Under 16)',
        subtitle: 'Age-appropriate soft glam for young clients',
        description:
          'Gentle, youthful looks tailored for girls under 16 — soft, polished and camera-ready for parties, formals and special occasions.',
        longDescription:
          'A thoughtful, age-appropriate look designed for younger clients. Soft complexion, light definition and natural glow — perfect for school formals, birthdays and family celebrations.',
        price: '$150',
        image: '/images/services/svc-girls-makeup.png',
        tags: ['Under 16', 'Soft glam'],
        includes: ['Age-appropriate products', 'Soft natural finish', 'Light lash option if suitable'],
      },
      {
        id: 'addon-lashes',
        slug: 'luxury-lash-addon',
        name: 'Luxury Lash Add-On',
        subtitle: 'Hand-crafted flutter lashes',
        description: 'Mink-feel, cluster or strip lashes customised to your eye shape.',
        price: '$15 – $25',
        image: '/images/services/svc-lash-addon.png',
      },
      {
        id: 'nail-paint',
        slug: 'express-nail-paint',
        name: 'Express Nail Paint',
        subtitle: 'Matching salon finish',
        description: 'Precision cuticle care and lacquer or gel finish to match your glam.',
        price: '$25',
        image: '/images/services/svc-nail-paint.png',
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
        image: '/images/services/svc-brow-tint.png',
      },
      {
        id: 'lash-brow-package',
        slug: 'lash-brow-package',
        name: 'Lash & Brow Package',
        subtitle: 'Tinted lashes and brows together',
        description: 'Lash tint plus brow tint for balanced, camera-ready definition.',
        price: '$45',
        image: '/images/services/svc-lash-brow-package.png',
        popular: true,
      },
      {
        id: 'brow-lamination',
        slug: 'brow-lamination',
        name: 'Brow Lamination',
        subtitle: 'Fluffy brushed-up brows',
        description: 'Keratin brow lamination that lifts and sets hairs for 6–8 weeks.',
        price: '$40',
        image: '/images/services/svc-brow-lam-only.png',
        popular: true,
      },
      {
        id: 'brow-lamination-tint',
        slug: 'brow-lamination-tint',
        name: 'Brow Lamination with Tint',
        subtitle: 'Lifted shape with richer colour',
        description: 'Lamination plus custom tint for fuller, darker, perfectly set brows.',
        price: '$60',
        image: '/images/services/svc-brow-lam-tint.png',
        popular: true,
      },
      {
        id: 'brow-lamination-tint-shaping',
        slug: 'brow-lamination-tint-shaping',
        name: 'Brow Lamination, Tint & Shaping',
        subtitle: 'Complete brow transformation',
        description: 'Lamination, tint and precision shaping in one appointment.',
        price: 'Enquire',
        image: '/images/services/svc-brow-full.png',
      },
      {
        id: 'wax-full-body',
        slug: 'full-body-wax',
        name: 'Full Body Wax',
        subtitle: 'Complete waxing package',
        description: 'Full body waxing for a smooth, salon finish. Other areas available individually.',
        price: '$100',
        image: '/images/services/svc-wax-fullbody.png',
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
        image: '/images/services/svc-wax-brazilian.png',
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
        image: '/images/services/svc-wax-facebody.png',
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
    tagline: 'Hydrodermabrasion, customized facials & clinical glow',
    description:
      'Hydrodermabrasion, microdermabrasion, chemical peels, classic European & customized facials. Free 10-minute skin consultation with any facial.',
    image: '/images/services/svc-hydra.png',
    accent: '#1FD1B2',
    services: [
      {
        id: 'hydrodermabrasion',
        slug: 'hydrodermabrasion',
        name: 'Hydrodermabrasion',
        subtitle: 'Gentle exfoliation & serum-infusion treatment',
        description:
          'An advanced, gentle exfoliation and serum-infusion treatment that deeply cleanses pores and delivers maximum hydration for radiant skin.',
        longDescription:
          'Hydrodermabrasion combines gentle suction with fluid infusion to gently dislodge blackheads, clear congested pores, and saturate thirsty skin with concentrated hyaluronic acid, botanical extracts, and antioxidant serums. Ideal for immediate glass-skin results with no downtime.',
        price: 'From $65',
        priceNote: '30 min $65 · 1 hr $85',
        duration: '30–60 min',
        treatmentTime: '30-60 minutes',
        bestFor: 'All skin types, including sensitive and dry skin.',
        downtime: 'No downtime',
        keyBenefits: [
          'Deeply hydrates',
          'Unclogs & tightens pores',
          'Smooths texture',
          'Plumps & brightens',
        ],
        image: '/images/services/svc-hydra.png',
        popular: true,
        tags: ['Clinical', 'Hydration', 'Pore Cleansing'],
      },
      {
        id: 'microdermabrasion',
        slug: 'microdermabrasion',
        name: 'Microdermabrasion',
        subtitle: 'Advanced physical resurfacing for smooth healthy skin',
        description:
          'An advanced physical exfoliation treatment designed to resurface skin, clear pores, and restore a smooth, healthy glow.',
        longDescription:
          'Using specialized precision exfoliation with vacuum suction, this treatment polishes away dead epidermal layers, stimulates cellular turnover, unclogs stubborn pores, and leaves the complexion velvety smooth with an instant glow.',
        price: 'From $65',
        priceNote: '30 min $65 · 1 hr $85',
        duration: '30–45 min',
        treatmentTime: '30-45 minutes',
        downtime: 'None (majority clients see instant glow)',
        keyBenefits: [
          'Smooths texture',
          'Unclogs pores',
          'Brightens dull skin',
          'Enhances product absorption',
        ],
        image: '/images/services/svc-microderm.png',
        popular: true,
        tags: ['Clinical', 'Physical Exfoliation', 'Instant Glow'],
      },
      {
        id: 'chemical-peel',
        slug: 'chemical-peel',
        name: 'Chemical Peel',
        subtitle: 'Targeted acid solutions for balanced, glowing skin',
        description:
          'An advanced exfoliating treatment that removes dead skin cells to restore a youthful, glowing, and balanced skin tone.',
        longDescription:
          'Customizable medical-grade acid formulations applied to break down dead cellular buildup, stimulate rapid collagen renewal, reduce fine lines, and clear active breakouts without harsh irritation.',
        price: '$90',
        duration: '30–45 min',
        treatmentTime: '30-45 minutes',
        downtime: 'None to mild flaking (depending on peel strength)',
        keyBenefits: [
          'Smooths texture',
          'Evens skin tone',
          'Reduces fine lines & breakouts',
        ],
        image: '/images/services/svc-chem-peel.png',
        tags: ['Clinical', 'Chemical Exfoliation', 'Cellular Renewal'],
      },
      {
        id: 'led-light-therapy',
        slug: 'led-light-therapy',
        name: 'LED Light Therapy',
        subtitle: 'Soothe inflammation, fight bacteria & boost collagen',
        description:
          'A gentle, light-based treatment designed to soothe inflammation, fight acne-causing bacteria, and boost collagen production.',
        longDescription:
          'Emits medical-grade therapeutic wavelengths to calm redness, eradicate blemish-causing bacteria, and energize collagen fibroblasts at the cellular level with zero downtime.',
        price: '$45',
        duration: '20–30 min',
        treatmentTime: '20-30 minutes',
        downtime: 'No downtime',
        bestFor: 'All skin types, including sensitive and acne-prone skin.',
        keyBenefits: [
          'Calms inflammation',
          'Fights acne',
          'Boosts collagen',
        ],
        unavailable: true,
        unavailableReason: 'Currently Not Available',
        image: '/images/services/svc-led.png',
        tags: ['Currently Not Available', 'Light Therapy'],
      },
      {
        id: 'basic-3-steps',
        slug: 'basic-3-step-facial',
        name: 'Basic 3-Step Facial',
        subtitle: 'Deep cleanse, gentle exfoliation & hydrating finish',
        description:
          'An essential treatment consisting of a deep cleanse, gentle exfoliation, and a hydrating finish for fresh, radiant skin.',
        longDescription:
          'Concentrated express care designed for busy schedules or monthly maintenance. Combines thorough deep cleansing, gentle pore-clearing exfoliation, and a nourishing moisture seal with SPF protection.',
        price: '$35',
        duration: '30 min',
        treatmentTime: '30 minutes',
        bestFor: 'All skin types, first-timers, or monthly maintenance.',
        keyBenefits: [
          'Purifies skin',
          'Smooths texture',
          'Restores natural hydration',
          'Quick & convenient',
        ],
        stepBreakdown: [
          {
            step: 'Cleanse',
            detail: 'Removes makeup, oil, and surface impurities.',
          },
          {
            step: 'Exfoliate',
            detail: 'Gently polishes away dead skin cells for a smooth texture.',
          },
          {
            step: 'Hydrate & Protect',
            detail: 'Infuses moisture and locks it in with a nourishing moisturizer and SPF.',
          },
        ],
        image: '/images/services/svc-basic-facial.png',
        tags: ['Express', 'First-Timers', 'Maintenance'],
      },
      {
        id: 'classic-european',
        slug: 'classic-european-facial',
        name: 'Classic European Facial',
        subtitle: 'Deep pore cleansing, extractions & relaxing massage',
        description:
          'A comprehensive facial featuring deep pore cleansing, exfoliation, extractions, customized masking, and a relaxing massage.',
        longDescription:
          'A comprehensive European staple combining purifying warmth, steam, thorough decongestion, therapeutic pressure-point massage, and targeted masking to refresh the skin, relieve facial tension, and restore optimal hydration.',
        price: '$100',
        duration: '50–60 min',
        treatmentTime: '50-60 minutes',
        bestFor: 'All skin types, routine skin health, and stress relief.',
        keyBenefits: [
          'Deeply purifies pores',
          'Relieves facial tension',
          'Hydrates & restores balance',
          'Promotes circulation',
        ],
        stepBreakdown: [
          {
            step: 'Deep Cleanse & Steam',
            detail: 'Purifies pores and softens the skin.',
          },
          {
            step: 'Exfoliation & Extractions',
            detail: 'Removes dead skin cells and clears out clogged pores.',
          },
          {
            step: 'Massage & Mask',
            detail: 'Relieves facial tension while targeted serums and masks restore hydration and balance.',
          },
        ],
        image: '/images/services/svc-euro-facial.png',
        popular: true,
        tags: ['Relaxation', 'Deep Cleanse', 'Routine Health'],
      },
      {
        id: 'customized-facial',
        slug: 'customized-facial',
        name: 'Customized Facial',
        subtitle: 'Fully tailored treatment for your specific skin concerns',
        description:
          'A fully tailored treatment designed to target your specific concerns, including acne, seasonal weather damage, anti-aging, and overall skin rejuvenation.',
        longDescription:
          'A 100% personalized treatment customized after a thorough professional consultation. Whether you are dealing with seasonal weather changes, active congestion, premature fine lines, or dullness, our therapist selects targeted actives, specialized masks, and clinical massage techniques to achieve long-term skin health.',
        price: '$100',
        duration: '60 min',
        treatmentTime: '60 minutes',
        bestFor: 'All skin types and concerns (ideal for changing seasons or unpredictable skin).',
        keyBenefits: [
          '100% personalized',
          'Targets specific skin concerns',
          'Restores balance & hydration',
          'Promotes long-term skin health',
        ],
        targetOptions: [
          {
            title: 'Weather & Seasonal Care',
            desc: 'Restores barrier function and combats dryness or excessive sun exposure.',
          },
          {
            title: 'Acne & Clarity',
            desc: 'Deeply cleanses pores, calms inflammation, and prevents future breakouts.',
          },
          {
            title: 'Anti-Aging & Firming',
            desc: 'Smooths fine lines, improves elasticity, and promotes cellular renewal.',
          },
          {
            title: 'Youthful Rejuvenation',
            desc: 'Restores dull, tired skin to reveal a vibrant, healthy radiance.',
          },
        ],
        image: '/images/services/svc-aroma-lift.png',
        popular: true,
        tags: ['100% Personalized', 'Targeted Options', 'Bespoke'],
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
    image: '/images/services/svc-hair-updo.png',
    accent: '#D4AF37',
    services: [
      {
        id: 'hair-straight',
        slug: 'straight-sleek',
        name: 'Straight & Sleek',
        subtitle: 'Glass-like smoothing',
        description: 'Ultra-glossy smoothing with thermal shield protection and frizz control.',
        price: 'Quote on length',
        image: '/images/services/svc-hair-straight.png',
      },
      {
        id: 'hair-curls',
        slug: 'hollywood-curls',
        name: 'Voluminous & Hollywood Curls',
        subtitle: 'Waves & bombshell curls',
        description: 'Textured waves, bombshell curls or vintage Hollywood waves.',
        price: 'Quote on length',
        image: '/images/services/svc-hair-curls.png',
      },
      {
        id: 'hair-buns',
        slug: 'bridal-updos',
        name: 'Bridal & Formal Updos / Buns',
        subtitle: 'Chignons, textured buns & pinned looks',
        description: 'Structured and romantic updos for weddings and formal events.',
        price: 'Quote on length',
        image: '/images/services/svc-hair-updo.png',
        popular: true,
      },
      {
        id: 'hair-braids',
        slug: 'hair-braids',
        name: 'Intricate Hair Braids',
        subtitle: 'Fishtail, Dutch, crown & boho',
        description: 'Festival, function and wedding-ready braid styles.',
        price: 'Quote on length',
        image: '/images/services/svc-hair-braids.png',
      },
      {
        id: 'hair-trimming',
        slug: 'split-end-trimming',
        name: 'Split-End Hair Trimming',
        subtitle: 'Refresh dead ends',
        description: 'Precision maintenance trim to preserve length and refresh ends.',
        price: 'Quote on length',
        image: '/images/services/svc-hair-trim.png',
      },
      {
        id: 'hair-style-cut',
        slug: 'any-style-cut',
        name: 'Any Style Cut',
        subtitle: 'Custom cut & face framing',
        description: 'Haircut crafted for your aesthetic and texture.',
        price: 'Quote on length',
        image: '/images/services/svc-hair-cut.png',
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
    image: '/images/services/svc-bridal-henna.png',
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
        image: '/images/services/svc-bridal-henna.png',
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
        image: '/images/services/svc-event-henna.png',
        tags: ['Events', 'Parties'],
      },
      {
        id: 'henna-workshop',
        slug: 'henna-workshops',
        name: 'Henna Experiences & Workshops',
        subtitle: 'Learn & celebrate together',
        description: 'Henna experiences and workshops for community, corporate and special events.',
        price: 'Enquire',
        image: '/images/services/svc-henna-workshop.png',
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
    image: '/images/services/svc-edu-beginners.png',
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
        image: '/images/services/svc-edu-personal.png',
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
        image: '/images/services/svc-edu-beginners.png',
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
        image: '/images/services/svc-edu-bridal.png',
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

const SERVICE_SLUG_ALIASES: Record<string, string> = {
  'diamond-microdermabrasion': 'microdermabrasion',
  'hydra-facial': 'hydrodermabrasion',
  'hydra-infusion': 'hydrodermabrasion',
  'chemical-peels': 'chemical-peel',
  'face-lift-aroma-facial': 'customized-facial',
  'acne-clarifying-facial': 'customized-facial',
  'anti-aging-firming-facial': 'customized-facial',
  'event-glam': 'party-special-occasion',
  'party-makeup': 'party-special-occasion',
  'soft-glam': 'natural-soft-glam',
};

export const getServiceBySlug = (categorySlug: string, serviceSlug: string) => {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;
  const targetSlug = SERVICE_SLUG_ALIASES[serviceSlug] || serviceSlug;
  const service =
    category.services.find((s) => s.slug === targetSlug) ||
    category.services.find((s) => s.slug === serviceSlug);
  if (!service) return null;
  return { category, service };
};

export const findServiceEverywhere = (serviceSlug: string) => {
  const targetSlug = SERVICE_SLUG_ALIASES[serviceSlug] || serviceSlug;
  for (const category of SERVICE_CATEGORIES) {
    const service =
      category.services.find((s) => s.slug === targetSlug) ||
      category.services.find((s) => s.slug === serviceSlug);
    if (service) return { category, service };
  }
  return null;
};

/** Keep legacy exports used by quote calculator */
export { FACIAL_ADDONS, PRODUCTS_3D } from './servicesData';

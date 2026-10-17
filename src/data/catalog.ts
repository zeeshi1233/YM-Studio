export type CategorySlug =
  | 'makeup'
  | 'brow-lamination-waxing'
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
          'Bespoke HD bridal makeup artistry, perfected for flawless photography and designed for long-lasting wear for hours. Thoughtfully tailored for brides, engagements, and bridal parties.',
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
          'From fashion editorials and professional portfolios to personal branding, each look is thoughtfully crafted for camera-ready perfection under studio lighting and high-definition photography. Custom quotes available upon enquiry.',
        longDescription:
          'Engineered specifically for camera lighting, studio flash, and high-resolution digital lenses. Texture-less complexion, crisp contouring, and artistic balance for agency portfolios, commercial campaigns, and personal branding shoots. Get a quote for half-day or full-day shoot bookings.',
        price: 'Custom Quote',
        priceNote: 'Custom quotes available upon enquiry for half-day / full-day shoots',
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
    id: 'brow-lamination-waxing',
    slug: 'brow-lamination-waxing',
    name: 'Brow Lamination and Waxing',
    shortName: 'Brow & Waxing',
    navLabel: 'Brow Lamination and Waxing',
    tagline: 'Laminated brows, custom tinting & precision waxing',
    description:
      'Professional keratin brow lamination, bespoke brow & lash tints, and hygienic face & body waxing for clean, defined, long-lasting salon results.',
    image: '/images/brow-lamination.png',
    accent: '#B829A0',
    services: [
      {
        id: 'brow-lamination',
        slug: 'brow-lamination',
        name: 'Brow Lamination',
        subtitle: 'Fluffy brushed-up brows',
        description:
          'Keratin brow lamination that lifts, sets, and aligns brow hairs for a fuller, feathery shape lasting 6–8 weeks.',
        longDescription:
          'Tame unruly, downward-growing, or sparse brow hairs with our nourishing keratin brow lamination. We realign each hair strand into an upward, brushed-up shape that instantly creates the appearance of thicker, symmetrical, effortless arches with zero daily morning pencil work.',
        price: '$40',
        duration: '45 min',
        treatmentTime: '45 minutes',
        downtime: 'Keep dry for 24 hours',
        bestFor: 'Sparse, uneven, coarse, or downward-growing brow hairs.',
        image: '/images/services/svc-brow-lam-only.png',
        popular: true,
        tags: ['Brows', 'Keratin', 'Lamination', 'Fluffy Finish'],
        includes: ['Gentle brow cleanse & degreasing', 'Keratin lifting & realignment solution', 'Neutralising fixing balm', 'Nourishing botanical oil finish', 'Spoolie styling guidance'],
      },
      {
        id: 'brow-lamination-tint',
        slug: 'brow-lamination-tint',
        name: 'Brow Lamination with Tint',
        subtitle: 'Lifted shape with richer colour',
        description:
          'Lamination plus custom tint so brows look fuller, darker, and perfectly set — our most requested brow combination.',
        longDescription:
          'Combine the lifting power of keratin lamination with custom-formulated brow tint. Our tailored tint formula matches your natural hair undertones, grasping finer velus hairs to maximize visual volume and depth for a polished, woke-up-like-this statement brow.',
        price: '$60',
        duration: '50 min',
        treatmentTime: '50 minutes',
        downtime: 'Keep dry for 24 hours',
        bestFor: 'Lighter or sparse brows desiring richer pigmentation and feathery definition.',
        image: '/images/services/svc-brow-lam-tint.png',
        popular: true,
        tags: ['Most Requested', 'Brows', 'Lamination', 'Custom Tint'],
        includes: ['Custom color consult & shade matching', 'Keratin brow lifting step', 'Precision tint application', 'Deep conditioning setting shield'],
      },
      {
        id: 'brow-lamination-tint-shaping',
        slug: 'brow-lamination-tint-shaping',
        name: 'Brow Lamination, Tint & Shaping',
        subtitle: 'Complete brow transformation',
        description:
          'Lamination, custom tint and precision waxing or tweezing in one appointment for a fully sculpted, salon-finished arch.',
        longDescription:
          'The ultimate red-carpet brow makeover. This comprehensive protocol includes architectural brow mapping to flatter your bone structure, gentle waxing and tweezing for razor-clean margins, custom tinting, and keratin lamination for supreme symmetry and fullness.',
        price: '$75',
        priceNote: 'Complete Brow Makeover · $75',
        duration: '60 min',
        treatmentTime: '60 minutes',
        downtime: 'Keep dry for 24 hours',
        bestFor: 'Total brow makeover — overgrown, asymmetrical, or unruly brows.',
        image: '/images/services/svc-brow-full.png',
        popular: true,
        tags: ['Complete Makeover', 'Sculpting', 'Waxing', 'Lamination'],
        includes: ['Facial proportion brow mapping', 'Gentle waxing & tweezing cleanup', 'Custom tint saturation', 'Keratin lamination & seal', 'Aftercare nourishment'],
      },
      {
        id: 'brow-tint',
        slug: 'brow-tint',
        name: 'Brow Tint',
        subtitle: 'Richer colour and fuller brows',
        description:
          'Custom brow tint that fills sparse areas, enriches natural tones, and frames the eyes with polished definition.',
        longDescription:
          'A gentle semi-permanent tint custom-blended to complement your complexion and hair color. Perfect for defining light or blonde hairs and eliminating the need for daily brow pencil.',
        price: '$25',
        duration: '20 min',
        treatmentTime: '20 minutes',
        image: '/images/services/svc-brow-tint.png',
        tags: ['Brow Tint', 'Express'],
        includes: ['Custom shade formulation', 'Even pigment application', 'Gentle conditioning wipe'],
      },
      {
        id: 'lash-tint',
        slug: 'lash-tint',
        name: 'Lash Tint',
        subtitle: 'Darker defined lashes without mascara',
        description:
          'Professional lash tint for a wide-awake, mascara-free finish that lasts weeks through showers, swimming, and workouts.',
        longDescription:
          'Deepen your natural lashes from root to tip with rich, smudge-free pigment. Wake up looking refreshed and open-eyed without reaching for mascara or dealing with midday flakes.',
        price: '$25',
        duration: '20 min',
        treatmentTime: '20 minutes',
        image: '/images/lash-tint.png',
        tags: ['Lash Tint', 'Mascara-Free'],
        includes: ['Eye safety patch placement', 'Deep black/blue-black tint', 'Soothing rinse & conditioning'],
      },
      {
        id: 'lash-brow-package',
        slug: 'lash-brow-package',
        name: 'Lash & Brow Package',
        subtitle: 'Tinted lashes and brows together',
        description:
          'Lash tint plus brow tint for balanced, camera-ready definition and effortless framing in a single appointment.',
        longDescription:
          'The favorite dual service: simultaneous custom tinting for your lashes and brows. Perfectly coordinated shades ensure a harmonious, wide-eyed look that flatters bare skin or minimal makeup.',
        price: '$45',
        priceNote: 'Package special · Saves $5',
        duration: '35 min',
        treatmentTime: '35 minutes',
        image: '/images/services/svc-lash-brow-package.png',
        popular: true,
        tags: ['Package Deal', 'Lash & Brow'],
        includes: ['Coordinated lash tint', 'Custom brow tint', 'Eye-framing styling'],
      },
      {
        id: 'wax-eyebrow',
        slug: 'eyebrow-waxing',
        name: 'Eyebrow Wax & Shaping',
        subtitle: 'Precision shaping and clean lines',
        description:
          'Expert eyebrow waxing and tweezing to clean up strays, balance asymmetry, and sharpen your natural arch.',
        price: '$15',
        duration: '15 min',
        image: '/images/services/svc-brow-full.png',
        tags: ['Waxing', 'Brows'],
        includes: ['Gentle skin prep', 'Low-temp hygienic wax', 'Precision tweezing', 'Soothing post-wax lotion'],
      },
      {
        id: 'wax-full-face',
        slug: 'full-face-wax',
        name: 'Full Face Wax',
        subtitle: 'Eyebrows, upper lip, chin & sides',
        description:
          'Complete facial hair removal leaving ultra-smooth, peach-fuzz-free skin that helps skincare absorb and makeup glide on seamlessly.',
        price: '$45',
        duration: '30 min',
        image: '/images/services/svc-wax-facebody.png',
        tags: ['Waxing', 'Face'],
        includes: ['Eyebrow, lip, chin & sideburns', 'Gentle calming chamomile finish', 'Flawless makeup preparation'],
      },
      {
        id: 'wax-brazilian',
        slug: 'brazilian-wax',
        name: 'Brazilian Wax',
        subtitle: 'Precise hygienic waxing',
        description:
          'Professional Brazilian wax with hygiene-first technique, low-temperature wax, and maximum comfort protocol.',
        price: '$45',
        duration: '30 min',
        image: '/images/services/svc-wax-brazilian.png',
        popular: true,
        tags: ['Waxing', 'Body'],
        includes: ['Medical-grade sanitation', 'Comfort hot wax formula', 'Calming skin treatment'],
      },
      {
        id: 'wax-full-body',
        slug: 'full-body-wax',
        name: 'Full Body Wax',
        subtitle: 'Complete waxing package',
        description:
          'Full body waxing for a smooth, salon finish from head to toe. Ideal for weddings, vacations, or monthly self-care.',
        price: '$100',
        duration: '75 min',
        image: '/images/services/svc-wax-fullbody.png',
        popular: true,
        tags: ['Waxing', 'Full Body'],
        includes: ['Full arms & legs', 'Underarms', 'Bikini/Brazilian option', 'Full body soothing post-wax treatment'],
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
        tags: ['Waxing', 'Menu'],
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
    name: 'Hair Styles and Cuts',
    shortName: 'Hair Styles & Cuts',
    navLabel: 'Hair Styles and Cuts',
    tagline: 'Sleek, curls, updos & custom style cuts',
    description: 'Straight & sleek, Hollywood curls, bridal updos, braids, trimming and style cuts. Pricing depends on hair length & volume.',
    image: '/images/services/svc-hair-updo.png',
    accent: '#D4AF37',
    services: [
      {
        id: 'hair-straight',
        slug: 'straight-sleek',
        name: 'Straight & Sleek',
        subtitle: 'Glass-like smoothing & thermal shield',
        description: 'Ultra-glossy smoothing with thermal shield heat protection and frizz control for mirror-like finish.',
        longDescription:
          'Transform your hair with ultra-glossy, glass-like smoothing. Includes high-performance thermal shield protection, anti-humidity seal, and custom tension blowout to eliminate frizz and create lasting fluidity.',
        price: 'Quote on length',
        priceNote: 'Quote based on hair length & volume',
        image: '/images/services/svc-hair-straight.png',
        tags: ['Smoothing', 'Thermal Shield', 'Frizz Control'],
        includes: ['Heat protectant infusion', 'Smooth blowout prep', 'Precision flat iron glide', 'Gloss serum finish'],
      },
      {
        id: 'hair-curls',
        slug: 'hollywood-curls',
        name: 'Voluminous & Hollywood Curls',
        subtitle: 'Waves & bombshell curls',
        description: 'Textured waves, bombshell curls, or vintage Hollywood waves tailored to your vibe.',
        longDescription:
          'Red-carpet worthy waves that hold their shape from afternoon ceremony to late-night dancing. We customize curl diameter, section direction, and texturizing hold spray to match your desired aesthetic.',
        price: 'Quote on length',
        priceNote: 'Quote based on hair length & volume',
        image: '/images/services/svc-hair-curls.png',
        popular: true,
        tags: ['Hollywood Waves', 'Bombshell Curls', 'Long-Lasting Hold'],
        includes: ['Thermal wave prep', 'Barrel curling technique', 'Setting & pin cooldown', 'Soft brushout & finishing hold'],
      },
      {
        id: 'hair-buns',
        slug: 'bridal-updos',
        name: 'Bridal & Formal Updos / Buns',
        subtitle: 'Chignons, textured buns & pinned looks',
        description: 'Structured and romantic updos for weddings and formal events, engineered for veil and accessory placement.',
        longDescription:
          'Timeless bridal chignons, textured romantic low buns, sleek architectural high knots, and boho-braided updos. Crafted with internal padding, locked pins, and humidity protection so your hair stays intact through every photo angle.',
        price: 'Quote on length',
        priceNote: 'Quote based on hair length & volume',
        image: '/images/services/svc-hair-updo.png',
        popular: true,
        tags: ['Bridal Updo', 'Formal Bun', 'Weddings'],
        includes: ['Foundation teasing & padding', 'Secure dual-pin technique', 'Veil, hairpiece & jewelry anchoring', 'All-event humidity shield'],
      },
      {
        id: 'half-up-curls',
        slug: 'half-up-half-down-glam',
        name: 'Half-Up Half-Down Glam',
        subtitle: 'Romantic twists, braids & cascade curls',
        description: 'The best of both worlds — soft face-framing twists or crown braids with romantic cascading curls.',
        longDescription:
          'A universally flattering style for brides, bridesmaids, and formal guests. We secure the crown with soft twists, volume lift, or delicate Dutch braids while allowing voluminous polished waves to cascade down your shoulders.',
        price: 'Quote on length',
        priceNote: 'Quote based on hair length & volume',
        image: '/images/services/svc-hair-curls.png',
        popular: true,
        tags: ['Half-Up', 'Romantic Waves', 'Bridal Party'],
        includes: ['Crown volume tease & lift', 'Intricate twist or braid anchor', 'Soft flowing curls', 'Face-framing tendrils'],
      },
      {
        id: 'hair-braids',
        slug: 'hair-braids',
        name: 'Intricate Hair Braids',
        subtitle: 'Fishtail, Dutch, crown & boho',
        description: 'Festival, function, and wedding-ready braid styles with clean partings and decorative finish.',
        longDescription:
          'From bohemian side-swept fishtail braids to crown halo braids and modern Dutch festival plaits. Designed with pancake volume techniques for a full, dimensional statement look.',
        price: 'Quote on length',
        priceNote: 'Quote based on hair length & volume',
        image: '/images/services/svc-hair-braids.png',
        tags: ['Braids', 'Boho', 'Festival', 'Functions'],
        includes: ['Texturizing spray prep', 'Precision sectioning', 'Pancake plaiting for fullness', 'Elastic conceal & hold spray'],
      },
      {
        id: 'hair-trimming',
        slug: 'split-end-trimming',
        name: 'Split-End Hair Trimming',
        subtitle: 'Refresh dead ends without losing length',
        description: 'Precision maintenance trim to preserve length while refreshing dead ends and split fibers.',
        longDescription:
          'Keep your hair healthy, lush, and free from breakage. Our dusting technique removes split ends along the perimeter and layers without sacrificing your hard-earned length.',
        price: 'Quote on length',
        priceNote: 'Quote based on hair length & volume',
        image: '/images/services/svc-hair-trim.png',
        tags: ['Trimming', 'Hair Health', 'Dusting'],
        includes: ['End health evaluation', 'Dry/wet precision cut', 'Sealing oil application'],
      },
      {
        id: 'hair-style-cut',
        slug: 'any-style-cut',
        name: 'Any Style Cut',
        subtitle: 'Custom cut & face framing',
        description: 'Haircut crafted specifically for your personal aesthetic, face shape, and texture.',
        longDescription:
          'A complete style transformation or haircut refresh. Tailored layers, curtain bangs, blunt bobs, or soft texture tailored to flatter your jawline and cheekbones.',
        price: 'Quote on length',
        priceNote: 'Quote based on hair length & volume',
        image: '/images/services/svc-hair-cut.png',
        tags: ['Style Cut', 'Layers', 'Face Framing'],
        includes: ['Style consultation', 'Custom precision haircut', 'Face-framing design', 'Blow-dry style finish'],
      },
    ],
  },
  {
    id: 'henna',
    slug: 'henna',
    name: 'Henna Services',
    shortName: 'Henna Services',
    navLabel: 'Henna Services',
    tagline: 'Handcrafted bridal mehndi, event henna & bespoke designs',
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
          'Make your wedding celebrations even more special with beautifully handcrafted bridal henna. Bookings are customised by design, coverage (palms, forearms, elbows, feet & calves), personal motifs, and event timeline requirements. 100% natural, deep-staining organic henna paste.',
        price: 'Enquire',
        priceNote: 'Custom quote based on design coverage & detail',
        image: '/images/services/svc-bridal-henna.png',
        popular: true,
        tags: ['Bridal', 'Weddings', 'Mehndi', 'Bespoke'],
        includes: ['Custom design consult & mockups', 'Bridal arms & feet coverage options', 'Organic rich-stain henna paste', 'Lemon-sugar sealant & aftercare balm', 'Bridesmaids & family packages'],
      },
      {
        id: 'engagement-sangeet-henna',
        slug: 'engagement-sangeet-henna',
        name: 'Engagement & Sangeet Henna',
        subtitle: 'Festive mandalas & delicate cuffs',
        description:
          'Medium-to-intricate henna designs curated for brides-to-be, sangeet nights, Eid, Diwali, and festive family celebrations.',
        longDescription:
          'Balanced, elegant henna coverage designed for milestone ceremonies. Features centered palm mandalas, lace wrist cuffs, intricate floral vines, and matching back-of-hand patterns that photograph beautifully with engagement rings and ethnic jewelry.',
        price: 'Enquire',
        priceNote: 'Custom quote based on design & guests',
        image: '/images/henna-bridal.png',
        popular: true,
        tags: ['Engagement', 'Sangeet', 'Festive'],
        includes: ['Wrist-to-palm coverage', 'Delicate floral & geometric motifs', 'Organic dark-staining henna', 'Quick-drying sealant protocol'],
      },
      {
        id: 'event-henna',
        slug: 'event-henna',
        name: 'Event Henna Experience',
        subtitle: 'Interactive guest henna',
        description:
          'Personalised henna for parties, birthdays, corporate events, cultural celebrations and private functions — individual guests or larger groups.',
        longDescription:
          'Add a memorable cultural and artistic highlight to your celebration. Our live henna station delivers fast, exquisite strip designs, cuffs, and floral accents for guests of all ages. Charged per hour or per guest package.',
        price: 'Enquire',
        priceNote: 'Hourly rates or guest package pricing available',
        image: '/images/services/svc-event-henna.png',
        tags: ['Events', 'Parties', 'Corporate', 'Live Station'],
        includes: ['Fast 3-5 minute guest designs', 'Professional live station setup', '100% safe, natural henna paste', 'Glitter accent finishing option'],
      },
      {
        id: 'henna-workshop',
        slug: 'henna-workshops',
        name: 'Henna Experiences & Workshops',
        subtitle: 'Learn & celebrate together',
        description:
          'Henna experiences and workshops for community, corporate and special events, teaching cone technique and pattern fundamentals.',
        longDescription:
          'Interactive, beginner-friendly workshops for private groups, hens parties, community centers, or corporate team-building. Learn how to mix organic henna paste, roll precision cones, control pressure, and craft traditional paisley, floral, and mandala elements.',
        price: 'Enquire',
        priceNote: 'Group booking rates upon enquiry',
        image: '/images/services/svc-henna-workshop.png',
        tags: ['Workshops', 'Team Building', 'Hands-on Learning'],
        includes: ['Henna starter kits for each attendee', 'Practice sheets & pattern templates', 'Guided live demonstration', 'Take-home henna cone'],
      },
      {
        id: 'custom-henna-strip',
        slug: 'minimalist-strip-henna',
        name: 'Minimalist & Strip Henna',
        subtitle: 'Modern delicate vines & cuff motifs',
        description:
          'Modern single-strip or delicate finger-to-wrist henna designs for casual wear, festival looks, photoshoots, and weekend celebrations.',
        longDescription:
          'Contemporary and chic. Delicate finger vines, bohemian cuff bracelets, and minimalist floral trails that dry quickly and develop a rich mahogany stain. Perfect for individuals or small party groups.',
        price: 'From $25',
        priceNote: 'Designs starting from $25 per hand',
        image: '/images/services/svc-event-henna.png',
        tags: ['Minimalist', 'Strip Henna', 'Modern'],
        includes: ['Tailored motif selection', 'Precision thin-cone line work', 'Natural organic henna'],
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

const CATEGORY_SLUG_ALIASES: Record<string, string> = {
  'brow-lamination-waxing': 'brow-lamination-waxing',
  'brow-lamination-and-waxing': 'brow-lamination-waxing',
  'lash-brow-waxing': 'brow-lamination-waxing',
  'hair-styles-and-cuts': 'hair',
  'hair-styling-and-cuts': 'hair',
  'hair-styles-cuts': 'hair',
  'henna-services': 'henna',
  'henna-and-mehndi': 'henna',
};

export const getCategoryBySlug = (slug: string) => {
  const targetSlug = CATEGORY_SLUG_ALIASES[slug] || slug;
  return (
    SERVICE_CATEGORIES.find((c) => c.slug === targetSlug) ||
    SERVICE_CATEGORIES.find((c) => c.id === targetSlug) ||
    SERVICE_CATEGORIES.find((c) => c.slug === slug)
  );
};

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

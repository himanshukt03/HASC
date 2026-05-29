// ─── Interfaces ────────────────────────────────────────────────────────────

export interface LocationService {
  title: string;
  description: string;
  slug: string;
}

export interface LocationStat {
  label: string;
  value: string;
}

export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface LocationData {
  slug: string;
  county: string;
  navLabel: string;
  badge: string;
  heroImage: string;
  tagline: string;
  intro: string[];
  stats: LocationStat[];
  servicesOffered: LocationService[];
  areasServed: string[];
  localHighlights: { title: string; description: string }[];
  faq: LocationFAQ[];
  geo?: { latitude: number; longitude: number };
  keywords?: string;
  hasMap?: string;
  schema: object;
}

// ─── Shared Organization Identity ──────────────────────────────────────────
// Referenced by all location-level MedicalBusiness schemas via @id
const ORG_ID = 'https://www.healthalliancesocal.com/#organization';

const organizationSchema = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'Health Alliance SoCal',
  url: 'https://www.healthalliancesocal.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.healthalliancesocal.com/HASC_logo.png',
  },
  telephone: '+13104623879',
  faxNumber: '+13103563417',
  email: 'info@healthalliancesocal.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '501 E. Hardy St. Ste. 425',
    addressLocality: 'Inglewood',
    addressRegion: 'CA',
    postalCode: '90301',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+13104623879',
    contactType: 'customer service',
    availableLanguage: ['English'],
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  },
};

// ─── Schema Builder ─────────────────────────────────────────────────────────
// Generates a full @graph schema per location: Organization + MedicalBusiness
// + BreadcrumbList + FAQPage — giving each county page maximum structured-data
// coverage for local, AI, and featured-snippet search signals.
function buildLocationSchema(loc: Omit<LocationData, 'schema'>): object {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema,
      {
        '@type': 'MedicalBusiness',
        '@id': `https://www.healthalliancesocal.com/locations/${loc.slug}#medicalbusiness`,
        name: `Health Alliance SoCal – ${loc.county}`,
        description: `Integrated behavioral health and psychiatric care services for skilled nursing facilities, assisted living, and memory care communities in ${loc.county}, California.`,
        url: `https://www.healthalliancesocal.com/locations/${loc.slug}`,
        telephone: '+13104623879',
        medicalSpecialty: 'Psychiatry',
        parentOrganization: { '@id': ORG_ID },
        areaServed: [
          {
            '@type': 'AdministrativeArea',
            name: loc.county,
            containedIn: { '@type': 'State', name: 'California' },
          },
          ...loc.areasServed.map((city) => ({
            '@type': 'City',
            name: city,
          })),
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: '501 E. Hardy St. Ste. 425',
          addressLocality: 'Inglewood',
          addressRegion: 'CA',
          postalCode: '90301',
          addressCountry: 'US',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+13104623879',
          contactType: 'customer service',
        },
        ...(loc.geo && { geo: { '@type': 'GeoCoordinates', latitude: loc.geo.latitude, longitude: loc.geo.longitude } }),
        ...(loc.hasMap && { hasMap: loc.hasMap }),
        ...(loc.keywords && { keywords: loc.keywords }),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.healthalliancesocal.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Locations',
            item: 'https://www.healthalliancesocal.com/locations',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: loc.county,
            item: `https://www.healthalliancesocal.com/locations/${loc.slug}`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: loc.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };
}

// ─── Raw Location Data (schema computed below) ──────────────────────────────
type RawLocation = Omit<LocationData, 'schema'>;

const locationDataRaw: RawLocation[] = [
  // ── LOS ANGELES COUNTY ────────────────────────────────────────────────────
  {
    slug: 'los-angeles-county',
    county: 'Los Angeles County',
    navLabel: 'Los Angeles County',
    badge: 'Los Angeles County',
    geo: { latitude: 34.0522, longitude: -118.2437 },
    hasMap: 'https://maps.google.com/?q=Los+Angeles+County,+CA',
    keywords: 'psychiatric services los angeles county, behavioral health los angeles, SNF psychiatry los angeles, assisted living psychiatry los angeles county, assisted living mental health los angeles, mental health assisted living near me, assisted living for mentally ill los angeles, psychiatric nursing home los angeles, nursing home for mentally ill los angeles, behavioral health assisted living los angeles, mental health assisted living facilities los angeles, assisted living for adults with mental illness los angeles, assisted housing for mentally ill los angeles, group homes for mentally disabled adults los angeles, memory care psychiatry LA county, behavioral health care long beach, psychiatry pasadena, mental health services glendale, psychiatry torrance, behavioral health burbank, assisted living psychiatry santa monica, mental health services downey, memory care glendale, dementia behavioral management los angeles, CMS F-Tag 758 compliance los angeles, psychotropic medication management los angeles, psychiatrist near me los angeles, behavioral health provider los angeles county, HASC',
    heroImage:
      'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=1200',
    tagline:
      'Bringing integrated behavioral health partnership to skilled nursing facilities, assisted living communities, and memory care units across LA County.',
    intro: [
      'Los Angeles County is home to one of the largest concentrations of long-term care facilities in the United States. With hundreds of skilled nursing facilities, assisted living communities, memory care units, and board and care homes spread across its diverse communities, the need for consistent, high-quality behavioral health partnership has never been greater.',
      'Health Alliance SoCal serves facilities across Los Angeles County — from the South Bay to the San Fernando Valley, from the Eastside to the Westside — bringing the same evidence-based psychiatric care and collaborative team approach to every facility we serve. We understand the unique regulatory environment of California and LA County, and we partner with facilities to navigate CMS requirements with confidence.',
    ],
    stats: [
      { value: '300+', label: 'SNFs in LA County' },
      { value: 'All', label: 'Care Settings Served' },
      { value: 'CMS', label: 'F-Tag 758 Experts' },
      { value: 'HIPAA', label: 'Fully Compliant' },
    ],
    servicesOffered: [
      {
        title: 'Skilled Nursing Facility Psychiatry',
        description:
          'Integrated behavioral health partnerships for SNFs throughout LA County.',
        slug: 'skilled-nursing-facility-psychiatry',
      },
      {
        title: 'Assisted Living Behavioral Health',
        description:
          'Psychiatric support for assisted living communities across Los Angeles.',
        slug: 'assisted-living-psychiatry',
      },
      {
        title: 'Memory Care Behavioral Health',
        description:
          'Specialized dementia-focused psychiatric care for memory care units in LA County.',
        slug: 'memory-care-behavioral-health',
      },
      {
        title: 'CMS F-Tag 758 Compliance',
        description:
          'Psychotropic oversight and survey-readiness support for LA County facilities.',
        slug: 'cms-f-tag-758-support',
      },
    ],
    areasServed: [
      'Los Angeles', 'Long Beach', 'Glendale', 'Santa Clarita', 'Lancaster',
      'Palmdale', 'Pomona', 'Torrance', 'Pasadena', 'El Monte',
      'Downey', 'Inglewood', 'West Covina', 'Norwalk', 'Burbank',
      'South Gate', 'Compton', 'Carson', 'Santa Monica', 'Whittier',
      'Hawthorne', 'Alhambra', 'Culver City', 'Manhattan Beach',
    ],
    localHighlights: [
      {
        title: 'Navigating CDSS & CMS Together',
        description:
          "California's Department of Social Services adds a layer of regulatory complexity beyond federal CMS requirements. Our team is experienced in both, providing documentation and compliance support that meets California-specific standards for residential care facilities.",
      },
      {
        title: 'High-Acuity Population Expertise',
        description:
          "LA County's long-term care population includes a high proportion of medically complex, dual-diagnosis residents. Our clinicians are experienced in managing behavioral health alongside complex medical conditions, substance use histories, and diverse cultural backgrounds.",
      },
      {
        title: 'Multilingual Community Awareness',
        description:
          "Los Angeles County's extraordinary cultural and linguistic diversity shapes how behavioral health care must be delivered. We bring cultural sensitivity and, where available, multilingual clinical resources to support residents and families across LA's many communities.",
      },
    ],
    faq: [
      {
        question:
          'Does Health Alliance SoCal provide behavioral health services in Los Angeles County?',
        answer:
          'Yes. Health Alliance SoCal partners with skilled nursing facilities (SNFs), assisted living communities, memory care units, and board and care homes throughout Los Angeles County — from the South Bay to the San Fernando Valley, and from the Westside to the Eastside.',
      },
      {
        question:
          'What behavioral health services are available for LA County long-term care facilities?',
        answer:
          'In Los Angeles County, Health Alliance SoCal provides Skilled Nursing Facility Psychiatry, Assisted Living Behavioral Health, Memory Care Behavioral Health, CMS F-Tag 758 Compliance support, Psychotropic Medication Management, and Dementia Behavioral Management. Each service is available as a dedicated, integrated care team partnership.',
      },
      {
        question:
          'Which cities in Los Angeles County does Health Alliance SoCal serve?',
        answer:
          'Health Alliance SoCal serves long-term care facilities throughout Los Angeles County including Los Angeles, Long Beach, Glendale, Pasadena, Torrance, Santa Monica, Burbank, Inglewood, Compton, Carson, Downey, West Covina, Whittier, Alhambra, Culver City, Manhattan Beach, and many more communities.',
      },
      {
        question:
          'How does Health Alliance SoCal help LA County facilities with CDSS compliance?',
        answer:
          "California's Department of Social Services (CDSS) requirements layer on top of federal CMS standards for residential care facilities. Our clinical team provides documentation support, GDR compliance oversight, and survey-readiness guidance specifically aligned with California-specific regulatory standards.",
      },
      {
        question:
          'Do you provide multilingual behavioral health services in Los Angeles County?',
        answer:
          "Yes. Los Angeles County's extraordinary cultural and linguistic diversity shapes how we deliver behavioral health care. We bring cultural sensitivity to every clinical interaction and, where available, offer multilingual clinical resources to support residents and families across LA's many communities.",
      },
      {
        question:
          'How do I start a behavioral health partnership for my Los Angeles County facility?',
        answer:
          "To begin a partnership with Health Alliance SoCal in Los Angeles County, contact us at 310.462.3879 or complete the partnership request form on our website. A member of our clinical leadership team will reach out within 24 business hours to discuss your facility's specific needs.",
      },
    ],
  },

  // ── ORANGE COUNTY ─────────────────────────────────────────────────────────
  {
    slug: 'orange-county',
    county: 'Orange County',
    navLabel: 'Orange County',
    badge: 'Orange County',
    geo: { latitude: 33.7175, longitude: -117.8311 },
    hasMap: 'https://maps.google.com/?q=Orange+County,+CA',
    keywords: 'psychiatric services orange county, behavioral health orange county, assisted living mental health orange county, mental health assisted living near me orange county, assisted living for mentally ill orange county, psychiatric nursing home orange county, assisted living for adults with mental illness orange county, psychiatric assisted living orange county, SNF psychiatry orange county, assisted living psychiatry OC, memory care psychiatry orange county, psychiatry anaheim, behavioral health irvine, psychiatry huntington beach, psychiatry santa ana, mental health services costa mesa, behavioral health dana point, memory care laguna hills, assisted living psychiatry orange, dementia behavioral management orange county, mental health assisted living facilities orange county, GDR compliance orange county, psychotropic medication management OC, CMS F-Tag 758 compliance orange county, psychiatrist near me orange county, behavioral health provider OC, HASC',
    heroImage:
      'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1200',
    tagline:
      "Partnering with Orange County's long-term care communities to deliver integrated behavioral health care that residents and families can count on.",
    intro: [
      "Orange County's growing and aging population has driven significant expansion in its assisted living, memory care, and skilled nursing sectors. As the demand for high-quality behavioral health services in these settings grows, Health Alliance SoCal brings consistent, clinically excellent psychiatric partnership to facilities throughout OC — from Anaheim and Santa Ana to Irvine and Huntington Beach.",
      "We understand the expectations of Orange County's residents and families, who expect the same quality of care from their long-term care facility that they'd expect from any other healthcare provider. Our partnership model integrates seamlessly into your facility's culture, providing behavioral health support that meets those expectations — and that holds up under CMS and state survey scrutiny.",
    ],
    stats: [
      { value: '150+', label: 'LTC Facilities in OC' },
      { value: 'All', label: 'Care Settings Served' },
      { value: 'GDR', label: 'Compliant Programs' },
      { value: 'Weekly', label: 'Facility Visits' },
    ],
    servicesOffered: [
      {
        title: 'Assisted Living Psychiatry',
        description:
          "Behavioral health partnerships for Orange County's assisted living communities.",
        slug: 'assisted-living-psychiatry',
      },
      {
        title: 'Memory Care Behavioral Health',
        description: 'Expert dementia care partnerships for memory care units across OC.',
        slug: 'memory-care-behavioral-health',
      },
      {
        title: 'Psychotropic Medication Management',
        description:
          'Safe, CMS-compliant medication oversight for OC long-term care residents.',
        slug: 'psychotropic-medication-management',
      },
      {
        title: 'Skilled Nursing Facility Psychiatry',
        description: 'Integrated psychiatric care for Orange County SNFs.',
        slug: 'skilled-nursing-facility-psychiatry',
      },
    ],
    areasServed: [
      'Anaheim', 'Santa Ana', 'Irvine', 'Huntington Beach', 'Garden Grove',
      'Orange', 'Fullerton', 'Costa Mesa', 'Mission Viejo', 'Westminster',
      'Newport Beach', 'Buena Park', 'Lake Forest', 'Tustin', 'Yorba Linda',
      'San Clemente', 'Laguna Niguel', 'Aliso Viejo', 'Rancho Santa Margarita',
      'Cypress', 'Seal Beach', 'La Habra', 'Placentia', 'Brea',
    ],
    localHighlights: [
      {
        title: "Serving OC's Expanding Senior Communities",
        description:
          'Orange County has seen rapid growth in both luxury assisted living and skilled nursing capacity. Our team partners with facilities across this spectrum — from smaller board and care homes to large-scale continuing care retirement communities — adapting our approach to each setting.',
      },
      {
        title: 'Family-Centered Communication',
        description:
          "Orange County families are actively involved in their loved ones' care decisions. We prioritize transparent, proactive communication with family members and legal representatives, ensuring they feel included in psychiatric care planning and medication decisions.",
      },
      {
        title: 'Regulatory Confidence for OC Operators',
        description:
          "California's regulatory standards for long-term care are among the most rigorous in the nation. Our clinical team provides the documentation, GDR compliance, and survey-readiness support that OC facility operators need to maintain their survey records.",
      },
    ],
    faq: [
      {
        question:
          'Does Health Alliance SoCal serve Orange County long-term care facilities?',
        answer:
          'Yes. Health Alliance SoCal partners with skilled nursing facilities, assisted living communities, memory care units, and board and care homes throughout Orange County — from Anaheim and Santa Ana to Irvine, Huntington Beach, and Newport Beach.',
      },
      {
        question:
          'What psychiatric services does Health Alliance SoCal offer in Orange County?',
        answer:
          'In Orange County, Health Alliance SoCal provides Assisted Living Psychiatry, Memory Care Behavioral Health, Psychotropic Medication Management, Skilled Nursing Facility Psychiatry, and CMS F-Tag 758 compliance support. All services are delivered as embedded, integrated partnerships with your care team.',
      },
      {
        question:
          'Which cities in Orange County does Health Alliance SoCal cover?',
        answer:
          'Health Alliance SoCal serves Orange County facilities in Anaheim, Santa Ana, Irvine, Huntington Beach, Garden Grove, Fullerton, Costa Mesa, Newport Beach, Mission Viejo, Yorba Linda, San Clemente, Laguna Niguel, Buena Park, Tustin, Brea, and many other OC communities.',
      },
      {
        question:
          'How does Health Alliance SoCal support GDR compliance for Orange County facilities?',
        answer:
          "Gradual Dose Reduction (GDR) compliance is a key CMS requirement for facilities using psychotropic medications. Our clinical team designs and documents GDR programs tailored to each resident's clinical picture, ensuring your facility meets regulatory standards and is prepared for state surveys.",
      },
      {
        question:
          'Do you serve assisted living communities and CCRCs in Orange County?',
        answer:
          "Yes. Health Alliance SoCal partners with the full spectrum of Orange County senior living settings — from smaller assisted living communities to large continuing care retirement communities (CCRCs). We adapt our behavioral health model to fit each facility's size, culture, and resident population.",
      },
      {
        question:
          'How do I request a partnership proposal for my Orange County facility?',
        answer:
          "Contact Health Alliance SoCal at 310.462.3879 or submit a partnership request online. A member of our clinical leadership team will reach out within 24 business hours to learn about your Orange County facility's needs and discuss a tailored behavioral health partnership.",
      },
    ],
  },

  // ── SAN DIEGO COUNTY ──────────────────────────────────────────────────────
  {
    slug: 'san-diego-county',
    county: 'San Diego County',
    navLabel: 'San Diego County',
    badge: 'San Diego County',
    geo: { latitude: 32.7157, longitude: -117.1611 },
    hasMap: 'https://maps.google.com/?q=San+Diego+County,+CA',
    keywords: 'psychiatric services san diego county, behavioral health san diego, assisted living mental health san diego, mental health assisted living near me san diego, assisted living for mentally ill san diego county, psychiatric nursing home san diego, assisted living for adults with mental illness san diego, psychiatric assisted living san diego, SNF psychiatry san diego county, assisted living psychiatry san diego, memory care psychiatry san diego, psychiatry oceanside, behavioral health escondido, psychiatry el cajon, mental health services chula vista, behavioral health carlsbad, memory care la jolla, veteran mental health care san diego, PTSD treatment san diego, dementia behavioral management san diego, mental health assisted living facilities san diego, coastal to inland psychiatric coverage, psychotropic medication management san diego, psychiatrist near me san diego, behavioral health provider san diego county, CMS F-Tag 758 compliance san diego, HASC',
    heroImage:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200',
    tagline:
      "Expert behavioral health partnership for San Diego County's long-term care facilities — from the coast to the inland communities.",
    intro: [
      "San Diego County's long-term care landscape is as diverse as its geography — from coastal assisted living communities in La Jolla and Del Mar to inland skilled nursing facilities in El Cajon and Escondido. Health Alliance SoCal partners with facilities across San Diego County, bringing consistent psychiatric expertise to every setting and every population we serve.",
      "San Diego's unique demographics — including a significant veteran population, a rapidly growing senior community, and a highly diverse cultural makeup — shape the behavioral health needs of long-term care residents in meaningful ways. Our clinicians bring experience working with these populations, offering culturally aware, evidence-based psychiatric care that goes beyond a one-size-fits-all approach.",
    ],
    stats: [
      { value: '100+', label: 'LTC Facilities in SD' },
      { value: 'Diverse', label: 'Populations Served' },
      { value: 'PTSD', label: 'Veteran-Aware Care' },
      { value: 'Inland', label: 'to Coastal Coverage' },
    ],
    servicesOffered: [
      {
        title: 'Skilled Nursing Facility Psychiatry',
        description:
          'Psychiatric partnerships for San Diego County SNFs from coast to inland.',
        slug: 'skilled-nursing-facility-psychiatry',
      },
      {
        title: 'Dementia Behavioral Management',
        description:
          'Specialized dementia behavioral programs for SD County memory care units.',
        slug: 'dementia-behavioral-management',
      },
      {
        title: 'Board & Care Mental Health',
        description:
          "Psychiatric support for San Diego's residential care homes.",
        slug: 'board-and-care-mental-health',
      },
      {
        title: 'CMS F-Tag 758 Compliance',
        description:
          'Psychotropic documentation and GDR support for SD County facilities.',
        slug: 'cms-f-tag-758-support',
      },
    ],
    areasServed: [
      'San Diego', 'Chula Vista', 'Oceanside', 'Escondido', 'El Cajon',
      'Carlsbad', 'Vista', 'San Marcos', 'Santee', 'La Mesa',
      'National City', 'Encinitas', 'Poway', 'Lakeside', 'Spring Valley',
      'Lemon Grove', 'Coronado', 'Del Mar', 'La Jolla', 'Rancho Bernardo',
      'Mira Mesa', 'Kearny Mesa', 'Mission Valley', 'North Park',
    ],
    localHighlights: [
      {
        title: 'Veteran Population Expertise',
        description:
          "San Diego County has one of the largest active and retired military populations in the country. Many long-term care residents in SD County bring complex histories including PTSD, TBI, and service-related mental health conditions. Our clinicians are experienced in providing trauma-informed psychiatric care for this population.",
      },
      {
        title: 'Coastal to Inland Coverage',
        description:
          "From the coastal communities of La Jolla and Encinitas to the inland areas of El Cajon, Santee, and Escondido, Health Alliance SoCal maintains consistent psychiatric coverage across San Diego County's full geographic range — so no facility goes underserved.",
      },
      {
        title: 'Cultural & Linguistic Diversity',
        description:
          "San Diego's proximity to the US-Mexico border and its large immigrant communities mean that long-term care residents often come from diverse cultural and linguistic backgrounds. We approach every resident with cultural humility and work with families to ensure care planning respects their values and traditions.",
      },
    ],
    faq: [
      {
        question:
          'Does Health Alliance SoCal provide psychiatric care in San Diego County?',
        answer:
          'Yes. Health Alliance SoCal partners with skilled nursing facilities, assisted living communities, memory care units, and board and care homes throughout San Diego County — from coastal areas like La Jolla and Encinitas to inland communities in El Cajon, Escondido, and Santee.',
      },
      {
        question:
          'What behavioral health services are available in San Diego County?',
        answer:
          'In San Diego County, Health Alliance SoCal provides Skilled Nursing Facility Psychiatry, Dementia Behavioral Management, Board & Care Mental Health support, CMS F-Tag 758 Compliance, Psychotropic Medication Management, and trauma-informed care for veteran populations.',
      },
      {
        question:
          'Which cities in San Diego County does Health Alliance SoCal cover?',
        answer:
          'Health Alliance SoCal serves long-term care facilities across San Diego County including San Diego, Chula Vista, Oceanside, Escondido, El Cajon, Carlsbad, Vista, San Marcos, La Mesa, Encinitas, Poway, La Jolla, Del Mar, National City, Santee, and many more communities.',
      },
      {
        question:
          'Do you have experience with veteran behavioral health in San Diego County?',
        answer:
          'Yes. San Diego County has one of the largest active and retired military populations in the United States. Our clinicians have experience providing trauma-informed psychiatric care for residents with PTSD, TBI, and other service-related mental health conditions — an important specialty given the significant veteran presence in SD County long-term care settings.',
      },
      {
        question:
          'Do you provide psychiatric services in both coastal and inland San Diego areas?',
        answer:
          "Absolutely. Health Alliance SoCal maintains consistent psychiatric coverage across San Diego County's full geographic range — from coastal communities like La Jolla, Encinitas, and Coronado to inland areas including El Cajon, Santee, Escondido, and Poway. No facility goes underserved due to location.",
      },
      {
        question:
          'How do I partner with Health Alliance SoCal for my San Diego County facility?',
        answer:
          "Contact Health Alliance SoCal at 310.462.3879 or submit a partnership request on our website. Our clinical leadership will reach out within 24 business hours to discuss your San Diego County facility's behavioral health needs and explore a tailored partnership.",
      },
    ],
  },

  // ── RIVERSIDE COUNTY ──────────────────────────────────────────────────────
  {
    slug: 'riverside-county',
    county: 'Riverside County',
    navLabel: 'Riverside County',
    badge: 'Riverside County',
    geo: { latitude: 33.9806, longitude: -116.4194 },
    hasMap: 'https://maps.google.com/?q=Riverside+County,+CA',
    keywords: 'psychiatric services riverside county, behavioral health inland empire, assisted living mental health riverside, mental health assisted living near me riverside, assisted living for mentally ill riverside county, psychiatric nursing home riverside, assisted living for adults with mental illness riverside, psychiatric assisted living riverside, SNF psychiatry riverside, assisted living psychiatry riverside county, memory care psychiatry riverside, telepsychiatry long-term care riverside, Coachella Valley psychiatric care, psychiatry palm springs, psychiatry indio, behavioral health corona, behavioral health moreno valley, memory care temecula, mental health services victorville, assisted living psychiatry ontario, dementia behavioral management riverside, mental health assisted living facilities riverside, psychotropic medication management inland empire, psychiatrist near me riverside, behavioral health provider riverside county, CMS F-Tag 758 compliance riverside, HASC',
    heroImage:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200',
    tagline:
      "Closing the behavioral health gap in Riverside County's long-term care sector — one facility partnership at a time.",
    intro: [
      "Riverside County is one of California's fastest-growing counties, with a senior population expanding rapidly across its Inland Empire communities. Yet access to consistent, high-quality behavioral health services in the region's long-term care facilities has historically lagged behind more urban counties. Health Alliance SoCal is committed to closing that gap.",
      'We partner with skilled nursing facilities, assisted living communities, memory care units, and board and care homes throughout Riverside County — from Riverside and Moreno Valley to Temecula and Palm Springs — bringing the same clinical standards and collaborative care model that defines our work across Southern California. Riverside County facilities deserve a behavioral health partner as committed to their residents as they are.',
    ],
    stats: [
      { value: 'Growing', label: 'Senior Population' },
      { value: 'Inland', label: 'Empire Specialists' },
      { value: 'All', label: 'Facility Types' },
      { value: 'Gap', label: 'Closing Service' },
    ],
    servicesOffered: [
      {
        title: 'Skilled Nursing Facility Psychiatry',
        description: 'Consistent psychiatric partnerships for Riverside County SNFs.',
        slug: 'skilled-nursing-facility-psychiatry',
      },
      {
        title: 'Telepsychiatry for Long-Term Care',
        description:
          'Flexible telehealth psychiatric coverage for facilities across the county.',
        slug: 'telepsychiatry-long-term-care',
      },
      {
        title: 'Psychotropic Medication Management',
        description:
          'CMS-compliant medication oversight for Riverside County residents.',
        slug: 'psychotropic-medication-management',
      },
      {
        title: 'Dementia Behavioral Management',
        description:
          'Evidence-based BPSD management for Inland Empire memory care communities.',
        slug: 'dementia-behavioral-management',
      },
    ],
    areasServed: [
      'Riverside', 'Moreno Valley', 'Corona', 'Temecula', 'Murrieta',
      'Hemet', 'Menifee', 'Perris', 'Lake Elsinore', 'Indio',
      'Palm Springs', 'Palm Desert', 'Cathedral City', 'Beaumont', 'Banning',
      'Coachella', 'San Jacinto', 'Norco', 'Jurupa Valley', 'Eastvale',
      'Wildomar', 'Canyon Lake', 'Desert Hot Springs', 'La Quinta',
    ],
    localHighlights: [
      {
        title: 'Addressing the Inland Empire Care Gap',
        description:
          'Riverside County has experienced rapid population growth without proportionate growth in behavioral health infrastructure. Many facilities in the region struggle to access consistent psychiatric expertise. Health Alliance SoCal is actively expanding its Inland Empire presence to serve these underserved communities with the quality of care they deserve.',
      },
      {
        title: 'Flexible Coverage Including Telepsychiatry',
        description:
          "Given the geographic spread of Riverside County's communities — from the Coachella Valley to the Temecula Valley — Health Alliance SoCal offers both in-person and telehealth psychiatric coverage, ensuring facilities in all areas of the county have access to consistent behavioral health partnership.",
      },
      {
        title: 'Retirement Community & Senior Destination Expertise',
        description:
          'The Coachella Valley and Temecula Valley attract a significant retiree population, with a growing concentration of assisted living and memory care communities serving active and aging seniors. Our team understands the distinct behavioral health profile of this population and tailors care accordingly.',
      },
    ],
    faq: [
      {
        question:
          'Does Health Alliance SoCal serve Riverside County long-term care facilities?',
        answer:
          'Yes. Health Alliance SoCal partners with skilled nursing facilities, assisted living communities, memory care units, and board and care homes throughout Riverside County — including communities in the Inland Empire, Coachella Valley, and Temecula Valley.',
      },
      {
        question:
          'What behavioral health services does Health Alliance SoCal offer in Riverside County?',
        answer:
          'In Riverside County, Health Alliance SoCal provides Skilled Nursing Facility Psychiatry, Telepsychiatry for Long-Term Care, Psychotropic Medication Management, and Dementia Behavioral Management. Both in-person and telehealth psychiatric coverage options are available to serve facilities across the county.',
      },
      {
        question:
          'Which cities in Riverside County does Health Alliance SoCal cover?',
        answer:
          'Health Alliance SoCal serves Riverside County facilities in Riverside, Moreno Valley, Corona, Temecula, Murrieta, Hemet, Menifee, Perris, Palm Springs, Palm Desert, Cathedral City, Indio, La Quinta, Beaumont, Banning, Coachella, and more Inland Empire and Coachella Valley communities.',
      },
      {
        question: 'Do you offer telepsychiatry services in Riverside County?',
        answer:
          "Yes. Given Riverside County's significant geographic spread — from the Coachella Valley to the Temecula Valley and through the Inland Empire — Health Alliance SoCal offers telepsychiatry as a flexible coverage option alongside in-person visits. This ensures facilities in all parts of the county maintain consistent access to psychiatric care.",
      },
      {
        question:
          'Do you serve facilities in the Coachella Valley and Temecula Valley?',
        answer:
          'Yes. Health Alliance SoCal provides behavioral health partnerships across the Coachella Valley (Palm Springs, Palm Desert, Indio, Cathedral City, La Quinta, Desert Hot Springs) and the Temecula Valley (Temecula, Murrieta, Menifee, Lake Elsinore). Both areas are within our active service territory.',
      },
      {
        question:
          'How do I get started with Health Alliance SoCal in Riverside County?',
        answer:
          "Call us at 310.462.3879 or complete the partnership request form on our website. Our clinical leadership team will contact you within 24 business hours to learn about your Riverside County facility's needs and design a behavioral health partnership built around your residents.",
      },
    ],
  },

  // ── VENTURA COUNTY ────────────────────────────────────────────────────────
  {
    slug: 'ventura-county',
    county: 'Ventura County',
    navLabel: 'Ventura County',
    badge: 'Ventura County',
    geo: { latitude: 34.2805, longitude: -119.2945 },
    hasMap: 'https://maps.google.com/?q=Ventura+County,+CA',
    keywords: 'psychiatric services ventura county, behavioral health ventura, assisted living mental health ventura, mental health assisted living near me ventura, assisted living for mentally ill ventura county, psychiatric nursing home ventura, assisted living for adults with mental illness ventura, psychiatric assisted living ventura, SNF psychiatry ventura county, assisted living psychiatry ventura, memory care psychiatry ventura, psychiatry thousand oaks, behavioral health simi valley, psychiatry oxnard, psychiatry camarillo, memory care westlake village, behavioral health port hueneme, mental health services moorpark, assisted living psychiatry newbury park, dementia behavioral management ventura, mental health assisted living facilities ventura, board and care mental health ventura, coastal to inland psychiatric services ventura, psychotropic medication management ventura county, psychiatrist near me ventura, behavioral health provider ventura county, CMS F-Tag 758 compliance ventura, HASC',
    heroImage:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1200',
    tagline:
      "A dedicated behavioral health partnership for Ventura County's skilled nursing, assisted living, and memory care communities.",
    intro: [
      "Ventura County's long-term care sector serves a diverse and growing senior population across its coastal and inland communities. From Oxnard and Ventura along the coast to Thousand Oaks and Simi Valley in the east, the county's facilities range from small board and care homes to large continuing care retirement communities — each with distinct behavioral health needs.",
      "Health Alliance SoCal partners with Ventura County facilities to provide the same integrated, CMS-aligned behavioral health services that define our work across Southern California. Our clinical team builds genuine relationships with facility staff and residents, becoming a trusted extension of the care team rather than an outside consultant who simply shows up for appointments.",
    ],
    stats: [
      { value: 'Coastal', label: 'to Inland Coverage' },
      { value: 'SNF', label: 'ALF & Memory Care' },
      { value: 'CMS', label: 'Compliant Care' },
      { value: 'True', label: 'Care Team Partner' },
    ],
    servicesOffered: [
      {
        title: 'Assisted Living Psychiatry',
        description:
          'Behavioral health partnerships for Ventura County assisted living communities.',
        slug: 'assisted-living-psychiatry',
      },
      {
        title: 'Memory Care Behavioral Health',
        description:
          'Specialized dementia psychiatric care for Ventura County memory units.',
        slug: 'memory-care-behavioral-health',
      },
      {
        title: 'Board & Care Mental Health',
        description:
          'Personalized psychiatric oversight for Ventura County board and care homes.',
        slug: 'board-and-care-mental-health',
      },
      {
        title: 'Psychotropic Medication Management',
        description:
          'Safe, evidence-based medication management for Ventura County residents.',
        slug: 'psychotropic-medication-management',
      },
    ],
    areasServed: [
      'Oxnard', 'Thousand Oaks', 'Simi Valley', 'Ventura', 'Camarillo',
      'Moorpark', 'Santa Paula', 'Fillmore', 'Ojai', 'Port Hueneme',
      'Westlake Village', 'Agoura Hills', 'Newbury Park', 'Oak Park',
      'Somis', 'El Rio', 'Saticoy', 'Piru', 'Santa Susana',
    ],
    localHighlights: [
      {
        title: "Serving Ventura's Suburban Senior Population",
        description:
          'Communities like Thousand Oaks, Camarillo, and Simi Valley have seen significant growth in their over-65 populations, with a corresponding expansion in assisted living and memory care capacity. Health Alliance SoCal is positioned to serve facilities across Ventura County\'s suburban communities with consistent, high-quality behavioral health partnership.',
      },
      {
        title: 'Integration With Established Care Teams',
        description:
          "Ventura County's long-term care facilities tend to have stable, experienced care teams. Our partnership approach is built around working with — not over — existing staff. We prioritize learning your facility's culture and processes before implementing any clinical protocols, ensuring our integration is additive rather than disruptive.",
      },
      {
        title: 'Proximity to LA & Regulatory Alignment',
        description:
          "As a county adjacent to Los Angeles, Ventura County facilities navigate both California DHCS requirements and CMS federal standards. Our team's deep experience across the Southern California regulatory landscape means Ventura County partners benefit from the same compliance expertise we provide to our LA County facilities.",
      },
    ],
    faq: [
      {
        question:
          'Does Health Alliance SoCal serve Ventura County long-term care facilities?',
        answer:
          "Yes. Health Alliance SoCal partners with skilled nursing facilities, assisted living communities, memory care units, and board and care homes throughout Ventura County — from the coastal communities of Oxnard and Ventura to inland areas like Thousand Oaks, Simi Valley, and Camarillo.",
      },
      {
        question:
          'What behavioral health services are available in Ventura County?',
        answer:
          'In Ventura County, Health Alliance SoCal provides Assisted Living Psychiatry, Memory Care Behavioral Health, Board & Care Mental Health services, Psychotropic Medication Management, and CMS F-Tag 758 compliance support. All services are delivered as embedded, integrated partnerships with your existing care team.',
      },
      {
        question:
          'Which cities in Ventura County does Health Alliance SoCal serve?',
        answer:
          'Health Alliance SoCal serves Ventura County long-term care facilities in Oxnard, Thousand Oaks, Simi Valley, Ventura, Camarillo, Moorpark, Ojai, Santa Paula, Fillmore, Port Hueneme, Westlake Village, Agoura Hills, Newbury Park, and surrounding Ventura County communities.',
      },
      {
        question: 'Do you serve board and care homes in Ventura County?',
        answer:
          "Yes. Health Alliance SoCal partners with board and care homes (residential care facilities for the elderly) throughout Ventura County. We understand the unique clinical and regulatory challenges of smaller residential settings and provide psychiatric oversight tailored to each home's resident population.",
      },
      {
        question:
          'How does Health Alliance SoCal work with existing Ventura County care teams?',
        answer:
          "Ventura County's long-term care facilities often have stable, experienced care teams in place. Our partnership model is built around collaboration — we learn your facility's culture and workflows first, then integrate our behavioral health services in a way that supports your staff rather than disrupting existing processes.",
      },
      {
        question:
          'How do I request a partnership for my Ventura County facility?',
        answer:
          "Contact Health Alliance SoCal at 310.462.3879 or complete the partnership request form online. Our clinical leadership team will respond within 24 business hours to discuss your Ventura County facility's behavioral health needs and outline how a partnership with us would work.",
      },
    ],
  },
];

// ─── Exported Data ──────────────────────────────────────────────────────────
// Schema is computed from raw data so adding a new county only requires
// adding a new entry to locationDataRaw above — the schema generates automatically.
export const allLocations: LocationData[] = locationDataRaw.map((loc) => ({
  ...loc,
  schema: buildLocationSchema(loc),
}));

export function getLocationBySlug(slug: string): LocationData | undefined {
  return allLocations.find((l) => l.slug === slug);
}

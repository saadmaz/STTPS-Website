import tankSuddaImg from "@/assets/tank-sudda.jpg";
import tankSudda640 from "@/assets/tank-sudda-640.webp";
import tankSudda1024 from "@/assets/tank-sudda-1024.webp";
import tankSudda1400 from "@/assets/tank-sudda-1400.webp";
import teamSuddaImg from "@/assets/team-sudda.jpg";
import teamSudda640 from "@/assets/team-sudda-640.webp";
import teamSudda1024 from "@/assets/team-sudda-1024.webp";
import teamSudda1400 from "@/assets/team-sudda-1400.webp";
import polishStationImg from "@/assets/polish-station.jpg";
import polishStation640 from "@/assets/polish-station-640.webp";
import polishStation1024 from "@/assets/polish-station-1024.webp";
import polishStation1400 from "@/assets/polish-station-1400.webp";
import stopwashImg from "@/assets/stopwash.jpg";
import stopwash640 from "@/assets/stopwash-640.webp";
import stopwash1024 from "@/assets/stopwash-1024.webp";
import stopwash1400 from "@/assets/stopwash-1400.webp";

const srcSet = (w640: { src: string }, w1024: { src: string }, w1400: { src: string }) =>
  `${w640.src} 640w, ${w1024.src} 1024w, ${w1400.src} 1400w`;

/**
 * Per-brand booking/contact method. Intentionally optional — a brand with no
 * confirmed contact channel yet falls back to the generic /contact page
 * rather than shipping a fabricated WhatsApp number or phone line.
 */
export type ContactMethod = {
  type: "whatsapp" | "phone" | "email" | "form";
  value: string;
  label: string;
};

/**
 * The three everyday-care areas the operating portfolio is organised around.
 * Order here is the order every ecosystem view renders in.
 */
export const CATEGORY_GROUPS = [
  "Water & Hygiene",
  "Property & Operations",
  "Vehicle Care",
] as const;

export type CategoryGroup = (typeof CATEGORY_GROUPS)[number];

export type Company = {
  id: string;
  name: string;
  /** The specific market the company operates in. */
  category: string;
  /** The broader area of everyday care it sits under across the group. */
  categoryGroup: CategoryGroup;
  /** Short customer-facing tagline. */
  positioning: string;
  /** The company's role in the group, as a full sentence. */
  headline: string;
  /** One line for the ecosystem grid — what this company is being built to be. */
  summary: string;
  /** Short descriptive blurb for listings and cards. */
  description: string;
  /** Longer-form paragraphs for the company's own page and the homepage portfolio block. */
  narrative: string[];
  services: string[];
  /** Why the category is worth building properly. Only where real copy exists. */
  opportunity?: string[];
  /** Heading for the list below, e.g. "The service standard" or "The ecosystem". */
  standardLabel?: string;
  standard?: string[];
  /** Where the company is being taken. Only where real copy exists. */
  ambition?: string[];
  cta: string;
  /** JPG fallback for browsers without WebP support */
  image: string;
  /** WebP srcset (640/1024/1400w) for the <picture><source> element */
  imageSrcSet: string;
  motion: "fluid" | "human" | "reflective" | "velocity";
  /** oklch values, applied to --brand within the section */
  brand: string;
  brandInk: string;
  surface: string;
  /** Still optional — omit rather than guess for a brand this hasn't been confirmed for. */
  serviceArea?: string;
  contactMethod?: ContactMethod;
  /** The brand's own live site, where it has one independent of sttps.co. */
  website?: string;
  /**
   * Real, named customer quotes only — omit rather than write a placeholder
   * or composite one. Renders nothing on the company page until populated.
   */
  testimonials?: { quote: string; author: string; context?: string }[];
};

// Shared line for brands without their own confirmed number yet — verified
// via Tank Sudda's public LinkedIn listing, which Tank Sudda and Team Sudda
// are both confirmed reachable on. STOPWASH has its own independently
// verified number below and does NOT use this. Polish Station has no
// independent presence found publicly, so it routes through this
// temporarily — swap it the day a dedicated line exists.
const GROUP_WHATSAPP: ContactMethod = {
  type: "whatsapp",
  value: "https://wa.me/94741004296",
  label: "WhatsApp +94 74 100 4296",
};

/**
 * Array order drives every portfolio view on the site: by area of everyday
 * care — water first, then property, then vehicles.
 */
export const COMPANIES: Company[] = [
  {
    id: "tank-sudda",
    name: "Tank Sudda",
    category: "Water Tank Cleaning & Maintenance",
    categoryGroup: "Water & Hygiene",
    positioning: "Cleaner water starts with a cleaner tank.",
    headline: "Building the standard for what holds our water.",
    summary: "Building the definitive brand for water-tank cleaning and maintenance in Sri Lanka.",
    description:
      "Water-tank cleaning and maintenance built around trust, visibility and dependable care for homes, apartments, hospitality properties and commercial sites.",
    narrative: [
      "Tank Sudda is building a trusted, professional brand for water-tank cleaning and maintenance in Sri Lanka.",
      "The company is making essential tank care visible, scheduled, documented and dependable for homes, apartments, hospitality properties and commercial sites.",
    ],
    services: [
      "Water tank cleaning",
      "Scheduled maintenance",
      "Residential services",
      "Commercial services",
      "Property care",
    ],
    opportunity: [
      "Water-tank care is essential property care.",
      "Yet it is often arranged late, delivered inconsistently and treated as an occasional task rather than a managed responsibility.",
      "Tank Sudda is changing that by making the service professional, scheduled, documented and dependable.",
    ],
    standardLabel: "The service standard",
    standard: [
      "Clear scheduling",
      "Defined cleaning process",
      "Trained service teams",
      "Documented completion",
      "Residential and commercial capability",
      "Recurring maintenance programs",
      "Clear customer communication",
    ],
    ambition: [
      "To establish water-tank care as a professional and trusted category across Sri Lanka.",
      "Tank Sudda is not simply cleaning tanks.",
      "It is building the brand that makes people take tank care seriously.",
    ],
    cta: "Explore Tank Sudda",
    image: tankSuddaImg.src,
    imageSrcSet: srcSet(tankSudda640, tankSudda1024, tankSudda1400),
    motion: "fluid",
    brand: "oklch(0.72 0.13 225)",
    brandInk: "oklch(0.14 0.03 240)",
    surface: "oklch(0.17 0.035 240)",
    serviceArea: "Colombo and Greater Colombo, with select surrounding areas on request.",
    contactMethod: GROUP_WHATSAPP,
  },
  {
    id: "team-sudda",
    name: "Team Sudda",
    category: "Cleaning, Maintenance & Facility Operations",
    categoryGroup: "Property & Operations",
    positioning: "The people behind the work.",
    headline: "The operating force behind dependable service.",
    summary:
      "Building the people and operating systems behind dependable cleaning, maintenance and facility care.",
    description:
      "Cleaning, maintenance and facility operations delivered through trained teams and disciplined execution.",
    narrative: [
      "Team Sudda is building the people and operating capability required to deliver cleaning, maintenance and facility services at a consistently high standard.",
      "It brings structure, supervision and accountability to work that must be done properly at every site and for every customer.",
    ],
    services: [
      "Professional teams",
      "Reliable execution",
      "Cleaning",
      "Maintenance",
      "Operations & service quality",
    ],
    cta: "Explore Team Sudda",
    image: teamSuddaImg.src,
    imageSrcSet: srcSet(teamSudda640, teamSudda1024, teamSudda1400),
    motion: "human",
    brand: "oklch(0.78 0.15 55)",
    brandInk: "oklch(0.15 0.02 60)",
    surface: "oklch(0.18 0.02 60)",
    serviceArea:
      "Colombo and Greater Colombo, plus select locations across Sri Lanka for larger commercial projects.",
    contactMethod: GROUP_WHATSAPP,
  },
  {
    id: "stopwash",
    name: "STOPWASH",
    category: "Car Wash & Vehicle Care",
    categoryGroup: "Vehicle Care",
    positioning: "Better car care. Made convenient.",
    headline: "Building the vehicle-care ecosystem for Sri Lanka.",
    summary: "Building the ecosystem for convenient, consistent and modern vehicle care.",
    description: "Convenient, consistent vehicle care for the way people use their cars today.",
    narrative: [
      "STOPWASH is building a complete ecosystem for modern vehicle care in Sri Lanka.",
      "From routine washing to deeper vehicle care, STOPWASH is creating a connected network of services and experiences designed around quality, speed and convenience.",
      "STOPWASH is not being built to be another car wash. It is being built to become the reference point for vehicle care in Sri Lanka.",
    ],
    services: [
      "Car washing",
      "Exterior & interior cleaning",
      "Express detailing",
      "Vehicle care",
      "Convenient service experience",
    ],
    opportunity: [
      "Vehicle care is changing.",
      "Customers want professional results without unnecessary waiting. They want clarity around what they are buying, consistency from one visit to the next and services that fit the way they actually use their vehicles.",
      "STOPWASH is built around that expectation.",
    ],
    standardLabel: "The ecosystem",
    standard: [
      "Express washing",
      "Interior and exterior cleaning",
      "Routine vehicle care",
      "Membership and repeat-care programs",
      "Deeper detailing through the wider vehicle-care network",
      "Future partnerships across locations, fleets, dealers and mobility businesses",
    ],
    ambition: [
      "To become the most trusted and accessible vehicle-care ecosystem in Sri Lanka.",
      "STOPWASH is not another car wash.",
      "It is a vehicle-care platform being built for scale.",
    ],
    cta: "Explore STOPWASH",
    image: stopwashImg.src,
    imageSrcSet: srcSet(stopwash640, stopwash1024, stopwash1400),
    motion: "velocity",
    brand: "oklch(0.88 0.21 130)",
    brandInk: "oklch(0.18 0.08 255)",
    surface: "oklch(0.19 0.07 255)",
    serviceArea: "Greater Colombo, with its first outlet in Katubedda.",
    // STOPWASH runs as its own established brand — stopwash.lk, its own PVT
    // LTD registration, own social presence — verified independently, not
    // shared with the rest of the group like the other three brands.
    contactMethod: {
      type: "phone",
      value: "tel:+94706225252",
      label: "Call +94 70 622 5252",
    },
    website: "https://stopwash.lk",
  },
  {
    id: "polish-station",
    name: "Polish Station",
    category: "Automotive Detailing & Surface Care",
    categoryGroup: "Vehicle Care",
    positioning: "Precision care for every surface.",
    headline: "Precision, protection and finish.",
    summary: "Building a premium standard in automotive detailing and surface care.",
    description: "Premium automotive detailing and surface care built around precision and finish.",
    narrative: [
      "Polish Station is building a premium standard in automotive detailing and surface care.",
      "From correction and polishing to protection and interior care, the brand delivers considered automotive care for customers who expect a superior result.",
    ],
    services: [
      "Car detailing",
      "Paint care & correction",
      "Polishing",
      "Surface treatment",
      "Interior cleaning",
    ],
    cta: "Explore Polish Station",
    image: polishStationImg.src,
    imageSrcSet: srcSet(polishStation640, polishStation1024, polishStation1400),
    motion: "reflective",
    brand: "oklch(0.86 0.02 250)",
    brandInk: "oklch(0.12 0.004 250)",
    surface: "oklch(0.16 0.006 250)",
    serviceArea: "Colombo and Greater Colombo.",
    contactMethod: GROUP_WHATSAPP,
  },
];

/** The portfolio grouped by area of everyday care, in CATEGORY_GROUPS order. */
export const COMPANIES_BY_CATEGORY = CATEGORY_GROUPS.map((group) => ({
  group,
  companies: COMPANIES.filter((c) => c.categoryGroup === group),
}));

export const MODEL_STEPS = [
  {
    no: "01",
    title: "Identify",
    copy: "We find real, recurring needs that are underserved and worth solving properly.",
  },
  {
    no: "02",
    title: "Build",
    copy: "We create the brand, service, team and operating system required to deliver a better answer.",
  },
  {
    no: "03",
    title: "Operate",
    copy: "We stay close to the work, the customer and the numbers until the model is proven in the real world.",
  },
  {
    no: "04",
    title: "Scale",
    copy: "We expand with control, building density, leadership and capability without diluting the standard.",
  },
];

/**
 * What the group provides that an individual service company cannot always
 * build alone. Drives /capabilities and the homepage strength section.
 */
export const GROUP_CAPABILITIES = [
  {
    title: "People",
    copy: "Recruiting, training and developing the field leaders who make reliable service possible.",
  },
  {
    title: "Operations",
    copy: "Building systems, quality controls and performance standards that turn good intentions into consistent delivery.",
  },
  {
    title: "Technology",
    copy: "Using practical tools and data to improve scheduling, customer visibility, productivity and decision-making.",
  },
  {
    title: "Procurement",
    copy: "Creating stronger access to equipment, materials, suppliers and operating knowledge.",
  },
  {
    title: "Customer Experience",
    copy: "Making every interaction clearer, easier and more dependable — from the first enquiry to the final result.",
  },
  {
    title: "Growth",
    copy: "Providing the leadership, structure and capital discipline required to scale what works.",
  },
];

/** Capability names only, for the compact stacked list on /about. */
export const LAYERS = GROUP_CAPABILITIES.map((c) => c.title);

/** What long-term performance at STTPS is measured against. */
export const BELIEFS = [
  "Operational performance",
  "Customer trust",
  "People development",
  "Responsible growth",
  "Community contribution",
];

/** What governance means at STTPS — the discipline behind the ambition. */
export const GOVERNANCE_PRINCIPLES = [
  "Clear accountability across the group and its companies",
  "Disciplined capital allocation",
  "Transparent operating performance",
  "Strong people and safety practices",
  "Responsible partner and supplier relationships",
  "Long-term thinking over short-term noise",
];

/**
 * Group at a glance. Verified proof points only — update these as the group
 * expands (locations, employees, recurring customers, completed jobs,
 * companies in development). Set `value` to null to hide a metric entirely.
 */
export const METRICS: { value: string | null; label: string }[] = [
  { value: "04", label: "Operating Companies" },
  { value: "03", label: "Core Areas of Everyday Care" },
  { value: "01", label: "Group Operating Standard" },
  { value: "01", label: "Clear Direction" },
];

/** How the group got here, and where it goes next. */
export const STORY_TIMELINE = [
  { period: "2023", title: "The STTPS idea takes shape" },
  { period: "May 2024", title: "Tank Sudda launches properly" },
  { period: "2024 onward", title: "The group expands into property operations and vehicle care" },
  { period: "Today", title: "Four operating companies form the initial ecosystem" },
  { period: "Next", title: "New categories, new capabilities and new companies" },
];

export type BoardMember = {
  name: string;
  role: string;
  /** One-line bio — real and specific, or omitted. Not filled with generic bio boilerplate. */
  bio?: string;
};

/**
 * Titles beyond "Director" (Chairman, MD, etc.) and any ordering/hierarchy
 * aren't confirmed per-person yet — every entry uses the same generic role
 * rather than guessing seniority or a chair. Add `bio` per person once real
 * copy exists; the board page already renders it when present.
 */
export const BOARD_OF_DIRECTORS: BoardMember[] = [
  { name: "Ismail Hashim Rifhan", role: "Director" },
  { name: "Thalal Izzath", role: "Director" },
  { name: "Salman Zumry", role: "Director" },
  { name: "Saad Mazhar", role: "Director" },
  { name: "Mijwadh Ali", role: "Director" },
  { name: "Ibrahim Ifham", role: "Director" },
];

export type Milestone = {
  /** ISO date string, e.g. "2026-09-01" */
  date: string;
  title: string;
  body: string;
};

/**
 * Real, dated group updates — a new launch, an operating milestone, a
 * partnership, a hire. This is what /news renders as soon as one entry
 * exists; no CMS required to say something happened. Do not add a
 * placeholder entry — the page's empty state handles zero milestones
 * honestly.
 */
export const MILESTONES: Milestone[] = [];

/**
 * Drives the About header dropdown, the /about hub grid, and the sub-nav on
 * every /about/* page — order here is the order shown everywhere. "dek" is
 * a one-line, generically-true description of what the page covers; it must
 * not assert unverified specifics (an award, a policy detail, a founding
 * date) that haven't actually been supplied. `body` is optional longer-form
 * copy for the generic /about/[slug] template — when present it replaces
 * the "in preparation" placeholder for that section; omit it entirely
 * rather than filling it with unverified detail.
 *
 * Corporate governance is deliberately NOT in this list — it has its own
 * top-level /governance page in the primary navigation. /about/corporate-governance
 * is 301'd there in public/.htaccess.
 */
export const ABOUT_SECTIONS: {
  slug: string;
  label: string;
  dek: string;
  body?: string[];
}[] = [
  {
    slug: "board",
    label: "Board of Directors",
    dek: "The directors providing oversight across STTPS.",
  },
  {
    slug: "management",
    label: "Our Management",
    dek: "The operators running each company day to day.",
  },
  {
    slug: "heritage",
    label: "Our Heritage",
    dek: "Where the group came from and how it got here.",
    body: [
      "STTPS began with a simple observation: some of the most important services in everyday life were also the most overlooked. From the water stored in the tanks above our homes, to the spaces we live and work in, to the vehicles we depend on, quality cleaning and maintenance was fragmented, inconsistent and hard to book with any confidence.",
      "That observation became Tank Sudda in 2023, launching properly in May 2024 with a focused water tank and sump cleaning service for homes, apartments and hospitality properties around Colombo. What started as one company solving one problem grew into a broader vision: a group of specialised service brands, each built for a specific everyday need, all held to the same operating standard.",
      "Today STTPS brings together companies across water hygiene, facility operations and automotive care. The belief underneath all of them hasn't changed since 2023 — when the essentials are cared for properly, people can live and work better.",
    ],
  },
  {
    slug: "policies",
    label: "Company Policies",
    dek: "The standards every company in the group works to.",
  },
  {
    slug: "research-development",
    label: "Research & Development",
    dek: "How we test, refine and improve the way we build.",
  },
  {
    slug: "what-we-do",
    label: "What We Do",
    dek: "Four companies. One operating standard.",
  },
  {
    slug: "industries",
    label: "Industries We Operate In",
    dek: "The everyday-service markets we build for.",
  },
  {
    slug: "awards",
    label: "Awards & Accolades",
    dek: "Recognition earned by the group and its companies.",
  },
  {
    slug: "innovations",
    label: "Innovations at STTPS",
    dek: "How the group builds better ways of working.",
  },
];

/** Slugs above with a bespoke page.tsx rather than the generic /about/[slug] template. */
export const ABOUT_CUSTOM_SLUGS = new Set(["board", "what-we-do", "industries"]);

export const CAREER_TRACKS = [
  { title: "Field & Service", copy: "Field leaders and service professionals." },
  { title: "Operations", copy: "Operations and quality managers." },
  { title: "Brand & Experience", copy: "Brand, marketing and customer-experience specialists." },
  { title: "Technology", copy: "Technology and automation professionals." },
  { title: "Leadership", copy: "Company builders and operators." },
];

/** What actually sets working at STTPS apart, written for what the group is today (four companies, still building) rather than borrowed language from a larger, more established employer. */
export const WHY_STTPS = [
  {
    title: "Real Ownership, Early",
    copy: "At a bigger company you wait years for real responsibility. At STTPS you get it early, because every company in the group is still being built. Join a team and you're shaping how it runs, not following a playbook someone else wrote a decade ago.",
  },
  {
    title: "People Who Have Your Back",
    copy: "We hire people, not headcount. Everyone on a team here is expected to show up for the others on it, and that runs from the field to leadership. If something isn't working for you, we'd rather hear about it directly than have it fester.",
  },
  {
    title: "Move Across the Group",
    copy: "STTPS is four companies today, and more are coming. Good people aren't locked into a single role or brand. If you're good at what you do, there's room to take that skill into a different company, a different discipline, or a leadership role as the group grows.",
  },
  {
    title: "Standards Without the Bureaucracy",
    copy: "We believe in defined processes and documented standards, not layers of approval for their own sake. Every company we build works the same way: clear expectations, real accountability and as little red tape as we can manage.",
  },
];

export type OpenPosition = {
  id: string;
  title: string;
  track: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
};

/**
 * No confirmed openings right now. A fabricated listing (a fake title, a
 * role nobody is actually hiring for) is worse than an honest empty state —
 * add real positions here as they're confirmed, the page already renders
 * them once this is non-empty.
 */
export const OPEN_POSITIONS: OpenPosition[] = [];

/**
 * Social links are intentionally omitted until real accounts exist. Do not
 * add "#" social hrefs — a fake but clickable link is worse than none.
 */
export const CONTACT = {
  email: "hello@sttps.co",
  location: "Colombo, Sri Lanka",
  /** Shared group line — verified via Tank Sudda's public LinkedIn listing. */
  whatsapp: "+94 74 100 4296",
  whatsappHref: "https://wa.me/94741004296",
};

export type CsrCommitment = {
  name: string;
  statement: string;
  pillars: { title: string; copy: string }[];
};

/**
 * The one, real community commitment the group has actually named — not a
 * scattered list of CSR ideas. Sustainability only appears in the main nav
 * because this exists; if it's ever retired, pull the nav link too rather
 * than leaving an empty promise live.
 */
export const CSR: CsrCommitment = {
  name: "Empower Foundation",
  statement:
    "Through the Empower Foundation, STTPS supports education, skills development, community wellbeing and empowerment. Our operating companies work in the real world, alongside real people and within the communities they serve. We believe that creates a responsibility to contribute beyond the transaction.",
  pillars: [
    { title: "Education", copy: "Creating access to learning and development." },
    {
      title: "Skills Development",
      copy: "Helping people build capabilities that improve their opportunities.",
    },
    {
      title: "Community Wellbeing",
      copy: "Supporting cleaner, healthier and stronger communities.",
    },
    {
      title: "Empowerment",
      copy: "Creating the confidence, resources and opportunity for people to move forward.",
    },
  ],
};

/**
 * Primary navigation. `label` is the full name used in the mobile menu and
 * the footer; `short` is the condensed form the desktop header row uses so
 * that eight items still fit on one line.
 */
export const NAV_LINKS = [
  { label: "About STTPS", short: "About", to: "/about" },
  { label: "Our Companies", short: "Companies", to: "/companies" },
  { label: "How We Build", short: "How We Build", to: "/how-we-build" },
  { label: "Group Capabilities", short: "Capabilities", to: "/capabilities" },
  { label: "Sustainability", short: "Sustainability", to: "/sustainability" },
  { label: "Governance", short: "Governance", to: "/governance" },
  { label: "Careers", short: "Careers", to: "/careers" },
  { label: "Contact", short: "Contact", to: "/contact" },
] as const;

/** Secondary navigation — surfaced in the footer and the mobile menu. */
export const SECONDARY_NAV = [
  { label: "Companies in Operation", to: "/companies/in-operation" },
  { label: "Companies in Development", to: "/companies/in-development" },
  { label: "News & Insights", to: "/news" },
  { label: "Policies", to: "/about/policies" },
] as const;

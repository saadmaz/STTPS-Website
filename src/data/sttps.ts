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

export type Company = {
  id: string;
  name: string;
  category: string;
  positioning: string;
  description: string;
  services: string[];
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

export const COMPANIES: Company[] = [
  {
    id: "tank-sudda",
    name: "Tank Sudda",
    category: "Water Tank Cleaning & Maintenance",
    positioning: "Cleaner water starts with a cleaner tank.",
    description:
      "Specialist water tank cleaning and maintenance for homes, buildings and commercial properties. Every job is scheduled, documented and repeatable.",
    services: [
      "Water tank cleaning",
      "Scheduled maintenance",
      "Residential services",
      "Commercial services",
      "Property care",
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
    category: "Operations, Cleaning & Maintenance",
    positioning: "The people behind the work.",
    description:
      "The operational backbone of the group. Trained teams, defined standards and reliable execution across cleaning, maintenance and facility operations.",
    services: [
      "Professional teams",
      "Reliable execution",
      "Cleaning",
      "Maintenance",
      "Operations & service quality",
    ],
    cta: "Meet Team Sudda",
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
    id: "polish-station",
    name: "Polish Station",
    category: "Automotive Detailing & Surface Care",
    positioning: "Precision care for every surface.",
    description:
      "Detailing built on craft. Paint correction, protection and interior care carried out with studio-level discipline and finish.",
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
  {
    id: "stopwash",
    name: "STOPWASH",
    category: "Car Wash & Vehicle Care",
    positioning: "Better car care. Made convenient.",
    description:
      "Everyday vehicle care without the wait. A fast, consistent wash experience designed around how people actually use their cars.",
    services: [
      "Car washing",
      "Exterior & interior cleaning",
      "Express detailing",
      "Vehicle care",
      "Convenient service experience",
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
];

export const PRINCIPLES = [
  { title: "Quality", copy: "We care about the result." },
  { title: "Systems", copy: "We build repeatable ways of working." },
  { title: "People", copy: "Great businesses are built by great teams." },
  { title: "Experience", copy: "Every interaction matters." },
];

export const MODEL_STEPS = [
  { no: "01", title: "Identify", copy: "Find real problems worth solving." },
  { no: "02", title: "Build", copy: "Create the brand, service and system." },
  { no: "03", title: "Operate", copy: "Build teams and operational excellence." },
  { no: "04", title: "Scale", copy: "Expand what works." },
];

export const LAYERS = [
  "Brand",
  "People",
  "Operations",
  "Technology",
  "Marketing",
  "Customer Experience",
];

/**
 * Metrics are intentionally editable. Set `value` to null to hide a metric.
 * Do not publish numbers that have not been verified.
 */
export const METRICS: { value: string | null; label: string }[] = [
  { value: "04", label: "Operating Companies" },
  { value: null, label: "Team Members" },
  { value: null, label: "Customers Served" },
  { value: null, label: "Services Delivered" },
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
 * Real, dated group updates — a new contract, a certification, a hire, a
 * launch. This is what /blogs renders as soon as one entry exists; no need
 * to wait on a CMS to say something happened. Do not add a placeholder
 * entry — the page's empty state already handles zero milestones honestly.
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
 */
export const ABOUT_SECTIONS: {
  slug: string;
  label: string;
  dek: string;
  body?: string[];
}[] = [
  {
    slug: "corporate-governance",
    label: "Corporate Governance",
    dek: "How the group is directed, structured and held accountable.",
  },
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
  { title: "Team", copy: "Field crews and service professionals." },
  { title: "Operations", copy: "Planning, scheduling and quality control." },
  { title: "Creative", copy: "Brand, content and design." },
  { title: "Technology", copy: "Systems, tooling and automation." },
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
  pillars: string[];
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
    "STTPS is committed to supporting communities through the Empower Foundation — creating meaningful opportunities and supporting initiatives that improve lives through education, skills development, community wellbeing and empowerment. As STTPS grows, our impact is meant to extend beyond business: time, resources and opportunity invested back into the communities around us.",
  pillars: ["Education", "Skills Development", "Community Wellbeing", "Empowerment"],
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Companies", to: "/companies" },
  { label: "Sustainability", to: "/sustainability" },
  { label: "Blogs", to: "/blogs" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
] as const;

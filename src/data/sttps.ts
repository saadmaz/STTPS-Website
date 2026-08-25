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
  /** Not yet confirmed for any brand — omit rather than guess. */
  serviceArea?: string;
  contactMethod?: ContactMethod;
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

/**
 * Titles beyond "Director" (Chairman, MD, etc.) and any ordering/hierarchy
 * aren't confirmed per-person yet — every entry uses the same generic role
 * rather than guessing seniority or a chair.
 */
export const BOARD_OF_DIRECTORS = [
  { name: "Ismail Hashim", role: "Director" },
  { name: "Salman Zumri", role: "Director" },
  { name: "Thalal Izzath", role: "Director" },
  { name: "Ibrahim Ifham", role: "Director" },
  { name: "Saad Mazhar", role: "Director" },
  { name: "Mijwadh Ali", role: "Director" },
];

/**
 * Drives the About header dropdown, the /about hub grid, and the sub-nav on
 * every /about/* page — order here is the order shown everywhere. "dek" is
 * a one-line, generically-true description of what the page covers; it must
 * not assert unverified specifics (an award, a policy detail, a founding
 * date) that haven't actually been supplied.
 */
export const ABOUT_SECTIONS = [
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
] as const;

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
 * Phone number and social links are intentionally omitted until real values
 * exist. Do not add placeholder tel: numbers or "#" social hrefs — a fake
 * but clickable contact detail is worse than none.
 */
export const CONTACT = {
  email: "hello@sttps.co",
  location: "Colombo, Sri Lanka",
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Companies", to: "/companies" },
  { label: "Blogs", to: "/blogs" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
] as const;

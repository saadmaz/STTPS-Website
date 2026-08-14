import tankSuddaImg from "@/assets/tank-sudda.jpg";
import teamSuddaImg from "@/assets/team-sudda.jpg";
import polishStationImg from "@/assets/polish-station.jpg";
import stopwashImg from "@/assets/stopwash.jpg";

export type Company = {
  id: string;
  name: string;
  category: string;
  positioning: string;
  description: string;
  services: string[];
  cta: string;
  image: string;
  motion: "fluid" | "human" | "reflective" | "velocity";
  /** oklch values, applied to --brand within the section */
  brand: string;
  brandInk: string;
  surface: string;
};

export const COMPANIES: Company[] = [
  {
    id: "tank-sudda",
    name: "Tank Sudda",
    category: "Water Tank Cleaning & Maintenance",
    positioning: "Cleaner water starts with a cleaner tank.",
    description:
      "Specialist water tank cleaning and maintenance for homes, buildings and commercial properties — delivered on schedule, documented and repeatable.",
    services: [
      "Water tank cleaning",
      "Scheduled maintenance",
      "Residential services",
      "Commercial services",
      "Property care",
    ],
    cta: "Explore Tank Sudda",
    image: tankSuddaImg,
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
    image: teamSuddaImg,
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
    image: polishStationImg,
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
    image: stopwashImg,
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

export const CAREER_TRACKS = [
  { title: "Team", copy: "Field crews and service professionals." },
  { title: "Operations", copy: "Planning, scheduling and quality control." },
  { title: "Creative", copy: "Brand, content and design." },
  { title: "Technology", copy: "Systems, tooling and automation." },
  { title: "Leadership", copy: "Company builders and operators." },
];

export const CONTACT = {
  email: "hello@sttps.lk",
  phone: "+94 77 000 0000",
  location: "Colombo, Sri Lanka",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Companies", to: "/companies" },
  { label: "Ventures", to: "/ventures" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
] as const;

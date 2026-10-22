export interface BrandProject {
  slug: string;
  route: string;
  title: string;
  shortTitle: string;
  marqueeLogo: string;
  thumbnail: string;
  behanceUrl: string;
  description: string;
  category: string;
  /** Per-logo scale multiplier to visually balance different artwork sizes */
  scale?: number;
}

export const brandProjects: BrandProject[] = [
  {
    slug: "foxenco",
    route: "/projects/foxenco",
    title: "FoxeNco — Modern Clothing Brand Identity",
    shortTitle: "FoxeNco",
    marqueeLogo: "FoxeNco.png",
    thumbnail: "foxenco-thumbnail.jpg",
    behanceUrl: "https://www.behance.net/gallery/255366575/FoxeNco-Modern-Clothing-Brand-Identity",
    category: "Clothing Brand",
    description:
      "A modern clothing brand identity built around a bold, confident fox mark. The system pairs a clean wordmark with a versatile emblem suited for apparel tags, packaging, and digital surfaces.",
    scale: 1,
  },
  {
    slug: "fairhome",
    route: "/projects/fairhome",
    title: "FairHome — Construction Logo & Brand Identity",
    shortTitle: "FairHome",
    marqueeLogo: "fairhome.png",
    thumbnail: "fairhome-thumbnail.png",
    behanceUrl: "https://www.behance.net/gallery/245894075/FairHome-Construction-Logo-Brand-Identity",
    category: "Construction",
    description:
      "A construction and real-estate brand identity centered on trust and structure. The mark combines a roofline with a protective shield, conveying reliability for home buyers and partners.",
    scale: 1.05,
  },
  {
    slug: "visa-seekers",
    route: "/projects/visa-seekers",
    title: "Visa Seekers — Travel Agency Brand Identity",
    shortTitle: "Visa Seekers",
    marqueeLogo: "visa-seekers.png",
    thumbnail: "visa-seekers-thumbnail.jpg",
    behanceUrl: "https://www.behance.net/gallery/213239055/Brand-Identity-Visa-Seekers-(-Travel-Agency-)",
    category: "Travel Agency",
    description:
      "A travel-agency brand identity representing movement and global access. The logo fuses a passport and an upward path, communicating seamless visa and travel services.",
    scale: 1.1,
  },
  {
    slug: "toda-group",
    route: "/projects/toda-group",
    title: "Toda Group — Brand & Logo Design",
    shortTitle: "Toda Group",
    marqueeLogo: "toda-group.png",
    thumbnail: "toda-group-thumbnail.jpg",
    behanceUrl: "https://www.behance.net/gallery/241455891/Toda-Group-Brand-Logo-Design",
    category: "Corporate Group",
    description:
      "A corporate brand identity for a diversified group. The geometric monogram signals stability and modern enterprise, adaptable across subsidiary ventures and stationery.",
    scale: 1,
  },
  {
    slug: "digital-agency",
    route: "/projects/digital-agency",
    title: "Digital Agency Logo Design and Branding",
    shortTitle: "Digital Agency",
    marqueeLogo: "digital-agency.png",
    thumbnail: "digital-agency-thumbnail.jpg",
    behanceUrl: "https://www.behance.net/gallery/223832121/Digital-Agency-Logo-Design-and-Branding",
    category: "Digital Agency",
    description:
      "A branding system for a digital agency. The abstract mark evokes pixels and connection, positioning the agency as a forward-thinking partner for online growth.",
    scale: 1.05,
  },
  {
    slug: "real-estate-construction",
    route: "/projects/real-estate-construction",
    title: "Real Estate & Construction — Logo and Branding",
    shortTitle: "Real Estate & Construction",
    marqueeLogo: "real-estate-construction.png",
    thumbnail: "real-estate-construction-thumbnail.jpg",
    behanceUrl: "https://www.behance.net/gallery/220122025/Real-Estate-Construction-Logo-Branding-Logo-Design",
    category: "Real Estate",
    description:
      "A logo and branding kit for a real estate and construction firm. The emblem blends a building silhouette with a handshake foundation, communicating quality and partnership.",
    scale: 1.1,
  },
  {
    slug: "madras-spice",
    route: "/projects/madras-spice",
    title: "Madras Spice — Logo and Visual Identity",
    shortTitle: "Madras Spice",
    marqueeLogo: "madras-spice.png",
    thumbnail: "madras-spice-thumbnail.jpg",
    behanceUrl: "https://www.behance.net/gallery/204402613/Logo-And-Visual-Identity-for-Madras-spice-restaurants",
    category: "Restaurant",
    description:
      "A visual identity for a restaurant celebrating spice and heritage. The mark pairs a chili silhouette with traditional lettering, warm and appetizing across menus and signage.",
    scale: 1.1,
  },
  {
    slug: "agro-food",
    route: "/projects/agro-food",
    title: "Agro Food — Agriculture Brand Identity",
    shortTitle: "Agro Food",
    marqueeLogo: "agro-food.png",
    thumbnail: "agro-food-thumbnail.jpg",
    behanceUrl: "https://www.behance.net/gallery/216597169/Agro-Food-Agro-Farm-Agriculture-Logo",
    category: "Agriculture",
    description:
      "An agriculture brand identity for an agro-farm business. The mark combines a leaf and a wheat stalk, expressing natural quality and farm-to-table sourcing.",
    scale: 1.05,
  },
];

export interface WebProject {
  slug: string;
  route: string;
  title: string;
  shortTitle: string;
  thumbnail: string;
  liveUrl: string;
  githubUrl: string;
  description: string;
  overview: string;
  features: string[];
  stack: string[];
  challenges: string[];
  futureIdeas: string[];
}

export const webProjects: WebProject[] = [
  {
    slug: "bazar-dor",
    route: "/web-projects/bazar-dor",
    title: "Bazar Dor",
    shortTitle: "Bazar Dor",
    thumbnail: "bazar-dor-thumbnail.png",
    liveUrl: "https://bazar-dor-navy-nine.vercel.app/",
    githubUrl: "https://github.com/shakibhasanonly/bazar-dor",
    description: "A Bangla-language website for viewing essential products and market prices.",
    overview:
      "Bazar Dor is a Bangla-language platform that helps users browse essential products and check current market prices. The interface is localized for a Bengali-speaking audience and focused on quick, readable price lookup.",
    features: [
      "Bangla-language interface for local accessibility",
      "Browse essential products and categories",
      "View current market prices",
    ],
    stack: ["React", "Tailwind CSS", "JavaScript"],
    challenges: [
      "Presenting Bangla text and numerals with consistent typography across browsers.",
    ],
    futureIdeas: [
      "Add live price updates from a connected data source",
      "Expand product categories and search filters",
    ],
  },
  {
    slug: "fitlog",
    route: "/web-projects/fitlog",
    title: "FitLog",
    shortTitle: "FitLog",
    thumbnail: "fitlog-thumbnail.png",
    liveUrl: "https://fitlog-sigma-gules.vercel.app/",
    githubUrl: "https://github.com/shakibhasanonly/fitlog",
    description: "A responsive workout library built with Next.js and Tailwind CSS.",
    overview:
      "FitLog is a responsive workout library that organizes exercises into clear categories so users can browse and find routines quickly. Built with Next.js and Tailwind CSS for fast, app-like navigation.",
    features: [
      "Responsive workout library with categorized exercises",
      "Fast client-side navigation",
      "Mobile-first layout",
    ],
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    challenges: [
      "Structuring exercise data so categories stay readable on small screens.",
    ],
    futureIdeas: [
      "Add saved routines and progress tracking",
      "Integrate exercise video demonstrations",
    ],
  },
  {
    slug: "itqan-mart",
    route: "/web-projects/itqan-mart",
    title: "Itqan Mart",
    shortTitle: "Itqan Mart",
    thumbnail: "itqan-mart-thumbnail.png",
    liveUrl: "https://itqanmart.vercel.app/",
    githubUrl: "https://github.com/shakibhasanonly/itqanmart",
    description: "An online gadget shop featuring electronic products.",
    overview:
      "Itqan Mart is an online gadget shop showcasing electronic products with clean product cards and a focus on quick browsing. The storefront is designed for clarity across desktop and mobile.",
    features: [
      "Browse electronic gadgets with product cards",
      "Responsive storefront layout",
      "Quick product details view",
    ],
    stack: ["React", "Tailwind CSS", "JavaScript"],
    challenges: [
      "Keeping product imagery crisp without slowing page load.",
    ],
    futureIdeas: [
      "Add a cart and checkout flow",
      "Add product search and filtering",
    ],
  },
  {
    slug: "devstack",
    route: "/web-projects/devstack",
    title: "DevStack",
    shortTitle: "DevStack",
    thumbnail: "devstack-thumbnail.png",
    liveUrl: "https://dev-stack-tan.vercel.app/",
    githubUrl: "https://github.com/shakibhasanonly/dev-stack",
    description: "A web development project showcasing a developer-focused interface.",
    overview:
      "DevStack is a web development project presenting a developer-focused interface. The layout emphasizes content structure and readability for a technical audience.",
    features: [
      "Developer-focused, content-first layout",
      "Responsive structure across devices",
    ],
    stack: ["React", "Tailwind CSS", "JavaScript"],
    challenges: [
      "Balancing a clean developer aesthetic with enough visual hierarchy.",
    ],
    futureIdeas: [
      "Add interactive code snippets and project filtering",
      "Integrate a blog or notes section",
    ],
  },
];

export interface Skill {
  name: string;
  icon: string; // key into skillIcons
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
      { name: "REST APIs", icon: "api" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "AI-assisted Development", icon: "ai" },
    ],
  },
  {
    title: "Design",
    skills: [
      { name: "Adobe Photoshop", icon: "photoshop" },
      { name: "Adobe Illustrator", icon: "illustrator" },
      { name: "Brand Identity Design", icon: "brand" },
      { name: "Logo Design", icon: "logo" },
      { name: "Social Media Design", icon: "social" },
      { name: "Print Design", icon: "print" },
      { name: "UI Graphics", icon: "ui" },
    ],
  },
];

export const stats = [
  { value: "3+ Years", label: "Design & Building" },
  { value: "30+ Projects", label: "Completed" },
  { value: "5", label: "Core Skill Areas" },
  { value: "∞", label: "Curiosity & Drive" },
];

export const socialLinks = [
  { label: "GitHub", url: "https://github.com/shakibhasanonly", icon: "github" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/shakibhasanonly/", icon: "linkedin" },
  { label: "Facebook", url: "https://www.facebook.com/shakibhasanonly/", icon: "facebook" },
  { label: "Instagram", url: "https://www.instagram.com/shakibhasanonly/", icon: "instagram" },
  { label: "Behance", url: "https://www.behance.net/shakibhasanonly/", icon: "behance" },
];

export const contactInfo = {
  email: "mdshakibhasann50@gmail.com",
  phone: "01644556273",
  whatsapp: "https://wa.me/8801644556273",
  location: "Meherpur Sadar, Meherpur, Bangladesh",
};

export const movingBannerPhrases = [
  "Full Stack Development",
  "Brand Identity Design",
  "Creative Collaboration",
  "Responsive Interfaces",
  "Visual Identity Systems",
  "Web Experiences",
];

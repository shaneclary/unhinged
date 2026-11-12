// Facts about the business. One place, used by pages, structured data and llms.txt.
// Everything here comes from the current unhingedgeology.com unless marked otherwise.

export const site = {
  name: "Unhinged Geology",
  legalName: "Unhinged Geology LLC",
  // Live address. Canonical URLs, sitemap and llms.txt are built from this.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.unhingedgeology.com").replace(/\/$/, ""),
  // Staging stays out of search engines until this is set to "true" at cutover.
  indexable: process.env.NEXT_PUBLIC_INDEXABLE === "true",
  principal: "Liam Eades",
  // The current site's meta description, word for word.
  description:
    "Unhinged Geology is an exploration and geology consulting company specializing in lithium clay deposits, epithermal silver and gold systems, and placer gold exploration. Led by exploration geologist Liam Eades, the company provides geological modeling, drilling strategy, claim evaluations, mapping, mineral exploration consulting for projects across Nevada and the western United States.",
  tagline: "Exploration Strategy | Drill Targeting | Geological Modeling | Project Evaluation",
  address: {
    street: "649 Ketten Rd",
    city: "Tonopah",
    region: "NV",
    postalCode: "89049",
    country: "US",
  },
  // Handles are shown on the current site. The full URLs are built from them: confirm before launch.
  social: [
    { label: "Instagram", url: "https://www.instagram.com/unhinged_geology" },
    { label: "X", url: "https://x.com/unhingedgeology" },
  ],
  logo: "https://images.squarespace-cdn.com/content/v1/66b843a56779cb0ed61df496/13dae664-e006-4a98-b1cf-030f798b7a1c/D2DDEA00-BDF8-4FD5-9ED7-1267C3FFA7DF.JPEG?format=1500w",
  areaServed: ["Nevada", "Western United States"],
  knowsAbout: [
    "Mineral exploration",
    "Lithium clay deposits",
    "Epithermal gold and silver systems",
    "Placer gold exploration",
    "Drill program planning",
    "Geological modeling",
    "Geologic mapping and sampling",
    "Mineral property evaluation",
  ],
} as const;

// Same addresses as the current Squarespace site, so no link or ranking is lost at cutover.
export const routes = {
  home: "/",
  about: "/about-unhinged-geology",
  team: "/join-our-team",
  services: "/geology-consulting-services",
  nevada: "/nevada-exploration-geology-consultant",
  news: "/news",
  contact: "/contact-geology-consultant",
  faq: "/faq",
  calculators: "/calculators",
  resources: "/resources",
  articles: "/exploration-geology-insights",
  // New in this build.
  learn: "/learn",
  glossary: "/glossary",
  proposed: "/proposed-additions",
} as const;

export const nav = [
  { label: "Services", href: routes.services },
  { label: "Nevada Exploration", href: routes.nevada },
  { label: "Learn", href: routes.learn },
  { label: "Calculators", href: routes.calculators },
  { label: "About", href: routes.about },
  { label: "Contact", href: routes.contact },
] as const;

export const footerNav = [
  {
    heading: "Company",
    links: [
      { label: "About Unhinged Geology", href: routes.about },
      { label: "Join Our Team", href: routes.team },
      { label: "News", href: routes.news },
      { label: "Contact", href: routes.contact },
    ],
  },
  {
    heading: "Work",
    links: [
      { label: "Services", href: routes.services },
      { label: "Nevada Exploration", href: routes.nevada },
      { label: "FAQ", href: routes.faq },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Learn", href: routes.learn },
      { label: "Glossary", href: routes.glossary },
      { label: "Calculators", href: routes.calculators },
      { label: "Exploration & Field Resources", href: routes.resources },
      { label: "Articles", href: routes.articles },
    ],
  },
] as const;

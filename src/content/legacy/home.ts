// Home page copy from the current unhingedgeology.com.
//
// exact: true  -> word for word from the current site.
// exact: false -> a close paraphrase. The fetch tool caps quoted text, so body
//                 paragraphs came back reworded. Swap in Liam's exact text on import.
// Nothing here is new writing. New ideas live in src/content/proposed.ts.

const CDN = "https://images.squarespace-cdn.com/content/v1/66b843a56779cb0ed61df496";

export const home = {
  hero: {
    brand: { text: "UNHINGED GEOLOGY", exact: true },
    tagline: { text: "Exploration Strategy | Drill Targeting | Geological Modeling | Project Evaluation", exact: true },
    heading: { text: "Geological Consulting & Field Services for Mineral Exploration", exact: true },
    body: {
      text: "Practical, field-driven geological consulting for mineral exploration in Nevada and the western US, serving junior explorers, private owners, prospect generators, investors, and operators with evaluation, strategy, drill targeting, modeling, mapping, sampling, and drill support.",
      exact: false,
    },
    image: `${CDN}/1c158862-ba43-41ff-aac8-9d6c45a43427/unnamed+%281%29.jpg`,
  },
  model: {
    label: { text: "Built for Exploration, Not Just Reporting", exact: true },
    heading: { text: "Unhinged Geology was Built to Challenge the Outdated Consulting Model.", exact: true },
    lede: {
      text: "We don't just write reports and hand over recommendations. We help run exploration programs.",
      exact: true,
    },
    body: {
      text: "The firm works through the full exploration cycle, from early evaluation and target generation through drill management, field operations, modeling, and interpretation. Its focus is Nevada and the western US, covering lithium, gold, silver, and critical minerals.",
      exact: false,
    },
    cycle: ["Evaluate it.", "Target it.", "Drill it.", "Understand it."],
    image: `${CDN}/a94cb116-c06f-4425-8684-e862901ebfab/truck+and+rig.jpg`,
    imageAlt: "Truck and drill rig on an exploration site",
  },
  partner: {
    heading: { text: "Your trusted partner in geological consulting services across the US", exact: true },
    buttons: ["Latest News", "Resources", "Articles"],
  },
  why: {
    heading: { text: "Why Unhinged Geology?", exact: true },
    image: `${CDN}/338ef030-bee0-4153-a3eb-75869df70beb/IMG_7700.jpg`,
    points: [
      {
        title: "Built for Exploration, Not Just Reporting",
        text: "We don't just write reports and hand over recommendations. We help run exploration programs.",
        exact: true,
      },
      {
        title: "Nevada Field Experience",
        text: "Work grounded in active Nevada exploration, including lithium clay basins, structurally controlled precious-metal systems, epithermal targets, and basin-scale evaluation.",
        exact: false,
      },
      {
        title: "Practical Technical Judgment",
        text: "Focus on geology, structure, target quality, data reliability, permitting, drill access, budget efficiency, and the client's next decision.",
        exact: false,
      },
      {
        title: "Flexible Support Model",
        text: "Short-term reviews, seasonal drill campaigns, long-term advisory roles, and full field execution.",
        exact: false,
      },
      {
        title: "Trusted Network",
        text: "Relationships with Nevada field support, permitting and environmental specialists, QP-level geologists, and technical contractors.",
        exact: false,
      },
    ],
  },
  featured: {
    label: { text: "Featured Projects", exact: true },
    heading: { text: "The Lida Valley Lithium Project", exact: true },
    subtitle: { text: "A B&N Mining Company LLC property", exact: true },
    body: {
      text: "A district-scale, clay-hosted lithium asset in Nevada's Lida Valley Basin, combining the original LVL claims with the adjacent EZ and Gemini blocks. Three years of mapping, drilling, and geophysics have confirmed lithium-bearing claystone within conductive sedimentary sequences. Unhinged Geology has advised the owner for two years, including a TEM survey to refine targets ahead of planned 2026 drilling.",
      exact: false,
    },
    link: { label: "Learn more", href: "https://lidavalleylithium.com" },
    image: `${CDN}/3855916f-b475-46cc-a54d-e5fb6f9831e2/drill_results+map.jpg`,
    imageAlt: "Map of Lida Valley Lithium Project in Lida Valley Nevada",
    hillshade: `${CDN}/925e3404-7eee-4b26-aa82-0d63555f5a35/Orange+HillSahde.jpg`,
  },
  work: {
    heading: { text: "Work With Unhinged Geology", exact: true },
    body: {
      text: "Most properties fail through poor or incomplete evaluation or a missing exploration model. The firm helps clients assess projects quickly, identify the strongest opportunities, and design practical next-step programs, supporting evaluations, target generation, program design, modeling, mapping, sampling, and drill support.",
      exact: false,
    },
    cta: "Request a Consultation Today",
    servicesCta: "View Our Services",
    image: `${CDN}/b2b7bb1c-b9e2-4626-affa-efa70425421c/unnamed.jpg`,
  },
} as const;

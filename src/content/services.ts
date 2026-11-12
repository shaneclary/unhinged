// The six services on the current home page.
// name: word for word from the current site.
// summary: a close paraphrase of the current site (the fetch tool would not return
// the body text word for word). Replace with Liam's exact text on import.
// See docs/CONTENT-STATUS.md.

const CDN = "https://images.squarespace-cdn.com/content/v1/66b843a56779cb0ed61df496";

export type ServiceId = "evaluation" | "drilling" | "mapping" | "strategy" | "modeling" | "logistics";

export type Service = {
  id: ServiceId;
  /** Map-unit style symbol used to tag related guides and calculators. */
  symbol: string;
  name: string;
  summary: string;
  covers: string[];
  image: string;
  learn: string[];
};

export const services: Service[] = [
  {
    id: "evaluation",
    symbol: "Pe",
    name: "Mineral Property Evaluation",
    summary:
      "Independent review of claims, historic mines, datasets, and exploration upside, for acquisitions, investor review, joint ventures, and early screening.",
    covers: ["Claims", "Historic mines", "Datasets", "Exploration upside"],
    image: `${CDN}/9b0953fe-5d16-49ca-a7e1-2e3831095170/Screenshot+2026-07-03+085038.jpg`,
    learn: ["evaluating-a-mineral-property", "nevada-mining-claims", "resources-and-reserves"],
  },
  {
    id: "drilling",
    symbol: "Dp",
    name: "Drill Program Planning & Support",
    summary:
      "Collar planning, RC and core logging support, sampling workflows, QA/QC, contractor coordination, daily interpretation, and post-drilling review.",
    covers: ["Collar planning", "RC and core logging", "Sampling and QA/QC", "Daily interpretation"],
    image: `${CDN}/021f2da2-b595-4534-a1d4-0d05b6966afb/Screenshot+2026-07-03+085129.jpg`,
    learn: ["rc-vs-core-drilling", "sampling-and-qaqc", "reading-assay-results"],
  },
  {
    id: "mapping",
    symbol: "Ms",
    name: "Mapping & Sampling",
    summary:
      "Reconnaissance and target-scale mapping of lithology, structure, alteration, and mineralization, with rock-chip, soil, and field sampling support.",
    covers: ["Lithology", "Structure", "Alteration", "Rock-chip and soil sampling"],
    image: `${CDN}/511f3f2a-da81-40ea-b7e1-01424e71a263/Screenshot+2026-07-03+085155.jpg`,
    learn: ["sampling-and-qaqc", "epithermal-gold-silver", "placer-gold"],
  },
  {
    id: "strategy",
    symbol: "St",
    name: "Exploration Strategy & Target Generation",
    summary:
      "Practical exploration models built from multiple data types, used to rank targets and prioritize the next phase.",
    covers: ["Exploration models", "Target ranking", "Next-phase priorities"],
    image: `${CDN}/a49b21e9-010c-4c43-a597-9fc899a824f5/Screenshot+2026-07-03+085116.jpg`,
    learn: ["how-exploration-works", "lithium-claystone-nevada", "epithermal-gold-silver"],
  },
  {
    id: "modeling",
    symbol: "Gm",
    name: "Geological Modeling & Data Integration",
    summary:
      "Leapfrog modeling, GIS compilation, drillhole database and assay review, cross-sections, correlation, geophysical integration, and figure preparation.",
    covers: ["Leapfrog modeling", "GIS compilation", "Drillhole database review", "Cross-sections"],
    image: `${CDN}/bd54b657-3674-4fd9-9acd-29a801e56f3f/Screenshot+2026-07-03+085142.jpg`,
    learn: ["reading-assay-results", "resources-and-reserves", "lithium-claystone-nevada"],
  },
  {
    id: "logistics",
    symbol: "Fl",
    name: "Field Logistics & Technical Support",
    summary:
      "Claim staking coordination, logistics, contractor coordination, access review, site documentation, and partner coordination.",
    covers: ["Claim staking coordination", "Contractors", "Access review", "Site documentation"],
    image: `${CDN}/f07f9215-2629-4934-aea6-f98dd2be121d/Screenshot+2026-07-03+085209.jpg`,
    learn: ["nevada-mining-claims", "exploration-permitting-nevada", "how-exploration-works"],
  },
];

export const serviceById = (id: ServiceId) => services.find((service) => service.id === id)!;

import { type Topic, p, h, ul, table, note } from "./types.ts";

export const explorationPermittingNevada: Topic = {
  slug: "exploration-permitting-nevada",
  title: "Permitting mineral exploration in Nevada",
  description:
    "Casual use, Notice and Plan of Operations on BLM land in Nevada: the five-acre line, the 15-day rule, reclamation bonds and state permits.",
  answer:
    "On BLM land in Nevada, exploration that disturbs five acres or less runs under a Notice filed with the BLM field office at least 15 days before work starts, with a reclamation bond posted first. Disturbing more than five acres needs a Plan of Operations, environmental review, and a state reclamation permit.",
  services: ["logistics", "drilling"],
  reviewed: false,
  updated: "2026-11-12",
  float: [
    p("Most land in Nevada belongs to everyone. So before you drive a drill onto it and dig, you have to tell the people who look after it."),
    p("If the job is small, you send in a notice and wait at least 15 days. You also put down money as a promise that you will clean up."),
    p("If the job is big, you need full permission first. That takes a lot longer."),
    p("When you are done, you put the land back the way it was. Then you get your money back."),
  ],
  outcrop: [
    h("Three levels on BLM land"),
    table(
      "What you need, by size of job",
      ["Level", "What it covers", "What you file", "Bond"],
      [
        ["Casual use", "Hand tools, hand sampling, little or no disturbance", "Nothing", "No"],
        ["[[notice|Notice]]", "Exploration disturbing 5 acres or less", "A Notice, at least 15 days before starting", "Yes, before work starts"],
        ["[[plan-of-operations|Plan of Operations]]", "More than 5 acres, bulk samples of 1,000 tons or more, any mining", "A Plan. BLM approval and environmental review", "Yes"],
      ],
    ),
    h("What counts toward five acres"),
    p("Everything you disturb and have not yet reclaimed: drill pads, sumps, new roads, cross-country travel routes and trenches. Reclaiming as you go keeps the running total down."),
    h("The bond"),
    p("A [[reclamation-bond|reclamation bond]] is a financial guarantee sized to the cost of putting the ground back. It is set from a cost estimate for your actual roads, pads and trenches. You get it released after the reclamation is accepted."),
    h("The state side"),
    p("Nevada's Division of Environmental Protection regulates reclamation too. Exploration that disturbs five acres or less in a calendar year needs no state reclamation permit. More than that does. For larger projects the BLM and the state work from one joint cost estimate and bond."),
    h("Not all land is BLM land"),
    ul(
      "National Forest land has its own rules and no five-acre notice tier. Most drilling there needs an approved plan.",
      "Private land has no BLM process, but the state rules above still apply.",
      "Some areas need a Plan of Operations for any work beyond casual use, however small.",
    ),
    h("Other things to line up"),
    ul(
      "Water for drilling, and plugging drill holes when you finish, which are overseen by the Nevada Division of Water Resources.",
      "Cultural sites and wildlife. Seasonal limits can apply.",
      "Claims. A claim alone does not authorize disturbance.",
    ),
  ],
  core: [
    h("The federal rule: 43 CFR 3809"),
    table(
      "Key sections",
      ["Section", "Subject"],
      [
        ["3809.5", "Definitions, including casual use"],
        ["3809.11", "When a Plan of Operations is required"],
        ["3809.21", "When a Notice is required: 15 calendar days before starting exploration that disturbs 5 acres or less"],
        ["3809.301", "What a Notice must contain"],
        ["3809.311 to 3809.313", "BLM review of a Notice"],
        ["3809.332 to 3809.333", "A Notice lasts two years and can be extended"],
        ["3809.420", "Performance standards"],
        ["3809.500 series", "Financial guarantees"],
      ],
    ),
    h("Notice contents"),
    ul(
      "Operator information and the claims or land involved.",
      "A description of the activity, with a map of access routes and disturbance.",
      "A reclamation plan.",
      "A reclamation cost estimate. In Nevada the BLM and the state provide a standardized cost estimator for this.",
    ),
    p("The 15 days run from a complete Notice. An incomplete one stops the clock. Work cannot start until the BLM has accepted the financial guarantee. A Notice is not an approval and is not a federal action in the way a Plan is, but the operator remains bound by the performance standards and by the duty to prevent unnecessary or undue degradation."),
    h("Limits on using Notices"),
    ul(
      "A Notice covers exploration only. Mining, at any scale, needs a Plan.",
      "Bulk samples of 1,000 tons or more need a Plan.",
      "Splitting one project into adjacent or overlapping Notices to stay under five acres is not allowed.",
      "In listed special-status areas, anything beyond casual use needs a Plan.",
    ),
    h("Plan of Operations"),
    p("A Plan describes the whole proposed operation, its reclamation, and monitoring. BLM approval is a federal decision, so environmental review under NEPA applies, along with cultural resource and wildlife consultation. Exploration Plans are commonly written for a total disturbance ceiling to be used in phases, so drilling can follow results without a new approval each time. Timelines are measured in months to more than a year and depend on the field office and the resources present."),
    h("Nevada: NRS and NAC 519A"),
    ul(
      "Exploration disturbing not more than 5 acres in a calendar year, counted within a one-mile radius, needs no state reclamation permit.",
      "Above that, an exploration reclamation permit with a reclamation plan and financial assurance is required from the Bureau of Mining Regulation and Reclamation.",
      "The BLM and NDEP coordinate so one cost estimate and one bond instrument can serve both.",
      "Nevada operates a state bond pool that eligible operators can use to meet bonding requirements.",
    ),
    h("Occupancy, water and holes"),
    ul(
      "Camps and structures on public land fall under the use and occupancy rules at 43 CFR 3715.",
      "Water for drilling and the plugging of exploration boreholes are regulated by the Nevada Division of Water Resources.",
      "Holes that meet water need particular care in plugging to prevent mixing between aquifers.",
    ),
    h("Planning a program around the rules"),
    ul(
      "Lay out pads and access on existing roads and disturbance where the geology allows.",
      "Total the acreage before finalizing the drill plan. Access roads usually dominate.",
      "Reclaim finished pads and roads during the program to stay inside the limit.",
      "File early. Bond processing and field-office workload, not the 15 days, usually set the schedule.",
      "Check seasonal wildlife restrictions before fixing drill dates.",
    ),
    note("Rules and agency practice change, and special designations vary by location. Confirm requirements with the BLM field office and NDEP for the specific ground before committing to a schedule. This is not legal advice."),
  ],
  faqs: [
    {
      q: "Do I need a permit to drill on a mining claim in Nevada?",
      a: "Yes. On BLM land, drilling is beyond casual use. A program disturbing five acres or less needs a Notice filed at least 15 days ahead and a reclamation bond in place before work starts. Larger programs need a Plan of Operations.",
    },
    {
      q: "How long does a BLM Notice take?",
      a: "The BLM has 15 calendar days to review a complete Notice. Allow more time in practice, because an incomplete Notice stops the clock and the bond must be accepted before you start.",
    },
    {
      q: "How much is an exploration reclamation bond?",
      a: "It is set by a reclamation cost estimate for your specific disturbance: the roads, pads, sumps and trenches you plan to build. There is no flat rate.",
    },
    {
      q: "Do I need a permit to take rock samples?",
      a: "Hand sampling with hand tools that causes negligible disturbance is generally casual use and needs no Notice. Mechanized trenching or road building does.",
    },
    {
      q: "Does the five-acre limit reset?",
      a: "Disturbance counts until it is reclaimed. Once reclamation is complete and accepted, that area no longer counts toward the five acres.",
    },
  ],
  terms: ["notice", "plan-of-operations", "reclamation-bond", "blm", "mining-claim", "bulk-sample"],
  sources: [
    { label: "eCFR, 43 CFR 3809.21: When do I have to submit a notice?", url: "https://www.ecfr.gov/current/title-43/subtitle-B/chapter-II/subchapter-C/part-3800/subpart-3809/subject-group-ECFR756fd0a32677e93/section-3809.21" },
    { label: "BLM, Surface Management of Locatable Minerals (presentation, 2024)", url: "https://minerals.nv.gov/uploadedFiles/mineralsnvgov/content/Programs/Mining/BLM%202024%20Surface%20Disturbance.pdf" },
    { label: "Nevada Division of Minerals, Comparison of Federal and State Small Exploration and Small Mining Project Authorities", url: "https://minerals.nv.gov/uploadedFiles/mineralsnvgov/content/home/Comparison%20of%20Federal%20and%20State%20Small%20Exploration%20and%20Small%20Mining%20Project%20Authorities.pdf" },
    { label: "BLM Nevada, 3809 Reclamation Bonding Guidelines", url: "https://www.blm.gov/sites/blm.gov/files/uploads/NV_3809%20Reclamation%20Bonding%20Guidelines.pdf" },
  ],
};

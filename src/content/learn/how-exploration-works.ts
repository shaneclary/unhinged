import { type Topic, p, h, ul, ol, table, note } from "./types.ts";

export const howExplorationWorks: Topic = {
  slug: "how-exploration-works",
  title: "How mineral exploration works",
  description:
    "The four stages of mineral exploration: evaluate the ground, build a target, drill it, and understand the result before spending more.",
  answer:
    "Mineral exploration is a staged process of narrowing down. You evaluate a property, build a target, drill it, then use the results to decide whether to keep spending. Each stage costs more than the last, so the job is to learn the most for the least before moving on.",
  services: ["strategy", "evaluation", "drilling"],
  reviewed: false,
  updated: "2026-11-12",
  float: [
    p("Finding a mine is like looking for a lost ring in a big field. You do not dig up the whole field. You look for clues first."),
    p("First you check what people already know about the place. Then you walk the ground and pick up rocks. Then you choose the best spot and drill a hole to see what is under it."),
    p("Most places turn out to have nothing worth mining. That is normal. Good exploration finds that out fast and cheap, then moves on to the next spot."),
    h("The four steps"),
    ol(
      "Evaluate it. Is this ground worth a look?",
      "Target it. Where exactly should we test?",
      "Drill it. Put a hole there.",
      "Understand it. What did the hole tell us?",
    ),
  ],
  outcrop: [
    p("Exploration is a funnel. Many properties go in at the top. Very few come out the bottom as mines. The work is built in stages so that the cheap questions get answered before the expensive ones."),
    table(
      "The exploration cycle",
      ["Stage", "The question", "Typical work", "What you walk away with"],
      [
        ["Evaluate", "Is this ground worth more money?", "Title and land status, past work, data review, a site visit", "Keep it or walk away, with reasons"],
        ["Target", "Where is the best place to test?", "Mapping, rock and soil sampling, geophysics, a geologic model", "Ranked drill targets"],
        ["Drill", "Is it there?", "Permits and bond, [[rc-drilling|RC]] or [[core|core]] drilling, logging, sampling, [[qaqc|QA/QC]]", "[[assay|Assays]] and logs you can trust"],
        ["Understand", "What does it mean, and what next?", "Sections, modeling, comparing results to the model", "Step out, infill, or stop"],
      ],
    ),
    h("Why the order matters"),
    p("Cost climbs at every step. A data review costs little. A mapping and sampling program costs more. Drilling is usually the largest single cost. Drilling before the mapping is done is how money gets wasted."),
    p("Each stage ends with a decision. If the answer is no, you stop there. Stopping early on a weak property is a good result. It frees the budget for a better one."),
    h("What a target is"),
    p("A target is a specific place, depth and direction to test, with a reason behind it. The reason comes from a [[deposit-model|deposit model]]: a working idea of what kind of deposit could be there and what it should look like. A drill hole without a model behind it is a guess."),
  ],
  core: [
    h("Stage 1: evaluation"),
    ul(
      "Land and title. Claim status in BLM records, chain of title at the county recorder, overlaps with senior claims, royalties and other burdens, withdrawals and special designations.",
      "Compilation. Published maps and reports from the Nevada Bureau of Mines and Geology and the USGS, historical company reports, drill logs, assay certificates, geophysical surveys.",
      "Data verification. Can the historical drilling be located on the ground? Do database values match the lab certificates? Is there any record of QA/QC? Which coordinate datum was used?",
      "Site visit. Outcrop, alteration, old workings, access, and a first set of check samples.",
    ),
    h("Stage 2: target generation"),
    p("The deposit model decides the tools. Methods are chosen for the physical or chemical contrast the model predicts."),
    table(
      "Matching method to target",
      ["Method", "What it responds to", "Typical use"],
      [
        ["Geologic mapping", "Rock type, structure, alteration, mineralization at surface", "Every project. The base layer for everything else"],
        ["Rock-chip and soil geochemistry", "Metal and [[pathfinder|pathfinder]] element patterns", "Vectoring toward mineralization, defining anomalies"],
        ["Magnetics", "Magnetite content", "Structure, buried intrusions, zones where alteration destroyed magnetite"],
        ["Gravity", "Density contrast", "Basin depth and shape, buried bedrock highs"],
        ["Resistivity and IP", "Conductivity and chargeability", "Silicification (resistive), clay alteration (conductive), disseminated sulfides (chargeable)"],
        ["[[tem|TEM]], CSAMT, MT", "Conductivity at depth", "Conductive [[claystone|claystone]] or brine, basin architecture, structures"],
      ],
    ),
    p("Targets are ranked on the strength of the evidence, the size of the possible prize, the cost to test, and how cleanly a result would confirm or kill the idea."),
    h("Stage 3: drilling"),
    ul(
      "Design. Collar location, azimuth and inclination are set so holes cross the expected structure or layering at a high angle. Depth is set by the model, not the budget alone.",
      "Permitting. On BLM land, exploration disturbing five acres or less runs under a [[notice|Notice]] with a reclamation bond in place before work starts.",
      "Method. RC for speed and coverage. Core where texture, structure, density or metallurgical samples are needed.",
      "Control. Collar surveys, downhole surveys, logging to a fixed scheme, sample recovery records, and QA/QC samples in every batch.",
    ),
    h("Stage 4: interpretation"),
    p("Assays go into a validated database. Sections and plans are drawn. Results are compared against the model hole by hole. The useful question is not only whether a hole hit, but whether the model predicted what the hole found. A model that explains the misses is worth more than one lucky intercept."),
    p("If results hold up, drilling moves from testing targets to defining size and continuity. That is the path toward a [[mineral-resource|mineral resource]] estimate and, later, economic studies."),
    h("Where projects go wrong"),
    ul(
      "Title problems found after the money is spent.",
      "Historical data taken on trust and never verified.",
      "No coherent geologic model, so targets are picked by anomaly alone.",
      "Drilling started before mapping and sampling are finished.",
      "Weak QA/QC, so the results cannot be relied on later.",
      "Access, water or permitting limits discovered late.",
    ),
    note("This guide describes common practice. Every property is different. The right program depends on the deposit type, the data in hand and the decision you need to make next."),
  ],
  faqs: [
    {
      q: "How long does mineral exploration take?",
      a: "Getting from a first look to a drill-tested target often takes one to three field seasons. Getting from a discovery to a producing mine commonly takes more than ten years, because resource drilling, engineering studies and permitting each take time.",
    },
    {
      q: "What is the most expensive part of exploration?",
      a: "Drilling is usually the largest single cost. That is why evaluation, mapping and sampling come first: they are cheaper and they decide where the drill goes.",
    },
    {
      q: "Do I need to drill to know if a property is worth anything?",
      a: "Not at first. A data review, a site visit and check sampling can show whether a property deserves a drill program. Drilling is what tests a target, but it should not be the first money spent.",
    },
    {
      q: "What is an exploration target?",
      a: "A specific place, depth and direction to test, backed by a geologic reason. It comes from a deposit model built from mapping, sampling and geophysics.",
    },
  ],
  terms: ["deposit-model", "assay", "rc-drilling", "core", "qaqc", "pathfinder", "tem", "notice", "mineral-resource"],
  sources: [
    { label: "USGS, Mineral Deposit Models for Resource Assessment (SIR 2010-5070)", url: "https://pubs.usgs.gov/publication/sir20105070" },
    { label: "BLM, Surface Management of Locatable Minerals (43 CFR 3809)", url: "https://www.ecfr.gov/current/title-43/subtitle-B/chapter-II/subchapter-C/part-3800/subpart-3809/subject-group-ECFR756fd0a32677e93/section-3809.21" },
  ],
};

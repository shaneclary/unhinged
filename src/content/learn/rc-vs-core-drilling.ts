import { type Topic, p, h, ul, table, note } from "./types.ts";

export const rcVsCoreDrilling: Topic = {
  slug: "rc-vs-core-drilling",
  title: "RC vs core drilling: what each one tells you",
  description:
    "Reverse circulation drilling returns rock chips fast. Core drilling returns solid rock that shows structure. How to choose between them.",
  answer:
    "Reverse circulation (RC) drilling is faster and costs less per foot, and it returns rock chips. Core drilling is slower and costs more, and it returns a solid cylinder of rock that shows structure, texture and exact contacts. Most programs use RC to find and outline mineralization and core where the geology has to be seen intact.",
  services: ["drilling"],
  reviewed: false,
  updated: "2026-11-12",
  calculators: ["true-thickness", "composite"],
  float: [
    p("To see what is under the ground, you drill a hole and bring the rock up."),
    p("One kind of drill smashes the rock into small chips and blows them up the pipe with air. It is fast. This is called RC drilling."),
    p("The other kind cuts out a long stick of solid rock, like pushing a straw into a cake. It is slow, but you get to see the rock just the way it sat in the ground. This is called core drilling."),
    p("Chips tell you what is down there. Core tells you how it is put together."),
  ],
  outcrop: [
    h("How RC works"),
    p("An [[rc-drilling|RC]] rig drives a hammer bit with compressed air. The drill pipe has two walls. Air goes down between the walls, and the broken rock comes back up the inner tube to a cyclone at surface. The return path up the inside of the pipe is the 'reverse' in reverse circulation. It keeps the sample from dragging along the wall of the hole."),
    p("The chips are split and bagged at a fixed interval. In Nevada that is commonly every 5 feet (1.52 m). A small portion goes into a chip tray for logging."),
    h("How core works"),
    p("A core rig turns a hollow, diamond-set bit that cuts a ring and leaves a solid cylinder of rock standing in the middle. The [[core|core]] rides up in an inner tube pulled by a wireline, so the rods stay in the hole. The core is laid out in boxes, measured, logged, photographed, and usually sawn in half, with one half sent for [[assay|assay]] and the other kept."),
    table(
      "RC and core side by side",
      ["", "RC", "Core"],
      [
        ["What comes up", "Rock chips", "A solid cylinder of rock"],
        ["Speed", "Fast", "Slow"],
        ["Cost per foot", "Lower", "Higher"],
        ["Sample size", "Large", "Smaller"],
        ["Structure and texture", "Mostly lost", "Preserved"],
        ["Best for", "Finding and outlining mineralization, wide coverage", "Veins, contacts, structure, density, metallurgical samples"],
        ["Watch for", "Wet samples and contamination below the water table", "Poor [[core-recovery|core recovery]] in clay, faults and broken ground"],
      ],
    ),
    h("Choosing"),
    ul(
      "Early-stage target testing over a wide area: RC usually gives the most information per dollar.",
      "Vein systems where width, texture and orientation matter: core.",
      "Soft or swelling ground such as claystone: core, often with special handling, because chips can smear and recovery needs to be measured.",
      "Deep targets under barren cover: an RC pre-collar through the cover with a core tail through the target.",
      "Checking RC results before a resource estimate: core twins of selected RC holes.",
    ),
  ],
  core: [
    h("Sample mass"),
    p("A 5.5 inch (140 mm) RC hole produces about 0.023 cubic metres of rock per 5 foot interval. At a density of 2.5 tonnes per cubic metre that is roughly 58 kg. The splitter typically reduces it to a few kilograms for the lab. The same 5 feet of HQ core (63.5 mm diameter) weighs about 12 kg whole, or 6 kg as half core. RC delivers a much larger primary sample, which helps where mineralization is patchy."),
    table(
      "Common wireline core sizes",
      ["Size", "Core diameter"],
      [
        ["BQ", "36.4 mm"],
        ["NQ", "47.6 mm"],
        ["HQ", "63.5 mm"],
        ["PQ", "85.0 mm"],
      ],
    ),
    h("RC: where bias comes from"),
    ul(
      "Water. Below the water table, air pressure may not keep the hole dry. Wet samples split poorly, and fines can be lost or gained.",
      "Downhole contamination. Material from a higher-grade zone can fall or be carried into later samples, which smears grade down the hole. Watch for intercepts that tail off slowly below a strong zone.",
      "Recovery. Sample weight per interval should be recorded. Low or erratic weights flag lost sample.",
      "Splitting. The splitter must be level, clean, and matched to the sample. A dirty cyclone carries one interval into the next.",
    ),
    h("Core: where bias comes from"),
    ul(
      "Core loss. Recovery is measured for every run. Loss is rarely random: soft, broken and clay-rich material washes out first, and that material is often the mineralized part.",
      "Cutting. The saw line should be marked by the geologist so each half is a fair half. Cutting along a vein instead of across it biases the sample.",
      "Selective sampling. Sampling only the rock that looks mineralized leaves no proof that the rest is barren.",
      "Orientation. Without an orientation survey, structures in the core have a known angle to the core axis but no true strike and dip.",
    ),
    h("What every hole needs, either method"),
    ul(
      "A surveyed collar location with the coordinate datum recorded.",
      "A downhole survey. Holes deviate, and a deep hole can end many metres from where a straight line would put it.",
      "A geologic log made to a fixed scheme, with chip trays or core photographs kept.",
      "[[qaqc|QA/QC]] samples in every batch.",
      "A statement of how the drilled length relates to [[true-thickness|true thickness]].",
    ),
    h("Other methods worth knowing"),
    p("Loose gravels and placers are poorly served by both conventional RC and core. Sonic drilling, dual-tube percussion rigs, large-diameter augers, and test pits or trenches are used instead, because the aim there is a large, undisturbed volume. Sonic is also used in soft sediments and clays where continuous, intact samples matter."),
    note("Drilling rates and costs depend on depth, ground conditions, location and the contractor market. Get current quotes for a specific program instead of relying on rules of thumb."),
  ],
  faqs: [
    {
      q: "Which is cheaper, RC or core drilling?",
      a: "RC usually costs less per foot and drills faster. Core costs more per foot because it is slower and needs more handling. Actual rates depend on depth, ground conditions and location.",
    },
    {
      q: "Why is it called reverse circulation?",
      a: "Because the cuttings travel back up the inside of the drill pipe, not up the outside between the pipe and the wall of the hole. That keeps the sample cleaner.",
    },
    {
      q: "Can a resource be estimated from RC drilling alone?",
      a: "RC holes can make up most of the drilling behind a resource estimate, and often do in Nevada. Core is normally added to check the RC results and to supply density, structural and metallurgical data.",
    },
    {
      q: "What is a core tail?",
      a: "The lower part of a hole that is drilled with core after the upper part was drilled with RC. It saves money through barren cover and gives core through the target.",
    },
  ],
  terms: ["rc-drilling", "core", "core-recovery", "collar", "true-thickness", "qaqc", "assay", "intercept"],
  sources: [],
};

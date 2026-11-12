import { type Topic, p, h, ul, table, note } from "./types.ts";

export const placerGold: Topic = {
  slug: "placer-gold",
  title: "Placer gold: how it forms and how to test it",
  description:
    "How placer gold deposits form, where gold collects in gravel, how placer grade is reported, and why small samples give wrong answers.",
  answer:
    "A placer is a deposit where gold has been freed from bedrock by weathering and concentrated by water or gravity, because gold is far denser than sand and gravel. Placer gold is hard to sample well: it sits in scattered particles, so small samples routinely give wrong answers.",
  services: ["evaluation", "mapping"],
  reviewed: false,
  updated: "2026-11-12",
  calculators: ["tonnage", "grade"],
  float: [
    p("Gold is very heavy. A piece of gold weighs about seven times as much as a piece of quartz the same size."),
    p("When rain and rivers wear down a hill with gold in it, the gold washes into the stream. Light sand gets carried away. Heavy gold sinks and stays put, often right down on the hard rock at the bottom."),
    p("That gravel with gold in it is called a placer."),
    p("Panning for gold works the same way a river does. You swirl water in the pan. The light stuff washes out, and the heavy gold stays behind."),
  ],
  outcrop: [
    h("Kinds of placer"),
    table(
      "Placer settings",
      ["Type", "Where the gold sits"],
      [
        ["Eluvial", "On a hillside, just downslope of the source"],
        ["Alluvial (stream)", "In the gravel of an active channel"],
        ["Bench or terrace", "In an old channel left above the present stream"],
        ["Buried channel", "In an ancient river course under younger cover"],
        ["Desert (dry) placer", "In washes and fans worked by flash floods, often poorly sorted"],
      ],
    ),
    h("Where gold collects"),
    ul(
      "On or just above [[bedrock|bedrock]], and down in its cracks.",
      "On false bedrock: a tight clay layer or cemented caliche that stops gold from sinking further.",
      "On the inside of bends, behind boulders and bars, and where a steep channel flattens.",
      "Where a gold-bearing side stream joins a main channel.",
    ),
    p("The rich part is often a narrow, winding strip called a pay streak. Most of the gravel around it may carry little."),
    h("How placer grade is reported"),
    p("By volume, not weight: grams or milligrams of gold per cubic metre, or troy ounces per cubic yard. Ask whether the volume is bank (measured in the ground) or loose (after digging). Gravel swells when it is dug, so the same gold spread over loose yards reads as a lower grade."),
    p("[[fineness|Fineness]] is the purity of the gold itself, in parts per thousand. Placer gold at 850 fine is 85 percent gold. The rest is mostly silver."),
    h("Why testing is hard"),
    p("In hard rock, gold may be spread finely through the sample. In a placer it comes as separate flakes and nuggets. A small sample can catch one nugget and look rich, or miss them all and look barren. Reliable placer testing uses large samples, and many of them."),
  ],
  core: [
    h("Sample size"),
    p("USGS work on particulate gold showed that precision depends on the number of gold particles in the sample, and that about 20 particles are needed for a result adequate for most purposes. Coarser gold or lower grade means a larger sample is needed to capture 20 particles. For coarse placer gold that can mean cubic metres, not kilograms. This is the [[nugget-effect|nugget effect]] in its plainest form."),
    h("Sampling methods"),
    table(
      "Ways to sample a placer",
      ["Method", "Strength", "Limit"],
      [
        ["Test pits and trenches", "Large volume, the section can be seen and measured", "Depth, water inflow, and reclamation of the disturbance"],
        ["Bulk sampling through a wash plant", "Closest to real recovery", "Cost. Needs water and permits"],
        ["Large-diameter auger or bucket drilling", "Good volume per foot in dry ground", "Boulders and caving"],
        ["Dual-tube percussion or sonic drilling", "Depth, works below the water table, cased sample", "Small volume per foot, so many holes are needed"],
      ],
    ),
    p("Samples are measured for volume, then processed through a sluice, jig or concentrating table. The concentrate is cleaned, and the gold is weighed. Recording the size distribution of the gold tells you both how reliable the sampling is and what kind of recovery plant would be needed."),
    h("Drilling pitfalls"),
    ul(
      "Volume. Grade equals gold divided by volume. If the volume recovered from a hole differs from the theoretical volume of the hole, the grade is wrong unless corrected.",
      "Migration. Gold can be driven ahead of the bit or drawn in from the walls, which inflates or deflates intervals.",
      "Fine gold. Flour gold is lost easily in processing. A sample that reports less than the deposit holds is as misleading as one that reports more.",
      "Bedrock. The top of bedrock and its fractures must be sampled. Stopping at first contact misses a zone that often carries the best values.",
    ),
    h("Layout"),
    p("Pay streaks are long and narrow, so samples are laid out on lines across the channel, with close spacing along each line and wider spacing between lines. Geophysics can help place those lines. Seismic refraction, resistivity and ground-penetrating radar can map depth to bedrock and buried channels. Magnetics can pick up black-sand concentrations where magnetite is abundant."),
    h("Heavy minerals"),
    p("Gold travels with other dense minerals: magnetite, ilmenite, garnet, zircon, and in places scheelite or cinnabar. Black sand in a pan shows the hydraulic conditions were right to trap heavy grains. It does not show that gold is there."),
    h("Nevada notes"),
    ul(
      "Many Nevada placers are desert placers. Sorting is poor, gold is erratic, and caliche often acts as false bedrock.",
      "Water for processing is frequently the limiting factor. Dry recovery methods exist and recover less.",
      "The USGS catalogued the state's placer districts in Bulletin 1356, Placer Gold Deposits of Nevada.",
      "Placer ground on federal land is held by [[placer-claim|placer claims]], which are located by legal subdivision where the land is surveyed.",
      "Common sand and gravel are salable minerals. A gravel operation with recoverable gold has to be set up under the right authorization for each product.",
    ),
    h("Reporting standard"),
    p("A placer [[mineral-resource|resource]] is held to the same disclosure standards as any other. Volume, sampling density, recovery method, gold size distribution and fineness all have to be documented before a grade can be relied on."),
    note("Old placer reports often give values in dollars per yard at the gold price of the day. Convert back to weight of gold before comparing anything."),
  ],
  faqs: [
    {
      q: "Why is placer gold found on bedrock?",
      a: "Gold is much denser than sand and gravel. Each time floodwater stirs the gravel, the gold works downward until something solid stops it. That is usually bedrock or a tight clay or caliche layer.",
    },
    {
      q: "Why are small placer samples unreliable?",
      a: "Placer gold occurs as separate particles. A small sample may contain one nugget or none, so results swing widely. Reliable results need samples large enough to hold many gold particles.",
    },
    {
      q: "How is placer gold grade reported?",
      a: "By volume: grams per cubic metre or troy ounces per cubic yard. Check whether the volume is bank, measured in place, or loose, measured after digging.",
    },
    {
      q: "What does fineness mean?",
      a: "The purity of the gold in parts per thousand. Gold that is 900 fine is 90 percent gold.",
    },
    {
      q: "Does black sand mean there is gold?",
      a: "No. Black sand is mostly magnetite and other heavy minerals. It shows that heavy grains were trapped there, which is where gold would also settle if any were present.",
    },
  ],
  terms: ["placer", "placer-claim", "bedrock", "fineness", "nugget-effect", "alluvium", "troy-ounce", "mineral-resource"],
  sources: [
    { label: "USGS, Placer gold deposits of Nevada (Bulletin 1356)", url: "https://pubs.usgs.gov/publication/b1356" },
    { label: "USGS, Sample size and meaningful gold analysis (Professional Paper 625-C)", url: "https://pubs.usgs.gov/publication/pp625C" },
  ],
};

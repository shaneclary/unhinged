import { type Topic, p, h, ul, table, note } from "./types.ts";

export const epithermalGoldSilver: Topic = {
  slug: "epithermal-gold-silver",
  title: "Epithermal gold and silver systems",
  description:
    "How epithermal gold-silver deposits form, the low, intermediate and high-sulfidation types, Nevada examples, and what to look for in the field.",
  answer:
    "Epithermal deposits form where hot, mineral-bearing water rises to within about 1.5 km of the surface and drops gold and silver in veins, breccias and altered rock. Many of Nevada's historic bonanza districts, including Tonopah, Goldfield and the Comstock, are epithermal.",
  services: ["strategy", "mapping", "drilling"],
  reviewed: false,
  updated: "2026-11-12",
  calculators: ["grade", "true-thickness"],
  float: [
    p("Deep under some volcanoes, water gets very hot. Hot water can carry tiny bits of gold and silver."),
    p("The hot water rises through cracks in the rock. Near the top it cools down or boils. When that happens, the gold and silver drop out and stick to the walls of the crack."),
    p("Over a long time the crack fills up with white quartz and metal. That filled crack is called a vein."),
    p("Tonopah, where our office is, grew up around silver and gold veins like these."),
  ],
  outcrop: [
    h("What epithermal means"),
    p("The word means shallow heat. These deposits form in the top kilometre or so of the crust, at temperatures mostly below about 300 degrees C, usually around volcanic centers. The USGS describes them as [[vein|vein]], stockwork, disseminated and replacement deposits mined mainly for gold and silver."),
    h("Three types"),
    table(
      "Epithermal types at a glance",
      ["Type", "Fluid", "Typical signs", "Nevada examples"],
      [
        ["Low-sulfidation", "Near-neutral", "Banded quartz veins with [[adularia|adularia]], bladed calcite, clay halos", "Round Mountain, Midas, Sleeper"],
        ["Intermediate-sulfidation", "Near-neutral, more metal-rich", "Silver-rich veins with base metals and manganese minerals", "Tonopah, Comstock Lode"],
        ["High-sulfidation", "Acidic", "Vuggy silica, alunite, enargite, strongly leached rock", "Goldfield, Paradise Peak"],
      ],
    ),
    h("What to look for on the ground"),
    ul(
      "[[alteration|Alteration]]. Rock changed by the hot water: hard silicified ribs, bleached clay zones, and a wider green halo of chlorite and epidote.",
      "Vein textures. Fine banding, crusts, and quartz that has replaced bladed calcite. These record boiling, and boiling is what drops the gold.",
      "[[sinter|Sinter]]. Silica laid down by hot springs at the old ground surface. It means the system is preserved to the top, and that any vein ore lies below.",
      "[[pathfinder|Pathfinders]]. Arsenic, antimony and mercury spread more widely than gold and help draw the outline of a system.",
      "Structure. Veins follow faults. Bends and steps in a fault open space, and space is where ore shoots form.",
    ),
    h("Why level matters"),
    p("Rich ore in these systems tends to sit in a limited vertical band where the fluids boiled. Too high and you are above it, in barren clay or sinter. Too deep and you are below it. Working out where the present surface sits relative to that band is one of the main jobs in exploring a vein district."),
  ],
  core: [
    h("Classification by sulfidation state"),
    p("The types are defined by sulfide assemblage, which records fluid chemistry. Low-sulfidation systems carry pyrite with pyrrhotite or arsenopyrite and iron-rich sphalerite. Intermediate-sulfidation systems carry tennantite-tetrahedrite, chalcopyrite and iron-poor sphalerite, commonly with manganese carbonates. High-sulfidation systems carry enargite, luzonite and covellite with advanced argillic alteration."),
    h("Deposition"),
    p("Boiling is the main precipitation mechanism in low and intermediate-sulfidation veins. As the rising fluid boils it loses gas, pH rises, and gold complexes break down. The evidence is in the vein: adularia, bladed calcite and its quartz pseudomorphs, colloform and crustiform banding, and hydrothermal breccia. Fluid mixing and cooling also contribute, especially in base-metal-rich systems."),
    h("Alteration zoning"),
    table(
      "Alteration from vein outward",
      ["Type", "Core", "Intermediate", "Outer"],
      [
        ["Low and intermediate-sulfidation", "Silicification, quartz-adularia", "Illite, then illite-smectite and smectite", "Propylitic: chlorite, epidote, calcite"],
        ["High-sulfidation", "Residual vuggy silica", "Alunite, dickite or kaolinite, pyrophyllite at depth", "Argillic, then propylitic"],
      ],
    ),
    p("Clay minerals record temperature. Smectite gives way to interlayered illite-smectite and then illite as temperature rises toward the upflow zone. Short-wave infrared spectroscopy on chips, core or outcrop maps that gradient quickly and is a standard vectoring tool."),
    h("Reading erosion level"),
    ul(
      "Sinter and steam-heated blankets (opal, kaolinite, alunite formed above the old water table) mark the top of a system. Steam-heated alteration can look dramatic and be barren. The target is beneath it.",
      "Chalcedonic and massive silica dominate the upper part of veins.",
      "Crustiform-colloform banding with adularia and bladed textures marks the boiling interval, where precious metals concentrate.",
      "Coarse crystalline and comb quartz with rising base metals suggest a position below the main precious-metal interval.",
    ),
    h("Structure"),
    p("Ore shoots are controlled by permeability. Dilational jogs, fault intersections, flexures and competent host units localize open space. In Nevada's Walker Lane, strike-slip and extensional faulting acting together created many such sites, and much of the state's epithermal endowment is of Oligocene to Miocene age associated with volcanism."),
    h("Geophysics"),
    ul(
      "Resistivity (including CSAMT): highs over silicification, lows over clay alteration.",
      "Magnetics: lows where alteration has destroyed magnetite, plus structural mapping.",
      "IP: chargeability from disseminated sulfide, where present.",
      "Gravity: structure and, in places, density loss from intense alteration.",
    ),
    h("Drilling and sampling"),
    ul(
      "Angle holes to cross steep veins at a high angle and report [[true-thickness|true width]].",
      "Use core where vein texture, width and orientation drive the interpretation.",
      "Expect coarse gold or electrum in bonanza veins. That raises the [[nugget-effect|nugget effect]], so use larger charges or screen metallic assays and field duplicates.",
      "Track silver to gold ratios, base metals and pathfinders by elevation. Their zoning helps place a hole relative to the boiling interval.",
      "In oxidized, silver-rich districts, account for near-surface redistribution of silver.",
    ),
    h("Size and grade"),
    p("The range is wide. The USGS model gives deposit sizes from tens of thousands of tonnes to more than a billion tonnes, with gold from 0.1 to more than 30 g/t and silver from less than 1 to several thousand g/t. That span covers narrow bonanza veins and large bulk-tonnage deposits alike."),
    note("Type assignments for individual districts follow published classifications and are debated for some deposits. Use the descriptions as a guide to what to look for, not as a label that settles the question."),
  ],
  faqs: [
    {
      q: "What does epithermal mean?",
      a: "Shallow heat. It describes mineral deposits formed by hot fluids within about 1.5 km of the surface, at relatively low temperatures, usually near volcanic centers.",
    },
    {
      q: "What is the difference between low-sulfidation and high-sulfidation deposits?",
      a: "Low-sulfidation systems form from near-neutral fluids and are known for banded quartz-adularia veins. High-sulfidation systems form from acidic fluids that leach the rock, leaving vuggy silica surrounded by alunite and clay.",
    },
    {
      q: "Is hot-spring sinter a good sign?",
      a: "It shows that the top of the system is preserved and that hot fluids reached the surface there. It does not carry ore itself. Any vein ore would be below it.",
    },
    {
      q: "How deep do epithermal veins go?",
      a: "Veins can continue to depth, but high-grade precious metals are usually concentrated in a limited vertical interval, often a few hundred metres, tied to where the fluids boiled.",
    },
    {
      q: "Which Nevada districts are epithermal?",
      a: "Tonopah, Goldfield, the Comstock Lode, Round Mountain, Midas and Sleeper are well-known examples, among many others.",
    },
  ],
  terms: ["epithermal", "vein", "alteration", "adularia", "sinter", "pathfinder", "walker-lane", "true-thickness", "nugget-effect", "fault"],
  sources: [
    { label: "USGS, Descriptive models for epithermal gold-silver deposits (SIR 2010-5070-Q)", url: "https://pubs.usgs.gov/publication/sir20105070Q" },
    { label: "Nevada Bureau of Mines and Geology", url: "https://nbmg.unr.edu" },
  ],
};

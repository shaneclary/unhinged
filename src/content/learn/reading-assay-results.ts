import { type Topic, p, h, ul, table, note } from "./types.ts";

export const readingAssayResults: Topic = {
  slug: "reading-assay-results",
  title: "How to read assay results and drill intercepts",
  description:
    "What ppm, g/t, opt and percent mean, how drill intercepts are reported, and how to tell a strong result from a number that only sounds good.",
  answer:
    "An assay reports how much of an element is in a sample, usually in parts per million (ppm) or grams per tonne (g/t), which are the same thing. To judge a drill intercept you need three things together: the grade, the length it runs over, and how close that length is to true thickness.",
  services: ["drilling", "modeling"],
  reviewed: false,
  updated: "2026-11-12",
  calculators: ["grade", "lithium", "composite", "true-thickness"],
  float: [
    p("An assay is a test that tells you how much metal is in a rock."),
    p("The number is tiny. '1 ppm' means one part in a million. Picture a million pennies in a pile, and one of them is gold. That is 1 ppm."),
    p("For gold, even that small amount can matter. For most other metals you need a lot more."),
    p("One number is not enough. A big number over a few inches may be worth less than a small number over a hundred feet. Always ask two things: how much, and over how far?"),
  ],
  outcrop: [
    h("The units"),
    table(
      "Grade units and how they relate",
      ["Unit", "Means", "Equal to"],
      [
        ["ppm", "Parts per million", "1 g/t"],
        ["g/t", "Grams per metric tonne", "1 ppm"],
        ["ppb", "Parts per billion", "0.001 ppm"],
        ["%", "Percent by weight", "10,000 ppm"],
        ["opt (oz/ton)", "Troy ounces per short ton", "34.2857 g/t"],
      ],
    ),
    p("Gold and silver are usually reported in g/t or, in older US reports, ounces per ton. Base metals are reported in percent. Lithium in claystone is reported in ppm."),
    h("Reading an intercept"),
    p("A drill result reads like this: 100 ft at 1.2 g/t gold from 250 ft. That means a 100 foot length of the hole, starting 250 feet down, averaged 1.2 g/t. The average is weighted by length, so a long low-grade sample counts for more than a short high-grade one. This is a [[composite|composite]]."),
    p("A result may add: including 10 ft at 6.0 g/t. That is a richer part inside the longer run. It is not extra. It is already counted in the 100 foot average."),
    h("Length is not thickness"),
    p("The length is measured along the hole. If the hole cuts a layer or vein at a slant, the drilled length is longer than the real thickness. A good report states the [[true-thickness|true thickness]] or says it is not yet known."),
    h("Below detection"),
    p("A result written as <0.005 means the amount was below the [[detection-limit|detection limit]]: too little for the method to measure. It does not mean zero."),
    h("Red flags"),
    ul(
      "Grades reported with no lengths.",
      "'Up to' numbers. The best sample is not the average.",
      "Hand-picked grab samples presented as if they represent the deposit.",
      "Long intercepts carried by one very high sample.",
      "No statement about QA/QC or true thickness.",
    ),
  ],
  core: [
    h("Length-weighted compositing"),
    p("The composite grade is the sum of each interval's length times its grade, divided by the total length. The numerator on its own is the [[grade-thickness|grade-thickness]] product, in units such as gram-metres. Grade-thickness is the fairer way to compare holes, because it does not reward a narrow rich zone over a wide moderate one or the reverse."),
    h("Cut-off, dilution and capping"),
    ul(
      "[[cut-off-grade|Cut-off grade]]. Intercepts are built from samples above a stated cut-off. Change the cut-off and the reported length and grade both change. The cut-off should be stated.",
      "Internal dilution. Reporting rules usually allow a limited length of below-cut-off material inside an intercept. That limit should be stated too.",
      "Capping. A few extreme assays can dominate an average. Estimators cap high values at a level chosen from the data. An uncapped intercept carried by one sample deserves a second look.",
    ),
    h("True thickness"),
    p("For a hole drilled at right angles to the strike of a layer, true thickness equals the downhole length times the sine of the angle between the hole and the layer. A vertical hole through beds dipping 30 degrees sees about 87 percent of drilled length as true thickness. A hole drilled square to the layer sees 100 percent. A hole drilled down the dip can report a long intercept through a thin layer."),
    h("Metal equivalents"),
    p("A gold-equivalent or copper-equivalent grade folds several metals into one number using assumed prices and recoveries. The result is only as sound as those assumptions. Ask what prices and recoveries were used, and whether recovery has been tested at all."),
    h("Lithium reporting"),
    table(
      "Lithium conversion factors",
      ["From", "To", "Multiply by"],
      [
        ["Li (ppm)", "Li (%)", "0.0001"],
        ["Li", "Li2O (lithium oxide)", "2.153"],
        ["Li", "Li2CO3 ([[lce|LCE]])", "5.323"],
        ["Li", "LiOH·H2O (lithium hydroxide monohydrate)", "6.05"],
      ],
    ),
    p("A claystone grading 1,000 ppm Li contains 0.1 percent lithium, or about 0.53 percent LCE. Resources are usually stated as tonnes of LCE. The conversion is chemistry only. It says nothing about how much of that lithium a plant would recover."),
    h("Pathfinders and what else is in the table"),
    p("Multi-element assays report dozens of elements. Some are [[pathfinder|pathfinders]]: elements that travel with the target metal and form a wider halo. Arsenic, antimony, mercury and thallium are classic pathfinders for epithermal and sediment-hosted gold. In lithium claystone, magnesium and calcium matter for a different reason: they consume acid in processing."),
    h("Digestion and method"),
    p("The same sample can give different numbers by different methods. A partial digestion reports only what the acid dissolved. Always compare like with like, and treat a change of method partway through a program as a break in the data."),
    h("Placer results"),
    p("Placer gold is reported per volume, not per weight: milligrams or grams per cubic metre, or troy ounces per cubic yard. Check whether the volume is bank (in the ground) or loose (after digging), because gravel swells when it is dug."),
    note("These are reading skills, not a substitute for a review of the underlying data. An intercept is one line through a three-dimensional body."),
  ],
  faqs: [
    {
      q: "Is ppm the same as g/t?",
      a: "Yes. One part per million by weight is one gram per metric tonne.",
    },
    {
      q: "How do I convert ounces per ton to grams per tonne?",
      a: "Multiply troy ounces per short ton by 34.2857 to get grams per metric tonne. For example, 0.1 oz/ton is about 3.43 g/t.",
    },
    {
      q: "What is a good gold grade?",
      a: "It depends on the deposit, the depth and the mining method. Open-pit heap-leach gold mines in Nevada operate on average grades well under 1 g/t. Underground mines generally need several grams per tonne or more.",
    },
    {
      q: "What is LCE?",
      a: "Lithium carbonate equivalent. It restates a lithium grade or tonnage as the weight of lithium carbonate it would make. Multiply lithium metal by 5.323.",
    },
    {
      q: "What does 'up to' mean in a drill result?",
      a: "It reports the single highest sample. It tells you nothing about the average grade or how far that grade continues.",
    },
  ],
  terms: ["assay", "ppm", "grade", "intercept", "composite", "grade-thickness", "true-thickness", "cut-off-grade", "detection-limit", "lce", "pathfinder", "troy-ounce"],
  sources: [
    { label: "USGS, Sample size and meaningful gold analysis (Professional Paper 625-C)", url: "https://pubs.usgs.gov/publication/pp625C" },
  ],
};

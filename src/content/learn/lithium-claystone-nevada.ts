import { type Topic, p, h, ul, table, note } from "./types.ts";

export const lithiumClaystoneNevada: Topic = {
  slug: "lithium-claystone-nevada",
  title: "Lithium claystone deposits in Nevada",
  description:
    "How lithium clay deposits form in Nevada's closed basins, what the grades mean, how they are explored, and what makes one workable.",
  answer:
    "Lithium claystone deposits are old lake-bed sediments in which lithium is held in clay minerals. In Nevada they form in closed basins fed by lithium-bearing volcanic rocks, sit at or near surface, and are reported in parts per million lithium, commonly from several hundred to a few thousand ppm.",
  services: ["strategy", "modeling", "drilling"],
  reviewed: false,
  updated: "2026-11-12",
  calculators: ["lithium", "tonnage"],
  float: [
    p("Lithium is a very light metal. It is used to make batteries."),
    p("In Nevada, a lot of lithium is locked inside clay. Here is how it got there."),
    p("Long ago, volcanoes threw out ash with a little lithium in it. Rain washed the lithium down into lakes that had no way out. The water dried up, over and over, and the lithium stayed behind in the mud."),
    p("In time that mud turned into a soft rock called claystone. Today geologists drill the old lake beds to find the layers where the clay holds the most lithium."),
  ],
  outcrop: [
    h("Three kinds of lithium deposit"),
    table(
      "Where lithium comes from",
      ["Type", "Lithium is in", "Example"],
      [
        ["Brine", "Salty groundwater under a dry lake bed", "Clayton Valley, Nevada"],
        ["Hard rock", "Minerals such as spodumene in pegmatite", "Western Australia"],
        ["Sedimentary (claystone)", "Clay minerals in old lake sediments", "Thacker Pass and the Tonopah area, Nevada"],
      ],
    ),
    h("What it takes to make one"),
    ul(
      "A source. Volcanic rocks and ash that carry lithium.",
      "A [[closed-basin|closed basin]]. Water flows in and only leaves by evaporation, so what it carries stays.",
      "A dry climate and time. Repeated wetting and drying concentrates lithium in the lake sediments.",
      "The right clays. Lithium ends up in [[smectite|smectite]] clays such as [[hectorite|hectorite]], and in places in [[illite|illite]].",
      "Sometimes, heat. At Thacker Pass, later hot fluids changed smectite to illite and raised the grade.",
    ),
    h("What the grades look like"),
    p("Grades are reported in ppm lithium. Published Nevada examples span a wide range. The claystone resource at the TLC project near Tonopah was reported at roughly 700 to 925 ppm lithium, depending on category, using a 500 ppm cut-off. At Thacker Pass, core samples average about 2,500 ppm, and the illite-rich zone averages more than 4,000 ppm."),
    p("Grade is one input. These deposits are attractive because they are large, shallow and flat-lying. What decides whether one works is processing: how much acid the rock consumes, how much lithium comes out, and whether there is water to run a plant."),
    h("How they are explored"),
    ul(
      "Map the basin: which layers are present, how they are tilted and faulted, and where the clay beds come to surface.",
      "Sample outcrops, knowing that surface samples can read higher or lower than fresh rock.",
      "Run geophysics. Wet clay conducts electricity, so electromagnetic surveys such as [[tem|TEM]] can map clay-rich packages and basin shape under cover.",
      "Drill, log and assay. Layers in these deposits tend to be continuous, so a modest number of well-placed holes can outline a large body.",
    ),
  ],
  core: [
    h("Mineralogy"),
    p("Hectorite is a magnesium-lithium smectite, with lithium substituting for magnesium in the octahedral sheet of the clay structure. In smectite-dominated deposits most of the lithium is structurally bound in the clay, with some in exchangeable positions. At Thacker Pass in the McDermitt caldera, an illitic zone lies beneath a smectite zone and carries roughly twice the smectite grade. Published work ties that enrichment to hydrothermal alteration of the original lake sediments."),
    h("Genetic models"),
    ul(
      "Closed-basin alteration. Lithium-bearing volcanic glass breaks down in alkaline, saline lake and pore waters, and lithium is taken up as clays form. This is the basis of the USGS model for lithium in smectites of closed basins.",
      "Hydrothermal upgrading. Later lithium- and fluorine-bearing fluids convert smectite to illite along faults and raise the grade, as documented at Thacker Pass.",
    ),
    p("The two are not exclusive. The first builds a large low-to-moderate grade body. The second can superimpose a higher-grade core."),
    h("Stratigraphic control and continuity"),
    p("Lithium is commonly concentrated in particular claystone horizons, and reduced green to blue-grey claystone often differs in grade and behavior from oxidized tan claystone above it. Ash beds make useful marker horizons for correlating between holes. Bedded continuity is the strength of the deposit type: it supports wider drill spacing than a vein or structurally controlled deposit would. Faults that offset or repeat the section are the main thing to resolve."),
    h("Geophysics and its limits"),
    p("Clay-rich sediments are electrically conductive, so TEM, CSAMT and MT surveys map them as resistivity lows. Saline groundwater and brine are conductive too. A conductor is a clay or brine target, not proof of lithium. Gravity helps define basin depth and the bedrock surface. Geophysics ranks ground for drilling. It does not replace it."),
    h("Sampling and assay"),
    ul(
      "Swelling clays core poorly. Recovery must be measured, and soft intervals handled so they are not washed out.",
      "State the digestion method and keep it constant. Partial and near-total digestions can report different lithium values in the same clay.",
      "Use lithium [[crm|standards]] with a clay matrix at grades near the cut-off and near the average.",
      "Measure bulk density on core. Claystones are light, commonly well under 2.0 tonnes per cubic metre dry, and tonnage scales directly with the density used.",
      "Assay the full suite. Magnesium, calcium, potassium, fluorine and boron bear on processing. Cesium, rubidium and other elements may be of interest in their own right.",
    ),
    h("From ppm to LCE"),
    table(
      "Reporting conversions",
      ["Grade", "Li (%)", "Li2O (%)", "LCE (%)"],
      [
        ["500 ppm Li", "0.05", "0.108", "0.266"],
        ["1,000 ppm Li", "0.10", "0.215", "0.532"],
        ["2,500 ppm Li", "0.25", "0.538", "1.331"],
        ["4,000 ppm Li", "0.40", "0.861", "2.129"],
      ],
    ),
    p("Resource tonnages are usually stated as contained [[lce|LCE]]. Contained is not recoverable. Reported cut-offs for Nevada claystones differ between projects, so compare resources at stated cut-offs, not headline tonnes."),
    h("Processing in brief"),
    p("The common route is a sulfuric acid leach in tanks, followed by neutralization, removal of magnesium and other impurities, and precipitation of lithium carbonate. Acid consumption is driven largely by magnesium and carbonate in the feed, and it is a main cost. Other routes exist, including chloride-based flowsheets. Bench-scale leach results come early in a project and should be read as an indication, not a design basis."),
    h("Water"),
    p("A plant needs water, and many Nevada basins are fully appropriated or over-appropriated. Water rights are administered by the Nevada State Engineer. For a claystone project, water can be a harder limit than geology."),
    note("Grades and project details cited here come from published sources and can be superseded by newer reports. Check the current technical report for any project before relying on a figure."),
  ],
  faqs: [
    {
      q: "What is a good grade for a lithium clay deposit?",
      a: "There is no single number. Published Nevada claystone resources average from roughly 700 ppm to more than 2,500 ppm lithium. Tonnage, depth, acid consumption, recovery and water access matter as much as grade.",
    },
    {
      q: "How is lithium claystone different from lithium brine?",
      a: "In a brine deposit the lithium is dissolved in salty groundwater and is pumped out. In a claystone deposit the lithium is held in clay minerals in solid rock, which is mined and leached.",
    },
    {
      q: "Does a conductive geophysical anomaly mean lithium?",
      a: "No. Clay and salty groundwater both conduct electricity. A conductor shows where clay-rich or brine-bearing sediments may be. Only drilling and assays show whether they carry lithium.",
    },
    {
      q: "How do you convert ppm lithium to LCE?",
      a: "Divide ppm by 10,000 to get percent lithium, then multiply by 5.323. For example, 1,000 ppm Li is 0.1 percent Li, or about 0.53 percent LCE.",
    },
    {
      q: "Why does magnesium matter in lithium clay?",
      a: "Magnesium dissolves along with lithium in an acid leach. It consumes acid and has to be removed afterward, so high magnesium raises processing cost.",
    },
  ],
  terms: ["claystone", "closed-basin", "smectite", "hectorite", "illite", "lce", "tem", "brine", "caldera", "crm", "cut-off-grade"],
  sources: [
    { label: "Nevada Bureau of Mines and Geology, Lithium Deposits in Nevada", url: "https://nbmg.unr.edu/_docs/NBMG_Lithium_Deposits_Nevada.pdf" },
    { label: "Clay Chemistry of the Thacker Pass Deposit, Nevada (NSF Public Access Repository)", url: "https://par.nsf.gov/biblio/10647916" },
    { label: "Li-rich Claystone in the McDermitt Caldera, Nevada: Characteristics and Possible Origin", url: "https://essopenarchive.org/doi/full/10.1002/essoar.10500817.1" },
    { label: "Tonopah Lithium Claims (TLC) Project resource summary, Mining Data Online", url: "https://miningdataonline.com/property/1991/Tonopah-Lithium-Claims-(TLC)-Project.aspx" },
  ],
};

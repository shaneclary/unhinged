// Every term is defined twice: once in plain language, once technically.
// Guides link here with [[id]]. Keep ids stable: they are URL anchors.

export type Term = {
  id: string;
  term: string;
  /** Other names people search for. */
  also?: string[];
  plain: string;
  technical: string;
};

const entries: Term[] = [
  {
    id: "adularia",
    term: "Adularia",
    plain: "A mineral that forms in gold and silver veins when hot water boils. Finding it is a good sign.",
    technical: "A low-temperature potassium feldspar (KAlSi3O8) deposited from boiling near-neutral hydrothermal fluid. Characteristic of low-sulfidation epithermal veins.",
  },
  {
    id: "alluvium",
    term: "Alluvium",
    plain: "Sand, gravel and mud left behind by streams and floods.",
    technical: "Unconsolidated sediment deposited by flowing water in channels, floodplains and alluvial fans. The host material of stream placers.",
  },
  {
    id: "alteration",
    term: "Alteration",
    plain: "Rock that has been changed by hot water moving through it. Often bleached, stained or hardened.",
    technical: "Mineralogical and chemical change of rock by hydrothermal fluids. Alteration assemblages (silicic, argillic, advanced argillic, propylitic) zone around fluid pathways and are used to vector toward mineralization.",
  },
  {
    id: "assay",
    term: "Assay",
    plain: "A lab test that tells you how much metal is in a rock sample.",
    technical: "A quantitative chemical analysis of a sample for one or more elements, reported as a concentration such as ppm, g/t or percent, by a stated preparation and analytical method.",
  },
  {
    id: "assessment-work",
    term: "Assessment work",
    also: ["Annual labor", "Proof of labor"],
    plain: "Work you do on a claim each year to keep it, if you are not paying the yearly fee.",
    technical: "Labor or improvements of at least $100 per claim per assessment year, required of claimants who file a small miner waiver in place of the BLM maintenance fee, and documented by an affidavit.",
  },
  {
    id: "bedrock",
    term: "Bedrock",
    plain: "The solid rock under the soil and gravel.",
    technical: "Consolidated rock underlying unconsolidated surficial material. In placers, the surface on which heavy minerals concentrate.",
  },
  {
    id: "blank",
    term: "Blank",
    plain: "A test sample with no metal in it. If the lab finds metal in it, something got mixed in.",
    technical: "A quality-control sample of barren material inserted to detect contamination in sample preparation (coarse blank) or analysis (pulp blank).",
  },
  {
    id: "blm",
    term: "BLM",
    also: ["Bureau of Land Management"],
    plain: "The government office that looks after most of the public land in Nevada.",
    technical: "The US Bureau of Land Management, the Interior Department agency that administers federal public land and records mining claims, collects claim fees, and regulates surface disturbance under 43 CFR 3809.",
  },
  {
    id: "breccia",
    term: "Breccia",
    plain: "Rock made of broken, sharp-edged pieces stuck back together.",
    technical: "A rock composed of angular fragments in a finer matrix or cement. Hydrothermal and fault breccias are common hosts of epithermal mineralization because they create permeability.",
  },
  {
    id: "brine",
    term: "Brine",
    plain: "Very salty water found underground.",
    technical: "Groundwater with high dissolved solids. Lithium brines in closed basins are pumped and processed to recover lithium.",
  },
  {
    id: "bulk-sample",
    term: "Bulk sample",
    plain: "A very large sample, often many tons, taken to test how a deposit would really perform.",
    technical: "A large-volume sample used for metallurgical testing or grade confirmation. On BLM land, bulk samples of 1,000 tons or more require a Plan of Operations.",
  },
  {
    id: "caldera",
    term: "Caldera",
    plain: "A huge bowl left behind when a volcano erupts and collapses.",
    technical: "A large volcanic collapse depression formed by evacuation of a magma chamber. Caldera lake sediments can host lithium claystone, as in the McDermitt caldera.",
  },
  {
    id: "chain-of-custody",
    term: "Chain of custody",
    plain: "A written record of who had the samples at every step, so nobody can tamper with them unnoticed.",
    technical: "Documented, continuous control of samples from collection to laboratory receipt, including sealed containers and signed transfers, supporting the integrity of results.",
  },
  {
    id: "claystone",
    term: "Claystone",
    plain: "A soft rock made of hardened clay.",
    technical: "A fine-grained sedimentary rock composed mainly of clay minerals, lacking the fissility of shale. Lacustrine claystones host sedimentary lithium deposits.",
  },
  {
    id: "closed-basin",
    term: "Closed basin",
    plain: "A valley where water flows in but never flows out. It can only dry up.",
    technical: "An endorheic basin with internal drainage, in which evaporation concentrates dissolved elements. The setting for lithium brines and many lithium claystones.",
  },
  {
    id: "collar",
    term: "Collar",
    plain: "The spot on the ground where a drill hole starts.",
    technical: "The surface location of a drill hole, defined by surveyed coordinates and elevation in a stated datum, with the hole's starting azimuth and inclination.",
  },
  {
    id: "composite",
    term: "Composite",
    plain: "The average grade over a stretch of drill hole, where longer samples count for more.",
    technical: "A length-weighted average of consecutive sample intervals, calculated as the sum of length times grade divided by total length.",
  },
  {
    id: "core",
    term: "Core",
    also: ["Drill core", "Diamond core"],
    plain: "A solid stick of rock cut out of the ground by a hollow drill.",
    technical: "A cylindrical rock sample recovered by diamond drilling, preserving lithology, structure, texture and contacts. Common wireline diameters are NQ (47.6 mm), HQ (63.5 mm) and PQ (85.0 mm).",
  },
  {
    id: "core-recovery",
    term: "Core recovery",
    plain: "How much of the rock the drill actually brought up, compared with how far it drilled.",
    technical: "The length of core recovered divided by the length drilled for a run, as a percentage. Low recovery in mineralized zones can bias grade.",
  },
  {
    id: "crm",
    term: "Standard",
    also: ["Certified reference material", "CRM"],
    plain: "A test sample with a known answer. It checks whether the lab is reading true.",
    technical: "A certified reference material with an assigned grade and uncertainty, inserted blind to monitor analytical accuracy and drift.",
  },
  {
    id: "cut-off-grade",
    term: "Cut-off grade",
    plain: "The lowest grade worth counting. Rock below it is treated as waste.",
    technical: "The grade threshold above which material is included in an intercept, resource or reserve, derived from price, recovery and cost assumptions.",
  },
  {
    id: "deposit-model",
    term: "Deposit model",
    plain: "A working picture of what kind of deposit you are looking for and what it should look like.",
    technical: "An organized description of the essential attributes of a class of mineral deposits (descriptive model) and the processes that form them (genetic model), used to predict where and how to explore.",
  },
  {
    id: "detection-limit",
    term: "Detection limit",
    plain: "The smallest amount a lab test can measure. Below that, the lab can only say 'less than.'",
    technical: "The lowest concentration an analytical method can reliably distinguish from zero. Results below it are reported as less than the limit.",
  },
  {
    id: "dip",
    term: "Dip",
    plain: "How steeply a rock layer or vein tilts down from flat.",
    technical: "The angle between a planar feature and the horizontal, measured perpendicular to strike, with a direction. Also the inclination of a drill hole below horizontal.",
  },
  {
    id: "duplicate",
    term: "Duplicate",
    plain: "The same sample sent twice. If the two answers match, the test is steady.",
    technical: "A second sample of the same material used to measure precision. Field, coarse and pulp duplicates isolate error at the sampling, preparation and analytical stages.",
  },
  {
    id: "epithermal",
    term: "Epithermal",
    plain: "A kind of gold and silver deposit that forms near the surface from hot water.",
    technical: "Describes hydrothermal deposits formed at shallow depth, generally less than about 1.5 km, and low temperature, generally below about 300 degrees C. Subdivided into low, intermediate and high-sulfidation types.",
  },
  {
    id: "fault",
    term: "Fault",
    plain: "A crack in the earth where the rock on one side has moved past the other.",
    technical: "A fracture or zone of fractures along which there has been displacement. Faults are primary fluid pathways and commonly control vein and ore-shoot location.",
  },
  {
    id: "fineness",
    term: "Fineness",
    plain: "How pure a piece of gold is, out of 1,000.",
    technical: "The proportion of gold in native gold or bullion in parts per thousand. Gold of 850 fineness is 85 percent gold by weight.",
  },
  {
    id: "fire-assay",
    term: "Fire assay",
    plain: "The standard lab test for gold. The sample is melted to collect the gold so it can be measured.",
    technical: "A fusion method in which a sample charge, commonly 30 g or 50 g, is melted with flux and lead collector, cupelled to a precious-metal bead, and finished by instrumental or gravimetric measurement.",
  },
  {
    id: "float",
    term: "Float",
    plain: "Loose pieces of rock lying on the ground that have broken off from somewhere uphill.",
    technical: "Rock fragments displaced from their bedrock source by weathering and gravity. Mineralized float is traced upslope to find the outcrop it came from.",
  },
  {
    id: "grade",
    term: "Grade",
    plain: "How much metal is in the rock.",
    technical: "The concentration of a metal or mineral in rock, expressed as g/t, ppm, percent or ounces per ton.",
  },
  {
    id: "grade-thickness",
    term: "Grade-thickness",
    also: ["Gram-metres", "Metal accumulation"],
    plain: "Grade multiplied by length. It lets you compare a short rich hit with a long modest one.",
    technical: "The product of intercept grade and length (ideally true thickness), in units such as gram-metres. Used to compare intercepts and contour mineralization.",
  },
  {
    id: "hectorite",
    term: "Hectorite",
    plain: "A clay mineral that holds lithium.",
    technical: "A trioctahedral magnesium-lithium smectite, approximately Na0.3(Mg,Li)3Si4O10(OH)2, in which lithium substitutes for magnesium in the octahedral sheet.",
  },
  {
    id: "icp",
    term: "ICP",
    also: ["ICP-MS", "ICP-OES"],
    plain: "A lab machine that measures many elements in a sample at once.",
    technical: "Inductively coupled plasma analysis with mass spectrometry (ICP-MS) or optical emission spectrometry (ICP-OES), used for multi-element determination after acid digestion or fusion.",
  },
  {
    id: "illite",
    term: "Illite",
    plain: "A clay mineral. In some deposits it holds more lithium than other clays.",
    technical: "A non-expanding, potassium-bearing dioctahedral or trioctahedral clay mica. At Thacker Pass, lithium-rich illitic claystone formed by hydrothermal alteration of smectite.",
  },
  {
    id: "indicated-resource",
    term: "Indicated resource",
    plain: "A middle-confidence estimate of how much is in the ground. Good enough to plan a mine around.",
    technical: "That part of a mineral resource for which quantity, grade, density and shape are estimated with sufficient confidence to support mine planning and economic evaluation. Convertible to a probable reserve.",
  },
  {
    id: "inferred-resource",
    term: "Inferred resource",
    plain: "An early, low-confidence estimate of how much is in the ground, based on only a little drilling.",
    technical: "That part of a mineral resource for which quantity and grade are estimated from limited geological evidence and sampling, with continuity implied but not verified. Not convertible to a reserve.",
  },
  {
    id: "intercept",
    term: "Intercept",
    plain: "The stretch of a drill hole that hit mineralized rock.",
    technical: "A downhole interval of mineralization reported with from and to depths, length and composite grade, and ideally an estimate of true thickness.",
  },
  {
    id: "lce",
    term: "LCE",
    also: ["Lithium carbonate equivalent"],
    plain: "A way of stating how much lithium there is, as if it were all turned into lithium carbonate.",
    technical: "Lithium carbonate equivalent: lithium content restated as Li2CO3 by multiplying lithium metal by 5.323. A reporting convention, not a statement of recoverable product.",
  },
  {
    id: "lode",
    term: "Lode",
    plain: "Mineral that is still in the solid rock where it formed.",
    technical: "A mineral deposit in consolidated rock, such as a vein or zone of veins, as distinct from a placer.",
  },
  {
    id: "lode-claim",
    term: "Lode claim",
    plain: "A mining claim for minerals in solid rock.",
    technical: "A mining claim located on a vein or lode, limited to 1,500 feet along the vein and 300 feet on either side, a maximum of about 20.66 acres.",
  },
  {
    id: "measured-resource",
    term: "Measured resource",
    plain: "The highest-confidence estimate of how much is in the ground.",
    technical: "That part of a mineral resource for which quantity, grade, density and shape are estimated with confidence sufficient for detailed mine planning. Convertible to a proven or probable reserve.",
  },
  {
    id: "mill-site",
    term: "Mill site",
    plain: "A small piece of land claimed for processing or supporting a mine, not for the minerals in it.",
    technical: "A site of up to 5 acres located on non-mineral public land for milling, processing or other uses reasonably incident to mining.",
  },
  {
    id: "mineral-reserve",
    term: "Mineral reserve",
    plain: "The part of a deposit that has been shown to be worth mining.",
    technical: "The economically mineable part of a measured or indicated resource, demonstrated by at least a pre-feasibility study that applies modifying factors. Classified as probable or proven.",
  },
  {
    id: "mineral-resource",
    term: "Mineral resource",
    plain: "An estimate of how much valuable material is in the ground and might be mined.",
    technical: "A concentration of material of economic interest in such form, grade and quantity that there are reasonable prospects for eventual economic extraction. Classified as inferred, indicated or measured.",
  },
  {
    id: "mining-claim",
    term: "Mining claim",
    plain: "A right to look for and mine certain minerals on a piece of public land.",
    technical: "A parcel of federal land located under the General Mining Law of 1872, giving the claimant a possessory right to locatable minerals, subject to recording and annual maintenance requirements.",
  },
  {
    id: "monument",
    term: "Monument",
    plain: "A post or marker that shows where a claim is on the ground.",
    technical: "A physical marker at the point of discovery and at the corners of a mining claim, as required by state law. In Nevada, corner monuments are set within 60 days of posting the notice of location.",
  },
  {
    id: "ni-43-101",
    term: "NI 43-101",
    plain: "Canada's rulebook for how mining companies must report what they have found.",
    technical: "National Instrument 43-101, Standards of Disclosure for Mineral Projects. The Canadian securities rule governing public scientific and technical disclosure, requiring a Qualified Person and, when triggered, a technical report.",
  },
  {
    id: "notice",
    term: "Notice",
    also: ["Notice-level operations", "Notice of Intent"],
    plain: "The paperwork you file before a small drilling job on public land.",
    technical: "A filing under 43 CFR 3809.21 submitted to the BLM at least 15 calendar days before exploration that will disturb 5 acres or less. Requires a reclamation plan, cost estimate and financial guarantee.",
  },
  {
    id: "nsr-royalty",
    term: "NSR royalty",
    also: ["Net smelter return"],
    plain: "A cut of a mine's sales that goes to someone else, usually a past owner.",
    technical: "A net smelter return royalty: a percentage of revenue from product sales less specified transport, smelting and refining charges, payable regardless of the operation's profitability.",
  },
  {
    id: "nugget-effect",
    term: "Nugget effect",
    plain: "When the gold is in a few scattered bits, so two samples from the same spot can give very different answers.",
    technical: "High short-range grade variability caused by coarse or clustered mineral particles and by sampling error. Reduced by larger samples, finer comminution before splitting, and larger assay charges.",
  },
  {
    id: "outcrop",
    term: "Outcrop",
    plain: "A place where solid rock sticks out at the surface so you can see it.",
    technical: "An exposure of bedrock at the surface, where lithology, structure, alteration and mineralization can be observed in place.",
  },
  {
    id: "pathfinder",
    term: "Pathfinder element",
    plain: "An element that travels with the metal you want and spreads farther, so it is easier to find first.",
    technical: "An element associated with a deposit type that forms a broader or more mobile geochemical halo than the target commodity. Arsenic, antimony, mercury and thallium are common pathfinders for gold.",
  },
  {
    id: "placer",
    term: "Placer",
    plain: "Loose gravel or sand with gold or another heavy mineral collected in it.",
    technical: "A deposit of dense, resistant minerals concentrated by mechanical processes, mainly flowing water, in unconsolidated sediment.",
  },
  {
    id: "placer-claim",
    term: "Placer claim",
    plain: "A mining claim for minerals in loose material like gravel.",
    technical: "A mining claim on a placer deposit, limited to 20 acres per locator and up to 160 acres for an association of eight, located by legal subdivision on surveyed land.",
  },
  {
    id: "plan-of-operations",
    term: "Plan of Operations",
    plain: "The full permit you need for a bigger exploration job or any mining on public land.",
    technical: "A filing under 43 CFR 3809.11 required for exploration disturbing more than 5 acres, bulk sampling of 1,000 tons or more, mining, and certain special-status lands. Requires BLM approval and environmental review.",
  },
  {
    id: "ppm",
    term: "ppm",
    also: ["Parts per million", "g/t"],
    plain: "Parts per million. One part of metal in a million parts of rock.",
    technical: "A mass concentration equal to one gram per metric tonne. 10,000 ppm is 1 percent.",
  },
  {
    id: "qaqc",
    term: "QA/QC",
    also: ["Quality assurance and quality control"],
    plain: "The checks that prove lab results can be trusted.",
    technical: "Quality assurance is the planned system for producing reliable data. Quality control is the routine insertion and review of standards, blanks and duplicates to measure accuracy, contamination and precision.",
  },
  {
    id: "qualified-person",
    term: "Qualified Person",
    also: ["QP"],
    plain: "A trained, experienced geologist or engineer who signs off on what a mining company tells the public.",
    technical: "Under NI 43-101 and S-K 1300, a mineral industry professional with at least five years of relevant experience who is a member in good standing of a recognized professional organization, and who is responsible for technical disclosure.",
  },
  {
    id: "rc-drilling",
    term: "RC drilling",
    also: ["Reverse circulation drilling"],
    plain: "A fast kind of drilling that breaks rock into chips and blows them up the pipe with air.",
    technical: "Reverse circulation percussion drilling using dual-wall pipe. Compressed air drives a hammer bit and returns cuttings up the inner tube to a cyclone and splitter, limiting contact with the hole wall.",
  },
  {
    id: "reclamation-bond",
    term: "Reclamation bond",
    also: ["Financial guarantee"],
    plain: "Money you put down as a promise to clean up the land when you finish.",
    technical: "A financial guarantee, in an approved form, covering the estimated cost for a third party to reclaim surface disturbance. Required before notice-level or plan-level work begins on BLM land.",
  },
  {
    id: "silicification",
    term: "Silicification",
    plain: "When hot water fills rock with quartz and makes it very hard.",
    technical: "Alteration in which silica replaces or infills the host rock. Forms resistant ledges and is electrically resistive, which makes it a mapping and geophysical target.",
  },
  {
    id: "sinter",
    term: "Sinter",
    plain: "A crust of silica laid down by a hot spring at the surface.",
    technical: "Finely laminated opaline to chalcedonic silica deposited at the paleosurface by discharging hot springs. Marks the top of an epithermal system.",
  },
  {
    id: "sk-1300",
    term: "S-K 1300",
    plain: "The US rulebook for how mining companies must report what they have found.",
    technical: "Subpart 1300 of SEC Regulation S-K, effective for fiscal years beginning on or after January 1, 2021. Requires resource and reserve disclosure to be supported by a qualified person's technical report summary.",
  },
  {
    id: "smectite",
    term: "Smectite",
    plain: "A group of clay minerals that swell when wet. Some hold lithium.",
    technical: "A group of expandable 2:1 layer clay minerals including montmorillonite and hectorite. The principal lithium host in many sedimentary lithium deposits.",
  },
  {
    id: "stockwork",
    term: "Stockwork",
    plain: "A mesh of many small veins running in different directions through the rock.",
    technical: "A three-dimensional network of closely spaced veinlets. Stockwork zones can be mined in bulk where individual veins are too small to mine alone.",
  },
  {
    id: "strike",
    term: "Strike",
    plain: "The compass direction a rock layer or vein runs along the ground.",
    technical: "The bearing of a horizontal line on a planar geologic surface. Measured at right angles to dip.",
  },
  {
    id: "strip-ratio",
    term: "Strip ratio",
    plain: "How much waste rock has to be moved to get at each ton of ore.",
    technical: "The ratio of waste to ore mined in an open pit, by weight or volume. A key driver of mining cost.",
  },
  {
    id: "tem",
    term: "TEM",
    also: ["Transient electromagnetic survey", "TDEM"],
    plain: "A survey that sends a pulse into the ground to find layers that conduct electricity, like wet clay.",
    technical: "Transient (time-domain) electromagnetics. A transmitter loop is switched off abruptly and the decay of induced eddy currents is measured to model subsurface resistivity with depth.",
  },
  {
    id: "troy-ounce",
    term: "Troy ounce",
    plain: "The ounce used for gold and silver. It is a little heavier than a kitchen ounce.",
    technical: "The unit of mass for precious metals, equal to 31.1035 grams. One troy ounce per short ton equals 34.2857 grams per metric tonne.",
  },
  {
    id: "true-thickness",
    term: "True thickness",
    also: ["True width"],
    plain: "How thick a layer or vein really is, measured straight across it, not along a slanted drill hole.",
    technical: "The thickness of a tabular body measured perpendicular to its boundaries. Calculated from downhole length and the angle between the hole and the body.",
  },
  {
    id: "unpatented-claim",
    term: "Unpatented claim",
    plain: "A mining claim where you hold the mineral rights but the government still owns the land.",
    technical: "A mining claim held by location and annual maintenance, conferring a possessory mineral interest while fee title remains with the United States.",
  },
  {
    id: "vein",
    term: "Vein",
    plain: "A crack in the rock that has filled up with minerals.",
    technical: "A tabular body of minerals deposited from fluid in a fracture or fault. Epithermal veins are typically quartz-dominant with banded and brecciated textures.",
  },
  {
    id: "walker-lane",
    term: "Walker Lane",
    plain: "A long belt of faults along the western side of Nevada. Many gold, silver and lithium districts sit in it.",
    technical: "A northwest-trending zone of strike-slip and extensional faulting along the western Great Basin that accommodates part of the motion between the Pacific and North American plates. Hosts numerous epithermal districts.",
  },
];

// Always served A to Z, whatever order entries are written in.
export const glossary: Term[] = [...entries].sort((a, b) => a.term.localeCompare(b.term, "en", { sensitivity: "base" }));

/** False until Liam has read the glossary. Until then the page is never indexed. */
export const glossaryReviewed = false;

export const termById = (id: string) => glossary.find((entry) => entry.id === id);

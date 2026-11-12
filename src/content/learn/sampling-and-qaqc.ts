import { type Topic, p, h, ul, table, note } from "./types.ts";

export const samplingAndQaqc: Topic = {
  slug: "sampling-and-qaqc",
  title: "Sampling and QA/QC: how to trust an assay",
  description:
    "Standards, blanks and duplicates explained. How quality control proves that a lab result is accurate, clean and repeatable.",
  answer:
    "QA/QC is the set of checks that proves a lab number can be trusted. Standards with a known value test accuracy, blanks test for contamination, and duplicates test repeatability. Without them an assay is a number with no proof behind it.",
  services: ["drilling", "mapping"],
  reviewed: false,
  updated: "2026-11-12",
  float: [
    p("You send a bag of rock to a lab. The lab sends back a number. How do you know the number is right?"),
    p("You hide test samples in the batch. The lab does not know which ones they are."),
    ul(
      "Some are rock you already know the answer for. If the lab gets a different answer, something is off.",
      "Some have nothing in them at all. If the lab finds metal in those, something got mixed in.",
      "Some are the same rock sent twice. If the two answers do not match, the test is not steady.",
    ),
    p("If the lab gets the test samples right, you can trust the rest."),
  ],
  outcrop: [
    h("A sample has to stand for something"),
    p("A sample is only useful if it fairly represents the rock it came from. A hand-picked piece of the best-looking vein shows that metal is present. It says nothing about the grade of the vein as a whole."),
    table(
      "Common sample types",
      ["Type", "How it is taken", "What it can tell you"],
      [
        ["Select or grab", "One piece, chosen by eye", "That a metal is present. Not a grade"],
        ["Chip", "Small chips taken across a face or along a line", "An approximate grade across that line"],
        ["Channel", "A continuous cut of even width and depth", "A reliable grade across the cut"],
        ["Soil", "A fixed depth and size fraction on a grid or line", "Patterns that point toward a buried source"],
        ["Drill", "Chips or core over measured intervals", "Grade with depth and continuity"],
      ],
    ),
    h("The three controls"),
    table(
      "What goes into every batch",
      ["Control", "What it is", "What it tests"],
      [
        ["[[crm|Standard]]", "Prepared material with a certified grade", "Accuracy: is the lab reading true?"],
        ["[[blank|Blank]]", "Material with none of the metal in it", "Contamination between samples"],
        ["[[duplicate|Duplicate]]", "A second sample of the same material", "Precision: does the result repeat?"],
      ],
    ),
    p("A common rate is about one of each in every 20 samples. The controls are numbered in sequence with the real samples so the lab cannot tell them apart."),
    h("Chain of custody"),
    p("From the drill or outcrop to the lab, someone accountable has the samples. Bags are sealed and numbered. Handoffs are written down. A result is only as good as the proof that nobody could have altered the sample."),
    h("When a control fails"),
    p("A failed standard or blank is not ignored and not explained away. The samples around it are re-assayed, and both sets of results are kept on record."),
  ],
  core: [
    h("Why sample size and grind matter"),
    p("Sampling error grows sharply with particle size and falls with sample mass. Coarse gold is the hard case: a few grains carry most of the metal, so a small split may contain several grains or none. This is the [[nugget-effect|nugget effect]]. It is managed with larger samples, finer crushing before splitting, and assay methods that use more material."),
    h("A typical preparation and assay path"),
    ul(
      "Dry, then crush the whole sample to a coarse specification, commonly around 70 percent passing 2 mm.",
      "Split off a portion, commonly 250 g to 1 kg, and pulverize it to around 85 percent passing 75 microns.",
      "Gold: [[fire-assay|fire assay]] of a 30 g or 50 g charge with an instrumental finish. A gravimetric finish for high grades. Screen metallic assay where coarse gold is suspected.",
      "Multi-element: acid digestion followed by [[icp|ICP]] analysis. Four-acid digestion is near total for most minerals. Aqua regia is partial and will under-report elements held in resistant silicates.",
      "Lithium in claystone: the digestion must be stated and kept the same through the program, because partial and near-total methods can give different numbers.",
    ),
    p("Specifications vary by lab and method code. Record the lab, the method codes and the accreditation with every certificate. Commercial labs are commonly accredited to ISO/IEC 17025 for specific methods."),
    h("Types of duplicate"),
    table(
      "Each duplicate isolates a different source of error",
      ["Duplicate", "Taken", "Measures"],
      [
        ["Field duplicate", "At the rig or outcrop: a second split or second half of core", "Total error: geology, sampling, prep and analysis"],
        ["Coarse (prep) duplicate", "After crushing, before pulverizing", "Splitting and preparation error"],
        ["Pulp duplicate", "A second portion of the pulverized pulp", "Analytical error alone"],
      ],
    ),
    h("Judging the results"),
    ul(
      "Standards are plotted on a control chart against the certified mean and standard deviation. A result beyond three standard deviations is a failure. Two in a row beyond two standard deviations on the same side is a warning that the lab is drifting.",
      "Blanks should report near the [[detection-limit|detection limit]]. A common failure line is five to ten times the detection limit. A blank that fails right after a high-grade sample points to carry-over in preparation.",
      "Duplicates are judged on paired plots and relative difference. Expect pulp duplicates to agree most closely, coarse duplicates less, and field duplicates least.",
      "A check lab re-assays a share of pulps, commonly about 5 percent, to test for bias between labs.",
    ),
    h("Matching the standard to the job"),
    p("Standards should match the sample material and bracket the grades that matter: one near the expected cut-off, one near the average grade, and one high. A standard with the wrong matrix can pass while real samples are being misread."),
    h("Data integrity"),
    ul(
      "Load lab results from the original digital certificates, not by retyping.",
      "Keep the certificates. Spot-check the database against them.",
      "Decide in advance how values below detection are stored, and store them the same way every time.",
      "Record every re-assay and which result was accepted, and why.",
    ),
    p("Public disclosure standards make this explicit. A technical report under [[ni-43-101|NI 43-101]] has sections on sample preparation, analysis and security, and on data verification. A [[qualified-person|Qualified Person]] has to state whether the data are adequate for the purpose."),
    note("Rates, pass limits and prep specifications here are common practice, not fixed rules. The right protocol depends on the deposit, the grade range and how the gold or other metal occurs."),
  ],
  faqs: [
    {
      q: "What does QA/QC mean in mineral exploration?",
      a: "Quality assurance and quality control. Quality assurance is the plan for collecting reliable data. Quality control is the set of checks, mainly standards, blanks and duplicates, that proves the plan worked.",
    },
    {
      q: "How many QC samples should a drill program have?",
      a: "A common practice is about one standard, one blank and one duplicate in every 20 samples, so roughly 10 to 15 percent of what goes to the lab is control samples.",
    },
    {
      q: "What is a blank sample?",
      a: "Material known to contain none of the metal being tested. If the lab reports metal in a blank, samples are being contaminated during preparation or analysis.",
    },
    {
      q: "What happens when a standard fails?",
      a: "The samples processed around the failed standard are re-assayed. Both the original and the repeat results are kept, with a note on which was accepted and why.",
    },
  ],
  terms: ["qaqc", "crm", "blank", "duplicate", "nugget-effect", "fire-assay", "icp", "detection-limit", "chain-of-custody", "qualified-person"],
  sources: [
    { label: "USGS, Sample size and meaningful gold analysis (Professional Paper 625-C)", url: "https://pubs.usgs.gov/publication/pp625C" },
    { label: "British Columbia Securities Commission, NI 43-101 Standards of Disclosure for Mineral Projects", url: "https://www.bcsc.bc.ca/securities-law/law-and-policy/instruments-and-policies/4-distribution-requirements/current/43-101" },
  ],
};

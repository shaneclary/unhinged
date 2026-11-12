import { type Topic, p, h, ul, table, note } from "./types.ts";

export const resourcesAndReserves: Topic = {
  slug: "resources-and-reserves",
  title: "Resources, reserves, NI 43-101 and S-K 1300",
  description:
    "What inferred, indicated and measured mean, how a resource differs from a reserve, and what NI 43-101, S-K 1300 and a Qualified Person are.",
  answer:
    "A mineral resource is an estimate of mineralization that has reasonable prospects of being mined at a profit. A mineral reserve is the part of a resource that a technical study has shown can be mined economically. NI 43-101 in Canada and S-K 1300 in the United States are the disclosure rules that say who may publish those estimates and how.",
  services: ["evaluation", "modeling"],
  reviewed: false,
  updated: "2026-11-12",
  calculators: ["tonnage"],
  float: [
    p("Say you find gold in the ground. How much is there?"),
    p("At first you only have a few drill holes, so you are mostly guessing. That early guess is called 'inferred.'"),
    p("Drill more holes, closer together, and the guess gets better. Then it is called 'indicated.' Better still is 'measured.'"),
    p("A resource is how much is in the ground. A reserve is the part you have shown you can dig up and make money on."),
    p("There are rules about this. Only a trained expert is allowed to put those words in front of investors."),
  ],
  outcrop: [
    h("The ladder"),
    table(
      "From first holes to a mine plan",
      ["Category", "Confidence", "Can it become a reserve?"],
      [
        ["Exploration results", "Individual holes and samples. No tonnage", "No"],
        ["[[inferred-resource|Inferred resource]]", "Low. Limited drilling, continuity assumed", "No"],
        ["[[indicated-resource|Indicated resource]]", "Enough to support mine planning", "Yes, to a probable reserve"],
        ["[[measured-resource|Measured resource]]", "High. Close-spaced data, continuity confirmed", "Yes, to a proven or probable reserve"],
      ],
    ),
    h("Resource versus reserve"),
    p("A [[mineral-resource|resource]] is about geology and reasonable prospects. A [[mineral-reserve|reserve]] adds everything else: mining method, processing recovery, costs, prices, permits, infrastructure. Those are called modifying factors. A reserve needs at least a pre-feasibility study behind it."),
    p("Resources that are not reserves have not been shown to be economic. A careful report says so in plain words."),
    h("The rulebooks"),
    table(
      "Who follows what",
      ["Rule", "Applies to", "Report"],
      [
        ["[[ni-43-101|NI 43-101]]", "Companies disclosing to the public in Canada", "Technical report on Form 43-101F1"],
        ["[[sk-1300|S-K 1300]]", "Companies registered with the US SEC", "Technical report summary"],
        ["JORC Code", "Companies listed in Australia and New Zealand", "Public report with Table 1"],
      ],
    ),
    p("Private companies are not bound by these rules. Investors and buyers still judge private projects against them, because the definitions are the common language."),
    h("The Qualified Person"),
    p("A [[qualified-person|Qualified Person]], or QP, is a geologist or engineer with at least five years of relevant experience who belongs to a recognized professional body. The QP takes personal responsibility for the technical statements. That accountability is the point of the system."),
    h("Words to watch"),
    ul(
      "'Historical estimate': an old number made before or outside current standards. It cannot be treated as a current resource.",
      "'Exploration target': a range of tonnes and grade that is conceptual. It is not a resource.",
      "'43-101 compliant resource': regulators discourage this phrasing. A report follows the rule. It does not certify the project.",
    ),
  ],
  core: [
    h("The common framework"),
    p("National codes share definitions through CRIRSCO, the Committee for Mineral Reserves International Reporting Standards. NI 43-101 incorporates the CIM Definition Standards by reference. S-K 1300 was written to align closely with the same framework. The category names mean essentially the same thing across codes, though filing requirements differ."),
    h("NI 43-101"),
    ul(
      "In force since 2001. The current framework dates from June 30, 2011, with minor amendments since.",
      "Governs all public scientific and technical disclosure about a mineral project by an issuer in Canada, written or oral.",
      "Requires disclosure to be based on information prepared or approved by a QP.",
      "Sets triggers for filing a technical report, and requires the QP to have made a current personal inspection of the property.",
      "Requires independence of the QP for certain filings.",
      "The Canadian Securities Administrators published a proposal to repeal and replace the instrument on June 12, 2025. The comment period closed on October 10, 2025. When this page was last updated the 2011 instrument was still the one in force. Check the regulator for current status.",
    ),
    h("S-K 1300"),
    ul(
      "Adopted by the SEC on October 31, 2018, as subpart 1300 of Regulation S-K. It replaced Industry Guide 7.",
      "Compliance was required from the first fiscal year beginning on or after January 1, 2021.",
      "Requires a technical report summary by a qualified person to support disclosed resources and reserves on material properties.",
      "Resources must be supported by an initial assessment. Reserves must be supported by a pre-feasibility or feasibility study.",
      "The qualified person does not have to be independent of the company, but the relationship must be disclosed.",
    ),
    h("Study levels"),
    table(
      "Economic studies in order",
      ["Study", "Purpose", "Can it declare reserves?"],
      [
        ["Initial assessment or preliminary economic assessment (scoping)", "Is there a potentially economic project?", "No"],
        ["Pre-feasibility study", "Choose the preferred mining and processing route", "Yes"],
        ["Feasibility study", "Support a financing and construction decision", "Yes"],
      ],
    ),
    h("How classification is decided"),
    p("Classification is a judgment by the QP about confidence in geologic and grade continuity. Inputs include drill spacing relative to the range of continuity, the quality of the geologic model, sample and assay quality, [[qaqc|QA/QC]] performance, density data, and the reliability of collar and downhole surveys. Flat, bedded deposits can reach a given category at wider spacing than veins or structurally complex bodies."),
    h("Reasonable prospects of economic extraction"),
    p("A resource is not everything above a grade. It is the mineralization that could plausibly be mined. In practice that is shown with a conceptual pit shell or mineable shapes, a [[cut-off-grade|cut-off grade]] built from stated price, cost and recovery assumptions, and a statement of those assumptions."),
    h("Reading a resource statement"),
    ul(
      "Effective date, and the QP who signed.",
      "Tonnes, grade and contained metal by category, with the cut-off.",
      "Whether resources are stated inclusive or exclusive of reserves.",
      "Price, recovery and cost assumptions behind the cut-off.",
      "Inferred tonnes kept separate, never added to measured and indicated.",
      "The cautionary statement that resources are not reserves.",
    ),
    note("This is an orientation, not securities advice. Disclosure obligations depend on the company, its listings and the jurisdiction. Use securities counsel and a QP for any public statement."),
  ],
  faqs: [
    {
      q: "What is the difference between a mineral resource and a mineral reserve?",
      a: "A resource is an estimate of mineralization with reasonable prospects of economic extraction. A reserve is the economically mineable part of a measured or indicated resource, shown by at least a pre-feasibility study.",
    },
    {
      q: "What does inferred mean?",
      a: "The lowest-confidence resource category. Tonnage and grade are estimated from limited sampling, and continuity is assumed, not confirmed. Inferred resources cannot be converted to reserves.",
    },
    {
      q: "Who is a Qualified Person?",
      a: "A geologist or engineer with at least five years of relevant experience who is a member in good standing of a recognized professional organization, and who takes responsibility for the technical disclosure.",
    },
    {
      q: "Does a private company need an NI 43-101 report?",
      a: "Not by law. NI 43-101 applies to public disclosure by issuers in Canada. Private projects are still commonly judged against the same definitions by investors and buyers.",
    },
    {
      q: "Is S-K 1300 the same as NI 43-101?",
      a: "They are separate rules from different regulators that share the same underlying definitions. They differ in filing requirements, study terminology and independence rules.",
    },
  ],
  terms: ["mineral-resource", "mineral-reserve", "inferred-resource", "indicated-resource", "measured-resource", "qualified-person", "ni-43-101", "sk-1300", "cut-off-grade", "qaqc"],
  sources: [
    { label: "SEC, Modernization of Property Disclosures for Mining Registrants (Release No. 33-10570)", url: "https://www.sec.gov/files/rules/final/2018/33-10570.pdf" },
    { label: "SEC, Small Entity Compliance Guide for subpart 1300", url: "https://www.sec.gov/corpfin/secg-modernization-property-disclosures-mining-registrants" },
    { label: "British Columbia Securities Commission, NI 43-101 Standards of Disclosure for Mineral Projects", url: "https://www.bcsc.bc.ca/securities-law/law-and-policy/instruments-and-policies/4-distribution-requirements/current/43-101" },
    { label: "CIM Magazine, NI 43-101 overhaul advances (2025)", url: "https://magazine.cim.org/en/news/2025/ni-43-101-overhaul-advances-en/" },
  ],
};

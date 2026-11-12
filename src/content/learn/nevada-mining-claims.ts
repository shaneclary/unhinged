import { type Topic, p, h, ul, ol, table, note } from "./types.ts";

export const nevadaMiningClaims: Topic = {
  slug: "nevada-mining-claims",
  title: "Mining claims in Nevada: staking, filing and keeping them",
  description:
    "How mining claims work in Nevada: lode and placer claims, the 90-day filing rule, BLM and county fees, and the yearly deadlines that keep a claim alive.",
  answer:
    "A mining claim gives you the right to explore for and mine certain minerals on open federal land. In Nevada you stake the claim on the ground, file a certificate of location and claim map with both the county recorder and the BLM within 90 days, and pay the BLM maintenance fee by September 1 every year to keep it.",
  services: ["logistics", "evaluation"],
  reviewed: false,
  updated: "2026-11-12",
  calculators: ["claims"],
  float: [
    p("A mining claim is like a permission slip for a piece of public land. It lets you look for minerals there, and mine them if you find them."),
    p("You do not own the land. You own the right to the minerals in it."),
    p("To get a claim, you go out and mark the corners with posts. Then you fill out papers and pay a fee. You have 90 days to turn the papers in."),
    p("Every year you pay again to keep the claim. If you miss the date, the claim is gone."),
  ],
  outcrop: [
    h("The kinds of claim"),
    table(
      "Claim and site types",
      ["Type", "For", "Size limit"],
      [
        ["[[lode-claim|Lode claim]]", "Minerals in solid rock, such as veins", "1,500 ft by 600 ft, about 20.66 acres"],
        ["[[placer-claim|Placer claim]]", "Minerals in loose material such as gravel", "20 acres per person, up to 160 acres for a group of eight"],
        ["[[mill-site|Mill site]]", "Non-mineral land used for processing", "5 acres"],
        ["Tunnel site", "A tunnel driven to find or reach veins", "Up to 3,000 ft along the line of the tunnel"],
      ],
    ),
    p("Which type fits a bedded deposit, such as lithium claystone, is a legal question. Get advice before you stake."),
    h("The steps"),
    ol(
      "Check the land. Claims can only go on federal land that is open to mineral entry. Look up land status and existing claims in the BLM's MLRS system before you go out.",
      "Stake it. Post a notice of location on the ground and mark the claim with [[monument|monuments]]. Nevada gives you 60 days from posting to set the corners.",
      "File within 90 days. Record a certificate of location and two copies of a claim map with the county recorder. File the same with the BLM Nevada State Office and pay the BLM fees.",
      "Keep it up. Pay the BLM maintenance fee on or before September 1 each year. Record a notice of intent to hold with the county on or before November 1.",
    ),
    h("What it costs"),
    table(
      "BLM fees per claim (2026 and 2027 assessment years)",
      ["Fee", "Amount", "When"],
      [
        ["Processing fee", "$25", "Once, at filing"],
        ["Location fee", "$49", "Once, at filing"],
        ["Maintenance fee", "$200", "At filing, then every year by September 1"],
        ["Total to record a new lode claim", "$274", "Within 90 days of location"],
      ],
    ),
    p("For placer claims the maintenance fee is $200 for each 20 acres or part of 20 acres. County recording and map fees are extra and vary by county. Staking labor and surveying are extra too."),
    note("Fees and deadlines change. The BLM notes that its fees may be adjusted. Check the BLM fee page and your county recorder before you file. This guide is not legal advice."),
  ],
  core: [
    h("Legal basis"),
    ul(
      "General Mining Law of 1872 (30 U.S.C. 22 to 54): the right to locate claims on open public land.",
      "Federal Land Policy and Management Act of 1976: the requirement to record claims with the BLM.",
      "43 CFR Parts 3830 to 3838: location, recording, fees and annual maintenance.",
      "Nevada Revised Statutes Chapter 517: state rules for monuments, maps, certificates of location and annual filings.",
    ),
    h("What can be claimed"),
    p("Only locatable minerals can be claimed: metallic minerals such as gold, silver, copper and lithium, and certain non-metallic minerals. Leasable minerals (oil, gas, coal, geothermal, potash, sodium, phosphate) are obtained by lease. Common sand, gravel and stone are salable minerals, bought by contract or permit, not claimed."),
    h("Discovery and possession"),
    p("A claim is only valid against the United States once a valuable mineral deposit has been discovered within it. Before discovery, a locator's position rests on actual occupation and diligent work. Most exploration-stage claims are held this way, which is why they are called [[unpatented-claim|unpatented claims]]: the claimant holds a mineral right, and title to the land stays with the federal government. Congress has barred new patent applications since October 1994."),
    h("Nevada location requirements"),
    ul(
      "Monuments: set within 60 days after posting the notice of location (NRS 517.030).",
      "Claim map: two copies, at a scale of not less than 500 feet to the inch, filed with the county recorder within 90 days after posting (NRS 517.040).",
      "Certificate of location: recorded with the county recorder within 90 days after the date of location. A certificate that is not recorded in time makes the location void (NRS 517.050).",
      "BLM recording: certificate of location and map filed with the BLM Nevada State Office within 90 days of location, with full fees. A filing on day 91 is rejected.",
    ),
    h("The annual calendar"),
    table(
      "Yearly filings for an existing Nevada claim",
      ["Date", "Where", "What"],
      [
        ["On or before September 1", "BLM", "Maintenance fee, $200 per lode claim or site, or a small miner waiver"],
        ["On or before November 1", "County recorder", "Affidavit and notice of intent to hold"],
        ["On or before December 30", "BLM", "Affidavit of [[assessment-work|assessment work]], waiver filers only, $15 per claim"],
      ],
    ),
    p("The assessment year runs from September 1 to September 1. Failing to pay the maintenance fee or file a waiver by the deadline forfeits the claim by operation of law. There is no grace period. The BLM does not prorate: holding a claim for one day of an assessment year costs the full fee."),
    h("Small miner waiver"),
    p("A claimant holding ten or fewer claims and sites nationwide can file a maintenance fee waiver by September 1 in place of paying. The claimant must then perform at least $100 of assessment work per claim and file an affidavit of that work by December 30."),
    h("The bridge trap"),
    p("If you locate a claim before September 1 and record it with the BLM after September 1, you owe the maintenance fee for both assessment years: the one in which you located it and the new one that began on September 1. Plan late-summer staking around this."),
    h("Checking someone else's claims"),
    ul(
      "Pull the BLM serial register for each claim. Confirm the case is active and every year's payment is on record.",
      "Search the county recorder for the certificate of location, the annual filings and every transfer. Build the chain of title.",
      "Plot the claims against older claims. A senior claim prevails over a junior claim where they overlap.",
      "Check the ground. Are the monuments there, and do they match the map?",
      "Look for royalties, leases, options and liens recorded against the claims.",
    ),
    h("What a claim does not give you"),
    p("A claim does not authorize surface disturbance. Exploration beyond casual use still needs a [[notice|Notice]] or a [[plan-of-operations|Plan of Operations]] under 43 CFR 3809, with a reclamation bond. See the permitting guide."),
    note("This is a summary for orientation, not legal advice. Claim law has traps. For anything of value, use a qualified landman or mining attorney."),
  ],
  faqs: [
    {
      q: "How much does it cost to stake a mining claim in Nevada?",
      a: "The BLM charges $274 to record a new lode claim: a $25 processing fee, a $49 location fee and a $200 first-year maintenance fee. County recording and map fees are added to that and vary by county, and you pay for the staking itself.",
    },
    {
      q: "How big is a lode claim?",
      a: "Up to 1,500 feet long and 600 feet wide, which is about 20.66 acres.",
    },
    {
      q: "Do I own the land when I stake a claim?",
      a: "No. An unpatented claim gives you the right to explore for and extract the minerals. The land stays federal public land.",
    },
    {
      q: "What happens if I miss the September 1 deadline?",
      a: "The claim is forfeited. There is no grace period. If the ground is still open you can stake it again, but anyone else can too.",
    },
    {
      q: "How long do I have to file after staking?",
      a: "Ninety days from the date of location, with both the county recorder and the BLM. The BLM rejects filings made on day 91.",
    },
  ],
  terms: ["mining-claim", "lode-claim", "placer-claim", "mill-site", "monument", "unpatented-claim", "assessment-work", "blm", "notice"],
  sources: [
    { label: "BLM, Mining Claim Fees", url: "https://blm.gov/programs/energy-and-minerals/mining-and-minerals/locatable-minerals/mining-claims/fees" },
    { label: "BLM, Annual Maintenance and Assessment", url: "https://www.blm.gov/programs/energy-and-minerals/mining-and-minerals/locatable-materials/annualmaintenance" },
    { label: "BLM, 2027 Mining Season fee notice (March 2026)", url: "https://www.blm.gov/sites/default/files/docs/2026-03/2027_Mining_Season_508.pdf" },
    { label: "Nevada Division of Minerals, Mining Claims", url: "https://www.minerals.nv.gov/programs/mining/claims/" },
    { label: "Nevada Division of Minerals, Mining Claim Filing Requirements in Nevada", url: "https://minerals.nv.gov/uploadedFiles/mineralsnvgov/content/Programs/Mining/MiningClaimFilingRequirementsInNV(1).pdf" },
    { label: "Nevada Bureau of Mines and Geology, Mining Claim Procedures for Nevada Prospectors and Miners (Special Publication 6)", url: "https://minerals.nv.gov/uploadedFiles/mineralsnvgov/content/Programs/Mining/Mining%20Claim%20Procedures%20Sixth%20Ed%20sp006.pdf" },
  ],
};

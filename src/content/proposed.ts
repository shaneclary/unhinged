// Everything in this build that is NOT Liam's existing language, kept in one
// place so he can approve, change or strike each item. Shown at /proposed-additions
// (never indexed). Nothing here should be treated as approved until he says so.

export type Proposal = { title: string; what: string; why: string; needs: string };

export const builtForReview: Proposal[] = [
  {
    title: "Learn: eleven exploration guides, each at three depths",
    what: "New guides on how exploration works, evaluating a property, Nevada mining claims, permitting, RC vs core drilling, sampling and QA/QC, reading assays, resources and reserves, lithium claystone, epithermal gold-silver, and placer gold. Each is written three times: Float (plain basics), Outcrop (working knowledge), Core (full technical).",
    why: "These are the questions owners, investors and junior explorers type into search engines and AI assistants before they call a geologist. Answering them well is how the site earns that first visit.",
    needs: "Liam's technical read of every guide. Each one is marked as a draft and hidden from search engines until he signs off on it.",
  },
  {
    title: "Glossary: every term defined twice",
    what: "Every term used in the guides, with a plain definition and a technical one. Guide text links to it.",
    why: "Definition pages are what AI answer engines quote. It also lets the guides stay short.",
    needs: "Liam's read. Hidden from search engines until approved.",
  },
  {
    title: "Calculators: six, rebuilt",
    what: "Grade unit converter, lithium ppm to LCE, weighted average intercept grade, true thickness, tonnage and contained metal, and BLM lode claim fees.",
    why: "The current site has a Calculators page. Its contents could not be read for this draft, so these were built from scratch with tested math.",
    needs: "A comparison with the current calculators so nothing Liam's clients use goes missing. Confirm the fee defaults.",
  },
  {
    title: "Reading-depth names: Float, Outcrop, Core",
    what: "The three depths are named for how a geologist meets a rock: loose float on the surface, the outcrop it came from, then drill core.",
    why: "It gives the plain-language, working and technical levels names that belong to this trade.",
    needs: "A yes or no. They can be renamed in one file.",
  },
  {
    title: "Logo-led styling, service badges and the strip-log graphic",
    what: "The original miner logo appears on the home page. Parchment, charcoal, orange, crossed-pick branding, a hard-hat favicon and six field-tool service badges carry its style across the site. The exploration cycle is shown as a four-interval drill log.",
    why: "It makes the site look like the work: map explanations and drill logs, not stock consulting graphics.",
    needs: "Liam's eye on the visual treatment and new tool badges. The original logo was copied from the current public site; a vector master would improve future print and large-format use.",
  },
  {
    title: "A 'Learn' strip on the home page",
    what: "One new band on the home page that links to the guides, under the heading 'Learn'.",
    why: "Search engines weigh links from the home page most. Without it the guides are only reachable from the menu.",
    needs: "A yes or no.",
  },
  {
    title: "Contact form fields",
    what: "Name, email, company, phone, project location, commodity, and what you need.",
    why: "The current form's fields could not be read. These are the minimum that lets Liam triage a request.",
    needs: "The inbox address requests should go to. Confirm the fields.",
  },
  {
    title: "Footer note",
    what: "'Guides and calculators on this site are general information, not professional, legal or investment advice.'",
    why: "The guides cover claims, permits and disclosure rules. One line keeps them in their lane.",
    needs: "A yes or no, or Liam's preferred wording.",
  },
];

export const ideas: Proposal[] = [
  {
    title: "Liam's credentials on the About page",
    what: "Degrees, professional registrations, years in the field, districts and commodities worked, and a photo.",
    why: "Search engines and AI systems rank expert content by who stands behind it. Clients look for the same thing.",
    needs: "The facts from Liam, in his words.",
  },
  {
    title: "A 'Reviewed by Liam Eades' line on every guide",
    what: "Name, credential and review date at the top of each approved guide.",
    why: "It is the single strongest trust signal the learning section can carry.",
    needs: "Comes free once each guide is approved.",
  },
  {
    title: "One page per service",
    what: "Six pages, one for each service, each with scope, deliverables, typical timeline and a worked example.",
    why: "A page titled for one service can rank for that service. One combined page cannot rank for six.",
    needs: "Liam's description of how he runs each one.",
  },
  {
    title: "Project write-ups",
    what: "Short case pages: the problem, the work, the result. Lida Valley first, with the owner's permission.",
    why: "Proof of work converts better than any claim, and gives other sites something to link to.",
    needs: "Client permission and what can be said publicly.",
  },
  {
    title: "District pages",
    what: "Pages on the ground Liam knows: Tonopah, Goldfield, Esmeralda County lithium basins, the Walker Lane.",
    why: "People search by place. These pages would back up the Nevada Exploration page.",
    needs: "Liam's field knowledge. These should not be written from the desk.",
  },
  {
    title: "More guides",
    what: "Exploration geophysics, reading a geologic map, soil geochemistry surveys, water rights for Nevada projects, budgeting a first drill program, critical minerals found with lithium clay.",
    why: "Each fills a gap in the current set and matches a service.",
    needs: "A priority order from Liam.",
  },
  {
    title: "Captions and descriptions for the field photos",
    what: "A line under each photo saying where it is and what it shows, plus alt text.",
    why: "The current photos carry no descriptions. Described photos are found in image search and help screen-reader users.",
    needs: "Liam to say what each photo is.",
  },
  {
    title: "A direct phone number or email",
    what: "A visible way to reach the office besides the form.",
    why: "Some clients will not use a form. Consistent contact details also help local search.",
    needs: "Liam's call on what to publish.",
  },
  {
    title: "Google Business Profile for the Tonopah office",
    what: "A verified listing with the same name and address as the site.",
    why: "It puts the firm on the map for 'geologist near Tonopah' style searches.",
    needs: "Liam to verify the address with Google.",
  },
];

export const questions: string[] = [
  "The current site shows a cart link. Is anything sold there, or can it go?",
  "Keep the newsletter signup? If so, which service should hold the list?",
  "Keep the live gold and silver price boxes? They load code from another company on every visit.",
  "What is the LinkedIn address to link? Are the Instagram and X addresses correct?",
  "Can Liam send the logo as a vector or PNG file?",
];

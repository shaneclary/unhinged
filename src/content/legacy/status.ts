import { routes } from "../site.ts";

// Where each page of the current site stands in this build.
//   imported: true  -> Liam's text is in. Page can be indexed and goes in the sitemap.
//   imported: false -> page exists at the same address but is waiting on its text.
// Flip a page to true only after its text has been brought over and checked.
export const legacyPages = [
  { path: routes.home, label: "Home", imported: true, note: "Headings word for word. Body paragraphs are close paraphrases until the exact text is imported." },
  { path: routes.services, label: "Services", imported: true, note: "Built from the six service blocks on the home page. The current Services page itself has not been read yet." },
  { path: routes.contact, label: "Contact", imported: true, note: "New form. Address from the current site." },
  { path: routes.calculators, label: "Calculators", imported: true, note: "Rebuilt from scratch. The current calculators have not been seen, so these may differ." },
  { path: routes.about, label: "About Unhinged Geology", imported: false, note: "Not read yet." },
  { path: routes.team, label: "Join Our Team", imported: false, note: "Not read yet." },
  { path: routes.nevada, label: "Nevada Exploration", imported: false, note: "Not read yet." },
  { path: routes.news, label: "News", imported: false, note: "Not read yet. Posts need importing one by one." },
  { path: routes.faq, label: "FAQ", imported: false, note: "Not read yet." },
  { path: routes.resources, label: "Exploration & Field Resources", imported: false, note: "Not read yet." },
  { path: routes.articles, label: "Articles", imported: false, note: "Not read yet. Articles need importing one by one, each at its current address." },
] as const;

export const isImported = (path: string) => legacyPages.some((page) => page.path === path && page.imported);

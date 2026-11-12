// Plain-text versions of the site for AI assistants (the llms.txt convention).
// /llms.txt is the short map. /llms-full.txt carries the full text of every
// reviewed guide and the glossary. Unreviewed guides are left out.
import { routes, site } from "@/content/site";
import { services } from "@/content/services";
import { topics } from "@/content/learn";
import { LEVELS, plain, type Block } from "@/content/learn/types";
import { glossary, glossaryReviewed } from "@/content/glossary";
import { calculatorIndex } from "@/content/calculators";

const url = (path: string) => `${site.url}${path}`;

const blockText = (block: Block): string => {
  if ("p" in block) return plain(block.p);
  if ("h" in block) return `#### ${block.h}`;
  if ("note" in block) return `Note: ${plain(block.note)}`;
  if ("ul" in block) return block.ul.map((item) => `- ${plain(item)}`).join("\n");
  if ("ol" in block) return block.ol.map((item, index) => `${index + 1}. ${plain(item)}`).join("\n");
  const { caption, head, rows } = block.table;
  return [
    `Table: ${caption}`,
    `| ${head.join(" | ")} |`,
    `| ${head.map(() => "---").join(" | ")} |`,
    ...rows.map((row) => `| ${row.map(plain).join(" | ")} |`),
  ].join("\n");
};

const reviewedTopics = () => topics.filter((topic) => topic.reviewed);

export function llmsIndex(): string {
  const guides = reviewedTopics();
  return [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `${site.legalName}, ${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}. Principal: ${site.principal}.`,
    "",
    "## Services",
    ...services.map((service) => `- [${service.name}](${url(routes.services)}#${service.id}): ${service.summary}`),
    "",
    ...(guides.length > 0
      ? [
          "## Guides",
          ...guides.map((topic) => `- [${topic.title}](${url(`${routes.learn}/${topic.slug}`)}): ${plain(topic.answer)}`),
          "",
        ]
      : []),
    "## Tools",
    ...calculatorIndex.map((entry) => `- [${entry.label}](${url(routes.calculators)}#${entry.id})`),
    ...(glossaryReviewed ? [`- [Glossary](${url(routes.glossary)}): ${glossary.length} exploration terms, each with a plain and a technical definition`] : []),
    "",
    "## Contact",
    `- [Request a consultation](${url(routes.contact)})`,
    "",
    "## Full text",
    `- [llms-full.txt](${url("/llms-full.txt")})`,
    "",
  ].join("\n");
}

export function llmsFull(): string {
  const parts: string[] = [`# ${site.name}: full text`, "", `> ${site.description}`, ""];
  for (const topic of reviewedTopics()) {
    parts.push(`## ${topic.title}`, `URL: ${url(`${routes.learn}/${topic.slug}`)}`, `Last updated: ${topic.updated}`, "", `Short answer: ${plain(topic.answer)}`, "");
    for (const level of LEVELS) {
      parts.push(`### ${level.name} (${level.plain.toLowerCase()})`, "", ...topic[level.id].map(blockText).flatMap((text) => [text, ""]));
    }
    parts.push("### Common questions", "", ...topic.faqs.flatMap((entry) => [`Q: ${entry.q}`, `A: ${entry.a}`, ""]));
    if (topic.sources.length > 0) parts.push("### Sources", ...topic.sources.map((source) => `- ${source.label}: ${source.url}`), "");
  }
  if (glossaryReviewed) {
    parts.push("## Glossary", "");
    for (const term of glossary) parts.push(`**${term.term}**: ${term.plain} ${term.technical}`, "");
  }
  return parts.join("\n");
}

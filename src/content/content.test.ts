// Content integrity: every cross-reference in the guides points at something real.
import { test } from "node:test";
import assert from "node:assert/strict";
import { topics } from "./learn/index.ts";
import { glossary } from "./glossary.ts";
import { services } from "./services.ts";
import { calculatorIndex } from "./calculators.ts";
import type { Block } from "./learn/types.ts";

const termIds = new Set(glossary.map((entry) => entry.id));
const slugs = new Set(topics.map((topic) => topic.slug));
const calculatorIds = new Set<string>(calculatorIndex.map((entry) => entry.id));

const textOf = (block: Block): string[] => {
  if ("p" in block) return [block.p];
  if ("h" in block) return [block.h];
  if ("note" in block) return [block.note];
  if ("ul" in block) return block.ul;
  if ("ol" in block) return block.ol;
  return [block.table.caption, ...block.table.head, ...block.table.rows.flat()];
};

test("glossary ids are unique", () => {
  assert.equal(termIds.size, glossary.length);
});

test("glossary is in alphabetical order by term", () => {
  const names = glossary.map((entry) => entry.term.toLowerCase());
  assert.deepEqual(names, [...names].sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" })));
});

test("topic slugs are unique", () => {
  assert.equal(slugs.size, topics.length);
});

for (const topic of topics) {
  test(`${topic.slug}: inline glossary links resolve`, () => {
    const text = [...topic.float, ...topic.outcrop, ...topic.core].flatMap(textOf).join("\n");
    for (const match of text.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)) {
      assert.ok(termIds.has(match[1]), `unknown glossary id "${match[1]}"`);
    }
  });

  test(`${topic.slug}: listed terms, calculators and services exist`, () => {
    for (const id of topic.terms) assert.ok(termIds.has(id), `unknown term "${id}"`);
    for (const id of topic.calculators ?? []) assert.ok(calculatorIds.has(id), `unknown calculator "${id}"`);
    for (const id of topic.services) assert.ok(services.some((service) => service.id === id), `unknown service "${id}"`);
  });

  test(`${topic.slug}: has all three levels, an answer and questions`, () => {
    assert.ok(topic.float.length >= 3 && topic.outcrop.length >= 3 && topic.core.length >= 3);
    assert.ok(topic.answer.length > 60);
    assert.ok(topic.description.length <= 160, `description is ${topic.description.length} chars`);
    assert.ok(topic.faqs.length >= 3);
  });

  test(`${topic.slug}: source links are well-formed https URLs with no spaces`, () => {
    for (const source of topic.sources) {
      assert.match(source.url, /^https:\/\/\S+$/);
    }
  });
}

test("services point at guides that exist", () => {
  for (const service of services) {
    for (const slug of service.learn) assert.ok(slugs.has(slug), `${service.id} -> unknown guide "${slug}"`);
  }
});

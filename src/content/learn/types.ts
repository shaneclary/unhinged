import type { ServiceId } from "../services.ts";

// A guide is written three times, at three depths. Same facts, different detail.
//   float   = plain-language basics (3rd to 5th grade reading level). Shown first.
//   outcrop = working knowledge for owners, investors and operators.
//   core    = full technical detail.
// The names follow how a geologist meets a rock: loose float on the surface,
// then the outcrop it came from, then drill core from depth.
export const LEVELS = [
  { id: "float", name: "Float", plain: "The basics", blurb: "Plain language. Start here." },
  { id: "outcrop", name: "Outcrop", plain: "Working knowledge", blurb: "What owners, investors and operators need." },
  { id: "core", name: "Core", plain: "Full technical", blurb: "Methods, numbers and the fine print." },
] as const;

export type LevelId = (typeof LEVELS)[number]["id"];

// Inline text may link a glossary term: [[term-id]] or [[term-id|words to show]].
export type Block =
  | { p: string }
  | { h: string }
  | { ul: string[] }
  | { ol: string[] }
  | { note: string }
  | { table: { caption: string; head: string[]; rows: string[][] } };

export type Source = { label: string; url: string };

export type Topic = {
  slug: string;
  title: string;
  /** Meta description. Under 160 characters. */
  description: string;
  /** The direct answer, in one or two sentences. Shown at the top of the page. */
  answer: string;
  services: ServiceId[];
  /** False until Liam has read and approved it. Unreviewed guides are never indexed. */
  reviewed: boolean;
  updated: string;
  float: Block[];
  outcrop: Block[];
  core: Block[];
  faqs: { q: string; a: string }[];
  /** Glossary ids. */
  terms: string[];
  sources: Source[];
  /** Anchor ids on /calculators. */
  calculators?: string[];
};

export const p = (text: string): Block => ({ p: text });
export const h = (text: string): Block => ({ h: text });
export const ul = (...items: string[]): Block => ({ ul: items });
export const ol = (...items: string[]): Block => ({ ol: items });
export const note = (text: string): Block => ({ note: text });
export const table = (caption: string, head: string[], rows: string[][]): Block => ({
  table: { caption, head, rows },
});

/** Strip [[id|label]] markup down to plain words (for metadata, llms.txt, JSON-LD). */
export const plain = (text: string): string =>
  text.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2").replace(/\[\[([^\]]+)\]\]/g, (_, id: string) => id.replace(/-/g, " "));

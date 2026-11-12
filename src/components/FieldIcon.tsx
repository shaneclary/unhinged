import type { ServiceId } from "@/content/services";

/** Bold field-tool linework, echoing the mining tools in the original logo. */
export function FieldIcon({ kind }: { kind: ServiceId | "picks" }) {
  const drawings = {
    evaluation: <><path d="m10 27 5-15 12-4 9 11-5 15-15 2Z" /><path d="m15 12 7 11 14-4M22 23l-6 13M22 23l9 11" /><circle cx="33" cy="32" r="9" /><path d="m40 39 7 7" /></>,
    drilling: <><path d="M14 43h27M18 40 27 7l10 33M22 25h11M19 35h17M27 7v34M11 44h34" /><path d="M32 12h9v17l-4 5-4-5V18h-6M37 34v10" /></>,
    mapping: <><path d="m7 13 13-5 14 5 13-5v32l-13 5-14-5-13 5ZM20 8v32M34 13v32" /><path d="m11 28 5-5 9 7 6-9 10 5M11 34l5-4M38 34l5-3" /></>,
    strategy: <><circle cx="27" cy="27" r="18" /><circle cx="27" cy="27" r="10" /><path d="M27 4v9M27 41v9M4 27h9M41 27h9" /><path d="m27 17 5 10-5 10-5-10Z" /></>,
    modeling: <><path d="m7 17 20-10 20 10-20 10ZM7 27l20 10 20-10M7 37l20 10 20-10M7 17v20M47 17v20M27 27v20" /><path d="m17 12 20 10M17 32l20-10" /></>,
    logistics: <><path d="m8 40 10-17 8 11 9-19 13 25ZM35 15V6l10 4-10 4M7 45h41" /><path d="m18 23 3-6 6 6M12 40l6-6 8 6M30 27l5 5 5-5" /></>,
    picks: <><path d="m12 45 26-31 4 4-26 31ZM7 13c10-6 21-6 32 1L26 15 13 24Z" /><path d="m42 45-26-31-4 4 26 31ZM47 13c-10-6-21-6-32 1l13 1 13 9Z" /></>,
  };
  return <svg viewBox="0 0 54 54" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{drawings[kind]}</svg>;
}

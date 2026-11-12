import type { Topic } from "./types.ts";
import { howExplorationWorks } from "./how-exploration-works.ts";
import { evaluatingAMineralProperty } from "./evaluating-a-mineral-property.ts";
import { nevadaMiningClaims } from "./nevada-mining-claims.ts";
import { explorationPermittingNevada } from "./exploration-permitting-nevada.ts";
import { rcVsCoreDrilling } from "./rc-vs-core-drilling.ts";
import { samplingAndQaqc } from "./sampling-and-qaqc.ts";
import { readingAssayResults } from "./reading-assay-results.ts";
import { resourcesAndReserves } from "./resources-and-reserves.ts";
import { lithiumClaystoneNevada } from "./lithium-claystone-nevada.ts";
import { epithermalGoldSilver } from "./epithermal-gold-silver.ts";
import { placerGold } from "./placer-gold.ts";

// Grouped the way the exploration cycle runs: Evaluate it. Target it. Drill it. Understand it.
export const topicGroups: { stage: string; blurb: string; topics: Topic[] }[] = [
  {
    stage: "Evaluate it.",
    blurb: "Is the ground worth the money?",
    topics: [howExplorationWorks, evaluatingAMineralProperty, nevadaMiningClaims],
  },
  {
    stage: "Target it.",
    blurb: "What are you looking for, and what does it look like?",
    topics: [lithiumClaystoneNevada, epithermalGoldSilver, placerGold],
  },
  {
    stage: "Drill it.",
    blurb: "Permits, rigs and samples you can trust.",
    topics: [explorationPermittingNevada, rcVsCoreDrilling, samplingAndQaqc],
  },
  {
    stage: "Understand it.",
    blurb: "What the numbers mean.",
    topics: [readingAssayResults, resourcesAndReserves],
  },
];

export const topics: Topic[] = topicGroups.flatMap((group) => group.topics);
export const topicBySlug = (slug: string) => topics.find((topic) => topic.slug === slug);

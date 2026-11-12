// Pure math behind the calculators. No UI, no rounding: callers format.
// Tests: src/lib/calc.test.ts (run with `npm test`).

export type GradeUnit = "ppm" | "ppb" | "gpt" | "opt" | "pct";

export const TROY_OZ_G = 31.1034768;
export const SHORT_TON_T = 0.90718474;
export const ACRE_M2 = 4046.8564224;
/** Largest lode claim allowed: 1,500 ft by 600 ft. */
export const LODE_CLAIM_ACRES = (1500 * 600) / 43560;

// How many ppm (grams per metric tonne) one of each unit is worth.
const PPM_PER_UNIT: Record<GradeUnit, number> = {
  ppm: 1,
  gpt: 1,
  ppb: 1 / 1000,
  pct: 10000,
  opt: TROY_OZ_G / SHORT_TON_T,
};

export function convertGrade(value: number, from: GradeUnit, to: GradeUnit): number {
  return (value * PPM_PER_UNIT[from]) / PPM_PER_UNIT[to];
}

// Atomic masses (IUPAC abridged).
const LI = 6.94;
const C = 12.011;
const O = 15.999;
const H = 1.008;
export const LI_TO_LI2O = (2 * LI + O) / (2 * LI);
export const LI_TO_LCE = (2 * LI + C + 3 * O) / (2 * LI);
export const LI_TO_LIOH_H2O = (LI + O + H + (2 * H + O)) / LI;

export function lithiumEquivalents(liPpm: number) {
  const liPct = liPpm / 10000;
  return {
    liPct,
    li2oPct: liPct * LI_TO_LI2O,
    lcePct: liPct * LI_TO_LCE,
    liohPct: liPct * LI_TO_LIOH_H2O,
  };
}

export type Interval = { from: number; to: number; grade: number };

/** Length-weighted average grade over drill intervals. */
export function weightedAverage(intervals: Interval[]) {
  let length = 0;
  let gradeThickness = 0;
  for (const interval of intervals) {
    const run = interval.to - interval.from;
    if (!(run > 0) || !Number.isFinite(interval.grade)) continue;
    length += run;
    gradeThickness += run * interval.grade;
  }
  return { length, grade: length > 0 ? gradeThickness / length : 0, gradeThickness };
}

/**
 * True thickness of a layer from a downhole intercept.
 * Assumes the hole is drilled at right angles to the strike of the layer.
 * holeDipDeg: degrees below horizontal (90 = vertical).
 * relation: "against" if the hole plunges opposite to the layer's dip direction,
 * "with" if it plunges the same way.
 */
export function trueThickness(
  downholeLength: number,
  holeDipDeg: number,
  bedDipDeg: number,
  relation: "against" | "with",
): number {
  const angleDeg = relation === "against" ? holeDipDeg + bedDipDeg : holeDipDeg - bedDipDeg;
  return downholeLength * Math.abs(Math.sin((angleDeg * Math.PI) / 180));
}

/** Tonnes of rock in a slab. Density in tonnes per cubic metre. */
export function tonnage(input: { areaM2: number; thicknessM: number; density: number }): number {
  return input.areaM2 * input.thicknessM * input.density;
}

export function containedMetal(tonnes: number, gradePpm: number) {
  const grams = tonnes * gradePpm;
  return { grams, tonnesMetal: grams / 1_000_000, troyOz: grams / TROY_OZ_G };
}

export type ClaimFees = { maintenance: number; location: number; processing: number };

/** Federal (BLM) fees only. County recording fees are extra and vary. */
export function claimCosts(claims: number, fees: ClaimFees) {
  const count = Math.max(0, Math.floor(claims));
  return {
    initial: count * (fees.maintenance + fees.location + fees.processing),
    annual: count * fees.maintenance,
  };
}

/** How many full-size lode claims fit in an area, by acreage alone. */
export function maxLodeClaims(acres: number): number {
  return Math.max(0, Math.floor(acres / LODE_CLAIM_ACRES));
}

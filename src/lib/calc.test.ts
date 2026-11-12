import { test } from "node:test";
import assert from "node:assert/strict";
import {
  convertGrade,
  lithiumEquivalents,
  weightedAverage,
  trueThickness,
  tonnage,
  containedMetal,
  claimCosts,
  maxLodeClaims,
  ACRE_M2,
} from "./calc.ts";

const near = (actual: number, expected: number, tol = 1e-6) =>
  assert.ok(Math.abs(actual - expected) <= tol, `${actual} not within ${tol} of ${expected}`);

test("grade: 1 ppm equals 1 g/t and 1000 ppb", () => {
  assert.equal(convertGrade(1, "ppm", "gpt"), 1);
  assert.equal(convertGrade(1, "ppm", "ppb"), 1000);
});

test("grade: 1 percent is 10,000 ppm", () => {
  assert.equal(convertGrade(1, "pct", "ppm"), 10000);
  near(convertGrade(2500, "ppm", "pct"), 0.25);
});

test("grade: 1 troy oz per short ton is 34.2857 g/t", () => {
  near(convertGrade(1, "opt", "gpt"), 34.2857, 1e-4);
  near(convertGrade(34.2857142857, "gpt", "opt"), 1, 1e-9);
});

test("grade: round trip returns the input", () => {
  near(convertGrade(convertGrade(0.137, "opt", "ppb"), "ppb", "opt"), 0.137, 1e-12);
});

test("lithium: 1000 ppm Li is 0.1% Li and about 0.532% LCE", () => {
  const eq = lithiumEquivalents(1000);
  near(eq.liPct, 0.1);
  near(eq.lcePct, 0.5323, 1e-4);
  near(eq.li2oPct, 0.2153, 1e-4);
  near(eq.liohPct, 0.6046, 1e-4);
});

test("weighted average: longer intervals count for more", () => {
  const out = weightedAverage([
    { from: 0, to: 10, grade: 1 },
    { from: 10, to: 40, grade: 3 },
  ]);
  assert.equal(out.length, 40);
  near(out.grade, 2.5);
  near(out.gradeThickness, 100);
});

test("weighted average: ignores zero-length and reversed intervals", () => {
  const out = weightedAverage([
    { from: 5, to: 5, grade: 100 },
    { from: 20, to: 10, grade: 100 },
    { from: 0, to: 10, grade: 2 },
  ]);
  assert.equal(out.length, 10);
  near(out.grade, 2);
});

test("weighted average: empty input gives zeros, not NaN", () => {
  assert.deepEqual(weightedAverage([]), { length: 0, grade: 0, gradeThickness: 0 });
});

test("true thickness: vertical hole through 30 degree beds", () => {
  near(trueThickness(10, 90, 30, "against"), 10 * Math.cos(Math.PI / 6), 1e-9);
  near(trueThickness(10, 90, 30, "with"), 10 * Math.cos(Math.PI / 6), 1e-9);
});

test("true thickness: hole drilled square to the beds gives the full length", () => {
  near(trueThickness(10, 60, 30, "against"), 10, 1e-9);
});

test("true thickness: hole running down the bedding gives zero", () => {
  near(trueThickness(10, 45, 45, "with"), 0, 1e-9);
});

test("tonnage: one acre, 10 m thick, density 2.0", () => {
  near(tonnage({ areaM2: ACRE_M2, thicknessM: 10, density: 2 }), 80937.128448, 1e-6);
});

test("contained metal: 1 Mt at 1 g/t is 32,150.7 troy oz", () => {
  const out = containedMetal(1_000_000, 1);
  near(out.tonnesMetal, 1);
  near(out.troyOz, 32150.7466, 1e-3);
});

test("claims: BLM fees for 10 new lode claims", () => {
  const out = claimCosts(10, { maintenance: 200, location: 49, processing: 25 });
  assert.equal(out.initial, 2740);
  assert.equal(out.annual, 2000);
});

test("claims: a full-size lode claim is 20.66 acres", () => {
  assert.equal(maxLodeClaims(20.66), 0);
  assert.equal(maxLodeClaims(20.67), 1);
  assert.equal(maxLodeClaims(640), 30);
  assert.equal(maxLodeClaims(-5), 0);
});

"use client";

// The calculators on /calculators. All math lives in src/lib/calc.ts (tested).
// Anchor ids are listed in src/content/calculators.ts and linked from the guides.

import { useState } from "react";
import {
  ACRE_M2,
  LODE_CLAIM_ACRES,
  claimCosts,
  containedMetal,
  convertGrade,
  lithiumEquivalents,
  maxLodeClaims,
  tonnage,
  trueThickness,
  weightedAverage,
  type GradeUnit,
} from "@/lib/calc";

const num = (value: string) => {
  const parsed = Number(value.replace(/,/g, ""));
  return value.trim() === "" || !Number.isFinite(parsed) ? NaN : parsed;
};

const fmt = (value: number, digits = 4) =>
  Number.isFinite(value) ? value.toLocaleString("en-US", { maximumSignificantDigits: digits }) : "–";

const whole = (value: number) => (Number.isFinite(value) ? Math.round(value).toLocaleString("en-US") : "–");
const money = (value: number) => (Number.isFinite(value) ? `$${Math.round(value).toLocaleString("en-US")}` : "–");

function Field({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  children?: React.ReactNode;
}) {
  return (
    <label className="field">
      {label}
      {children ?? <input inputMode="decimal" value={value} onChange={(event) => onChange?.(event.target.value)} />}
    </label>
  );
}

function Results({ items }: { items: [string, string][] }) {
  return (
    <dl className="results" aria-live="polite">
      {items.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

const GRADE_UNITS: { id: GradeUnit; label: string }[] = [
  { id: "gpt", label: "g/t (ppm)" },
  { id: "ppb", label: "ppb" },
  { id: "pct", label: "%" },
  { id: "opt", label: "oz/short ton" },
];

function GradeConverter() {
  const [value, setValue] = useState("1");
  const [unit, setUnit] = useState<GradeUnit>("gpt");
  const amount = num(value);
  return (
    <section className="calc" id="grade" aria-labelledby="grade-h">
      <h2 id="grade-h">Grade unit converter</h2>
      <p>Convert an assay between grams per tonne, parts per billion, percent and troy ounces per short ton.</p>
      <div className="calc-grid">
        <Field label="Grade" value={value} onChange={setValue} />
        <Field label="Unit">
          <select value={unit} onChange={(event) => setUnit(event.target.value as GradeUnit)}>
            {GRADE_UNITS.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Results
        items={[
          ["g/t (ppm)", fmt(convertGrade(amount, unit, "gpt"), 6)],
          ["ppb", fmt(convertGrade(amount, unit, "ppb"), 6)],
          ["percent", fmt(convertGrade(amount, unit, "pct"), 6)],
          ["oz per short ton", fmt(convertGrade(amount, unit, "opt"), 6)],
        ]}
      />
      <p className="calc-note">1 troy ounce per short ton = 34.2857 g/t. 1 percent = 10,000 ppm.</p>
    </section>
  );
}

function LithiumConverter() {
  const [ppm, setPpm] = useState("1000");
  const result = lithiumEquivalents(num(ppm));
  return (
    <section className="calc" id="lithium" aria-labelledby="lithium-h">
      <h2 id="lithium-h">Lithium: ppm to LCE</h2>
      <p>Restate a lithium grade as lithium oxide, lithium carbonate equivalent (LCE) and lithium hydroxide monohydrate.</p>
      <div className="calc-grid">
        <Field label="Lithium grade (ppm Li)" value={ppm} onChange={setPpm} />
      </div>
      <Results
        items={[
          ["Li", `${fmt(result.liPct)} %`],
          ["Li2O", `${fmt(result.li2oPct)} %`],
          ["LCE (Li2CO3)", `${fmt(result.lcePct)} %`],
          ["LiOH·H2O", `${fmt(result.liohPct)} %`],
          ["LCE per tonne of rock", `${fmt(result.lcePct * 10)} kg`],
        ]}
      />
      <p className="calc-note">
        Factors from atomic masses: Li2O 2.153, LCE 5.323, LiOH·H2O 6.046. This is contained lithium, not recoverable
        product.
      </p>
    </section>
  );
}

type Row = { from: string; to: string; grade: string };

function CompositeCalculator() {
  const [rows, setRows] = useState<Row[]>([
    { from: "250", to: "255", grade: "0.8" },
    { from: "255", to: "260", grade: "2.4" },
    { from: "260", to: "265", grade: "1.1" },
  ]);
  const update = (index: number, key: keyof Row, value: string) =>
    setRows(rows.map((row, rowIndex) => (rowIndex === index ? { ...row, [key]: value } : row)));
  const result = weightedAverage(rows.map((row) => ({ from: num(row.from), to: num(row.to), grade: num(row.grade) })));
  return (
    <section className="calc" id="composite" aria-labelledby="composite-h">
      <h2 id="composite-h">Drill intercept: weighted average grade</h2>
      <p>Enter sample intervals to get the length-weighted grade of the whole run and its grade-thickness.</p>
      <div className="rows">
        <div className="rows-head" aria-hidden="true">
          <span>From</span>
          <span>To</span>
          <span>Grade</span>
          <span />
        </div>
        {rows.map((row, index) => (
          <div className="row field" key={index}>
            <input aria-label={`Interval ${index + 1} from`} inputMode="decimal" value={row.from} onChange={(event) => update(index, "from", event.target.value)} />
            <input aria-label={`Interval ${index + 1} to`} inputMode="decimal" value={row.to} onChange={(event) => update(index, "to", event.target.value)} />
            <input aria-label={`Interval ${index + 1} grade`} inputMode="decimal" value={row.grade} onChange={(event) => update(index, "grade", event.target.value)} />
            <button type="button" className="icon-btn" aria-label={`Remove interval ${index + 1}`} onClick={() => setRows(rows.filter((_, rowIndex) => rowIndex !== index))}>
              ×
            </button>
          </div>
        ))}
        <button
          type="button"
          className="text-btn"
          onClick={() => {
            const last = rows[rows.length - 1];
            const start = last ? num(last.to) : 0;
            const run = last ? num(last.to) - num(last.from) : 5;
            const from = Number.isFinite(start) ? start : 0;
            const step = Number.isFinite(run) && run > 0 ? run : 5;
            setRows([...rows, { from: String(from), to: String(from + step), grade: "" }]);
          }}
        >
          Add an interval
        </button>
      </div>
      <Results
        items={[
          ["Total length", fmt(result.length)],
          ["Weighted average grade", fmt(result.grade)],
          ["Grade × thickness", fmt(result.gradeThickness)],
        ]}
      />
      <p className="calc-note">
        Use one length unit and one grade unit throughout. Intervals with no length or no grade are left out. Length is
        downhole length, not true thickness.
      </p>
    </section>
  );
}

function TrueThicknessCalculator() {
  const [length, setLength] = useState("100");
  const [holeDip, setHoleDip] = useState("60");
  const [bedDip, setBedDip] = useState("30");
  const [relation, setRelation] = useState<"against" | "with">("against");
  const result = trueThickness(num(length), num(holeDip), num(bedDip), relation);
  const share = (result / num(length)) * 100;
  return (
    <section className="calc" id="true-thickness" aria-labelledby="tt-h">
      <h2 id="tt-h">True thickness from a drill intercept</h2>
      <p>How thick a layer or vein really is, given the length drilled through it and the angles involved.</p>
      <div className="calc-grid">
        <Field label="Downhole length" value={length} onChange={setLength} />
        <Field label="Hole dip (degrees below horizontal)" value={holeDip} onChange={setHoleDip} />
        <Field label="Layer or vein dip (degrees)" value={bedDip} onChange={setBedDip} />
        <Field label="Hole direction">
          <select value={relation} onChange={(event) => setRelation(event.target.value as "against" | "with")}>
            <option value="against">Drilled against the dip</option>
            <option value="with">Drilled the same way the layer dips</option>
          </select>
        </Field>
      </div>
      <Results
        items={[
          ["True thickness", fmt(result)],
          ["Share of drilled length", `${fmt(share, 3)} %`],
        ]}
      />
      <p className="calc-note">
        Assumes the hole is drilled at right angles to the strike of the layer. A vertical hole is 90 degrees. Holes
        drilled at another bearing need a full three-dimensional correction.
      </p>
    </section>
  );
}

const AREA_UNITS = { acres: ACRE_M2, hectares: 10000, "square metres": 1, "square feet": 0.09290304 } as const;
const LENGTH_UNITS = { metres: 1, feet: 0.3048 } as const;

function TonnageCalculator() {
  const [area, setArea] = useState("20");
  const [areaUnit, setAreaUnit] = useState<keyof typeof AREA_UNITS>("acres");
  const [thickness, setThickness] = useState("30");
  const [thicknessUnit, setThicknessUnit] = useState<keyof typeof LENGTH_UNITS>("metres");
  const [density, setDensity] = useState("1.8");
  const [grade, setGrade] = useState("1000");
  const [unit, setUnit] = useState<GradeUnit>("gpt");
  const tonnes = tonnage({
    areaM2: num(area) * AREA_UNITS[areaUnit],
    thicknessM: num(thickness) * LENGTH_UNITS[thicknessUnit],
    density: num(density),
  });
  const metal = containedMetal(tonnes, convertGrade(num(grade), unit, "ppm"));
  return (
    <section className="calc" id="tonnage" aria-labelledby="tonnage-h">
      <h2 id="tonnage-h">Tonnage and contained metal</h2>
      <p>A slab estimate: area times thickness times density, then grade. Useful for a sense of scale.</p>
      <div className="calc-grid">
        <Field label="Area" value={area} onChange={setArea} />
        <Field label="Area unit">
          <select value={areaUnit} onChange={(event) => setAreaUnit(event.target.value as keyof typeof AREA_UNITS)}>
            {Object.keys(AREA_UNITS).map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
        <Field label="Thickness" value={thickness} onChange={setThickness} />
        <Field label="Thickness unit">
          <select value={thicknessUnit} onChange={(event) => setThicknessUnit(event.target.value as keyof typeof LENGTH_UNITS)}>
            {Object.keys(LENGTH_UNITS).map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
        <Field label="Density (tonnes per cubic metre)" value={density} onChange={setDensity} />
        <Field label="Grade" value={grade} onChange={setGrade} />
        <Field label="Grade unit">
          <select value={unit} onChange={(event) => setUnit(event.target.value as GradeUnit)}>
            {GRADE_UNITS.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Results
        items={[
          ["Rock (tonnes)", whole(tonnes)],
          ["Rock (short tons)", whole(tonnes / 0.90718474)],
          ["Contained metal (tonnes)", fmt(metal.tonnesMetal, 5)],
          ["Contained metal (troy oz)", whole(metal.troyOz)],
          ["As LCE, if the metal is lithium (tonnes)", fmt(metal.tonnesMetal * 5.3233, 5)],
        ]}
      />
      <p className="calc-note">
        This is arithmetic, not a mineral resource estimate. A real estimate needs drilling, measured density, a geologic
        model and a Qualified Person. Contained metal is not recoverable metal.
      </p>
    </section>
  );
}

function ClaimCalculator() {
  const [claims, setClaims] = useState("10");
  const [acres, setAcres] = useState("640");
  const [maintenance, setMaintenance] = useState("200");
  const [location, setLocation] = useState("49");
  const [processing, setProcessing] = useState("25");
  const costs = claimCosts(num(claims), {
    maintenance: num(maintenance),
    location: num(location),
    processing: num(processing),
  });
  return (
    <section className="calc" id="claims" aria-labelledby="claims-h">
      <h2 id="claims-h">Lode claim fees (BLM)</h2>
      <p>Federal fees to record new lode claims and to hold them each year, plus how many full-size claims fit an area.</p>
      <div className="calc-grid">
        <Field label="Number of lode claims" value={claims} onChange={setClaims} />
        <Field label="Maintenance fee per claim ($)" value={maintenance} onChange={setMaintenance} />
        <Field label="Location fee per claim ($)" value={location} onChange={setLocation} />
        <Field label="Processing fee per claim ($)" value={processing} onChange={setProcessing} />
      </div>
      <Results
        items={[
          ["BLM fees to record", money(costs.initial)],
          ["BLM maintenance each year after", money(costs.annual)],
        ]}
      />
      <div className="calc-grid">
        <Field label="Area to cover (acres)" value={acres} onChange={setAcres} />
      </div>
      <Results
        items={[
          ["Full-size lode claims that fit, by area", whole(maxLodeClaims(num(acres)))],
          ["Acres per full-size claim", fmt(LODE_CLAIM_ACRES, 4)],
        ]}
      />
      <p className="calc-note">
        Default fees are the BLM schedule for claims located on or after September 1, 2026: $200 maintenance, $49
        location, $25 processing. County recording and map fees are extra and vary by county. The count by area ignores
        claim layout, terrain and existing claims. Check the BLM fee page and the county recorder before filing.
      </p>
    </section>
  );
}

export function Calculators() {
  return (
    <>
      <GradeConverter />
      <LithiumConverter />
      <CompositeCalculator />
      <TrueThicknessCalculator />
      <TonnageCalculator />
      <ClaimCalculator />
    </>
  );
}

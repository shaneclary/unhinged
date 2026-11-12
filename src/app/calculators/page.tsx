import Link from "next/link";
import { routes } from "@/content/site";
import { calculatorIndex } from "@/content/calculators";
import { PageHead, WorkWith, homeCrumb } from "@/components/Bits";
import { Calculators } from "@/components/Calculators";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

const trail = [homeCrumb, { name: "Calculators", path: routes.calculators }];

export const metadata = pageMeta({
  title: "Exploration Geology Calculators",
  description:
    "Free calculators for mineral exploration: grade unit conversion, lithium ppm to LCE, weighted average intercepts, true thickness, tonnage and BLM claim fees.",
  path: routes.calculators,
});

export default function CalculatorsPage() {
  return (
    <>
      <PageHead
        trail={trail}
        title="Calculators"
        lede="Six working tools for exploration numbers. Each one shows its assumptions. None of them replaces a geologist."
      />
      <section className="section-tight">
        <div className="wrap">
          <ul className="calc-index">
            {calculatorIndex.map((entry) => (
              <li key={entry.id}>
                <a href={`#${entry.id}`}>{entry.label}</a>
              </li>
            ))}
          </ul>
          <Calculators />
          <p className="ui soft" style={{ marginTop: "2rem", maxWidth: "40rem" }}>
            New to the terms? See the <Link href={`${routes.learn}/reading-assay-results`}>guide to reading assay results</Link>{" "}
            and the <Link href={routes.glossary}>glossary</Link>.
          </p>
        </div>
      </section>
      <WorkWith compact />
      <JsonLd data={breadcrumbLd(trail)} />
    </>
  );
}

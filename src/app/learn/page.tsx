import Link from "next/link";
import { routes, site } from "@/content/site";
import { topicGroups, topics } from "@/content/learn";
import { LEVELS } from "@/content/learn/types";
import { PageHead, WorkWith, homeCrumb } from "@/components/Bits";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

const trail = [homeCrumb, { name: "Learn", path: routes.learn }];

export const metadata = pageMeta({
  title: "Learn Exploration Geology",
  description:
    "Plain-language and technical guides to mineral exploration in Nevada: claims, permitting, drilling, assays, resources, lithium clay, epithermal gold and placers.",
  path: routes.learn,
  index: topics.some((topic) => topic.reviewed),
});

export default function LearnPage() {
  return (
    <>
      <PageHead
        trail={trail}
        title="Learn"
        lede="Exploration geology, explained at three depths. Read the plain version, the working version, or the full technical one. Same facts each time."
      />

      <section className="section-tight section-sheet">
        <div className="wrap">
          <h2 style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.1rem)", marginBottom: "1.25rem" }}>Pick how deep to go</h2>
          <div className="depth-tabs" style={{ maxWidth: "46rem" }}>
            {LEVELS.map((level) => (
              <div key={level.id} className="depth-tab" style={{ cursor: "default" }}>
                <span className={`pat pat-${level.id}`} aria-hidden="true" />
                <b>{level.name}</b>
                <small>
                  {level.plain}. {level.blurb}
                </small>
              </div>
            ))}
          </div>
          <p className="ui soft" style={{ marginTop: "1rem", maxWidth: "40rem" }}>
            Float is loose rock on the surface. Outcrop is the solid rock it came from. Core is what the drill brings up.
            Each guide lets you move between them at any point.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {topicGroups.map((group) => (
            <div className="stage" key={group.stage}>
              <div>
                <h2 className="stage-name">{group.stage}</h2>
                <p>{group.blurb}</p>
              </div>
              <ul className="guide-list">
                {group.topics.map((topic) => (
                  <li key={topic.slug}>
                    <Link href={`${routes.learn}/${topic.slug}`}>{topic.title}</Link>
                    <p>{topic.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="btn-row" style={{ marginTop: "2rem" }}>
            <Link className="btn btn-line" href={routes.glossary}>
              Glossary
            </Link>
            <Link className="btn btn-line" href={routes.calculators}>
              Calculators
            </Link>
          </div>
        </div>
      </section>

      <WorkWith compact />
      <JsonLd data={breadcrumbLd(trail)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Exploration geology guides",
          itemListElement: topics.map((topic, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: topic.title,
            url: `${site.url}${routes.learn}/${topic.slug}`,
          })),
        }}
      />
    </>
  );
}

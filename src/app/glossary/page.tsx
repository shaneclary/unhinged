import Link from "next/link";
import { routes } from "@/content/site";
import { glossary, glossaryReviewed } from "@/content/glossary";
import { topics } from "@/content/learn";
import { PageHead, WorkWith, homeCrumb } from "@/components/Bits";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd, glossaryLd, pageMeta } from "@/lib/seo";

const trail = [homeCrumb, { name: "Learn", path: routes.learn }, { name: "Glossary", path: routes.glossary }];

export const metadata = pageMeta({
  title: "Exploration Geology Glossary",
  description:
    "Mining and exploration terms defined twice: once in plain language, once technically. Assays, claims, drilling, resources, lithium clay, epithermal gold.",
  path: routes.glossary,
  index: glossaryReviewed,
});

export default function GlossaryPage() {
  const letters = [...new Set(glossary.map((entry) => entry.term[0].toUpperCase()))];
  return (
    <>
      <PageHead
        trail={trail}
        title="Glossary"
        lede={`${glossary.length} exploration terms. Each one is defined twice: once plainly, once technically.`}
      />
      <section className="section-tight">
        <div className="wrap">
          <nav aria-label="Jump to a letter">
            <ul className="az">
              {letters.map((letter) => (
                <li key={letter}>
                  <a href={`#letter-${letter}`}>{letter}</a>
                </li>
              ))}
            </ul>
          </nav>
          {letters.map((letter) => (
            <section key={letter} aria-labelledby={`letter-${letter}`}>
              <h2 className="gloss-letter" id={`letter-${letter}`}>
                {letter}
              </h2>
              {glossary
                .filter((entry) => entry.term[0].toUpperCase() === letter)
                .map((entry) => {
                  const usedIn = topics.filter((topic) => topic.terms.includes(entry.id));
                  return (
                    <article className="gloss-entry" id={entry.id} key={entry.id}>
                      <div>
                        <h3>{entry.term}</h3>
                        {entry.also && <p className="gloss-also">Also: {entry.also.join(", ")}</p>}
                      </div>
                      <div className="gloss-defs">
                        <p>{entry.plain}</p>
                        <p>
                          <b>Technical</b>
                          {entry.technical}
                        </p>
                        {usedIn.length > 0 && (
                          <p className="legend-links" style={{ marginTop: "0.6rem" }}>
                            <span>Explained in:</span>
                            {usedIn.map((topic) => (
                              <Link key={topic.slug} href={`${routes.learn}/${topic.slug}`}>
                                {topic.title}
                              </Link>
                            ))}
                          </p>
                        )}
                      </div>
                    </article>
                  );
                })}
            </section>
          ))}
        </div>
      </section>
      <WorkWith compact />
      <JsonLd data={glossaryLd(glossary, routes.glossary)} />
      <JsonLd data={breadcrumbLd(trail)} />
    </>
  );
}

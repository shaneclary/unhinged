import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { routes, site } from "@/content/site";
import { topicBySlug, topicGroups, topics } from "@/content/learn";
import { LEVELS, plain } from "@/content/learn/types";
import { termById, type Term } from "@/content/glossary";
import { serviceById } from "@/content/services";
import { calculatorIndex } from "@/content/calculators";
import { Crumbs, WorkWith, homeCrumb } from "@/components/Bits";
import { Blocks } from "@/components/Rich";
import { Depth, depthBootScript } from "@/components/Depth";
import { Swatch } from "@/components/Swatch";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd, faqLd, guideLd, pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = topicBySlug(slug);
  if (!topic) return {};
  return pageMeta({
    title: topic.title,
    description: topic.description,
    path: `${routes.learn}/${topic.slug}`,
    // A guide is only offered to search engines after Liam has reviewed it.
    index: topic.reviewed,
  });
}

const updatedLabel = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const topic = topicBySlug(slug);
  if (!topic) notFound();

  const path = `${routes.learn}/${topic.slug}`;
  const trail = [homeCrumb, { name: "Learn", path: routes.learn }, { name: topic.title, path }];
  const terms = topic.terms.map(termById).filter((term): term is Term => Boolean(term));
  const group = topicGroups.find((entry) => entry.topics.includes(topic));
  const related = (group?.topics ?? []).filter((entry) => entry !== topic);
  const calculators = calculatorIndex.filter((entry) => topic.calculators?.includes(entry.id));

  return (
    <>
      <div className="page-head contours">
        <div className="wrap">
          <Crumbs trail={trail} />
          {!topic.reviewed && (
            <p className="draft">
              <strong>Draft.</strong> Waiting on technical review by {site.principal}. Hidden from search engines until
              approved.
            </p>
          )}
          <h1>{topic.title}</h1>
          <div className="answer">
            <strong>The short answer</strong>
            <p>{plain(topic.answer)}</p>
          </div>
          <div className="tag-row">
            {topic.services.map((id) => {
              const service = serviceById(id);
              return (
                <Link key={id} className="tag" href={`${routes.services}#${id}`}>
                  <Swatch service={service} small />
                  {service.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="guide">
          <script dangerouslySetInnerHTML={{ __html: depthBootScript }} />
          <Depth />
          <article>
            {LEVELS.map((level, index) => (
              <section className="level" id={level.id} data-level={level.id} key={level.id} aria-labelledby={`${level.id}-h`}>
                <div className="level-title">
                  <h2 id={`${level.id}-h`}>{level.name}</h2>
                  <span>
                    {level.plain}. {level.blurb}
                  </span>
                </div>
                <Blocks blocks={topic[level.id]} />
                <div className="level-nav">
                  {index < LEVELS.length - 1 && (
                    <a className="btn" href={`#${LEVELS[index + 1].id}`}>
                      Go deeper: {LEVELS[index + 1].name}
                    </a>
                  )}
                  {index > 0 && (
                    <a className="btn btn-line" href={`#${LEVELS[index - 1].id}`}>
                      Back up to {LEVELS[index - 1].name}
                    </a>
                  )}
                  {index === 2 && (
                    <a className="btn btn-line" href="#float">
                      Back to the basics
                    </a>
                  )}
                </div>
              </section>
            ))}

            <section className="aside-block" id="questions" aria-labelledby="questions-h">
              <h2 id="questions-h">Common questions</h2>
              {topic.faqs.map((entry) => (
                <div className="qa" key={entry.q}>
                  <h3>{entry.q}</h3>
                  <p>{entry.a}</p>
                </div>
              ))}
            </section>

            {terms.length > 0 && (
              <section className="aside-block" id="terms" aria-labelledby="terms-h">
                <h2 id="terms-h">Terms used here</h2>
                <dl className="term-list">
                  {terms.map((term) => (
                    <div key={term.id}>
                      <dt>
                        <Link href={`${routes.glossary}#${term.id}`}>{term.term}</Link>
                      </dt>
                      <dd>{term.plain}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            {(calculators.length > 0 || related.length > 0) && (
              <section className="aside-block" aria-labelledby="next-h">
                <h2 id="next-h">Keep going</h2>
                <ul className="guide-list" style={{ marginTop: "1rem" }}>
                  {related.map((entry) => (
                    <li key={entry.slug}>
                      <Link href={`${routes.learn}/${entry.slug}`}>{entry.title}</Link>
                    </li>
                  ))}
                  {calculators.map((entry) => (
                    <li key={entry.id}>
                      <Link href={`${routes.calculators}#${entry.id}`}>Calculator: {entry.label}</Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section className="aside-block" id="sources" aria-labelledby="sources-h">
              <h2 id="sources-h">Sources</h2>
              {topic.sources.length > 0 ? (
                <ol className="source-list">
                  {topic.sources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url} rel="noopener">
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="ui soft" style={{ marginTop: "1rem" }}>
                  This guide describes standard field practice. Published references will be added on review.
                </p>
              )}
              <p className="ui soft" style={{ marginTop: "1rem" }}>
                Last updated {updatedLabel(topic.updated)}.
              </p>
            </section>
          </article>
        </div>
      </div>

      <WorkWith compact />
      <JsonLd data={guideLd(topic, path, terms)} />
      <JsonLd data={faqLd(topic.faqs)} />
      <JsonLd data={breadcrumbLd(trail)} />
    </>
  );
}

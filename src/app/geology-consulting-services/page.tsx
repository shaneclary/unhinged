import Link from "next/link";
import { routes } from "@/content/site";
import { services } from "@/content/services";
import { topicBySlug } from "@/content/learn";
import { home } from "@/content/legacy/home";
import { PageHead, WorkWith, homeCrumb } from "@/components/Bits";
import { Photo } from "@/components/Photo";
import { Swatch } from "@/components/Swatch";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd, pageMeta, servicesLd } from "@/lib/seo";

const trail = [homeCrumb, { name: "Services", path: routes.services }];

export const metadata = pageMeta({
  title: "Geology Consulting Services",
  description:
    "Mineral property evaluation, drill program planning and support, mapping and sampling, exploration strategy, geological modeling and field logistics in Nevada and the western US.",
  path: routes.services,
});

export default function ServicesPage() {
  return (
    <>
      <PageHead trail={trail} title="Services" lede={home.hero.body.text} />

      <section className="section section-sheet">
        <div className="wrap">
          <ul className="legend">
            {services.map((service) => (
              <li className="legend-row" key={service.id} id={service.id} style={{ scrollMarginTop: "5rem" }}>
                <Swatch service={service} />
                <div className="legend-body">
                  <h2 style={{ fontSize: "clamp(1.7rem, 3.4vw, 2.3rem)" }}>{service.name}</h2>
                  <p>{service.summary}</p>
                  <p className="legend-links">
                    <span className="soft">Related guides:</span>
                    {service.learn.map((slug) => {
                      const topic = topicBySlug(slug);
                      return topic ? (
                        <Link key={slug} href={`${routes.learn}/${slug}`}>
                          {topic.title}
                        </Link>
                      ) : null;
                    })}
                  </p>
                </div>
                <Photo src={service.image} shape="thumb" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section on-dark">
        <div className="wrap">
          <p className="kicker">{home.model.label.text}</p>
          <h2 style={{ maxWidth: "20ch" }}>{home.model.lede.text}</h2>
          <ol className="cycle">
            {home.model.cycle.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <WorkWith />
      <JsonLd data={servicesLd(services, routes.services)} />
      <JsonLd data={breadcrumbLd(trail)} />
    </>
  );
}

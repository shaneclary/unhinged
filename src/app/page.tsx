import type { Metadata } from "next";
import Link from "next/link";
import { home } from "@/content/legacy/home";
import { routes, site } from "@/content/site";
import { services } from "@/content/services";
import { topicGroups } from "@/content/learn";
import { Photo } from "@/components/Photo";
import { StripLog } from "@/components/StripLog";
import { Swatch } from "@/components/Swatch";
import { WorkWith } from "@/components/Bits";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, servicesLd } from "@/lib/seo";

const title = `${home.hero.heading.text} | ${site.name}`;

export const metadata: Metadata = {
  ...pageMeta({ title, description: site.description, path: routes.home }),
  title: { absolute: title },
};

export default function HomePage() {
  return (
    <>
      <section className="hero contours">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <p className="hero-tagline">{home.hero.tagline.text}</p>
              <h1>{home.hero.heading.text}</h1>
              <p className="lede">{home.hero.body.text}</p>
              <div className="btn-row">
                <Link className="btn" href={routes.contact}>
                  {home.work.cta}
                </Link>
                <Link className="btn btn-line" href={routes.services}>
                  {home.work.servicesCta}
                </Link>
              </div>
            </div>
            <StripLog steps={home.model.cycle} />
          </div>
          <div className="photo-band">
            <Photo src={home.hero.image} shape="wide" eager />
          </div>
        </div>
      </section>

      <section className="section section-sheet" aria-labelledby="services">
        <div className="wrap">
          <div className="section-head">
            <h2 id="services">Services</h2>
          </div>
          <ul className="legend">
            {services.map((service) => (
              <li className="legend-row" key={service.id}>
                <Swatch service={service} />
                <div className="legend-body">
                  <h3>
                    <Link href={`${routes.services}#${service.id}`}>{service.name}</Link>
                  </h3>
                  <p>{service.summary}</p>
                </div>
                <Photo src={service.image} shape="thumb" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section on-dark" aria-labelledby="model">
        <div className="wrap">
          <div className="split">
            <div>
              <p className="kicker">{home.model.label.text}</p>
              <h2 id="model">{home.model.heading.text}</h2>
              <p className="lede" style={{ marginTop: "1.25rem" }}>
                {home.model.lede.text}
              </p>
              <p>{home.model.body.text}</p>
              <p className="cycle-line">{home.model.cycle.join(" ")}</p>
            </div>
            <Photo src={home.model.image} alt={home.model.imageAlt} shape="land" />
          </div>
        </div>
      </section>

      <section className="section-tight" aria-labelledby="partner">
        <div className="wrap">
          <h2 id="partner" style={{ maxWidth: "22ch" }}>
            {home.partner.heading.text}
          </h2>
          <div className="btn-row" style={{ marginTop: "1.5rem" }}>
            <Link className="btn btn-line" href={routes.news}>
              {home.partner.buttons[0]}
            </Link>
            <Link className="btn btn-line" href={routes.resources}>
              {home.partner.buttons[1]}
            </Link>
            <Link className="btn btn-line" href={routes.articles}>
              {home.partner.buttons[2]}
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-sheet" aria-labelledby="why">
        <div className="wrap">
          <div className="split">
            <div>
              <div className="section-head">
                <h2 id="why">{home.why.heading.text}</h2>
              </div>
              <ul className="points">
                {home.why.points.map((point) => (
                  <li key={point.title}>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Photo src={home.why.image} shape="land" />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="featured">
        <div className="wrap">
          <div className="split split-even">
            <div>
              <p className="kicker">{home.featured.label.text}</p>
              <h2 id="featured">{home.featured.heading.text}</h2>
              <p className="soft ui" style={{ marginTop: "0.6rem" }}>
                {home.featured.subtitle.text}
              </p>
              <p style={{ marginTop: "1.1rem" }}>{home.featured.body.text}</p>
              <div className="btn-row">
                <a className="btn btn-line" href={home.featured.link.href} rel="noopener">
                  {home.featured.link.label}
                </a>
              </div>
            </div>
            <div style={{ display: "grid", gap: "1rem" }}>
              <Photo src={home.featured.image} alt={home.featured.imageAlt} shape="map" />
              <Photo src={home.featured.hillshade} shape="wide" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-sheet" aria-labelledby="learn">
        <div className="wrap">
          <div className="section-head">
            <h2 id="learn">Learn</h2>
          </div>
          {topicGroups.map((group) => (
            <div className="stage" key={group.stage}>
              <div>
                <h3 className="stage-name">{group.stage}</h3>
              </div>
              <ul className="guide-list">
                {group.topics.map((topic) => (
                  <li key={topic.slug}>
                    <Link href={`${routes.learn}/${topic.slug}`}>{topic.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="btn-row" style={{ marginTop: "1.5rem" }}>
            <Link className="btn btn-line" href={routes.learn}>
              All guides
            </Link>
            <Link className="btn btn-line" href={routes.glossary}>
              Glossary
            </Link>
            <Link className="btn btn-line" href={routes.calculators}>
              Calculators
            </Link>
          </div>
        </div>
      </section>

      <WorkWith />

      <section className="section-tight" aria-labelledby="office">
        <div className="wrap">
          <div className="split split-even">
            <div>
              <h2 id="office">Main office</h2>
              <address className="lede" style={{ fontStyle: "normal", marginTop: "0.9rem" }}>
                {site.legalName}
                <br />
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </address>
              <div className="btn-row" style={{ marginTop: "1.25rem" }}>
                <Link className="btn" href={routes.contact}>
                  Contact
                </Link>
              </div>
            </div>
            <Photo src={home.work.image} shape="land" />
          </div>
        </div>
      </section>

      <JsonLd data={servicesLd(services, routes.services)} />
    </>
  );
}


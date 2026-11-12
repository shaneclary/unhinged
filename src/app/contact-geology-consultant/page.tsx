import { routes, site } from "@/content/site";
import { home } from "@/content/legacy/home";
import { PageHead, homeCrumb } from "@/components/Bits";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

const trail = [homeCrumb, { name: "Contact", path: routes.contact }];

export const metadata = pageMeta({
  title: "Contact a Geology Consultant",
  description:
    "Request a consultation with Unhinged Geology in Tonopah, Nevada: property evaluations, target generation, drill program support, modeling, mapping and sampling.",
  path: routes.contact,
});

export default function ContactPage() {
  return (
    <>
      <PageHead trail={trail} title="Contact" lede={home.work.body.text} />
      <section className="section section-sheet">
        <div className="wrap">
          <div className="split">
            <div>
              <h2 style={{ marginBottom: "1.5rem" }}>{home.work.cta}</h2>
              <ContactForm />
            </div>
            <div>
              <h2>Main office</h2>
              <address className="lede" style={{ fontStyle: "normal", marginTop: "0.9rem" }}>
                {site.legalName}
                <br />
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </address>
              <ul className="ui" style={{ listStyle: "none", padding: 0, marginTop: "1.25rem" }}>
                {site.social.map((entry) => (
                  <li key={entry.url} style={{ marginBottom: "0.4rem" }}>
                    <a href={entry.url} rel="noopener">
                      {entry.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <JsonLd data={breadcrumbLd(trail)} />
    </>
  );
}

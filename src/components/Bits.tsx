import Link from "next/link";
import { routes, site } from "@/content/site";
import { home } from "@/content/legacy/home";

export function Crumbs({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="crumbs">
        {trail.map((entry, index) => (
          <li key={entry.path}>
            {index < trail.length - 1 ? <Link href={entry.path}>{entry.name}</Link> : <span aria-current="page">{entry.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** The closing band. Heading and button wording are from the current site. */
export function WorkWith({ compact = false }: { compact?: boolean }) {
  return (
    <section className="section on-dark contours" aria-labelledby="work-with">
      <div className="wrap">
        <h2 id="work-with">{home.work.heading.text}</h2>
        {!compact && <p className="lede measure" style={{ marginTop: "1.1rem" }}>{home.work.body.text}</p>}
        <div className="btn-row" style={{ marginTop: "1.75rem" }}>
          <Link className="btn" href={routes.contact}>
            {home.work.cta}
          </Link>
          <Link className="btn btn-line" href={routes.services}>
            {home.work.servicesCta}
          </Link>
        </div>
      </div>
    </section>
  );
}

/**
 * Shown on pages whose text has not been brought over from the current site yet.
 * These pages stay out of search engines and the sitemap until the text is in.
 */
export function Pending({ slug, what }: { slug: string; what: string }) {
  return (
    <div className="pending">
      <p>
        <strong>This page is waiting on its text.</strong> {what}
      </p>
      <p>
        The page keeps its current address so nothing breaks at launch. Until the text is in, it is hidden from search
        engines.
      </p>
      <p>
        <a href={`https://www.unhingedgeology.com${slug}`} rel="noopener">
          See this page on the current site
        </a>
      </p>
    </div>
  );
}

export function PageHead({
  trail,
  title,
  lede,
  children,
}: {
  trail: { name: string; path: string }[];
  title: string;
  lede?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="page-head contours">
      <div className="wrap">
        <Crumbs trail={trail} />
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        {children}
      </div>
    </div>
  );
}

export const homeCrumb = { name: site.name, path: routes.home };

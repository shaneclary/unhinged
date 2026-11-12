import Link from "next/link";
import { PageHead, Pending, WorkWith, homeCrumb } from "@/components/Bits";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

/**
 * A page from the current site that has its address and place in the menus
 * but not yet its text. Hidden from search engines until imported
 * (see src/content/legacy/status.ts).
 */
export function stubMeta(title: string, path: string) {
  return pageMeta({ title, description: `${title}. Unhinged Geology, Tonopah, Nevada.`, path, index: false });
}

export function LegacyStub({
  title,
  path,
  what,
  links,
}: {
  title: string;
  path: string;
  what: string;
  links?: { label: string; href: string }[];
}) {
  const trail = [homeCrumb, { name: title, path }];
  return (
    <>
      <PageHead trail={trail} title={title} />
      <section className="section-tight">
        <div className="wrap">
          <Pending slug={path} what={what} />
          {links && links.length > 0 && (
            <ul className="guide-list" style={{ marginTop: "2rem", maxWidth: "44rem" }}>
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <WorkWith compact />
      <JsonLd data={breadcrumbLd(trail)} />
    </>
  );
}

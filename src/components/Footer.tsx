import Link from "next/link";
import { footerNav, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer on-dark contours">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <p className="footer-brand">UNHINGED GEOLOGY</p>
            <address>
              {site.legalName}
              <br />
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.postalCode}
            </address>
            <ul style={{ marginTop: "0.75rem" }}>
              {site.social.map((entry) => (
                <li key={entry.url}>
                  <a href={entry.url} rel="noopener">
                    {entry.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {footerNav.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <h2>{group.heading}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <p className="footer-base">
          © {new Date().getFullYear()} {site.legalName}. Guides and calculators on this site are general information, not
          professional, legal or investment advice.
        </p>
      </div>
    </footer>
  );
}

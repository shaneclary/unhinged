import Link from "next/link";
import { nav, site, routes } from "@/content/site";

function NavList() {
  return (
    <ul className="nav-list">
      {nav.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link href={routes.home} className="brand" aria-label={`${site.name} home`}>
          <span className="brand-mark" aria-hidden="true" />
          UNHINGED GEOLOGY
        </Link>
        <nav className="nav-desktop" aria-label="Main">
          <NavList />
        </nav>
        <details className="nav-mobile">
          <summary>Menu</summary>
          <nav aria-label="Main">
            <NavList />
          </nav>
        </details>
      </div>
    </header>
  );
}

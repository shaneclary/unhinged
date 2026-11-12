import { routes } from "@/content/site";
import { LegacyStub, stubMeta } from "@/components/LegacyStub";

export const metadata = stubMeta("Exploration & Field Resources", routes.resources);

export default function Page() {
  return (
    <LegacyStub
      title="Exploration & Field Resources"
      path={routes.resources}
      what="The Exploration & Field Resources page will be brought over from the current site. The new learning section is linked below."
      links={[{ label: "Learn: exploration guides at three depths", href: routes.learn }, { label: "Glossary", href: routes.glossary }, { label: "Calculators", href: routes.calculators }]}
    />
  );
}

import { routes } from "@/content/site";
import { LegacyStub, stubMeta } from "@/components/LegacyStub";

export const metadata = stubMeta("Articles", routes.articles);

export default function Page() {
  return (
    <LegacyStub
      title="Articles"
      path={routes.articles}
      what="Liam's articles will be brought over one by one from the current site, each at its current address."
      links={[]}
    />
  );
}

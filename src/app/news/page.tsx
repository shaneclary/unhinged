import { routes } from "@/content/site";
import { LegacyStub, stubMeta } from "@/components/LegacyStub";

export const metadata = stubMeta("News", routes.news);

export default function Page() {
  return (
    <LegacyStub
      title="News"
      path={routes.news}
      what="News posts will be brought over one by one from the current site, each at its current address."
      links={[]}
    />
  );
}

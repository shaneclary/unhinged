import { routes } from "@/content/site";
import { LegacyStub, stubMeta } from "@/components/LegacyStub";

export const metadata = stubMeta("About Unhinged Geology", routes.about);

export default function Page() {
  return (
    <LegacyStub
      title="About Unhinged Geology"
      path={routes.about}
      what="Liam's About page will be brought over word for word from the current site."
      links={[]}
    />
  );
}

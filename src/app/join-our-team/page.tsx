import { routes } from "@/content/site";
import { LegacyStub, stubMeta } from "@/components/LegacyStub";

export const metadata = stubMeta("Join Our Team", routes.team);

export default function Page() {
  return (
    <LegacyStub
      title="Join Our Team"
      path={routes.team}
      what="The Join Our Team page will be brought over word for word from the current site."
      links={[]}
    />
  );
}

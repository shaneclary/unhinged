import { routes } from "@/content/site";
import { LegacyStub, stubMeta } from "@/components/LegacyStub";

export const metadata = stubMeta("FAQ", routes.faq);

export default function Page() {
  return (
    <LegacyStub
      title="FAQ"
      path={routes.faq}
      what="The questions and answers on the current FAQ page will be brought over word for word. Each guide in Learn also ends with common questions."
      links={[{ label: "Learn", href: routes.learn }]}
    />
  );
}

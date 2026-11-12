import { routes } from "@/content/site";
import { LegacyStub, stubMeta } from "@/components/LegacyStub";

export const metadata = stubMeta("Nevada Exploration", routes.nevada);

export default function Page() {
  return (
    <LegacyStub
      title="Nevada Exploration"
      path={routes.nevada}
      what="The Nevada Exploration page will be brought over word for word from the current site. The guides below cover Nevada ground in the meantime."
      links={[{ label: "Lithium claystone deposits in Nevada", href: `${routes.learn}/lithium-claystone-nevada` }, { label: "Epithermal gold and silver systems", href: `${routes.learn}/epithermal-gold-silver` }, { label: "Mining claims in Nevada", href: `${routes.learn}/nevada-mining-claims` }, { label: "Permitting mineral exploration in Nevada", href: `${routes.learn}/exploration-permitting-nevada` }]}
    />
  );
}

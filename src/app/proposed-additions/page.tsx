import { routes } from "@/content/site";
import { builtForReview, ideas, questions, type Proposal } from "@/content/proposed";
import { legacyPages } from "@/content/legacy/status";
import { PageHead, homeCrumb } from "@/components/Bits";
import { pageMeta } from "@/lib/seo";

const trail = [homeCrumb, { name: "Proposed additions", path: routes.proposed }];

export const metadata = pageMeta({
  title: "Proposed additions",
  description: "Everything in this draft that is not Liam's existing language, for his review.",
  path: routes.proposed,
  index: false,
});

function List({ items }: { items: Proposal[] }) {
  return (
    <>
      {items.map((item) => (
        <div className="proposal" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.what}</p>
          <p className="ui">
            <strong>Why:</strong> {item.why}
          </p>
          <p className="ui">
            <strong>Needs:</strong> {item.needs}
          </p>
        </div>
      ))}
    </>
  );
}

export default function ProposedPage() {
  return (
    <>
      <PageHead
        trail={trail}
        title="Proposed additions"
        lede="For Liam. This page lists everything in the draft that is new, so it stays separate from his existing language. It is never shown to search engines and is not in the menus."
      />
      <section className="section-tight">
        <div className="wrap">
          <h2>Built in this draft, waiting on a yes</h2>
          <List items={builtForReview} />

          <h2 style={{ marginTop: "3rem" }}>Ideas, not built</h2>
          <List items={ideas} />

          <h2 style={{ marginTop: "3rem" }}>Questions</h2>
          <ol className="prose" style={{ maxWidth: "44rem", marginTop: "1rem", paddingLeft: "1.3em" }}>
            {questions.map((question) => (
              <li key={question} style={{ marginBottom: "0.6rem" }}>
                {question}
              </li>
            ))}
          </ol>

          <h2 style={{ marginTop: "3rem" }}>Where each current page stands</h2>
          <div className="table-scroll" style={{ maxWidth: "52rem" }}>
            <table>
              <caption>Pages carried over from the current site</caption>
              <thead>
                <tr>
                  <th scope="col">Page</th>
                  <th scope="col">Text in?</th>
                  <th scope="col">Note</th>
                </tr>
              </thead>
              <tbody>
                {legacyPages.map((page) => (
                  <tr key={page.path}>
                    <td>
                      <a href={page.path}>{page.label}</a>
                    </td>
                    <td>{page.imported ? "Yes" : "Not yet"}</td>
                    <td>{page.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { Fragment } from "react";
import type { Block } from "@/content/learn/types";
import { termById } from "@/content/glossary";
import { routes } from "@/content/site";

/** Inline text with glossary links: [[term-id]] or [[term-id|words to show]]. */
export function Inline({ text }: { text: string }) {
  const parts = text.split(/(\[\[[^\]]+\]\])/g);
  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/^\[\[([^\]|]+)(?:\|([^\]]+))?\]\]$/);
        if (!match) return <Fragment key={index}>{part}</Fragment>;
        const term = termById(match[1]);
        const label = match[2] ?? term?.term ?? match[1];
        if (!term) return <Fragment key={index}>{label}</Fragment>;
        return (
          <Link key={index} className="term" href={`${routes.glossary}#${term.id}`} title={term.plain}>
            {label}
          </Link>
        );
      })}
    </>
  );
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose">
      {blocks.map((block, index) => {
        if ("p" in block) {
          return (
            <p key={index}>
              <Inline text={block.p} />
            </p>
          );
        }
        if ("h" in block) return <h3 key={index}>{block.h}</h3>;
        if ("note" in block) {
          return (
            <p key={index} className="note">
              <Inline text={block.note} />
            </p>
          );
        }
        if ("ul" in block || "ol" in block) {
          const items = "ul" in block ? block.ul : block.ol;
          const List = "ul" in block ? "ul" : "ol";
          return (
            <List key={index}>
              {items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Inline text={item} />
                </li>
              ))}
            </List>
          );
        }
        return (
          <div key={index} className="table-scroll" tabIndex={0} role="region" aria-label={block.table.caption}>
            <table>
              <caption>{block.table.caption}</caption>
              <thead>
                <tr>
                  {block.table.head.map((cell, cellIndex) => (
                    <th key={cellIndex} scope="col">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.table.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>
                        <Inline text={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

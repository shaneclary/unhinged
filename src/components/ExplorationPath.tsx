"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import type { ServiceId } from "@/content/services";
import { routes } from "@/content/site";
import { FieldIcon } from "./FieldIcon";

export type ExplorationStage = {
  stage: string;
  blurb: string;
  services: readonly { id: ServiceId; name: string }[];
  guides: readonly { slug: string; title: string }[];
};

/** The firm's existing four-step cycle, made explorable without auto-playing motion. */
export function ExplorationPath({ stages }: { stages: readonly ExplorationStage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [enhanced, setEnhanced] = useState(false);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);

  // The complete four-stage reference remains available before hydration.
  useEffect(() => {
    setEnhanced(true);
  }, []);

  function move(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number | null = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % stages.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + stages.length) % stages.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = stages.length - 1;
    if (next === null) return;

    event.preventDefault();
    setActiveIndex(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="exploration-path">
      <div className="path-tabs" role="tablist" aria-label="Explore the exploration cycle">
        {stages.map((stage, index) => {
          const selected = activeIndex === index;
          return (
            <button
              key={stage.stage}
              ref={(element) => {
                tabs.current[index] = element;
              }}
              id={`path-tab-${index}`}
              className="path-tab"
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`path-panel-${index}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => move(event, index)}
            >
              <span className="path-tab-number field-badge" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <span>{stage.stage}</span>
            </button>
          );
        })}
      </div>

      {stages.map((stage, index) => {
        const active = index === activeIndex;
        return (
          <section
            key={stage.stage}
            id={`path-panel-${index}`}
            className="path-panel"
            role="tabpanel"
            aria-labelledby={`path-tab-${index}`}
            tabIndex={0}
            hidden={enhanced && !active}
          >
            <div className="path-panel-inner" key={stage.stage}>
                <div className="path-core" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="path-copy">
                  <p className="explorer-label">Selected phase</p>
                  <h3>{stage.stage}</h3>
                  <p className="lede">{stage.blurb}</p>
                </div>
                <div className="path-services">
                  <p>Relevant work</p>
                  <ul>
                    {stage.services.map((service) => (
                      <li key={service.id}>
                        <Link href={`${routes.services}#${service.id}`}>
                          <FieldIcon kind={service.id} />
                          <span>{service.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="path-guides">
                  <p>Start learning</p>
                  <ul>
                    {stage.guides.map((guide) => (
                      <li key={guide.slug}>
                        <Link href={`${routes.learn}/${guide.slug}`}>{guide.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

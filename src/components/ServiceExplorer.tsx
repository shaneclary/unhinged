"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import type { ServiceId } from "@/content/services";
import { routes } from "@/content/site";
import { FieldIcon } from "./FieldIcon";
import { Photo } from "./Photo";

export type ExplorerService = {
  id: ServiceId;
  name: string;
  summary: string;
  covers: readonly string[];
  image: string;
  guides: readonly { slug: string; title: string }[];
};

/** A compact, keyboard-operable way to inspect the firm's six areas of work. */
export function ServiceExplorer({ services }: { services: readonly ExplorerService[] }) {
  const [activeId, setActiveId] = useState<ServiceId>(services[0].id);
  const [enhanced, setEnhanced] = useState(false);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);

  // Keep every service readable in the server-rendered/no-JavaScript version.
  // Once the client is ready, this becomes the compact tabbed explorer.
  useEffect(() => {
    setEnhanced(true);
  }, []);

  function move(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number | null = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % services.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + services.length) % services.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = services.length - 1;
    if (next === null) return;

    event.preventDefault();
    setActiveId(services[next].id);
    tabs.current[next]?.focus();
  }

  return (
    <div className="service-explorer">
      <div className="service-explorer-tabs" role="tablist" aria-label="Explore Unhinged Geology services">
        {services.map((service, index) => {
          const selected = service.id === activeId;
          return (
            <button
              key={service.id}
              ref={(element) => {
                tabs.current[index] = element;
              }}
              id={`service-tab-${service.id}`}
              className="service-tab"
              data-service={service.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`service-panel-${service.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(service.id)}
              onKeyDown={(event) => move(event, index)}
            >
              <span className="service-tab-icon field-badge" aria-hidden="true">
                <FieldIcon kind={service.id} />
              </span>
              <span className="service-tab-copy">
                <span className="service-tab-index">{String(index + 1).padStart(2, "0")}</span>
                <span>{service.name}</span>
              </span>
            </button>
          );
        })}
      </div>

      {services.map((service) => {
        const active = service.id === activeId;
        return (
          <section
            key={service.id}
            id={`service-panel-${service.id}`}
            className="service-explorer-panel"
            role="tabpanel"
            aria-labelledby={`service-tab-${service.id}`}
            tabIndex={0}
            hidden={enhanced && !active}
          >
            <div className="service-explorer-panel-inner" key={service.id}>
                <div className="service-explorer-copy">
                  <p className="explorer-label">Field focus</p>
                  <h3>{service.name}</h3>
                  <p className="lede">{service.summary}</p>
                  <div className="service-coverage" aria-label={`${service.name} covers`}>
                    <p>What this can cover</p>
                    <ul>
                      {service.covers.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-explorer-actions">
                    <Link className="btn" href={`${routes.services}#${service.id}`}>
                      Explore this service
                    </Link>
                    <Link className="field-link" href={routes.contact}>
                      Discuss a project <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
                <div className="service-explorer-aside">
                  <Photo src={service.image} shape="thumb" />
                  <div className="service-guides">
                    <p>Related guides</p>
                    <ul>
                      {service.guides.map((guide) => (
                        <li key={guide.slug}>
                          <Link href={`${routes.learn}/${guide.slug}`}>{guide.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

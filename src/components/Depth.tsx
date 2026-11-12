"use client";

import { useEffect, useState } from "react";
import { LEVELS, type LevelId } from "@/content/learn/types";

const ids = LEVELS.map((level) => level.id) as readonly string[];

/**
 * Runs before first paint so only the chosen depth shows (Float unless the
 * address asks for #outcrop or #core). Without scripts all three depths
 * stay visible, in order, which is also what search engines read.
 */
export const depthBootScript = `(function(){var g=document.currentScript.parentElement,h=location.hash.slice(1);g.dataset.depth=["float","outcrop","core"].indexOf(h)>-1?h:"float"})()`;

/** The depth control, drawn as a three-interval strip log. */
export function Depth() {
  const [depth, setDepth] = useState<LevelId>("float");

  useEffect(() => {
    const guide = document.querySelector<HTMLElement>(".guide");
    const sync = (scroll: boolean) => {
      const hash = window.location.hash.slice(1);
      if (!ids.includes(hash)) return;
      setDepth(hash as LevelId);
      if (guide) guide.dataset.depth = hash;
      if (scroll) document.getElementById(hash)?.scrollIntoView({ block: "start" });
    };
    sync(false);
    const onHash = () => sync(true);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <nav className="depth" aria-label="Reading depth">
      <p className="depth-label">Choose your depth</p>
      <div className="depth-tabs">
        {LEVELS.map((level) => (
          <a key={level.id} className="depth-tab" href={`#${level.id}`} aria-current={depth === level.id ? "true" : undefined}>
            <span className={`pat pat-${level.id}`} aria-hidden="true" />
            <b>{level.name}</b>
            <small>{level.plain}</small>
          </a>
        ))}
      </div>
    </nav>
  );
}

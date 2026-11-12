"use client";

import { useState } from "react";

/**
 * A photo from the current site, still served from its Squarespace address.
 * If it fails to load the frame removes itself so the layout holds.
 * Before the Squarespace site is switched off these files must be copied into /public.
 */
export function Photo({
  src,
  alt = "",
  shape = "land",
  eager = false,
}: {
  src: string;
  alt?: string;
  shape?: "wide" | "land" | "thumb" | "map";
  eager?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <figure className={`photo photo-${shape}`} data-failed={failed}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
      />
    </figure>
  );
}

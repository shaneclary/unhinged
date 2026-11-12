import type { Service } from "@/content/services";

/** A map-unit box for a service: color, line pattern and unit symbol. */
export function Swatch({ service, small = false }: { service: Service; small?: boolean }) {
  return (
    <span className={`swatch sw-${service.id}${small ? " swatch-sm" : ""}`} aria-hidden="true">
      <span>{service.symbol}</span>
    </span>
  );
}

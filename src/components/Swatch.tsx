import { FieldIcon } from "./FieldIcon";
import type { Service } from "@/content/services";

/** A field-tool badge for each service, shared across pages and related guides. */
export function Swatch({ service, small = false }: { service: Service; small?: boolean }) {
  return (
    <span className={`swatch sw-${service.id}${small ? " swatch-sm" : ""}`} aria-hidden="true">
      <FieldIcon kind={service.id} />
    </span>
  );
}

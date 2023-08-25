import type { WithContext, Thing } from 'schema-dts';

export function serializeSchema<T extends Thing>(thing: WithContext<T>) {
  return `<script type="application/ld+json">${JSON.stringify(thing, null, 2)}</script>`;
}

export function notEmpty<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

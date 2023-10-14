
export function parseMetaText(text: string): string {
  return text
    .replace(/<[^>]*>|[\n\r]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

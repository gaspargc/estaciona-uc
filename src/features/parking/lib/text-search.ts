/** Lowercases and strips accents so "fisica" matches "Física". */
function normalize(text: string): string {
  return text.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().trim();
}

export function matchesQuery(text: string, query: string): boolean {
  return normalize(text).includes(normalize(query));
}

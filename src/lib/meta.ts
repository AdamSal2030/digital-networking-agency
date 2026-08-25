/**
 * Clamp a meta description to the length Google actually renders (~155-160
 * chars). Several templated pages were emitting 190-206 characters, which
 * simply gets truncated mid-sentence in the SERP.
 *
 * Trims on a sentence boundary where possible, otherwise a word boundary.
 */
export function clampDescription(text: string, max = 155): string {
  const s = text.replace(/\s+/g, " ").trim();
  if (s.length <= max) return s;

  // Prefer ending on a complete sentence.
  const window = s.slice(0, max + 1);
  const lastStop = Math.max(
    window.lastIndexOf(". "),
    window.lastIndexOf("? "),
    window.lastIndexOf("! ")
  );
  if (lastStop >= max * 0.6) return s.slice(0, lastStop + 1).trim();

  // Otherwise cut on a word boundary and add an ellipsis.
  const cut = window.lastIndexOf(" ");
  return s.slice(0, cut > 0 ? cut : max).trim().replace(/[,;:.—-]+$/, "") + "…";
}

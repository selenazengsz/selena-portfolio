// Full-page film-grain overlay. Purely decorative — sits above everything,
// ignores pointer events, blends a faint SVG noise into the paper background
// so the monochrome palette never feels sterile.
export default function Grain() {
  return <div className="grain" aria-hidden="true" />;
}

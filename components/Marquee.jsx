// A slow, endless ticker of the topics Samvad covers.
// The row is repeated eight times and the track slides exactly one row (12.5%), so the loop never shows a gap,
// whatever the screen width.
export default function Marquee({ items }) {
  return (
    <div className="marquee" role="presentation">
      <div className="marquee-track">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => (
          <ul className="marquee-row" key={n} aria-hidden={n > 0}>
            {items.map((x, i) => (<li key={i}><span>{x}</span><i /></li>))}
          </ul>
        ))}
      </div>
    </div>
  );
}

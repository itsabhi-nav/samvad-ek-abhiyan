// Words that rise into place (pure CSS, so it works without JS).
export default function Words({ text, start = 0 }) {
  return text.trim().split(/\s+/).map((w, i) => (
    <span key={i}><span className="word"><span style={{ "--i": start + i }}>{w}</span></span>{" "}</span>
  ));
}

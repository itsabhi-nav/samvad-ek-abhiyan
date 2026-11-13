import Reveal from "./Reveal";

// The editorial standard, from the brief's editorial vision. Photo on one side, four principles on the other.
export default function Standard({ t }) {
  const s = t.standard;
  return (
    <section className="section standard">
      <div className="container standard-grid">
        <Reveal className="standard-media"><img src="/images/stock/press.jpg" alt="" loading="lazy" /></Reveal>
        <div>
          <Reveal><h2>{s.title}</h2><p className="lead">{s.sub}</p></Reveal>
          <ol className="standard-list">
            {s.items.map((it, i) => (
              <Reveal as="li" key={i} delay={0.07 * i}>
                <span className="std-n">{i + 1}</span>
                <div><h3>{it.t}</h3><p>{it.x}</p></div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

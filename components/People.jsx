import Reveal from "./Reveal";

export default function People({ people, cols = 4, detail = false }) {
  return (
    <div className={`people people--${cols}`}>
      {people.map((p, i) => (
        <Reveal key={p.id} className="person" delay={i * 0.09}>
          <div className="person-photo"><img src={p.photo} alt={p.name} loading="lazy" /></div>
          <div className="person-id">
            <h3>{p.name}</h3>
            <span className="role">{p.role}</span>
          </div>
          {detail && <p>{p.text}</p>}
        </Reveal>
      ))}
    </div>
  );
}

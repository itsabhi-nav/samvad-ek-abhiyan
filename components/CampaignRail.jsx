import Carousel from "./Carousel";

// Campaigns and publications: a grid on wide screens, a compact carousel on phones and tablets.
export default function CampaignRail({ id, theme, title, sub, items, labels }) {
  return (
    <Carousel id={id} theme={theme} title={title} sub={sub} trackClass="rail-track" gridFrom={1024} labels={labels}>
      {items.map((w) => (
        <article key={w.id} className="rail-card">
          <div className={`rail-media ${w.id === "pr2" ? "rail-media--contain" : ""}`}>
            <img src={w.image} alt={w.title} loading="lazy" />
          </div>
          <span className="tag">{w.tag}</span>
          <h3>{w.title}</h3>
          <p>{w.text}</p>
        </article>
      ))}
    </Carousel>
  );
}

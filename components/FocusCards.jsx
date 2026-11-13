import Carousel from "./Carousel";

// Three areas of focus: a grid on wide screens (all three fit), a compact carousel on phones and tablets.
export default function FocusCards({ id, title, items, images, labels }) {
  return (
    <Carousel id={id} title={title} trackClass="fcards-track" gridFrom={1024} labels={labels}>
      {items.map((it, i) => (
        <article key={i} className="fcard">
          <div className="fcard-media">
            <img src={images[i].src} alt="" loading="lazy" style={{ objectPosition: images[i].pos }} />
            <span className="fcard-n">{String(i + 1).padStart(2, "0")}</span>
          </div>
          <h3>{it.title}</h3>
          <p>{it.text}</p>
        </article>
      ))}
    </Carousel>
  );
}

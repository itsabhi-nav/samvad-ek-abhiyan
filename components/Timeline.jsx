import Carousel from "./Carousel";

// The journey: years along a line, in a compact row with side arrows.
export default function Timeline({ id, title, items, images = {}, theme, labels }) {
  return (
    <Carousel id={id} theme={theme} title={title} trackClass="tl2-track" labels={labels}>
      {items.map((it) => (
        <article key={it.year} className="tl2-item">
          <span className="tl2-dot" aria-hidden="true" />
          <span className="tl2-year num">{it.year}</span>
          {images[it.year] && <div className={`tl2-img ${images[it.year].cover ? "tl2-img--cover" : ""}`}><img src={images[it.year].src} alt="" loading="lazy" /></div>}
          <p>{it.text}</p>
        </article>
      ))}
    </Carousel>
  );
}

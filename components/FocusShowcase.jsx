"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";

// Pinned, scroll-driven showcase: the photo and the text change as you scroll through the section.
export default function FocusShowcase({ title, items, images }) {
  const ref = useRef(null);
  const [i, setI] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => setI(Math.min(items.length - 1, Math.max(0, Math.floor(v * items.length * 0.999)))));

  return (
    <section className="focus">
      <div ref={ref} className="focus-desktop" style={{ "--steps": items.length }}>
        <div className="focus-sticky">
          <div className="focus-media">
            <AnimatePresence mode="popLayout">
              <motion.img key={i} loading="lazy" src={images[i].src} alt="" style={{ objectPosition: images[i].position }} initial={{ opacity: 0, scale: 1.12 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }} />
            </AnimatePresence>
            <div className="focus-media-veil" />
          </div>
          <div className="focus-text">
            <h2 className="focus-title">{title}</h2>
            <div className="focus-stage">
              <AnimatePresence mode="wait">
                <motion.div key={i} initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                  <span className="focus-num">0{i + 1}</span>
                  <h3>{items[i].title}</h3>
                  <p>{items[i].text}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="focus-bar" aria-hidden="true">
              {items.map((_, k) => <i key={k} data-on={k <= i} />)}
            </div>
          </div>
        </div>
      </div>

      <div className="focus-mobile container">
        <h2>{title}</h2>
        {items.map((it, k) => (
          <article key={k}>
            <div className="focus-m-media"><img src={images[k].src} alt="" loading="lazy" style={{ objectPosition: images[k].position }} /></div>
            <div className="focus-m-head"><span className="focus-num">0{k + 1}</span><h3>{it.title}</h3></div>
            <p>{it.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

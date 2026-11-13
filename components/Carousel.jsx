"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "./Icons";

// A compact sideways row. Left and right arrows sit at the two sides, swiping works on phones,
// and it advances slowly by itself until the reader touches it.
// `gridFrom` (px): from this width up the row is a plain grid (used when all cards fit on screen).
export default function Carousel({ id, theme = "", title, sub, children, trackClass = "", gridFrom = 0, auto = true, labels }) {
  const view = useRef(null);
  const section = useRef(null);
  const reduce = useReducedMotion();
  const [edge, setEdge] = useState({ start: true, end: false });
  const touched = useRef(false);
  const paused = useRef(false);
  const visible = useRef(false);

  const update = useCallback(() => {
    const v = view.current; if (!v) return;
    setEdge({ start: v.scrollLeft < 8, end: v.scrollLeft + v.clientWidth >= v.scrollWidth - 8 });
  }, []);

  const step = () => {
    const v = view.current; const first = v?.firstElementChild?.firstElementChild;
    return first ? first.getBoundingClientRect().width + parseFloat(getComputedStyle(v.firstElementChild).columnGap || 0) : 320;
  };
  const go = (d, byUser = true) => {
    const v = view.current; if (!v) return;
    if (byUser) touched.current = true;
    v.scrollBy({ left: d * step(), behavior: "smooth" });
  };

  useEffect(() => {
    update();
    const v = view.current;
    v.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { v.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, [update]);

  // slow auto-advance: only while on screen, never after the reader has touched it
  useEffect(() => {
    if (!auto || reduce) return;
    const io = new IntersectionObserver(([e]) => { visible.current = e.isIntersecting; }, { threshold: 0.5 });
    io.observe(section.current);
    const t = setInterval(() => {
      const v = view.current;
      if (!v || touched.current || paused.current || !visible.current) return;
      if (getComputedStyle(v).overflowX === "visible") return;           // grid layout on wide screens
      if (v.scrollLeft + v.clientWidth >= v.scrollWidth - 8) v.scrollTo({ left: 0, behavior: "smooth" });
      else go(1, false);
    }, 4500);
    return () => { clearInterval(t); io.disconnect(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auto, reduce]);

  const stop = () => { touched.current = true; };
  return (
    <section id={id} ref={section} className={`cr ${theme} ${gridFrom ? "cr--grid" : ""}`}
      onMouseEnter={() => (paused.current = true)} onMouseLeave={() => (paused.current = false)} onFocus={() => (paused.current = true)} onBlur={() => (paused.current = false)}>
      <div className="container cr-head">
        <h2>{title}</h2>
        {sub && <p>{sub}</p>}
      </div>
      <div className="cr-stage">
        <button className="cr-arrow cr-arrow--l" onClick={() => go(-1)} disabled={edge.start} aria-label={labels?.prev ?? "Previous"}><ArrowLeft /></button>
        <div className="cr-view" ref={view} onTouchStart={stop} onPointerDown={stop} onWheel={stop} tabIndex={0}>
          <div className={`cr-track ${trackClass}`}>{children}</div>
        </div>
        <button className="cr-arrow cr-arrow--r" onClick={() => go(1)} disabled={edge.end} aria-label={labels?.next ?? "Next"}><ArrowRight /></button>
      </div>
    </section>
  );
}

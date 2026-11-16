"use client";
import { useEffect, useRef } from "react";

// A slow, endless ticker of the topics Samvad covers.
// The row is repeated six times and the track slides exactly one row width, so the loop never shows a gap,
// whatever the screen width. The movement is driven in JS (requestAnimationFrame) rather than a CSS animation,
// which keeps it running on every mobile browser and lets it stop while off-screen or paused on hover.
const COPIES = 6;

export default function Marquee({ items }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const row = track?.firstElementChild;
    if (!track || !row) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let width = 0;
    let offset = 0;
    let raf = 0;
    let last = 0;
    let hovered = false;
    let visible = true;

    const measure = () => {
      width = row.getBoundingClientRect().width;
    };

    const tick = (now) => {
      const dt = last ? Math.min(0.064, (now - last) / 1000) : 0;
      last = now;
      if (width > 0 && !hovered) {
        // a slower drift when the reader asks the system for less motion, never a freeze
        offset = (offset + (reduced.matches ? 10 : 30) * dt) % width;
        track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      }
      raf = visible ? requestAnimationFrame(tick) : 0;
    };

    const start = () => {
      if (raf || !visible) return;
      last = 0;
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    measure();
    start();

    const resize = new ResizeObserver(() => {
      measure();
      if (offset >= width) offset = 0;
    });
    resize.observe(row);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    }, { rootMargin: "120px" });
    io.observe(track);

    const onEnter = () => { hovered = true; };
    const onLeave = () => { hovered = false; };
    if (finePointer.matches) {
      track.addEventListener("pointerenter", onEnter);
      track.addEventListener("pointerleave", onLeave);
    }

    return () => {
      stop();
      resize.disconnect();
      io.disconnect();
      track.removeEventListener("pointerenter", onEnter);
      track.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className="marquee" role="presentation">
      <div className="marquee-track" ref={trackRef}>
        {Array.from({ length: COPIES }, (_, n) => (
          <ul className="marquee-row" key={n} aria-hidden={n > 0 ? "true" : undefined}>
            {items.map((x, i) => (<li key={i}><span>{x}</span><i /></li>))}
          </ul>
        ))}
      </div>
    </div>
  );
}

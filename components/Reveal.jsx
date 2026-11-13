"use client";
import { createElement, useEffect, useRef, useState } from "react";

// Fades content in as it scrolls into view.
// The server HTML is fully visible. After hydration, only elements that are still below the fold are hidden and then revealed,
// so a slow connection never shows an empty block where a card should be.
export default function Reveal({ as = "div", delay = 0, className = "", children, style, ...rest }) {
  const ref = useRef(null);
  const [phase, setPhase] = useState("show");   // show | hide | in
  useEffect(() => {
    document.documentElement.classList.add("js");
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.95) return;   // already on screen: leave it visible
    setPhase("hide");
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setPhase("in"); io.disconnect(); } }, { rootMargin: "0px 0px -6% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return createElement(as, { ref, "data-reveal": "", "data-phase": phase, className: `rv ${className}`.trim(), style: { ...style, "--rv-delay": `${delay}s` }, ...rest }, children);
}

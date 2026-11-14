"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Back-to-top button, bottom right, on every page.
export default function ScrollTop({ label }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const up = () => (window.__lenis ? window.__lenis.scrollTo(0, { duration: 1.4 }) : window.scrollTo({ top: 0, behavior: "smooth" }));
  return (
    <AnimatePresence>
      {show && (
        <motion.button className="to-top" onClick={up} aria-label={label}
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 13V3M3.5 7.5L8 3l4.5 4.5" /></svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

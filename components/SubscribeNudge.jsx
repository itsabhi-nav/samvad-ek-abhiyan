"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon } from "./Icons";

// One gentle, dismissible reminder per visit. It shows after the reader has scrolled a while,
// and steps aside whenever the subscribe section or footer is on screen.
export default function SubscribeNudge({ t, onOpen, blocked }) {
  const pathname = usePathname() || "";
  const [ready, setReady] = useState(false);
  const [gone, setGone] = useState(false);
  const [covered, setCovered] = useState(false);
  const [deep, setDeep] = useState(false);

  useEffect(() => {
    try { const at = Number(sessionStorage.getItem("samvad-nudge")); if (at && Date.now() - at < 5 * 60 * 1000) { setGone(true); return; } } catch {}
    const on = () => { const y = window.scrollY; setDeep(y > 350); if (y > 350) setReady(true); };
    window.addEventListener("scroll", on, { passive: true });
    const timer = setTimeout(() => setReady(true), 20000);
    return () => { window.removeEventListener("scroll", on); clearTimeout(timer); };
  }, []);

  useEffect(() => {
    const targets = [...document.querySelectorAll(".cta, .strip, .site-footer")];
    if (!targets.length) return;
    const seen = new Set();
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => (e.isIntersecting ? seen.add(e.target) : seen.delete(e.target)));
      setCovered(seen.size > 0);
    });
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  const close = () => { setGone(true); try { sessionStorage.setItem("samvad-nudge", String(Date.now())); } catch {} };
  const show = ready && deep && !gone && !covered && !blocked && !pathname.includes("/contact");

  return (
    <AnimatePresence>
      {show && (
        <motion.aside className="nudge" role="complementary" aria-label={t.nudge.title}
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
          <div className="nudge-text"><strong>{t.nudge.title}</strong><span>{t.nudge.text}</span></div>
          <button className="btn btn--primary btn--small" onClick={() => { close(); onOpen(); }}>{t.nudge.button}</button>
          <button className="nudge-x" onClick={close} aria-label={t.ui.close}><CloseIcon /></button>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

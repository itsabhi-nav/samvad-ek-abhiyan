"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

// Logo with a ring around it. Shown while the site first loads and while a clicked page is being fetched.
// It stays until the new page is actually ready, then fades away.
// The first render is part of the server HTML, so the ring is already on screen before any script runs.
export default function PageLoader({ label = "Loading" }) {
  const pathname = usePathname();
  const [busy, setBusy] = useState(true);
  const shownAt = useRef(Date.now());
  const timer = useRef(null);
  const target = useRef(null);
  const failsafe = useRef(null);

  const hide = (min = 250) => {
    clearTimeout(timer.current); clearTimeout(failsafe.current);
    const wait = Math.max(0, min - (Date.now() - shownAt.current));
    setTimeout(() => setBusy(false), wait);
  };
  const show = () => {
    shownAt.current = Date.now();
    setBusy(true);
    clearTimeout(failsafe.current);
    failsafe.current = setTimeout(() => setBusy(false), 12000);   // never trap the reader
  };

  // first load: wait only for the fonts (never longer than 2.5s), not for every image on the page
  useEffect(() => {
    (document.fonts?.ready ?? Promise.resolve()).then(() => requestAnimationFrame(() => hide(300)));
    failsafe.current = setTimeout(() => setBusy(false), 2500);
    return () => clearTimeout(failsafe.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // a click on an internal link starts the loader (after a short delay, so instant pages do not flash)
  useEffect(() => {
    const start = (path) => { target.current = path; clearTimeout(timer.current); timer.current = setTimeout(show, 90); };
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest?.("a[href]");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname) return;               // same page, or only a hash / filter changed
      if (/\.(pdf|jpe?g|png|webp|zip)$/i.test(url.pathname)) return;
      start(url.pathname);
    };
    const onNav = (e) => start(e.detail?.path ?? null);
    document.addEventListener("click", onClick, true);
    window.addEventListener("samvad:navstart", onNav);
    return () => { document.removeEventListener("click", onClick, true); window.removeEventListener("samvad:navstart", onNav); clearTimeout(timer.current); };
  }, []);

  // the new route has arrived: let it paint, then lift the loader
  useEffect(() => {
    clearTimeout(timer.current);
    requestAnimationFrame(() => requestAnimationFrame(() => hide(250)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <AnimatePresence>
      {busy && (
        <motion.div className="page-loader" role="status" aria-live="polite" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}>
          <div className="loader-mark">
            <svg className="loader-ring" viewBox="0 0 160 160" aria-hidden="true">
              <circle className="loader-track" cx="80" cy="80" r="70" />
              <circle className="loader-arc loader-arc--a" cx="80" cy="80" r="70" />
              <circle className="loader-arc loader-arc--b" cx="80" cy="80" r="70" />
            </svg>
            <img src="/images/logo.png" alt="" width="88" height="64" />
          </div>
          <span className="visually-hidden">{label}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import SubscribeForm from "./SubscribeForm";
import CommandPalette from "./CommandPalette";
import ScrollProgress from "./ScrollProgress";
import SubscribeNudge from "./SubscribeNudge";
import PageLoader from "./PageLoader";
import ScrollTop from "./ScrollTop";
import { CloseIcon } from "./Icons";

const Ctx = createContext({ openSubscribe: () => {}, openSearch: () => {} });
export const useApp = () => useContext(Ctx);

function lockScroll(on) {
  if (on) { window.__lenis?.stop(); document.documentElement.style.overflow = "clip"; }
  else { window.__lenis?.start(); document.documentElement.style.overflow = ""; }
}

export default function Providers({ lang, t, index, children }) {
  const [sub, setSub] = useState({ open: false, email: "" });
  const [search, setSearch] = useState(false);
  const last = useRef(null);

  const openSubscribe = useCallback((o = {}) => { last.current = document.activeElement; setSearch(false); setSub({ open: true, email: o.email ?? "" }); }, []);
  const closeSubscribe = useCallback(() => { setSub((s) => ({ ...s, open: false })); last.current?.focus?.(); }, []);
  const openSearch = useCallback(() => { last.current = document.activeElement; setSearch(true); }, []);
  const closeSearch = useCallback(() => { setSearch(false); last.current?.focus?.(); }, []);

  useEffect(() => {
    const open = sub.open || search;
    lockScroll(open);
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") { sub.open ? closeSubscribe() : closeSearch(); } };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); lockScroll(false); };
  }, [sub.open, search, closeSubscribe, closeSearch]);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); search ? closeSearch() : openSearch(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [search, openSearch, closeSearch]);

  return (
    <MotionConfig reducedMotion="user">
      <Ctx.Provider value={{ openSubscribe, openSearch }}>
        <PageLoader label={t.ui2.loading} />
        <ScrollProgress />
        {children}
        <ScrollTop label={t.ui2.toTop} />
        <SubscribeNudge t={t} onOpen={() => openSubscribe()} blocked={sub.open || search} />
        <AnimatePresence>
          {search && <CommandPalette lang={lang} t={t} index={index} onClose={closeSearch} />}
        </AnimatePresence>
        <AnimatePresence>
          {sub.open && (
            <motion.div className="modal-back" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onMouseDown={(e) => e.target === e.currentTarget && closeSubscribe()}>
              <motion.div role="dialog" aria-modal="true" aria-labelledby="sub-title" className="modal" initial={{ opacity: 0, y: 40, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}>
                <button className="icon-btn modal-close" onClick={closeSubscribe} aria-label={t.ui.close}><CloseIcon /></button>
                <h2 id="sub-title">{t.form.subscribeTitle}</h2>
                <p>{t.form.subscribeSub}</p>
                <SubscribeForm t={t} initialEmail={sub.email} autoFocus compact source="popup" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Ctx.Provider>
    </MotionConfig>
  );
}

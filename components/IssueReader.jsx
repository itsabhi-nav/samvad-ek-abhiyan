"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CloseIcon, DownloadIcon } from "./Icons";
import FlipReader from "./FlipReader";

// The full-screen PDF layer. Can open on a given page.
export function ReaderOverlay({ issue, t, page = 1, onClose }) {
  return (
    <motion.div className="reader" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} role="dialog" aria-modal="true" aria-label={issue.title}>
      <div className="reader-bar">
        <div><strong>{issue.title}</strong><span className="meta-line">{issue.period}</span></div>
        <div className="reader-actions">
          <a className="btn btn--ghost btn--small" href={issue.pdf} download>{t.ui.download}<DownloadIcon /></a>
          <button className="icon-btn" onClick={onClose} aria-label={t.ui.close}><CloseIcon /></button>
        </div>
      </div>
      <FlipReader key={`${issue.id}-${page}`} pdf={issue.pdf} title={issue.title} startPage={page} t={t} />
    </motion.div>
  );
}

// Rendered on <body> so no page section can trap it underneath the header.
export function ReaderLayer({ open, issue, t, page = 1, onClose }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(<AnimatePresence>{open && <ReaderOverlay issue={issue} t={t} page={page} onClose={onClose} />}</AnimatePresence>, document.body);
}

export function useReaderLock(open) {
  if (typeof window === "undefined") return;
  if (open) { window.__lenis?.stop(); document.documentElement.style.overflow = "clip"; }
  else { window.__lenis?.start(); document.documentElement.style.overflow = ""; }
}

export default function IssueReader({ issue, t, label }) {
  const [open, setOpen] = useState(false);
  const toggle = (v) => { setOpen(v); useReaderLock(v); };
  return (
    <>
      <button className="btn btn--primary btn--lg" onClick={() => toggle(true)}>{label ?? t.ui2.readOnline}<ArrowUpRight /></button>
      <ReaderLayer open={open} issue={issue} t={t} onClose={() => toggle(false)} />
    </>
  );
}

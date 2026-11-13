"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, SearchIcon } from "./Icons";

// ⌘K / Ctrl+K: search stories, issues and pages in one place.
export default function CommandPalette({ lang, t, index, onClose }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const input = useRef(null);
  useEffect(() => input.current?.focus(), []);

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    const list = s ? index.filter((i) => (i.title + " " + (i.sub || "") + " " + (i.text || "")).toLowerCase().includes(s)) : index.filter((i) => i.type === "page").concat(index.filter((i) => i.type === "story").slice(0, 4));
    return list.slice(0, 9);
  }, [q, index]);
  useEffect(() => setSel(0), [q]);

  const go = (item) => { onClose(); router.push(`/${lang}${item.href}`); };
  const onKey = (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setSel((i) => Math.min(i + 1, results.length - 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setSel((i) => Math.max(i - 1, 0)); }
    if (e.key === "Enter" && results[sel]) go(results[sel]);
  };
  const label = { page: t.ui2.pagesLbl, story: t.ui2.stories, issue: t.ui2.issues };

  return (
    <motion.div className="modal-back palette-back" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <motion.div role="dialog" aria-modal="true" aria-label={t.ui2.search} className="palette" initial={{ opacity: 0, y: -20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
        <div className="palette-input">
          <SearchIcon />
          <input ref={input} value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={onKey} placeholder={t.ui2.searchHint} aria-label={t.ui2.search} />
          <kbd>esc</kbd>
        </div>
        <ul className="palette-list" role="listbox">
          {results.length === 0 && <li className="palette-empty">{t.ui2.searchEmpty}</li>}
          {results.map((r, i) => (
            <li key={r.type + r.href} role="option" aria-selected={i === sel}>
              <button className="palette-item" data-active={i === sel} onMouseEnter={() => setSel(i)} onClick={() => go(r)}>
                <span className="palette-type">{label[r.type]}</span>
                <span className="palette-title">{r.title}</span>
                <ArrowRight />
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

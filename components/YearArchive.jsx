"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

// Year tabs; each year always shows its four quarters, published or not.
export default function YearArchive({ lang, t, years, issues, meta }) {
  const [year, setYear] = useState(years[0]);
  const base = `/${lang}`;
  const q = t.quarterly;
  const find = (y, n) => issues.find((i) => meta[i.id]?.year === y && meta[i.id]?.q === n);
  return (
    <>
      <LayoutGroup id="years">
        <div className="tabs" role="tablist" aria-label={t.magazinePage.yearLbl}>
          {years.map((y) => (
            <button key={y} role="tab" className="tab" aria-selected={year === y} onClick={() => setYear(y)}>
              {year === y && <motion.span layoutId="year-pill" className="tab-pill" transition={{ type: "spring", stiffness: 420, damping: 36 }} />}
              <span className="num">{y}</span>
            </button>
          ))}
        </div>
      </LayoutGroup>

      <AnimatePresence mode="wait">
        <motion.div key={year} className="quarter-grid" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}>
          {[1, 2, 3, 4].map((n) => {
            const is = find(year, n);
            const none = year === 2014 && n < 4;
            return (
              <div key={n} className="quarter" data-state={is ? "live" : none ? "none" : "soon"}>
                {is ? (
                  <Link href={`${base}/magazine/${is.id}`} className="quarter-link">
                    <div className="cover"><img src={is.cover} alt={is.title} loading="lazy" /></div>
                    <span className="readout">Q{n}, {q.q[n - 1]}</span>
                    <h3>{is.title}</h3>
                  </Link>
                ) : (
                  <div className="quarter-link">
                    <div className="cover cover--empty"><span>{none ? t.magazinePage.notPublished : t.magazinePage.digitising}</span></div>
                    <span className="readout">Q{n}, {q.q[n - 1]}</span>
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

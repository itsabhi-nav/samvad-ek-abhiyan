"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Tilt from "./Tilt";
import { ArrowRight, ArrowUpRight } from "./Icons";

// The quarterly: newest cover in front, older issues fanned behind; spreads on hover.
export default function MagazineShelf({ lang, t, issues, quarters }) {
  const [spread, setSpread] = useState(false);
  const base = `/${lang}`;
  const q = t.quarterly;
  const shown = issues.slice(0, 4);
  return (
    <div className="shelf container">
      <div className="shelf-copy">
        <h2>{q.title}</h2>
        <p className="lead">{q.sub}</p>
        <ol className="quarters" aria-label={q.note}>
          {quarters.map((x) => (
            <li key={x.q} data-state={x.state}>
              <span className="q-n num">Q{x.q}</span>
              <span className="q-l">{q.q[x.q - 1]}</span>
            </li>
          ))}
        </ol>
        <p className="shelf-note">{q.note}</p>
        <div className="shelf-actions">
          <Link className="btn btn--primary btn--lg" href={`${base}/magazine`}>{q.cta}<ArrowRight /></Link>
          <Link className="btn btn--ghost btn--lg" href={`${base}/magazine/${issues[0].id}`}>{t.ui2.readOnline}<ArrowUpRight /></Link>
        </div>
      </div>

      <div className="fan" onPointerEnter={() => setSpread(true)} onPointerLeave={() => setSpread(false)} onFocus={() => setSpread(true)} onBlur={() => setSpread(false)}>
        {shown.map((is, k) => (
          <motion.div
            key={is.id}
            className="fan-card"
            style={{ zIndex: shown.length - k }}
            animate={{ x: spread ? `${-k * 46}%` : `${-k * 14}%`, rotate: spread ? -k * 7 : -k * 3, scale: 1 - k * 0.05, y: k * 10 }}
            transition={{ type: "spring", stiffness: 140, damping: 20 }}
          >
            <Tilt max={k === 0 ? 10 : 4}>
              <Link href={`${base}/magazine/${is.id}`} className="cover-card">
                <img src={is.cover} alt={is.title} loading="lazy" width="680" height="900" />
              </Link>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import Words from "./Words";
import Tilt from "./Tilt";
import Marquee from "./Marquee";
import { ArrowRight } from "./Icons";

export default function Hero({ lang, t, issues }) {
  const ref = useRef(null);
  const latest = issues[0], previous = issues[1];
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  const mx = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 });
  const my = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 });
  const fanX = useTransform(mx, [-0.5, 0.5], [12, -12]);
  const fanY = useTransform(my, [-0.5, 0.5], [8, -8]);
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const h = t.hero2;
  const nBefore = h.before.trim().split(/\s+/).length;
  const base = `/${lang}`;

  return (
    <section ref={ref} className="hero" onPointerMove={onMove}>
      <motion.div className="hero-media" style={{ y: imgY }}>
        <picture>
          <source media="(max-width: 40rem)" srcSet="/images/stock/dusk-gate-m.jpg" />
          <img src="/images/stock/dusk-gate.jpg" alt="" fetchPriority="high" />
        </picture>
      </motion.div>
      <div className="hero-veil" />

      <div className="container hero-grid">
        <motion.div className="hero-copy" style={{ y: textY }}>
          <h1>
            <Words text={h.before} />
            <span className="word"><span style={{ "--i": nBefore }}><span className="verb">{h.verb}</span>{h.after}</span></span>
          </h1>
          <p className="lead fade-in" style={{ "--d": "320ms" }}>{h.sub}</p>
          <div className="hero-actions fade-in" style={{ "--d": "380ms" }}>
            <Link className="btn btn--primary btn--lg" href={`${base}/stories`}>{h.cta1}<ArrowRight /></Link>
            <Link className="btn btn--ghost btn--lg" href={`${base}/magazine`}>{h.cta2}</Link>
          </div>
          <dl className="hero-facts fade-in" style={{ "--d": "440ms" }}>
            {t.heroFacts.map((f) => (
              <div key={f.v}><dt>{f.v}</dt><dd>{f.l}</dd></div>
            ))}
          </dl>
        </motion.div>

        <motion.div className="hero-fan fade-in" style={{ x: fanX, y: fanY, "--d": "240ms" }}>
          {previous && (
            <Link href={`${base}/magazine/${previous.id}`} className="hero-fan-back" tabIndex={-1} aria-hidden="true">
              <img src={previous.cover} alt="" width="680" height="900" />
            </Link>
          )}
          <div className="hero-fan-front">
            <Tilt max={8}>
              <Link href={`${base}/magazine/${latest.id}`} className="cover-card">
                <img src={latest.cover} alt={latest.title} width="680" height="900" />
              </Link>
            </Tilt>
            <div className="hero-cover-meta">
              <span className="label">{t.ui2.latestIssue}</span>
              <span className="meta-line">{latest.period}</span>
            </div>
          </div>
        </motion.div>

        {/* phones: an issue card instead of the big cover */}
        <Link href={`${base}/magazine/${latest.id}`} className="hero-issue-mini fade-in" style={{ "--d": "400ms" }}>
          <img src={latest.cover} alt="" width="72" height="96" />
          <span><span className="label">{t.ui2.latestIssue}</span><strong>{latest.period}</strong><span className="meta-line">{latest.title}</span></span>
          <ArrowRight />
        </Link>
      </div>

      <Marquee items={t.ticker} />
    </section>
  );
}

"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Word({ children, range, progress }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
}

// A statement whose words light up one by one as you scroll through it.
export default function ScrollWords({ text, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.45"] });
  const words = text.trim().split(/\s+/);
  return (
    <p ref={ref} className={`scroll-words ${className ?? ""}`}>
      {words.map((w, i) => {
        const a = i / words.length, b = Math.min(1, a + 1.6 / words.length);
        return <span key={i}><Word range={[a, b]} progress={scrollYProgress}>{w}</Word>{" "}</span>;
      })}
    </p>
  );
}

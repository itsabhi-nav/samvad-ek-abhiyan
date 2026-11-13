"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Tilt({ max = 10, className, children }) {
  const px = useMotionValue(0), py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 140, damping: 16, mass: 0.4 });
  const sy = useSpring(py, { stiffness: 140, damping: 16, mass: 0.4 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-max, max]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [max, -max]);
  const move = (e) => {
    if (e.pointerType === "touch") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  return (
    <motion.div className={`tilt ${className ?? ""}`} style={{ rotateX, rotateY, transformPerspective: 1100 }} onPointerMove={move} onPointerLeave={() => { px.set(0); py.set(0); }}>
      {children}
    </motion.div>
  );
}

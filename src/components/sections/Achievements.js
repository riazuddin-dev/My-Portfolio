"use client";

import { motion, useTransform } from "framer-motion";
import { useScrollytelling } from "../ScrollytellingProvider";

export function Achievements() {
  const { smoothProgress } = useScrollytelling();

  const opacity = useTransform(smoothProgress, [0.72, 0.78, 0.9, 0.95], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0.72, 0.95], [0.97, 1.03]);

  return (
    <motion.section 
      style={{ opacity, scale }}
      className="fixed inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"
    >
      <div className="text-center max-w-3xl px-6">
        <h2 className="text-4xl md:text-6xl font-light tracking-tight text-foreground mb-4">
          Consistent problem solver.
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-foreground-muted font-mono text-sm tracking-widest uppercase mb-8">
          <span>DSA</span>
          <span className="opacity-50">·</span>
          <span>Clean Architecture</span>
          <span className="opacity-50">·</span>
          <span>Scalable UI</span>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-foreground/80">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-light">100+</span>
            <span className="text-xs uppercase tracking-widest font-mono mt-1 opacity-60">Problems Solved</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-white/20" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-light">Production</span>
            <span className="text-xs uppercase tracking-widest font-mono mt-1 opacity-60">Ready Projects</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

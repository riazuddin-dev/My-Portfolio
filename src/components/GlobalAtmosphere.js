"use client";

import { motion } from "framer-motion";

export function GlobalAtmosphere() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Core Dark Matte Background */}
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Elegant Haze Diffusion & Radial Gradients (About section style) - Hidden on mobile to save GPU */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[radial-gradient(circle_at_center,rgba(196,154,108,0.04)_0%,transparent_70%)] hidden md:block" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(196,154,108,0.05)_0%,transparent_60%)] hidden md:block" />

      {/* Very Subtle Vignette Blending - static, optimized */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(5,5,5,0.4)_100%)] pointer-events-none" />
    </div>
  );
}

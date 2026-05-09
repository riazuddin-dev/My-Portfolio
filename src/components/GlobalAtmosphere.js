"use client";

import { motion } from "framer-motion";

export function GlobalAtmosphere() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Core Dark Matte Background */}
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Elegant Haze Diffusion & Radial Gradients (About section style) - Hidden on mobile to save GPU */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[radial-gradient(circle_at_center,rgba(196,154,108,0.06)_0%,transparent_70%)] mix-blend-screen hidden md:block" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(196,154,108,0.08)_0%,transparent_60%)] mix-blend-screen hidden md:block" />

      {/* Subtle Cinematic Particles */}
      <div className="absolute inset-0 hidden md:block opacity-60 pointer-events-none">
         <motion.div style={{ willChange: "transform, opacity" }} animate={{ y: [-20, 20, -20], opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] left-[10%] w-1.5 h-1.5 bg-[#c49a6c] rounded-full shadow-[0_0_12px_rgba(196,154,108,1)]" />
         <motion.div style={{ willChange: "transform, opacity" }} animate={{ y: [15, -15, 15], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[30%] left-[40%] w-1 h-1 bg-[#c49a6c] rounded-full shadow-[0_0_10px_rgba(196,154,108,1)]" />
         <motion.div style={{ willChange: "transform, opacity" }} animate={{ y: [-10, 10, -10], opacity: [0.4, 1, 0.4] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[40%] right-[30%] w-[2px] h-[2px] bg-white/50 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
         <motion.div style={{ willChange: "transform, opacity" }} animate={{ y: [20, -20, 20], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[70%] right-[15%] w-1 h-1 bg-[#c49a6c] rounded-full shadow-[0_0_10px_rgba(196,154,108,0.8)]" />
         <motion.div style={{ willChange: "transform, opacity" }} animate={{ y: [-15, 15, -15], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[10%] left-[20%] w-[2px] h-[2px] bg-white/40 rounded-full shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
      </div>

      {/* Soft Vignette Blending */}
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]" />

      {/* Texture Consistency (Noise) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] mix-blend-overlay" />
    </div>
  );
}

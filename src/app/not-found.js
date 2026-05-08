"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GlobalAtmosphere } from "@/components/GlobalAtmosphere";
import { CustomCursor } from "@/components/CustomCursor";

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

export default function NotFound() {
  return (
    <main className="relative w-full h-screen bg-[#050505] overflow-hidden flex items-center justify-center">
      <CustomCursor />
      <GlobalAtmosphere />

      {/* 404 specific environmental glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c49a6c]/10 blur-[150px] rounded-full mix-blend-screen will-change-transform" />
        
        {/* Subtle grid pattern for technical broken-path feel */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", 
            backgroundSize: "60px 60px" 
          }} 
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto w-full"
      >
        {/* Glowing 404 Typography */}
        <motion.div variants={fadeUp} className="relative mb-4">
          <h1 
            className="text-[120px] md:text-[180px] lg:text-[220px] font-light leading-none tracking-tighter text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(196,154,108,0.2)]"
            style={{
              backgroundImage: "linear-gradient(to bottom, #ffffff, #c49a6c, #a07c55)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            404
          </h1>
          
          {/* Subtle light streak cutting through 404 */}
          <motion.div 
            initial={{ left: "-20%", opacity: 0 }}
            animate={{ left: "120%", opacity: [0, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 5 }}
            className="absolute top-[45%] -translate-y-1/2 w-[40%] h-[2px] bg-[#c49a6c] blur-[1px] shadow-[0_0_15px_rgba(196,154,108,1)] rotate-[-15deg] pointer-events-none"
          />
        </motion.div>

        <motion.h2 variants={fadeUp} className="text-[2rem] md:text-[3rem] font-medium tracking-tight text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          Lost in the <span className="text-[#c49a6c]">dark?</span>
        </motion.h2>

        <motion.p variants={fadeUp} className="text-white/50 font-light text-[14px] md:text-[16px] leading-relaxed max-w-md mx-auto mb-12 tracking-wide">
          The page you’re looking for doesn’t exist or has been moved.
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 w-full max-w-[500px] justify-center">
          
          <Link href="/" className="group/btn relative flex flex-1 items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#c49a6c] to-[#a07c55] rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(196,154,108,0.4)] hover:-translate-y-1">
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
            <span className="relative z-10 font-mono text-[10px] tracking-[0.2em] uppercase text-[#050505] font-bold">
              Back Home
            </span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 text-[#050505] transform group-hover/btn:-translate-x-1 transition-all duration-500"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          </Link>

          <Link href="/" className="group/btn relative flex flex-1 items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/10 hover:border-[#c49a6c]/50 rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_20px_rgba(196,154,108,0.15)] hover:bg-[#c49a6c]/5 hover:-translate-y-1">
            <span className="relative z-10 font-mono text-[10px] tracking-[0.2em] uppercase text-white/80 group-hover/btn:text-[#c49a6c] transition-colors duration-500 font-medium">
              View Projects
            </span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 text-white/50 group-hover/btn:text-[#c49a6c] transition-colors duration-500 transform group-hover/btn:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>

        </motion.div>
      </motion.div>
    </main>
  );
}

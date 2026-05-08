"use client";

import { createContext, useContext, useRef } from "react";
import { useScroll, useSpring } from "framer-motion";

const ScrollytellingContext = createContext(null);

export function ScrollytellingProvider({ children }) {
  const containerRef = useRef(null);
  
  // Track global scroll progress.
  // This value is 0 at the top of the page and 1 at the bottom.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Create a cinematic, film-like smooth interpolated progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative w-full min-h-screen">
      <ScrollytellingContext.Provider value={{ scrollYProgress, smoothProgress, containerRef }}>
        {children}
      </ScrollytellingContext.Provider>
    </div>
  );
}

export function useScrollytelling() {
  const context = useContext(ScrollytellingContext);
  if (!context) {
    throw new Error("useScrollytelling must be used within a ScrollytellingProvider");
  }
  return context;
}

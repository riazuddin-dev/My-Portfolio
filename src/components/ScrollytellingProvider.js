"use client";

import { createContext, useContext, useRef, useEffect } from "react";
import { useScroll, useSpring } from "framer-motion";
import Lenis from "lenis";

const ScrollytellingContext = createContext(null);

export function ScrollytellingProvider({ children }) {
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Initialize Lenis for premium smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Cinematic easing
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false, // Keep native touch scrolling for mobile stability
      touchMultiplier: 2,
      infinite: false,
    });

    // Optimize performance with requestAnimationFrame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

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

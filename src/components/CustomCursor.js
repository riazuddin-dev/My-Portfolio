"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true); // Default true to prevent flash on mobile

  // High-performance Motion Values (bypasses React state)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for different layers
  const springConfigRing = { damping: 25, stiffness: 200, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfigRing);
  const ringY = useSpring(mouseY, springConfigRing);

  const springConfigStreak = { damping: 40, stiffness: 120, mass: 0.8 };
  // Removed streaks and trails for better performance

  useEffect(() => {
    // Check if touch device
    const checkTouch = () => {
      return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
    };

    if (checkTouch()) {
      setIsTouchDevice(true);
      return;
    } else {
      setIsTouchDevice(false);
    }

    // Hide default cursor globally
    document.documentElement.style.cursor = 'none';

    const handleMouseMove = (e) => {
      // Update motion values directly without re-rendering React
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]');
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.style.cursor = 'auto';
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="pointer-events-none fixed inset-0 z-[99999]"
        >
          {/* Outer Trailing Ring */}
          <motion.div
            className="fixed top-[-24px] left-[-24px] w-12 h-12 rounded-full border border-[#c49a6c]/40 flex items-center justify-center mix-blend-screen"
            style={{ x: ringX, y: ringY, willChange: "transform" }}
            animate={{
              scale: isHovering ? 1.6 : 1,
              borderColor: isHovering ? "rgba(196,154,108,0.8)" : "rgba(196,154,108,0.2)",
              backgroundColor: isHovering ? "rgba(196,154,108,0.08)" : "transparent",
            }}
          >
            {/* Soft Ambient Glow inside ring */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-[#c49a6c] blur-[6px]"
              style={{ willChange: "transform, opacity" }}
              animate={{
                opacity: isHovering ? 0.4 : 0.1,
                scale: isHovering ? 1.1 : 1
              }}
            />
          </motion.div>

          {/* Removed streak and cascading trails for performance */}

          {/* Inner Sharp Dot */}
          <motion.div
            className="fixed top-[-4px] left-[-4px] w-2 h-2 rounded-full bg-[#c49a6c] shadow-[0_0_8px_rgba(196,154,108,0.8)]"
            style={{ x: mouseX, y: mouseY, willChange: "transform, opacity" }}
            animate={{
              scale: isHovering ? 0 : 1,
              opacity: isHovering ? 0 : 1
            }}
            transition={{ type: "tween", ease: "linear", duration: 0.05 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

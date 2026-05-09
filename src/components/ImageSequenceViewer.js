"use client";

import { useRef, useEffect, useState } from "react";
import { useScrollytelling } from "./ScrollytellingProvider";
import { useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 118;

// Helper to generate the exact filename.
const getFramePath = (index) => {
  const paddedIndex = index.toString().padStart(3, "0");
  return `/sequence/frame_${paddedIndex}_delay-0.041s.png`;
};

export function ImageSequenceViewer() {
  const { smoothProgress } = useScrollytelling();
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const frameRef = useRef(0);

  // 1. Preload images into memory
  useEffect(() => {
    const images = [];
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        // Draw the first frame immediately once loaded
        if (i === 0 && canvasRef.current) {
          drawFrame(0);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;

    const handleResize = () => {
      drawFrame(frameRef.current);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2. High-performance canvas draw function
  const drawFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    
    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    // Handle high DPI displays
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    }

    ctx.clearRect(0, 0, rect.width, rect.height);
    
    // Replicate object-fit: contain
    const cw = rect.width;
    const ch = rect.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    
    const scale = Math.min(cw / iw, ch / ih);
    const w = iw * scale;
    const h = ih * scale;
    
    // Right aligned for desktop, center for mobile
    const isMobile = window.innerWidth < 768;
    const x = isMobile ? (cw - w) / 2 : (cw - w); 
    const y = (ch - h) / 2;

    ctx.drawImage(img, x, y, w, h);
  };

  // 3. Scroll tracking using fast motion value
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const targetFrame = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.floor(latest * TOTAL_FRAMES))
    );
    
    if (targetFrame !== frameRef.current) {
      frameRef.current = targetFrame;
      requestAnimationFrame(() => {
        drawFrame(frameRef.current);
      });
    }
  });

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#050505] pointer-events-none z-0">

      {/* MAIN CINEMATIC BACKGROUND ATMOSPHERE (Optimized) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" style={{ transform: "translateZ(0)", willChange: "transform" }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(191,161,132,0.05)_0%,transparent_70%)] pointer-events-none" />
      </div>

      {/* PORTRAIT CANVAS CONTAINER */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-full md:w-[85vw] lg:w-[80vw] max-w-[1400px] z-10 pointer-events-none flex items-center justify-center md:justify-end"
        style={{ transform: "translateZ(0)", willChange: "transform" }}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full"
        />
      </div>

      {/* MINIMAL CINEMATIC OVERLAY - Clean portrait */}
      <div className="absolute inset-0 z-20 pointer-events-none" style={{ transform: "translateZ(0)" }}>
        <div className="absolute inset-y-0 left-0 w-[50%] md:w-[45%] bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[10%] bg-gradient-to-t from-[#050505] to-transparent" />
      </div>
    </div>
  );
}

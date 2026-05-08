"use client";

import { useState, useRef, useMemo } from "react";
import Image from "next/image";
import { useScrollytelling } from "./ScrollytellingProvider";
import { useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 118;

// Helper to generate the exact filename.
// Matches: frame_000_delay-0.041s.png
const getFramePath = (index) => {
  const paddedIndex = index.toString().padStart(3, "0");
  return `/sequence/frame_${paddedIndex}_delay-0.041s.png`;
};

export function ImageSequenceViewer() {
  const { smoothProgress } = useScrollytelling();
  const [currentFrame, setCurrentFrame] = useState(0);
  const frameRef = useRef(0);
  const requestRef = useRef(null);

  // Throttled & rAF-based scroll tracking using cinematic smooth progress
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    // Map scroll progress (0-1) to frame index (0 to TOTAL_FRAMES - 1)
    const targetFrame = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.floor(latest * TOTAL_FRAMES))
    );

    if (targetFrame !== frameRef.current) {
      frameRef.current = targetFrame;

      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }

      requestRef.current = requestAnimationFrame(() => {
        setCurrentFrame(frameRef.current);
      });
    }
  });

  // Calculate nearby frames for intelligent preloading
  const nearbyFrames = useMemo(() => {
    const preloads = [];
    // Preload 5 frames behind and 10 frames ahead for smooth forward/backward scrubbing
    const start = Math.max(0, currentFrame - 5);
    const end = Math.min(TOTAL_FRAMES - 1, currentFrame + 10);

    for (let i = start; i <= end; i++) {
      if (i !== currentFrame) {
        preloads.push(i);
      }
    }
    return preloads;
  }, [currentFrame]);

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#050505] pointer-events-none z-0">

      {/* MAIN CINEMATIC BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Massive left-to-center atmospheric warm haze to ensure full-width connection */}
        <div className="absolute top-[10%] left-[-10%] w-[1200px] h-[1200px] rounded-full bg-orange-900/15 blur-[250px] will-change-transform" />

        {/* Continuous cinematic amber bleed extending from the portrait into the center */}
        <div className="absolute top-[15%] right-[5%] w-[1000px] h-[1000px] rounded-full bg-[#bfa184]/20 blur-[250px] mix-blend-screen will-change-transform" />

        {/* Deep connective background glow right in the middle */}
        <div className="absolute top-[35%] left-[30%] w-[800px] h-[800px] rounded-full bg-[#bfa184]/15 blur-[200px] mix-blend-screen will-change-transform" />

        {/* Film grain / Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* PORTRAIT SECTION CONTAINER */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[85vw] lg:w-[80vw] max-w-[1400px] z-10 pointer-events-none flex items-center justify-end">
        <Image
          src={getFramePath(currentFrame)}
          alt={`Cinematic portrait frame ${currentFrame}`}
          fill
          priority
          unoptimized
          sizes="(max-width: 768px) 100vw, 80vw"
          className="
            object-contain
            object-center md:object-right
            opacity-100
            mix-blend-lighten
            [mask-image:radial-gradient(ellipse_at_center,black_40%,rgba(0,0,0,0.5)_70%,transparent_100%)]
            [-webkit-mask-image:radial-gradient(ellipse_at_center,black_40%,rgba(0,0,0,0.5)_70%,transparent_100%)]
            md:[mask-image:radial-gradient(ellipse_at_65%_50%,black_45%,rgba(0,0,0,0.6)_75%,transparent_100%)]
            md:[-webkit-mask-image:radial-gradient(ellipse_at_65%_50%,black_45%,rgba(0,0,0,0.6)_75%,transparent_100%)]
          "
        />
      </div>

      {/* FULL SCREEN CINEMATIC OVERLAYS (Crucial for removing vertical seams) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Massive soft left haze spanning entire page to blend portrait into text background globally */}
        <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent" />

        {/* Ambient atmospheric haze sweeping across the center, lightened to restore face visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#050505]/10 to-transparent" />

        {/* Deep bottom cinematic ground fade globally applied, reduced intensity */}
        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />

        {/* Top ceiling fade globally applied, reduced intensity */}
        <div className="absolute inset-x-0 top-0 h-[20%] bg-gradient-to-b from-[#050505] via-[#050505]/50 to-transparent" />

        {/* Right edge fade so portrait dissolves before the screen edge, reduced opacity */}
        <div className="absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-[#050505]/30 to-transparent" />

        {/* Global connective radial vignette, shifted and lightened to avoid shadowing the subject */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(5,5,5,0.15)_80%,rgba(5,5,5,0.7)_100%)]" />
      </div>

      {/* HIDDEN PRELOAD */}
      <div className="hidden" aria-hidden="true">
        {nearbyFrames.map((index) => (
          <img
            key={`preload-${index}`}
            src={getFramePath(index)}
            alt=""
            decoding="async"
            fetchPriority="low"
          />
        ))}
      </div>
    </div>
  );
}

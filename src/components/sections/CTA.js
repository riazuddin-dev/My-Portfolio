"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export function CTA() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref}
      className={`relative w-full min-h-[50vh] flex flex-col items-center justify-center z-20 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="text-center max-w-2xl px-6">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">
          Let&apos;s build something impactful.
        </h2>
        <p className="text-foreground-muted font-mono text-sm tracking-widest uppercase mb-10">
          Available for frontend roles & freelance work.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="/contact"
            className="group relative px-8 py-4 bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            <span className="relative z-10 font-mono text-sm tracking-widest uppercase text-foreground">
              Contact Me
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          </Link>
          
          <a 
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-transparent border border-white/5 rounded-full overflow-hidden transition-all duration-500 hover:border-white/20 text-foreground-muted hover:text-foreground"
          >
            <span className="relative z-10 font-mono text-sm tracking-widest uppercase">
              View Resume
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

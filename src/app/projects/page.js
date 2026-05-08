"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "High-performance headless storefront built with Next.js App Router and Shopify. Sub-second page loads and seamless cart synchronization.",
    tags: ["Next.js", "Tailwind CSS", "Shopify API"],
    align: "left"
  },
  {
    title: "Fintech Dashboard",
    description: "Real-time data visualization and portfolio management interface. Secure, accessible, and performant.",
    tags: ["React", "Framer Motion", "D3.js"],
    align: "right"
  },
  {
    title: "AI Documentation Tool",
    description: "Automated API documentation generator powered by LLMs with a rich interactive reading experience.",
    tags: ["TypeScript", "Next.js", "OpenAI"],
    align: "left"
  }
];

export default function Projects() {
  return (
    <main className="relative min-h-screen bg-background text-foreground flex flex-col px-6 py-24 md:py-32 items-center overflow-x-hidden">
      <div className="absolute top-8 left-8 z-50">
        <Link href="/" className="font-mono text-sm tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">
          ← Back
        </Link>
      </div>

      <div className="max-w-6xl w-full flex flex-col gap-32">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center md:text-left mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
            Production Quality.
          </h1>
          <p className="text-xl md:text-2xl text-foreground-muted font-light">
            Focus on performance, design, and usability.
          </p>
        </motion.section>

        <div className="flex flex-col gap-32 md:gap-48 pb-32">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className={`flex flex-col md:flex-row gap-12 items-center ${project.align === "right" ? "md:flex-row-reverse" : ""}`}
            >
              <div className="w-full md:w-3/5 group relative aspect-[4/3] rounded-sm overflow-hidden bg-white/5 border border-white/10 transition-all duration-700 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent mix-blend-overlay" />
                <div className="w-full h-full transform transition-transform duration-1000 ease-out group-hover:scale-105 bg-white/5 flex items-center justify-center">
                   <span className="font-mono text-xs text-white/30 uppercase tracking-widest">Image Placeholder</span>
                </div>
              </div>

              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <span className="font-mono text-xs tracking-widest uppercase text-foreground-muted mb-4">0{index + 1}</span>
                <h2 className="text-3xl font-light mb-6 tracking-tight">{project.title}</h2>
                <p className="text-foreground-muted leading-relaxed font-light mb-8 text-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4 font-mono text-xs uppercase tracking-widest opacity-60">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

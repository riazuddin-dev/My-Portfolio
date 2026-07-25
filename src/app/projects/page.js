"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "AetherMind",
    subtitle: "Agentic AI Knowledge System",
    description:
      "An agentic AI knowledge platform that reasons over your data — built with Next.js, Express, MongoDB, and Groq-powered intelligence for fast, useful answers.",
    tags: ["Next.js", "Express", "MongoDB", "Groq AI"],
    link: "https://aether-mind-client.vercel.app",
    image: "/projects/aethermind.svg",
    align: "left",
  },
  {
    title: "Property Platform",
    subtitle: "Real Estate Platform",
    description:
      "A polished real estate experience for browsing and discovering properties with a responsive Next.js interface and production-ready flows.",
    tags: ["Next.js", "Real Estate", "Vercel"],
    link: "https://property-platfrom.vercel.app",
    image: "/projects/property.svg",
    align: "right",
  },
  {
    title: "Luminork",
    subtitle: "Full-Stack Application",
    description:
      "A complete full-stack product experience focused on performance, clarity, and a refined modern interface from client to API.",
    tags: ["Full-Stack", "Next.js", "API"],
    link: "https://luminork-client.vercel.app",
    image: "/projects/luminork.svg",
    align: "left",
  },
  {
    title: "Pet Adoption",
    subtitle: "Adoption Website",
    description:
      "A warm, user-friendly pet adoption site designed to help animals find forever homes through simple discovery and clear calls to action.",
    tags: ["Web App", "Adoption", "UI/UX"],
    link: "https://petadeption.vercel.app",
    image: "/projects/petadoption.svg",
    align: "right",
  },
  {
    title: "SunCart",
    subtitle: "E-Commerce Platform",
    description:
      "A premium e-commerce experience with a refined storefront, seamless product discovery, and a polished checkout journey designed for conversion.",
    tags: ["E-Commerce", "Next.js", "React"],
    link: "https://suncart-psi.vercel.app",
    image: "/projects/suncart-cover.svg",
    align: "left",
  },
  {
    title: "Keen Keeper",
    subtitle: "Project Management",
    description:
      "A productivity-focused project management app for organizing work, tracking progress, and keeping teams aligned day to day.",
    tags: ["Productivity", "Full-Stack", "Web App"],
    link: "https://keen-keeper-project-roan.vercel.app",
    image: "/projects/keenkeeper.svg",
    align: "right",
  },
];

export default function Projects() {
  return (
    <main className="relative min-h-screen bg-background text-foreground flex flex-col px-6 py-24 md:py-32 items-center overflow-x-hidden">
      <div className="absolute top-8 left-8 z-50">
        <Link
          href="/"
          className="font-mono text-sm tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity"
        >
          ← Back
        </Link>
      </div>

      <div className="max-w-6xl w-full flex flex-col gap-24 md:gap-32">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center md:text-left mb-8"
        >
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#c49a6c] mb-4">
            Featured Work
          </p>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
            Projects that ship.
          </h1>
          <p className="text-xl md:text-2xl text-foreground-muted font-light max-w-2xl">
            Best projects first: agentic AI, property, jobs, adoption, e-commerce, and productivity — built for performance and clarity.
          </p>
        </motion.section>

        <div className="flex flex-col gap-28 md:gap-40 pb-32">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className={`group flex flex-col md:flex-row gap-10 md:gap-14 items-center ${
                project.align === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-3/5 relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 transition-all duration-700 group-hover:border-[#c49a6c]/40 group-hover:shadow-[0_0_50px_rgba(196,154,108,0.12)] group-hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c49a6c]/10 to-transparent mix-blend-overlay z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/5 transition-colors duration-700 z-10 pointer-events-none" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover object-center transform transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-5 left-5 z-20">
                  <span className="px-2.5 py-1 rounded border border-[#c49a6c]/40 bg-black/70 font-mono text-[10px] tracking-widest text-[#c49a6c]">
                    0{index + 1}
                  </span>
                </div>
                <div className="absolute bottom-5 right-5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-emerald-500/40 font-mono text-[9px] tracking-widest uppercase text-emerald-400/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Visit live
                  </span>
                </div>
              </div>

              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <span className="font-mono text-xs tracking-widest uppercase text-[#c49a6c]/80 mb-3">
                  {project.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight group-hover:text-[#c49a6c] transition-colors duration-500">
                  {project.title}
                </h2>
                <p className="text-foreground-muted leading-relaxed font-light mb-8 text-base md:text-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 font-mono text-[10px] uppercase tracking-widest text-white/50 group-hover:border-[#c49a6c]/40 group-hover:text-[#c49a6c] transition-all duration-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 group-hover:text-[#c49a6c] transition-colors duration-500">
                  Open project
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
}

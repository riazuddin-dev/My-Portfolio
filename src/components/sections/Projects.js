"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { SocialLinks } from "../SocialLinks";

const projects = [
  {
    id: "01",
    title: "Suncart",
    description: "A premium luxury e-commerce platform offering a seamless and intuitive shopping experience.",
    tech: ["JavaScript", "React", "Next.js"],
    link: "https://suncart-psi.vercel.app/",
    image: "/projects/suncart.png"
  },
  {
    id: "02",
    title: "Portfolio / Web Experience",
    description: "An immersive digital portfolio leveraging advanced cinematic scrollytelling and modern web design.",
    tech: ["React", "Tailwind CSS"],
    link: "https://incredible-kataifi-009799.netlify.app/",
    image: "/projects/portfolio.png"
  },
  {
    id: "03",
    title: "Github Issue Tracker",
    description: "A streamlined, highly responsive issue tracking dashboard built to optimize development workflows.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://riazuddin-dev.github.io/B13-A5-Github-Issue-Tracker/homepage.html",
    image: "/projects/tracker.png"
  },
  {
    id: "04",
    title: "TechWave",
    description: "A high-performance technology landing page featuring sleek UI components and polished animations.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://riazuddin-dev.github.io/B13-A02-TechWave/",
    image: "/projects/techwave.png"
  },
  {
    id: "05",
    title: "Knowledge Vault",
    description: "An elegant, centralized repository interface designed for organizing and sharing critical knowledge.",
    tech: ["HTML", "CSS"],
    link: "https://riazuddin-dev.github.io/B13-A01-Knowledge-Vault/",
    image: "/projects/vault.png"
  },
  {
    id: "06",
    title: "Assignment Project",
    description: "A foundational front-end build demonstrating rigorous responsive design and clean aesthetic principles.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://riazuddin-dev.github.io/Assinment-4/",
    image: "/projects/assignment.png"
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Alternating directional animation for project cards: cross-slide entrance
const cardVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? 30 : -30,
  }),
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.1 + 0.1, // Smooth stagger based on index
    }
  })
};

export function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="projects"
      ref={ref}
      // Section wrapper dynamically applies entrance animations based on scroll intersection
      className={`relative w-full min-h-screen flex flex-col justify-center z-10 px-6 md:px-20 py-20 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="flex-1 flex w-full relative items-center justify-between z-10">
        {/* Global Vertical Left Line */}
        <div className="absolute left-0 md:left-0 top-[-20%] bottom-[-20%] w-[1px] bg-gradient-to-b from-transparent via-[#c49a6c]/20 to-transparent pointer-events-none hidden md:block" />
        <div className="absolute left-[-2.5px] top-[30%] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#c49a6c] shadow-[0_0_15px_rgba(196,154,108,1)] hidden md:block" />
        <div className="absolute left-[-2.5px] top-[60%] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#c49a6c] shadow-[0_0_15px_rgba(196,154,108,1)] hidden md:block" />

        <div className="flex flex-col xl:flex-row justify-start items-start xl:items-center w-full max-w-[1280px] mr-auto relative gap-8 lg:gap-16 md:pl-12 lg:pl-16 transition-all duration-700 ease-out">

          {/* Left Side Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center max-w-[320px] shrink-0 mt-10 xl:mt-0 relative z-20"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-6 mb-8">
              <span className="font-mono text-[11px] tracking-[0.25em] font-medium text-[#c49a6c]">
                04
              </span>
              <div className="w-8 h-[1px] bg-[#c49a6c]/50" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/50">
                MY WORK
              </span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] font-medium tracking-tight text-white leading-[1.1] mb-6">
              PROJECTS THAT <br />
              TELL <br />
              <span className="font-medium text-[#c49a6c]">MY STORY.</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-white/60 font-light text-[14px] leading-[1.8] max-w-[280px] tracking-wide mb-10">
              A collection of work that reflects my passion for building meaningful, performant and beautiful digital experiences.
            </motion.p>

            <motion.a
              variants={fadeUp}
              href="https://github.com/riazuddin-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-white/10 rounded-full px-6 py-3.5 font-mono text-[9px] tracking-[0.25em] uppercase text-white/60 hover:text-[#c49a6c] hover:border-[#c49a6c]/60 hover:bg-[#c49a6c]/10 transition-all duration-500 flex items-center justify-between w-full max-w-[240px] shadow-sm hover:shadow-md hover:shadow-[#c49a6c]/20 mb-8"
            >
              VIEW GITHUB PROFILE
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/30 group-hover:text-[#c49a6c] transition-colors group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </motion.a>

            <motion.div variants={fadeUp} className="flex gap-4">
              <SocialLinks iconSize="w-10 h-10" />
            </motion.div>
          </motion.div>

          {/* Right Side Grid */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-5 w-full xl:max-w-[780px] pr-2 md:pr-4 pb-20 md:pb-10 relative z-20 mt-4 md:mt-0">
            {projects.map((project, index) => (
              <motion.a
                custom={index}
                variants={cardVariants}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id}
                className="group relative flex flex-col sm:flex-row bg-[#050505]/95 border border-white/5 rounded-[16px] overflow-hidden hover:border-[#c49a6c]/40 transition-all duration-500 hover:shadow-md hover:shadow-[#c49a6c]/10 hover:-translate-y-1"
              >
                {/* Glowing Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-[1px] border-l-[1px] border-[#c49a6c] rounded-tl-[16px] opacity-0 group-hover:opacity-40 transition-all duration-700 transform -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-[1px] border-r-[1px] border-[#c49a6c] rounded-tr-[16px] opacity-0 group-hover:opacity-40 transition-all duration-700 transform translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[1px] border-l-[1px] border-[#c49a6c] rounded-bl-[16px] opacity-0 group-hover:opacity-40 transition-all duration-700 transform -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[1px] border-r-[1px] border-[#c49a6c] rounded-br-[16px] opacity-0 group-hover:opacity-40 transition-all duration-700 transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none" />

                {/* Image Container (Top on Mobile, Left on Desktop) */}
                <div className="relative w-full h-[180px] sm:h-auto sm:w-[40%] shrink-0 overflow-hidden bg-[#000]">
                  {/* Subtle Inner glow for image integration */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050505]/90 z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/10 transition-colors duration-700 z-10 pointer-events-none" />

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover object-center group-hover:scale-[1.05] transition-transform duration-1000 ease-[0.16,1,0.3,1] opacity-60 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                  />

                  {/* Number Badge */}
                  <div className="absolute top-5 left-5 z-20">
                    <div className="px-2.5 py-0.5 rounded-[4px] border border-[#c49a6c]/40 bg-black/80 group-hover:border-[#c49a6c] group-hover:bg-[#c49a6c]/20 transition-all duration-500 shadow-sm">
                      <span className="font-mono text-[9px] text-[#c49a6c] tracking-wider">{project.id}</span>
                    </div>
                  </div>
                </div>

                {/* Content Container (Right) */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 relative z-10 justify-center bg-[#050505]/90 group-hover:bg-[#0a0705]/90 transition-colors duration-700 border-l border-white/5 group-hover:border-[#c49a6c]/30">
                  {/* Premium Glass Reflection Sweep */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out transform group-hover:translate-x-[150%] -translate-x-[150%] pointer-events-none" />

                  {/* External Link Icon */}
                  <div className="absolute top-5 right-5 z-20 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-[#c49a6c] transition-colors duration-500 group-hover:scale-110 transform"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </div>

                  <h3 className="text-[13px] font-medium tracking-widest uppercase text-white mb-3 group-hover:text-[#c49a6c] transition-colors duration-500 line-clamp-1 mt-2 sm:mt-0">
                    {project.title}
                  </h3>

                  <p className="text-white/40 text-[11px] font-light leading-[1.8] mb-6 flex-1 line-clamp-3 group-hover:text-white/60 transition-colors duration-500">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-[#111] border border-white/10 text-white/40 font-mono text-[8px] uppercase tracking-widest group-hover:border-[#c49a6c]/50 group-hover:text-[#c49a6c] group-hover:bg-[#c49a6c]/10 transition-all duration-500 hover:scale-105">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 pointer-events-none hidden md:flex"
      >
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#c49a6c]">SCROLL</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#c49a6c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

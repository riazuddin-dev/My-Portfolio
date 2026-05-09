"use client";
import { motion, useTransform } from "framer-motion";
import { useScrollytelling } from "../ScrollytellingProvider";
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerGroup = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08, // Stagger each individual badge
      delayChildren: 0.1,
    },
  },
};

const fadeUpBadge = {
  hidden: { opacity: 0, y: 15, filter: "blur(2px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const skillGroups = [
  {
    title: "FRONTEND ENGINEERING",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    skills: [
      {
        name: "HTML",
        color: "#E34F26",
        short: "5",
        bg: "#E34F26",
        text: "white",
      },
      {
        name: "CSS",
        color: "#1572B6",
        short: "3",
        bg: "#1572B6",
        text: "white",
      },
      {
        name: "javascript",
        color: "#F7DF1E",
        short: "JS",
        bg: "#F7DF1E",
        text: "black",
      },
      {
        name: "typescript",
        color: "#3178C6",
        short: "TS",
        bg: "#3178C6",
        text: "white",
      },
      { name: "react", color: "#61DAFB", type: "react" },
      {
        name: "next.js",
        color: "#ffffff",
        short: "N",
        bg: "white",
        text: "black",
        circle: true,
      },
    ],
  },
  {
    title: "STYLING & DESIGN",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    ),
    skills: [
      { name: "sass", color: "#CC6699", type: "sass" },
      { name: "tailwind css", color: "#38B2AC", type: "tailwind" },
      { name: "framer motion", color: "#E0234E", type: "framer" },
      { name: "GSAP", color: "#8A2BE2", type: "gsap" },
      { name: "figma", color: "#F24E1E", type: "figma" },
    ],
  },
  {
    title: "TOOLS & OTHERS",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
    skills: [
      { name: "git", color: "#F05032", type: "git" },
      { name: "github", color: "#ffffff", type: "github" },
      { name: "vs code", color: "#007ACC", type: "vscode" },
      { name: "vite", color: "#646CFF", type: "vite" },
    ],
  },
];

// Helper to render icon shape based on skill data
const renderSkillIcon = (skill) => {
  if (skill.short) {
    return (
      <div
        className={`w-5 h-5 flex items-center justify-center text-[10px] font-bold ${skill.circle ? "rounded-full" : "rounded-sm"}`}
        style={{ backgroundColor: skill.bg, color: skill.text }}
      >
        {skill.short}
      </div>
    );
  }
  if (skill.type === "react") {
    return (
      <div className="w-5 h-5 flex items-center justify-center text-[#61DAFB]">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 22.625A10.625 10.625 0 1 1 22.625 12 10.637 10.637 0 0 1 12 22.625Zm0-19.25A8.625 8.625 0 1 0 20.625 12 8.635 8.635 0 0 0 12 3.375Zm0 11.125a2.5 2.5 0 1 1 2.5-2.5 2.503 2.503 0 0 1-2.5 2.5Zm0-3a.5.5 0 1 0 .5.5.5.5 0 0 0-.5-.5Zm-5.32 6.544a.75.75 0 0 1-.264-1.028l8.25-14a.75.75 0 1 1 1.288.768l-8.25 14a.75.75 0 0 1-1.024.26Zm10.64 0a.75.75 0 0 1-1.024-.26l-8.25-14a.75.75 0 0 1 1.288-.768l8.25 14a.75.75 0 0 1-.264 1.028Z" />
        </svg>
      </div>
    );
  }
  if (skill.type === "tailwind") {
    return (
      <div className="w-5 h-5 flex items-center justify-center text-[#38B2AC]">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 6.04c-2.4 0-4.2.8-5.4 2.4-1.2 1.6-1.5 3.4-1.3 5.4.1 1.4.8 2.7 1.8 3.8 1.5 1.5 3.3 2.1 5.3 1.9 2-.2 3.6-1.2 4.9-2.8 1.3-1.6 1.8-3.5 1.5-5.6-.2-1.4-.8-2.6-1.8-3.7-1.4-1.4-3-2-4.9-1.8-.1 0-.1 0 0 0zM7 6.63c-1.5 0-2.8.5-4 1.5C1.8 9.3 1 10.9.8 12.8c-.2 1.7.3 3.3 1.2 4.6l.8-.9c-.6-1-.9-2.1-.8-3.3.1-1.3.7-2.4 1.6-3.3.9-.9 2-1.4 3.2-1.5 1.2-.1 2.3.3 3.2 1 .1-.1.2-.2.3-.3C9.4 7.6 8.3 6.8 7 6.63z" />
        </svg>
      </div>
    );
  }
  if (skill.type === "github") {
    return (
      <div className="w-5 h-5 flex items-center justify-center text-white">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1 1.8.8 2.3 1.2.5-.5 1-1.3 1.3-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.3 1.3-3.1-.1-.3-.6-1.5.1-3.1 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.1.8.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
        </svg>
      </div>
    );
  }
  if (skill.type === "sass") {
    return (
      <div className="w-5 h-5 text-[#CC6699] font-serif italic text-sm font-bold flex items-center justify-center">
        S
      </div>
    );
  }
  if (skill.type === "gsap") {
    return (
      <div className="w-5 h-5 bg-[#8A2BE2] text-white rounded-full flex items-center justify-center text-[7px] font-bold">
        GSAP
      </div>
    );
  }
  if (skill.type === "figma") {
    return (
      <div className="w-5 h-5 flex flex-col items-center justify-center gap-[1px]">
        <div className="flex gap-[1px]">
          <div className="w-[6px] h-[6px] bg-[#F24E1E] rounded-tl-full rounded-bl-full" />
          <div className="w-[6px] h-[6px] bg-[#FF7262] rounded-full" />
        </div>
        <div className="flex gap-[1px]">
          <div className="w-[6px] h-[6px] bg-[#A259FF] rounded-tl-full rounded-bl-full" />
          <div className="w-[6px] h-[6px] bg-[#1ABCFE] rounded-full" />
        </div>
        <div className="flex gap-[1px]">
          <div className="w-[6px] h-[6px] bg-[#0ACF83] rounded-tl-full rounded-bl-full rounded-br-full" />
          <div className="w-[6px] h-[6px]" />
        </div>
      </div>
    );
  }
  // Generic colored square fallback
  return (
    <div
      className="w-4 h-4 rounded-sm"
      style={{ backgroundColor: skill.color }}
    />
  );
};

export function Skills() {
  const { smoothProgress } = useScrollytelling();

  // Range: 0.38 to 0.58
  const opacity = useTransform(
    smoothProgress,
    [0.38, 0.45, 0.52, 0.58],
    [0, 1, 1, 0],
  );
  const pointerEvents = useTransform(smoothProgress, (p) =>
    p > 0.35 && p < 0.6 ? "auto" : "none",
  );
  const y = useTransform(smoothProgress, [0.38, 0.58], ["5%", "-5%"]);

  return (
    <motion.section
      style={{ opacity, y, pointerEvents }}
      className="fixed inset-0 flex flex-col justify-center z-10 px-12 md:px-20"
    >
      {/* Cinematic Background Lines / Radar Effect */}
      <div className="absolute top-0 right-0 bottom-0 w-[50%] pointer-events-none overflow-hidden opacity-30 mix-blend-screen hidden lg:block">
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#c49a6c]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#c49a6c]/5" />
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-[#c49a6c]/10" />
      </div>

      <div className="flex-1 flex px-12 md:px-20 relative items-center">
        {/* Vertical Left Line */}
        <div className="absolute left-12 md:left-20 top-[-20%] bottom-[-20%] w-[1px] bg-gradient-to-b from-transparent via-[#c49a6c]/30 to-transparent pointer-events-none hidden md:block" />
        <div className="absolute left-[46px] md:left-[78px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#c49a6c] shadow-[0_0_15px_rgba(196,154,108,1)] hidden md:block" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center max-w-4xl md:ml-12 w-full relative z-10 pt-12 md:pt-0"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-6 mb-8"
          >
            <span className="font-mono text-[11px] tracking-[0.25em] font-medium text-[#c49a6c]">
              03
            </span>
            <div className="w-8 h-[1px] bg-[#c49a6c]/50" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/50">
              MY SKILLS
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-[2.25rem] sm:text-[3rem] md:text-[4rem] font-medium tracking-tight text-white leading-[1.1] mb-4"
          >
            SKILLS THAT POWER <br />
            <span className="font-medium text-[#c49a6c] drop-shadow-[0_0_20px_rgba(196,154,108,0.5)]">
              MY CREATIONS.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-white/60 font-light text-[15px] md:text-[16px] leading-[1.8] max-w-md tracking-wide mb-14"
          >
            The technologies, tools, and workflows I use to build fast, scalable
            and user-focused web experiences.
          </motion.p>

          <div className="flex flex-col gap-10">
            {skillGroups.map((group, groupIndex) => (
              <motion.div
                key={groupIndex}
                variants={staggerGroup}
                className="flex flex-col gap-5"
              >
                <motion.div
                  variants={fadeUpBadge}
                  className="flex items-center gap-3 text-[#c49a6c]"
                >
                  {group.icon}
                  <h3 className="text-[11px] font-mono tracking-[0.2em] font-medium uppercase">
                    {group.title}
                  </h3>
                </motion.div>

                <div className="grid grid-cols-2 md:flex md:flex-wrap gap-3 md:gap-4 w-full">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={fadeUpBadge}
                      className="group relative flex items-center gap-2.5 md:gap-3.5 bg-[#0a0a0a]/60 backdrop-blur-md border border-white/5 border-b-[#c49a6c]/30 px-3 md:px-5 py-2.5 md:py-3 rounded-xl hover:border-white/10 hover:border-b-[#c49a6c]/80 hover:bg-[#c49a6c]/10 transition-all duration-500 hover:-translate-y-1 shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_25px_rgba(196,154,108,0.25)] cursor-default overflow-hidden w-full md:w-auto"
                    >
                      {/* Premium Glass Reflection Effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform group-hover:translate-x-full -translate-x-full hidden md:block" />

                      <div className="relative z-10 transition-transform duration-500 group-hover:scale-110 shrink-0">
                        {renderSkillIcon(skill)}
                      </div>
                      <span className="text-[11px] sm:text-[12px] md:text-[13px] font-medium text-white/90 tracking-wide relative z-10 group-hover:text-white transition-colors duration-300 truncate">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

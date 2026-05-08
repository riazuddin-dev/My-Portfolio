"use client";

import { useState, useEffect } from "react";
import { motion, useTransform } from "framer-motion";
import { useScrollytelling } from "../ScrollytellingProvider";
import { SocialLinks } from "../SocialLinks";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const fadeUpLine = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const textShimmer = {
  hidden: { backgroundPosition: "0% 50%" },
  visible: {
    backgroundPosition: ["0% 50%", "200% 50%"],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    }
  }
};

const textBloom = {
  hidden: { opacity: 0.3, filter: "blur(15px)" },
  visible: {
    opacity: 0.7,
    filter: "blur(25px)",
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

const waveAnimation = {
  hidden: { rotate: 0 },
  visible: {
    rotate: [0, 15, -10, 15, -5, 0],
    y: [0, -4, 2, -2, 0, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
      repeatDelay: 2
    }
  }
};

const sparkAnimation = {
  hidden: { opacity: 0, scale: 0, y: 0, x: 0 },
  visible: {
    opacity: [0, 1, 0],
    scale: [0, 1.2, 0],
    y: [0, -15],
    x: [0, 8],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeOut",
      repeatDelay: 3
    }
  }
};

const TYPEWRITER_PHRASES = [
  "Frontend Developer • Next.js Specialist",
  "Crafting fast, scalable web applications",
  "Building clean modern user experiences",
  "Creating responsive and user-centric UI",
  "Passionate about cinematic frontend design"
];

function TypewriterEffect() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const fullText = TYPEWRITER_PHRASES[currentPhraseIndex];

    if (!isDeleting && currentText === fullText) {
      // Pause at the end of typing
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && currentText === '') {
      // Pause briefly before typing next string
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
      }, 300);
    } else {
      // Typing speed: faster when deleting
      const typeSpeed = isDeleting ? 25 : 50;
      timeout = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + (isDeleting ? -1 : 1)));
      }, typeSpeed);
    }
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex]);

  return (
    <span className="inline-flex items-center min-h-[28px] md:min-h-[32px] font-mono tracking-[0.1em] text-[12px] md:text-[14px] uppercase whitespace-nowrap">
      <motion.span 
        variants={textShimmer}
        initial="hidden"
        animate="visible"
        className="text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(196,154,108,0.3)]"
        style={{
          backgroundImage: "linear-gradient(to right, #c49a6c, #fff4e6, #f2a65a, #c49a6c)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
        }}
      >
        {currentText}
      </motion.span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="ml-[8px] w-[2px] h-[14px] md:h-[16px] bg-[#c49a6c] inline-block shadow-[0_0_8px_rgba(196,154,108,0.6)] transform -translate-y-[1px]"
      />
    </span>
  );
}

export function Intro() {
  const { smoothProgress } = useScrollytelling();

  // Range: 0 to 0.2
  const opacity = useTransform(smoothProgress, [0, 0.15, 0.2], [1, 1, 0]);
  const pointerEvents = useTransform(smoothProgress, (p) => (p < 0.18) ? "auto" : "none");
  const y = useTransform(smoothProgress, [0, 0.2], ["0%", "-5%"]);

  // Helper to scroll to specific section
  const scrollTo = (vhMultiplier) => {
    window.scrollTo({
      top: window.innerHeight * vhMultiplier,
      behavior: "smooth"
    });
  };

  return (
    <motion.section
      style={{ opacity, y, pointerEvents }}
      className="fixed inset-0 flex flex-col z-10"
    >
      {/* Top Navigation */}
      <nav className="w-full px-12 md:px-20 py-8 flex justify-between items-center">
        <div
          onClick={() => scrollTo(0)}
          className="font-sans text-[20px] tracking-wide font-semibold text-[#c49a6c] cursor-pointer drop-shadow-[0_0_8px_rgba(196,154,108,0.5)]"
        >
          RU.
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-12 lg:gap-16 font-mono text-[9px] tracking-[0.2em] font-medium uppercase text-white/50">
          <button onClick={() => scrollTo(1)} className="hover:text-white transition-colors cursor-pointer">
            ABOUT
          </button>
          <button onClick={() => scrollTo(2)} className="hover:text-white transition-colors cursor-pointer">
            SKILLS
          </button>
          <button onClick={() => scrollTo(3)} className="hover:text-white transition-colors cursor-pointer">
            PROJECTS
          </button>
          <button onClick={() => scrollTo(4)} className="hover:text-white transition-colors cursor-pointer">
            CONTACT
          </button>
        </div>

        <button
          onClick={() => scrollTo(4)}
          className="group relative border border-white/20 rounded-full px-6 py-2.5 font-mono text-[9px] tracking-[0.2em] font-medium uppercase text-white/70 hover:border-[#c49a6c]/50 transition-all duration-500 overflow-hidden flex items-center gap-2.5 cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#c49a6c]/0 via-[#c49a6c]/10 to-[#c49a6c]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">LET&apos;S CONNECT</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transform -translate-y-[1px] text-white/50 group-hover:text-[#c49a6c] transition-colors duration-300"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
        </button>
      </nav>

      {/* Main Content - Left Aligned but shifted right for balance */}
      <div className="flex-1 flex px-12 md:px-20 relative h-full items-center">

        {/* Left vertical tracking line - very subtle */}
        <div className="absolute left-[48px] md:left-[80px] top-[15%] w-[1px] h-[35%] bg-gradient-to-b from-white/10 to-transparent pointer-events-none hidden md:block" />
        <div className="absolute left-[46.5px] md:left-[78.5px] top-[40%] w-[4px] h-[4px] rounded-full bg-[#c49a6c] shadow-[0_0_12px_rgba(196,154,108,1)] hidden md:block" />

        {/* Content Container - Increased margin-left to shift right and balance composition */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center max-w-3xl md:ml-32 lg:ml-48 xl:ml-56 h-full pb-[10%]"
        >

          <motion.div variants={fadeUpLine} className="flex items-center gap-6 mb-8 mt-[15%]">
            <div className="flex items-center">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                className="h-[1px] bg-gradient-to-r from-[#c49a6c] to-transparent mr-4 hidden sm:block"
              />
              <span className="font-mono text-[10px] tracking-[0.2em] font-medium text-[#c49a6c]">
                01
              </span>
            </div>
            <div className="w-12 h-[1px] bg-white/10" />
            <span className="font-mono text-[9px] tracking-[0.3em] font-medium uppercase text-white/30">
              INTRO
            </span>
          </motion.div>

          {/* Headline block - each sentence on its own clean line */}
          <div className="flex flex-col gap-2 mb-6">
            <motion.div variants={fadeUpLine} className="text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] font-light tracking-tight text-white leading-[1.1] font-sans whitespace-nowrap flex items-center">
              Hi 
              <div className="relative inline-flex items-center justify-center mx-2 md:mx-4">
                {/* Waving Emoji */}
                <motion.span
                  variants={waveAnimation}
                  initial="hidden"
                  animate="visible"
                  className="inline-block origin-bottom-right z-10"
                >
                  👋
                </motion.span>
                
                {/* Amber Glow/Trail Behind Hand */}
                <motion.div
                  variants={waveAnimation}
                  initial="hidden"
                  animate="visible"
                  className="absolute inset-0 bg-[#c49a6c]/20 blur-xl rounded-full origin-bottom-right pointer-events-none z-0"
                />

                {/* Floating Particle Spark */}
                <motion.div
                  variants={sparkAnimation}
                  initial="hidden"
                  animate="visible"
                  className="absolute top-0 right-0 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#d4af37] rounded-full shadow-[0_0_10px_rgba(212,175,55,1)] pointer-events-none z-20"
                />
              </div>
              , I&apos;m
            </motion.div>
            <motion.div variants={fadeUpLine} className="text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] font-medium tracking-tight leading-[1.1] font-sans whitespace-nowrap relative">
              
              {/* Backing Volumetric Haze Layer */}
              <motion.span
                variants={textShimmer}
                initial="hidden"
                animate="visible"
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: "linear-gradient(to right, #b87333, #d4af37, #fff4e6, #ffcba4, #c87d46, #b87333)",
                  backgroundSize: "200% auto",
                  filter: "blur(24px)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                  opacity: 0.8
                }}
                aria-hidden="true"
              >
                MD RIAZ UDDIN
              </motion.span>
              
              {/* Pulsing Cinematic Light Reflection */}
              <motion.span
                variants={textBloom}
                initial="hidden"
                animate="visible"
                className="absolute inset-0 z-0 mix-blend-screen"
                style={{
                  backgroundImage: "linear-gradient(to right, #d4af37, #ffffff, #d4af37)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
                aria-hidden="true"
              >
                MD RIAZ UDDIN
              </motion.span>

              {/* Main Shimmering Typography Layer */}
              <motion.span
                variants={textShimmer}
                initial="hidden"
                animate="visible"
                className="relative inline-block z-10 drop-shadow-[0_0_5px_rgba(255,244,230,0.4)]"
                style={{
                  backgroundImage: "linear-gradient(to right, #b87333, #d4af37, #fff4e6, #ffcba4, #c87d46, #b87333)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                MD RIAZ UDDIN
              </motion.span>

            </motion.div>
          </div>

          <motion.div variants={fadeUpLine} className="max-w-[700px] mt-4 mb-6">
            <TypewriterEffect />
          </motion.div>

          <motion.div variants={fadeUpLine} className="mt-14">
            <button
              onClick={() => scrollTo(1)}
              className="group relative border border-white/20 rounded-full px-8 py-3.5 font-mono text-[10px] tracking-[0.2em] font-medium uppercase text-white hover:border-[#c49a6c]/50 transition-all duration-500 overflow-hidden flex items-center gap-4 cursor-pointer w-fit"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#c49a6c]/0 via-[#c49a6c]/10 to-[#c49a6c]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 text-white/70 group-hover:text-white transition-colors duration-300">SCROLL TO EXPLORE</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transform translate-y-[1px] text-white/50 group-hover:text-[#c49a6c] transition-colors duration-300"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
            </button>
          </motion.div>

        </motion.div>
      </div>

      {/* Right Scroll Pagination Indicator */}
      <div className="absolute right-12 md:right-20 top-1/2 -translate-y-1/2 flex flex-col gap-4 hidden md:flex pointer-events-none">
        <div className="w-1.5 h-1.5 rounded-full bg-[#c49a6c] shadow-[0_0_8px_rgba(196,154,108,0.8)]" />
        <div className="w-1 h-1 rounded-full bg-white/20 mx-auto" />
        <div className="w-1 h-1 rounded-full bg-white/20 mx-auto" />
        <div className="w-1 h-1 rounded-full bg-white/20 mx-auto" />
        <div className="w-1 h-1 rounded-full bg-white/20 mx-auto" />
        <div className="w-1 h-1 rounded-full bg-white/20 mx-auto" />
      </div>

      {/* Bottom Left Circular Logo */}
      <div className="absolute left-12 md:left-20 bottom-12">
        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#c49a6c]/80 font-sans text-[10px] hover:text-[#c49a6c] hover:border-[#c49a6c]/50 hover:shadow-[0_0_15px_rgba(196,154,108,0.3)] transition-all duration-500 cursor-pointer">
          RU
        </div>
      </div>

      {/* Bottom Right Social Links */}
      <div className="absolute right-12 md:right-20 bottom-12 z-20 pointer-events-auto">
        <SocialLinks iconSize="w-10 h-10" />
      </div>
    </motion.section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      ref={ref}
      className={`relative w-full min-h-screen flex flex-col justify-center z-10 px-6 md:px-12 lg:px-20 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="flex-1 flex w-full relative items-center justify-between z-10">

        {/* Global Vertical Left Line */}
        <div className="absolute left-0 md:left-0 top-[-20%] bottom-[-20%] w-[1px] bg-gradient-to-b from-transparent via-[#c49a6c]/20 to-transparent pointer-events-none hidden md:block" />
        <div className="absolute left-[-2.5px] top-[35%] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#c49a6c] shadow-[0_0_15px_rgba(196,154,108,1)] hidden md:block" />

        <div className="flex flex-col lg:flex-row justify-start items-center w-full max-w-[1280px] mr-auto relative gap-12 lg:gap-20 xl:gap-28 md:pl-12 lg:pl-16 transition-all duration-700 ease-out">

          {/* LEFT SIDE: Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center w-full lg:max-w-[450px] shrink-0 relative z-20 pt-8 md:pt-0"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-6 mb-8">
              <span className="font-mono text-[11px] tracking-[0.25em] font-medium text-[#c49a6c]">
                02
              </span>
              <div className="w-12 h-[1px] bg-[#c49a6c]/30" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/50">
                About Me
              </span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-[2.25rem] sm:text-[3rem] lg:text-[4rem] font-light tracking-tight text-white leading-[1.05] mb-6 sm:mb-8">
              Crafting <br className="hidden md:block" /> experiences <br />
              that <span className="font-medium text-[#c49a6c]">connect.</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-white/60 font-light text-[14px] md:text-[15px] leading-[1.9] max-w-md mb-10 tracking-wide">
              I&apos;m MD Riaz Uddin, a Frontend Developer who loves turning ideas into meaningful digital experiences. I focus on clean code, smooth interactions, and modern design principles to build products that are not only beautiful but also functional and user-friendly.
            </motion.p>

            <motion.div variants={fadeUp} className="relative w-fit mt-2">
              <div className="font-mono text-3xl text-[#c49a6c] opacity-90" style={{ fontFamily: "'Cedarville Cursive', cursive" }}>
                MD Riaz Uddin
              </div>
              <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-[#c49a6c]/60 to-transparent" />
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Cinematic Details Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative w-full max-w-md shrink-0 mt-8 md:mt-10 lg:mt-0 z-20 group perspective-1000 mx-auto lg:mx-0"
          >
            {/* Concentric Radar Rings (Background) */}
            <div className="absolute top-1/2 -right-[60%] -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0 hidden lg:block overflow-hidden">
              <div className="absolute inset-0 opacity-40 transition-opacity duration-1000 group-hover:opacity-70">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-dashed border-[#c49a6c]/60 border-l-transparent animate-[spin_40s_linear_infinite]" />
                <div className="absolute top-1/2 left-[-50px] -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-dashed border-[#c49a6c]/40 border-l-transparent" />
                <div className="absolute top-1/2 left-[-100px] -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#c49a6c]/20 border-l-transparent animate-[spin_60s_linear_infinite_reverse]" />
                <div className="absolute top-1/2 left-[-150px] -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-dotted border-[#c49a6c]/10 border-l-transparent" />

                {/* Glowing Nodes on Rings */}
                <div className="absolute top-[20%] left-[100px] w-1.5 h-1.5 rounded-full bg-[#c49a6c] shadow-[0_0_10px_rgba(196,154,108,1)]" />
                <div className="absolute bottom-[30%] left-[200px] w-1 h-1 rounded-full bg-[#c49a6c] shadow-[0_0_10px_rgba(196,154,108,1)]" />
                <div className="absolute top-[40%] left-[300px] w-2 h-2 rounded-full bg-[#c49a6c] shadow-[0_0_15px_rgba(196,154,108,1)]" />
              </div>
            </div>

            {/* Subtle Floating Particles - Simplified for performance */}
            <div className="absolute -inset-10 pointer-events-none z-0 hidden md:block">
              <motion.div animate={{ y: [-5, 5, -5], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] -left-[5%] w-1 h-1 bg-[#c49a6c] rounded-full" />
              <motion.div animate={{ y: [8, -8, 8], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[20%] -right-[10%] w-1.5 h-1.5 bg-[#c49a6c] rounded-full" />
            </div>

            {/* Premium Glassmorphism Card */}
            <div style={{ willChange: "transform, opacity" }} className="relative z-10 bg-[#050505]/95 border border-white/5 rounded-[24px] p-8 md:p-10 shadow-lg transition-all duration-500 group-hover:border-[#c49a6c]/30 group-hover:shadow-[#c49a6c]/10 group-hover:-translate-y-1 overflow-hidden w-full">

              {/* Internal Glass Sweep */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-[#c49a6c]/5 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out transform group-hover:translate-x-[150%] -translate-x-[150%] pointer-events-none" />

              {/* Soft Radial Center Pulse */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(196,154,108,0.05)_0%,transparent_50%)] opacity-50 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none mix-blend-screen" />

              {/* Glowing Corner Accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-[1.5px] border-l-[1.5px] border-[#c49a6c] rounded-tl-[24px] opacity-0 group-hover:opacity-50 transition-all duration-700 transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-[1.5px] border-r-[1.5px] border-[#c49a6c] rounded-tr-[24px] opacity-0 group-hover:opacity-50 transition-all duration-700 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-[1.5px] border-l-[1.5px] border-[#c49a6c] rounded-bl-[24px] opacity-0 group-hover:opacity-50 transition-all duration-700 transform -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-[1.5px] border-r-[1.5px] border-[#c49a6c] rounded-br-[24px] opacity-0 group-hover:opacity-50 transition-all duration-700 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none" />

              {/* Glowing Top & Bottom Borders */}
              <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#c49a6c] to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-700 shadow-[0_0_20px_rgba(196,154,108,1)]" />
              <div className="absolute bottom-0 left-1/3 right-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#c49a6c] to-transparent opacity-20 group-hover:opacity-50 transition-opacity duration-700 shadow-[0_0_15px_rgba(196,154,108,1)]" />

              <div className="flex flex-col gap-6 relative z-10">

                {/* ROW 1: NAME */}
                <div className="flex items-center gap-6 group/row">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex items-center justify-center shrink-0 group-hover/row:border-[#c49a6c]/60 group-hover/row:shadow-[0_0_20px_rgba(196,154,108,0.2)] transition-all duration-500 text-white/50 group-hover/row:text-[#c49a6c] group-hover/row:bg-[#c49a6c]/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#c49a6c]/20 to-transparent opacity-0 group-hover/row:opacity-100 transition-all duration-700 ease-out transform group-hover/row:translate-x-full -translate-x-full pointer-events-none" />
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-transform duration-500 group-hover/row:scale-110"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#c49a6c]/80 group-hover/row:text-[#c49a6c] transition-colors duration-300">Name</span>
                    <span className="text-[15px] text-white/90 font-medium tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.05)] group-hover/row:text-white transition-colors duration-300">MD Riaz Uddin</span>
                    <span className="text-[11px] text-white/30 font-light tracking-wide mt-[-2px] group-hover/row:text-white/50 transition-colors duration-300">riazuddin-dev · he/him</span>
                  </div>
                </div>

                {/* Divider 1 */}
                <div className="relative w-full h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent my-1 group-hover:from-[#c49a6c]/30 transition-colors duration-700">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[3px] rounded-full bg-[#c49a6c] opacity-50 group-hover:opacity-100 shadow-[0_0_8px_rgba(196,154,108,1)] transition-opacity duration-700" />
                </div>

                {/* ROW 2: LOCATION */}
                <div className="flex items-center gap-6 group/row">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex items-center justify-center shrink-0 group-hover/row:border-[#c49a6c]/60 group-hover/row:shadow-[0_0_20px_rgba(196,154,108,0.2)] transition-all duration-500 text-white/50 group-hover/row:text-[#c49a6c] group-hover/row:bg-[#c49a6c]/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#c49a6c]/20 to-transparent opacity-0 group-hover/row:opacity-100 transition-all duration-700 ease-out transform group-hover/row:translate-x-full -translate-x-full pointer-events-none" />
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-transform duration-500 group-hover/row:scale-110"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#c49a6c]/80 group-hover/row:text-[#c49a6c] transition-colors duration-300">Location</span>
                    <span className="text-[15px] text-white/90 font-light tracking-wide group-hover/row:text-white transition-colors duration-300">Dhaka, Bangladesh</span>
                  </div>
                </div>

                {/* Divider 2 */}
                <div className="relative w-full h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent my-1 group-hover:from-[#c49a6c]/30 transition-colors duration-700">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[3px] rounded-full bg-[#c49a6c] opacity-50 group-hover:opacity-100 shadow-[0_0_8px_rgba(196,154,108,1)] transition-opacity duration-700" />
                </div>

                {/* ROW 3: EMAIL */}
                <div className="flex items-center gap-6 group/row">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex items-center justify-center shrink-0 group-hover/row:border-[#c49a6c]/60 group-hover/row:shadow-[0_0_20px_rgba(196,154,108,0.2)] transition-all duration-500 text-white/50 group-hover/row:text-[#c49a6c] group-hover/row:bg-[#c49a6c]/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#c49a6c]/20 to-transparent opacity-0 group-hover/row:opacity-100 transition-all duration-700 ease-out transform group-hover/row:translate-x-full -translate-x-full pointer-events-none" />
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-transform duration-500 group-hover/row:scale-110"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#c49a6c]/80 group-hover/row:text-[#c49a6c] transition-colors duration-300">Email</span>
                    <span className="text-[15px] text-white/90 font-light tracking-wide group-hover/row:text-white transition-colors duration-300">dev.riazuddin@gmail.com</span>
                  </div>
                </div>

                {/* Divider 3 */}
                <div className="relative w-full h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent my-1 group-hover:from-[#c49a6c]/30 transition-colors duration-700">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[3px] rounded-full bg-[#c49a6c] opacity-50 group-hover:opacity-100 shadow-[0_0_8px_rgba(196,154,108,1)] transition-opacity duration-700" />
                </div>

                {/* ROW 4: EXPERIENCE */}
                <div className="flex items-center gap-6 group/row">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex items-center justify-center shrink-0 group-hover/row:border-[#c49a6c]/60 group-hover/row:shadow-[0_0_20px_rgba(196,154,108,0.2)] transition-all duration-500 text-white/50 group-hover/row:text-[#c49a6c] group-hover/row:bg-[#c49a6c]/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#c49a6c]/20 to-transparent opacity-0 group-hover/row:opacity-100 transition-all duration-700 ease-out transform group-hover/row:translate-x-full -translate-x-full pointer-events-none" />
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-transform duration-500 group-hover/row:scale-110"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#c49a6c]/80 group-hover/row:text-[#c49a6c] transition-colors duration-300">Experience</span>
                    <span className="text-[15px] text-white/90 font-light tracking-wide group-hover/row:text-white transition-colors duration-300">2 year +</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

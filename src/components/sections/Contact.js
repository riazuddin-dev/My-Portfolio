"use client";

import { motion, useTransform } from "framer-motion";
import { useScrollytelling } from "../ScrollytellingProvider";
import { SocialLinks } from "../SocialLinks";

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

export function Contact() {
  const { smoothProgress } = useScrollytelling();

  // Range: 0.78 to 1.0
  const opacity = useTransform(smoothProgress, [0.78, 0.85], [0, 1]);
  const y = useTransform(smoothProgress, [0.78, 1], ["5%", "0%"]);
  const pointerEvents = useTransform(smoothProgress, (p) => p > 0.8 ? "auto" : "none");

  return (
    <motion.section
      style={{ opacity, y, pointerEvents }}
      className="fixed inset-0 flex flex-col justify-center z-20 px-6 md:px-12 lg:px-20"
    >

      <div className="flex-1 flex w-full relative items-center justify-center z-10">

        {/* Global Vertical Left Line */}
        <div className="absolute left-0 md:left-0 top-[-20%] bottom-[-20%] w-[1px] bg-gradient-to-b from-transparent via-[#c49a6c]/20 to-transparent pointer-events-none hidden md:block" />
        <div className="absolute left-[-2.5px] top-[40%] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#c49a6c] shadow-[0_0_15px_rgba(196,154,108,1)] hidden md:block animate-pulse" />

        {/* LEFT-ANCHORED MASTER CONTAINER */}
        <div className="flex flex-col lg:flex-row justify-start items-center w-full max-w-[1280px] mr-auto relative gap-12 lg:gap-20 xl:gap-28 md:pl-12 lg:pl-16 transition-all duration-700 ease-out">

          {/* LEFT SIDE: Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center w-full lg:max-w-[420px] relative z-20 shrink-0 pt-8 md:pt-0"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-6 mb-8">
              <span className="font-mono text-[11px] tracking-[0.25em] font-medium text-[#c49a6c]">
                05
              </span>
              <div className="w-12 h-[1px] bg-[#c49a6c]/30" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/50">
                Get In Touch
              </span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-[2.25rem] sm:text-[3rem] lg:text-[4rem] font-light tracking-tight text-white leading-[1.05] mb-6 sm:mb-8">
              Have a project <br />
              <span className="font-medium text-[#c49a6c] drop-shadow-[0_0_20px_rgba(196,154,108,0.5)]">in mind?</span>
            </motion.h2>

            {/* Glowing Divider Line */}
            <motion.div variants={fadeUp} className="relative w-32 h-[1px] bg-gradient-to-r from-transparent via-[#c49a6c] to-transparent opacity-60 mb-8">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[3px] h-[3px] rounded-full bg-[#c49a6c] shadow-[0_0_10px_rgba(196,154,108,1)]" />
            </motion.div>

            <motion.p variants={fadeUp} className="text-white/60 font-light text-[14px] leading-[1.9] mb-12 tracking-wide">
              Feel free to send me a message. <br /> I&apos;d love to hear from you!
            </motion.p>

            {/* Info Blocks */}
            <motion.div variants={fadeUp} className="flex flex-col gap-8">
              {/* Quick Response */}
              <div className="flex items-start gap-5 group">
                <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#c49a6c]/50 group-hover:shadow-[0_0_15px_rgba(196,154,108,0.2)] transition-all duration-500 text-white/40 group-hover:text-[#c49a6c]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </div>
                <div className="flex flex-col gap-1 mt-1">
                  <span className="text-[13px] text-white font-medium tracking-wide">Quick Response</span>
                  <span className="text-[12px] text-white/40 font-light">I usually reply within 24 hours.</span>
                </div>
              </div>

              {/* Download Resume Block */}
              <a
                href="/resume/MD_RIAZ_UDDIN_Resume.pdf"
                download="MD_RIAZ_UDDIN_Resume.pdf"
                className="flex items-start gap-5 group outline-none"
              >
                <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#c49a6c]/50 group-hover:shadow-[0_0_15px_rgba(196,154,108,0.2)] transition-all duration-500 text-white/40 group-hover:text-[#c49a6c] group-hover:-translate-y-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </div>
                <div className="flex flex-col gap-1 mt-1">
                  <span className="text-[13px] text-white font-medium tracking-wide group-hover:text-[#c49a6c] transition-colors duration-500">Download Resume</span>
                  <span className="text-[12px] text-white/40 font-light group-hover:text-white/60 transition-colors duration-500">Get a copy of my latest resume.</span>
                </div>
              </a>

            </motion.div>
          </motion.div>

          {/* CENTER: Cinematic Contact Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative w-full max-w-[600px] shrink-0 z-20 group perspective-1000 mt-8 md:mt-12 lg:mt-0 pb-16 md:pb-0"
          >
            {/* Soft Glow Behind Form */}
            <div style={{ willChange: "opacity" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#c49a6c]/5 blur-[40px] md:blur-[80px] rounded-[30px] pointer-events-none z-0 transition-opacity duration-1000 group-hover:opacity-100 opacity-50 hidden md:block" />

            {/* Concentric Radar Rings (Background) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none z-0 hidden lg:block overflow-hidden">
              <div className="absolute inset-0 opacity-20 mix-blend-screen transition-opacity duration-1000 group-hover:opacity-50">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-dashed border-[#c49a6c]/50 border-b-transparent animate-[spin_40s_linear_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-dashed border-[#c49a6c]/30 border-t-transparent animate-[spin_60s_linear_infinite_reverse]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-dotted border-[#c49a6c]/10" />

                {/* Glowing Nodes on Rings */}
                <div className="absolute top-[10%] left-[50%] w-1.5 h-1.5 rounded-full bg-[#c49a6c] shadow-[0_0_10px_rgba(196,154,108,1)]" />
                <div className="absolute bottom-[20%] right-[30%] w-2 h-2 rounded-full bg-[#c49a6c] shadow-[0_0_15px_rgba(196,154,108,1)]" />
              </div>
            </div>

            {/* Premium Glassmorphism Card */}
            <div style={{ willChange: "transform, box-shadow" }} className="relative z-10 bg-[#050505]/70 backdrop-blur-md border border-white/5 rounded-[24px] p-8 md:p-10 shadow-[0_20px_30px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-[#c49a6c]/30 group-hover:shadow-[0_20px_40px_rgba(196,154,108,0.15)] group-hover:-translate-y-1 w-full">

              {/* Internal Glass Sweep */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out transform group-hover:translate-x-[150%] -translate-x-[150%] pointer-events-none" />

              {/* Glowing Top & Bottom Borders */}
              <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#c49a6c]/80 to-transparent opacity-50 shadow-[0_0_15px_rgba(196,154,108,0.8)]" />
              <div className="absolute bottom-0 left-1/3 right-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#c49a6c]/40 to-transparent opacity-30 shadow-[0_0_10px_rgba(196,154,108,0.6)]" />

              <form className="flex flex-col gap-5 relative z-10" onSubmit={(e) => e.preventDefault()}>

                <div className="flex flex-col md:flex-row gap-5">
                  {/* Name Input */}
                  <div className="relative w-full group/input">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within/input:text-[#c49a6c] transition-colors duration-300">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-[#0a0a0a]/60 backdrop-blur-md border border-white/5 rounded-[12px] pl-14 pr-6 py-4 text-white font-light text-[13px] focus:outline-none focus:border-[#c49a6c]/50 focus:bg-[#111111] transition-all duration-500 placeholder:text-white/20 hover:border-white/10 shadow-inner"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative w-full group/input">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within/input:text-[#c49a6c] transition-colors duration-300">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-[#0a0a0a]/60 backdrop-blur-md border border-white/5 rounded-[12px] pl-14 pr-6 py-4 text-white font-light text-[13px] focus:outline-none focus:border-[#c49a6c]/50 focus:bg-[#111111] transition-all duration-500 placeholder:text-white/20 hover:border-white/10 shadow-inner"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="relative w-full group/input">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within/input:text-[#c49a6c] transition-colors duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-[#0a0a0a]/60 backdrop-blur-md border border-white/5 rounded-[12px] pl-14 pr-6 py-4 text-white font-light text-[13px] focus:outline-none focus:border-[#c49a6c]/50 focus:bg-[#111111] transition-all duration-500 placeholder:text-white/20 hover:border-white/10 shadow-inner"
                  />
                </div>

                {/* Message Input */}
                <div className="relative w-full group/input">
                  <div className="absolute left-5 top-5 text-white/30 group-focus-within/input:text-[#c49a6c] transition-colors duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                  </div>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full bg-[#0a0a0a]/60 backdrop-blur-md border border-white/5 rounded-[12px] pl-14 pr-6 py-4 text-white font-light text-[13px] focus:outline-none focus:border-[#c49a6c]/50 focus:bg-[#111111] transition-all duration-500 placeholder:text-white/20 hover:border-white/10 shadow-inner resize-none"
                  />
                </div>

                {/* Buttons Row */}
                <div className="flex flex-col sm:flex-row gap-4 mt-2">

                  {/* Send Message Button (Solid Amber) */}
                  <button
                    type="submit"
                    className="group/btn relative flex flex-1 items-center justify-center gap-3 py-4 bg-gradient-to-r from-[#c49a6c] to-[#a07c55] rounded-[10px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(196,154,108,0.4)] hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
                    <span className="relative z-10 font-mono text-[11px] tracking-[0.2em] uppercase text-[#050505] font-bold">
                      Send Message
                    </span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 text-[#050505] transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all duration-500"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                  </button>

                  {/* Download Resume Button (Outlined) */}
                  <a
                    href="/resume/MD_RIAZ_UDDIN_Resume.pdf"
                    download="MD_RIAZ_UDDIN_Resume.pdf"
                    rel="noopener noreferrer"
                    className="group/btn relative flex flex-1 items-center justify-center gap-3 py-4 bg-transparent border border-white/10 hover:border-[#c49a6c]/50 rounded-[10px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_20px_rgba(196,154,108,0.15)] hover:bg-[#c49a6c]/5 hover:-translate-y-1"
                  >
                    <span className="relative z-10 font-mono text-[10px] tracking-[0.2em] uppercase text-white/80 group-hover/btn:text-[#c49a6c] transition-colors duration-500 font-medium">
                      Download Resume
                    </span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 text-white/50 group-hover/btn:text-[#c49a6c] transition-colors duration-500 transform group-hover/btn:translate-y-0.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  </a>

                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer / Social Layer */}
      <div className="absolute bottom-8 md:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 md:gap-5 w-full px-6 z-20">
        <SocialLinks iconSize="w-9 h-9" className="gap-6" />
        <p className="font-mono text-[9px] tracking-[0.25em] text-white/30 uppercase text-center border-t border-white/5 pt-4 w-full max-w-[200px]">
          © {new Date().getFullYear()} RIAZ UDDIN
        </p>
      </div>
    </motion.section>
  );
}

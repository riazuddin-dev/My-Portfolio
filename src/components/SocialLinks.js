"use client";

import { motion } from "framer-motion";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/riazuddin-dev?utm_source=chatgpt.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    )
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/riaz-uddin-istiak/?utm_source=chatgpt.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/sotter.dishari.98/?utm_source=chatgpt.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  }
];

export function SocialLinks({ className = "", iconSize = "w-11 h-11" }) {
  return (
    <div className={`flex items-center gap-4 ${className} pointer-events-auto`}>
      {socials.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`group relative flex items-center justify-center rounded-full border border-white/10 bg-[#050505]/50 backdrop-blur-md text-white/50 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#c49a6c]/60 hover:bg-[#c49a6c]/10 hover:text-[#c49a6c] hover:shadow-[0_0_25px_rgba(196,154,108,0.25)] ${iconSize}`}
        >
          {/* Subtle Inner Glow on Hover */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(196,154,108,0.15)_0%,transparent_70%)] transition-opacity duration-500 pointer-events-none" />
          
          <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
            {social.icon}
          </div>

          {/* Elegant Tooltip Reveal */}
          <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 group-hover:-bottom-10 transition-all duration-500 ease-out pointer-events-none">
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#c49a6c] whitespace-nowrap bg-black/90 px-3 py-1.5 rounded-sm border border-[#c49a6c]/30 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)] block">
              {social.name}
            </span>
          </div>
        </motion.a>
      ))}
    </div>
  );
}

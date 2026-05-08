"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("submitting");
    
    // Simulate EmailJS integration delay
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground flex flex-col px-6 py-24 md:py-32 items-center">
      <div className="absolute top-8 left-8 z-50">
        <Link href="/" className="font-mono text-sm tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">
          ← Back
        </Link>
      </div>

      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-16 md:gap-32 mt-16">
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col"
        >
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
            Let&apos;s build.
          </h1>
          <p className="text-xl text-foreground-muted font-light mb-16 leading-relaxed">
            I am always open to discussing product design work or partnership opportunities.
          </p>

          <div className="flex flex-col gap-8 text-lg font-light">
            <div>
              <h2 className="text-sm font-mono tracking-widest uppercase text-foreground-muted mb-2">Email</h2>
              <a href="mailto:hello@example.com" className="hover:text-white transition-colors">hello@example.com</a>
            </div>
            <div>
              <h2 className="text-sm font-mono tracking-widest uppercase text-foreground-muted mb-2">Social</h2>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">GitHub</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          {formState === "success" ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col justify-center items-center text-center p-12 bg-white/5 border border-white/10 rounded-sm"
            >
              <h3 className="text-2xl font-light mb-4">Message Sent</h3>
              <p className="text-foreground-muted font-light">I will get back to you as soon as possible.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-mono tracking-widest uppercase text-foreground-muted">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="bg-transparent border-b border-white/20 pb-2 focus:border-white outline-none transition-colors font-light text-xl"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-mono tracking-widest uppercase text-foreground-muted">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="bg-transparent border-b border-white/20 pb-2 focus:border-white outline-none transition-colors font-light text-xl"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-mono tracking-widest uppercase text-foreground-muted">Message</label>
                <textarea 
                  id="message" 
                  required
                  rows={4}
                  className="bg-transparent border-b border-white/20 pb-2 focus:border-white outline-none transition-colors font-light text-xl resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={formState === "submitting"}
                className="self-start mt-4 px-8 py-4 bg-white/5 border border-white/10 rounded-full font-mono text-sm tracking-widest uppercase hover:bg-white/10 hover:border-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </motion.section>
      </div>
    </main>
  );
}

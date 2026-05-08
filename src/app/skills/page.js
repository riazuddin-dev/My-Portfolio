"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground flex flex-col px-6 py-24 md:py-32 items-center">
      <div className="absolute top-8 left-8 z-50">
        <Link href="/" className="font-mono text-sm tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">
          ← Back
        </Link>
      </div>

      <div className="max-w-4xl w-full flex flex-col gap-32">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
            Skills evolve.
          </h1>
          <p className="text-2xl md:text-3xl text-foreground-muted font-light">
            Standards don&apos;t.
          </p>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-sm font-mono tracking-widest uppercase text-foreground-muted mb-6 border-b border-white/10 pb-4">Core Stack</h2>
            <p className="text-xl font-light leading-relaxed">
              React · Next.js · JavaScript · Tailwind CSS
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-sm font-mono tracking-widest uppercase text-foreground-muted mb-6 border-b border-white/10 pb-4">Motion & Interaction</h2>
            <p className="text-xl font-light leading-relaxed">
              Framer Motion · Scroll Logic · UI Transitions
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-sm font-mono tracking-widest uppercase text-foreground-muted mb-6 border-b border-white/10 pb-4">Foundations</h2>
            <p className="text-xl font-light leading-relaxed">
              HTML · CSS · Git · Responsive Design
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-sm font-mono tracking-widest uppercase text-foreground-muted mb-6 border-b border-white/10 pb-4">Technical Depth</h2>
            <ul className="grid grid-cols-2 gap-4 text-lg font-light opacity-80">
              <li>Component Architecture</li>
              <li>State Management</li>
              <li>Performance Optimization</li>
              <li>Accessibility</li>
              <li>Clean Code</li>
              <li>Debugging</li>
            </ul>
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}

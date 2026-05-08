"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <main className="relative min-h-screen bg-background text-foreground flex flex-col px-6 py-24 md:py-32 items-center">
      <div className="absolute top-8 left-8 z-50">
        <Link href="/" className="font-mono text-sm tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">
          ← Back
        </Link>
      </div>

      <div className="max-w-3xl w-full flex flex-col gap-32">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="min-h-[50vh] flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
            I didn&apos;t start with frameworks.<br/>
            <span className="text-foreground-muted">I started with curiosity.</span>
          </h1>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="min-h-[50vh] flex flex-col justify-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-mono tracking-widest uppercase text-foreground-muted mb-6">Foundation</h2>
              <ul className="space-y-4 text-xl font-light">
                <li>Logic</li>
                <li>Mathematics</li>
                <li>Computer Science</li>
                <li>Systems thinking</li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-mono tracking-widest uppercase text-foreground-muted mb-6">Approach</h2>
              <ul className="space-y-4 text-xl font-light">
                <li>Psychology of users</li>
                <li>Discipline</li>
                <li>Consistency</li>
                <li>Intentional engineering</li>
              </ul>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

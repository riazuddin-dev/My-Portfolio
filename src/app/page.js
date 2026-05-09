import { ImageSequenceViewer } from "@/components/ImageSequenceViewer";
import { Intro } from "@/components/sections/Intro";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { GlobalAtmosphere } from "@/components/GlobalAtmosphere";

export default function Home() {
  return (
    <main className="relative w-full bg-[#050505] flex flex-col text-white">
      {/* Global Cinematic Atmosphere */}
      <GlobalAtmosphere />

      {/* Background Cinematic Viewer - Now Fixed Behind Content */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ImageSequenceViewer />
      </div>
      
      {/* Scroll Sections - Natural Flow */}
      <div className="relative z-10 w-full flex flex-col">
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
        
        {/* Global Footer */}
        <footer className="relative w-full py-10 flex flex-col items-center gap-4 z-20 mt-10">
          <p className="font-mono text-[9px] tracking-[0.25em] text-white/30 uppercase text-center border-t border-white/5 pt-4 w-full max-w-[200px]">
            © {new Date().getFullYear()} RIAZ UDDIN
          </p>
        </footer>
      </div>
    </main>
  );
}

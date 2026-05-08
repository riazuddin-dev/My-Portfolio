import { ImageSequenceViewer } from "@/components/ImageSequenceViewer";
import { Intro } from "@/components/sections/Intro";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { GlobalAtmosphere } from "@/components/GlobalAtmosphere";

export default function Home() {
  return (
    <main className="relative w-full h-[500vh] bg-[#050505]">
      {/* Global Cinematic Atmosphere */}
      <GlobalAtmosphere />

      {/* Background Cinematic Viewer */}
      <ImageSequenceViewer />
      
      {/* Scroll Sections Overlay */}
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

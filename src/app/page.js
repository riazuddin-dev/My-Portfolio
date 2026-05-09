import { ImageSequenceViewer } from "@/components/ImageSequenceViewer";
import { Intro } from "@/components/sections/Intro";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { GlobalAtmosphere } from "@/components/GlobalAtmosphere";

export default function Home() {
  return (
    <main className="relative w-full min-h-[700vh] h-auto bg-[#050505] flex flex-col">
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

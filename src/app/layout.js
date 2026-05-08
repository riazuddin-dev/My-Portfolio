import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ScrollytellingProvider } from "@/components/ScrollytellingProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pritam Singh | Frontend Developer",
  description: "Creative Engineer & Frontend Developer portfolio. Cinematic scrollytelling experience.",
};

import { CustomCursor } from "@/components/CustomCursor";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-white/20 selection:text-white">
        <CustomCursor />
        <ScrollytellingProvider>
          {children}
        </ScrollytellingProvider>
      </body>
    </html>
  );
}

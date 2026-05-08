# Cinematic Scrollytelling Portfolio

The goal is to build a highly optimized, scroll-driven cinematic portfolio using Next.js 14 App Router, Tailwind CSS, and Framer Motion. The defining feature is a scroll-controlled frame sequence playback using Next.js `<Image />` components and DOM-based frame swapping, completely avoiding HTML5 Canvas or video tags to ensure responsive image optimization and Next.js caching benefits.

## User Review Required

- **Image Sequence Constraints:** You have 118 frames available in `/public/sequence/` (from `frame_000_delay-0.041s.png` to `frame_117_delay-0.041s.png`). The prompt requested ~144-150 frames, but we will utilize the 118 existing frames and map the 0-100% scroll progress to frame indexes 0 to 117. Please confirm this is acceptable.
- **Next.js `<Image />` Swapping vs Canvas:** Standard canvas playback provides instant frame drawing, but you requested DOM-based `<Image />` swapping. To prevent flickering, we will render a single `<Image />` whose `src` updates dynamically via scroll progress, while invisibly preloading upcoming frames. Alternatively, we can render all 118 `<Image />` tags as hidden and toggle opacity. I will use the dynamic `src` with a preloader for better memory footprint (as rendering 118 `<Image />` DOM nodes simultaneously could cause lag). Let me know if you prefer 118 hidden DOM nodes.

## Open Questions

- None at the moment. The requirements for the 5 sections (Intro, Skills, Projects, Achievements, CTA) and the specific sub-pages (About, Skills, Projects, Contact) are clear. 

## Proposed Changes

We will restructure the application to support a global scroll-driven state.

### Dependencies
- Install `framer-motion`
- Install `@emailjs/browser`

---

### Core Structure

#### [MODIFY] src/app/layout.js
Update the root layout to include the Inter/Space Grotesk fonts and a smooth scrolling container. Apply global dark theme (`bg-[#050505] text-white/90`).

#### [MODIFY] src/app/globals.css
Implement Tailwind utility classes, custom cinematic spacing, soft glow effects, and minimal styling per the "luxury aesthetic" request.

#### [NEW] src/components/ScrollytellingProvider.js
A client component that tracks global scroll progress (`useScroll` from Framer Motion) and provides it to the rest of the application via context.

#### [NEW] src/components/ImageSequenceViewer.js
The fixed centered portrait viewer. It will listen to the global scroll progress, calculate the exact frame (0 to 117), and display the corresponding Next.js `<Image />`. It will include a hidden preloading mechanism for the image sequence to ensure smooth DOM-swapping.

---

### Sections

#### [MODIFY] src/app/page.js
The main landing page composed of 5 cinematic scroll sections. Each section will be spaced using `vh` units so that scrolling through them smoothly maps to the 118-frame sequence.

#### [NEW] src/components/sections/Intro.js
Quiet cinematic opening. Slow fades and soft staggers for "Hi, I'm Pritam Singh".

#### [NEW] src/components/sections/Skills.js
"I build modern, high-performance web experiences." Subtle upward floating motion.

#### [NEW] src/components/sections/Projects.js
Maximum 3 projects. Minimal fade and horizontal motion.

#### [NEW] src/components/sections/Achievements.js
"Consistent problem solver." Confident tone, stats reveal.

#### [NEW] src/components/sections/CTA.js
"Let's build something impactful." Contact & Resume buttons with soft glow hover.

---

### Additional Pages

#### [NEW] src/app/about/page.js
Cinematic narrative-driven page. Focus on logic, systems thinking, discipline. Slow reveals, no cards.

#### [NEW] src/app/skills/page.js
Technical storytelling instead of skill bars. Core Stack, Motion & Interaction, Foundations.

#### [NEW] src/app/projects/page.js
Asymmetrical premium layouts. Subtle floating motion, image zoom, glow borders.

#### [NEW] src/app/contact/page.js
Cinematic scroll-driven system with EmailJS integration and elegant form transitions.

## Verification Plan

### Automated Tests
- Run `npm run build` and `npm run start` to verify production performance and Next.js Image optimizations.
- Verify zero terminal errors or hydration mismatches.

### Manual Verification
- Test scrolling in development and production to ensure the sequence from `frame_000` to `frame_117` plays smoothly without flickering or missing frames.
- Verify framer-motion animations (fades, staggers) map elegantly to the sections.
- Verify the minimalist luxury aesthetic (no bouncy animations, dark mode, specific typography).

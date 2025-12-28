IntelliToggle Frontend Assignment

This repository contains the implementation of the IntelliToggle homepage, recreated from the provided Figma design as part of the Frontend Developer assignment.

The goal was to closely match the visual design, ensure responsiveness across devices, maintain clean and modular code, and validate layout accuracy using Pixelay.

🔧 Tech Stack

Framework: Nuxt 3

Language: Vue 3 (Composition API)

Styling: Tailwind CSS

Build Tooling: Vite (via Nuxt)

Deployment: (add your hosted URL here, e.g. GitHub Pages / Netlify / Firebase Hosting)

React / Next.js were intentionally not used, as per assignment requirements.

📁 Project Structure
.
├── app/
│   └── app.vue
├── components/
│   ├── Header.vue
│   └── Footer.vue
├── pages/
│   └── index.vue
├── public/
│   └── logos / images / assets
├── pixelay/
│   ├── pixelay-desktop.png
│   ├── pixelay-mobile.png
│   └── notes.md
├── tailwind.config.js
├── nuxt.config.ts
└── README.md

Component Breakdown

Header.vue

Fixed navigation bar

Desktop navigation + CTA

Mobile hamburger menu with animated toggle (interactive element)

index.vue

Hero section

Feature sections

Comparison table

AI feature grid

Pricing & CTAs

Trusted-by logos

Final CTA

Footer.vue

Company description

Resource & company links

Newsletter subscription form

🎯 Assignment Requirements Checklist
Requirement	Status
Nuxt 3 + Vue 3 + TailwindCSS	✅
Match Figma homepage	✅
Responsive (desktop + mobile)	✅
Interactive element	✅ (mobile menu toggle)
Pixelay overlays	✅
Clean, modular code	✅
📐 Visual Fidelity (Pixelay)

Pixelay was used to compare the implementation against the Figma design.

Included Overlays

pixelay-desktop.png

pixelay-mobile.png

Notes (see /pixelay/notes.md)

Minor spacing differences (2–4px) in some sections

Font rendering slightly differs due to system font fallback

Background texture opacity adjusted for performance

Overall, the layout matches the design closely with no structural deviations.

📱 Responsiveness

Desktop-first layout with responsive Tailwind breakpoints

Mobile layout stacks content vertically

Navigation switches to hamburger menu on small screens

Buttons, typography, and spacing adapt smoothly across screen sizes

Tested on:

Desktop (≥1280px)

Tablet (~768px)

Mobile (~375px)

🧠 Design & Implementation Decisions

Tailwind-only styling
No custom CSS files were used; all styling is done via Tailwind utilities for clarity and consistency.

Reusable components
Header and Footer are extracted for clean separation of concerns.

Accessibility considerations

Semantic HTML elements

Buttons instead of clickable divs

Clear contrast for CTAs

Mobile menu is keyboard-accessible

⏱ Time & Tradeoffs

Total time spent: ~6–7 hours

Focused on:

Layout accuracy

Responsiveness

Clean structure

With more time, I would:

Add Nuxt Image for optimized asset loading

Improve accessibility further (ARIA labels, focus states)

Add subtle motion using @vueuse/motion or CSS animations

🚀 Running the Project Locally
npm install
npm run dev


The app will be available at:

http://localhost:3000

📌 Final Notes

This project prioritizes:

Visual accuracy

Maintainable structure

Clear documentation

Alignment with production-style Nuxt + Tailwind workflows
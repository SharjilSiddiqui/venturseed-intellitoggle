# IntelliToggle – Frontend Assignment

A responsive, pixel-accurate marketing landing page built as part of the frontend assignment.

## 🔗 Live Demo
https://venturseed-intellitoggle.vercel.app/

## 📂 Repository
https://github.com/SharjilSiddiqui/venturseed-intellitoggle

## 🖼 Pixelay Comparison
Pixelay screenshots and notes are available in the `/pixelay` folder:
- `pixelay-desktop.png`
- `pixelay-mobile.png`
- `notes.md`

✨ Overview

This project recreates the IntelliToggle marketing homepage using Nuxt 3, Vue 3, and Tailwind CSS, with a strong focus on:

Visual accuracy

Responsive layout

Clean, maintainable code

Component-based architecture

The implementation closely matches the provided Figma design and has been validated using Pixelay overlays.

🛠 Tech Stack

Framework: Nuxt 3

UI Library: Vue 3 (Composition API)

Styling: Tailwind CSS

Bundler: Vite (via Nuxt)

Validation Tool: Pixelay

📂 Project Structure
.
├── app/
│   └── app.vue
├── components/
│   ├── Header.vue
│   └── Footer.vue
├── pages/
│   └── index.vue
├── public/
│   └── logos / images
├── pixelay/
│   ├── desktop-overlay.png
│   ├── mobile-overlay.png
│   └── notes.md
├── tailwind.config.js
├── nuxt.config.ts
└── README.md

🧩 Key Components
Header.vue

Fixed navigation bar

Desktop navigation with CTA

Mobile hamburger menu with animated toggle (interactive element)

index.vue

Hero section

Trusted-by logos

Feature explanations

Comparison table

AI features section

Pricing & CTAs

Final CTA block

Footer.vue

Company description

Resource & company links

Newsletter subscription input

📱 Responsiveness

The layout is fully responsive and tested across:

Desktop (≥1280px)

Tablet (~768px)

Mobile (~375px)

Tailwind breakpoints are used to ensure:

Proper content stacking

Scalable typography

Accessible CTA sizing

Mobile-friendly navigation

🎯 Assignment Requirements Status
Requirement	Status
Nuxt 3 + Vue 3 + Tailwind CSS	✅
Homepage matches Figma	✅
Fully responsive	✅
Interactive element	✅ (mobile menu)
Pixelay comparison	✅
Clean, modular code	✅
📐 Pixelay Validation

Pixelay was used to visually compare the implementation against the Figma design.

Included:

Desktop overlay

Mobile overlay

Notes on minor deviations

Observations

Spacing differences are within 2–4px tolerance

Font rendering varies slightly due to system font fallback

Background textures adjusted for performance

Overall layout and hierarchy match the design closely.

▶️ Running the Project Locally
npm install
npm run dev


The app will be available at:

http://localhost:3000

🧠 Implementation Notes

Styling is done entirely with Tailwind CSS

No external UI libraries were used

Components are kept small and reusable

Accessibility and readability were prioritized

Interactive behavior is minimal and purposeful

⏱ Time & Tradeoffs

Total time spent: ~6–7 hours

Primary focus:

Visual accuracy

Responsiveness

Code clarity

With additional time, potential improvements would include:

Nuxt Image optimization

Enhanced accessibility (ARIA, focus states)

Motion effects for subtle UX polish

📌 Final Notes

This project demonstrates:

Strong frontend fundamentals

Attention to design detail

Real-world Nuxt + Tailwind workflows

Clean, review-ready code structure
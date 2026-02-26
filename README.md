# 🚗 Itzfizz Scroll-Driven Hero Animation

A premium scroll-driven hero section built with **Next.js, Tailwind CSS, and GSAP ScrollTrigger**.

This project demonstrates advanced frontend animation techniques including:

- Scroll-synced motion
- Pinned sections
- Staggered text reveals
- Animated counters
- Smooth interpolation
- Performance-optimized transforms

---

## ✨ Preview

- Scroll-controlled car animation (left → right)
- Letter-by-letter headline reveal
- Animated performance metrics
- Pinned hero section
- Minimal premium dark UI

---

## 🧠 Concept

The hero section responds directly to scroll progress:

- The car moves based on scroll position (not time autoplay)
- Text and stats animate progressively
- Scroll is locked while animation completes
- Section releases after animation ends

The goal was to replicate a premium product landing experience using only modern web technologies.

---

## 🛠 Tech Stack

- **Next.js (App Router)**
- **Tailwind CSS**
- **GSAP**
- **GSAP ScrollTrigger**
- **React Hooks**

---

## 🚀 Features

### 1️⃣ Scroll-Driven Animation
- GSAP ScrollTrigger with `scrub`
- Pinned hero section
- Scroll-based timeline control

### 2️⃣ Headline Animation
- Letter-by-letter stagger reveal
- Subtle gradient typography
- Smooth easing

### 3️⃣ Animated Metrics
- Scroll-triggered number counter
- Staggered stat card reveal
- Glass-style UI cards

### 4️⃣ Performance Optimized
- Uses `transform` instead of layout changes
- No heavy scroll event listeners
- Clean timeline orchestration

---

## 📂 Project Structure
/src
├── app
│ └── page.js
├── components
│ └── Hero.jsx
├── public
│ └── car.png
└── styles
└── globals.css

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/HA24RSH/smooth-scroll.git
cd smooth-scroll

Install dependencies:
npm install

Run development server:
npm run dev

Open in browser:
http://localhost:3000

🏗 Build for Production
npm run build
npm start
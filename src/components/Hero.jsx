"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const carRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const carWidth = carRef.current.offsetWidth;
      const visiblePortion = 0.2;
      const finalX = window.innerWidth - (carWidth * visiblePortion);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=2000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      // Car movement
      tl.fromTo(
        carRef.current,
        { x: 0 },
        { x: finalX, ease: "none", duration: 1 }
      );

      // Headline reveal
      tl.fromTo(
        ".letter",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          ease: "none",
          duration: 0.4
        },
        0
      );

      tl.fromTo(
        ".stat",
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          ease: "none",
          duration: 0.4
        },
        0.3
      );

      tl.to(
        ".fade-group",
        {
          opacity: 0.75,
          duration: 0.3,
          ease: "none"
        },
        0.85
      );

      // Counter animation
      const counters = document.querySelectorAll(".counter");
      counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");

        gsap.fromTo(
          counter,
          { innerText: 0 },
          {
            innerText: target,
            duration: 1,
            snap: { innerText: 1 },
            ease: "power1.out",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top+=200",
              toggleActions: "play none none none"
            },
            onUpdate: function () {
              counter.innerText = Math.floor(counter.innerText);
            }
          }
        );
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const headline = "WELCOME ITZFIZZ";

  return (
    <section
      ref={heroRef}
      className="relative h-screen bg-black overflow-hidden flex flex-col items-center justify-center"
    >

      {/* Subtle radial background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]"></div>

      {/* Headline */}
      <h1 className="fade-group relative text-center text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[0.25em] text-white z-20">
        {headline.split("").map((char, i) => (
          <span key={i} className="letter inline-block opacity-0 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            {char}
          </span>
        ))}

        {/* Soft underline glow */}
        <span className="absolute left-1/2 -translate-x-1/2 bottom-[-18px] w-1/3 h-[2px] bg-white/30 blur-sm"></span>
      </h1>

      {/* Stats */}
      <div className="fade-group mt-20 flex flex-row items-center justify-center gap-12 md:gap-20 z-20">

        <div className="stat opacity-0 bg-white/5 border border-white/10 px-10 py-8 rounded-3xl text-center backdrop-blur-md">
          <h2 className="text-5xl font-semibold text-white mb-3">
            <span className="counter" data-target="95">0</span>%
          </h2>
          <p className="text-gray-400 text-xs uppercase tracking-[0.2em]">
            Client Satisfaction
          </p>
        </div>

        <div className="stat opacity-0 bg-white/5 border border-white/10 px-10 py-8 rounded-3xl text-center backdrop-blur-md">
          <h2 className="text-5xl font-semibold text-white mb-3">
            <span className="counter" data-target="120">0</span>+
          </h2>
          <p className="text-gray-400 text-xs uppercase tracking-[0.2em]">
            Projects Delivered
          </p>
        </div>

        <div className="stat opacity-0 bg-white/5 border border-white/10 px-10 py-8 rounded-3xl text-center backdrop-blur-md">
          <h2 className="text-5xl font-semibold text-white mb-3">
            <span className="counter" data-target="40">0</span>%
          </h2>
          <p className="text-gray-400 text-xs uppercase tracking-[0.2em]">
            Faster Performance
          </p>
        </div>

      </div>

      {/* Car */}
      <img
        ref={carRef}
        src="/car.png"
        alt="car"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] z-10"
      />

    </section>
  );
}
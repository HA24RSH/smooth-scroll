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
      const finalX = window.innerWidth - carWidth * visiblePortion;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=2000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 🚗 Car moves entire duration (0 → 1)
      tl.fromTo(
        carRef.current,
        { x: 0 },
        { x: finalX, ease: "none", duration: 1 },
      );

      // 🔤 Headline fades in during first 40% of scroll
      tl.fromTo(
        ".letter",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          ease: "none",
          duration: 0.4,
        },
        0,
      );

      // 📊 Stats appear during middle of scroll
      tl.fromTo(
        ".stat",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          ease: "none",
          duration: 0.4,
        },
        0.3,
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const headline = "WELCOME ITZFIZZ";

  return (
    <section
      ref={heroRef}
      className="relative h-screen bg-black overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Headline */}
      <h1 className="flex gap-4 text-4xl md:text-6xl lg:text-7xl text-white z-20">
        {headline.split("").map((char, i) => (
          <span key={i} className="letter inline-block opacity-0">
            {char}
          </span>
        ))}
      </h1>

      {/* Horizontal Stats */}
      <div className="mt-12 flex flex-row items-center justify-center gap-16 z-20">
        <div className="stat text-center opacity-0">
          <h2 className="text-3xl font-bold text-white">95%</h2>
          <p className="text-gray-400">Client Satisfaction</p>
        </div>

        <div className="stat text-center opacity-0">
          <h2 className="text-3xl font-bold text-white">120+</h2>
          <p className="text-gray-400">Projects Delivered</p>
        </div>

        <div className="stat text-center opacity-0">
          <h2 className="text-3xl font-bold text-white">40%</h2>
          <p className="text-gray-400">Faster Performance</p>
        </div>
      </div>

      {/* Car */}
      <image
        ref={carRef}
        src="/car.png"
        alt="car"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] z-10"
      />
    </section>
  );
}

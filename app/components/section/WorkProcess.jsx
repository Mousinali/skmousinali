"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    title: "Research",
    desc: "We explore your business goals, target audience, competitors, and constraints to uncover insights that guide informed decisions.",
  },
  {
    title: "Strategy & UX",
    desc: "User flows, wireframes, and content structure are planned to ensure clarity, usability, and conversion-driven experiences.",
  },
  {
    title: "Visual Design",
    desc: "High-fidelity interfaces are crafted with strong visual hierarchy, modern aesthetics, and consistent brand expression.",
  },
  {
    title: "Prototyping",
    desc: "Interactive prototypes are built to validate ideas, test interactions, and refine user experience before development.",
  },
  {
    title: "Development",
    desc: "Responsive and high-performance solutions are developed using modern frameworks and best practices.",
  },
  {
    title: "Testing & Launch",
    desc: "Thorough testing, optimization, and final checks ensure a smooth launch and reliable performance across devices.",
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const cardsRef = useRef([]);
  const blob1 = useRef(null);
  const blob2 = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      /* Floating blobs */
      gsap.to(blob1.current, {
        x: 120,
        y: -80,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(blob2.current, {
        x: -100,
        y: 100,
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* IMPORTANT: set initial state */
      gsap.set(cardsRef.current, {
        y: 120,
        opacity: 0,
        rotateZ: (i) => (i % 2 === 0 ? -6 : 6),
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: "+=1000",   // 🔥 BIG scroll space
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          scrub: 1,
        },
      });

      tl.to(cardsRef.current, {
        y: 0,
        opacity: 1,
        rotateZ: 0,
        stagger: 0.4,
        ease: "power3.out",
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#f8f9fb] px-6"
    >
      {/* 🔥 PIN WRAPPER (IMPORTANT) */}
      <div ref={pinRef} className=" py-28">

        <div
          ref={blob1}
          className="absolute top-20 left-10 w-[320px] h-[320px] bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 rounded-full blur-[120px] opacity-60"
        />

        <div
          ref={blob2}
          className="absolute bottom-20 right-10 w-[360px] h-[360px] bg-gradient-to-br from-emerald-300 via-cyan-300 to-blue-300 rounded-full blur-[130px] opacity-60"
        />

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto px-6 mb-20 text-center">
            <h2 className="text-lg md:text-3xl lg:text-4xl font-medium tracking-tight">
              A Thoughtful & Proven Workflow
              <span className="block text-black/40 text-base mt-3 tracking-normal">
                A structured yet flexible approach that ensures clarity,
                creativity, and measurable results at every stage.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="bg-white/70 backdrop-blur-xl border border-black/5 rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] opacity-0"
              >
                <span className="text-sm font-medium text-gray-400">
                  Step 0{i + 1}
                </span>
                <h3 className="text-2xl font-semibold text-gray-900 mt-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mt-5 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

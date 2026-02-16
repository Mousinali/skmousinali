"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ResultsTestimonials() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      // Set initial state
      gsap.set(cardsRef.current, {
        y: 80,
        opacity: 0,
        scale: 0.96,
      });

      // Animate on scroll
      gsap.to(cardsRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        stagger: {
          amount: 0.6,
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",   // 🔥 clean & reliable
          toggleActions: "play none none reverse",
          // markers: true,   // enable for debugging
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-4 overflow-hidden bg-[#f8f9fb]"
    >
      {/* Background Blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 w-[420px] h-[420px] bg-gradient-to-br from-emerald-200 via-lime-200 to-yellow-200 rounded-full blur-[140px] opacity-40" />
        <div className="absolute top-1/3 -right-40 w-[480px] h-[480px] bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 rounded-full blur-[160px] opacity-35" />
        <div className="absolute bottom-0 left-1/4 w-[360px] h-[360px] bg-gradient-to-br from-cyan-200 via-teal-200 to-emerald-200 rounded-full blur-[120px] opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-5xl mx-auto px-6 mb-20 text-center">
          <h2 className="text-lg md:text-3xl lg:text-4xl font-medium tracking-tight">
            Results that speak for themselves
            <span className="block text-black/40 text-base mt-3 tracking-normal">
              Real outcomes from thoughtful design, strategy, and execution.
            </span>
          </h2>
        </div>

        {/* Grid Cards */}
        <div className="grid gap-8 md:grid-cols-3 auto-rows-fr">

          {/* Big Stat Card */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="md:row-span-2 rounded-[28px] bg-white/90 backdrop-blur-xl border border-black/15 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.18)] p-12 flex flex-col justify-between"
          >
            <div>
              <p className="text-gray-400 text-sm mb-4 uppercase tracking-wide">
                Growth Impact
              </p>
              <h3 className="text-7xl font-semibold tracking-tight mb-6 text-gray-900">
                2×
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 max-w-sm">
                Faster business formation than initially projected.
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-10 leading-relaxed">
              “What felt overwhelming at first turned into a smooth and surprisingly fast launch process.”
            </p>
          </div>

          {/* Metric Card */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="rounded-[28px] bg-white/85 backdrop-blur-xl border border-black/15 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.14)] p-10 flex flex-col justify-between"
          >
            <div>
              <p className="text-gray-400 text-sm mb-3 uppercase tracking-wide">
                Response Time
              </p>
              <h3 className="text-6xl font-semibold text-gray-900 mb-4">
                99%
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Client questions resolved within 24 hours.
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-8">
              “Fast, precise, and consistently reliable.”
            </p>
          </div>

          {/* Quote Cards */}
          {[
            {
              text: "Their clarity and attention to detail completely changed how we approached our contracts.",
              name: "Amber Becker",
              role: "Freelancer",
            },
            {
              text: "Everything moved faster than expected — from planning to execution.",
              name: "Giulia Testa",
              role: "Founder",
            },
            {
              text: "Structured, calm, and exceptionally well thought out process.",
              name: "Daniel Reed",
              role: "Startup Owner",
            },
          ].map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i + 2] = el)}
              className="rounded-[28px] bg-white/85 backdrop-blur-xl border border-black/15 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.14)] p-10 flex flex-col justify-between"
            >
              <p className="text-gray-800 text-lg leading-relaxed">
                “{item.text}”
              </p>

              <div className="mt-8">
                <p className="font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

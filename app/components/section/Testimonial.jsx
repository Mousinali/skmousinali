"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ResultsTestimonials() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "195% 75%",
            end: "205% 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 w-[420px] h-[420px] bg-gradient-to-br from-emerald-200 via-lime-200 to-yellow-200 rounded-full blur-[140px] opacity-40 animate-[blob_22s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 -right-40 w-[480px] h-[480px] bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 rounded-full blur-[160px] opacity-35 animate-[blob_26s_ease-in-out_infinite_reverse]" />
        <div className="absolute bottom-0 left-1/4 w-[360px] h-[360px] bg-gradient-to-br from-cyan-200 via-teal-200 to-emerald-200 rounded-full blur-[120px] opacity-30 animate-[blob_30s_ease-in-out_infinite]" />
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

        {/* Grid Encouraging Cards */}
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

          {/* Quote Card 1 */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="rounded-[28px] bg-white/85 backdrop-blur-xl border border-black/15 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.14)] p-10 flex flex-col justify-between"
          >
            <p className="text-gray-800 text-lg leading-relaxed">
              “Their clarity and attention to detail completely changed how we approached our contracts.”
            </p>

            <div className="mt-8">
              <p className="font-medium text-gray-900">Amber Becker</p>
              <p className="text-sm text-gray-500">Freelancer</p>
            </div>
          </div>

          {/* Quote Card 2 */}
          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="rounded-[28px] bg-white/85 backdrop-blur-xl border border-black/15 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.14)] p-10 flex flex-col justify-between"
          >
            <p className="text-gray-800 text-lg leading-relaxed">
              “Everything moved faster than expected — from planning to execution. It felt structured, calm, and well thought out.”
            </p>

            <div className="mt-8">
              <p className="font-medium text-gray-900">Giulia Testa</p>
              <p className="text-sm text-gray-500">Founder</p>
            </div>
          </div>

          {/* Quote Card 3 (Fixed Ref Index) */}
          <div
            ref={(el) => (cardsRef.current[4] = el)}
            className="rounded-[28px] bg-white/85 backdrop-blur-xl border border-black/15 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.14)] p-10 flex flex-col justify-between"
          >
            <p className="text-gray-800 text-lg leading-relaxed">
              “Their clarity and attention to detail completely changed how we approached our contracts.”
            </p>

            <div className="mt-8">
              <p className="font-medium text-gray-900">Amber Becker</p>
              <p className="text-sm text-gray-500">Freelancer</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

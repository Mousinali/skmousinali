"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!cardsRef.current.length) return;

    const ctx = gsap.context(() => {
      /* ===============================
         CARD STAGGER REVEAL
      =============================== */
      gsap.from(cardsRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "10% top",
          end: "bottom 30%",
          scrub: 1,
        },
      });

      /* ===============================
         IMAGE MASK REVEAL
      =============================== */
      cardsRef.current.forEach((card) => {
        const imageWrap = card.querySelector(".image-wrap");

        if (!imageWrap) return;

        gsap.fromTo(
          imageWrap,
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-20 text-center">
          <h2 className="text-lg md:text-3xl lg:text-5xl font-medium tracking-tight">
            Selected Work
            <span className="block text-black/40 text-base mt-3">
              Design · Development · QA
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[1, 2, 3, 4].map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden bg-gray-200 image-wrap">
                <div className="relative w-full h-[420px]">
                  <Image
                    src={`/images/port-${i % 2 === 0 ? 1 : 2}.webp`}
                    alt="Portfolio project"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="mt-5 px-5">
                <h3 className="text-lg lg:text-2xl font-semibold text-gray-900">
                  Project Title
                </h3>
                <p className="mt-2 text-gray-500 text-sm max-w-md">
                  Clean, conversion-focused design with measurable impact.
                </p>

                <div className="mt-4 flex gap-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-slate-100">
                    Design
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-slate-100">
                    Development
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

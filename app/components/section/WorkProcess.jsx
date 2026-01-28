"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        title: "Discover",
        desc:
            "We deep dive into your business goals, audience behavior, competitors, and technical requirements to set a clear direction.",
    },
    {
        title: "Strategy & UX",
        desc:
            "User journeys, wireframes, and content structure are crafted to ensure clarity, usability, and conversion-focused design.",
    },
    {
        title: "Visual Design",
        desc:
            "High-fidelity UI with strong visual hierarchy, modern aesthetics, and brand consistency across all screens.",
    },
    {
        title: "Development",
        desc:
            "Pixel-perfect, responsive, and high-performance development using modern frameworks and animation techniques.",
    },
    {
        title: "Testing & Launch",
        desc:
            "Cross-browser testing, performance optimization, SEO checks, and smooth deployment with post-launch support.",
    },
];

export default function Process() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const blob1 = useRef(null);
    const blob2 = useRef(null);
    const [mounted, setMounted] = useState(false);

    // Hydration safety
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const ctx = gsap.context(() => {
            /* ===============================
               FLOATING BLOBS
            =============================== */
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

            /* ===============================
               PIN + CARD SEQUENCE
            =============================== */
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: `+=${steps.length * 25}%`,
                    scrub: true,
                    pin: true,
                },
            });

            cardsRef.current.forEach((card, i) => {
                tl.fromTo(
                    card,
                    {
                        y: 120,
                        rotateZ: i % 2 === 0 ? -8 : 8,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        rotateZ: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                    },
                    i * 0.6
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [mounted]);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen overflow-hidden bg-[#f8f9fb] px-6 py-28"
        >
            {/* Gradient Blobs */}
            <div
                ref={blob1}
                className="absolute top-20 left-10 w-[320px] h-[320px]
                   bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300
                   rounded-full blur-[120px] opacity-60"
            />
            <div
                ref={blob2}
                className="absolute bottom-20 right-10 w-[360px] h-[360px]
                   bg-gradient-to-br from-emerald-300 via-cyan-300 to-blue-300
                   rounded-full blur-[130px] opacity-60"
            />

            <div className="relative max-w-7xl mx-auto">

                <div className="max-w-5xl mx-auto px-6 mb-20 text-center">
                    <h2 className="text-lg md:text-3xl lg:text-5xl font-medium tracking-tight">
                        A Thoughtful & Proven Workflow
                        <span className="block text-black/40 text-base mt-3 tracking-normal">
                            A structured yet flexible approach that ensures clarity, creativity,
                        and measurable results at every stage.
                        </span>
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            ref={(el) => (cardsRef.current[i] = el)}
                            className="bg-white/70 backdrop-blur-xl
                         border border-black/5
                         rounded-3xl p-8 md:p-10
                         shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]
                         opacity-0 transform-gpu"
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
        </section>
    );
}

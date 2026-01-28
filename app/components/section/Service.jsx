"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const cursorRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            /* ======================
               STACK SCROLL EFFECT
            ====================== */
            cardsRef.current.forEach((card, i) => {
                gsap.fromTo(
                    card,
                    {
                        y: 120,
                        scale: 0.8,
                        opacity: 0,
                        scrub: 1,
                    },
                    {
                        y: 0,
                        scale: 1,
                        opacity: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 30%",
                            end: "bottom 40%",
                            scrub: 1,
                        },
                    }
                );
            });

            /* ======================
               CURSOR IMAGE FOLLOW
            ====================== */
            gsap.set(cursorRef.current, {
                xPercent: -50,
                yPercent: -50,
                autoAlpha: 0,
                scale: 0.9,
            });

            const moveCursor = (e) => {
                gsap.to(cursorRef.current, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.35,
                    ease: "power3.out",
                });
            };

            window.addEventListener("mousemove", moveCursor);
            return () => window.removeEventListener("mousemove", moveCursor);
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    /* ======================
       HOVER HANDLERS
    ====================== */
    const onEnter = (img) => {
        cursorRef.current.querySelector("img").src = img;
        gsap.to(cursorRef.current, {
            autoAlpha: 1,
            scale: 1,
            duration: 0.25,
        });
    };

    const onLeave = () => {
        gsap.to(cursorRef.current, {
            autoAlpha: 0,
            scale: 0.9,
            duration: 0.25,
        });
    };

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#f8f9fb] text-[#0b0b0f] py-24 overflow-hidden"
        >
            {/* Floating Cursor Image */}
            <div
                ref={cursorRef}
                className="pointer-events-none fixed top-0 left-0 z-50 w-[280px] rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
            >
                <img className="w-full h-full object-cover" alt="" />
            </div>

            {/* Header */}
            <div className="max-w-5xl mx-auto px-6 mb-20 text-center">
                <h2 className="text-lg md:text-3xl lg:text-4xl font-medium tracking-tight">
                    Digital Services
                    <span className="block text-black/40 text-base mt-3">
                        UI/UX · Web · QA
                    </span>
                </h2>
            </div>


            {/* ======================
         CARD 1 — UI / UX
      ====================== */}
            <div className="max-w-6xl mx-auto px-6 space-y-16">
                <div
                    ref={(el) => (cardsRef.current[0] = el)}
                    onMouseEnter={() => onEnter("/images/port-1.webp")}
                    onMouseLeave={onLeave}
                    className="group bg-white border border-black/10 rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] cursor-pointer"
                >
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h3 className="text-3xl geist font-semibold mb-2">UI / UX Design</h3>
                            <p className="text-black/50 mb-4">
                                Human-centered digital experiences
                            </p>
                            <p className="text-black/70 mb-6">
                                We design intuitive, conversion-focused interfaces backed by
                                research, usability principles, and scalable design systems.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <span className="tag px-4 py-2 bg-slate-100 text-sm rounded-full">Wireframes</span>
                                <span className="tag px-4 py-2 bg-slate-100 text-sm rounded-full">User Flow</span>
                                <span className="tag px-4 py-2 bg-slate-100 text-sm rounded-full">Design System</span>
                                <span className="tag px-4 py-2 bg-slate-100 text-sm rounded-full">Prototyping</span>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <span className="text-lg text-black/40 group-hover:text-black transition">
                                Explore →
                            </span>
                        </div>
                    </div>
                </div>

                {/* ======================
           CARD 2 — WEB DESIGN
        ====================== */}
                <div
                    ref={(el) => (cardsRef.current[1] = el)}
                    onMouseEnter={() => onEnter("/images/port-2.webp")}
                    onMouseLeave={onLeave}
                    className="group bg-white border border-black/10 rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] cursor-pointer"
                >
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h3 className="text-3xl geist font-semibold mb-2">
                                Web Design & Development
                            </h3>
                            <p className="text-black/50 mb-4">
                                Fast, scalable & SEO-ready websites
                            </p>
                            <p className="text-black/70 mb-6">
                                Modern websites built with performance, accessibility, and
                                motion in mind using Next.js and modern UI stacks.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <span className="tag px-4 py-2 bg-slate-100 text-sm rounded-full">Next.js</span>
                                <span className="tag px-4 py-2 bg-slate-100 text-sm rounded-full">Responsive UI</span>
                                <span className="tag px-4 py-2 bg-slate-100 text-sm rounded-full">SEO</span>
                                <span className="tag px-4 py-2 bg-slate-100 text-sm rounded-full">Performance</span>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <span className="text-lg text-black/40 group-hover:text-black transition">
                                Explore →
                            </span>
                        </div>
                    </div>
                </div>

                {/* ======================
           CARD 3 — MANUAL TESTING
        ====================== */}
                <div
                    ref={(el) => (cardsRef.current[2] = el)}
                    onMouseEnter={() => onEnter("/images/port-3.webp")}
                    onMouseLeave={onLeave}
                    className="group bg-white border border-black/10 rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] cursor-pointer"
                >
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h3 className="text-3xl geist font-semibold mb-2">Manual Testing</h3>
                            <p className="text-black/50 mb-4">
                                Quality assurance that scales
                            </p>
                            <p className="text-black/70 mb-6">
                                Detailed functional, usability, and cross-browser testing to
                                ensure your product works flawlessly.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <span className="tag px-4 py-2 bg-slate-100 text-sm rounded-full">Functional Testing</span>
                                <span className="tag px-4 py-2 bg-slate-100 text-sm rounded-full">UI Testing</span>
                                <span className="tag px-4 py-2 bg-slate-100 text-sm rounded-full">Bug Reports</span>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <span className="text-lg text-black/40 group-hover:text-black transition">
                                Explore →
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

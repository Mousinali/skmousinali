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
        const ctx = gsap.context(() => {
            /* ===============================
               CARD CONTAINER REVEAL
            =============================== */
            gsap.from(cardsRef.current, {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.25,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "10% top",
                    end: "bottom 30%",
                },
            });

            /* ===============================
               IMAGE MASK REVEAL (NO 3D)
            =============================== */
            cardsRef.current.forEach((card) => {
                const img = card.querySelector("img");
                const arrow = card.querySelector(".arrow-btn");

                gsap.fromTo(
                    img,
                    {
                        clipPath: "inset(0 0 100% 0)",
                    },
                    {
                        clipPath: "inset(0 0 0% 0)",
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 80%",
                        },
                    }
                );

                gsap.from(arrow, {
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 75%",
                    },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* ===== Header (UNCHANGED) ===== */}
                <div className="max-w-5xl mx-auto px-6 mb-20 text-center">
                    <h2 className="text-lg md:text-3xl lg:text-5xl font-medium tracking-tight">
                        Selected Work
                        <span className="block text-black/40 text-base mt-3">
                            Design · Development · QA
                        </span>
                    </h2>
                </div>

                {/* ===== Grid ===== */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* CARD 1 */}
                    <div
                        ref={(el) => (cardsRef.current[0] = el)}
                        className="group"
                    >
                        <div className="relative rounded-3xl overflow-hidden bg-gray-200">
                            <div className="relative w-full h-[420px]">
                                <Image
                                    src="/images/port-1.webp"
                                    alt="Liva – Beauty & Skincare"
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    priority={false}
                                />
                            </div>



                        </div>

                        {/* Text */}
                        <div className="mt-5 px-5">
                            <h3 className="text-lg lg:text-2xl font-semibold text-gray-900">
                                Liva — Beauty & Skincare
                            </h3>
                            <p className="mt-2 text-gray-500 text-sm max-w-md">
                                Elevated their visual identity and launched a product campaign
                                that doubled engagement.
                            </p>
                            {/* Tags */}
                            <div className="mt-4 flex gap-2">
                                <span className="px-3 py-1 text-xs rounded-full bg-slate-100 ">
                                    Branding
                                </span>
                                <span className="px-3 py-1 text-xs rounded-full bg-slate-100 ">
                                    Photography
                                </span>
                            </div>
                        </div>
                    </div>


                    {/* CARD 2 */}
                    <div
                        ref={(el) => (cardsRef.current[1] = el)}
                        className="group"
                    >
                        <div className="relative rounded-3xl overflow-hidden bg-gray-200">
                            <div className="relative w-full h-[420px]">
                                <Image
                                    src="/images/port-2.webp"
                                    alt="Liva – Beauty & Skincare"
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    priority={false}
                                />
                            </div>
                        </div>

                        {/* Text */}
                        <div className="mt-5 px-5">
                            <h3 className="text-lg lg:text-2xl font-semibold text-gray-900">
                                Krona — Architecture Studio
                            </h3>
                            <p className="mt-2 text-gray-500 text-sm max-w-md">
                                Created a clean, responsive portfolio that drove 70% more
                                client inquiries.
                            </p>
                            {/* Tags */}
                            <div className="mt-4 flex gap-2">
                                <span className="px-3 py-1 text-xs rounded-full bg-slate-100 ">
                                    Design
                                </span>
                                <span className="px-3 py-1 text-xs rounded-full bg-slate-100 ">
                                    Development
                                </span>
                            </div>
                        </div>

                    </div>
                    {/* CARD 1 */}
                    <div
                        ref={(el) => (cardsRef.current[3] = el)}
                        className="group"
                    >
                        <div className="relative rounded-3xl overflow-hidden bg-gray-200">
                            <div className="relative w-full h-[420px]">
                                <Image
                                    src="/images/port-1.webp"
                                    alt="Liva – Beauty & Skincare"
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    priority={false}
                                />
                            </div>



                        </div>

                        {/* Text */}
                        <div className="mt-5 px-5">
                            <h3 className="text-lg lg:text-2xl font-semibold text-gray-900">
                                Liva — Beauty & Skincare
                            </h3>
                            <p className="mt-2 text-gray-500 text-sm max-w-md">
                                Elevated their visual identity and launched a product campaign
                                that doubled engagement.
                            </p>
                            {/* Tags */}
                            <div className="mt-4 flex gap-2">
                                <span className="px-3 py-1 text-xs rounded-full bg-slate-100 ">
                                    Branding
                                </span>
                                <span className="px-3 py-1 text-xs rounded-full bg-slate-100 ">
                                    Photography
                                </span>
                            </div>
                        </div>
                    </div>


                    {/* CARD 2 */}
                    <div
                        ref={(el) => (cardsRef.current[4] = el)}
                        className="group"
                    >
                        <div className="relative rounded-3xl overflow-hidden bg-gray-200">
                            <div className="relative w-full h-[420px]">
                                <Image
                                    src="/images/port-2.webp"
                                    alt="Liva – Beauty & Skincare"
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    priority={false}
                                />
                            </div>
                        </div>

                        {/* Text */}
                        <div className="mt-5 px-5">
                            <h3 className="text-lg lg:text-2xl font-semibold text-gray-900">
                                Krona — Architecture Studio
                            </h3>
                            <p className="mt-2 text-gray-500 text-sm max-w-md">
                                Created a clean, responsive portfolio that drove 70% more
                                client inquiries.
                            </p>
                            {/* Tags */}
                            <div className="mt-4 flex gap-2">
                                <span className="px-3 py-1 text-xs rounded-full bg-slate-100 ">
                                    Design
                                </span>
                                <span className="px-3 py-1 text-xs rounded-full bg-slate-100 ">
                                    Development
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

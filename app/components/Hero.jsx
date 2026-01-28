"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

/* ===== Marquee Data ===== */
const projects = [
    { image: "/images/port-1.webp", title: "Project 1" },
    { image: "/images/port-2.webp", title: "Project 2" },
    { image: "/images/port-3.webp", title: "Project 3" },
    { image: "/images/port-1.webp", title: "Project 4" },
    { image: "/images/port-2.webp", title: "Project 2" },
    { image: "/images/port-1.webp", title: "Project 1" },
    { image: "/images/port-3.webp", title: "Project 3" },
    { image: "/images/port-2.webp", title: "Project 4" },
];


export default function Hero() {
    const heroRef = useRef(null);
    const marqueeRef = useRef(null);
    const [mounted, setMounted] = useState(false);

    // Hydration-safe mount
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const ctx = gsap.context(() => {
            /* ===== Hero Text Animation ===== */
            const tl = gsap.timeline({
                defaults: { ease: "power3.out" },
            });

            tl.from(".hero-line", {
                yPercent: 100,
                duration: 1,
                stagger: 0.15,
                delay : 3.5,
                rotate: 2
            }).from(
                ".hero-fade",
                {
                    opacity: 0,
                    y: 20,
                    duration: 0.6,
                    stagger: 0.12,
                },
                "-=0.4"
            );

            /* ===== Background Blob Animation ===== */
            gsap.to(".blob-1", {
                x: 120,
                y: 80,
                scale: 1.1,
                duration: 18,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(".blob-2", {
                x: -100,
                y: 120,
                scale: 1.15,
                duration: 22,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(".blob-3", {
                x: 80,
                y: -100,
                scale: 1.05,
                duration: 20,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            /* ===== GSAP Marquee ===== */
            /* ===== GSAP Marquee (Flicker-Free) ===== */
            const track = marqueeRef.current;

            if (track) {
                const items = track.children;
                const totalWidth = Array.from(items).reduce(
                    (acc, el) => acc + el.offsetWidth + 32, // 32 = gap-8
                    0
                );

                gsap.set(track, {
                    x: 0,
                    willChange: "transform",
                    force3D: true,
                });

                const marqueeTween = gsap.to(track, {
                    x: -totalWidth / 2,
                    duration: 35,
                    ease: "none",
                    repeat: -1,
                    modifiers: {
                        x: (x) => `${parseFloat(x) % (totalWidth / 2)}px`,
                    },
                });

                track.addEventListener("mouseenter", () => marqueeTween.pause());
                track.addEventListener("mouseleave", () => marqueeTween.resume());
            }

        }, heroRef);

        return () => ctx.revert();
    }, [mounted]);

    if (!mounted) return null;

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex flex-col justify-center
      bg-gradient-to-b from-white to-slate-50 overflow-hidden pt-16"
        >
            {/* ===== Animated Background ===== */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="blob-1 absolute -top-40 -left-40 w-[520px] h-[520px]
          rounded-full bg-indigo-200/45 blur-[120px]" />
                <div className="blob-2 absolute top-1/3 -right-40 w-[520px] h-[520px]
          rounded-full bg-sky-200/45 blur-[120px]" />
                <div className="blob-3 absolute -bottom-40 left-1/3 w-[520px] h-[520px]
          rounded-full bg-purple-200/40 blur-[120px]" />
            </div>

            {/* ===== Hero Content ===== */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <h1
                    className="text-3xl sm:text-4xl md:text-5xl
          leading-[1.2] tracking-tight"
                >
                    <span className="block overflow-hidden">
                        <span className="hero-line block">
                            <span className="font-medium text-gray-500">
                                UI/UX Designer
                            </span>{" "}
                            <span className="font-semibold">Designing</span>
                        </span>
                    </span>

                    <span className="block overflow-hidden">
                        <span className="hero-line block font-semibold">
                            Experiences That Drive Sales
                        </span>
                    </span>
                </h1>

                <p className="hero-fade mt-6 max-w-2xl mx-auto
          text-gray-500 text-base md:text-lg">
                    Beautifully designed, easy-to-use websites that help you stand
                    out and connect with your audience.
                </p>

                <div className="hero-fade mt-10 flex justify-center gap-4">
                    <Link
                        href="/lets-talk"
                        className="group inline-flex items-center gap-2
            rounded-full bg-black text-white
            px-6 py-3 text-sm font-medium
            transition-all duration-300
            hover:scale-[1.03] hover:shadow-lg"
                    >
                        <i className="ri-phone-line"></i>
                        Let’s Talk
                    </Link>

                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2
            rounded-full bg-gray-100 text-gray-900
            px-6 py-3 text-sm font-medium
            transition-all duration-300
            hover:bg-gray-200 hover:scale-[1.03]"
                    >
                        <i className="ri-mail-line"></i>
                        Email Me
                    </Link>
                </div>
            </div>

            {/* ===== Marquee Section ===== */}
            <div className="relative z-10 mt-24 overflow-hidden marquee-mask max-w-7xl mx-auto">
                <div
                    ref={marqueeRef}
                    className="marquee-track flex gap-8 items-center px-24"
                >
                    {[...projects, ...projects].map((item, i) => (
                        <div
                            key={i}
                            className="marquee-item min-w-[320px] sm:min-w-[360px] overflow-hidden"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full  rounded-2xl"
                                draggable="false"
                            />
                        </div>
                    ))}
                </div>
            </div>


        </section>
    );
}

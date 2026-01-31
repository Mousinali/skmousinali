"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const footerRef = useRef(null);
    const blob1 = useRef(null);
    const blob2 = useRef(null);
    const pathname = usePathname();

    useEffect(() => {
        if (!footerRef.current) return;

        const ctx = gsap.context(() => {
            /* ===== FOOTER CONTENT ANIMATION ===== */
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse",
                },
            });

            tl.fromTo(
                footerRef.current.querySelectorAll(".footer-text"),
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
            )
            tl.fromTo(
                footerRef.current.querySelectorAll(".foot-icon"),
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" },
                "-=0.4"
            );
            tl.fromTo(
                footerRef.current.querySelectorAll(".menu-item"),
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                },
                "-=0.3"
            );

            /* ===== BLOB ANIMATION ===== */
            gsap.to(blob1.current, {
                x: 60,
                y: -40,
                scale: 1.15,
                duration: 14,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(blob2.current, {
                x: -50,
                y: 50,
                scale: 1.2,
                duration: 18,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }, footerRef);

        ScrollTrigger.refresh();
        return () => ctx.revert();
    }, [pathname]);

    return (
        <footer
            ref={footerRef}
            className="relative overflow-hidden bg-slate-50 pt-8 md:pt-12"
        >
            {/* ===== BLOBS ===== */}
            <div
                ref={blob1}
                className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300/10 rounded-full blur-3xl"
            />
            <div
                ref={blob2}
                className="absolute bottom-0 -right-32 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"
            />

            {/* ===== CONTENT ===== */}
            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <div className="flex flex-col">

                    {/* MAIN GRID */}
                    <div className="grid lg:grid-cols-2 gap-14 py-10">

                        {/* LEFT */}
                        <div>
                            <h2 className="footer-text text-3xl md:text-5xl font-medium text-slate-900 mb-6">
                                Mousin Ali
                            </h2>

                            <h3 className="footer-text text-sm font-semibold tracking-widest text-slate-600 mb-3">
                                LET’S CONNECT
                            </h3>

                            <p className="footer-text text-slate-600 max-w-md mb-8 leading-relaxed">
                                Have an idea or project in mind? Let’s bring it to life together.
                                I’m always open to collaborations and creative challenges that
                                make an impact.
                            </p>

                            {/* SOCIAL ICONS */}
                            <div className="footer-social flex gap-4 items-center text-slate-600 text-xl">
                                <a href="#"><i className="ri-facebook-fill foot-icon inline-block"></i></a>
                                <a href="#"><i className="ri-github-fill foot-icon inline-block"></i></a>
                                <a href="#"><i className="ri-linkedin-fill foot-icon inline-block"></i></a>
                                <a href="#"><i className="ri-instagram-fill foot-icon inline-block"></i></a>
                            </div>

                            <Link
                                href="/contact"
                                className="footer-text inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:underline mt-6"
                            >
                                Contact Me <span>↗</span>
                            </Link>
                        </div>

                        {/* RIGHT MENU */}
                        <div className="flex flex-col gap-6">
                            {[
                                ["01", "ABOUT ME", "/about"],
                                ["02", "SERVICES", "/services"],
                                ["03", "PORTFOLIO", "/portfolio"],
                                ["04", "PRICING", "/pricing"],
                                ["05", "BLOGS", "/blog"],
                            ].map(([num, label, href]) => (
                                <div
                                    key={num}
                                    className="menu-item flex items-center justify-between last:border-0 border-b border-slate-300/60 pb-4"
                                >
                                    <span className="text-xl md:text-3xl font-light text-slate-400">
                                        {num}
                                    </span>
                                    <Link
                                        href={href}
                                        className="text-xl md:text-3xl font-normal text-slate-900 hover:opacity-70 transition"
                                    >
                                        {label}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FOOTER BOTTOM */}
                    <div className="footer-text border-t border-slate-300/60 py-6 text-center text-xs text-slate-500">
                        © 2026 Mousin Ali. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}

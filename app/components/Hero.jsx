"use client";

import { useLayoutEffect, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function Hero() {
const heroRef = useRef(null);
const marqueeRef = useRef(null);

const blob1Ref = useRef(null);
const blob2Ref = useRef(null);
const blob3Ref = useRef(null);

// 1️⃣ Entrance + blobs (layout phase)
useLayoutEffect(() => {
  if (!heroRef.current) return;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero-line", {
      yPercent: 100,
      duration: 1,
      stagger: 0.15,
      delay: 3.5,
      rotate: 2,
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

    // Blob animations
    gsap.to(blob1Ref.current, {
      x: 120,
      y: 80,
      scale: 1.1,
      duration: 18,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(blob2Ref.current, {
      x: -100,
      y: 120,
      scale: 1.15,
      duration: 22,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(blob3Ref.current, {
      x: 80,
      y: -100,
      scale: 1.05,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, heroRef);

  return () => ctx.revert();
}, []);


// 2️⃣ Marquee (after paint)
useEffect(() => {
  const track = marqueeRef.current;
  if (!track) return;

  const totalWidth = track.scrollWidth;

  gsap.set(track, { x: 0 });

  const tween = gsap.to(track, {
    x: -totalWidth / 2,
    duration: 35,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: (x) => `${parseFloat(x) % (totalWidth / 2)}px`,
    },
  });

  const enter = () => tween.pause();
  const leave = () => tween.resume();

  track.addEventListener("mouseenter", enter);
  track.addEventListener("mouseleave", leave);

  return () => {
    track.removeEventListener("mouseenter", enter);
    track.removeEventListener("mouseleave", leave);
    tween.kill();
  };
}, []);


  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-end 2xl:justify-center bg-gradient-to-b from-white to-slate-50 overflow-hidden 2xl:pt-16 pt-40"
    >
      {/* BLOBS */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          ref={blob1Ref}
          className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-indigo-200/45 blur-[120px]"
        />
        <div
          ref={blob2Ref}
          className="absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-sky-200/45 blur-[120px]"
        />
        <div
          ref={blob3Ref}
          className="absolute -bottom-40 left-1/3 w-[520px] h-[520px] rounded-full bg-purple-200/40 blur-[120px]"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl leading-[1.2] tracking-tight">
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

        <p className="hero-fade mt-6 max-w-2xl mx-auto text-gray-500 text-base md:text-lg">
          Beautifully designed, easy-to-use websites that help you stand out and
          connect with your audience.
        </p>

        <div className="hero-fade mt-10 flex justify-center gap-4">
          <Link
            href="/lets-talk"
            className="rounded-full bg-black text-white px-6 py-3 text-sm font-medium"
          >
            Let’s Talk
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-gray-100 text-gray-900 px-6 py-3 text-sm font-medium"
          >
            Email Me
          </Link>
        </div>
      </div>

      {/* MARQUEE RAW JSX (NO ARRAY) */}
      <div className="relative z-10 mt-24 overflow-hidden max-w-7xl mx-auto marquee-mask">
        <div ref={marqueeRef} className="flex gap-8 items-center px-24">

          <div className="min-w-[360px]"><img src="/images/port-1.webp" className="w-full rounded-2xl" /></div>
          <div className="min-w-[360px]"><img src="/images/port-2.webp" className="w-full rounded-2xl" /></div>
          <div className="min-w-[360px]"><img src="/images/port-3.webp" className="w-full rounded-2xl" /></div>
          <div className="min-w-[360px]"><img src="/images/port-1.webp" className="w-full rounded-2xl" /></div>
          <div className="min-w-[360px]"><img src="/images/port-2.webp" className="w-full rounded-2xl" /></div>
          <div className="min-w-[360px]"><img src="/images/port-3.webp" className="w-full rounded-2xl" /></div>

        </div>
      </div>
    </section>
  );
}

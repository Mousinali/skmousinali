"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ===== Skill Pills Data ===== */
const skillsLeft = [
  { label: "Web Design", icon: "ri-layout-grid-fill", bg: "bg-orange-500" },
  { label: "UI / UX", icon: "ri-shape-2-fill", bg: "bg-gray-800" },
  { label: "Research", icon: "ri-search-eye-fill", bg: "bg-blue-500" },
];

const skillsRight = [
  { label: "Animation", icon: "ri-magic-fill", bg: "bg-green-400" },
  { label: "Prototyping", icon: "ri-pencil-ruler-2-fill", bg: "bg-pink-500" },
  { label: "Strategy", icon: "ri-lightbulb-flash-fill", bg: "bg-yellow-400" },
];

export default function About() {
  const sectionRef = useRef(null);
  const statsRef = useRef([]);
  const [mounted, setMounted] = useState(false);

  /* ===== Prevent SSR mismatch ===== */
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      /* ===== Word-by-word Reveal ===== */
      gsap.fromTo(
        ".about-word",
        {
          filter: "blur(24px)",
          opacity: 0,
          y: 100,
        },
        {
          filter: "blur(0px)",
          opacity: 1,
          y: 0,
          stagger: 0.8,
          duration: 4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom 50%",
            scrub: true,
            pin: true,
          },
        }
      );

      /* ===== CLEAN COUNTER ===== */
      statsRef.current.forEach((el) => {
        const target = Number(el.dataset.value);
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 1.6,
            ease: "power3.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              once: true,
            },
          }
        );
      });



      /* ===== Skill Pills Scroll Reveal ===== */
      gsap.fromTo(
        ".skill-pill-left",
        {
          x: -80,
          opacity: 0,
          filter: "blur(6px)",
        },
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "85% bottom",
            scrub: 1
          },
        }
      );

      gsap.fromTo(
        ".skill-pill-right",
        {
          x: 80,
          opacity: 0,
          filter: "blur(6px)",
        },
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "85% bottom",
            scrub: 1
          },
        }
      );
      /* ===== COUNTER: START WHEN IN VIEW ===== */
      statsRef.current.forEach((el) => {
        const target = Number(el.dataset.value);

        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 1.5,
            delay: 0.1,
            ease: "power3.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });




    }, sectionRef);

    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) return null;

  return (
    <section
      ref={sectionRef}
      className="relative py-40 bg-white overflow-hidden"
    >
      {/* ===== Background Accents ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[720px] h-[720px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full bg-indigo-200/30 blur-[180px]"
        />
        <div className="absolute bottom-0 right-1/4 w-[520px] h-[520px]
          rounded-full bg-sky-200/25 blur-[160px]"
        />
      </div>

      {/* ===== Floating Skill Pills ===== */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {/* LEFT SIDE */}
        <div className="absolute left-20 top-1/2 -translate-y-1/2 space-y-8">
          {skillsLeft.map((skill, i) => (
            <div
              key={i}
              className="skill-pill skill-pill-left
                   flex items-center gap-3 px-5 py-3
                   rounded-full bg-white
                   shadow-[0_14px_45px_rgba(0,0,0,0.14)]
                   transform-gpu"
              style={{
                marginLeft: `${i * 18}px`,      
                transform: "rotate(6deg)",    
              }}
            >
              <span
                className={`w-9 h-9 rounded-full flex items-center justify-center
                      text-white text-lg ${skill.bg}`}
              >
                <i className={skill.icon}></i>
              </span>
              <span className="text-sm font-medium text-gray-800">
                {skill.label}
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 space-y-8">
          {skillsRight.map((skill, i) => (
            <div
              key={i}
              className="skill-pill skill-pill-right
                   flex items-center gap-3 px-5 py-3
                   rounded-full bg-white
                   shadow-[0_14px_45px_rgba(0,0,0,0.14)]
                   transform-gpu"
              style={{
                marginRight: `${i * 18}px`, 
                transform: "rotate(-6deg)",    
              }}
            >
              <span
                className={`w-9 h-9 rounded-full flex items-center justify-center
                      text-white text-lg ${skill.bg}`}
              >
                <i className={skill.icon}></i>
              </span>
              <span className="text-sm font-medium text-gray-800">
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </div>



      {/* ===== Content ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <p className="mb-10 text-xs uppercase tracking-[0.35em] text-gray-400">
          About Me
        </p>

        {/* ===== Heading ===== */}
        <h2
          className="mx-auto max-w-4xl
          text-3xl sm:text-4xl md:text-5xl
          leading-[1.25] tracking-tight text-gray-900
          flex flex-wrap justify-center gap-x-2"
        >
          {[
            "I", "design", "thoughtful", "digital", "experiences",
            "that", "balance", "aesthetics,", "usability,", "and",
            "business", "impact."
          ].map((word, i) => (
            <span key={i} className="inline-block">
              <span className="about-word inline-block font-medium">
                {word}
              </span>
            </span>
          ))}
        </h2>

        {/* ===== Description ===== */}
        <p className="mt-12 max-w-2xl mx-auto text-gray-500 text-base md:text-lg">
          With a strong foundation in UI/UX design and frontend development,
          I help brands transform ideas into clean, scalable, and
          conversion-focused digital products.
        </p>

        {/* ===== Stats ===== */}
        <div className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-10 max-w-4xl mx-auto">
          <Stat value={2} label="Years Experience" ref={(el) => (statsRef.current[0] = el)} />
          <Stat value={90} label="Projects Completed" ref={(el) => (statsRef.current[1] = el)} />
          <Stat value={50} label="Happy Clients" ref={(el) => (statsRef.current[2] = el)} />
          <Stat value={9} label="Industries Served" ref={(el) => (statsRef.current[3] = el)} />
        </div>
      </div>
    </section>
  );
}

/* ===== Stat Card ===== */
const Stat = React.forwardRef(({ value, label }, ref) => (
  <div className="group px-6 py-8 transition">
    <div className="flex items-baseline justify-center gap-1">
      <p
        ref={ref}
        data-value={value}
        className="text-3xl md:text-4xl font-semibold text-gray-900"
      >
        0
      </p>
      <span className="text-2xl md:text-3xl font-semibold text-gray-900">
        +
      </span>
    </div>
    <p className="mt-2 text-sm text-gray-500">{label}</p>
  </div>
));



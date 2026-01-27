"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PageLoader() {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const hasRun = useRef(false); // Strict Mode guard

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    // Run only once per session
    if (sessionStorage.getItem("hasLoaded")) {
      loaderRef.current?.remove();
      return;
    }
    sessionStorage.setItem("hasLoaded", "true");

    const loader = loaderRef.current;
    const text = textRef.current;

    if (!loader || !text) return;

    // Lock scroll
    document.documentElement.style.overflow = "hidden";

    // Initial state (window closed)
    gsap.set(loader, {
      yPercent: 0,
    });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        document.documentElement.style.overflow = "";
        loader.remove();
      },
    });

    tl.fromTo(
      text,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 5, // slow, confident reveal
      }
    )
      .to(text, {
        y: -30,
        opacity: 0,
        duration: 5,
        delay: 0.4, // text hold
      })
      // WINDOW OPENS UPWARD
      .to(loader, {
        yPercent: -100,
        duration: 5,
        ease: "power4.inOut",
      });

    // Failsafe (never get stuck)
    const safetyTimer = setTimeout(() => {
      document.documentElement.style.overflow = "";
      loader?.remove();
    }, 4500);

    return () => clearTimeout(safetyTimer);
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
    >
      <div
        ref={textRef}
        className="text-sm tracking-[0.35em] uppercase text-black/80"
      >
        Mousin
      </div>
    </div>
  );
}

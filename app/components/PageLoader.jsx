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

    // Initial state
    gsap.set(loader, { yPercent: 0 });
    gsap.set(text, { opacity: 0, y: 20, letterSpacing: "0.35em" });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        document.documentElement.style.overflow = "";
        loader.remove();
      },
    });

    tl.to(text, {
      opacity: 1,
      y: 0,
      duration: 1.1,
    })
      .to(text, {
        letterSpacing: "0.55em",
        duration: 0.9,
      }, "-=0.6")
      .to(text, {
        opacity: 0,
        y: -20,
        duration: 0.8,
        delay: 0.3,
      })
      // WINDOW / MASK OPEN UP
      .to(loader, {
        yPercent: -100,
        duration: 1.3,
        ease: "power4.inOut",
      });

    // Failsafe
    const safetyTimer = setTimeout(() => {
      document.documentElement.style.overflow = "";
      loader?.remove();
    }, 4000);

    return () => clearTimeout(safetyTimer);
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
    >
      <div
        ref={textRef}
        className="text-xs uppercase font-medium text-black/80"
        style={{ letterSpacing: "0.35em" }}
      >
        Mousin
      </div>
    </div>
  );
}

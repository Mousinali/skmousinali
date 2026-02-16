"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  const lenisRef = useRef(null);
  const rafCallbackRef = useRef(null);

  useEffect(() => {
    /* Prevent multiple instances */
    if (lenisRef.current) return;

    const lenis = new Lenis({
      duration: 1.2,        // ⬆ slightly smoother
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.9, // ⬇ reduces harsh wheel jumps
      lerp: 0.08,           // ⬅ key for natural inertia
    });

    lenisRef.current = lenis;

    // Sync Lenis with GSAP
    lenis.on("scroll", ScrollTrigger.update);

    const rafCallback = (time) => {
      lenis.raf(time * 1000);
    };
    rafCallbackRef.current = rafCallback;

    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      if (rafCallbackRef.current) {
        gsap.ticker.remove(rafCallbackRef.current);
        rafCallbackRef.current = null;
      }
    };
  }, []);

  return null;
}

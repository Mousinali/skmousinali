"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function PageLoader() {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const hasRun = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    const loader = loaderRef.current;
    const text = textRef.current;

    // ❌ Only run on homepage
    if (pathname !== "/") {
      unlockScroll();
      loader?.remove();
      return;
    }

    if (hasRun.current) return;
    hasRun.current = true;

    if (!loader || !text) return;

    /* =============================
       🔒 LOCK SCROLL
       ============================= */
    lockScroll();

    // Initial state
    gsap.set(loader, { yPercent: 0 });
    gsap.set(text, {
      opacity: 0,
      y: 20,
      letterSpacing: "0.35em",
    });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        unlockScroll();
        loader.remove();
      },
    });

    tl.to(text, {
      opacity: 1,
      y: 0,
      duration: 1.1,
    })
      .to(
        text,
        {
          letterSpacing: "0.55em",
          scale: 1.5,
          duration: 0.9,
        },
        "-=0.6"
      )
      .to(text, {
        opacity: 0,
        y: -20,
        duration: 0.8,
        delay: 0.3,
      })
      .to(loader, {
        yPercent: -100,
        duration: 1.3,
        ease: "power2.inOut",
      });

    /* =============================
       🛟 FAILSAFE (ABSOLUTE)
       ============================= */
    const safetyTimer = setTimeout(() => {
      unlockScroll();
      loader?.remove();
    }, 4500);

    /* =============================
       🧹 CLEANUP (VERY IMPORTANT)
       ============================= */
    return () => {
      clearTimeout(safetyTimer);
      unlockScroll();
      tl.kill();
    };
  }, [pathname]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
    >
      <div
        ref={textRef}
        className="text-xs uppercase font-medium text-black/80 opacity-0"
        style={{ letterSpacing: "0.35em" }}
      >
        Mousin
      </div>
    </div>
  );
}

/* =============================
   SCROLL HELPERS (CLEAN)
   ============================= */
function lockScroll() {
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
}

function unlockScroll() {
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
}

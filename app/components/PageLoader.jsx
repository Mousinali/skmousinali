"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

/* =============================
   SCROLL LOCK HELPERS
   ============================= */

function preventScroll(e) {
  e.preventDefault();
}

function preventKeys(e) {
  const keys = [
    "ArrowUp",
    "ArrowDown",
    "PageUp",
    "PageDown",
    "Home",
    "End",
    " ",
  ];
  if (keys.includes(e.key)) {
    e.preventDefault();
  }
}

function lockScroll() {
  // 🔑 ALWAYS START AT TOP
  window.scrollTo(0, 0);

  document.body.style.position = "fixed";
  document.body.style.top = "0px";
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";

  document.addEventListener("wheel", preventScroll, { passive: false });
  document.addEventListener("touchmove", preventScroll, { passive: false });
  document.addEventListener("keydown", preventKeys);
}

function unlockScroll() {
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";

  document.removeEventListener("wheel", preventScroll);
  document.removeEventListener("touchmove", preventScroll);
  document.removeEventListener("keydown", preventKeys);

  // ✅ Stay at top after loader
  window.scrollTo(0, 0);
}

/* =============================
   PAGE LOADER
   ============================= */

export default function PageLoader() {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const hasRun = useRef(false);
  const pathname = usePathname();
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (!mounted.current) return;

    const loader = loaderRef.current;
    const text = textRef.current;

    /* ❌ Run only on homepage */
    if (pathname !== "/") {
      unlockScroll();
      /* Use opacity instead of remove to avoid DOM issues */
      if (loader) {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
      }
      return;
    }

    /* ❌ Prevent StrictMode double run */
    if (hasRun.current) return;
    hasRun.current = true;

    if (!loader || !text) return;

    /* 🔒 LOCK SCROLL */
    lockScroll();

    /* Initial GSAP state */
    gsap.set(loader, { yPercent: 0, opacity: 1, pointerEvents: "auto" });
    gsap.set(text, {
      opacity: 0,
      y: 20,
      letterSpacing: "0.35em",
      scale: 1,
    });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        unlockScroll();
        /* Use opacity instead of remove */
        gsap.to(loader, {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.3,
        });
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

    /* 🛟 FAILSAFE */
    const safetyTimer = setTimeout(() => {
      if (mounted.current) {
        unlockScroll();
        if (loader) {
          loader.style.opacity = "0";
          loader.style.pointerEvents = "none";
        }
      }
    }, 4500);

    /* 🧹 CLEANUP */
    return () => {
      if (safetyTimer) clearTimeout(safetyTimer);
      if (mounted.current) {
        unlockScroll();
      }
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

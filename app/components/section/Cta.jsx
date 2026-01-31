"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ProjectContactGlassGSAP() {
  const [currency, setCurrency] = useState("INR");

  const blob1 = useRef(null);
  const blob2 = useRef(null);

  // 🔥 GSAP background animation (SAFE)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(blob1.current, {
        y: -60,
        x: 40,
        scale: 1.1,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(blob2.current, {
        y: 50,
        x: -40,
        scale: 1.15,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-[#f6f6f6] py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

        {/* LEFT — EDITORIAL TYPOGRAPHY */}
        <div>
          <span className="text-xs tracking-widest text-slate-500 uppercase">
            • Contact
          </span>

          <h2 className="mt-6 text-[56px] md:text-6xl leading-[1.2] font-semibold text-slate-900 pe-5">
            HAVE A 
            <span className="text-slate-400"> PROJECT</span> IN MIND?
          </h2>

          <div className="my-8 h-px w-full bg-slate-300" />

          <p className="text-lg text-slate-700 max-w-md mb-10">
            I’m always open to <strong>collaborations</strong> and creative
            challenges. Let’s build something meaningful.
          </p>

          <div className="space-y-3 text-sm">
            <p className="uppercase tracking-wider text-slate-500">
              Let’s connect
            </p>
            <p className="font-medium text-slate-900">
              work.mousin@gmail.com
            </p>
            <p className="font-medium text-slate-900">
              +91 62903 97299
            </p>
          </div>
        </div>

        {/* RIGHT — GLASS FORM */}
        <div className="relative">
          {/* GSAP BLOBS */}
          <div
            ref={blob1}
            className="absolute -top-24 -left-24 w-80 h-80 bg-indigo-300/40 rounded-full blur-3xl"
          />
          <div
            ref={blob2}
            className="absolute bottom-0 -right-24 w-80 h-80 bg-purple-300/40 rounded-full blur-3xl"
          />

          {/* GLASS CARD */}
          <div className="relative z-10 bg-white/60 backdrop-blur-2xl border border-white/60 rounded-3xl shadow-2xl p-10">
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">
              Start a Project
            </h3>
            <p className="text-slate-600 mb-8">
              Share your idea and I’ll reply within 24 hours.
            </p>

            <form className="space-y-5">
              <Input label="Full Name" placeholder="John Doe" />
              <Input label="Email Address" placeholder="john@example.com" />

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Project Type
                </label>
                <select className="w-full min-h-10 border-b border-gray-300  focus:border-slate-900 focus:ring-slate-900">
                  <option>Website</option>
                  <option>UI / UX Design</option>
                  <option>Landing Page</option>
                  <option>Custom Product</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <div className="flex items-center justify-between ">
                  <label className="text-sm font-medium text-slate-700">
                    Estimated Budget
                  </label>

                  <div className="flex bg-slate-100/70 rounded-full p-1">
                    {["INR", "USD"].map((cur) => (
                      <button
                        key={cur}
                        type="button"
                        onClick={() => setCurrency(cur)}
                        className={`px-4 py-1 text-xs font-semibold rounded-full transition ${
                          currency === cur
                            ? "bg-white shadow text-slate-900"
                            : "text-slate-500"
                        }`}
                      >
                        {cur}
                      </button>
                    ))}
                  </div>
                </div>

                <select className="w-full min-h-10 border-b border-gray-300  focus:border-slate-900 focus:ring-slate-900">
                  {currency === "INR" ? (
                    <>
                      <option>₹25,000 – ₹50,000</option>
                      <option>₹50,000 – ₹1,00,000</option>
                      <option>₹1,00,000 – ₹2,50,000</option>
                      <option>₹2,50,000+</option>
                    </>
                  ) : (
                    <>
                      <option>$500 – $1,000</option>
                      <option>$1,000 – $2,500</option>
                      <option>$2,500 – $5,000</option>
                      <option>$5,000+</option>
                    </>
                  )}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Project Brief
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your idea, timeline, goals…"
                  className="w-full py-3 resize-none outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition"
              >
                Send Project Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Input Component */
function Input({ label, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full  min-h-12 outline-none  border-b border-gray-300  focus:border-slate-900 focus:ring-slate-900"
      />
    </div>
  );
}

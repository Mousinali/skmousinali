"use client"
import React from 'react'
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";


const feedbacks = [
    {
        name: "Rohit Roy",
        role: "Founder Technopia",
        text: "The frontend was built with precision and reliability. Work was completed exactly as promised, responsive across devices, and delivered professionally on time. Excellent  support and very trustworthy collaboration overall."
    },
    {
        name: "Somenath Mukherjee",
        role: "Speech Therapist",
        text: "API integration was implemented seamlessly with no errors. The process was transparent, communication was clear, and delivery punctual. Very professional freelancer with strong technical skills and a reliable approach."
    },
    {
        name: "Kevin Watson",
        role: "Designer at GS Software",
        text: "UI/UX design was handled efficiently, resulting in a responsive and intuitive frontend. Quick revisions and consistent professionalism made the entire process smooth. Excellent freelance service meeting all project expectations."
    },
    {
        name: "Kuntal Sarkar",
        role: "Co-Founder Hearing Plus",
        text: "Frontend work was completed with high-quality output, professional conduct, and clear communication. The results were responsive, easy to use, and delivered within deadlines. Very reliable and skilled freelancer experience."
    },
    {
        name: "Saif Ali Khan",
        role: "Owner Neo Alexion",
        text: "A professional freelancer who delivered clean, responsive frontend development. Communication was excellent, timelines were respected, and the end product worked smoothly across devices. Very reliable for future collaborations."
    },
    {
        name: "Jimmy Moxley",
        role: "Product Designer",
        text: "The freelance delivery exceeded expectations. Clean UI/UX design, responsive layout, and quick revisions made the project stress-free. Professional attitude and attention to detail resulted in a very successful outcome."
    },
    {
        name: "Asitava Deb Roy",
        role: "Doctor & Professor",
        text: "Frontend implementation was well executed with seamless API integration. The freelancer ensured error-free delivery, maintained clear communication, and respected deadlines. A dependable and highly professional experience from start."
    },
    {
        name: "Neha Gupta",
        role: "CEO of Giftmade",
        text: "Freelance work was sleek, professional, and mobile-friendly. Frontend was responsive, API integration smooth, and overall delivery punctual. Very satisfied with the professionalism and quality delivered throughout this project."
    }
];

const Testimonials = () => {
    useGSAP(() => {
        /** ----------------
         * Testimonials (Desktop only)
         * ---------------- */

        ScrollTrigger.matchMedia({

            // For screens above 1025px
            "(min-width: 1025px)": function () {

                // Pin Section
                ScrollTrigger.create({
                    trigger: ".client-rev",
                    start: "top top",
                    end: "+=180%",
                    pin: true,
                    scrub: true,
                });

                // Heading Animation
                gsap.from(".client-rev h2", {
                    xPercent: 100,
                    opacity: 0,
                    duration: 2,
                    scrollTrigger: {
                        trigger: ".client-rev h2",
                        start: "top center",
                        end: "bottom center",
                        scrub: 2,
                    },
                });

                // Cards Animation (after heading)
                gsap.from(".client-rev .inner-contain", {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.4,
                    delay: 2,
                    scrollTrigger: {
                        trigger: ".client-rev .container-fluid",
                        start: "90% center+=100",
                        end: "+=100%",
                        scrub: true,
                    },
                });
            },

            // Optional: reset things for smaller screens
            "(max-width: 1024px)": function () {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
                gsap.set([".client-rev h2", ".client-rev .inner-contain"], { clearProps: "all" });
            }
        });

    }, []);



    return (
        <>
            <section className="relative client-rev bg-[#F6F6F6] min-h-screen overflow-hidden xl:block hidden">
                <h2 className="fade-title font-weight-500 text-[#DFDFDF] whitespace-nowrap">
                    Testimonials
                </h2>
                <div className="container-fluid relative z-10">
                    <div className="grid xl:grid-cols-4 grid-cols-3 gap-5 gap-y-10 feedback-wrapper">
                        {feedbacks.map((fb, i) => (
                            <div
                                key={i}
                                className="inner-contain bg-white p-7 rounded-md shadow"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h5 className="font-weight-500">{fb.name}</h5>
                                        <small className="text-gray-500">{fb.role}</small>
                                    </div>
                                    {/* <div>
                                        <Image
                                            src={quote}
                                            alt="Quote"
                                            width={54}
                                            height={50}
                                            className='quote-img'
                                        />
                                    </div> */}
                                </div>
                                <p className="text-gray-700 leading-relaxed text-sm">{fb.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='xl:hidden block relative testimonial bg-[#F6F6F6] section-padding'>
                <div className="container-fluid relative z-10">
                    <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4">
                        {feedbacks.map((fb, i) => (
                            <div
                                key={i}
                                className="inner-contain bg-white p-7 rounded-md shadow"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h5 className="font-weight-500">{fb.name}</h5>
                                        <small className="text-gray-500">{fb.role}</small>
                                    </div>
                                    {/* <div>
                                        <Image
                                            src={quote}
                                            alt="Quote"
                                            width={54}
                                            height={50}
                                            className='quote-img'
                                        />
                                    </div> */}
                                </div>
                                <p className="text-gray-700 leading-relaxed text-sm">{fb.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials
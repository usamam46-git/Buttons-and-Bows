import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { REVIEWS } from "@/app/constants/assets";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".review-animate", {
                opacity: 0,
                y: 40,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full py-20 px-6 sm:px-12 lg:px-20 text-center"
            style={{ backgroundColor: "#FEFBEA" }}
        >
            <h2 className="text-3xl sm:text-4xl text-[#518C5E] font-semibold mb-20 review-animate">
                See what others are saying about us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {REVIEWS.map((review, idx) => (
                    <div
                        key={idx}
                        className="review-animate rounded-2xl p-6 pt-12 py-30 relative bg-[#FFF7E8]"
                        style={{ border: `2px dashed ${review.color}` }}
                    >
                        <div className='absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md'>
                            <Image
                                src={review.img}
                                alt="reviewer"
                                width={200}
                                height={200}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        <p className="text-gray-800 text-sm leading-relaxed mt-4">{review.text}</p>
                        <p className="text-gray-600 mt-4 text-sm italic">{review.author}</p>
                    </div>
                ))}
            </div>

            <div className="mt-12 review-animate">
                <div className="p-1 border-2 border-dashed border-[#518C5E] rounded-lg inline-block">

                    <Button
                        className="px-6 py-6 text-lg rounded shadow-md"
                        style={{ backgroundColor: "#518C5E", color: "white" }}
                    >
                        Read more reviews
                    </Button>
                </div>
            </div>
        </section>
    );
}
'use client'

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import gsap from "gsap";

export default function Hero() {
  const firstLineRef = useRef<HTMLDivElement>(null);
  const secondLineRef = useRef<HTMLDivElement>(null);
  const loveSpanRef = useRef<HTMLSpanElement>(null);
  const borderSpanRef = useRef<HTMLSpanElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const circleRefs = useRef<(HTMLElement | null)[]>([]);
  const iconRefs = useRef<(SVGSVGElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();
    circleRefs.current.forEach((circle, i) => {
      if (circle) {
        tl.fromTo(
          circle,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: gsap.utils.random(0.6, 0.8),
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          i * 0.1
        );
      }
    });
    tl.fromTo(
      firstLineRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "+=0.2"
    );
    tl.fromTo(
      secondLineRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );

    tl.fromTo(
      loveSpanRef.current,
      { scale: 0.5, rotation: -180 },
      { scale: 1, rotation: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" },
      "-=0.5"
    );
    tl.fromTo(
      borderSpanRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      { scaleX: 1, duration: 0.6, ease: "power2.out" },
      "-=0.6"
    );

    // Paragraph fade/slide
    tl.fromTo(
      pRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
      "-=0.2"
    );
    tl.fromTo(
      buttonRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.7)" },
      "-=0.3"
    );
    iconRefs.current.forEach((icon, i) => {
      if (icon) {
        tl.fromTo(
          icon,
          { scale: 0, rotation: 360 },
          { scale: 1, rotation: 0, duration: 0.5, ease: "back.out(1.7)" },
          "-=0.2" + (i * 0.1)
        );
      }
    });
    tl.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.5"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#FEFBEA] px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
            <div ref={firstLineRef}>Rooted in Tradition,</div>
            <div ref={secondLineRef} className="inline-flex items-center gap-2">
              Growing with
              <span className="relative">
                <span ref={borderSpanRef} className="absolute w-[100px] ml-2 skew-y-6 -inset-3 -top-3 rounded-full sm:w-[130px] border-2 border-orange-200"></span>
                <span ref={loveSpanRef} className="relative ml-2 text-orange-500 font-medium">
                  {" "}
                  Love
                </span>
              </span>
            </div>
          </h1>

          <p ref={pRef} className="text-gray-700 text-lg mb-6">
            A trusted name in early learning for over 50 years in Puyallup, WA
          </p>

          <Button ref={buttonRef} className="bg-[#518C5E] hover:bg-[#4a7d56] text-white px-6 py-4 h-auto text-lg rounded-xl shadow">
            Schedule a Tour
          </Button>

          <div className="mt-8 flex items-center gap-4 text-gray-600">
            <span>Trusted by:</span>
            <FcGoogle ref={(el) => (iconRefs.current[0] = el)} className="w-6 h-6" />
            <FaFacebook ref={(el) => (iconRefs.current[1] = el)} className="w-6 h-6" />
            <img src="/logo.jpg" className="w-[160px] mix-blend-multiply" />
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <img
            ref={imageRef}
            src="/hero2.jpg"
            alt="child"
            className="relative z-10 w-[330px] h-[330px] object-cover rounded-full shadow-lg"
          />
          <div ref={(el) => (circleRefs.current[0] = el)} className="absolute w-64 h-64 bg-orange-300 rounded-full -right-10 top-10 opacity-60"></div>
          <div ref={(el) => (circleRefs.current[1] = el)} className="absolute w-52 h-52 bg-green-700 rounded-full -bottom-6 right-16 opacity-70"></div>
          <div ref={(el) => (circleRefs.current[2] = el)} className="absolute w-50 h-50 border-2 border-dotted border-gray-300 rounded-full -top-6 left-4"></div>
          <div ref={(el) => (circleRefs.current[3] = el)} className="absolute w-20 h-20 border-2 border-dotted border-gray-300 rounded-full bottom-4 left-2"></div>
          <div ref={(el) => (circleRefs.current[4] = el)} className="absolute w-20 h-20 border-2 border-dotted border-gray-300 rounded-full bottom-4 left-2"></div>
        </div>
      </div>
    </section>
  );
}
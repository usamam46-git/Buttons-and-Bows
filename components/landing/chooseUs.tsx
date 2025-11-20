import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { leftFeatures, whyChooseUs } from "@/app/constants/assets";
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ChooseUsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-in", {
        opacity: 0,
        y: 40,
        duration: 0.9,
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
      className="w-full py-20 px-6 sm:px-12 lg:px-20 relative"
      style={{ backgroundColor: "#FEFBEA" }}
    >
      <div
        className="hidden md:block absolute left-10 top-20 rounded-full"
        style={{ width: 70, height: 70, backgroundColor: "#518C5E" }}
      />
      <div
        className="absolute right-10 top-1/3 rounded-full"
        style={{ width: 100, height: 100, backgroundColor: "#518C5E"}}
      />
      <div
        className="absolute left-20 bottom-20 rounded-full"
        style={{ width: 50, height: 50, backgroundColor: "#518C5E", opacity: 0.15 }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT TEXT BLOCK */}
        <div className="space-y-6 fade-in">
          <h2 className="text-4xl font-semibold leading-tight">
            More <span className="text-[#518C5E] font-bold">Support</span> for You & Your Child
          </h2>
          <p className="text-gray-700 max-w-md">
            At Buttons & Bows, we care for the whole family. Our program includes:
          </p>

          <div className="space-y-5">
            {leftFeatures.map((item, i) => (
              <div key={i} className="flex gap-4 fade-in">
                <div className="w-12 h-12 rounded-full bg-[#f1c2a5] shadow flex items-center justify-center">
                  <item.icon className="text-[#518C5E] " size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-gray-700 text-sm">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE BLOCK (placeholder) */}
        <div className="rounded-2xl overflow-hidden shadow-lg fade-in h-72 sm:h-96">
          <Image
            src='/ls5.jpg'
            alt="section image placeholder"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-20">
        <div className="rounded-2xl overflow-hidden shadow-lg fade-in h-72 sm:h-96 order-2 lg:order-1">
          <Image
            src='/playing.jpg'
            alt="placeholder image"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="space-y-6 order-1 lg:order-2 fade-in">
          <h2 className="text-4xl font-semibold leading-tight">Why <span className="text-[#518C5E]">Choose</span> Us</h2>

          <ul className="space-y-4">
            {whyChooseUs.map((item, index) => (
              <li key={index} className="flex gap-4 items-center fade-in">
                <Check className="text-[#518C5E]" size={22} />
                <span className="font-medium text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
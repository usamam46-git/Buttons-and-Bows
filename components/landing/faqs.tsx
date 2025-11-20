'use client'

import React, { useEffect, useRef } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FAQS } from "@/app/constants/assets";
import { TableOfContents } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function FAQSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-animate", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.12,
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
        className="hidden md:block absolute right-1/3 top-20 rounded-full border-2 border-dashed"
        style={{ width: 90, height: 90, borderColor: "#518C5E" }}
      />
      <div
        className="hidden md:block absolute right-16 top-56 rounded-full border-2 border-dashed"
        style={{ width: 110, height: 110, borderColor: "#518C5E" }}
      />
      <div
        className="hidden md:block absolute left-50 top-50 rounded-full border-2 border-dashed"
        style={{ width: 110, height: 110, borderColor: "#FED0AD" }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-4 faq-animate">
          <span className="text-4xl font-semibold mr-2 text-[#518C5E]">FAQ</span> <TableOfContents className="inline  text-[#d89765]" />
          <p className="text-gray-700 max-w-sm">The most common questions from parents.</p>
          <p className="text-gray-700 max-w-sm">Do you have more questions? Write to us:<br /> info@buttonsandbows.com</p>
        </div>
        <div className="space-y-4 faq-animate">
          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl overflow-hidden border border-transparent"
              >
                <AccordionTrigger
                  className="px-6 py-4 text-left text-lg font-medium transition-all"
                  style={{ backgroundColor: "#FED0AD" }}
                  data-active-bg="#FF8D3A"
                  onClick={(e) => {
                    const el = e.currentTarget;
                    const isOpen = el.getAttribute("aria-expanded") === "true";
                    el.style.backgroundColor = isOpen ? "#FED0AD" : "#FF8D3A";
                  }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-3 text-gray-700 bg-[#FFF4E9]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

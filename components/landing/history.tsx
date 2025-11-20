'use client'

import React from "react";
import { Button } from "@/components/ui/button";

export default function History() {

  return (
    <section className="relative w-full py-20 px-9 bg-[#FEFBEA] overflow-hidden">
      <div className="hidden md:block absolute top-24 left-[15%] w-40 h-40 border-2 border-dashed border-gray-300 rounded-full opacity-60"></div>
      <div className="hidden md:block absolute top-48 left-[5%] w-30 h-30 bg-orange-400 rounded-full opacity-90"></div>
      <div className="hidden md:block absolute bottom-40 left-[8%] w-20 h-20 border-2 border-dashed border-gray-300 rounded-full opacity-60"></div>
      <div className="hidden md:block absolute bottom-20 left-[12%] w-15 h-15 bg-orange-200 rounded-full opacity-80"></div>

      <div className="hidden md:block absolute top-20 right-[15%] w-20 h-20 border-2 border-dashed border-gray-300 rounded-full opacity-60"></div>
      <div className="hidden md:block absolute top-44 right-[5%] w-15 h-15 bg-[#518C5E] rounded-full opacity-90"></div>
      <div className="hidden md:block absolute bottom-48 right-[12%] w-14 h-14 border-2 border-dashed border-gray-300 rounded-full opacity-60"></div>
      <div className="hidden md:block absolute bottom-24 right-[8%] w-10 h-10 bg-orange-500 rounded-full opacity-90"></div>

      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-[#518C5E] mb-8 font-serif">
          A Barn, A Vision, A Legacy
        </h2>
        <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-[15px]">
          <p>
            In the 1960s, Ms. Barbara dreamed of{" "}
            <span className="font-bold text-gray-800">
              more than just socialization
            </span>{" "}
            for young children. So she and her husband turned their barn into
            Buttons & Bows Preschool.
          </p>
          <p>
            More than 55 years later, her warm,{" "}
            <span className="font-bold text-gray-800">music-rich</span> and
            academic approach continues — with{" "}
            <span className="font-bold text-gray-800">
              strong family connections
            </span>{" "}
            at the heart of everything we do.
          </p>
        </div>

        <div className="relative mt-10 mb-8 w-full max-w-lg">
          <svg
            className="absolute -top-8 -right-8 w-20 h-20 skew-y-10 text-orange-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="2" x2="12" y2="6" />
            <line x1="4.22" y1="4.22" x2="7.05" y2="7.05" />
            <line x1="19.78" y1="4.22" x2="16.95" y2="7.05" />
          </svg>
          <div className="relative rounded-2xl overflow-hidden shadow-md rotate-1 hover:rotate-0 transition-transform duration-500">
            <img
              src="/classroom.jpg" 
              alt="Old black and white photo of a classroom"
              className="w-full h-[250px] grayscale sepia-[0.2]"
            />
           
          </div>
        </div>
        <div className="w-full border-2 border-dashed border-[#518C5E] rounded-3xl p-6 md:p-8 mb-10 bg-[#FEFBEA]">
          <p className="text-gray-800 font-medium text-lg italic">
            "Ask any local and they'll proudly say: 'I went to Buttons & Bows!'"
          </p>
        </div>
        <div className="p-1.5 border-2 border-dashed border-green-700/30 rounded-lg inline-block">
          <Button
            className="text-white bg-[#518C5E] px-8 py-6 text-base rounded-md shadow-none hover:opacity-90 transition-opacity"
          >
            More about us
          </Button>
        </div>
      </div>
    </section>
  );
}
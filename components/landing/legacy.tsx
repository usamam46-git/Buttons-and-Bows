'use client'

import React from "react";
import { Button } from "@/components/ui/button";

export default function Legacy() {
    const greenColor = "#518C5E";

    return (
        <section className="w-full py-20 px-6 bg-[#FEFBEA] flex justify-center">
            <div className="relative max-w-6xl w-full">
                <div className="absolute -top-8 -left-4 md:-left-8 z-10">
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-orange-400"
                    >
                        <path
                            d="M25 0L28 22L50 25L28 28L25 50L22 28L0 25L22 22L25 0Z"
                            fill="currentColor"
                            className="opacity-80"
                        />
                        <path
                            d="M40 5L42 15L52 17L42 19L40 29L38 19L28 17L38 15L40 5Z"
                            fill="currentColor"
                            className="opacity-60"
                            transform="scale(0.6) translate(20, 20)"
                        />
                    </svg>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-dashed border-gray-400 rounded-[2.5rem] overflow-hidden bg-[#FEFBEA]">
                    <div className="p-8 md:p-16 flex flex-col justify-center items-start md:border-r-2 md:border-b-2 border-dashed border-gray-400">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            More Than a Preschool
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Children rotate through three specialized learning centers,
                            balancing structure and creativity in short, focused sessions. Our
                            small class sizes and experienced teachers ensure each child is
                            known, supported, and celebrated.
                        </p>
                        <div className="self-end md:self-auto">
                            <div className="p-1 border-2 border-dashed border-green-700/30 rounded-lg inline-block">
                                <Button
                                    className="text-white px-6 py-5 text-md rounded-md shadow-sm hover:opacity-90 transition-opacity"
                                    style={{ backgroundColor: greenColor }}
                                >
                                    Learn more
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-64 md:h-auto border-b-2 md:border-b-2 md:border-l-0 border-dashed border-gray-400">
                        <img
                            src="/playing.jpg"
                            alt="Teacher and children playing"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>


                    <div className="relative h-64 md:h-auto border-b-2 md:border-b-0 md:border-r-2 border-dashed border-gray-400 order-last md:order-none">
                        <img
                            src="/circle.jpg" 
                            alt="Children in circle time"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-8 md:p-16 flex flex-col justify-center items-start">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            A Legacy of Love
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            We're proud to be part of a multigenerational tradition many of
                            our current parents once attended Buttons & Bows themselves! Just
                            ask around "I went to Buttons & Bows!" is something we hear all
                            the time.
                        </p>
                        <div className="self-end">
                            <div className="p-1 border-2 border-dashed border-green-700/30 rounded-lg inline-block">
                                <Button
                                    className="text-white px-6 py-5 text-md rounded-md shadow-sm hover:opacity-90 transition-opacity"
                                    style={{ backgroundColor: greenColor }}
                                >
                                    Learn more
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
import React from "react";
import { Puzzle, Music, BookOpen, ArrowRight } from "lucide-react";

const programsData = [
  {
    title: "Preschool Program",
    subtitle: "(Ages 3 - 5)",
    description:
      "Building confidence through play-based academics and social-emotional support.",
    icon: Puzzle,
    theme: "orange",
  },
  {
    title: "Music & STEM Integration",
    subtitle: "",
    description:
      "Where hands-on learning meets rhythm and curiosity.",
    icon: Music,
    theme: "green",
  },
  {
    title: "Faith-Inspired Learning",
    subtitle: "",
    description:
      "Guided by purpose, compassion, and community values.",
    icon: BookOpen,
    theme: "orange",
  },
];

export default function Programs() {
  // Color definitions
  const greenHex = "#518C5E";
  const orangeHex = "#F97316";

  return (
    <section className="w-full py-20 px-6 bg-[#FEFBEA]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {programsData.map((program, index) => {
          const isGreen = program.theme === "green";
          const mainColor = isGreen ? greenHex : orangeHex;

          return (
            <div
              key={index}
              className="relative bg-transparent rounded-4xl border-2 border-dashed border-[#518C5E] p-8 py-15 skew-y-2 pt-16 flex flex-col items-center text-center h-full"
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 bg-[#FEFBEA] rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center">
                  <program.icon
                    size={32}
                    color={mainColor}
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 leading-tight mt-2">
                {program.title}
              </h3>
              
              {program.subtitle && (
                <span className="text-lg font-bold text-gray-800 block mb-2">
                  {program.subtitle}
                </span>
              )}

              <p className="text-gray-500 text-sm leading-relaxed max-w-[250px] mt-3 mb-12">
                {program.description}
              </p>
              <button
                className="absolute bottom-6 right-6 w-10 h-10 rounded-lg flex items-center justify-center text-white transition-transform hover:scale-105 active:scale-95 shadow-sm"
                style={{ backgroundColor: mainColor }}
                aria-label={`Learn more about ${program.title}`}
              >
                <ArrowRight size={20} />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
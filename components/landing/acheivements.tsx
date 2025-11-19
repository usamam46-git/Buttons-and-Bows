'use client'

import React from 'react';
import { Award, Star, MapPin } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Recognized by the Puyallup',
      subtitle: 'School District & MDA'
    },
    {
      icon: Star,
      title: '5-Star Rated by Local',
      subtitle: 'Families'
    },
    {
      icon: MapPin,
      title: 'Located on South Hill,',
      subtitle: 'Puyallup - Still'
    }
  ];

  return (
    <div className="w-full py-20 px-4 relative overflow-hidden" style={{ backgroundColor: '#518C5E' }}>
      {/* Background SVG Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="lines" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path
              d="M0 50 Q 25 30, 50 50 T 100 50"
              stroke="#2d5a3a"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M0 70 Q 25 50, 50 70 T 100 70"
              stroke="#2d5a3a"
              strokeWidth="0.5"
              fill="none"
            />
            <circle cx="20" cy="20" r="2" fill="#2d5a3a" opacity="0.5" />
            <circle cx="80" cy="80" r="1.5" fill="#2d5a3a" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lines)" />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-4">
                <achievement.icon 
                  size={56} 
                  color="#E8925C" 
                  strokeWidth={1.5}
                />
              </div>

              {/* Title */}
              <h3 className="text-white text-lg font-semibold leading-tight">
                {achievement.title}
              </h3>
              <p className="text-white text-lg font-semibold leading-tight">
                {achievement.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
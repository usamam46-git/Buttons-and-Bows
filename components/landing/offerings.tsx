'use client'

import React from 'react';
import { Button } from '@/components/ui/button';
import { offerings } from '@/app/constants/assets';

const Offerings = () => {

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-8" style={{ backgroundColor: '#FEFBEA' }}>
      <div className="max-w-5xl w-full">
        <div className="relative mb-8">
          <div className="absolute -left-12 top-0">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path d="M10 30L20 20M10 30L20 40" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          
          <h2 className="text-4xl font-bold text-center text-[#518C5E] mb-12">
            What We Offer
          </h2>
        </div>
        <div className="relative bg-[#4A7C59] rounded-3xl p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Icon circle */}
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <offering.icon className="w-8 h-8 text-[#E8925C]" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {offering.title}
                </h3>
                <p className="text-white/90 text-sm mb-6 leading-relaxed">
                  {offering.description}
                </p>
                <div className="p-1 border-2 border-dashed border-amber-50 rounded-lg inline-block"> 

                <Button 
                  variant="secondary"
                  className="bg-white text-gray-800 hover:bg-gray-100 rounded px-6 font-medium"
                  >
                  Read more
                </Button>
                    </div>
              </div>
            ))}
          </div>
          <div className="absolute -bottom-8 -right-8">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <path d="M40 20L50 30M60 40L50 30M50 30L40 40" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
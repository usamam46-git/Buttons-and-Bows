'use client'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { BUTTONS_BOWS_COLORS } from '@/app/constants/assets';


const ButtonBowsGraphics = () => (
  <svg
    className="absolute inset-0 z-10 w-full h-full"
    viewBox="0 0 1000 450"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0 H 1000 V 450 H 0 C 0 450 100 200 450 150 C 600 120 700 300 1000 250 V 0 Z"
      fill="#407B4F"
    />
    <path
      d="M 600 350 C 650 300 750 200 850 250"
      stroke="white"
      fill="none"
      strokeWidth="2"
      strokeDasharray="2 10"
      opacity="0.3"
      strokeLinecap="round"
    />
    <g transform="translate(900, 100)">
      <line
        x1="0"
        y1="0"
        x2="10"
        y2="0"
        stroke="#F99249"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="0"
        y1="0"
        x2="8"
        y2="-8"
        stroke="#F99249"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="0"
        y1="0"
        x2="8"
        y2="8"
        stroke="#F99249"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

const ButtonsAndBowsBanner = () => {
  const imageUrl = '/class.jpg';

  return (
    <div className="relative w-full overflow-hidden h-[700px] md:h-[650px]">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageUrl}
          alt="Classroom"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <ButtonBowsGraphics />
      <div className="relative z-20 flex w-full h-full p-4 md:p-0">
        <div className="hidden md:block md:w-1/2">
        </div>

        <div className="flex flex-col justify-center w-full md:w-1/2 md:p-10">
          <h2 className={`text-3xl mt-80 font-bold md:text-4xl ${BUTTONS_BOWS_COLORS.TextPrimary}`}>
            Ready to Join the Buttons & Bows Family?
          </h2>
          <p className={`mt-4 text-lg ${BUTTONS_BOWS_COLORS.TextPrimary}`}>
            Schedule a tour and see the difference for yourself.
          </p>

          <div className="flex flex-col mt-8 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="p-1 border-2 border-dashed border-amber-50 rounded-lg inline-block">

            <Button
              variant="outline"
              className={`
                h-12 w-full md:w-auto px-6 
                border-2 border-white 
                border-dashed rounded-lg 
                ${BUTTONS_BOWS_COLORS.ButtonText} 
                bg-white hover:bg-white/90
                `}
                >
              (253) 845-2611
            </Button>
                </div>
            <div className="p-1 border-2 border-dashed border-[#F99249] rounded-lg inline-block">

            <Button
              className={`
                h-12 w-full md:w-auto px-6 font-bold 
                ${BUTTONS_BOWS_COLORS.ButtonOrange} 
                hover:${BUTTONS_BOWS_COLORS.ButtonOrange}/90 
                text-white border-2 border-[#F99249]
                `}
                >
              Contact Us
            </Button>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonsAndBowsBanner;
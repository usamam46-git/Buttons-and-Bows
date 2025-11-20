import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const images = [
    '/portrait1.jpeg',
    '/portrait2.jpg',
    '/portrait3.jpg',
    '/ls1.webp',
    '/ls2.jpg',
    '/ls3.jpg',
    '/ls4.jpg',
    'ls5.jpg'
  ];
  const layout = [
    [40, 35, 25],
    [30, 45, 25],
    [50, 50] 
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      imagesRef.current.forEach((img, index) => {
        if (img) {
          gsap.fromTo(
            img,
            {
              opacity: 0,
              y: 60,
              scale: 0.9,
              rotateX: -15
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: img,
                start: 'top 85%',
                end: 'top 60%',
                toggleActions: 'play none none reverse'
              },
              delay: index * 0.1
            }
          );
        }
      });
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  let imageIndex = 0;

  return (
    <div
      ref={galleryRef}
      className="w-full py-20 px-4"
      style={{ backgroundColor: '#FEFBEA' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#518C5E] mb-4">
            Our Gallery
          </h2>
          <p className="text-[#518C5E] text-lg">
            Moments that matter, memories that last
          </p>
        </div>
        <div className="space-y-4 md:space-y-6">
          {layout.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-col md:flex-row gap-4 md:gap-6"
            >
              {row.map((width, colIndex) => {
                const currentImage = images[imageIndex];
                const currentIndex = imageIndex;
                imageIndex++;

                return (
                  <div
                    key={colIndex}
                    ref={(el) => {(imagesRef.current[currentIndex] = el)}}
                    className="relative group cursor-pointer"
                    style={{
                      flex: `0 0 ${width}%`,
                      minHeight: '250px'
                    }}
                  >
                    <div className="relative h-full overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]">
                      <img
                        src={currentImage}
                        alt={`Gallery image ${currentIndex + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <p className="text-sm font-semibold">Buttons & Bows</p>
                          <p className="text-xs opacity-90">Preschool Memories</p>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: '#518C5E' }}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#E8925C' }}></div>
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#518C5E' }}></div>
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#E8925C' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
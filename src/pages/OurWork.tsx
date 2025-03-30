import React, { useEffect, useState } from 'react';

interface WorkImage {
  src: string;
  alt: string;
}

const OurWork = () => {
  const [workImages, setWorkImages] = useState<WorkImage[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const manualImages = [
      { src: '/work/IMG_1.jpg', alt: 'Project 1' },
      { src: '/work/IMG_2.jpg', alt: 'Project 2' },
      { src: '/work/IMG_3.jpg', alt: 'Project 3' },
      { src: '/work/IMG_4.jpg', alt: 'Project 4' },
      { src: '/work/IMG_5.jpg', alt: 'Project 5' },
      { src: '/work/IMG_6.jpg', alt: 'Project 6' },
    ];
    setWorkImages(manualImages);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              OUR WORK
            </h1>
            <div className="w-20 h-1 bg-brand-gold mx-auto mb-6"></div>
          </div>
        </div>
      </div>
      
      {/* Image Gallery */}
      <section className="pb-12 md:pb-20 px-4">
        <div className="container mx-auto">
          {workImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {workImages.map((image, index) => (
                <div 
                  key={index} 
                  className="relative group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`
                    aspect-square overflow-hidden rounded-xl 
                    shadow-lg transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${hoveredIndex === index ? 
                      'ring-4 ring-brand-gold ring-opacity-50 scale-[0.98]' : 
                      'ring-1 ring-gray-100'}
                  `}>
                    <div className="relative h-full w-full">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className={`
                          absolute inset-0 w-full h-full object-cover 
                          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                          ${hoveredIndex === index ? 
                            'scale-110 opacity-90' : 
                            'scale-100 opacity-100'}
                          ${image.src.includes('IMG_2') && 'object-right'}
                        `}
                        style={
                          image.src.includes('IMG_2') 
                            ? { objectPosition: 'right center' } 
                            : { objectPosition: 'right center' }
                        }
                        loading="lazy"
                      />
                      {/* Subtle vignette effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">Loading images...</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default OurWork;
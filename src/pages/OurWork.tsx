import React, { useEffect, useState } from 'react';

interface WorkImage {
  src: string;
  alt: string;
}

const OurWork = () => {
  const [workImages, setWorkImages] = useState<WorkImage[]>([]);

  useEffect(() => {
    const manualImages = [
      { src: '/work/IMG_1.jpg', alt: '' },
      { src: '/work/IMG_2.jpg', alt: '' },
      { src: '/work/IMG_3.jpg', alt: '' },
      { src: '/work/IMG_4.jpg', alt: '' },
      { src: '/work/IMG_5.jpg', alt: '' },
      { src: '/work/IMG_6.jpg', alt: '' },
    ];
    setWorkImages(manualImages);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Simplified to match BERLUKA style */}
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
      
      {/* Image Gallery - Tight grid layout */}
      <section className="pb-12 md:pb-20 px-4">
        <div className="container mx-auto">
          {workImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {workImages.map((image, index) => (
                <div 
                  key={index} 
                  className="relative overflow-hidden"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className={`w-full h-full object-cover aspect-square ${
                      image.src.includes('IMG_2') ? 'object-right' : ''
                    }`}
                    loading="lazy"
                    style={
                      image.src.includes('IMG_2') 
                        ? { objectPosition: 'right center' } 
                        : {}
                    }
                  />
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
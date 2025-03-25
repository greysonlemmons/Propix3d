import React, { useState, useEffect, useCallback } from 'react';

const Hero = () => {
  const scrollToPackages = () => {
    const packages = document.getElementById('packages');
    if (packages) {
      packages.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu if open
      const mobileMenu = document.querySelector('[role="dialog"]');
      if (mobileMenu) {
        mobileMenu.setAttribute('aria-hidden', 'true');
      }
    }
  };

  // Background images array
  const backgroundImages = [
    { src: '/Website Pictures/6-print-DJI_0814.jpg', alt: 'Aerial Property View' },
    { src: '/aerial-view-construction-site.jpg', alt: 'Aerial Construction View' },
    { src: '/Website Pictures/30-print-IMG_3934.jpg', alt: 'Elegant Kitchen' },
    { src: '/Website Pictures/1-print-DJI_0387.jpg', alt: 'Aerial Property Shot' },
    { src: '/Website Pictures/17-print-IMG_9221.jpg', alt: 'Interior View' },
    { src: '/Website Pictures/2-print-DJI_0538a.jpg', alt: 'Aerial Property Perspective' }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));

  // Preload next image
  const preloadNextImage = useCallback((nextIndex: number) => {
    if (loadedImages.has(nextIndex)) return;
    
    const img = new Image();
    img.src = backgroundImages[nextIndex].src;
    img.onload = () => {
      setLoadedImages(prev => new Set(prev).add(nextIndex));
    };
  }, [loadedImages]);

  useEffect(() => {
    // Preload next image
    const nextIndex = (currentImageIndex + 1) % backgroundImages.length;
    preloadNextImage(nextIndex);

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(prevIndex => {
          const nextIndex = (prevIndex + 1) % backgroundImages.length;
          // Preload the next image after this one
          preloadNextImage((nextIndex + 1) % backgroundImages.length);
          return nextIndex;
        });
        setIsTransitioning(false);
      }, 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentImageIndex, preloadNextImage]);

  return (
    <div className="relative min-h-screen">
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentImageIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {loadedImages.has(index) && (
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>
      ))}
      
      {/* Loading Placeholder */}
      {!loadedImages.has(currentImageIndex) && (
        <div className="absolute inset-0 bg-black animate-pulse"></div>
      )}
      
      {/* Main Content */}
      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Main Title */}
            <h1 className="text-[4rem] sm:text-[6rem] md:text-[10rem] font-black leading-none tracking-tight flex items-baseline flex-wrap">
              <span className="text-white">
                PROPIX
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-2xl sm:text-3xl md:text-4xl text-[#C9AE5D] font-bold mt-4 sm:mt-8 mb-4 sm:mb-6">
              Capturing Property Potential<br className="hidden sm:block" />
              from Every Angle
            </p>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-200 mb-8 sm:mb-12 max-w-2xl">
              Professional photography, videography, and drone services 
              to showcase your properties at their absolute best.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href="https://pro-pix-3d.aryeo.com/order-forms/86b73249-51e8-4e40-93a0-cad1581fe504?placing_team_membership_id=0193407a-76c8-7286-a2f3-45251f297173"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C9AE5D] text-black px-6 sm:px-10 py-4 sm:py-5 rounded-md text-lg sm:text-xl font-bold hover:bg-[#D4BC75] transition-all duration-300 transform hover:scale-105 shadow-lg inline-block text-center w-full sm:w-auto"
              >
                Place an Order
              </a>
              <button 
                onClick={scrollToPackages} 
                className="bg-white text-black px-6 sm:px-10 py-4 sm:py-5 rounded-md text-lg sm:text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
              >
                View Our Packages
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#C9AE5D] opacity-10 rounded-full blur-3xl"></div>
    </div>
  );
}

export default Hero;
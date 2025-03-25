import React, { useState } from 'react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'real-estate';
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [showAll, setShowAll] = useState(false);

  const images: GalleryImage[] = [
    // Real Estate Photos
    { id: 1, src: '/Website Pictures/22-print-IMG_9236.jpg', alt: 'Luxury Home Exterior', category: 'real-estate' as const },
    { id: 2, src: '/Website Pictures/17-print-IMG_9221.jpg', alt: 'Elegant Living Space', category: 'real-estate' as const },
    { id: 3, src: '/Website Pictures/35-print-IMG_8348.jpg', alt: 'Stylish Home Interior', category: 'real-estate' as const },
    { id: 4, src: '/Website Pictures/1-print-IMG_8423.jpg', alt: 'Contemporary Home', category: 'real-estate' as const },
    { id: 5, src: '/Website Pictures/45-print-IMG_0829.jpg', alt: 'Luxury Property', category: 'real-estate' as const },
    { id: 6, src: '/Website Pictures/1-print-IMG_8357.jpg', alt: 'Modern Architecture', category: 'real-estate' as const },
    { id: 7, src: '/Website Pictures/30-print-IMG_3934.jpg', alt: 'Elegant Home Design', category: 'real-estate' as const },
    { id: 8, src: '/Website Pictures/25-print-IMG_3913.jpg', alt: 'Beautiful Property', category: 'real-estate' as const },
    { id: 9, src: '/Website Pictures/2-print-DJI_0538a.jpg', alt: 'Aerial Home View', category: 'real-estate' as const },
    { id: 10, src: '/Website Pictures/1-print-DJI_0387.jpg', alt: 'Drone Property Shot', category: 'real-estate' as const },
    { id: 11, src: '/Website Pictures/6-print-DJI_0814.jpg', alt: 'Aerial Property Overview', category: 'real-estate' as const },
    { id: 12, src: '/Website Pictures/10-print-DJI_0848.jpg', alt: 'Property Aerial View', category: 'real-estate' as const },
  ];

  const displayedImages = showAll ? images : images.slice(0, 6);

  return (
    <section id="gallery" className="bg-gray-50">
      <div className="w-full">
        <div className="relative w-full">
          <div className="flex flex-wrap justify-center">
            {displayedImages.map((image, index) => (
              <div
                key={image.id}
                className="relative cursor-pointer"
                style={{
                  width: '400px',
                  height: '300px',
                  marginLeft: index % 3 === 0 ? '0' : '-60px',
                  marginTop: index > 2 ? '-60px' : '0',
                  zIndex: index
                }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          
          {!showAll && images.length > 6 && (
            <div className="text-center mt-4 mb-8">
              <button
                onClick={() => setShowAll(true)}
                className="bg-gold-500 text-white px-6 py-2 rounded-md hover:bg-gold-600 transition-colors"
              >
                View More
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery; 
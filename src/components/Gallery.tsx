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
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-lg text-gray-600">View our portfolio of stunning real estate photography</p>
        </div>

        {/* Overlapping Image Grid */}
        <div className="relative max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {displayedImages.map((image, index) => (
              <div
                key={image.id}
                className="relative transform transition-all duration-300 hover:scale-105 hover:z-10"
                style={{
                  width: '300px',
                  height: '200px',
                  marginLeft: index % 3 === 0 ? '0' : '-30px',
                  marginTop: index > 2 ? '-30px' : '0',
                  zIndex: index
                }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="w-full h-full overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                      View Image
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {!showAll && images.length > 6 && (
            <div className="text-center mt-8">
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
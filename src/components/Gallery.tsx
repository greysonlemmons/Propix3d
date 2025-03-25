import React, { useState } from 'react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'real-estate';
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'real-estate'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    // Real Estate Photos
    { id: 1, src: '/Website Pictures/22-print-IMG_9236.jpg', alt: 'Luxury Home Exterior', category: 'real-estate' },
    { id: 2, src: '/Website Pictures/17-print-IMG_9221.jpg', alt: 'Elegant Living Space', category: 'real-estate' },
    { id: 3, src: '/Website Pictures/35-print-IMG_8348.jpg', alt: 'Stylish Home Interior', category: 'real-estate' },
    { id: 4, src: '/Website Pictures/1-print-IMG_8423.jpg', alt: 'Contemporary Home', category: 'real-estate' },
    { id: 5, src: '/Website Pictures/45-print-IMG_0829.jpg', alt: 'Luxury Property', category: 'real-estate' },
    { id: 6, src: '/Website Pictures/1-print-IMG_8357.jpg', alt: 'Modern Architecture', category: 'real-estate' },
    { id: 7, src: '/Website Pictures/30-print-IMG_3934.jpg', alt: 'Elegant Home Design', category: 'real-estate' },
    { id: 8, src: '/Website Pictures/25-print-IMG_3913.jpg', alt: 'Beautiful Property', category: 'real-estate' },
    { id: 9, src: '/Website Pictures/2-print-DJI_0538a.jpg', alt: 'Aerial Home View', category: 'real-estate' },
    { id: 10, src: '/Website Pictures/1-print-DJI_0387.jpg', alt: 'Drone Property Shot', category: 'real-estate' },
    { id: 11, src: '/Website Pictures/6-print-DJI_0814.jpg', alt: 'Aerial Property Overview', category: 'real-estate' },
    { id: 12, src: '/Website Pictures/10-print-DJI_0848.jpg', alt: 'Property Aerial View', category: 'real-estate' },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-lg text-gray-600">View our portfolio of stunning real estate photography</p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm sm:text-base font-medium">
                  View Image
                </span>
              </div>
            </div>
          ))}
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
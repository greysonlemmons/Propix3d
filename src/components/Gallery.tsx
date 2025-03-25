import React from 'react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const Gallery = () => {
  const images: GalleryImage[] = [
    { id: 1, src: '/Website Pictures/22-print-IMG_9236.jpg', alt: 'Luxury Home Exterior' },
    { id: 2, src: '/Website Pictures/17-print-IMG_9221.jpg', alt: 'Elegant Living Space' },
    { id: 3, src: '/Website Pictures/35-print-IMG_8348.jpg', alt: 'Stylish Home Interior' },
    { id: 4, src: '/Website Pictures/1-print-IMG_8423.jpg', alt: 'Contemporary Home' },
    { id: 5, src: '/Website Pictures/45-print-IMG_0829.jpg', alt: 'Luxury Property' },
    { id: 6, src: '/Website Pictures/1-print-IMG_8357.jpg', alt: 'Modern Architecture' },
    { id: 7, src: '/Website Pictures/30-print-IMG_3934.jpg', alt: 'Elegant Home Design' },
    { id: 8, src: '/Website Pictures/25-print-IMG_3913.jpg', alt: 'Beautiful Property' },
    { id: 9, src: '/Website Pictures/2-print-DJI_0538a.jpg', alt: 'Aerial Home View' },
    { id: 10, src: '/Website Pictures/1-print-DJI_0387.jpg', alt: 'Drone Property Shot' },
    { id: 11, src: '/Website Pictures/6-print-DJI_0814.jpg', alt: 'Aerial Property Overview' },
    { id: 12, src: '/Website Pictures/10-print-DJI_0848.jpg', alt: 'Property Aerial View' },
  ];

  return (
    <section id="gallery" className="bg-gray-50">
      {/* Mobile Layout */}
      <div className="block sm:hidden w-screen">
        {images.map((image) => (
          <div
            key={image.id}
            className="w-full"
            style={{
              height: '250px'
            }}
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

      {/* Desktop Layout */}
      <div className="hidden sm:block w-full">
        <div className="flex flex-wrap justify-center">
          {images.map((image, index) => (
            <div
              key={image.id}
              style={{
                width: '400px',
                height: '300px',
                marginLeft: index % 3 === 0 ? '0' : '-60px',
                marginTop: index > 2 ? '-60px' : '0',
                zIndex: index
              }}
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
      </div>
    </section>
  );
};

export default Gallery; 
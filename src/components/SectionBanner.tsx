import React from 'react';

interface SectionBannerProps {
  title: string;
  subtitle: string;
  image: string;
}

const SectionBanner = ({ title, subtitle, image }: SectionBannerProps) => {
  return (
    <div className="relative h-[400px] w-full">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
        <p className="text-xl text-gray-200 max-w-2xl">{subtitle}</p>
      </div>
    </div>
  );
};

export default SectionBanner; 
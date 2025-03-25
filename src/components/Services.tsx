import React from 'react';
import { Camera, Plane, Video, Building2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Professional Photography",
      description: "High-quality interior and exterior photography that captures every detail of your property."
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Videography",
      description: "Cinematic video tours and social media content to engage potential buyers."
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Drone Services",
      description: "Stunning aerial photography and videography to showcase properties from every angle."
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Construction Progress",
      description: "Comprehensive aerial documentation and 3D modeling for construction projects."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">Comprehensive media solutions for real estate professionals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
import React from 'react';
import { Camera, Plane, Video, Clock, Award, Users } from 'lucide-react';

const ServiceCard = ({ icon, title, items }: { icon: React.ReactNode, title: string, items: string[] }) => (
  <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
    <div className="text-[#C9AE5D] mb-6">{icon}</div>
    <h4 className="text-xl font-bold text-black mb-4">{title}</h4>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-[#C9AE5D] mr-3 text-lg leading-none">•</span>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ConstructionPackages = () => {
  const services = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Aerial Documentation",
      items: [
        "High-Resolution Aerial Photos",
        "Bird's-Eye Views & Panoramas",
        "Site Flyovers",
        "360° Orbits",
        "2D Orthomosaic Mapping"
      ]
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Services",
      items: [
        "Professional Video Clips",
        "Cinematic Site Rises",
        "Progress Time-Lapses",
        "Marketing Highlight Reels",
        "Social Media Content"
      ]
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Ground Photography",
      items: [
        "Detailed Progress Photos",
        "Interior Documentation",
        "Exterior Site Coverage",
        "Material & Detail Shots",
        "HDR Photography"
      ]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Professional Standards",
      items: [
        "FAA Licensed Drone Pilot",
        "Professional Photo Editing",
        "High-Resolution Deliverables",
        "Custom Angles Available",
        "Marketing-Ready Content"
      ]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Scheduling",
      items: [
        "One-Time Documentation",
        "Monthly Progress Updates",
        "Weekly Site Monitoring",
        "Custom Timeline Options",
        "Rapid Delivery"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Services",
      items: [
        "Online Delivery Portal",
        "Progress Reports",
        "Team Collaboration Tools",
        "Custom Requirements",
        "Direct Communication"
      ]
    }
  ];

  return (
    <div id="construction" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6">Construction Media</h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Professional aerial and ground photography services to document your construction projects. 
            Our media packages are customized to meet your project's specific needs and timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="mailto:nolan@propix3d.com?subject=Construction%20Media%20Quote%20Request"
            className="inline-block bg-[#C9AE5D] text-black px-12 py-5 rounded-md text-2xl font-bold hover:bg-[#D4BC75] transition duration-300 shadow-lg"
          >
            Get a Free Quote Today
          </a>
          <p className="text-black text-lg mt-6">
            Contact us for a customized media package tailored to your project's needs
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConstructionPackages;
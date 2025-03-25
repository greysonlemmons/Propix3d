import React from 'react';
import { Check } from 'lucide-react';

interface PackageCardProps {
  title: string;
  features: string[];
  highlight?: boolean;
}

const PackageCard = ({ title, features, highlight = false }: PackageCardProps) => (
  <div className={`bg-white rounded-lg shadow-lg p-6 sm:p-8 ${highlight ? 'border-2 border-blue-600 transform scale-105' : ''}`}>
    <h3 className="text-xl sm:text-2xl font-bold mb-6">{title}</h3>
    <ul className="space-y-2 sm:space-y-3">
      {features.map((feature: string, index: number) => (
        <li key={index} className="flex items-start">
          <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 mt-1" />
          <span className="text-sm sm:text-base text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
    <a 
      href="https://pro-pix-3d.aryeo.com/order-forms/86b73249-51e8-4e40-93a0-cad1581fe504?placing_team_membership_id=0193407a-76c8-7286-a2f3-45251f297173"
      target="_blank"
      rel="noopener noreferrer"
      className={`block w-full mt-6 sm:mt-8 py-2 sm:py-3 rounded-md font-semibold text-center text-sm sm:text-base ${
        highlight 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}
    >
      Place an Order
    </a>
  </div>
);

const Packages = () => {
  const packages = [
    {
      title: "Just Photos",
      features: [
        "Interior/Exterior Photos",
        "Custom Lead Generation Website",
        "Next Day Turnaround"
      ]
    },
    {
      title: "Standard Package",
      features: [
        "Professional Photography",
        "Drone Photography",
        "Virtual Twilight Photos",
        "Custom Lead Generation Website",
        "Next Day Turnaround"
      ]
    },
    {
      title: "Grand Slam Marketing",
      highlight: true,
      features: [
        "Professional Photography",
        "Social Media Video Tour",
        "HD Cinematic Video",
        "Drone Photography/Videography",
        "2D Floor Plan",
        "Virtual Twilight Photos",
        "Custom Lead Generation Website",
        "Next Day Turnaround"
      ]
    },
    {
      title: "Social Seller",
      features: [
        "Professional Photography",
        "Walkthrough House Video",
        "Drone Photography/Videography",
        "Virtual Twilight Photos",
        "Custom Lead Generation Website",
        "Next Day Turnaround"
      ]
    }
  ];

  return (
    <section id="packages" className="py-12 sm:py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Real Estate Packages</h2>
          <p className="text-base sm:text-lg text-gray-600">Choose the perfect package for your property</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;
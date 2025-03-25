import React from 'react';
import { Camera, Plane, Video, Building2, Package, Construction } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import ConstructionPackages from './components/ConstructionPackages';
import Footer from './components/Footer';
import SectionBanner from './components/SectionBanner';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      
      {/* Real Estate Section Banner */}
      <SectionBanner
        title="Real Estate Photography"
        subtitle="Showcase your properties with stunning visuals that capture every detail"
        image="Website Pictures/2-print-DJI_0538a.jpg"
      />
      <Packages />

      {/* Gallery Section */}
      <Gallery />

      {/* Construction Section Banner */}
      <div className="relative h-[400px] w-full">
        <div className="absolute inset-0">
          <img
            src="/aerial-view-construction-site.jpg"
            alt="Construction Site Aerial View"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Construction Photography</h2>
          <p className="text-xl text-gray-200 max-w-2xl">Document your construction projects with professional aerial and ground photography</p>
        </div>
      </div>
      <ConstructionPackages />
      
      <Footer />
    </div>
  );
}

export default App;
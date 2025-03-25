import React from 'react';

const ConstructionPackages = () => {
  return (
    <div id="construction" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-black mb-6">Construction Progress Documentation</h2>
          <p className="text-xl text-black mb-16 max-w-3xl mx-auto leading-relaxed">
            Professional aerial and ground photography services to document your construction projects from start to finish. 
            Our comprehensive documentation packages are customized to meet your project's specific needs and timeline.
          </p>
          
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-white rounded-lg shadow-lg p-12">
              <h3 className="text-3xl font-bold text-black mb-12">Comprehensive Documentation Services</h3>
              
              <div className="grid md:grid-cols-2 gap-16 text-left">
                <div className="space-y-8">
                  <h4 className="text-2xl font-bold text-black mb-6">Aerial Documentation</h4>
                  <ul className="text-lg text-black space-y-6">
                    <li className="flex items-start">
                      <span className="text-[#C9AE5D] mr-3 text-2xl leading-none">•</span>
                      <span>High-Resolution Aerial Photos from All Cardinal Directions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C9AE5D] mr-3 text-2xl leading-none">•</span>
                      <span>Bird's-Eye Views & Panoramas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C9AE5D] mr-3 text-2xl leading-none">•</span>
                      <div>
                        <p className="mb-3">Professional Video Clips Including:</p>
                        <ul className="ml-6 space-y-2">
                          <li className="text-black">- Site Flyovers</li>
                          <li className="text-black">- 360° Orbits</li>
                          <li className="text-black">- Cinematic Rises</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C9AE5D] mr-3 text-2xl leading-none">•</span>
                      <span>2D Orthomosaic Mapping</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C9AE5D] mr-3 text-2xl leading-none">•</span>
                      <span>Optional 3D Site Modeling</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-8">
                  <h4 className="text-2xl font-bold text-black mb-6">Service Features</h4>
                  <ul className="text-lg text-black space-y-6">
                    <li className="flex items-start">
                      <span className="text-[#C9AE5D] mr-3 text-2xl leading-none">•</span>
                      <span>FAA Licensed Drone Pilot & Visual Observer</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C9AE5D] mr-3 text-2xl leading-none">•</span>
                      <div>
                        <p className="mb-3">Flexible Documentation Schedules:</p>
                        <ul className="ml-6 space-y-2">
                          <li className="text-black">- One-Time Documentation</li>
                          <li className="text-black">- Monthly Progress Updates</li>
                          <li className="text-black">- Weekly Site Monitoring</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C9AE5D] mr-3 text-2xl leading-none">•</span>
                      <span>Professional Photo & Video Editing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C9AE5D] mr-3 text-2xl leading-none">•</span>
                      <span>Marketing-Ready Deliverables</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C9AE5D] mr-3 text-2xl leading-none">•</span>
                      <span>Custom Angles & Specific Requirements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <a 
                href="mailto:nolan@propix3d.com?subject=Construction%20Photography%20Quote%20Request"
                className="inline-block bg-[#C9AE5D] text-black px-12 py-5 rounded-md text-2xl font-bold hover:bg-[#D4BC75] transition duration-300 shadow-lg"
              >
                Get a Free Quote Today
              </a>
              <p className="text-black text-lg mt-6">
                Contact us for a customized quote tailored to your project's specific needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionPackages;
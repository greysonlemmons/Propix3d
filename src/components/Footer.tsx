import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3 sm:mb-4">
              <span className="text-[#C9AE5D]">
                PROPIX
              </span>
            </h1>
            <p className="text-sm sm:text-base text-gray-400">
              Professional photography and videography services for real estate and construction projects.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold text-[#C9AE5D] mb-3 sm:mb-4">Contact Us</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center sm:justify-start text-gray-400">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                <span className="text-sm sm:text-base">(219) 869-7381</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start text-gray-400">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                <span className="text-sm sm:text-base">nolan@propix3d.com</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start text-gray-400">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                <span className="text-sm sm:text-base">Indiana & Chicagoland</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold text-[#C9AE5D] mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm sm:text-base text-gray-400 hover:text-[#C9AE5D] transition duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#packages" className="text-sm sm:text-base text-gray-400 hover:text-[#C9AE5D] transition duration-300">
                  Packages
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-sm sm:text-base text-gray-400 hover:text-[#C9AE5D] transition duration-300">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold text-[#C9AE5D] mb-3 sm:mb-4">Follow Us</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100063576XXXXXX" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C9AE5D] transition duration-300">
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="https://www.instagram.com/propix3d/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C9AE5D] transition duration-300">
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 text-center">
          <p className="text-sm sm:text-base text-gray-400">&copy; {new Date().getFullYear()} Propix 3D. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
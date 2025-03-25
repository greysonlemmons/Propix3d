import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h1 className="text-3xl font-black text-white tracking-tight mb-4">
              <span className="text-[#C9AE5D]">
                PROPIX
              </span>
            </h1>
            <p className="text-gray-400">
              Professional photography and videography services for real estate and construction projects.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-[#C9AE5D] mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                <span>(219) 869-7381</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <span>propix3d@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Indiana & Chicagoland</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-[#C9AE5D] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#C9AE5D] transition duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#packages" className="text-gray-400 hover:text-[#C9AE5D] transition duration-300">
                  Packages
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-[#C9AE5D] transition duration-300">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-[#C9AE5D] mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100063576XXXXXX" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C9AE5D] transition duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/propix3d/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C9AE5D] transition duration-300">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Propix 3D. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
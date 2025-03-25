import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-4xl font-black tracking-tight">
              <span className="text-[#C9AE5D]">
                PROPIX
              </span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#packages" className="text-gray-300 hover:text-[#C9AE5D] px-3 py-2 text-lg font-medium transition duration-300">
                Real Estate
              </a>
              <a href="#gallery" className="text-gray-300 hover:text-[#C9AE5D] px-3 py-2 text-lg font-medium transition duration-300">
                Gallery
              </a>
              <a href="#construction" className="text-gray-300 hover:text-[#C9AE5D] px-3 py-2 text-lg font-medium transition duration-300">
                Construction Media
              </a>
              <button onClick={scrollToContact} className="text-gray-300 hover:text-[#C9AE5D] px-3 py-2 text-lg font-medium transition duration-300">
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#C9AE5D] hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95">
            <a href="#packages" className="text-gray-300 hover:text-[#C9AE5D] block px-3 py-2 text-base font-medium transition duration-300">
              Real Estate
            </a>
            <a href="#gallery" className="text-gray-300 hover:text-[#C9AE5D] block px-3 py-2 text-base font-medium transition duration-300">
              Gallery
            </a>
            <a href="#construction" className="text-gray-300 hover:text-[#C9AE5D] block px-3 py-2 text-base font-medium transition duration-300">
              Construction Media
            </a>
            <button onClick={scrollToContact} className="text-gray-300 hover:text-[#C9AE5D] block w-full text-left px-3 py-2 text-base font-medium transition duration-300">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img src="/lovable-uploads/fcc8e738-f89c-4ef4-9581-d49fbac8d67f.png" alt="Reeluka Investments Logo" className="h-12" />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-gold">
                Home
              </Link>
              <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-gold">
                About Us
              </Link>
              <Link to="/what-we-do" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-gold">
                What We Do
              </Link>
              <Link to="/projects" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-gold">
                Projects
              </Link>
              <Link to="/partners" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-gold">
                Partners
              </Link>
              <Link to="/our-work" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-gold">
                Our Work
              </Link>
              <Link to="/contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-gold">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-gold focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/what-we-do"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              What We Do
            </Link>
            <Link
              to="/projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/partners"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Partners
            </Link>
            <Link
              to="/our-work"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Work
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

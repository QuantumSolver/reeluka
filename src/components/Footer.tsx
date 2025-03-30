import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Reeluka Investments Ltd</h3>
            <p className="text-gray-400 mb-4">
              Providing robust and innovative IT solutions tailored to meet your business needs.
            </p>
            
            {/* Our Commitment Section */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2 text-brand-gold">Our Commitment</h4>
              <p className="text-gray-400">
                Thank you for choosing to be a part of our vision to change the quality of supplying in Zambia. 
                We believe that by supplying you high quality products and services we are contributing to the 
                efficient flow of the production network.
              </p>
            </div>
            
            <div className="flex items-center mb-2 mt-6">
              <Mail className="h-5 w-5 mr-2 text-brand-gold" />
              <a href="mailto:sales@reeluka.org" className="text-gray-400 hover:text-white">
                sales@reeluka.org
              </a>
            </div>
            <div className="flex items-center mb-2">
              <Phone className="h-5 w-5 mr-2 text-brand-gold" />
              <a href="tel:+260968565695" className="text-gray-400 hover:text-white">
                +260 968 565695
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-brand-gold" />
              <span className="text-gray-400">Woodlands, Lusaka, Zambia</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/what-we-do" className="text-gray-400 hover:text-white">What We Do</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white">Projects</Link>
              </li>
              <li>
                <Link to="/our-work" className="text-gray-400 hover:text-white">Our Work</Link>
              </li>
              <li>
                <Link to="/clients" className="text-gray-400 hover:text-white">Our Clients</Link>
              </li>
              <li>
                <Link to="/partners" className="text-gray-400 hover:text-white">Partners</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Hyperconverged Infrastructure</li>
              <li className="text-gray-400">Oracle Database Implementation</li>
              <li className="text-gray-400">Server Virtualization</li>
              <li className="text-gray-400">Disaster Recovery</li>
              <li className="text-gray-400">ERP Systems</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Partners</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Stor Systems (Zambia) Limited</li>
              <li className="text-gray-400">GET International</li>
              <li className="text-gray-400">HPE</li>
              <li className="text-gray-400">Oracle</li>
              <li className="text-gray-400">IBM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Reeluka Investments Ltd. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Partnering for success in the digital era.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
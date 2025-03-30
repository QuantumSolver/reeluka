import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-brand-darkBlue to-brand-blue py-20 md:py-32 overflow-hidden">
      {/* Enhanced logo background */}
      <div className="absolute inset-0">
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-2xl h-full bg-contain bg-no-repeat bg-right"
          style={{
            backgroundImage: "url('/lovable-uploads/fcc8e738-f89c-4ef4-9581-d49fbac8d67f.png')",
            opacity: 0.8, // Increased from 0.15
            mixBlendMode: 'soft-light', // Changed from 'lighten' for better contrast
            filter: 'contrast(1.2) brightness(1.1)' // Added glow effect
          }}
        />
        {/* Overlay to enhance contrast */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
            Enterprise IT Solutions
            <br />
            for Africa's Growing
            <br />
            Businesses
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Partnering with Star Systems and GET International to deliver cutting-edge infrastructure and identity solutions across Africa and beyond.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/projects">
              <Button className="bg-brand-gold text-white hover:bg-opacity-90 font-semibold text-base px-6 py-6">
                Explore Our Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white  hover:bg-white/10 font-semibold text-base px-6 py-6">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements - moved behind logo */}
      <div className="hidden lg:block absolute right-0 top-0 h-full w-2/5 z-0">
        <div className="absolute right-20 top-20 w-64 h-64 bg-brand-gold rounded-full opacity-10"></div>
        <div className="absolute right-60 bottom-20 w-40 h-40 bg-brand-blue rounded-full opacity-10"></div>
      </div>
    </div>
  );
};

export default HeroSection;
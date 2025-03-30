
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Featured projects
  const featuredProjects = [
    {
      title: "HPE SimpliVity Hyperconverged Infrastructure Implementation",
      client: "ABC Banking Corporation",
      description: "Successfully implemented HPE SimpliVity Hyperconverged solutions, upgraded the VMware platform, and configured a comprehensive disaster recovery solution. This integration enhances efficiency, scalability, and simplifies IT operations for the bank.",
      technologies: ["HPE SimpliVity", "VMware", "Disaster Recovery"],
      value: "US$ 180,000.00",
      year: "2020",
      featured: true
    },
    {
      title: "Oracle ERP Upgrade Project",
      client: "Zambia Telecommunications Company Limited (ZAMTEL)",
      description: "Comprehensive upgrade of ZAMTEL's Oracle ERP system, including both the application and database components. This upgrade provided ZAMTEL with a more modern, efficient, and integrated ERP platform, leading to improved resource management and streamlined business processes.",
      technologies: ["Oracle ERP", "Database Migration", "System Integration"],
      value: "US$ 93,600.00",
      year: "2022-2023",
      featured: false
    },
    {
      title: "Linux OS, Server Virtualization, and Oracle Implementation",
      client: "National Savings Credit Bank Zambia",
      description: "Implemented Linux Operating System, Server Virtualisation software, and Oracle Middleware and Database. The project included Red Hat EE Operating System, Oracle VM Virtualisation software, Oracle WebLogic, Oracle Database, and post-implementation support.",
      technologies: ["Red Hat Linux", "Oracle VM", "Oracle WebLogic", "Oracle Database"],
      value: "US$ 269,801.90",
      year: "2020",
      featured: false
    }
  ];

  // Services offered
  const services = [
    {
      title: "Hyperconverged Infrastructure",
      description: "Streamline your IT operations with modern hyperconverged solutions that integrate compute, storage, and virtualization."
    },
    {
      title: "Database Management",
      description: "Expert implementation, migration, and support for Oracle and other enterprise database systems."
    },
    {
      title: "Server Virtualization",
      description: "Optimize your server resources and enhance efficiency with VMware and Oracle VM solutions."
    },
    {
      title: "Disaster Recovery",
      description: "Ensure business continuity with comprehensive disaster recovery solutions tailored to your needs."
    }
  ];

  // Core values
  const coreValues = [
    {
      title: "Excellence & Integrity",
      description: "We hold ourselves to the highest standards of technical expertise and ethical business practices in everything we do."
    },
    {
      title: "Innovation & Adaptability",
      description: "We embrace change and continuously seek better ways to serve our clients with cutting-edge solutions."
    },
    {
      title: "Client-Centric Partnership",
      description: "We measure our success by our clients' success, building long-term relationships based on trust and results."
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore some of our most successful IT implementations for leading organizations across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                client={project.client}
                description={project.description}
                technologies={project.technologies}
                value={project.value}
                year={project.year}
                featured={project.featured}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button className="bg-brand-gold hover:bg-opacity-90 text-white">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a comprehensive range of IT solutions to help your organization thrive in the digital era.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/what-we-do">
              <Button variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white">
                Learn More About Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide our decisions and define how we work with our clients and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-brand-gold">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/about">
              <Button variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Highlight */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Strategic Partnerships</h2>
            <p className="text-xl mb-8">
              Our strong alliances with Stor Systems (Zambia) Limited and GET International combine local expertise with global capabilities.
            </p>
            <Link to="/partners">
              <Button className="bg-white text-brand-blue hover:bg-blue-50">
                Learn About Our Partners
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
     {/* Client Logos Section */}
     <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Clients</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        We're proud to work with leading organizations across various industries.
      </p>
    </div>

    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {[
          { src: '/clients/dangote-150x150.png', alt: 'Dangote' },
          { src: '/clients/Hitachi-150x150.png', alt: 'Hitachi' },
          { src: '/clients/JTI-150x150.png', alt: 'JTI' },
          { src: '/clients/lafarge-150x150.jpg', alt: 'Lafarge' },
          { src: '/clients/rea-150x150.jpg', alt: 'REA' },
          { src: '/clients/zamtel-150x150.jpg', alt: 'ZAMTEL' },
          { src: '/clients/zppa-150x150.jpg', alt: 'ZPPA' },
          { src: '/clients/wcfcb.png', alt: 'WCFCB' },
        ].map((client, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="h-24 w-24 rounded-full bg-white border border-gray-300 p-2 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <img
                src={client.src}
                alt={client.alt}
                className="w-full h-full object-contain rounded-full"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-sm font-medium text-gray-800">{client.alt}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-gray-600 mb-8">
              Contact us today to discuss how we can help your organization leverage modern technology for business success.
            </p>
            <Link to="/contact">
              <Button className="bg-brand-gold hover:bg-opacity-90 text-white px-8 py-6 text-lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;


import React from 'react';
import PartnerCard from '@/components/PartnerCard';

const Partners = () => {
  const partners = [
    {
      name: "Stor Systems (Zambia) Limited",
      description: "A leading provider of IT infrastructure solutions in Zambia with expertise in server virtualization, hyperconverged infrastructure, and database management."
    },
    {
      name: "GET International",
      description: "Specializing in secure identity solutions including passport systems, national IDs, and border control systems deployed across multiple countries."
    },
    {
      name: "Hewlett Packard Enterprise (HPE)",
      description: "Global technology leader providing cutting-edge server, storage, and networking solutions with a focus on hyperconverged infrastructure."
    },
    {
      name: "Oracle",
      description: "Enterprise software company offering database management systems, ERP, middleware and cloud-based applications and services."
    },
    {
      name: "IBM",
      description: "Multinational technology corporation with expertise in cloud computing, artificial intelligence, and high-performance server solutions."
    },
    {
      name: "Red Hat",
      description: "World's leading provider of enterprise open source solutions, including high-performing Linux, cloud, container, and Kubernetes technologies."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Partners</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry-leading technology providers to deliver comprehensive IT solutions for our clients.
          </p>
        </div>

        {/* Key partnerships section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Strategic Alliances</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.slice(0, 2).map((partner, index) => (
              <PartnerCard
                key={index}
                name={partner.name}
                description={partner.description}
              />
            ))}
          </div>

          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Power of Partnership</h3>
            <p className="text-gray-700 mb-4">
              Our strategic alliances with Stor Systems (Zambia) Limited and GET International create a unique synergy 
              that combines local expertise with global capabilities. This powerful combination allows us to offer:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
              <li>Deep understanding of the Zambian business environment</li>
              <li>Proven technical competence with critical IT infrastructure</li>
              <li>Comprehensive technology portfolio covering modern infrastructure to core enterprise systems</li>
              <li>Experience managing complex, multi-vendor environments</li>
              <li>Access to international best practices and experience</li>
            </ul>
          </div>
        </section>

        {/* Technology partners section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Technology Partners</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.slice(2).map((partner, index) => (
              <PartnerCard
                key={index}
                name={partner.name}
                description={partner.description}
              />
            ))}
          </div>
        </section>

        {/* Testimonial section */}
        <section className="mt-20 bg-brand-blue text-white p-12 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl italic mb-8">
              "The partnership between Reeluka Investments and Stor Systems has consistently delivered exceptional results 
              for our IT infrastructure. Their technical expertise and dedication to our success make them a valued partner."
            </blockquote>
            <p className="font-semibold">- IT Director, Leading Financial Institution in Zambia</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Partners;


import React from 'react';

const Clients = () => {
  // Categories of clients
  const clientCategories = [
    {
      name: "Banking & Finance",
      clients: [
        { id: 1, name: "ABC Banking Corporation" },
        { id: 2, name: "National Savings Credit Bank" },
        { id: 3, name: "Warwyck Private Bank" },
        { id: 4, name: "Atlas Mara (Access Bank)" },
        { id: 5, name: "Indo Zambia Bank" },
      ]
    },
    {
      name: "Government & Public Sector",
      clients: [
        { id: 6, name: "Ministry of Finance" },
        { id: 7, name: "National Identification Authority" },
        { id: 8, name: "Zambia Revenue Authority" },
        { id: 9, name: "Electoral Commission" },
      ]
    },
    {
      name: "Telecommunications",
      clients: [
        { id: 10, name: "Zambia Telecommunications (ZAMTEL)" },
        { id: 11, name: "Airtel Zambia" },
        { id: 12, name: "MTN Communications" },
      ]
    },
    {
      name: "Other Industries",
      clients: [
        { id: 13, name: "National Health Insurance" },
        { id: 14, name: "Central University Hospital" },
        { id: 15, name: "Zambeef Products PLC" },
        { id: 16, name: "Zambia Breweries" },
      ]
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Clients</h1>
            <p className="text-xl text-gray-600">
              We're proud to work with leading organizations across various industries throughout Africa.
            </p>
          </div>
        </div>
      </div>
      
      {/* Client Logos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We've had the privilege of working with some of the most respected organizations across multiple sectors.
            </p>
          </div>
          
          <div className="bg-white p-12 rounded-lg shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* These would normally be actual client logos */}
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="flex items-center justify-center p-4">
                  <div className="h-20 w-40 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-gray-400">Client Logo</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Client Sectors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Clients By Industry</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our extensive experience spans multiple sectors, allowing us to understand the unique challenges and requirements of diverse industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clientCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.name}</h3>
                <ul className="space-y-3">
                  {category.clients.map(client => (
                    <li key={client.id} className="flex items-center">
                      <span className="h-2 w-2 bg-brand-gold rounded-full mr-3"></span>
                      <span className="text-gray-700">{client.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Client Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Learn how our solutions have helped clients overcome challenges and achieve their business objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-brand-gold/20 flex items-center justify-center">
                <span className="text-gray-500">Client Image</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">National Bank</h3>
                <p className="text-gray-600 mb-4">
                  How we helped a national bank reduce operational costs by 40% while improving system performance.
                </p>
                <span className="text-brand-blue font-semibold">Read Case Study</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-brand-blue/20 flex items-center justify-center">
                <span className="text-gray-500">Client Image</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Government Agency</h3>
                <p className="text-gray-600 mb-4">
                  Implementing a secure identity system that reduced processing time from days to minutes.
                </p>
                <span className="text-brand-blue font-semibold">Read Case Study</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-brand-gold/20 flex items-center justify-center">
                <span className="text-gray-500">Client Image</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Telecom Provider</h3>
                <p className="text-gray-600 mb-4">
                  How our database solutions helped a telecom provider handle 300% growth in data volume.
                </p>
                <span className="text-brand-blue font-semibold">Read Case Study</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;

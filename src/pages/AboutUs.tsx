import React from 'react';
import { Shield, Users, Target, Clock } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Reeluka Investments</h1>
            <p className="text-xl text-gray-600">
              Reeluka Investments Limited was founded and incorporated in 2016 and is currently based in Lusaka Zambia. We supply a wide range of state of the art, Electrical, Electronic & Mechanical Engineering. A team of skilled personnel with vast experience in the Mining and Industrial Sector came up with Reeluka Investments to provide a number of various disciplines ranging from general supply and construction, to High Voltage Equipment & Industrial Process Control. Together, management has over 20 years of Industrial experience and have continued to strive with excellence to ensure that customers receive the best service the first time.
            </p>
          </div>
        </div>
      </div>
      
      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2016, Reeluka Investments has established itself as a trusted provider of engineering solutions in Zambia. Our journey began with a vision to deliver excellence in electrical, electronic, and mechanical engineering services.
              </p>
              <p className="text-gray-600 mb-4">
                With our specialized expertise in the mining and industrial sectors, we have successfully delivered numerous projects involving high voltage equipment and industrial process control systems.
              </p>
              <p className="text-gray-600">
                Our team combines technical expertise with practical industry experience to deliver solutions that meet the highest standards of quality and reliability.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Company Facts</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block bg-brand-gold rounded-full p-2 mr-3">
                    <Clock className="h-5 w-5 text-white" />
                  </span>
                  <div>
                    <span className="font-semibold block">Founded in 2016</span>
                    <span className="text-gray-600">Over 8 years of industry experience</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-brand-gold rounded-full p-2 mr-3">
                    <Users className="h-5 w-5 text-white" />
                  </span>
                  <div>
                    <span className="font-semibold block">Experienced Team</span>
                    <span className="text-gray-600">20+ years of combined industrial experience</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-brand-gold rounded-full p-2 mr-3">
                    <Target className="h-5 w-5 text-white" />
                  </span>
                  <div>
                    <span className="font-semibold block">Specialized Expertise</span>
                    <span className="text-gray-600">Mining & industrial sector specialists</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-brand-gold rounded-full p-2 mr-3">
                    <Shield className="h-5 w-5 text-white" />
                  </span>
                  <div>
                    <span className="font-semibold block">Quality Assurance</span>
                    <span className="text-gray-600">Commitment to excellence in service delivery</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Guiding principles that drive our commitment to excellence and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-gold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To ensure customer satisfaction as we provide high quality products and services with the best possible lead-time.
              </p>
              <p className="text-gray-600">
                We are committed to understanding our clients' needs and delivering solutions that meet the highest standards of quality and reliability.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                To be the best alternative solution to your company's needs in a professional, pro-active and self-critical manner in order to create mutual business value.
              </p>
              <p className="text-gray-600">
                We strive to be the preferred partner for engineering solutions in Zambia and beyond, recognized for our technical expertise and commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
      
            {/* Core Values */}
            <section className="py-16">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Core Values</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    The foundation of everything we do at Reeluka Investments
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-brand-gold">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Service</h3>
                    <p className="text-gray-600">
                      The heartbeat of our business is our clients. We exist to serve their needs while maintaining profitability. 
                      We actively collect, review, and implement customer feedback to continuously improve our products and services, 
                      ensuring we deliver exactly what our clients require.
                    </p>
                  </div>
                  
                  <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-brand-blue">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Honesty</h3>
                    <p className="text-gray-600">
                      We maintain unwavering honesty in all our dealings, creating consistent workplace behavior that builds 
                      lasting loyalty and trust with customers. This integrity guides every product we supply and every service 
                      we deliver, establishing our reputation as a reliable partner in the industry.
                    </p>
                  </div>
                  
                  <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-brand-gold">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Team Work</h3>
                    <p className="text-gray-600">
                      Our strength comes from collaboration. We've built the right team that has grown with the company, 
                      fostering relationships through effective communication. We believe that together, we can achieve 
                      more than any individual could alone, which is why teamwork remains central to our operations and success.
                    </p>
                  </div>
                </div>
              </div>
            </section>
    </div>
  );
};

export default AboutUs;
import React from 'react';
import { Server, Database, Shield, Cpu, CircuitBoard, HardDrive, Factory, Gauge } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const WhatWeDo = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What We Do</h1>
            <p className="text-xl text-gray-600">
             At <strong>Reeluka Investments Limited</strong>, we offer a broad spectrum of products and services across multiple 
              engineering and technology disciplines. Our capabilities span <strong>Information Technology, Mechanical 
              Engineering, Electrical & Electronics, and Renewable Energy Solutions</strong>. We serve industries including industrial 
              manufacturing, and commercial enterprises.
            </p>
          </div>
        </div>
      </div>
      
      {/* Services Grid - Expanded to 3 columns for more categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* IT Services (from AI version) */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="inline-block bg-brand-gold bg-opacity-10 p-3 rounded-lg mb-4">
                <Server className="h-8 w-8 text-brand-gold" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Information Technology</h2>
              <p className="text-gray-600 mb-4">
                The IT section provides dynamic products and services including hyperconverged infrastructure, 
                database management, and ERP solutions.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="bg-brand-gold rounded-full h-2 w-2 mt-2 mr-2"></span>
                  <span>HPE SimpliVity implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand-gold rounded-full h-2 w-2 mt-2 mr-2"></span>
                  <span>Oracle database solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand-gold rounded-full h-2 w-2 mt-2 mr-2"></span>
                  <span>Disaster recovery systems</span>
                </li>
              </ul>
            </div>

            {/* Mechanical Engineering (from original) */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="inline-block bg-brand-blue bg-opacity-10 p-3 rounded-lg mb-4">
                <Factory className="h-8 w-8 text-brand-blue" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Mechanical Engineering</h2>
              <p className="text-gray-600 mb-4">
                Comprehensive mechanical solutions including bearings, seals, fabrication works, and earth moving equipment.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="bg-brand-blue rounded-full h-2 w-2 mt-2 mr-2"></span>
                  <span>Bearings and seals</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand-blue rounded-full h-2 w-2 mt-2 mr-2"></span>
                  <span>Custom fabrication</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand-blue rounded-full h-2 w-2 mt-2 mr-2"></span>
                  <span>Earth moving equipment</span>
                </li>
              </ul>
            </div>

            {/* Electrical/Electronics (from original) */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="inline-block bg-brand-gold bg-opacity-10 p-3 rounded-lg mb-4">
                <CircuitBoard className="h-8 w-8 text-brand-gold" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Electrical & Electronics</h2>
              <p className="text-gray-600 mb-4">
                Innovative electrical solutions including industrial motor controls, VSDs, and protection circuitry.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="bg-brand-gold rounded-full h-2 w-2 mt-2 mr-2"></span>
                  <span>Variable Speed Drives (VSDs)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand-gold rounded-full h-2 w-2 mt-2 mr-2"></span>
                  <span>Motor controls and starters</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand-gold rounded-full h-2 w-2 mt-2 mr-2"></span>
                  <span>Switchgear and distribution</span>
                </li>
              </ul>
            </div>

            {/* Instrumentation & Control (from original) */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="inline-block bg-brand-blue bg-opacity-10 p-3 rounded-lg mb-4">
                <Gauge className="h-8 w-8 text-brand-blue" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Instrumentation & Control</h2>
              <p className="text-gray-600 mb-4">
                Advanced control systems and instrumentation for industrial process management.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="bg-brand-blue rounded-full h-2 w-2 mt-2 mr-2"></span>
                  <span>Process control systems</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand-blue rounded-full h-2 w-2 mt-2 mr-2"></span>
                  <span>Industrial automation</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand-blue rounded-full h-2 w-2 mt-2 mr-2"></span>
                  <span>Control panel design</span>
                </li>
              </ul>
            </div>

            {/* Database Solutions (from AI version) */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="inline-block bg-brand-gold bg-opacity-10 p-3 rounded-lg mb-4">
                <Database className="h-8 w-8 text-brand-gold" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Database Solutions</h2>
              <p className="text-gray-600 mb-4">
                Comprehensive database management including Oracle implementation, migration, and optimization.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="bg-brand-gold rounded-full h-2 w-2 mt-2 mr-2"></span>
                  <span>Oracle database implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand-gold rounded-full h-2 w-2 mt-2 mr-2"></span>
                  <span>Performance tuning</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand-gold rounded-full h-2 w-2 mt-2 mr-2"></span>
                  <span>Backup and recovery</span>
                </li>
              </ul>
            </div>

            {/* Disaster Recovery (from AI version) */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="inline-block bg-brand-blue bg-opacity-10 p-3 rounded-lg mb-4">
                <Shield className="h-8 w-8 text-brand-blue" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Disaster Recovery</h2>
              <p className="text-gray-600 mb-4">
                Robust business continuity solutions including backup systems and recovery planning.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="bg-brand-blue rounded-full h-2 w-2 mt-2 mr-2"></span>
                  <span>Business continuity planning</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand-blue rounded-full h-2 w-2 mt-2 mr-2"></span>
                  <span>Recovery solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand-blue rounded-full h-2 w-2 mt-2 mr-2"></span>
                  <span>DR testing and validation</span>
                </li>
              </ul>
            </div>
             {/* Renewable Energy Solutions (from AI version) */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="inline-block bg-brand-blue bg-opacity-10 p-3 rounded-lg mb-4">
                <Shield className="h-8 w-8 text-brand-blue" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Renewable Energy Solutions</h2>
              <p className="text-gray-600 mb-4">

              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="bg-brand-blue rounded-full h-2 w-2 mt-2 mr-2"></span>
                  <span>Solar Residential Solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand-blue rounded-full h-2 w-2 mt-2 mr-2"></span>
                  <span>Solar Commercial solutions</span>
                </li>
              </ul>
            </div>

            {/* Fuel Retail Industry (from AI version) */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="inline-block bg-brand-blue bg-opacity-10 p-3 rounded-lg mb-4">
                <Shield className="h-8 w-8 text-brand-blue" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Fuel Retail Industry</h2>
              <p className="text-gray-600 mb-4">
                We have experience and working partnerships in Petrochemical Energy Industry.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="bg-brand-blue rounded-full h-2 w-2 mt-2 mr-2"></span>
                  <span>Dealership for Service Stations for Puma Enery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Approach</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow a structured methodology to deliver comprehensive solutions tailored to your needs.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-center">1. Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm">
                    Understand your requirements and challenges
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-center">2. Solution Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm">
                    Tailor solutions to your operational needs
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-center">3. Implementation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm">
                    Professional installation with minimal disruption
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-center">4. Ongoing Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm">
                    Maintenance and technical support services
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;

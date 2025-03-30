
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question or ready to start your next project? Contact us today and let's discuss how we can help you achieve your IT goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-brand-gold mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-700">Woodlands, Lusaka, Zambia</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-brand-gold mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:sales@reeluka.org" className="text-brand-blue hover:underline">
                    sales@reeluka.org
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-brand-gold mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+260968565695" className="text-brand-blue hover:underline">
                    +260 968 565695
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-blue text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Project Inquiries</h2>
            <p className="mb-4">
              Looking to implement new IT infrastructure, upgrade your systems, or need ongoing support? 
              Our team is ready to discuss your specific requirements.
            </p>
            <p className="mb-4">
              For immediate assistance with your project needs, please contact us directly at:
            </p>
            <a href="tel:+260968565695" className="text-white font-bold hover:underline block mb-2">
              +260 968 565695
            </a>
            <a href="mailto:sales@reeluka.org" className="text-white font-bold hover:underline block">
              sales@reeluka.org
            </a>
          </div>
        </div>

        <div className="mt-12 p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Office Hours</h2>
          <div className="max-w-md mx-auto">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Monday - Friday</h3>
                <p>8:00 AM - 5:00 PM</p>
              </div>
              <div>
                <h3 className="font-semibold">Saturday</h3>
                <p>9:00 AM - 1:00 PM</p>
              </div>
              <div>
                <h3 className="font-semibold">Sunday</h3>
                <p>Closed</p>
              </div>
              <div>
                <h3 className="font-semibold">Public Holidays</h3>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

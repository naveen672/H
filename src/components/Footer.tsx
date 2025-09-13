import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              {/* Portrait Logo in Footer */}
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full p-1 shadow-lg">
                <div className="w-full h-full bg-white rounded-full p-0.5">
                  <img 
                    src="/image.png" 
                    alt="T S Subbanna" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">T S Subbanna</h3>
                <p className="text-gray-300">Sarvajanika Education Trust</p>
              </div>
            </div>
            <p className="text-gray-300 max-w-md">
              Empowering students through quality education and fostering excellence 
              across our network of prestigious educational institutions since 1975.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Trust</a></li>
              <li><a href="/colleges" className="text-gray-300 hover:text-white transition-colors">Our Colleges</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Admissions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-500" />
                <span className="text-gray-300">+91 80 2234 5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-500" />
                <span className="text-gray-300">info@tssubbanna.edu.in</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-amber-500 mt-1" />
                <span className="text-gray-300">
                  Education Trust Building,<br />
                  Bangalore, Karnataka - 560001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 T S Subbanna Sarvajanika Education Trust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
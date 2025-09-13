import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Eye, Code } from 'lucide-react';

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Get current count from localStorage or start with 0
    const currentCount = parseInt(localStorage.getItem('visitorCount') || '0', 10);
    
    // Increment by 1
    const newCount = currentCount + 1;
    
    // Update localStorage
    localStorage.setItem('visitorCount', newCount.toString());
    
    // Update state
    setVisitorCount(newCount);
  }, []);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
              {/* Portrait Logo in Footer */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full p-1 shadow-lg flex-shrink-0">
                <div className="w-full h-full bg-white rounded-full p-0.5">
                  <img 
                    src="/image.png" 
                    alt="T S Subbanna" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold">T S Subbanna</h3>
                <p className="text-sm sm:text-base text-gray-300">Sarvajanika Education Trust</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-300 max-w-md">
              Empowering students through quality education and fostering excellence 
              across our network of prestigious educational institutions since 1975.
            </p>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors block">About Trust</Link></li>
              <li><Link to="/colleges" className="text-gray-300 hover:text-white transition-colors block">Our Colleges</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors block">Contact Us</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors block">Home</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-500 flex-shrink-0" />
                <span className="text-gray-300">+91 80 2234 5678</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Education Trust Building,<br />
                  Mysore, Karnataka - 570001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 text-center lg:text-left">
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4 text-amber-500" />
                <span className="text-gray-400 text-xs sm:text-sm">
                  Visitors: {visitorCount.toLocaleString()}
                </span>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 text-xs sm:text-sm">
                © 2025 T S Subbanna Sarvajanika Education Trust. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center justify-center space-x-2">
              <Code className="h-4 w-4 text-amber-500" />
              <span className="text-gray-400 text-xs sm:text-sm">
                Site built and maintained by <a href="https://portfolio-naveenr.onrender.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 font-medium hover:text-amber-300 transition-colors">Naveen R</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
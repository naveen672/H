import React from 'react';
import { ArrowRight, Users, Award, BookOpen, Target, Calendar, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { label: 'Schools Under Trust', value: '10', icon: BookOpen },
    { label: 'Students Enrolled', value: '2,500+', icon: Users },
    { label: 'Years of Excellence', value: '69+', icon: Award },
    { label: 'Hostel Facilities', value: '2', icon: Target },
  ];

  const leadership = [
    {
      name: 'C. S. Niranjan Kumar',
      position: 'President (MLA, Gundlupet)',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Leading the trust with political experience and educational vision.',
    },
    {
      name: 'D. Nagunayak',
      position: 'Secretary',
      image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Managing administrative affairs and trust operations.',
    },
    {
      name: 'H. M. Vasanthamma',
      position: 'Trustee',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Contributing to educational policy and community development.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 to-blue-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Excellence in
                <span className="block text-amber-400">Education</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Empowering minds, shaping futures through our network of premier 
                educational institutions dedicated to academic excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/colleges"
                  className="bg-amber-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Explore Our Colleges</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link 
                  to="/about"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200"
                >
                  Learn About Us
                </Link>
              </div>
            </div>

            {/* Right Column - Portrait */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full p-4 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-full p-2">
                    <img 
                      src="/image.png" 
                      alt="T S Subbanna - Founder" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                {/* Decorative rings */}
                <div className="absolute inset-0 border-4 border-amber-300 rounded-full animate-pulse opacity-30"></div>
                <div className="absolute -inset-4 border-2 border-amber-200 rounded-full animate-ping opacity-20"></div>
                
                {/* Founder label */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-blue-800 px-6 py-2 rounded-full shadow-lg">
                  <p className="text-sm font-semibold">Founder - T S Subbanna</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flash News Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50 border-t-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
              <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
              <span>FLASH NEWS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Celebrating 34 Years of Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us in commemorating three and a half decades of educational excellence and community service
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-500 p-3 rounded-full">
                    <Calendar className="h-8 w-8 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">34th Anniversary Celebration</h3>
                    <p className="text-blue-100">T S Subbanna Sarvajanika Education Trust</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-amber-500 text-blue-900 px-4 py-2 rounded-full font-bold">
                    Special Invitation
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-xl font-semibold text-blue-800 mb-4">
                    A Legacy of Educational Excellence
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We cordially invite you to join us in celebrating 34 remarkable years of 
                    educational excellence, innovation, and community service. This milestone 
                    represents our unwavering commitment to nurturing minds and shaping futures 
                    across our network of premier educational institutions.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-gray-700">Celebrating 34 years of educational leadership</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-gray-700">Honoring our founder's vision and legacy</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-gray-700">Recognizing achievements across all institutions</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="/TSSSET invatation._compressed.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <Download className="h-5 w-5" />
                      <span>Download Invitation</span>
                    </a>
                    <a 
                      href="/TSSSET invatation._compressed.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-blue-800 text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span>View Details</span>
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-100 to-amber-50 p-6 rounded-xl">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                      <iframe 
                        src="/TSSSET invatation._compressed.pdf" 
                        className="w-full h-80 rounded border-2 border-gray-200"
                        title="34th Anniversary Invitation"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-sm text-gray-600">
                        Official invitation to our 34th Anniversary celebration
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="text-3xl font-bold text-blue-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To provide world-class education that nurtures intellectual growth, 
                    character development, and prepares students to become responsible 
                    global citizens who contribute meaningfully to society.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be recognized as a leading educational trust that transforms 
                    lives through innovative teaching, research excellence, and 
                    community engagement across all our institutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-2xl">
              <img 
                src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Students in modern classroom"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced leaders dedicated to educational excellence and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <img 
                    src={leader.image}
                    alt={leader.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-blue-800 mb-1">{leader.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">{leader.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our Academic Community?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover exceptional educational opportunities across our network of institutions
          </p>
          <Link 
            to="/colleges"
            className="bg-amber-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Explore Programs</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      college: '',
      subject: '',
      message: '',
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const offices = [
   
    {
      title: 'Regional Office - Mysore',
      address: 'Regional Centre\nSaraswathipuram, Mysore - 570009',
      phone: '+91 821 2425 678',
      email: 'mysore@tssubbanna.edu.in',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM\nSat: 9:00 AM - 1:00 PM',
    },
  ];

  const colleges = [
    'T S Subbanna Institute of Technology',
    'Subbanna Medical College & Hospital',
    'Subbanna Business School',
    'College of Arts & Sciences',
    'Institute of Computer Applications',
    'School of Architecture',
    'College of Education',
    'Institute of Law',
    'School of Journalism',
    'Polytechnic College',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto px-4">
              Get in touch with us for admissions, general inquiries, or any questions 
              about our educational programs and services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6 sm:mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      College of Interest
                    </label>
                    <select
                      id="college"
                      name="college"
                      value={formData.college}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                    >
                      <option value="">Select a college</option>
                      {colleges.map((college, index) => (
                        <option key={index} value={college}>{college}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none text-sm sm:text-base"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-800 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6 sm:mb-8">Get in Touch</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                We're here to help you with any questions about our programs, admissions, 
                or general inquiries. Choose the most convenient way to reach us.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-3 sm:mb-4">{office.title}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <div className="text-gray-600 text-xs sm:text-sm whitespace-pre-line">
                          {office.address}
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-amber-500 flex-shrink-0" />
                        <a href={`tel:${office.phone}`} className="text-gray-600 text-xs sm:text-sm hover:text-blue-800">
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-amber-500 flex-shrink-0" />
                        <a href={`mailto:${office.email}`} className="text-gray-600 text-xs sm:text-sm hover:text-blue-800 break-all">
                          {office.email}
                        </a>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <div className="text-gray-600 text-xs sm:text-sm whitespace-pre-line">
                          {office.hours}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4">Visit Our Campus</h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Located in the heart of Bangalore with easy access to public transportation
            </p>
          </div>
          <div className="bg-gray-300 h-64 sm:h-80 lg:h-96 rounded-xl flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4" />
              <p className="text-base sm:text-lg">Interactive Map</p>
              <p className="text-xs sm:text-sm">Campus location and directions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
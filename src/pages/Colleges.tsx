import React from 'react';
import { ExternalLink, MapPin, Users, Calendar, Award } from 'lucide-react';

const Colleges = () => {
  const colleges = [
    {
      id: 1,
      name: 'T S Subbanna Sarvajanika Proudha Shaley',
      type: 'High School',
      established: '1975',
      location: 'Vidyaranyapuram, Mysuru',
      students: '850',
      image: 'https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      description: 'Premier high school providing quality secondary education with strong foundation in academics and character development.',
      specialties: ['Secondary Education', 'Science Stream', 'Commerce Stream', 'Arts Stream'],
      accreditation: 'State Board Affiliated, CBSE Recognition',
      mapLink: 'https://maps.app.goo.gl/mjAx1sLth6j79ySB9',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Colleges
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Welcome to T S Subbanna Sarvajanika Proudha Shaley, our flagship educational institution 
              dedicated to providing quality secondary education and fostering academic excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Colleges Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {colleges.map((college) => (
              <div key={college.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={college.image}
                    alt={college.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {college.type}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-3 line-clamp-2">
                    {college.name}
                  </h3>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>Est. {college.established}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{college.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{college.students}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {college.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center space-x-1 mb-2">
                      <Award className="h-4 w-4 text-amber-500" />
                      <span className="text-sm font-medium text-gray-700">Accreditation</span>
                    </div>
                    <p className="text-sm text-amber-600 font-medium">{college.accreditation}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Programs</h4>
                    <div className="flex flex-wrap gap-2">
                      {college.specialties.slice(0, 3).map((specialty, index) => (
                        <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                          {specialty}
                        </span>
                      ))}
                      {college.specialties.length > 3 && (
                        <span className="text-blue-600 text-xs">+{college.specialties.length - 3} more</span>
                      )}
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                  
                  {college.mapLink && (
                    <a 
                      href={college.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full mt-2 bg-amber-500 text-blue-900 py-2 px-4 rounded-lg hover:bg-amber-400 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>View Location</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Find Your Perfect Program
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore detailed information about admissions, programs, and campus life at each of our institutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Admission Information
            </button>
            <button className="border-2 border-blue-800 text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition-colors duration-200">
              Download Brochures
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Colleges;
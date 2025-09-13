import React from 'react';
import { ExternalLink, MapPin, Users, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Colleges = () => {
  const colleges = [
    {
      id: 1,
      name: 'T S Subbanna Sarvajanika Proudha Shaley Vidyaranyapuram',
      type: 'High School',
      established: '1975',
      location: 'Vidyaranyapuram, Mysuru',
      students: '850',
      image: 'https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      images: ['/image copy copy.png', '/image copy.png'],
      description: 'Premier high school providing quality secondary education with strong foundation in academics and character development.',
      specialties: ['Secondary Education', 'Science Stream', 'Commerce Stream', 'Arts Stream'],
      accreditation: 'State Board Affiliated, CBSE Recognition',
      mapLink: 'https://maps.app.goo.gl/mjAx1sLth6j79ySB9',
    },
    {
      id: 2,
      name: 'T S Subbanna High School, Kyathanahalli',
      type: 'High School',
      established: '1985',
      location: 'Kyathanahalli, Mysuru',
      students: '650',
      image: 'https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      images: ['/IMG-20250910-WA0057.jpg', '/IMG-20250910-WA0058.jpg'],
      description: 'A distinguished high school providing comprehensive secondary education with emphasis on academic excellence and character development in Kyathanahalli.',
      specialties: ['Secondary Education', 'Science Stream', 'Commerce Stream', 'Arts Stream'],
      mapLink: 'https://maps.app.goo.gl/gNP4tMFW87VVdZYr6',
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
          <div className="space-y-12">
            {colleges.map((college) => (
              <div key={college.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Image Gallery */}
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                  {college.images.map((image, index) => (
                    <div key={index} className="relative group">
                      <img 
                        src={image}
                        alt={`${college.name} - View ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg"></div>
                    </div>
                  ))}
                </div>
                <div className="absolute top-6 right-6 bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  {college.type}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  {college.name}
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="h-5 w-5 text-amber-500" />
                    <div>
                      <span className="block font-medium">Established</span>
                      <span>{college.established}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="h-5 w-5 text-amber-500" />
                    <div>
                      <span className="block font-medium">Location</span>
                      <span>{college.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="h-5 w-5 text-amber-500" />
                    <div>
                      <span className="block font-medium">Students</span>
                      <span>{college.students}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {college.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    to={college.id === 1 ? "/school-detail" : "/kyathanahalli-detail"}
                    className="flex-1 bg-blue-800 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 font-semibold"
                  >
                    <span>Learn More</span>
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                  
                  {college.mapLink && (
                    <a 
                      href={college.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-amber-500 text-blue-900 py-3 px-6 rounded-lg hover:bg-amber-400 transition-colors duration-200 flex items-center justify-center space-x-2 font-semibold"
                    >
                      <span>View Location</span>
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
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
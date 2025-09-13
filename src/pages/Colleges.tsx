import React from 'react';
import { ExternalLink, MapPin, Users, Calendar, Award } from 'lucide-react';

const Colleges = () => {
  const colleges = [
    {
      id: 1,
      name: 'T S Subbanna Institute of Technology',
      type: 'Engineering College',
      established: '1980',
      location: 'Bangalore',
      students: '3,500',
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      description: 'Premier engineering college offering undergraduate and postgraduate programs in various engineering disciplines.',
      specialties: ['Computer Science', 'Electronics', 'Mechanical', 'Civil Engineering'],
      accreditation: 'NAAC A++, NBA Accredited',
    },
    {
      id: 2,
      name: 'Subbanna Medical College & Hospital',
      type: 'Medical College',
      established: '1990',
      location: 'Bangalore',
      students: '1,200',
      image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      description: 'State-of-the-art medical college with attached hospital providing comprehensive healthcare services.',
      specialties: ['MBBS', 'MD/MS', 'Nursing', 'Pharmacy'],
      accreditation: 'MCI Approved, NAAC A+',
    },
    {
      id: 3,
      name: 'Subbanna Business School',
      type: 'Management College',
      established: '2000',
      location: 'Bangalore',
      students: '800',
      image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      description: 'Leading business school offering MBA and executive programs with industry partnerships.',
      specialties: ['MBA', 'Executive MBA', 'BBA', 'Management Studies'],
      accreditation: 'AICTE Approved, NAAC A+',
    },
    {
      id: 4,
      name: 'College of Arts & Sciences',
      type: 'Arts & Science College',
      established: '1985',
      location: 'Mysore',
      students: '2,200',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      description: 'Comprehensive liberal arts education with diverse undergraduate and postgraduate programs.',
      specialties: ['Literature', 'Sciences', 'Social Sciences', 'Fine Arts'],
      accreditation: 'NAAC A, UGC Recognized',
    },
    {
      id: 5,
      name: 'Institute of Computer Applications',
      type: 'Computer Science College',
      established: '1995',
      location: 'Bangalore',
      students: '1,500',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      description: 'Specialized institute focusing on computer applications and information technology.',
      specialties: ['MCA', 'BCA', 'Data Science', 'Cyber Security'],
      accreditation: 'AICTE Approved, ISO Certified',
    },
    {
      id: 6,
      name: 'School of Architecture',
      type: 'Architecture College',
      established: '2005',
      location: 'Bangalore',
      students: '600',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      description: 'Creative architecture school fostering innovative design and sustainable building practices.',
      specialties: ['B.Arch', 'M.Arch', 'Urban Planning', 'Interior Design'],
      accreditation: 'COA Approved, NAAC A',
    },
    {
      id: 7,
      name: 'College of Education',
      type: 'Education College',
      established: '1988',
      location: 'Hubli',
      students: '900',
      image: 'https://images.pexels.com/photos/159844/pexels-photo-159844.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      description: 'Training future educators with comprehensive teacher preparation programs.',
      specialties: ['B.Ed', 'M.Ed', 'D.Ed', 'Educational Psychology'],
      accreditation: 'NCTE Approved, NAAC B++',
    },
    {
      id: 8,
      name: 'Institute of Law',
      type: 'Law College',
      established: '2010',
      location: 'Bangalore',
      students: '750',
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      description: 'Modern law institute providing comprehensive legal education and research opportunities.',
      specialties: ['LLB', 'LLM', 'Corporate Law', 'Constitutional Law'],
      accreditation: 'BCI Approved, NAAC A',
    },
    {
      id: 9,
      name: 'School of Journalism',
      type: 'Media College',
      established: '2008',
      location: 'Mangalore',
      students: '400',
      image: 'https://images.pexels.com/photos/834949/pexels-photo-834949.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      description: 'Contemporary media school preparing students for careers in journalism and mass communication.',
      specialties: ['Journalism', 'Mass Communication', 'Digital Media', 'Advertising'],
      accreditation: 'UGC Recognized, NAAC B+',
    },
    {
      id: 10,
      name: 'Polytechnic College',
      type: 'Technical College',
      established: '1992',
      location: 'Davangere',
      students: '1,100',
      image: 'https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      description: 'Technical education institute offering diploma programs in various engineering fields.',
      specialties: ['Diploma Engineering', 'Technical Skills', 'Industrial Training', 'Vocational Courses'],
      accreditation: 'AICTE Approved, State Board Affiliated',
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
              Discover excellence across our network of 10 premier educational institutions, 
              each dedicated to providing world-class education and fostering innovation.
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
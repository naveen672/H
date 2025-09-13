import React from 'react';
import { ArrowLeft, MapPin, Users, Calendar, Award, BookOpen, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const SchoolDetail = () => {
  const schoolImages = [
    {
      src: '/image copy copy.png',
      alt: 'T S Subbanna Sarvajanika Proudha Shaley - Main Building',
      caption: 'Main School Building'
    },
    {
      src: '/image copy.png',
      alt: 'T S Subbanna Sarvajanika Proudha Shaley - Campus View',
      caption: 'Campus Overview'
    },
    {
      src: '/image copy copy copy.png',
      alt: 'Students with Awards and Certificates',
      caption: 'Students celebrating achievements with awards and certificates'
    },
    {
      src: '/image copy copy copy copy.png',
      alt: 'School Activities and Programs',
      caption: 'Students participating in educational and cultural activities'
    }
  ];

  const facilities = [
    'Well-equipped Science Laboratories',
    'Computer Lab with Latest Technology',
    'Library with Extensive Collection',
    'Sports Ground and Playground',
    'Audio-Visual Classrooms',
    'Canteen Facilities',
    'Transportation Services',
    'Medical First Aid'
  ];

  const achievements = [
    'Consistent academic excellence in state board examinations',
    'Regular winners in inter-school competitions',
    'Strong alumni network in various professional fields',
    'Community service and social awareness programs',
    'Cultural and sports achievements at district level'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link 
              to="/colleges" 
              className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Colleges</span>
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              T S Subbanna Sarvajanika Proudha Shaley
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A premier high school dedicated to providing quality secondary education 
              and fostering academic excellence in Vidyaranyapuram, Mysuru.
            </p>
          </div>
        </div>
      </section>

      {/* School Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Calendar className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Established</h3>
              <p className="text-gray-600">1975</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <MapPin className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Location</h3>
              <p className="text-gray-600">Vidyaranyapuram, Mysuru</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Users className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Students</h3>
              <p className="text-gray-600">850+</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <BookOpen className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Streams</h3>
              <p className="text-gray-600">Science, Commerce, Arts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Campus Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Explore our beautiful campus and vibrant school life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {schoolImages.map((image, index) => (
              <div key={index} className="relative group">
                <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="mt-4">
                    <p className="text-gray-700 font-medium text-center">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
                About Our School
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  T S Subbanna Sarvajanika Proudha Shaley has been a cornerstone of quality 
                  education in Vidyaranyapuram, Mysuru since 1975. Our school is committed 
                  to providing comprehensive secondary education that prepares students for 
                  higher studies and future careers.
                </p>
                <p className="mb-4">
                  We offer three main academic streams - Science, Commerce, and Arts - 
                  allowing students to pursue their interests and strengths. Our experienced 
                  faculty and modern facilities ensure that every student receives the best 
                  possible education.
                </p>
                <p>
                  The school emphasizes not just academic excellence but also character 
                  development, social responsibility, and overall personality development 
                  of our students.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="/image copy copy.png"
                alt="School building"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              School Facilities
            </h2>
            <p className="text-xl text-gray-600">
              Modern infrastructure supporting quality education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{facility}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/image copy copy copy.png"
                alt="Students with awards"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
                Our Achievements
              </h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Trophy className="h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our School?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us for admission information and school visits
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-amber-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors duration-200"
            >
              Contact for Admissions
            </Link>
            <a 
              href="https://maps.app.goo.gl/mjAx1sLth6j79ySB9"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors duration-200"
            >
              Visit Our Campus
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolDetail;
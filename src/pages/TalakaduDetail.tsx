import React from 'react';
import { ArrowLeft, MapPin, Users, Calendar, Award, BookOpen, Trophy, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const TalakaduDetail = () => {
  const schoolImages = [
    {
      src: '/IMG_20250912_203057.jpg',
      alt: 'T S Subbanna Girls High School Talakadu - Campus View',
      caption: 'School campus and facilities'
    },
    {
      src: '/IMG_20250912_203028.jpg',
      alt: 'T S Subbanna Girls High School Talakadu - Building View',
      caption: 'Main school building and entrance'
    },
    {
      src: '/IMG_20250912_203041.jpg',
      alt: 'Students in classroom',
      caption: 'Students engaged in learning activities'
    },
    {
      src: '/IMG_20250912_203014.jpg',
      alt: 'School activities',
      caption: 'Educational programs and student activities'
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
    'Medical First Aid',
    'Girls Common Room',
    'Counseling Services'
  ];

  const achievements = [
    'Consistent academic excellence in state board examinations',
    'Regular winners in inter-school competitions',
    'Strong alumni network of empowered women professionals',
    'Community service and social awareness programs',
    'Cultural and sports achievements at district level',
    'Women empowerment and leadership development programs'
  ];

  const specialPrograms = [
    {
      icon: Heart,
      title: 'Women Empowerment',
      description: 'Special programs focused on building confidence and leadership skills in young women.'
    },
    {
      icon: Star,
      title: 'Life Skills Education',
      description: 'Comprehensive life skills training to prepare students for future challenges.'
    },
    {
      icon: BookOpen,
      title: 'Career Guidance',
      description: 'Dedicated career counseling and guidance for higher education and career choices.'
    },
    {
      icon: Award,
      title: 'Personality Development',
      description: 'Programs designed to enhance communication skills and overall personality development.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-800 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link 
              to="/colleges" 
              className="flex items-center space-x-2 text-pink-200 hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Colleges</span>
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              T S Subbanna Girls High School, Talakadu
            </h1>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto">
              A dedicated girls high school providing quality secondary education with special focus 
              on empowering young women through comprehensive academic programs and character development in Talakadu.
            </p>
          </div>
        </div>
      </section>

      {/* School Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Calendar className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Established</h3>
              <p className="text-gray-600">1992</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <MapPin className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Location</h3>
              <p className="text-gray-600">Talakadu, Mysuru</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Users className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Students</h3>
              <p className="text-gray-600">400+</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <BookOpen className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Streams</h3>
              <p className="text-gray-600">Science, Commerce, Arts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">
              Campus Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Explore our campus and vibrant school life
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
              <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">
                About Our School
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  T S Subbanna Girls High School, Talakadu was established in 1992 with a 
                  special mission to provide quality education exclusively for girls. Located 
                  in the historic town of Talakadu, our school is committed to empowering 
                  young women through comprehensive secondary education.
                </p>
                <p className="mb-4">
                  We offer three main academic streams - Science, Commerce, and Arts - 
                  along with special programs focused on women empowerment, leadership 
                  development, and life skills training. Our experienced faculty and 
                  supportive environment ensure that every girl receives quality education.
                </p>
                <p>
                  The school emphasizes holistic development, character building, and 
                  confidence building, preparing young women to become leaders and 
                  contributors to society.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="/IMG_20250912_203057.jpg"
                alt="School campus"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">
              Special Programs for Girls
            </h2>
            <p className="text-xl text-gray-600">
              Empowering young women through specialized educational programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialPrograms.map((program, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <program.icon className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-purple-800 mb-4 text-center">{program.title}</h3>
                <p className="text-gray-600 text-center">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Streams */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">
              Academic Streams
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our comprehensive range of academic programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-purple-800 mb-4 text-center">Science Stream</h3>
              <p className="text-gray-600 text-center mb-4">
                Physics, Chemistry, Mathematics, and Biology with practical laboratory work.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Well-equipped science laboratories</li>
                <li>• Experienced science faculty</li>
                <li>• Regular practical sessions</li>
                <li>• Preparation for competitive exams</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-purple-800 mb-4 text-center">Commerce Stream</h3>
              <p className="text-gray-600 text-center mb-4">
                Accountancy, Business Studies, Economics with practical business applications.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Modern commerce curriculum</li>
                <li>• Business case studies</li>
                <li>• Computer applications</li>
                <li>• Industry exposure programs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-purple-800 mb-4 text-center">Arts Stream</h3>
              <p className="text-gray-600 text-center mb-4">
                History, Geography, Political Science, and Languages with cultural emphasis.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Rich humanities curriculum</li>
                <li>• Cultural activities</li>
                <li>• Language development</li>
                <li>• Social awareness programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">
              School Facilities
            </h2>
            <p className="text-xl text-gray-600">
              Modern infrastructure supporting quality education for girls
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></div>
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
                src="/IMG_20250912_203028.jpg"
                alt="School building"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">
                Our Achievements
              </h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Trophy className="h-6 w-6 text-pink-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our School?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Contact us for admission information and school visits
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-400 transition-colors duration-200"
            >
              Contact for Admissions
            </Link>
            <a 
              href="https://maps.app.goo.gl/D7LxgbZKQjaPTYL59"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-800 transition-colors duration-200"
            >
              Visit Our Campus
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalakaduDetail;
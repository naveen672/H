import React from 'react';
import { Calendar, Award, Target, Users, BookOpen, Globe } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '1975', event: 'T S Subbanna Sarvajanika Education Trust established' },
    { year: '1980', event: 'First engineering college inaugurated' },
    { year: '1990', event: 'Medical college and hospital launched' },
    { year: '2000', event: 'Business school established' },
    { year: '2010', event: 'International collaborations initiated' },
    { year: '2020', event: 'Digital transformation completed across all institutions' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Striving for the highest standards in education, research, and service.',
    },
    {
      icon: Users,
      title: 'Integrity',
      description: 'Maintaining honesty, transparency, and ethical conduct in all our endeavors.',
    },
    {
      icon: BookOpen,
      title: 'Innovation',
      description: 'Embracing new technologies and methodologies to enhance learning.',
    },
    {
      icon: Globe,
      title: 'Inclusivity',
      description: 'Welcoming students from diverse backgrounds and fostering equality.',
    },
  ];

  const achievements = [
    'NAAC A++ accreditation for multiple institutions',
    'NBA accreditation for all engineering programs',
    'Top 100 ranking in national education surveys',
    'International partnerships with 50+ universities',
    '95% placement record across all programs',
    'Over 100 research publications annually',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Our Trust
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Five decades of educational excellence, shaping minds and building futures 
              through innovation, dedication, and unwavering commitment to quality education.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
                Our Legacy
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Founded in 1975 by the visionary philanthropist T S Subbanna, our trust 
                  began with a simple yet powerful mission: to democratize quality education 
                  and make it accessible to students from all walks of life.
                </p>
                <p className="mb-4">
                  What started as a single engineering college has now grown into a 
                  comprehensive network of 10 premier educational institutions, offering 
                  programs across engineering, medicine, management, arts, and sciences.
                </p>
                <p>
                  Today, we stand proud as one of Karnataka's most respected educational 
                  trusts, having graduated over 100,000 students who are making significant 
                  contributions to society worldwide.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Historical campus building"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Key Milestones
            </h2>
            <p className="text-xl text-gray-600">
              Major achievements in our educational journey
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex-1 px-6">
                    <div className={`bg-white p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="h-5 w-5 text-amber-500" />
                        <span className="text-amber-600 font-semibold">{milestone.year}</span>
                      </div>
                      <p className="text-gray-800">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full z-10">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              Guiding principles that shape our educational philosophy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Award ceremony"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
                Recognition & Achievements
              </h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Award className="h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
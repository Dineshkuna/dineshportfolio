import React from 'react';
import { education } from '../data';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                    {edu.institution}
                  </p>
                  <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                    <Calendar size={16} className="mr-1" />
                    <span>{edu.year}</span>
                  </div>
                  {edu.description && (
                    <p className="mt-3 text-gray-700 dark:text-gray-300">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Certifications & Additional Training
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { name: 'AWS Certified Developer Associate', issuer: 'Amazon Web Services', year: '2022' },
                { name: 'Professional Scrum Master I', issuer: 'Scrum.org', year: '2021' },
                { name: 'Advanced React and Redux', issuer: 'Udemy', year: '2020' },
                { name: 'MongoDB University - M220JS', issuer: 'MongoDB Inc.', year: '2019' }
              ].map((cert, index) => (
                <div key={index} className="p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {cert.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    {cert.issuer} - {cert.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
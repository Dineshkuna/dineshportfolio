import React from 'react';
import { experiences } from '../data';
import { BriefcaseIcon } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute top-0 left-0 ml-8 sm:ml-10 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {experiences.map((experience) => (
                <div 
                  key={experience.id}
                  className="relative flex flex-col sm:flex-row items-start group"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 z-10">
                    <div className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-4 border-white dark:border-gray-900 shadow-md group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-colors duration-300">
                      <BriefcaseIcon size={24} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="ml-6 sm:ml-12 pt-2 sm:pt-0">
                    <span className="inline-block px-4 py-1 text-sm text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                      {experience.duration}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {experience.role}
                    </h3>
                    <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">
                      {experience.company}
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      {experience.description.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
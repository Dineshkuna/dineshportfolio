import React from 'react';
import { about } from '../data';
import { MapPin, Mail, Phone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Get to know me!
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {about.description}
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                <span className="text-gray-700 dark:text-gray-300">{about.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                <a 
                  href={`mailto:${about.email}`} 
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  {about.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-600 dark:text-blue-400" size={20} />
                <a 
                  href={`tel:${about.phone}`} 
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  {about.phone}
                </a>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="/resume.pdf" 
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-teal-400/20 z-10"></div>
            <img 
              src="https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Working on projects" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
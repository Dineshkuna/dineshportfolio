import React from 'react';
import { about } from '../data';
import { Github, Linkedin, Twitter, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 pb-12 overflow-hidden bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-blue-100 dark:from-blue-900 to-transparent"></div>
        <div className="grid grid-cols-8 gap-8 h-full w-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="rounded-full bg-blue-500 opacity-50 blur-2xl animate-pulse" style={{ 
              width: `${Math.random() * 10 + 5}vw`, 
              height: `${Math.random() * 10 + 5}vh`,
              transformOrigin: 'center',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              position: 'absolute',
            }}></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-gray-900 dark:text-white">
              <span className="text-blue-600 dark:text-blue-400">Hello, I'm</span> <br />
              {about.name}
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6">
              {about.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
              {about.description.split(' ').slice(0, 30).join(' ')}...
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                View My Work
              </a>
            </div>
            
            <div className="flex gap-4 justify-center md:justify-start">
              {about.socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon === 'github' && <Github size={24} />}
                  {link.icon === 'linkedin' && <Linkedin size={24} />}
                  {link.icon === 'twitter' && <Twitter size={24} />}
                </a>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-tl from-blue-600 to-teal-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt={about.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-gray-500 dark:text-gray-400" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
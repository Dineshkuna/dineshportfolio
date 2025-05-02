import React from 'react';
import { about } from '../data';
import { navItems } from '../data';
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Dinesh Kuna
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              A passionate software developer focused on creating innovative and effective web solutions.
            </p>
            <div className="flex space-x-4">
              {about.socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon === 'github' && <Github size={20} />}
                  {link.icon === 'linkedin' && <Linkedin size={20} />}
                  {link.icon === 'twitter' && <Twitter size={20} />}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Contact
            </h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>{about.location}</p>
              <p>
                <a 
                  href={`mailto:${about.email}`}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {about.email}
                </a>
              </p>
              <p>
                <a 
                  href={`tel:${about.phone}`}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {about.phone}
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Dinesh Kuna. All rights reserved.
          </p>
          
          <a 
            href="#home"
            className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
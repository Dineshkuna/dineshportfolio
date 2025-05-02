import React from 'react';
import { skills } from '../data';
import { 
  Code, CodeSquare, Server, FileType, Palette, Database, GitBranch, Container, Cloud 
} from 'lucide-react';

const getIconComponent = (iconName: string) => {
  switch(iconName) {
    case 'code': return <Code size={24} />;
    case 'code-square': return <CodeSquare size={24} />;
    case 'server': return <Server size={24} />;
    case 'file-type': return <FileType size={24} />;
    case 'palette': return <Palette size={24} />;
    case 'database': return <Database size={24} />;
    case 'git-branch': return <GitBranch size={24} />;
    case 'container': return <Container size={24} />;
    case 'cloud': return <Cloud size={24} />;
    default: return <Code size={24} />;
  }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I've been working with
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div 
              key={skill.name}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-colors duration-300">
                  {getIconComponent(skill.icon)}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {skill.name}
                  </h3>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full mb-1">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-600 to-teal-400 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%`, transformOrigin: 'left' }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Other Technologies I'm Familiar With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['Redux', 'GraphQL', 'Jest', 'Cypress', 'Next.js', 'Webpack', 'SCSS', 'Bootstrap', 'Figma', 'Firebase'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
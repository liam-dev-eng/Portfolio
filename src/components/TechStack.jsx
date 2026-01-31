import React from 'react';
import { Coffee, Globe, Container, Cloud, Cpu, TestTube2 } from 'lucide-react';

const technologies = [
  {
    id: 1,
    name: 'Java',
    icon: Coffee,
    description: 'Enterprise Backend',
  },
  {
    id: 2,
    name: 'Playwright',
    icon: Globe,
    description: 'E2E Testing',
  },
  {
    id: 3,
    name: 'Selenium',
    icon: TestTube2,
    description: 'Test Automation',
  },
  {
    id: 4,
    name: 'OpenAI API',
    icon: Cpu,
    description: 'AI Integration',
  },
  {
    id: 5,
    name: 'Docker',
    icon: Container,
    description: 'Containerization',
  },
  {
    id: 6,
    name: 'AWS',
    icon: Cloud,
    description: 'Cloud Infrastructure',
  },
];

const TechStack = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            Empowering quality with modern tools and technologies
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.id}
                className="glass glass-hover rounded-xl p-6 flex flex-col items-center text-center fade-in-section"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-violet-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-violet-400" />
                </div>

                {/* Tech Name */}
                <h3 className="text-lg font-bold text-white mb-1">
                  {tech.name}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-xs">
                  {tech.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center fade-in-section" style={{ animationDelay: '0.6s' }}>
          <div className="glass rounded-xl p-6 inline-block">
            <p className="text-gray-400 mb-3">
              <span className="text-violet-400 font-semibold">Additional Expertise:</span>
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {['CI/CD', 'GitHub Actions', 'Jenkins', 'Kubernetes', 'Python', 'TypeScript', 'REST APIs', 'GraphQL'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white/5 rounded-lg text-sm text-gray-300 hover:bg-violet-500/20 hover:text-violet-400 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

import React from 'react';
import { Brain, Code2, BarChart3 } from 'lucide-react';

const projects = [
  {
    id: 1,
    icon: Brain,
    title: 'Self-Healing Test Suites',
    subtitle: 'AI + Playwright',
    description: 'Autonomous test maintenance using machine learning to detect and repair broken selectors, reducing flakiness by 85% and saving 20+ hours per sprint.',
  },
  {
    id: 2,
    icon: Code2,
    title: 'AI-Powered BDD Generator',
    subtitle: 'Natural Language to Test Cases',
    description: 'Transform user stories into executable Gherkin scenarios with OpenAI integration. Accelerates test creation by 70% while maintaining consistent coverage.',
  },
  {
    id: 3,
    icon: BarChart3,
    title: 'SDLC AI Audit Dashboard',
    subtitle: 'Intelligent Process Analytics',
    description: 'Real-time insights dashboard that identifies bottlenecks, predicts release risks, and recommends process optimizations using predictive analytics.',
  },
];

const AIStrategySection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">AI-Driven Innovation</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Transforming quality assurance with cutting-edge artificial intelligence solutions
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="glass glass-hover rounded-2xl p-8 fade-in-section"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-violet-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-violet-400" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="text-violet-400 text-sm font-medium mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIStrategySection;

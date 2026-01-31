import React from 'react';
import { Briefcase } from 'lucide-react';

const timeline = [
  {
    id: 1,
    company: 'Skydropx',
    role: 'Engineering Manager',
    period: '2023 - 2026',
    achievement: 'Leading cross-functional teams in implementing AI-driven testing strategies. Reduced production incidents by 60% through predictive quality analytics.',
    color: 'violet',
  },
  {
    id: 2,
    company: 'PALO IT',
    role: 'Senior QA Engineer',
    period: '2021 - 2023',
    achievement: 'Architected end-to-end automation frameworks for enterprise clients. Championed BDD adoption across 15+ projects, improving collaboration between teams.',
    color: 'purple',
  },
  {
    id: 3,
    company: 'SQA',
    role: 'QA Specialist',
    period: '2019 - 2021',
    achievement: 'Established automated testing practices from the ground up. Built CI/CD pipelines that decreased release cycles from weeks to days.',
    color: 'indigo',
  },
];

const ProfessionalJourney = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Professional Journey</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            Building excellence through innovation and leadership
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (mobile) / Horizontal line (desktop) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 md:w-full md:h-0.5 md:top-1/2 bg-gradient-to-b md:bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500"></div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-0">
            {timeline.map((item, index) => (
              <div
                key={item.id}
                className={`relative fade-in-section ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                } ${index === 1 ? 'md:my-32' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} ml-16 md:ml-0`}>
                  <div className={`glass glass-hover rounded-2xl p-6 md:p-8 max-w-md ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-lg bg-${item.color}-500/20 flex items-center justify-center mb-4 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <Briefcase className={`w-6 h-6 text-${item.color}-400`} />
                    </div>

                    {/* Company */}
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {item.company}
                    </h3>

                    {/* Role */}
                    <p className="text-violet-400 font-medium mb-2">
                      {item.role}
                    </p>

                    {/* Period */}
                    <p className="text-gray-500 text-sm mb-4">
                      {item.period}
                    </p>

                    {/* Achievement */}
                    <p className="text-gray-400 leading-relaxed">
                      {item.achievement}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 top-0 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2">
                  <div className={`w-4 h-4 rounded-full bg-${item.color}-500 ring-4 ring-github-dark animate-pulse`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;

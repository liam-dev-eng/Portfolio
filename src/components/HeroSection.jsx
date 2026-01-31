import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="animated-bg"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">
            William Aucique: Architecting the Future of SDLC with AI
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 font-light">
          Engineering Manager | QA Strategist | AI Implementation
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://github.com/liam-dev-eng"
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover rounded-lg px-8 py-4 flex items-center gap-3 text-lg font-medium min-w-[200px] justify-center group"
          >
            <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
            View GitHub
          </a>
          
          <a
            href="https://www.linkedin.com/in/william-aucique"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-violet-500 hover:bg-violet-600 rounded-lg px-8 py-4 flex items-center gap-3 text-lg font-medium min-w-[200px] justify-center transition-all duration-300 hover:scale-105 glow-violet group"
          >
            <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Contact on LinkedIn
          </a>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-violet-500 rounded-full opacity-10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-600 rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;

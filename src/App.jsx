import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AIStrategySection from './components/AIStrategySection';
import ProfessionalJourney from './components/ProfessionalJourney';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    // Observe all elements with fade-in-section class
    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach(el => observer.observe(el));

    // Cleanup
    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-github-dark text-white">
      <HeroSection />
      <AIStrategySection />
      <ProfessionalJourney />
      <TechStack />
      <Footer />
    </div>
  );
}

export default App;

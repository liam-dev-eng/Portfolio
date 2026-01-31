import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="text-center mb-8">
          {/* Signature Quote */}
          <div className="mb-8 fade-in-section">
            <blockquote className="text-2xl md:text-3xl font-light text-gray-300 italic">
              "Quality is the engine of business growth."
            </blockquote>
            <p className="text-violet-400 font-semibold mt-4 text-lg">
              — William Aucique
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://github.com/liam-dev-eng"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover rounded-full p-4 group"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/william-aucique"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover rounded-full p-4 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            
            <a
              href="mailto:waucique@gmail.com"
              className="glass glass-hover rounded-full p-4 group"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            {/* Copyright */}
            <p>
              © {currentYear} William Aucique. All rights reserved.
            </p>

            {/* Made with love */}
            <p className="flex items-center gap-2">
              Built with <Heart className="w-4 h-4 text-violet-400 fill-violet-400" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

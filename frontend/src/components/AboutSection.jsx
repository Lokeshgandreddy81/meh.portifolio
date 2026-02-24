import React from 'react';
import siteConfig from '../config/siteConfig';

const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 section-border border-b relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10">
        <div className="mb-16 md:mb-24 flex items-center gap-4">
          <div className="w-12 h-[1px] bg-foreground/20" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Core Philosophy</span>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-24">
          {siteConfig.aboutSections.map((section, index) => (
            <div key={index} className="group relative">
              <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-border to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block" />
              <div className="md:pl-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                <div className="text-xs font-mono text-muted/50 mb-4">{(index + 1).toString().padStart(2, '0')}</div>
                <h3
                  className="text-3xl md:text-4xl font-light leading-tight mb-4 text-foreground/90 group-hover:text-foreground transition-colors duration-300"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {section.title}
                </h3>
                <p className="text-muted text-lg leading-relaxed max-w-md">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
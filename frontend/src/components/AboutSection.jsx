import React from 'react';
import siteConfig from '../config/siteConfig';
import SpotlightButton from './ui/SpotlightButton';

const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 section-border border-b relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10">
        <div className="mb-16 md:mb-24 flex items-center gap-4">
          <div className="w-12 h-[1px] bg-foreground/20" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Core Philosophy</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {siteConfig.aboutSections.map((section, index) => (
            <SpotlightButton
              key={index}
              className="group relative h-full flex flex-col p-8 md:p-12 border border-border/50 bg-accent/20 rounded-2xl overflow-hidden hover:border-white/20 hover:bg-accent/40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
            >
              {/* Massive subtle background number */}
              <div
                className="absolute -bottom-8 -right-8 text-[12rem] font-bold leading-none select-none pointer-events-none opacity-[0.03] group-hover:opacity-[0.06] group-hover:-translate-x-4 group-hover:-translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {index + 1}
              </div>

              {/* Top border highlight that fills on hover */}
              <div className="absolute top-0 left-0 h-[2px] bg-foreground/10 w-full">
                <div className="h-full bg-foreground w-0 group-hover:w-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </div>

              {/* Content Container */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-6 h-[1px] bg-foreground/30 group-hover:w-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    <span className="text-xs font-mono text-muted/60 tracking-widest uppercase">Phase {(index + 1).toString().padStart(2, '0')}</span>
                  </div>

                  <h3
                    className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight mb-6 text-foreground/80 group-hover:text-foreground transition-colors duration-500"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {section.title}
                  </h3>
                </div>

                <p className="text-muted text-base md:text-lg leading-relaxed max-w-sm group-hover:text-muted/90 transition-colors duration-500 mt-auto pt-8 border-t border-border/30 group-hover:border-border/60">
                  {section.description}
                </p>
              </div>
            </SpotlightButton>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
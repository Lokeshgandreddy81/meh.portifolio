import React from 'react';
import { Code2, Headphones, BookOpen } from 'lucide-react';
import siteConfig from '../config/siteConfig';

const InterestsSection = () => {
  return (
    <section className="py-0">
      <div className="w-full">
        {/* Interests Grid */}
        <div className="grid grid-cols-3 border-b section-border">
          {/* Building */}
          <div className="px-16 py-24 border-r section-border">
            <Code2 className="w-16 h-16 text-foreground mb-8" strokeWidth={1} />
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Building:</h3>
            <ul className="space-y-3 text-muted text-lg">
              {siteConfig.interests.building.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          {/* Learning */}
          <div className="px-16 py-24 border-r section-border">
            <Headphones className="w-16 h-16 text-foreground mb-8" strokeWidth={1} />
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Learning:</h3>
            <ul className="space-y-3 text-muted text-lg">
              {siteConfig.interests.learning.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          {/* Reading */}
          <div className="px-16 py-24">
            <BookOpen className="w-16 h-16 text-foreground mb-8" strokeWidth={1} />
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Reading:</h3>
            <ul className="space-y-3 text-muted text-lg">
              {siteConfig.interests.reading.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Final CTA Section */}
        <div className="px-16 py-32 text-center border-b section-border">
          <h2 
            className="text-5xl md:text-6xl font-light leading-tight mb-16 text-foreground"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Always excited to collaborate on challenging AI/automation problems. Let's build something impactful together.
          </h2>
          <p 
            className="text-5xl font-light text-muted mb-12"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            All the best,<br />{siteConfig.name}
          </p>
          
          {/* Contact Links */}
          <div className="flex items-center justify-center gap-8 text-lg">
            <a 
              href={`mailto:${siteConfig.email}`}
              className="text-muted hover:text-foreground transition-colors underline"
            >
              {siteConfig.email}
            </a>
            <span className="text-muted/50">·</span>
            <a 
              href={siteConfig.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors underline"
            >
              LinkedIn
            </a>
            <span className="text-muted/50">·</span>
            <a 
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
import React from 'react';
import { Code2, Headphones, BookOpen } from 'lucide-react';
import siteConfig from '../config/siteConfig';

const InterestsSection = () => {
  return (
    <section className="py-0">
      <div className="w-full border-b section-border">
        {/* Interests Grid */}
        <div className="grid grid-cols-3">
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
      </div>
    </section>
  );
};

export default InterestsSection;
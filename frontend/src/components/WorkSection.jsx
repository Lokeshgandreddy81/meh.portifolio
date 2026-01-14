import React from 'react';
import { ArrowRight } from 'lucide-react';
import siteConfig from '../config/siteConfig';
import LotusFlower from './decorative/LotusFlower';
import BotanicalLeaf from './decorative/BotanicalLeaf';

const WorkSection = () => {
  return (
    <section className="py-0">
      <div className="w-full">
        {/* Sara.ai Section - Text Left, Decoration Right */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 border-b section-border min-h-screen">
          <div className="px-6 py-12 md:px-16 md:py-24 flex flex-col justify-center section-border md:border-r border-t md:border-t-0">
            {/* Company Logo */}
            <div className="w-24 h-24 rounded-3xl logo-box flex items-center justify-center mb-8 md:mb-12 transition-colors duration-300">
              <span className="text-5xl font-bold">{siteConfig.workExperiences[0].logo}</span>
            </div>
            
            {/* Title */}
            <h2 
              className="text-4xl md:text-5xl font-light leading-tight mb-6 md:mb-8 text-foreground"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {siteConfig.workExperiences[0].title}
            </h2>
            
            {/* Description */}
            <div className="text-muted text-lg leading-relaxed space-y-4 mb-8 md:mb-12">
              {siteConfig.workExperiences[0].descriptions.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
            
            {/* CTA Button */}
            <a 
              href={siteConfig.workExperiences[0].link}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 theme-button-border transition-all duration-300 group self-start"
            >
              <ArrowRight className="w-6 h-6 text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300" />
            </a>
          </div>
          <div className="px-6 py-12 md:px-16 md:py-24 flex items-center justify-center">
            <LotusFlower className="decorative-svg w-3/4 h-3/4 md:w-full md:h-full" />
          </div>
        </div>

        {/* AI Consultant Section - Decoration Left, Text Right */}
        <div className="flex flex-col md:grid md:grid-cols-2 border-b section-border min-h-screen">
          <div className="px-6 py-12 md:px-16 md:py-24 flex items-center justify-center section-border md:border-r border-b md:border-b-0">
            <BotanicalLeaf className="decorative-svg w-3/4 h-3/4 md:w-full md:h-full" />
          </div>
          <div className="px-6 py-12 md:px-16 md:py-24 flex flex-col justify-center">
            {/* Company Logo */}
            <div className="w-24 h-24 rounded-3xl logo-box flex items-center justify-center mb-8 md:mb-12 transition-colors duration-300">
              <span className="text-3xl font-bold">{siteConfig.workExperiences[1].logo}</span>
            </div>
            
            {/* Title */}
            <h2 
              className="text-4xl md:text-5xl font-light leading-tight mb-6 md:mb-8 text-foreground"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {siteConfig.workExperiences[1].title}
            </h2>
            
            {/* Description */}
            <p className="text-muted text-lg leading-relaxed mb-8 md:mb-12">
              {siteConfig.workExperiences[1].description}
            </p>
            
            {/* CTA Button */}
            <a 
              href={siteConfig.workExperiences[1].link}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 theme-button-border transition-all duration-300 group self-start"
            >
              <ArrowRight className="w-6 h-6 text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
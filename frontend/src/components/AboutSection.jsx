import React from 'react';
import { ArrowRight } from 'lucide-react';
import siteConfig from '../config/siteConfig';
import TreeIllustration from './decorative/TreeIllustration';
import FlowerSprig from './decorative/FlowerSprig';
import Houseplant from './decorative/Houseplant';
import DJEqualizer from './decorative/DJEqualizer';

const AboutSection = () => {
  const decorations = [
    <FlowerSprig className="opacity-30" />,
    <TreeIllustration className="opacity-30" />,
    <Houseplant className="opacity-30" />,
    <FlowerSprig className="opacity-30" />,
    <TreeIllustration className="opacity-30" />,
    <Houseplant className="opacity-30" />,
    <FlowerSprig className="opacity-30" />,
    <DJEqualizer className="opacity-30" />
  ];

  return (
    <section className="py-0">
      <div className="w-full">
        {siteConfig.aboutSections.map((section, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div key={index} className="grid grid-cols-2 border-b border-[#222] min-h-screen">
              {/* Left Column */}
              <div className={`px-16 py-24 flex ${isEven ? 'flex-col justify-center' : 'items-center justify-center'} border-r border-[#222]`}>
                {isEven ? (
                  <>
                    <h2 
                      className="text-5xl font-light leading-tight mb-8"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {section.title}
                    </h2>
                    <p className="text-[#999] text-lg leading-relaxed mb-12">
                      {section.description}
                    </p>
                    {section.hasLink && (
                      <a 
                        href={section.link}
                        target={section.link.startsWith('http') ? '_blank' : '_self'}
                        rel={section.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#333] hover:border-[#666] transition-all duration-300 group self-start"
                      >
                        <ArrowRight className="w-6 h-6 text-[#999] group-hover:text-[#e8e8e8] group-hover:translate-x-1 transition-all duration-300" />
                      </a>
                    )}
                  </>
                ) : (
                  <div>{decorations[index]}</div>
                )}
              </div>
              
              {/* Right Column */}
              <div className={`px-16 py-24 flex ${!isEven ? 'flex-col justify-center' : 'items-center justify-center'}`}>
                {!isEven ? (
                  <>
                    <h2 
                      className="text-5xl font-light leading-tight mb-8"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {section.title}
                    </h2>
                    <p className="text-[#999] text-lg leading-relaxed mb-12">
                      {section.description}
                    </p>
                    {section.hasLink && (
                      <a 
                        href={section.link}
                        target={section.link.startsWith('http') ? '_blank' : '_self'}
                        rel={section.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#333] hover:border-[#666] transition-all duration-300 group self-start"
                      >
                        <ArrowRight className="w-6 h-6 text-[#999] group-hover:text-[#e8e8e8] group-hover:translate-x-1 transition-all duration-300" />
                      </a>
                    )}
                  </>
                ) : (
                  <div>{decorations[index]}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutSection;
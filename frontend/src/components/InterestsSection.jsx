import React from 'react';
import { Gamepad2, Headphones, BookOpen } from 'lucide-react';
import siteConfig from '../config/siteConfig';

const InterestsSection = () => {
  return (
    <section className="py-0">
      <div className="w-full">
        {/* Interests Grid */}
        <div className="grid grid-cols-3 border-b border-[#222]">
          {/* Playing */}
          <div className="px-16 py-24 border-r border-[#222]">
            <Gamepad2 className="w-16 h-16 text-[#e8e8e8] mb-8" strokeWidth={1} />
            <h3 className="text-2xl font-semibold mb-6 text-[#e8e8e8]">Playing:</h3>
            <ul className="space-y-3 text-[#999] text-lg">
              {siteConfig.interests.playing.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          {/* Listening */}
          <div className="px-16 py-24 border-r border-[#222]">
            <Headphones className="w-16 h-16 text-[#e8e8e8] mb-8" strokeWidth={1} />
            <h3 className="text-2xl font-semibold mb-6 text-[#e8e8e8]">Listening to:</h3>
            <ul className="space-y-3 text-[#999] text-lg">
              {siteConfig.interests.listening.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          {/* Reading */}
          <div className="px-16 py-24">
            <BookOpen className="w-16 h-16 text-[#e8e8e8] mb-8" strokeWidth={1} />
            <h3 className="text-2xl font-semibold mb-6 text-[#e8e8e8]">Reading:</h3>
            <ul className="space-y-3 text-[#999] text-lg">
              {siteConfig.interests.reading.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Final CTA Section */}
        <div className="px-16 py-32 text-center border-b border-[#222]">
          <h2 
            className="text-5xl md:text-6xl font-light leading-tight mb-16"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Always excited to collaborate on challenging AI/automation problems. Reach out for project demos and code samples.
          </h2>
          <p 
            className="text-5xl font-light text-[#999]"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            All the best,<br />{siteConfig.name}
          </p>
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
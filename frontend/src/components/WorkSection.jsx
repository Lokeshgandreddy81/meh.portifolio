import React from 'react';
import { ArrowRight } from 'lucide-react';

const WorkSection = () => {
  return (
    <section className="py-0">
      <div className="w-full">
        {/* Google Section - Text Left, Empty Right */}
        <div className="grid grid-cols-2 border-b border-[#222] min-h-screen">
          <div className="px-16 py-24 flex flex-col justify-center border-r border-[#222]">
            {/* Company Logo */}
            <div className="w-24 h-24 rounded-3xl bg-[#e8e8e8] flex items-center justify-center mb-12">
              <span className="text-5xl font-bold text-[#0a0a0a]">G</span>
            </div>
            
            {/* Title */}
            <h2 
              className="text-5xl font-light leading-tight mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Right now, I design immersive news and election experiences at Google
            </h2>
            
            {/* Description */}
            <div className="text-[#999] text-lg leading-relaxed space-y-4 mb-12">
              <p>2023 — News on Search (news queries), Civics on Search (global election queries).</p>
              <p>2022 — 2023: Google News apps (iOS, Android, and news.google.com)</p>
            </div>
            
            {/* CTA Button */}
            <a 
              href="#google"
              className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#333] hover:border-[#666] transition-all duration-300 group self-start"
            >
              <ArrowRight className="w-6 h-6 text-[#999] group-hover:text-[#e8e8e8] group-hover:translate-x-1 transition-all duration-300" />
            </a>
          </div>
          <div className="px-16 py-24 flex items-center justify-center">
            {/* Empty space for decorative element */}
          </div>
        </div>

        {/* Washington Post Section - Empty Left, Text Right */}
        <div className="grid grid-cols-2 border-b border-[#222] min-h-screen">
          <div className="px-16 py-24 flex items-center justify-center border-r border-[#222]">
            {/* Empty space for decorative element */}
          </div>
          <div className="px-16 py-24 flex flex-col justify-center">
            {/* Company Logo */}
            <div className="w-24 h-24 rounded-3xl bg-[#e8e8e8] flex items-center justify-center mb-12">
              <span className="text-3xl font-bold text-[#0a0a0a]">WP</span>
            </div>
            
            {/* Title */}
            <h2 
              className="text-5xl font-light leading-tight mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Previously, I was a Senior Product Designer at The Washington Post
            </h2>
            
            {/* Description */}
            <p className="text-[#999] text-lg leading-relaxed mb-12">
              Lead designer for the initial launch of The 7 (a daily news briefing), co-designer for 2020 United States election experiences. I also led design and research for a suite of consumer personalization and enterprise CMS experiences.
            </p>
            
            {/* CTA Button */}
            <a 
              href="#washingtonpost"
              className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#333] hover:border-[#666] transition-all duration-300 group self-start"
            >
              <ArrowRight className="w-6 h-6 text-[#999] group-hover:text-[#e8e8e8] group-hover:translate-x-1 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
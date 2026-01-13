import React from 'react';
import { ArrowRight } from 'lucide-react';

const WorkSection = () => {
  const workExperiences = [
    {
      id: 'google',
      company: 'Google',
      logo: 'G',
      title: 'Right now, I design immersive news and election experiences at Google',
      description: '2023 — News on Search (news queries), Civics on Search (global election queries).\n\n2022 — 2023: Google News apps (iOS, Android, and news.google.com)',
      link: '#google'
    },
    {
      id: 'washingtonpost',
      company: 'The Washington Post',
      logo: 'WP',
      title: 'Previously, I was a Senior Product Designer at The Washington Post',
      description: 'Lead designer for the initial launch of The 7 (a daily news briefing), co-designer for 2020 United States election experiences. I also led design and research for a suite of consumer personalization and enterprise CMS experiences.',
      link: '#washingtonpost'
    }
  ];

  return (
    <section className="py-20 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {workExperiences.map((work) => (
            <div key={work.id} className="space-y-8">
              {/* Company Logo */}
              <div className="w-20 h-20 rounded-2xl bg-[#e8e8e8] flex items-center justify-center">
                <span className="text-3xl font-bold text-[#0a0a0a]">{work.logo}</span>
              </div>
              
              {/* Title */}
              <h2 
                className="text-3xl md:text-4xl font-light leading-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {work.title}
              </h2>
              
              {/* Description */}
              <p className="text-[#999] text-base leading-relaxed whitespace-pre-line">
                {work.description}
              </p>
              
              {/* CTA Button */}
              <a 
                href={work.link}
                className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#333] hover:border-[#666] transition-all duration-300 group"
              >
                <ArrowRight className="w-5 h-5 text-[#999] group-hover:text-[#e8e8e8] group-hover:translate-x-1 transition-all duration-300" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
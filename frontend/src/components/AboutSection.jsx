import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const sections = [
    {
      title: 'I started my career as a frontend developer',
      description: 'I graduated with a degree in computer science from The University of Virginia. I also held a frontend-focused SWE internship at Goldman Sachs and worked part-time at a local web agency.'
    },
    {
      title: 'But my true love is human psychology',
      description: 'I transitioned to design after I found a passion for mental health. I find time to code when I can — like this portfolio.'
    },
    {
      title: 'I spent a year as a social entreprenuer, improving college mental health outcomes',
      description: 'Here\'s something I wrote about how this project connected to my mental health experience in college. Full details in the case study below.',
      link: '#mentalhealth',
      hasLink: true
    },
    {
      title: 'I also teach and mentor aspiring designers and developers',
      description: 'Shoot me a line if you\'d like to connect on mentorship. Number one tip — stay off of Dribbble.',
      link: 'https://adplist.org/mentors/daniel-autry',
      hasLink: true
    },
    {
      title: 'In addition to Psychology, I\'m passionate about News, Healthcare, Climate Change, and Education',
      description: 'This is where I find the intersection of technology and social impact the most fascinating, assuming there are the appropiate safeguards'
    },
    {
      title: 'My current project is an open-source UX resource for aspiring designers (coming soon)',
      description: 'I\'m a big believer in accessible quality education. I\'ve had so many people who\'ve helped me stay on my feet and I\'d like to pay it forward.'
    },
    {
      title: 'Outside of work, I\'m a houseplant enthusiast and powerlifter',
      description: 'I hope to get a NASM training and nutrition certification when time allows (and learn how to keep a fiddle leaf alive)'
    },
    {
      title: 'And an aspiring house DJ (80% serious)',
      description: 'DJing became a pandemic hobby, and long, blended sets of house music relaxes my brain especially.'
    }
  ];

  return (
    <section className="py-20 px-8">
      <div className="max-w-[1200px] mx-auto space-y-32">
        {sections.map((section, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 
                className="text-3xl md:text-4xl font-light leading-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {section.title}
              </h2>
              <p className="text-[#999] text-base leading-relaxed">
                {section.description}
              </p>
              {section.hasLink && (
                <a 
                  href={section.link}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#333] hover:border-[#666] transition-all duration-300 group"
                >
                  <ArrowRight className="w-5 h-5 text-[#999] group-hover:text-[#e8e8e8] group-hover:translate-x-1 transition-all duration-300" />
                </a>
              )}
            </div>
            <div className="flex items-center justify-center">
              {section.icon && (
                <div className="text-[200px] opacity-20 select-none">
                  {section.icon}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
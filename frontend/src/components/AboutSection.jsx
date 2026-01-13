import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-0">
      <div className="w-full">
        {/* Frontend Developer - Text Left */}
        <div className="grid grid-cols-2 border-b border-[#222] min-h-screen">
          <div className="px-16 py-24 flex flex-col justify-center border-r border-[#222]">
            <h2 
              className="text-5xl font-light leading-tight mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              I started my career as a frontend developer
            </h2>
            <p className="text-[#999] text-lg leading-relaxed">
              I graduated with a degree in computer science from The University of Virginia. I also held a frontend-focused SWE internship at Goldman Sachs and worked part-time at a local web agency.
            </p>
          </div>
          <div className="px-16 py-24 flex items-center justify-center">
            {/* Decorative illustration space */}
          </div>
        </div>

        {/* Psychology - Text Right */}
        <div className="grid grid-cols-2 border-b border-[#222] min-h-screen">
          <div className="px-16 py-24 flex items-center justify-center border-r border-[#222]">
            {/* Decorative illustration space */}
          </div>
          <div className="px-16 py-24 flex flex-col justify-center">
            <h2 
              className="text-5xl font-light leading-tight mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              But my true love is human psychology
            </h2>
            <p className="text-[#999] text-lg leading-relaxed">
              I transitioned to design after I found a passion for mental health. I find time to code when I can — like this portfolio.
            </p>
          </div>
        </div>

        {/* Mental Health - Text Left */}
        <div className="grid grid-cols-2 border-b border-[#222] min-h-screen">
          <div className="px-16 py-24 flex flex-col justify-center border-r border-[#222]">
            <h2 
              className="text-5xl font-light leading-tight mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              I spent a year as a social entreprenuer, improving college mental health outcomes
            </h2>
            <p className="text-[#999] text-lg leading-relaxed mb-12">
              <a 
                href="https://medium.com/@dxautry/how-my-depression-became-my-career-ddf80c2cc5fd" 
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#e8e8e8] transition-colors"
              >
                Here's something I wrote
              </a> about how this project connected to my mental health experience in college. Full details in the case study below.
            </p>
            <a 
              href="#mentalhealth"
              className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#333] hover:border-[#666] transition-all duration-300 group self-start"
            >
              <ArrowRight className="w-6 h-6 text-[#999] group-hover:text-[#e8e8e8] group-hover:translate-x-1 transition-all duration-300" />
            </a>
          </div>
          <div className="px-16 py-24 flex items-center justify-center">
            {/* Decorative illustration space */}
          </div>
        </div>

        {/* Mentorship - Text Right */}
        <div className="grid grid-cols-2 border-b border-[#222] min-h-screen">
          <div className="px-16 py-24 flex items-center justify-center border-r border-[#222]">
            {/* Decorative illustration space */}
          </div>
          <div className="px-16 py-24 flex flex-col justify-center">
            <h2 
              className="text-5xl font-light leading-tight mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              I also teach and mentor aspiring designers and developers
            </h2>
            <p className="text-[#999] text-lg leading-relaxed mb-12">
              Shoot me a line if you'd like to connect on mentorship. Number one tip — <a 
                href="https://www.reddit.com/r/UXDesign/comments/q3ldjb/why_is_there_such_a_disconnect_between/" 
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#e8e8e8] transition-colors"
              >
                stay off of Dribbble.
              </a>
            </p>
            <a 
              href="https://adplist.org/mentors/daniel-autry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#333] hover:border-[#666] transition-all duration-300 group self-start"
            >
              <ArrowRight className="w-6 h-6 text-[#999] group-hover:text-[#e8e8e8] group-hover:translate-x-1 transition-all duration-300" />
            </a>
          </div>
        </div>

        {/* Passions - Text Left */}
        <div className="grid grid-cols-2 border-b border-[#222] min-h-screen">
          <div className="px-16 py-24 flex flex-col justify-center border-r border-[#222]">
            <h2 
              className="text-5xl font-light leading-tight mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              In addition to Psychology, I'm passionate about News, Healthcare, Climate Change, and Education
            </h2>
            <p className="text-[#999] text-lg leading-relaxed">
              This is where I find the intersection of technology and social impact the most fascinating, assuming there are the appropiate safeguards
            </p>
          </div>
          <div className="px-16 py-24 flex items-center justify-center">
            {/* Decorative illustration space */}
          </div>
        </div>

        {/* UX Resource - Text Right */}
        <div className="grid grid-cols-2 border-b border-[#222] min-h-screen">
          <div className="px-16 py-24 flex items-center justify-center border-r border-[#222]">
            {/* Decorative illustration space */}
          </div>
          <div className="px-16 py-24 flex flex-col justify-center">
            <h2 
              className="text-5xl font-light leading-tight mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              My current project is an open-source UX resource for aspiring designers (coming soon)
            </h2>
            <p className="text-[#999] text-lg leading-relaxed">
              I'm a big believer in accessible quality education. I've had so many people who've helped me stay on my feet and I'd like to pay it forward.
            </p>
          </div>
        </div>

        {/* Houseplant - Text Left */}
        <div className="grid grid-cols-2 border-b border-[#222] min-h-screen">
          <div className="px-16 py-24 flex flex-col justify-center border-r border-[#222]">
            <h2 
              className="text-5xl font-light leading-tight mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Outside of work, I'm a houseplant enthusiast and powerlifter
            </h2>
            <p className="text-[#999] text-lg leading-relaxed">
              I hope to get a NASM training and nutrition certification when time allows (and learn how to keep a fiddle leaf alive)
            </p>
          </div>
          <div className="px-16 py-24 flex items-center justify-center">
            {/* Decorative illustration space */}
          </div>
        </div>

        {/* DJ - Text Right */}
        <div className="grid grid-cols-2 border-b border-[#222] min-h-screen">
          <div className="px-16 py-24 flex items-center justify-center border-r border-[#222]">
            {/* Decorative illustration space */}
          </div>
          <div className="px-16 py-24 flex flex-col justify-center">
            <h2 
              className="text-5xl font-light leading-tight mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              And an aspiring house DJ (80% serious)
            </h2>
            <p className="text-[#999] text-lg leading-relaxed">
              DJing became a pandemic hobby, and long, blended sets of house music relaxes my brain especially.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
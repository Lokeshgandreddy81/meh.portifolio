import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 px-8">
      <div className="max-w-[1400px] mx-auto space-y-40">
        {/* Frontend Developer Section */}
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h2 
              className="text-4xl md:text-5xl font-light leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              I started my career as a frontend developer
            </h2>
            <p className="text-[#999] text-lg leading-relaxed">
              I graduated with a degree in computer science from The University of Virginia. I also held a frontend-focused SWE internship at Goldman Sachs and worked part-time at a local web agency.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full h-full opacity-0"></div>
          </div>
        </div>

        {/* Psychology Section */}
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="flex items-center justify-center order-2 lg:order-1">
            <div className="w-full h-full opacity-0"></div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <h2 
              className="text-4xl md:text-5xl font-light leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              But my true love is human psychology
            </h2>
            <p className="text-[#999] text-lg leading-relaxed">
              I transitioned to design after I found a passion for mental health. I find time to code when I can — like this portfolio.
            </p>
          </div>
        </div>

        {/* Mental Health Section */}
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h2 
              className="text-4xl md:text-5xl font-light leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              I spent a year as a social entreprenuer, improving college mental health outcomes
            </h2>
            <p className="text-[#999] text-lg leading-relaxed">
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
              className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#333] hover:border-[#666] transition-all duration-300 group"
            >
              <ArrowRight className="w-6 h-6 text-[#999] group-hover:text-[#e8e8e8] group-hover:translate-x-1 transition-all duration-300" />
            </a>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full h-full opacity-0"></div>
          </div>
        </div>

        {/* Mentorship Section */}
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="flex items-center justify-center order-2 lg:order-1">
            <div className="w-full h-full opacity-0"></div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <h2 
              className="text-4xl md:text-5xl font-light leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              I also teach and mentor aspiring designers and developers
            </h2>
            <p className="text-[#999] text-lg leading-relaxed">
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
              href="https://adplist.org/mentors/daniel-autry?utm_source=linkedin&utm_medium=social&utm_campaign=user_profileshare&utm_content=danielautry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#333] hover:border-[#666] transition-all duration-300 group"
            >
              <ArrowRight className="w-6 h-6 text-[#999] group-hover:text-[#e8e8e8] group-hover:translate-x-1 transition-all duration-300" />
            </a>
          </div>
        </div>

        {/* Passions Section */}
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h2 
              className="text-4xl md:text-5xl font-light leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              In addition to Psychology, I'm passionate about News, Healthcare, Climate Change, and Education
            </h2>
            <p className="text-[#999] text-lg leading-relaxed">
              This is where I find the intersection of technology and social impact the most fascinating, assuming there are the appropiate safeguards
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full h-full opacity-0"></div>
          </div>
        </div>

        {/* UX Resource Section */}
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="flex items-center justify-center order-2 lg:order-1">
            <div className="w-full h-full opacity-0"></div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <h2 
              className="text-4xl md:text-5xl font-light leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              My current project is an open-source UX resource for aspiring designers (coming soon)
            </h2>
            <p className="text-[#999] text-lg leading-relaxed">
              I'm a big believer in accessible quality education. I've had so many people who've helped me stay on my feet and I'd like to pay it forward.
            </p>
          </div>
        </div>

        {/* Houseplant Section */}
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h2 
              className="text-4xl md:text-5xl font-light leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Outside of work, I'm a houseplant enthusiast and powerlifter
            </h2>
            <p className="text-[#999] text-lg leading-relaxed">
              I hope to get a NASM training and nutrition certification when time allows (and learn how to keep a fiddle leaf alive)
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full h-full opacity-0"></div>
          </div>
        </div>

        {/* DJ Section */}
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="flex items-center justify-center order-2 lg:order-1">
            <div className="w-full h-full opacity-0"></div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <h2 
              className="text-4xl md:text-5xl font-light leading-tight"
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
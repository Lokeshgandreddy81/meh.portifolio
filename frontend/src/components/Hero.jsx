import React from 'react';
import siteConfig from '../config/siteConfig';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-start pt-32 pb-32 px-8">
      <div className="max-w-[1400px] w-full">
        <div className="flex flex-col items-start gap-16">
          {/* Profile Image */}
          <img 
            src={siteConfig.profileImage}
            alt={siteConfig.name}
            className="w-40 h-40 rounded-full grayscale object-cover border border-border"
          />
          
          {/* Main Heading */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.15] text-foreground max-w-[1100px]"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Hi, I'm {siteConfig.name.split(' ')[0]} —<br />
            {siteConfig.tagline}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
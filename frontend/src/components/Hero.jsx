import React from 'react';
import siteConfig from '../config/siteConfig';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-start pt-24 pb-20 px-6 md:pt-32 md:pb-32 md:px-8">
      <div className="max-w-[1400px] w-full">
        <div className="flex flex-col items-start gap-12 md:gap-16">
          {/* Profile Image */}
          <img
            src={siteConfig.profileImage}
            alt={siteConfig.name}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full grayscale object-cover border border-border"
          />

          {/* Main Heading */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.15] text-foreground max-w-[1100px]"
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
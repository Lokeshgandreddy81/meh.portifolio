import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-start pt-32 pb-32 px-8">
      <div className="max-w-[1400px] w-full">
        <div className="flex flex-col items-start gap-16">
          {/* Profile Image */}
          <img 
            src="https://danielautry.com/static/media/profile.3aaf58cfebb540d740ee.jpeg"
            alt="Daniel Autry"
            className="w-40 h-40 rounded-full grayscale object-cover border border-[#333]"
          />
          
          {/* Main Heading */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.15] text-[#e8e8e8] max-w-[1100px]"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Hi, I'm Daniel —<br />
            a designer fascinated by the social impact space. This is my creative greenhouse.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
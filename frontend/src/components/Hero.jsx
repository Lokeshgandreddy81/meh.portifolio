import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-20 px-8">
      <div className="max-w-[1200px] w-full">
        <div className="flex flex-col items-start gap-12">
          {/* Profile Image */}
          <img 
            src="https://danielautry.com/static/media/profile.3aaf58cfebb540d740ee.jpeg"
            alt="Daniel Autry"
            className="w-32 h-32 rounded-full grayscale object-cover border-2 border-[#333]"
          />
          
          {/* Main Heading */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-[#e8e8e8]"
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
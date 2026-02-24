import React, { useRef, useState, useEffect } from 'react';
import siteConfig from '../config/siteConfig';
import { ArrowUpRight } from 'lucide-react';

const GlassFoilCard = ({ children, className, delay = 0 }) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simple mount animation cascade
    const timer = setTimeout(() => setIsVisible(true), 100 + delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Physics-based tilt (-3deg to +3deg max for elegance)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({ x: glareX, y: glareY, opacity: 1 });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare(prev => ({ ...prev, opacity: 0 }));
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full group origin-center ${className}`}
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? `perspective(1200px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateY(0)`
          : `perspective(1200px) rotateX(10deg) translateY(40px)`,
        transition: isHovered
          ? 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          : 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.2s ease-out'
      }}
    >
      <div
        className="absolute inset-0 bg-white/[0.01] backdrop-blur-[60px] rounded-[2.5rem] overflow-hidden border border-white/[0.05] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]"
        style={{ transform: 'translateZ(0)' }}
      >
        {/* Cinematic Glare Foil / Shimmer */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 50%)`,
            mixBlendMode: 'screen'
          }}
        />
        {/* Slanted Glass Refraction Line */}
        <div
          className="absolute top-0 left-0 w-[200%] h-[200%] pointer-events-none opacity-[0.03] transition-transform duration-300 ease-out z-10"
          style={{
            transform: `translateX(${glare.x / 2 - 50}%) translateY(${glare.y / 2 - 50}%) rotate(35deg)`,
            background: `linear-gradient(90deg, transparent 45%, white 50%, transparent 55%)`
          }}
        />

        {/* Inner Content Wrapper */}
        <div className="relative z-20 h-full w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="py-32 md:py-48 bg-[#020202] relative overflow-hidden text-white section-border border-b select-none">

      {/* Absolute Void Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(30,30,40,1)_0%,rgba(2,2,2,1)_100%)] opacity-30 pointer-events-none" />

      {/* Super Subtle Scanline Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMwMTAxMDEiLz48cGF0aCBkPSJNMCAwTDEgMTAgMUwwIDBaIiBmaWxsPSIjMDUwNTA1Ii8+PC9zdmc+')] opacity-20 pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 md:px-12 max-w-[1200px] relative z-10">

        {/* Jaw-Dropping Typography Header */}
        <div className="mb-32 md:mb-48 flex flex-col pt-12">
          <p className="font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/40 mb-8 ml-2 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-white/20" />
            01 // Anatomy of a Builder
          </p>
          <h2
            className="text-[4rem] md:text-[8rem] lg:text-[10rem] font-bold leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/10"
          >
            SYSTEMS.<br />
            <span className="italic font-light ml-0 md:ml-32" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Architecture.</span>
          </h2>
        </div>

        {/* The Overlapping Monolith Cascade */}
        <div className="relative w-full flex flex-col gap-8 md:gap-0 pb-32">

          {siteConfig.aboutSections.map((section, index) => {
            // Calculate staggering and offsets to create an editorial collage
            const isEven = index % 2 === 0;
            const marginTop = index === 0 ? '0' : 'md:-mt-24';
            const alignment = isEven ? 'md:mr-auto' : 'md:ml-auto';
            const width = index === 0 ? 'md:w-[85%]' : index === 3 ? 'md:w-[100%]' : 'md:w-[65%]';

            return (
              <div key={index} className={`relative z-[${10 - index}] ${width} ${alignment} ${marginTop}`}>
                <GlassFoilCard delay={index * 200} className="w-full">
                  <div className="p-10 md:p-16 lg:p-24 flex flex-col relative overflow-hidden">

                    {/* Massive Stroke Number Typography (Jaw-Dropping Depth) */}
                    <div
                      className="absolute -top-10 -right-10 text-[18rem] md:text-[24rem] font-bold leading-none select-none pointer-events-none"
                      style={{
                        WebkitTextStroke: '2px rgba(255,255,255,0.03)',
                        color: 'transparent',
                        fontFamily: 'system-ui, -apple-system, sans-serif'
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-12">
                        <div className="w-2 h-2 bg-white/30 rounded-full group-hover:bg-blue-400 group-hover:shadow-[0_0_15px_rgba(59,130,246,1)] transition-all duration-700" />
                        <span className="font-mono text-xs text-white/40 tracking-widest uppercase group-hover:text-white/70 transition-colors duration-700">Thesis {index + 1}</span>
                      </div>

                      <h3
                        className="text-3xl md:text-5xl lg:text-6xl font-light leading-10 md:leading-[1.1] text-white/90 mb-8 md:max-w-[80%]"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      >
                        {section.title}
                      </h3>

                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-12 md:mt-24">
                        <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-lg group-hover:text-white/70 transition-colors duration-700">
                          {section.description}
                        </p>

                        <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden relative cursor-pointer">
                          <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-white relative z-10 transition-colors duration-500" />
                          {/* Hover fill */}
                          <div className="absolute inset-0 bg-white scale-0 rounded-full group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] opacity-0 group-hover:opacity-10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassFoilCard>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
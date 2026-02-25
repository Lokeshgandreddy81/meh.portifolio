import React, { useEffect, useRef, useState } from 'react';
import siteConfig from '../config/siteConfig';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const profileRef = useRef(null);

  useEffect(() => {
    // Trigger mount animations after a tiny delay for smoothness
    const timer = setTimeout(() => setIsMounted(true), 100);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e) => {
      if (!profileRef.current) return;
      const rect = profileRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setMousePos({ x: x * 0.1, y: y * 0.1 });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Parallax physics calculations
  const textTranslateY = scrollY * 0.4;
  const imageTranslateY = scrollY * 0.15;
  const opacityFade = Math.max(0, 1 - (scrollY / (window.innerHeight * 0.8)));

  // Split name for staggered reveal
  const nameParts = siteConfig.name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts[1] || '';

  return (
    <section
      id="home"
      className="min-h-[120vh] w-full relative z-50 bg-[#f8f9fa] dark:bg-[#0a0a0a] transition-colors duration-500 ease-out flex flex-col justify-center overflow-hidden"
    >
      {/* High-End Ambient Aura (Light Mode) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply block dark:hidden will-change-transform"
        style={{
          background: 'radial-gradient(circle at 70% 30%, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0) 50%)',
          transform: `translateY(${scrollY * 0.2}px)`
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply block dark:hidden will-change-transform"
        style={{
          background: 'radial-gradient(circle at 30% 80%, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0) 60%)',
          transform: `translateY(${scrollY * -0.1}px)`
        }}
      />

      {/* ── Rich Dark Mode Ambient Orbs ─────────────────────────── */}
      {/* Blue orb — top right */}
      <div
        className="absolute pointer-events-none mix-blend-screen hidden dark:block will-change-transform rounded-full"
        style={{
          width: '70vw', height: '70vw',
          top: '-20%', right: '-15%',
          background: 'radial-gradient(circle, #1e40af 0%, #1d4ed8 30%, #312e81 60%, transparent 80%)',
          filter: 'blur(90px)',
          opacity: 0.3,
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      />
      {/* Violet orb — bottom left */}
      <div
        className="absolute pointer-events-none mix-blend-screen hidden dark:block will-change-transform rounded-full"
        style={{
          width: '55vw', height: '55vw',
          bottom: '-10%', left: '-10%',
          background: 'radial-gradient(circle, #5b21b6 0%, #6d28d9 40%, #4c1d95 65%, transparent 82%)',
          filter: 'blur(80px)',
          opacity: 0.22,
          transform: `translateY(${scrollY * -0.08}px)`,
        }}
      />
      {/* Pink accent orb — center fade */}
      <div
        className="absolute pointer-events-none mix-blend-screen hidden dark:block rounded-full"
        style={{
          width: '30vw', height: '30vw',
          top: '55%', left: '45%',
          background: 'radial-gradient(circle, #831843 0%, #9d174d 50%, transparent 75%)',
          filter: 'blur(60px)',
          opacity: 0.14,
        }}
      />
      {/* Subtle grain in dark mode */}
      <div
        className="absolute inset-0 pointer-events-none hidden dark:block"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")',
          opacity: 0.03,
          mixBlendMode: 'overlay',
        }}
      />

      <div
        className="container mx-auto px-6 md:px-12 relative z-10 w-full"
        style={{
          opacity: opacityFade,
          transform: `translateY(${textTranslateY}px)`,
          willChange: 'transform, opacity'
        }}
      >
        <div className="flex flex-col md:flex-row justify-between items-end w-full gap-12 md:gap-0">

          {/* The Monolithic Typography */}
          <div className="flex flex-col relative z-20 pointer-events-auto">
            <span
              className="font-mono text-xs tracking-[0.4em] uppercase text-black/50 dark:text-white/50 mb-8 overflow-hidden inline-block transition-colors duration-500"
            >
              <span
                className="inline-block transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transform: isMounted ? 'translateY(0)' : 'translateY(100%)' }}
              >
                Portfolio // {new Date().getFullYear()}
              </span>
            </span>

            <h1 className="flex flex-col leading-[0.85] tracking-tighter relative group cursor-default">
              {/* Fluid Gradient Mesh Mask Background */}
              <div
                className="absolute inset-[-20%] z-0 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-[2s]"
                style={{
                  background: 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
                  animation: 'spin 10s linear infinite'
                }}
              />
              <style>{`
                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
              `}</style>

              {/* Line 1 */}
              <span className="overflow-hidden py-2 inline-block -ml-2 relative z-10 mix-blend-difference text-white">
                <span
                  className="inline-block transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] text-[10vw] md:text-[7rem] lg:text-[9rem] font-medium uppercase tracking-tight leading-none"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    transform: isMounted ? 'translateY(0)' : 'translateY(100%)'
                  }}
                >
                  Ideas Become
                </span>
              </span>
              {/* Line 2 */}
              <span className="overflow-hidden py-2 inline-block ml-4 md:ml-16 relative z-10 mix-blend-difference text-white">
                <span
                  className="inline-block transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] text-[11vw] md:text-[8rem] lg:text-[10rem] font-light italic uppercase tracking-tighter leading-none"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    transform: isMounted ? 'translateY(0)' : 'translateY(100%)',
                    transitionDelay: '0.1s'
                  }}
                >
                  Infrastructure
                </span>
              </span>
            </h1>
          </div>

          {/* Massive Personality Anchor - True God-Tier Scale */}
          <div
            ref={profileRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-[55%] lg:w-[45%] h-[80vh] md:h-[110vh] overflow-visible group pointer-events-none z-0 mix-blend-normal"
            style={{
              transform: `perspective(2000px) rotateX(${mousePos.y * -0.2}deg) rotateY(${mousePos.x * -0.2}deg)`,
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Ambient Image Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0" />

            <div className="relative w-full h-full">
              <img
                src={siteConfig.profileImage}
                alt={siteConfig.name}
                className="w-full h-full object-cover object-bottom filter grayscale-[30%] contrast-125 brightness-90 md:brightness-100 will-change-transform scale-110 drop-shadow-2xl"
                style={{
                  transform: isMounted
                    ? `scale(1) translate3d(${mousePos.x * -0.8}px, ${imageTranslateY * -0.8 + mousePos.y * -0.8}px, 0)`
                    : 'scale(1.1) translateY(40px)',
                  transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1), filter 1.5s ease',
                  maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                }}
              />
            </div>
            {/* Cinematic Wipe */}
            <div
              className="absolute inset-0 bg-[#f8f9fa] dark:bg-[#0a0a0a] z-20 origin-top"
              style={{
                transform: isMounted ? 'scaleY(0)' : 'scaleY(1)',
                transition: 'transform 2s cubic-bezier(0.85, 0, 0.15, 1)',
                transitionDelay: '0.2s'
              }}
            />
          </div>

        </div>

        {/* Tactical Tagline / Ideology Block */}
        <div className="mt-24 md:mt-40 max-w-2xl overflow-hidden relative z-20">
          <div
            className="p-8 md:p-12 border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-md rounded-2xl relative overflow-hidden group"
            style={{
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: '0.6s'
            }}
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/40 dark:text-white/40 mb-6 block">
              The Architecture Directive
            </p>
            <p className="text-black/80 dark:text-white/80 text-xl md:text-3xl font-light leading-snug tracking-tight">
              I architect intelligent systems that think, automate, and scale. This is where ideas become infrastructure.
            </p>

            {/* Signature / Name identity restored gracefully here */}
            <div className="mt-12 flex items-center gap-4">
              <div className="w-12 h-[1px] bg-black/20 dark:bg-white/20" />
              <span className="font-medium text-sm tracking-widest uppercase text-black dark:text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                {siteConfig.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
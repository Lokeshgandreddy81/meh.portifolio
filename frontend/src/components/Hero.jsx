import React, { useEffect, useRef, useState } from 'react';
import siteConfig from '../config/siteConfig';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const profileRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);

    const handleScroll = () => setScrollY(window.scrollY);

    const handleMouseMove = (e) => {
      // For profile parallax (relative to profile element)
      if (profileRef.current) {
        const rect = profileRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setMousePos({ x: x * 0.08, y: y * 0.08 });
      }
      // For global orb tracking (0..1)
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const textTranslateY = scrollY * 0.4;
  const imageTranslateY = scrollY * 0.15;
  const opacityFade = Math.max(0, 1 - (scrollY / (window.innerHeight * 0.8)));

  return (
    <section
      id="home"
      className="min-h-[120vh] w-full relative z-50 dark:bg-[#07080d] bg-[#f8f9fa] transition-colors duration-500 ease-out flex flex-col justify-center overflow-hidden"
    >

      {/* ════════════════════════════════════════════════════
          DARK MODE ATMOSPHERE
      ════════════════════════════════════════════════════ */}

      {/* Rotating aurora conic — the heartbeat of the scene */}
      <div
        className="absolute pointer-events-none hidden dark:block"
        style={{
          top: '50%', left: '50%',
          width: '200vw', height: '200vw',
          animation: 'heroAuroraRotate 40s linear infinite',
          background: 'conic-gradient(from 0deg at 50% 50%, #04050d 0deg, #0a1230 50deg, #0e0328 100deg, #040913 150deg, #0a1230 200deg, #0c0325 260deg, #04050d 310deg, #070d24 360deg)',
          opacity: 0.85,
          zIndex: 0,
        }}
      />

      {/* Blue orb — top right — mouse reactive */}
      <div
        className="absolute pointer-events-none mix-blend-screen hidden dark:block rounded-full"
        style={{
          width: '72vw', height: '72vw',
          top: '-18%', right: '-15%',
          background: 'radial-gradient(circle, rgba(29,78,216,0.35) 0%, rgba(67,56,202,0.18) 40%, transparent 70%)',
          filter: 'blur(90px)',
          transform: `translate(${(mouse.x - 0.5) * -50}px, ${(mouse.y - 0.5) * -50 + scrollY * 0.15}px)`,
          transition: 'transform 3s cubic-bezier(0.16,1,0.3,1)',
          zIndex: 1,
        }}
      />

      {/* Violet orb — bottom left — mouse reactive */}
      <div
        className="absolute pointer-events-none mix-blend-screen hidden dark:block rounded-full"
        style={{
          width: '58vw', height: '58vw',
          bottom: '-12%', left: '-10%',
          background: 'radial-gradient(circle, rgba(91,33,182,0.30) 0%, rgba(109,40,217,0.15) 45%, transparent 72%)',
          filter: 'blur(80px)',
          transform: `translate(${(mouse.x - 0.5) * 40}px, ${(mouse.y - 0.5) * 40 + scrollY * -0.08}px)`,
          transition: 'transform 2.5s cubic-bezier(0.16,1,0.3,1)',
          zIndex: 1,
        }}
      />

      {/* Pink accent — center */}
      <div
        className="absolute pointer-events-none mix-blend-screen hidden dark:block rounded-full"
        style={{
          width: '32vw', height: '32vw',
          top: '50%', left: '42%',
          background: 'radial-gradient(circle, rgba(157,23,77,0.18) 0%, transparent 70%)',
          filter: 'blur(70px)',
          opacity: 0.9,
          zIndex: 1,
        }}
      />

      {/* Subtle noise grain — dark only */}
      <div
        className="absolute inset-0 pointer-events-none hidden dark:block"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")',
          opacity: 0.035,
          mixBlendMode: 'overlay',
          zIndex: 2,
        }}
      />

      {/* Architectural grid — dark only */}
      <div
        className="absolute inset-0 pointer-events-none hidden dark:block"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
          backgroundSize: '90px 90px',
          zIndex: 2,
        }}
      />

      {/* ════════════════════════════════════════════════════
          LIGHT MODE ATMOSPHERE
      ════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply block dark:hidden"
        style={{
          background: 'radial-gradient(circle at 70% 30%, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0) 50%)',
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply block dark:hidden"
        style={{
          background: 'radial-gradient(circle at 30% 80%, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0) 60%)',
          transform: `translateY(${scrollY * -0.1}px)`,
        }}
      />

      {/* ════════════════════════════════════════════════════
          MAIN CONTENT
      ════════════════════════════════════════════════════ */}
      <div
        className="container mx-auto px-6 md:px-12 relative w-full"
        style={{
          zIndex: 10,
          opacity: opacityFade,
          transform: `translateY(${textTranslateY}px)`,
          willChange: 'transform, opacity',
        }}
      >
        <div className="flex flex-col md:flex-row justify-between items-end w-full gap-12 md:gap-0">

          {/* ── LEFT: Monolithic Typography ── */}
          <div className="flex flex-col relative z-20 pointer-events-auto">

            {/* Portfolio // Year — slide up on mount */}
            <span className="font-mono text-xs tracking-[0.4em] uppercase text-black/50 dark:text-white/40 mb-8 overflow-hidden inline-block">
              <span
                className="inline-block"
                style={{
                  transform: isMounted ? 'translateY(0)' : 'translateY(100%)',
                  transition: 'transform 1s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                Portfolio // {new Date().getFullYear()}
              </span>
            </span>

            <h1 className="flex flex-col leading-[0.85] tracking-tighter relative group cursor-default">

              {/* Ambient indigo glow behind the text */}
              <div
                className="absolute -inset-8 z-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 85% 65% at 38% 50%, rgba(99,102,241,0.14) 0%, rgba(168,85,247,0.08) 55%, transparent 80%)',
                  animation: 'heroAura 6s ease-in-out infinite',
                }}
              />

              {/* Outer counter-rotating ring — always visible at low opacity */}
              <div
                className="absolute inset-[-35%] z-0 rounded-full blur-[80px] pointer-events-none"
                style={{
                  background: 'conic-gradient(from 0deg at 50% 50%, #3b82f6 0deg, transparent 60deg, #a853ba 120deg, transparent 180deg, #e92a67 240deg, transparent 300deg, #3b82f6 360deg)',
                  animation: 'heroSpinCCW 13s linear infinite',
                  opacity: 0.10,
                  transition: 'opacity 1.5s ease',
                }}
              />

              {/* Inner spinning conic bloom — base visible, intensifies on hover */}
              <div
                className="absolute inset-[-20%] z-0 rounded-full blur-3xl pointer-events-none group-hover:scale-110"
                style={{
                  background: 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 120deg, #e92a67 240deg, #2a8af6 360deg)',
                  animation: 'heroSpin 7s linear infinite',
                  opacity: 0.15,
                  transition: 'opacity 1.8s ease, transform 1.8s ease',
                }}
              />
              {/* Hover overlay to intensify */}
              <div
                className="absolute inset-[-20%] z-0 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-40"
                style={{
                  background: 'conic-gradient(from 0deg at 50% 50%, #e92a67 0deg, #a853ba 120deg, #2a8af6 240deg, #e92a67 360deg)',
                  animation: 'heroSpinCCW 5s linear infinite',
                  transition: 'opacity 1.5s ease',
                }}
              />

              {/* ── Line 1: IDEAS BECOME ── */}
              <span className="overflow-hidden py-1.5 inline-block -ml-1 relative z-10">
                <span
                  className="inline-block text-[7.5vw] md:text-[5.5rem] lg:text-[7rem] font-black uppercase tracking-tight leading-none"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    background: 'linear-gradient(105deg, #c7d2fe 0%, #818cf8 15%, #a78bfa 30%, #f472b6 50%, #fb923c 68%, #fbbf24 82%, #c7d2fe 100%)',
                    backgroundSize: '280% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'heroGradientFlow 5s linear infinite',
                    filter: 'drop-shadow(0 0 45px rgba(139,92,246,0.45))',
                    transform: isMounted ? 'translateY(0)' : 'translateY(110%)',
                    transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1)',
                    transitionDelay: '0.1s',
                  }}
                >
                  Ideas Become
                </span>
              </span>

              {/* ── Line 2: INFRASTRUCTURE — counter-flowing, serif ── */}
              <span className="overflow-hidden py-1.5 inline-block ml-3 md:ml-12 relative z-10">
                <span
                  className="inline-block text-[9vw] md:text-[7rem] lg:text-[9rem] font-light italic uppercase tracking-tighter leading-none"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    background: 'linear-gradient(105deg, #fbbf24 0%, #fb923c 18%, #f472b6 38%, #a78bfa 58%, #818cf8 78%, #fbbf24 100%)',
                    backgroundSize: '280% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'heroGradientFlow 5s linear infinite reverse',
                    animationDelay: '-2.5s',
                    filter: 'drop-shadow(0 0 55px rgba(251,146,60,0.4))',
                    transform: isMounted ? 'translateY(0)' : 'translateY(110%)',
                    transition: 'transform 1.4s cubic-bezier(0.16,1,0.3,1)',
                    transitionDelay: '0.22s',
                  }}
                >
                  Infrastructure
                </span>
              </span>

              <style>{`
                @keyframes heroAuroraRotate {
                  from { transform: translate(-50%, -50%) rotate(0deg); }
                  to   { transform: translate(-50%, -50%) rotate(360deg); }
                }
                @keyframes heroSpin {
                  from { transform: rotate(0deg); }
                  to   { transform: rotate(360deg); }
                }
                @keyframes heroSpinCCW {
                  from { transform: rotate(0deg); }
                  to   { transform: rotate(-360deg); }
                }
                @keyframes heroGradientFlow {
                  0%   { background-position: 0%   50%; }
                  100% { background-position: 280% 50%; }
                }
                @keyframes heroAura {
                  0%, 100% { opacity: 0.85; transform: scale(1); }
                  50%      { opacity: 1;    transform: scale(1.06); }
                }
                @keyframes portraitRingRotate {
                  from { transform: rotate(0deg); }
                  to   { transform: rotate(360deg); }
                }
              `}</style>
            </h1>
          </div>

          {/* ── RIGHT: Full-height cinematic portrait ── */}
          <div
            ref={profileRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-[55%] lg:w-[45%] h-[80vh] md:h-[110vh] overflow-visible group pointer-events-none z-0"
            style={{
              transform: `perspective(2000px) rotateX(${mousePos.y * -0.15}deg) rotateY(${mousePos.x * -0.15}deg)`,
              transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            {/* Hover aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0" />

            {/* Spinning gradient ring overlay on image (centered, big) */}
            <div
              className="absolute inset-0 pointer-events-none hidden dark:block z-10"
              style={{
                background: 'conic-gradient(from 0deg, rgba(59,130,246,0.18), rgba(139,92,246,0.14), rgba(236,72,153,0.12), rgba(251,146,60,0.10), rgba(59,130,246,0.18))',
                animation: 'portraitRingRotate 12s linear infinite',
                mixBlendMode: 'screen',
                opacity: 0.6,
              }}
            />

            <div className="relative w-full h-full">
              <img
                src={siteConfig.profileImage}
                alt={siteConfig.name}
                className="w-full h-full object-cover object-center will-change-transform drop-shadow-2xl"
                style={{
                  filter: 'brightness(0.9) contrast(1.12) saturate(0.88)',
                  transform: isMounted
                    ? `scale(1) translate3d(${mousePos.x * -0.8}px, ${imageTranslateY * -0.8 + mousePos.y * -0.8}px, 0)`
                    : 'scale(1.08) translateY(40px)',
                  transition: 'transform 1s cubic-bezier(0.16,1,0.3,1)',
                  maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
                }}
              />
            </div>

            {/* Cinematic wipe reveal — sweeps up and disappears */}
            <div
              className="absolute inset-0 z-20 origin-top"
              style={{
                background: 'linear-gradient(to bottom, #07080d 0%, #07080d 60%, transparent 100%)',
                transform: isMounted ? 'scaleY(0)' : 'scaleY(1)',
                transition: 'transform 2.2s cubic-bezier(0.85,0,0.15,1)',
                transitionDelay: '0.15s',
              }}
            />
          </div>

        </div>

        {/* ── TAGLINE CARD ── */}
        <div className="mt-24 md:mt-40 max-w-2xl overflow-hidden relative z-20">
          <div
            className="p-8 md:p-12 border border-black/10 dark:border-white/[0.07] bg-black/[0.02] dark:bg-white/[0.025] backdrop-blur-xl rounded-2xl relative overflow-hidden group"
            style={{
              boxShadow: '0 0 0 0.5px rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.12)',
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 1.1s cubic-bezier(0.16,1,0.3,1)',
              transitionDelay: '0.55s',
            }}
          >
            {/* Top-edge gradient line on the card */}
            <div
              className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5) 30%, rgba(168,85,247,0.6) 60%, transparent)',
              }}
            />

            {/* Hover inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl" />

            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-black/40 dark:text-white/35 mb-6 block">
              The Architecture Directive
            </p>
            <p className="text-black/80 dark:text-white/75 text-xl md:text-[1.65rem] font-light leading-snug tracking-tight">
              I architect intelligent systems that think, automate, and scale.{' '}
              <span className="dark:text-white/45 text-black/40 italic">
                This is where ideas become infrastructure.
              </span>
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-[1px]" style={{ background: 'linear-gradient(90deg, rgba(99,102,241,0.6), rgba(168,85,247,0.4))' }} />
              <span
                className="font-medium text-sm tracking-widest uppercase text-black dark:text-white/80"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {siteConfig.name}
              </span>
              {/* Availability badge */}
              <div className="ml-auto flex items-center gap-1.5 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-green-400/70">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
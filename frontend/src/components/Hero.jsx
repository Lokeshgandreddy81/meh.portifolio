import React, { useEffect, useRef, useState } from 'react';
import siteConfig from '../config/siteConfig';

/* ─── tiny sparkle positions — generated once, never re-render stress ── */
const SPARKS = [
  { top: '18%', left: '8%', size: 3, delay: '0s', dur: '3.2s' },
  { top: '35%', left: '3%', size: 2, delay: '1.1s', dur: '2.8s' },
  { top: '55%', left: '12%', size: 4, delay: '0.4s', dur: '4s' },
  { top: '72%', left: '6%', size: 2, delay: '2s', dur: '3.5s' },
  { top: '22%', left: '32%', size: 3, delay: '0.8s', dur: '2.5s' },
  { top: '48%', left: '28%', size: 2, delay: '1.6s', dur: '3.8s' },
  { top: '14%', left: '55%', size: 3, delay: '0.2s', dur: '3s' },
  { top: '62%', left: '48%', size: 2, delay: '1.4s', dur: '2.6s' },
];

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const profileRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 80);

    const handleScroll = () => setScrollY(window.scrollY);

    const handleMouseMove = (e) => {
      if (profileRef.current) {
        const rect = profileRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left - rect.width / 2) * 0.07,
          y: (e.clientY - rect.top - rect.height / 2) * 0.07,
        });
      }
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

  const textTranslateY = scrollY * 0.38;
  const imageTranslateY = scrollY * 0.14;
  const opacityFade = Math.max(0, 1 - scrollY / (window.innerHeight * 0.8));

  return (
    <section
      id="home"
      className="min-h-[120vh] w-full relative z-50 dark:bg-[#07080d] bg-[#f4f5f7] flex flex-col justify-center overflow-hidden"
    >

      {/* ══════════════════════════════════════════════════════════════
          ATMOSPHERE — dark mode only
      ══════════════════════════════════════════════════════════════ */}

      {/* Rotating aurora conic — the slow cosmic engine */}
      <div
        className="absolute pointer-events-none hidden dark:block"
        style={{
          top: '50%', left: '50%',
          width: '220vw', height: '220vw',
          animation: 'heroAuroraRotate 38s linear infinite',
          background: [
            'conic-gradient(from 0deg at 50% 50%,',
            '#050813 0deg,',
            '#0c1a38 45deg,',
            '#110435 95deg,',
            '#04060f 140deg,',
            '#0b1630 190deg,',
            '#0d0328 240deg,',
            '#050813 290deg,',
            '#080f26 340deg,',
            '#050813 360deg)',
          ].join(' '),
          opacity: 0.9,
          zIndex: 0,
        }}
      />

      {/* Blue — top right, mouse-reactive */}
      <div className="absolute pointer-events-none mix-blend-screen hidden dark:block rounded-full" style={{
        width: '75vw', height: '75vw', top: '-20%', right: '-18%',
        background: 'radial-gradient(circle, rgba(29,78,216,0.40) 0%, rgba(67,56,202,0.20) 40%, transparent 70%)',
        filter: 'blur(100px)',
        transform: `translate(${(mouse.x - 0.5) * -55}px, ${(mouse.y - 0.5) * -55 + scrollY * 0.14}px)`,
        transition: 'transform 3.2s cubic-bezier(0.16,1,0.3,1)',
        zIndex: 1,
      }} />

      {/* Violet — bottom left, mouse-reactive */}
      <div className="absolute pointer-events-none mix-blend-screen hidden dark:block rounded-full" style={{
        width: '62vw', height: '62vw', bottom: '-14%', left: '-12%',
        background: 'radial-gradient(circle, rgba(91,33,182,0.35) 0%, rgba(109,40,217,0.18) 45%, transparent 70%)',
        filter: 'blur(90px)',
        transform: `translate(${(mouse.x - 0.5) * 45}px, ${(mouse.y - 0.5) * 45 + scrollY * -0.08}px)`,
        transition: 'transform 2.6s cubic-bezier(0.16,1,0.3,1)',
        zIndex: 1,
      }} />

      {/* Amber accent — bottom right near portrait foot */}
      <div className="absolute pointer-events-none mix-blend-screen hidden dark:block rounded-full" style={{
        width: '28vw', height: '28vw', bottom: '0%', right: '15%',
        background: 'radial-gradient(circle, rgba(251,146,60,0.12) 0%, transparent 70%)',
        filter: 'blur(60px)', zIndex: 1,
      }} />

      {/* Noise grain */}
      <div className="absolute inset-0 pointer-events-none hidden dark:block" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        opacity: 0.04, mixBlendMode: 'overlay', zIndex: 2,
      }} />

      {/* Blueprint grid */}
      <div className="absolute inset-0 pointer-events-none hidden dark:block" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '85px 85px', zIndex: 2,
      }} />

      {/* Sparkle particles — float across the dark scene */}
      <div className="absolute inset-0 pointer-events-none hidden dark:block" style={{ zIndex: 3 }}>
        {SPARKS.map((s, i) => (
          <div key={i} className="absolute rounded-full" style={{
            top: s.top, left: s.left,
            width: s.size, height: s.size,
            background: i % 3 === 0 ? '#818cf8' : i % 3 === 1 ? '#f472b6' : '#fb923c',
            boxShadow: `0 0 ${s.size * 3}px ${s.size}px ${i % 3 === 0 ? 'rgba(129,140,248,0.7)' : i % 3 === 1 ? 'rgba(244,114,182,0.7)' : 'rgba(251,146,60,0.7)'}`,
            animation: `sparkFloat ${s.dur} ${s.delay} ease-in-out infinite`,
          }} />
        ))}
      </div>

      {/* ── Light mode soft aura ── */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply block dark:hidden" style={{
        background: 'radial-gradient(circle at 70% 30%, rgba(0,0,0,0.05) 0%, transparent 55%)',
        transform: `translateY(${scrollY * 0.2}px)`,
      }} />

      {/* ══════════════════════════════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════════════════════════════ */}
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

          {/* ── LEFT: Typography ── */}
          <div className="flex flex-col relative z-20 pointer-events-auto">

            {/* Status row — replaces plain "Portfolio // Year" */}
            <div
              className="flex items-center gap-4 mb-10 overflow-hidden"
              style={{
                opacity: isMounted ? 1 : 0,
                transform: isMounted ? 'translateY(0)' : 'translateY(-12px)',
                transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
                transitionDelay: '0.0s',
              }}
            >
              {/* Live badge */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/25 bg-green-500/8 backdrop-blur-sm">
                <div className="relative w-1.5 h-1.5">
                  <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ boxShadow: '0 0 5px rgba(74,222,128,0.9)' }} />
                </div>
                <span className="font-mono text-[8.5px] uppercase tracking-[0.35em] text-green-400/80">Available for work</span>
              </div>
              <div className="w-px h-3 bg-black/15 dark:bg-white/15" />
              <span className="font-mono text-[8.5px] uppercase tracking-[0.35em] text-black/35 dark:text-white/30">
                Portfolio // {new Date().getFullYear()}
              </span>
            </div>

            <h1 className="flex flex-col leading-[0.85] tracking-tighter relative group cursor-default">

              {/* Ambient indigo halo behind text — breathes */}
              <div className="absolute -inset-8 z-0 pointer-events-none" style={{
                background: 'radial-gradient(ellipse 90% 70% at 38% 50%, rgba(99,102,241,0.16) 0%, rgba(168,85,247,0.09) 55%, transparent 80%)',
                animation: 'heroAura 7s ease-in-out infinite',
              }} />

              {/* Hover: spinning bloom erupts */}
              <div className="absolute inset-[-25%] z-0 rounded-full blur-3xl opacity-0 group-hover:opacity-45 pointer-events-none" style={{
                background: 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 120deg, #e92a67 240deg, #2a8af6 360deg)',
                animation: 'heroSpin 12s linear infinite',
                transition: 'opacity 2.5s ease',
              }} />

              {/* ─────────────────────────────────────────
                  LINE 1: IDEAS BECOME
                  font-black, chromatic gradient, big
              ───────────────────────────────────────── */}
              <span className="overflow-hidden py-2 inline-block -ml-1 relative z-10">
                <span
                  style={{
                    display: 'inline-block',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(52px, 10.5vw, 152px)',
                    fontWeight: 900,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    textTransform: 'uppercase',
                    background: 'linear-gradient(105deg, #c7d2fe 0%, #818cf8 14%, #a78bfa 28%, #e879f9 44%, #f472b6 58%, #fb923c 74%, #fbbf24 86%, #c7d2fe 100%)',
                    backgroundSize: '280% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'heroGradientFlow 7s linear infinite',
                    filter: 'drop-shadow(0 0 55px rgba(139,92,246,0.45))',
                    transform: isMounted ? 'translateY(0)' : 'translateY(115%)',
                    transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1)',
                    transitionDelay: '0.15s',
                  }}
                >
                  Ideas Become
                </span>
              </span>

              {/* ─────────────────────────────────────────
                  LINE 2: INFRASTRUCTURE
                  serif italic, counter-flow, LARGER,
                  offset right for drama
              ───────────────────────────────────────── */}
              <span
                className="overflow-hidden py-2 inline-block relative z-10"
                style={{ marginLeft: 'clamp(16px, 3.5vw, 80px)' }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(62px, 13vw, 192px)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    letterSpacing: '-0.04em',
                    lineHeight: 0.92,
                    textTransform: 'uppercase',
                    background: 'linear-gradient(105deg, #fbbf24 0%, #fb923c 16%, #f472b6 34%, #e879f9 50%, #a78bfa 66%, #818cf8 82%, #fbbf24 100%)',
                    backgroundSize: '280% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'heroGradientFlow 7s linear infinite reverse',
                    animationDelay: '-3.5s',
                    filter: 'drop-shadow(0 0 70px rgba(251,146,60,0.35))',
                    transform: isMounted ? 'translateY(0)' : 'translateY(115%)',
                    transition: 'transform 1.4s cubic-bezier(0.16,1,0.3,1)',
                    transitionDelay: '0.28s',
                  }}
                >
                  Infrastructure
                </span>
              </span>

            </h1>

            {/* ── Floating annotation tags — editorial detail ── */}
            <div
              className="flex items-center gap-3 mt-8 flex-wrap"
              style={{
                opacity: isMounted ? 1 : 0,
                transform: isMounted ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 1s cubic-bezier(0.16,1,0.3,1)',
                transitionDelay: '0.6s',
              }}
            >
              {['System Architect', 'Full-Stack', 'AI / ML', 'Production-Grade'].map((tag, i) => (
                <span
                  key={tag}
                  className="font-mono text-[8px] uppercase tracking-[0.28em] px-3 py-1.5 rounded-full backdrop-blur-sm"
                  style={{
                    border: '1px solid rgba(99,102,241,0.2)',
                    background: 'rgba(99,102,241,0.06)',
                    color: 'rgba(165,180,252,0.75)',
                    animationDelay: `${i * 0.2}s`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>

          {/* ── RIGHT: Full-height cinematic portrait ── */}
          <div
            ref={profileRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-[55%] lg:w-[46%] h-[80vh] md:h-[112vh] overflow-visible group pointer-events-none z-0"
            style={{
              transform: `perspective(2200px) rotateX(${mousePos.y * -0.12}deg) rotateY(${mousePos.x * -0.12}deg)`,
              transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            {/* Ambient hover aura */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0 pointer-events-none"
              style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(59,130,246,0.18) 0%, rgba(139,92,246,0.10) 50%, transparent 80%)', filter: 'blur(20px)' }} />

            {/* Slow-spinning chromatic overlay on portrait — dark only */}
            <div className="absolute inset-0 pointer-events-none hidden dark:block z-5" style={{
              background: 'conic-gradient(from 0deg, rgba(59,130,246,0.15), rgba(139,92,246,0.12), rgba(244,114,182,0.10), rgba(251,146,60,0.08), rgba(59,130,246,0.15))',
              animation: 'heroSpin 14s linear infinite',
              mixBlendMode: 'screen',
              opacity: 0.5,
            }} />

            {/* Left-edge gradient vignette */}
            <div className="absolute inset-y-0 left-0 w-[35%] pointer-events-none z-10" style={{
              background: 'linear-gradient(to right, #07080d, transparent)',
            }} />
            {/* Light mode left vignette */}
            <div className="absolute inset-y-0 left-0 w-[35%] pointer-events-none z-10 block dark:hidden" style={{
              background: 'linear-gradient(to right, #f4f5f7, transparent)',
            }} />

            <div className="relative w-full h-full">
              <img
                src={siteConfig.profileImage}
                alt={siteConfig.name}
                className="w-full h-full object-cover object-center will-change-transform"
                style={{
                  filter: 'brightness(0.88) contrast(1.14) saturate(0.82)',
                  transform: isMounted
                    ? `scale(1) translate3d(${mousePos.x * -0.8}px, ${imageTranslateY * -0.8 + mousePos.y * -0.8}px, 0)`
                    : 'scale(1.08) translateY(40px)',
                  transition: 'transform 1s cubic-bezier(0.16,1,0.3,1)',
                  maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                }}
              />
            </div>

            {/* Cinematic wipe reveal */}
            <div className="absolute inset-0 z-20 origin-top" style={{
              background: '#07080d',
              transform: isMounted ? 'scaleY(0)' : 'scaleY(1)',
              transition: 'transform 2.2s cubic-bezier(0.85,0,0.15,1)',
              transitionDelay: '0.12s',
            }} />
            <div className="block dark:hidden absolute inset-0 z-20 origin-top" style={{
              background: '#f4f5f7',
              transform: isMounted ? 'scaleY(0)' : 'scaleY(1)',
              transition: 'transform 2.2s cubic-bezier(0.85,0,0.15,1)',
              transitionDelay: '0.12s',
            }} />
          </div>

        </div>

        {/* ══ TAGLINE CARD ══════════════════════════════════════════════ */}
        <div className="mt-20 md:mt-36 max-w-2xl overflow-hidden relative z-20">
          <div
            className="relative overflow-hidden group rounded-2xl"
            style={{
              padding: '36px 44px',
              border: '1px solid rgba(99,102,241,0.12)',
              background: 'rgba(255,255,255,0.025)',
              backdropFilter: 'blur(28px)',
              boxShadow: '0 0 0 0.5px rgba(139,92,246,0.06), 0 12px 40px rgba(0,0,0,0.15)',
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 1.1s cubic-bezier(0.16,1,0.3,1)',
              transitionDelay: '0.55s',
            }}
          >
            {/* Top-edge chromatic line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none" style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.6) 25%, rgba(168,85,247,0.7) 55%, rgba(244,114,182,0.5) 80%, transparent 100%)',
            }} />

            {/* Hover inner bloom */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl" style={{
              background: 'radial-gradient(60% 80% at 20% 50%, rgba(99,102,241,0.06) 0%, transparent 70%)',
            }} />

            {/* Label */}
            <p className="font-mono text-[9px] uppercase tracking-[0.38em] text-black/35 dark:text-white/30 mb-5">
              The Architecture Directive
            </p>

            {/* Body */}
            <p className="text-black/82 dark:text-white/78 text-xl md:text-[1.7rem] font-light leading-snug tracking-tight">
              I architect intelligent systems that think, automate, and scale.{' '}
              <em className="not-italic dark:text-white/40 text-black/38">
                This is where ideas become infrastructure.
              </em>
            </p>

            {/* Footer */}
            <div className="mt-10 flex items-center gap-4 flex-wrap">
              <div className="h-[1px] w-12" style={{
                background: 'linear-gradient(90deg, rgba(99,102,241,0.7), rgba(168,85,247,0.4))',
              }} />
              <span className="font-semibold text-sm tracking-widest uppercase text-black dark:text-white/85"
                style={{ fontFamily: 'Inter, sans-serif' }}>
                {siteConfig.name}
              </span>
              <div className="ml-auto flex items-center gap-2.5">
                <a
                  href={siteConfig.linkedIn}
                  target="_blank" rel="noopener noreferrer"
                  className="pointer-events-auto group/cta flex items-center gap-2 px-4 py-2 rounded-full font-mono text-[9px] uppercase tracking-[0.2em] transition-all duration-400 hover:-translate-y-px"
                  style={{
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.15))',
                    border: '1px solid rgba(99,102,241,0.3)',
                    color: 'rgba(165,180,252,0.85)',
                  }}
                >
                  Connect
                  <svg className="group-hover/cta:translate-x-0.5 transition-transform duration-300" width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ══ CSS KEYFRAMES ════════════════════════════════════════════ */}
      <style>{`
        @keyframes heroAuroraRotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes heroSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes heroGradientFlow {
          0%   { background-position: 0%   50%; }
          100% { background-position: 280% 50%; }
        }
        @keyframes heroAura {
          0%, 100% { opacity: 0.9; transform: scale(1); }
          50%      { opacity: 1;   transform: scale(1.07); }
        }
        @keyframes sparkFloat {
          0%, 100% { opacity: 0.2; transform: translateY(0px) scale(1); }
          50%      { opacity: 1;   transform: translateY(-12px) scale(1.3); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
import React, { useEffect, useRef, useState } from 'react';
import siteConfig from '../config/siteConfig';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [scanDone, setScanDone] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const profileRef = useRef(null);

  useEffect(() => {
    // Staggered: mount → scan completes → elements settle
    const t1 = setTimeout(() => setIsMounted(true), 80);
    const t2 = setTimeout(() => setScanDone(true), 1400);

    const onScroll = () => setScrollY(window.scrollY);
    const onMouse = (e) => {
      if (profileRef.current) {
        const r = profileRef.current.getBoundingClientRect();
        setMousePos({ x: (e.clientX - r.left - r.width / 2) * 0.06, y: (e.clientY - r.top - r.height / 2) * 0.06 });
      }
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouse);
    return () => {
      clearTimeout(t1); clearTimeout(t2);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  const vh = typeof window !== 'undefined' ? window.innerHeight : 900;
  const opacityFade = Math.max(0, 1 - scrollY / (vh * 0.8));
  const textParallax = scrollY * 0.35;
  const imgParallax = scrollY * 0.13;

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden flex flex-col justify-center"
      style={{ minHeight: '100vh', background: '#06060a' }}
    >

      {/* ════════════════════════════════════════════
          LAYER 0 — Aurora engine (always-on slow rotate)
      ════════════════════════════════════════════ */}
      <div className="absolute pointer-events-none" style={{
        top: '50%', left: '50%',
        width: '200vw', height: '200vw',
        animation: 'heroAuroraRotate 42s linear infinite',
        background: [
          'conic-gradient(from 0deg at 50% 50%,',
          '#04040c 0deg,',
          '#08122e 50deg,',
          '#0f0430 100deg,',
          '#04040c 150deg,',
          '#090f28 200deg,',
          '#0b0325 255deg,',
          '#04040c 305deg,',
          '#070c22 355deg,',
          '#04040c 360deg)',
        ].join(' '),
        opacity: 0.9, zIndex: 0,
      }} />

      {/* ════════════════════════════════════════════
          LAYER 1 — 3 mouse-reactive orbs
      ════════════════════════════════════════════ */}

      {/* Deep blue — top right */}
      <div className="absolute pointer-events-none rounded-full" style={{
        width: '70vw', height: '70vw', top: '-18%', right: '-16%',
        background: 'radial-gradient(circle, rgba(29,78,216,0.38) 0%, rgba(55,48,163,0.20) 45%, transparent 70%)',
        filter: 'blur(105px)',
        transform: `translate(${(mouse.x - 0.5) * -55}px, ${(mouse.y - 0.5) * -55}px)`,
        transition: 'transform 3.5s cubic-bezier(0.16,1,0.3,1)',
        zIndex: 1, mixBlendMode: 'screen',
      }} />

      {/* Violet — bottom left */}
      <div className="absolute pointer-events-none rounded-full" style={{
        width: '58vw', height: '58vw', bottom: '-16%', left: '-10%',
        background: 'radial-gradient(circle, rgba(91,33,182,0.33) 0%, rgba(109,40,217,0.15) 48%, transparent 70%)',
        filter: 'blur(90px)',
        transform: `translate(${(mouse.x - 0.5) * 48}px, ${(mouse.y - 0.5) * 48}px)`,
        transition: 'transform 2.8s cubic-bezier(0.16,1,0.3,1)',
        zIndex: 1, mixBlendMode: 'screen',
      }} />

      {/* Amber — lower right (warms the portrait side) */}
      <div className="absolute pointer-events-none rounded-full" style={{
        width: '38vw', height: '38vw', bottom: '5%', right: '8%',
        background: 'radial-gradient(circle, rgba(180,83,9,0.22) 0%, rgba(245,158,11,0.10) 50%, transparent 72%)',
        filter: 'blur(80px)',
        transform: `translate(${(mouse.x - 0.5) * -30}px, ${(mouse.y - 0.5) * -30}px)`,
        transition: 'transform 2.2s cubic-bezier(0.16,1,0.3,1)',
        zIndex: 1, mixBlendMode: 'screen',
      }} />

      {/* ════════════════════════════════════════════
          LAYER 2 — Noise + grid overlays
      ════════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        opacity: 0.04, mixBlendMode: 'overlay', zIndex: 2,
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
        backgroundSize: '88px 88px', zIndex: 2,
      }} />

      {/* ════════════════════════════════════════════
          LAYER 3 — Cinematic scan line (one-shot on load)
      ════════════════════════════════════════════ */}
      {!scanDone && (
        <div className="absolute inset-x-0 pointer-events-none" style={{
          top: 0, height: '2px', zIndex: 30,
          background: 'linear-gradient(90deg, transparent 0%, rgba(129,140,248,0.7) 20%, rgba(255,255,255,0.9) 50%, rgba(251,146,60,0.7) 80%, transparent 100%)',
          boxShadow: '0 0 20px 6px rgba(129,140,248,0.4)',
          animation: 'scanLine 1.2s cubic-bezier(0.4,0,0.2,1) forwards',
        }} />
      )}

      {/* ════════════════════════════════════════════
          MAIN CONTENT — parallax + fade on scroll
      ════════════════════════════════════════════ */}
      <div
        className="relative container mx-auto px-6 md:px-14 w-full"
        style={{
          zIndex: 10,
          opacity: opacityFade,
          transform: `translateY(${textParallax}px)`,
          willChange: 'transform, opacity',
        }}
      >
        <div className="flex flex-col md:flex-row justify-between items-end w-full gap-10 md:gap-0">

          {/* ── LEFT: Typography column ─────────────────── */}
          <div className="flex flex-col relative z-20">

            {/* ──────────────────────────────────────────
                Editorial name bar — name + extending rule
             ────────────────────────────────────────── */}
            <div
              className="flex items-center gap-4 mb-10"
              style={{
                opacity: isMounted ? 1 : 0,
                transform: isMounted ? 'translateY(0)' : 'translateY(-14px)',
                transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
                transitionDelay: '0.0s',
              }}
            >
              <div className="flex items-center gap-3">
                <div className="relative w-1.5 h-1.5 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-indigo-400 animate-ping opacity-60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.45em] text-white/35 whitespace-nowrap">
                  Gandreddy Lokesh
                </span>
              </div>
              {/* Extending horizontal rule */}
              <div
                className="h-px flex-1 max-w-[180px]"
                style={{
                  background: 'linear-gradient(90deg, rgba(99,102,241,0.6), rgba(255,255,255,0.04))',
                  width: isMounted ? '180px' : '0px',
                  transition: 'width 1.4s cubic-bezier(0.16,1,0.3,1)',
                  transitionDelay: '0.3s',
                }}
              />
              <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/18">
                System Architect
              </span>
            </div>

            {/* ══ THE HEADLINE ══════════════════════════ */}
            <h1
              className="flex flex-col relative group cursor-default"
              style={{ lineHeight: 0.88, letterSpacing: '-0.03em' }}
            >
              {/* Hover bloom */}
              <div
                className="absolute inset-[-20%] z-0 rounded-full blur-3xl opacity-0 group-hover:opacity-35 pointer-events-none"
                style={{
                  background: 'conic-gradient(from 180deg at 50% 50%, #4f46e5 0deg, #7c3aed 120deg, #c026d3 240deg, #4f46e5 360deg)',
                  animation: 'heroSpin 14s linear infinite',
                  transition: 'opacity 2s ease',
                }}
              />

              {/* LINE 1: IDEAS BECOME — cool indigo/violet, white-leaning */}
              <span className="overflow-hidden pb-1 inline-block relative z-10">
                <span
                  style={{
                    display: 'inline-block',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(54px, 11vw, 162px)',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    // Cool palette: white → indigo → violet
                    background: 'linear-gradient(108deg, #ffffff 0%, #e0e7ff 22%, #a5b4fc 44%, #818cf8 62%, #c4b5fd 80%, #ffffff 100%)',
                    backgroundSize: '240% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'heroGradFlowCool 9s linear infinite',
                    filter: 'drop-shadow(0 0 40px rgba(99,102,241,0.5))',
                    transform: isMounted ? 'translateY(0)' : 'translateY(110%)',
                    transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1)',
                    transitionDelay: '0.18s',
                  }}
                >
                  Ideas Become
                </span>
              </span>

              {/* LINE 2: INFRASTRUCTURE — warm amber/gold, serif italic, BIGGER */}
              <span
                className="overflow-hidden pt-1 inline-block relative z-10"
                style={{ marginLeft: 'clamp(18px, 3.5vw, 72px)' }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(64px, 13.5vw, 198px)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    letterSpacing: '-0.045em',
                    lineHeight: 0.9,
                    textTransform: 'uppercase',
                    // Warm palette: gold → amber → deep orange → gold
                    background: 'linear-gradient(108deg, #fef3c7 0%, #fde68a 20%, #fbbf24 40%, #f59e0b 58%, #fb923c 76%, #fbbf24 90%, #fef3c7 100%)',
                    backgroundSize: '240% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'heroGradFlowWarm 9s linear infinite reverse',
                    animationDelay: '-4.5s',
                    filter: 'drop-shadow(0 0 55px rgba(245,158,11,0.45))',
                    transform: isMounted ? 'translateY(0)' : 'translateY(110%)',
                    transition: 'transform 1.4s cubic-bezier(0.16,1,0.3,1)',
                    transitionDelay: '0.32s',
                  }}
                >
                  Infrastructure
                </span>
              </span>
            </h1>

            {/* ── Sub-line — Role tags + CTA ─────────── */}
            <div
              className="mt-10 flex items-center gap-4 flex-wrap"
              style={{
                opacity: isMounted ? 1 : 0,
                transform: isMounted ? 'translateY(0)' : 'translateY(12px)',
                transition: 'all 1s cubic-bezier(0.16,1,0.3,1)',
                transitionDelay: '0.6s',
              }}
            >
              {['Full-Stack', 'AI Systems', 'Production-Scale'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[8px] uppercase tracking-[0.3em] px-3 py-1.5 rounded-full"
                  style={{
                    border: '1px solid rgba(165,180,252,0.18)',
                    background: 'rgba(99,102,241,0.07)',
                    color: 'rgba(199,210,254,0.65)',
                  }}
                >
                  {tag}
                </span>
              ))}
              <div className="w-px h-4 bg-white/10 mx-1" />
              <a
                href={siteConfig.linkedIn}
                target="_blank" rel="noopener noreferrer"
                className="group/cta flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.3em] text-amber-300/60 hover:text-amber-200/90 transition-colors duration-400"
              >
                Open to work
                <svg className="group-hover/cta:translate-x-1 transition-transform duration-300" width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── RIGHT: Cinematic portrait ─────────────────────────── */}
          <div
            ref={profileRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-[52%] lg:w-[44%] h-[85vh] md:h-[108vh] overflow-visible pointer-events-none z-0"
            style={{
              transform: `perspective(2200px) rotateX(${mousePos.y * -0.1}deg) rotateY(${mousePos.x * -0.1}deg)`,
              transition: 'transform 0.9s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            {/* Amber bloom behind portrait */}
            <div className="absolute pointer-events-none" style={{
              bottom: '-8%', left: '10%', right: '5%', height: '45%',
              background: 'radial-gradient(ellipse at 50% 100%, rgba(245,158,11,0.18) 0%, rgba(180,83,9,0.10) 45%, transparent 70%)',
              filter: 'blur(40px)', zIndex: 0,
            }} />

            {/* Left vignette — portrait bleeds into dark bg seamlessly */}
            <div className="absolute inset-y-0 left-0 w-[40%] pointer-events-none z-10" style={{
              background: 'linear-gradient(to right, #06060a, rgba(6,6,10,0.5) 60%, transparent)',
            }} />

            {/* Rotating color wash on portrait */}
            <div className="absolute inset-0 pointer-events-none z-5" style={{
              background: 'conic-gradient(from 0deg, rgba(55,48,163,0.12), rgba(109,40,217,0.10), rgba(180,83,9,0.08), rgba(55,48,163,0.12))',
              animation: 'heroSpin 16s linear infinite',
              mixBlendMode: 'screen',
            }} />

            {/* The portrait */}
            <img
              src={siteConfig.profileImage}
              alt={siteConfig.name}
              className="relative z-1 w-full h-full object-cover object-top"
              style={{
                filter: 'brightness(0.85) contrast(1.15) saturate(0.75)',
                transform: isMounted
                  ? `scale(1) translate3d(${mousePos.x * -0.7}px, ${imgParallax * -0.7 + mousePos.y * -0.7}px, 0)`
                  : 'scale(1.06) translateY(48px)',
                transition: 'transform 1s cubic-bezier(0.16,1,0.3,1)',
                maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
              }}
            />

            {/* Cinematic page-colour wipe on mount */}
            <div className="absolute inset-0 z-20 origin-top" style={{
              background: '#06060a',
              transform: isMounted ? 'scaleY(0)' : 'scaleY(1)',
              transition: 'transform 2.3s cubic-bezier(0.85,0,0.15,1)',
              transitionDelay: '0.1s',
            }} />
          </div>

        </div>

        {/* ══ MANIFESTO CARD ═══════════════════════════════════════════ */}
        <div className="mt-20 md:mt-36 max-w-xl relative z-20">
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              padding: '32px 40px',
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(165,180,252,0.10)',
              backdropFilter: 'blur(32px)',
              boxShadow: '0 0 0 0.5px rgba(99,102,241,0.06), 0 16px 48px rgba(0,0,0,0.2)',
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? 'translateY(0)' : 'translateY(36px)',
              transition: 'all 1.1s cubic-bezier(0.16,1,0.3,1)',
              transitionDelay: '0.62s',
            }}
          >
            {/* Indigo top bar */}
            <div className="absolute top-0 left-0 right-0 h-[1px]" style={{
              background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.65) 30%, rgba(245,158,11,0.55) 70%, transparent)',
            }} />

            <p className="font-mono text-[8.5px] uppercase tracking-[0.38em] text-white/28 mb-5">
              Architecture Directive
            </p>

            <p className="text-white/72 font-light leading-relaxed" style={{ fontSize: 'clamp(15px,1.3vw,20px)' }}>
              I build intelligent systems that <span className="text-indigo-300/80">think</span>,{' '}
              <span className="text-violet-300/80">automate</span>, and{' '}
              <span className="text-amber-300/80">scale</span>.{' '}
              <span className="text-white/35 italic">This is where ideas become infrastructure.</span>
            </p>

            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-10" style={{ background: 'linear-gradient(90deg, rgba(99,102,241,0.7), rgba(245,158,11,0.4))' }} />
                <span className="font-medium text-[11px] uppercase tracking-[0.3em] text-white/60" style={{ fontFamily: 'Inter' }}>
                  {siteConfig.name}
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full" style={{
                border: '1px solid rgba(74,222,128,0.2)',
                background: 'rgba(74,222,128,0.05)',
              }}>
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-[7.5px] uppercase tracking-[0.35em] text-green-400/70">Available</span>
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
        @keyframes heroGradFlowCool {
          0%   { background-position: 0%   50%; }
          100% { background-position: 240% 50%; }
        }
        @keyframes heroGradFlowWarm {
          0%   { background-position: 0%   50%; }
          100% { background-position: 240% 50%; }
        }
        @keyframes scanLine {
          0%   { top: 0;    opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
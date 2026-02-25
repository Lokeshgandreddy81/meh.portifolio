import React, { useEffect, useRef, useState } from 'react';
import siteConfig from '../config/siteConfig';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const profileRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rawBodyScroll = getComputedStyle(document.body).getPropertyValue('--scroll-y');
            const sy = rawBodyScroll ? parseFloat(rawBodyScroll) : window.scrollY;
            sectionRef.current.style.setProperty('--sy', sy);
            const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
            const fade = Math.max(0, 1 - (sy / (vh * 0.8)));
            sectionRef.current.style.setProperty('--fade', fade);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseMove = (e) => {
      if (!profileRef.current) return;
      const rect = profileRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      profileRef.current.style.setProperty('--mx', x * 0.1);
      profileRef.current.style.setProperty('--my', y * 0.1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-[120dvh] w-full relative z-50 bg-[#f8f9fa] dark:bg-[#080808] transition-colors duration-500 ease-out flex flex-col justify-center overflow-hidden"
    >
      {/* ── 1. ENGINEERING GRID OVERLAY ────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.04] dark:opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none z-0 hidden dark:block opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      {/* ── 2. AMBIENT ORBS (Dark Mode) ─────────────────────── */}
      <div className="absolute pointer-events-none mix-blend-screen hidden dark:block will-change-transform rounded-full"
        style={{
          width: '70vw', height: '70vw', top: '-20%', right: '-15%',
          background: 'radial-gradient(circle, #1e40af 0%, #1d4ed8 30%, #312e81 60%, transparent 80%)',
          filter: 'blur(90px)', opacity: 0.35,
          transform: 'translate3d(0, calc(var(--sy, 0) * 0.15px), 0)'
        }}
      />
      <div className="absolute pointer-events-none mix-blend-screen hidden dark:block will-change-transform rounded-full"
        style={{
          width: '55vw', height: '55vw', bottom: '-10%', left: '-10%',
          background: 'radial-gradient(circle, #5b21b6 0%, #6d28d9 40%, #4c1d95 65%, transparent 82%)',
          filter: 'blur(80px)', opacity: 0.25,
          transform: 'translate3d(0, calc(var(--sy, 0) * -0.08px), 0)'
        }}
      />
      <div className="absolute pointer-events-none mix-blend-screen hidden dark:block rounded-full"
        style={{
          width: '30vw', height: '30vw', top: '55%', left: '45%',
          background: 'radial-gradient(circle, #831843 0%, #9d174d 50%, transparent 75%)',
          filter: 'blur(60px)', opacity: 0.18
        }}
      />

      {/* ── 3. VERTICAL SIDE RAIL (right edge) ─────────────── */}
      <div
        className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-3 z-30 pointer-events-none"
        style={{
          opacity: isMounted ? 1 : 0,
          transition: 'opacity 1s ease',
          transitionDelay: '1.2s'
        }}
      >
        <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-black/20 dark:via-white/20 to-transparent" />
        <span
          className="font-mono text-[8px] uppercase tracking-[0.4em] text-black/30 dark:text-white/30"
          style={{ writingMode: 'vertical-lr', letterSpacing: '0.4em' }}
        >
          System Design
        </span>
        <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-black/20 dark:via-white/20 to-transparent" />
      </div>

      {/* ── 4. COUNTER STATS (Left Margin) ──────────────────── */}
      <div
        className="absolute left-4 md:left-8 bottom-16 hidden md:flex flex-col gap-8 z-30 pointer-events-none"
        style={{ opacity: isMounted ? 1 : 0, transition: 'opacity 1s ease', transitionDelay: '1.4s' }}
      >
        {[
          { num: '3+', label: 'Years' },
          { num: '12+', label: 'Systems Built' },
        ].map(({ num, label }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <span className="font-mono text-lg font-bold text-black dark:text-white leading-none">{num}</span>
            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-black/40 dark:text-white/40">{label}</span>
          </div>
        ))}
        <div className="w-[1px] h-10 bg-gradient-to-b from-black/20 dark:from-white/20 to-transparent mx-auto" />
      </div>

      {/* ── MAIN CONTENT ─────────────────────────────────────── */}
      <div
        className="container mx-auto px-6 md:px-16 relative z-10 w-full"
        style={{
          opacity: 'var(--fade, 1)',
          transform: 'translate3d(0, calc(var(--sy, 0) * 0.4px), 0)',
          willChange: 'transform, opacity'
        }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-12 md:gap-0 min-h-[80dvh]">

          {/* ══ LEFT: Monolithic Typography ══════════════════════ */}
          <div className="flex flex-col relative z-20 pointer-events-auto md:w-[55%] pt-24 md:pt-0">

            {/* Label row */}
            <div className="flex items-center gap-3 mb-8 overflow-hidden">
              <span
                className="font-mono text-xs tracking-[0.4em] uppercase text-black/50 dark:text-white/40 inline-block transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transform: isMounted ? 'translateY(0)' : 'translateY(100%)' }}
              >
                Portfolio // {new Date().getFullYear()}
              </span>
              {/* Available badge */}
              <span
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-green-500/30 bg-green-500/10 font-mono text-[9px] uppercase tracking-widest text-green-500"
                style={{
                  opacity: isMounted ? 1 : 0,
                  transition: 'opacity 0.8s ease',
                  transitionDelay: '1s'
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Available
              </span>
            </div>

            {/* Giant H1 */}
            <h1 className="flex flex-col leading-[0.85] tracking-tighter relative group cursor-default">
              {/* Gradient mesh on hover */}
              <div
                className="absolute inset-[-20%] z-0 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-[2s] pointer-events-none"
                style={{
                  background: 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
                  animation: 'heroSpin 10s linear infinite'
                }}
              />

              {/* Line 1 — "Ideas Become" */}
              <span className="overflow-hidden py-1 inline-block relative z-10">
                <span
                  className="inline-block text-[12vw] md:text-[7rem] lg:text-[9.5rem] font-extrabold uppercase tracking-[-0.02em] leading-none text-black dark:text-white"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    transform: isMounted ? 'translateY(0)' : 'translateY(110%)',
                    transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  Ideas
                </span>
              </span>

              {/* Line 2 — "Become" italic serif, with a chromatic gradient background clip */}
              <span className="overflow-hidden py-1 inline-block ml-4 md:ml-12 relative z-10">
                <span
                  className="inline-block text-[10vw] md:text-[6rem] lg:text-[8rem] font-light italic uppercase tracking-[-0.03em] leading-none"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    transform: isMounted ? 'translateY(0)' : 'translateY(110%)',
                    transition: 'transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    transitionDelay: '0.08s',
                  }}
                >
                  Become
                </span>
              </span>

              {/* Line 3 — "Infrastructure" */}
              <span className="overflow-hidden py-1 inline-block ml-0 relative z-10">
                <span
                  className="inline-block text-[11vw] md:text-[7.5rem] lg:text-[10rem] font-black uppercase tracking-[-0.04em] leading-none text-black dark:text-white"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    transform: isMounted ? 'translateY(0)' : 'translateY(110%)',
                    transition: 'transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    transitionDelay: '0.16s',
                  }}
                >
                  Infrastructure
                </span>
              </span>
            </h1>

            {/* ── Tagline Block ────────────────────────────── */}
            <div
              className="mt-12 md:mt-16 max-w-xl"
              style={{
                opacity: isMounted ? 1 : 0,
                transform: isMounted ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: '0.7s',
              }}
            >
              {/* Blue rule accent */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-[2px] bg-blue-500 rounded-full" />
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-blue-500 font-bold">
                  The Architecture Directive
                </p>
              </div>

              <p className="text-black/70 dark:text-white/70 text-lg md:text-2xl font-light leading-snug tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                I architect intelligent systems that{' '}
                <span className="font-semibold text-black dark:text-white">think, automate,</span>{' '}
                and <span className="font-semibold text-black dark:text-white">scale.</span>
              </p>

              {/* Signature */}
              <div className="mt-8 flex items-center gap-5 pt-6 border-t border-black/10 dark:border-white/10">
                <div className="flex flex-col">
                  <span className="font-bold text-sm tracking-[0.2em] uppercase text-black dark:text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {siteConfig.name}
                  </span>
                  <span className="text-black/40 dark:text-white/40 text-[10px] font-mono uppercase tracking-[0.3em] mt-1">
                    System Architect &amp; Engineer
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ══ RIGHT: Massive Profile Image ══════════════════════ */}
          <div
            ref={profileRef}
            className="relative md:w-[42%] h-[70dvh] md:h-[90dvh] flex-shrink-0"
            style={{
              transform: 'perspective(2000px) rotateX(calc(var(--my, 0) * -0.15deg)) rotateY(calc(var(--mx, 0) * -0.15deg))',
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* ── Chromatic Halo ── */}
            <div
              className="absolute -inset-4 z-0 rounded-3xl pointer-events-none"
              style={{
                background: 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 120deg, #e92a67 240deg, #2a8af6 360deg)',
                filter: 'blur(40px)',
                opacity: isMounted ? 0.25 : 0,
                animation: 'heroSpin 8s linear infinite',
                transition: 'opacity 2s ease',
                transitionDelay: '0.5s',
              }}
            />

            {/* Image container */}
            <div
              className="relative w-full h-full overflow-hidden z-10"
              style={{
                borderRadius: '24px',
                maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
              }}
            >
              {/* Parallax inner */}
              <div
                className="absolute inset-x-0 -top-[25%] -bottom-[5%] will-change-transform"
                style={{ transform: 'translate3d(0, calc(var(--sy, 0) * -0.1px), 0)' }}
              >
                <img
                  src={siteConfig.profileImage}
                  alt={siteConfig.name}
                  className="w-full h-full object-cover object-[center_85%] filter contrast-110 brightness-95 will-change-transform"
                  style={{
                    transform: isMounted
                      ? 'scale(1.02) translate3d(calc(var(--mx, 0) * -0.6px), calc(var(--my, 0) * -0.6px), 0)'
                      : 'scale(1.12) translateY(40px)',
                    transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />
              </div>

              {/* Cinematic Wipe */}
              <div
                className="absolute inset-0 bg-[#f8f9fa] dark:bg-[#080808] z-20 origin-top"
                style={{
                  transform: isMounted ? 'scaleY(0)' : 'scaleY(1)',
                  transition: 'transform 2s cubic-bezier(0.85, 0, 0.15, 1)',
                  transitionDelay: '0.2s'
                }}
              />

              {/* Corner accent lines */}
              {[
                { top: 0, left: 0, borderTop: '2px solid', borderLeft: '2px solid' },
                { top: 0, right: 0, borderTop: '2px solid', borderRight: '2px solid' },
                { bottom: 0, left: 0, borderBottom: '2px solid', borderLeft: '2px solid' },
                { bottom: 0, right: 0, borderBottom: '2px solid', borderRight: '2px solid' },
              ].map((style, i) => (
                <div
                  key={i}
                  className="absolute w-6 h-6 border-blue-400/60 z-30 pointer-events-none"
                  style={{
                    ...style,
                    borderColor: 'rgba(99,102,241,0.5)',
                    opacity: isMounted ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                    transitionDelay: `${1.0 + i * 0.1}s`,
                  }}
                />
              ))}
            </div>

            {/* Floating role badge */}
            <div
              className="absolute -bottom-4 left-4 z-30 px-4 py-2 rounded-xl backdrop-blur-md border"
              style={{
                background: 'rgba(255,255,255,0.08)',
                borderColor: 'rgba(255,255,255,0.12)',
                opacity: isMounted ? 1 : 0,
                transform: isMounted ? 'translateY(0)' : 'translateY(12px)',
                transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
                transitionDelay: '1.1s',
              }}
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/50">Role</p>
              <p className="font-mono text-xs text-white/90 font-semibold mt-0.5">Full-Stack AI Engineer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes heroSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
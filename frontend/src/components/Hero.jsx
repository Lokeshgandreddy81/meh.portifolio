import React, { useEffect, useRef, useState } from 'react';
import siteConfig from '../config/siteConfig';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const t = setTimeout(() => setIsMounted(true), 80);

    const onScroll = () => setScrollY(window.scrollY);
    const onMouse = (e) =>
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouse, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  const vh = typeof window !== 'undefined' ? window.innerHeight : 900;
  const fade = Math.max(0, 1 - scrollY / (vh * 0.7));
  const fadeImg = Math.max(0, 1 - scrollY / (vh * 0.9));

  /* ─────────────────────────────────────────────────────────────────── */
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100vh', background: '#07080d' }}
    >

      {/* ═══════════════════════════════════════════════════════════════
          LAYER 0 — Rotating Aurora Conic (the spine of the scene)
      ═══════════════════════════════════════════════════════════════ */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%', left: '50%',
          width: '200vw', height: '200vw',
          transform: 'translate(-50%, -50%)',
          animation: 'auroraRotate 35s linear infinite',
          background: 'conic-gradient(from 0deg at 50% 50%, #050917 0deg, #0d1a3a 40deg, #13053a 90deg, #0a0019 130deg, #06162e 180deg, #0e0430 220deg, #050917 260deg, #0b1832 310deg, #050917 360deg)',
          opacity: 0.9,
          zIndex: 0,
        }}
      />

      {/* ═══════════════════════════════════════════════════════════════
          LAYER 1 — Three mouse-reactive gaussian color blobs
      ═══════════════════════════════════════════════════════════════ */}
      {/* Blue — top right */}
      <div className="absolute pointer-events-none rounded-full" style={{
        width: '72vw', height: '72vw',
        top: '-12%', right: '-18%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.28) 0%, rgba(67,56,202,0.14) 45%, transparent 70%)',
        filter: 'blur(90px)',
        transform: `translate(${(mouse.x - 0.5) * -60}px, ${(mouse.y - 0.5) * -60}px)`,
        transition: 'transform 3.5s cubic-bezier(0.16,1,0.3,1)',
        zIndex: 1,
      }} />
      {/* Violet — bottom left */}
      <div className="absolute pointer-events-none rounded-full" style={{
        width: '58vw', height: '58vw',
        bottom: '-15%', left: '-12%',
        background: 'radial-gradient(circle, rgba(109,40,217,0.22) 0%, rgba(124,58,237,0.12) 45%, transparent 70%)',
        filter: 'blur(80px)',
        transform: `translate(${(mouse.x - 0.5) * 50}px, ${(mouse.y - 0.5) * 50}px)`,
        transition: 'transform 2.8s cubic-bezier(0.16,1,0.3,1)',
        zIndex: 1,
      }} />
      {/* Pink — center */}
      <div className="absolute pointer-events-none rounded-full" style={{
        width: '38vw', height: '38vw',
        top: '40%', left: '42%',
        background: 'radial-gradient(circle, rgba(219,39,119,0.14) 0%, transparent 70%)',
        filter: 'blur(70px)',
        transform: `translate(${(mouse.x - 0.5) * -35}px, ${(mouse.y - 0.5) * -35}px)`,
        transition: 'transform 2.2s cubic-bezier(0.16,1,0.3,1)',
        zIndex: 1,
      }} />

      {/* ═══════════════════════════════════════════════════════════════
          LAYER 2 — Architectural grid overlay
      ═══════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        zIndex: 2,
      }} />
      {/* Noise grain */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        opacity: 0.04,
        mixBlendMode: 'overlay',
        zIndex: 3,
      }} />

      {/* ═══════════════════════════════════════════════════════════════
          MAIN CONTENT — Parallax + fade on scroll
      ═══════════════════════════════════════════════════════════════ */}
      <div
        className="relative flex flex-col"
        style={{
          minHeight: '100vh',
          zIndex: 10,
          opacity: fade,
          transform: `translateY(${scrollY * 0.32}px)`,
          willChange: 'transform, opacity',
        }}
      >
        {/* ── Metadata strip (top) ──────────────────────────────────── */}
        <div
          className="flex items-center gap-6 px-8 md:px-14 pt-12"
          style={{
            opacity: isMounted ? 1 : 0,
            transform: isMounted ? 'translateY(0)' : 'translateY(-16px)',
            transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
            transitionDelay: '0.1s',
          }}
        >
          <div className="flex items-center gap-2">
            <div className="relative w-1.5 h-1.5">
              <div className="absolute inset-0 rounded-full bg-green-400 opacity-60 animate-ping" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ boxShadow: '0 0 6px rgba(74,222,128,0.8)' }} />
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/40">Available</span>
          </div>
          <div className="w-px h-3 bg-white/10" />
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/25">System Architect</span>
          <div className="w-px h-3 bg-white/10" />
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/25">{new Date().getFullYear()}</span>
        </div>

        {/* ── Hero body: TYPE LEFT + PORTRAIT RIGHT ────────────────── */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end flex-1 px-8 md:px-14 pt-10 pb-8 gap-8 lg:gap-0">

          {/* ── LEFT: Monolithic typography ──────────────────────────── */}
          <div className="flex-1 flex flex-col justify-end relative z-20">

            {/* Line 1: IDEAS BECOME — architectural white */}
            <div className="overflow-hidden">
              <div
                className="font-black uppercase leading-[0.88] tracking-[-0.03em]"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(64px, 11.5vw, 176px)',
                  color: '#ffffff',
                  textShadow: '0 0 80px rgba(255,255,255,0.06)',
                  transform: isMounted ? 'translateY(0)' : 'translateY(110%)',
                  transition: 'transform 1.1s cubic-bezier(0.16,1,0.3,1)',
                  transitionDelay: '0.25s',
                  display: 'inline-block',
                }}
              >
                Ideas Become
              </div>
            </div>

            {/* Line 2: INFRASTRUCTURE — chromatic gradient, indented, bigger */}
            <div className="overflow-hidden" style={{ marginLeft: 'clamp(20px, 4vw, 80px)' }}>
              <div
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(72px, 13.5vw, 210px)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  letterSpacing: '-0.04em',
                  lineHeight: 0.88,
                  display: 'inline-block',
                  background: 'linear-gradient(110deg, #818cf8 0%, #a78bfa 20%, #f472b6 42%, #fb923c 62%, #fbbf24 78%, #818cf8 100%)',
                  backgroundSize: '250% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'heroFlow 7s linear infinite',
                  filter: 'drop-shadow(0 0 30px rgba(139,92,246,0.4))',
                  transform: isMounted ? 'translateY(0)' : 'translateY(110%)',
                  transition: 'transform 1.3s cubic-bezier(0.16,1,0.3,1)',
                  transitionDelay: '0.42s',
                }}
              >
                Infrastructure
              </div>
            </div>

            {/* Hairline divider */}
            <div
              className="my-8 h-px"
              style={{
                background: 'linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(139,92,246,0.4) 50%, transparent 100%)',
                width: isMounted ? '100%' : '0%',
                transition: 'width 1.4s cubic-bezier(0.16,1,0.3,1)',
                transitionDelay: '0.7s',
              }}
            />

            {/* Tagline + CTAs */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
              style={{
                opacity: isMounted ? 1 : 0,
                transform: isMounted ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 1s cubic-bezier(0.16,1,0.3,1)',
                transitionDelay: '0.85s',
              }}
            >
              <p
                className="font-light text-white/45 leading-relaxed max-w-sm"
                style={{ fontSize: 'clamp(13px, 1.2vw, 16px)', fontFamily: 'Inter, sans-serif' }}
              >
                I architect intelligent systems that think, automate, and scale.
              </p>
              <a
                href={siteConfig.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 flex-shrink-0"
              >
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/50 group-hover:text-white/90 transition-colors duration-500"
                >
                  Explore work
                </span>
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                    boxShadow: '0 0 20px rgba(99,102,241,0.4)',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* ── RIGHT: Editorial Portrait ─────────────────────────────── */}
          <div
            className="relative flex-shrink-0 self-end"
            style={{
              width: 'clamp(200px, 28vw, 420px)',
              height: 'clamp(240px, 36vw, 520px)',
              marginBottom: '-2px',
              opacity: fadeImg,
              transform: isMounted
                ? `translateY(${scrollY * -0.1}px) translate(${(mouse.x - 0.5) * -16}px, ${(mouse.y - 0.5) * -12}px)`
                : 'translateY(60px)',
              transition: isMounted
                ? 'transform 3s cubic-bezier(0.16,1,0.3,1)'
                : 'transform 1.4s cubic-bezier(0.16,1,0.3,1)',
              transitionDelay: isMounted ? '0s' : '0.55s',
            }}
          >
            {/* Spinning gradient border ring */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: '-3px',
                borderRadius: '20px',
                padding: '3px',
                background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #3b82f6)',
                animation: 'portraitRing 6s linear infinite',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                opacity: 0.65,
              }}
            />

            {/* Portrait glow */}
            <div
              className="absolute pointer-events-none rounded-[18px]"
              style={{
                inset: '-20px',
                background: 'radial-gradient(ellipse at 50% 100%, rgba(99,102,241,0.25) 0%, rgba(139,92,246,0.15) 40%, transparent 70%)',
                filter: 'blur(20px)',
                zIndex: 0,
              }}
            />

            {/* Portrait image */}
            <div className="relative w-full h-full overflow-hidden rounded-[18px]" style={{ zIndex: 1 }}>
              <img
                src={siteConfig.profileImage}
                alt={siteConfig.name}
                className="w-full h-full object-cover object-top"
                style={{
                  filter: 'brightness(0.92) contrast(1.1) saturate(0.85)',
                  transform: isMounted ? 'scale(1)' : 'scale(1.08)',
                  transition: 'transform 2s cubic-bezier(0.16,1,0.3,1)',
                  transitionDelay: '0.4s',
                }}
              />
              {/* Cinematic wipe reveal */}
              <div
                className="absolute inset-0 z-10 origin-top"
                style={{
                  background: '#07080d',
                  transform: isMounted ? 'scaleY(0)' : 'scaleY(1)',
                  transition: 'transform 1.6s cubic-bezier(0.85,0,0.15,1)',
                  transitionDelay: '0.35s',
                }}
              />
              {/* Bottom fade into page */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3 z-10 pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, transparent, #07080d)',
                }}
              />
            </div>

            {/* Identity badge */}
            <div
              className="absolute bottom-4 left-4 right-4 z-20"
              style={{
                opacity: isMounted ? 1 : 0,
                transform: isMounted ? 'translateY(0)' : 'translateY(12px)',
                transition: 'all 1s cubic-bezier(0.16,1,0.3,1)',
                transitionDelay: '1.1s',
              }}
            >
              <div
                className="px-4 py-2.5 rounded-xl flex items-center gap-3"
                style={{
                  background: 'rgba(7,8,13,0.7)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.35em] text-white/35 mb-0.5">Full-Stack Architect</p>
                  <p className="font-medium text-[12px] text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {siteConfig.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom strip: socials + scroll cue ───────────────────── */}
        <div
          className="flex items-center justify-between px-8 md:px-14 pb-10 pt-2"
          style={{
            opacity: isMounted ? 1 : 0,
            transform: isMounted ? 'translateY(0)' : 'translateY(10px)',
            transition: 'all 1s cubic-bezier(0.16,1,0.3,1)',
            transitionDelay: '1.25s',
          }}
        >
          <div className="flex items-center gap-6">
            {[
              { label: 'GitHub', href: siteConfig.github },
              { label: 'LinkedIn', href: siteConfig.linkedIn },
              { label: 'Email', href: `mailto:${siteConfig.email}` },
            ].map(l => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="group font-mono text-[9px] uppercase tracking-[0.35em] text-white/25 hover:text-white/70 transition-colors duration-400"
              >
                {l.label}
                <span className="opacity-0 group-hover:opacity-100 ml-0.5 inline-block translate-x-0 group-hover:translate-x-1 transition-all duration-400">↗</span>
              </a>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-1.5">
            <span className="font-mono text-[7px] uppercase tracking-[0.5em] text-white/20">Scroll</span>
            <div className="w-px h-10 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)' }}>
              <div
                className="absolute top-0 left-0 w-full"
                style={{
                  background: 'linear-gradient(to bottom, transparent, rgba(139,92,246,0.8), transparent)',
                  height: '50%',
                  animation: 'scrollPulse 1.8s ease-in-out infinite',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── CSS Keyframes ────────────────────────────────────────────── */}
      <style>{`
        @keyframes auroraRotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes heroFlow {
          0%   { background-position: 0%   50%; }
          100% { background-position: 250% 50%; }
        }
        @keyframes portraitRing {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes scrollPulse {
          0%   { transform: translateY(-100%); opacity: 0; }
          50%  { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Header = ({ onMenuClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mx, setMx] = useState(0.5);
  const [my, setMy] = useState(0.5);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const headerRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  /* ── Scroll tracking ─────────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 80);
      setScrollProgress(Math.min((y / h) * 100, 100));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Mouse parallax (menu open only) ────────────────────────────── */
  useEffect(() => {
    if (!isMenuOpen) return;
    const onMove = (e) => {
      setMx(e.clientX / window.innerWidth);
      setMy(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [isMenuOpen]);

  /* ── Body scroll lock ────────────────────────────────────────────── */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const handleMenuClick = () => {
    setIsMenuOpen(prev => !prev);
    onMenuClick?.();
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Architect', id: 'about' },
    { label: 'Work', id: 'projects' },
    { label: 'Connect', id: 'contact' },
  ];

  return (
    <>
      {/* ══ Dynamic Island — jaw-drop edition ══════════════════════════ */}
      <header
        ref={headerRef}
        className="fixed bottom-6 sm:bottom-8 left-1/2 z-[100]"
        style={{
          transform: `translateX(-50%) scale(${scrolled ? 1.015 : 1})`,
          transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1)',
          maxWidth: '94vw',
        }}
      >
        {/* ── Floating glow BEAM — sharp line directly below pill ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: '-6px', left: '8%', right: '8%', height: '1px',
            background: 'linear-gradient(90deg, transparent, #3b82f6 25%, #a855f7 55%, #ec4899 80%, transparent)',
            filter: 'blur(2px)',
            opacity: scrolled ? 0.9 : 0.5,
            animation: 'islandBeam 3.5s ease-in-out infinite',
            transition: 'opacity 1s ease',
            zIndex: 0,
          }}
        />

        {/* ── Wide ambient bloom beneath pill ──────────────────────── */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: '-18px', left: '-8%', right: '-8%', height: '36px',
            borderRadius: '50%',
            background: 'linear-gradient(to bottom, rgba(99,102,241,0.55), rgba(168,85,247,0.2), transparent)',
            filter: 'blur(18px)',
            opacity: scrolled ? 0.85 : 0.4,
            animation: 'islandBloom 4s ease-in-out infinite',
            transition: 'opacity 1s ease',
            zIndex: 0,
          }}
        />

        {/* Pill body */}
        <div
          className="relative overflow-hidden z-10"
          style={{
            borderRadius: '999px',
            padding: scrolled ? '10px 18px' : '9px 16px',
            background: 'rgba(6,6,10,0.88)',
            backdropFilter: 'blur(48px)',
            WebkitBackdropFilter: 'blur(48px)',
            border: '1px solid rgba(255,255,255,0.1)',
            transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
            boxShadow: scrolled
              ? `0 0 0 0.5px rgba(168,85,247,0.25),
                 0 2px 16px rgba(99,102,241,0.35),
                 0 8px 40px rgba(0,0,0,0.6),
                 inset 0 1px 0 rgba(255,255,255,0.13)`
              : `0 2px 12px rgba(0,0,0,0.4),
                 inset 0 1px 0 rgba(255,255,255,0.08),
                 0 0 0 0.5px rgba(255,255,255,0.06)`,
          }}
        >
          {/* Scroll progress bar */}
          <div
            className="absolute top-0 left-0 pointer-events-none"
            style={{
              height: '1.5px', borderRadius: '0 2px 2px 0',
              width: `${scrollProgress}%`,
              background: 'linear-gradient(90deg, #3b82f6, #a855f7 55%, #ec4899)',
              boxShadow: '0 0 6px rgba(99,102,241,0.7)',
              opacity: scrollProgress > 2 ? 1 : 0,
              transition: 'width 0.25s ease, opacity 0.4s ease',
              zIndex: 20,
            }}
          />

          {/* Content row */}
          <div className="relative z-10 flex items-center gap-3">

            {/* Left: pulsing dot + name */}
            <div className="flex items-center gap-2.5">
              <div className="relative flex-shrink-0">
                <div
                  className="w-2 h-2 rounded-full bg-green-400"
                  style={{ boxShadow: '0 0 8px rgba(74,222,128,0.7)' }}
                />
                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
              </div>

              {/* GANDREDDY → LOKESH crossfade */}
              <div
                className="group relative overflow-hidden cursor-default"
                style={{ minWidth: '112px', height: '16px' }}
              >
                <span
                  className="absolute left-0 top-0 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.22em] transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-full"
                  style={{
                    ...(scrolled
                      ? {
                        backgroundImage: 'linear-gradient(90deg, #fff 0%, #a5b4fc 45%, #fff 80%)',
                        backgroundSize: '200% 100%',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent',
                        animation: 'nameShimmer 3s ease infinite',
                      }
                      : {
                        color: 'rgba(255,255,255,0.88)',
                        background: 'none',
                      }),
                  }}
                >
                  GANDREDDY
                </span>
                <span className="absolute left-0 top-0 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.22em] text-white translate-y-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  LOKESH
                </span>
              </div>
            </div>

            {/* Hairline divider */}
            <div
              className="flex-shrink-0 h-4 w-[1px]"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.18), transparent)' }}
            />

            {/* Right: theme + menu */}
            <div className="flex items-center gap-1.5">

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="group relative flex items-center gap-1.5 px-2.5 h-7 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 flex-shrink-0"
                style={{
                  background: theme === 'dark' ? 'rgba(250,204,21,0.1)' : 'rgba(99,102,241,0.12)',
                  border: theme === 'dark' ? '1px solid rgba(250,204,21,0.3)' : '1px solid rgba(99,102,241,0.35)',
                  boxShadow: theme === 'dark' ? '0 0 12px rgba(250,204,21,0.12)' : '0 0 12px rgba(99,102,241,0.15)',
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: theme === 'dark'
                      ? 'linear-gradient(90deg,transparent,rgba(250,204,21,0.12),transparent)'
                      : 'linear-gradient(90deg,transparent,rgba(99,102,241,0.18),transparent)',
                  }}
                />
                {theme === 'dark'
                  ? <Sun className="relative z-10 w-3 h-3 text-yellow-300 group-hover:rotate-90 transition-transform duration-700 flex-shrink-0" />
                  : <Moon className="relative z-10 w-3 h-3 text-indigo-300 group-hover:-rotate-45 transition-transform duration-500 flex-shrink-0" />
                }
                <span
                  className="relative z-10 font-mono text-[8px] uppercase tracking-wider flex-shrink-0 hidden sm:inline"
                  style={{ color: theme === 'dark' ? 'rgba(250,204,21,0.75)' : 'rgba(164,154,255,0.85)' }}
                >
                  {theme === 'dark' ? 'Light' : 'Dark'}
                </span>
              </button>

              {/* Menu button */}
              <button
                onClick={handleMenuClick}
                aria-label="Toggle menu"
                className="relative flex items-center justify-center flex-shrink-0 transition-all duration-500 hover:scale-110 active:scale-95"
                style={{ width: '32px', height: '32px' }}
              >
                {/* Static gradient-border ring on menu button */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    inset: '-1.5px', borderRadius: '50%',
                    background: isMenuOpen
                      ? 'none'
                      : 'linear-gradient(135deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)',
                    opacity: 0.75,
                    transition: 'opacity 0.4s ease',
                  }}
                />
                {/* Inner mask — creates the border effect */}
                <div
                  className="absolute"
                  style={{
                    inset: '1px', borderRadius: '50%',
                    background: isMenuOpen ? '#ffffff' : '#0a0a0a',
                    transition: 'background 0.4s ease',
                    boxShadow: isMenuOpen
                      ? '0 0 20px rgba(255,255,255,0.35)'
                      : '0 0 12px rgba(99,102,241,0.2)',
                  }}
                />
                {/* Hamburger → X */}
                <div className="relative z-10 flex flex-col justify-center items-center gap-[4.5px]" style={{ width: '14px' }}>
                  <span style={{
                    display: 'block', height: '1.5px', borderRadius: '2px', width: '14px',
                    background: isMenuOpen ? '#000' : 'rgba(255,255,255,0.92)',
                    transform: isMenuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
                    transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)',
                  }} />
                  <span style={{
                    display: 'block', height: '1.5px', borderRadius: '2px',
                    width: '10px', alignSelf: 'flex-start',
                    background: isMenuOpen ? '#000' : 'rgba(255,255,255,0.6)',
                    opacity: isMenuOpen ? 0 : 1,
                    transform: isMenuOpen ? 'scaleX(0)' : 'scaleX(1)',
                    transition: 'all 0.3s ease',
                  }} />
                  <span style={{
                    display: 'block', height: '1.5px', borderRadius: '2px', width: '14px',
                    background: isMenuOpen ? '#000' : 'rgba(255,255,255,0.92)',
                    transform: isMenuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
                    transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)',
                  }} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ══ Full-screen Menu Overlay ═══════════════════════════════════ */}
      <div
        className="fixed inset-0 z-[90] overflow-hidden"
        style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
      >
        {/* Curtain backdrop */}
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(3,3,6,0.98)',
            backdropFilter: 'blur(32px)',
            clipPath: isMenuOpen ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)',
            transition: 'clip-path 0.8s cubic-bezier(0.85,0,0.15,1)',
          }}
          onClick={closeMenu}
        />

        {/* Ambient orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute rounded-full" style={{
            width: '65vw', height: '65vw', top: '-15%', right: '-10%',
            transform: `translate(${(mx - 0.5) * -80}px, ${(my - 0.5) * -80}px)`,
            background: 'radial-gradient(circle, #1d4ed8 0%, #2a8af6 35%, #a853ba 65%, transparent 80%)',
            filter: 'blur(90px)', opacity: 0.28, mixBlendMode: 'screen',
            transition: 'transform 2s cubic-bezier(0.16,1,0.3,1)',
          }} />
          <div className="absolute rounded-full" style={{
            width: '42vw', height: '42vw', bottom: '5%', left: '-5%',
            transform: `translate(${(mx - 0.5) * -120}px, ${(my - 0.5) * -120}px)`,
            background: 'radial-gradient(circle, #e92a67 0%, #a853ba 55%, transparent 78%)',
            filter: 'blur(70px)', opacity: 0.20, mixBlendMode: 'screen',
            transition: 'transform 1.4s cubic-bezier(0.16,1,0.3,1)',
          }} />
          <div className="absolute rounded-full" style={{
            width: '22vw', height: '22vw', top: '40%', left: '40%',
            transform: `translate(${(mx - 0.5) * -180}px, ${(my - 0.5) * -180}px)`,
            background: 'radial-gradient(circle, #06b6d4 0%, #3b82f6 55%, transparent 80%)',
            filter: 'blur(50px)', opacity: 0.14, mixBlendMode: 'screen',
            transition: 'transform 1s cubic-bezier(0.16,1,0.3,1)',
          }} />
          <div className="absolute inset-0 opacity-[0.025]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
            backgroundSize: '80px 80px',
          }} />
        </div>

        {/* Content wrapper */}
        <div
          className="relative z-10 h-full flex flex-col"
          style={{
            opacity: isMenuOpen ? 1 : 0,
            transition: 'opacity 0.3s ease',
            transitionDelay: isMenuOpen ? '0.2s' : '0s',
          }}
        >
          {/* Top strip */}
          <div className="flex items-center justify-between px-8 md:px-14 pt-8 pb-6"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="flex items-center gap-4">
              <div className="w-6 h-[1px] bg-white/20" />
              <span className="font-mono text-[9px] uppercase tracking-[0.5em] text-white/25">Navigation</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20 hidden md:block">
                G.L // {new Date().getFullYear()}
              </span>
              <button onClick={closeMenu} className="group flex items-center gap-3 hover:gap-4 transition-all duration-300">
                <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-white/30 group-hover:text-white/60 transition-colors duration-300">Close</span>
                <div className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-500 group-hover:bg-white group-hover:scale-110 active:scale-95"
                  style={{ border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)' }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      className="text-white/60 group-hover:text-black transition-colors duration-300" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Split body */}
          <div className="flex-1 flex overflow-hidden">

            {/* LEFT — nav links */}
            <div className="flex-1 flex flex-col justify-center px-8 md:px-14 py-8">
              <nav className="flex flex-col gap-0">
                {navItems.map((item, i) => (
                  <button
                    key={item.id}
                    onClick={() => { closeMenu(); setTimeout(() => scrollTo(item.id), 500); }}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="group relative text-left w-full overflow-hidden"
                    style={{
                      padding: '12px 0',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      opacity: isMenuOpen ? 1 : 0,
                      clipPath: isMenuOpen ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)',
                      transition: `opacity 0.6s ease ${0.3 + i * 0.07}s, clip-path 0.7s cubic-bezier(0.16,1,0.3,1) ${0.25 + i * 0.07}s`,
                    }}
                  >
                    {/* Blue sweep underline */}
                    <div className="absolute bottom-0 left-0 h-[1px] transition-all duration-500"
                      style={{
                        width: hoveredIdx === i ? '100%' : '0%',
                        background: 'linear-gradient(90deg, #3b82f6, #a855f7)',
                        boxShadow: '0 0 8px rgba(59,130,246,0.5)',
                      }}
                    />
                    <div className="flex items-center justify-between pr-2">
                      <div className="flex items-baseline gap-5 md:gap-8">
                        <span className="font-mono text-[10px] tracking-widest w-6 transition-all duration-400"
                          style={{ color: hoveredIdx === i ? '#60a5fa' : 'rgba(255,255,255,0.15)' }}>
                          0{i + 1}
                        </span>
                        <span
                          className="font-light leading-none transition-all duration-500"
                          style={{
                            fontFamily: 'Cormorant Garamond, serif',
                            fontSize: 'clamp(2.8rem, 7.5vw, 9rem)',
                            letterSpacing: '-0.03em',
                            color: hoveredIdx === null ? 'rgba(255,255,255,0.88)'
                              : hoveredIdx === i ? '#ffffff' : 'rgba(255,255,255,0.09)',
                            transform: hoveredIdx === i ? 'translateX(18px)' : 'translateX(0)',
                            fontStyle: hoveredIdx === i ? 'italic' : 'normal',
                            textShadow: hoveredIdx === i ? '0 0 60px rgba(255,255,255,0.15)' : 'none',
                          }}
                        >
                          {item.label}
                        </span>
                      </div>
                      <div className="transition-all duration-500 flex-shrink-0"
                        style={{
                          opacity: hoveredIdx === i ? 1 : 0,
                          transform: hoveredIdx === i ? 'translateX(0) rotate(0)' : 'translateX(-16px) rotate(-45deg)',
                        }}>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                          <path d="M8 28L28 8M28 8H14M28 8V22" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </button>
                ))}
              </nav>
            </div>

            {/* RIGHT — ghost number panel */}
            <div className="hidden md:flex w-[38%] flex-shrink-0 flex-col justify-between py-8 px-10 lg:px-14"
              style={{ borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="flex-1 flex items-center justify-center overflow-hidden relative">
                <span
                  className="absolute font-light select-none pointer-events-none transition-all duration-700"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(10rem, 22vw, 26rem)',
                    fontWeight: 300, lineHeight: 1,
                    letterSpacing: '-0.06em',
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(255,255,255,0.07)',
                    transform: `translate(${(mx - 0.5) * 20}px, ${(my - 0.5) * 20}px)`,
                    transition: 'transform 2s cubic-bezier(0.16,1,0.3,1)',
                    userSelect: 'none',
                  }}
                >
                  0{hoveredIdx !== null ? hoveredIdx + 1 : 1}
                </span>
                <div className="absolute bottom-8 left-0 right-0">
                  {navItems.map((item, i) => (
                    <p key={item.id}
                      className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 text-center absolute inset-x-0 transition-all duration-500"
                      style={{
                        opacity: hoveredIdx === i ? 1 : 0,
                        transform: hoveredIdx === i ? 'translateY(0)' : 'translateY(6px)',
                      }}>
                      {item.id === 'hero' && '// Start of sequence'}
                      {item.id === 'about' && '// System architecture'}
                      {item.id === 'projects' && '// Deployed systems'}
                      {item.id === 'contact' && '// Open channel'}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="relative w-1.5 h-1.5">
                    <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-white/35">Available for projects</span>
                </div>
                <p className="font-mono text-[9px] text-white/15 uppercase tracking-widest">
                  System Architect · Full-Stack · 2025
                </p>
              </div>
            </div>
          </div>

          {/* Bottom strip */}
          <div className="flex items-center justify-between px-8 md:px-14 py-6"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.05)',
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(8px)',
              transition: 'all 0.7s ease 0.55s',
            }}>
            <div className="flex items-center gap-6 md:gap-10">
              {[
                { label: 'Email', href: 'mailto:gandreddylokesh7@gmail.com' },
                { label: 'LinkedIn', href: '#' },
                { label: 'GitHub', href: '#' },
              ].map((l) => (
                <a key={l.label} href={l.href}
                  target={l.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.3em] text-white/25 hover:text-white/70 transition-colors duration-300"
                >
                  {l.label}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
                </a>
              ))}
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/12 hidden md:block">
              Gandreddy Lokesh
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes islandBeam {
          0%, 100% { opacity: 0.45; transform: scaleX(0.9); }
          50%       { opacity: 0.9;  transform: scaleX(1.05); }
        }
        @keyframes islandBloom {
          0%, 100% { opacity: 0.35; transform: scaleY(0.7) scaleX(0.92); }
          50%       { opacity: 0.7;  transform: scaleY(1)   scaleX(1.04); }
        }
        @keyframes islandSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes nameShimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </>
  );
};

export default Header;
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
  const [mx, setMx] = useState(0.5);
  const [my, setMy] = useState(0.5);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [activeId, setActiveId] = useState('hero');
  const headerRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  /* ── Scroll tracking ─────────────────────────────────────────────── */
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          const h = document.documentElement.scrollHeight - window.innerHeight;
          setScrolled(y > 60);
          if (headerRef.current) {
            headerRef.current.style.setProperty('--sp', `${Math.min((y / h) * 100, 100)}%`);
          }
          // Track active section
          ['hero', 'about', 'projects', 'contact'].forEach(id => {
            const el = document.getElementById(id);
            if (el) {
              const { top, bottom } = el.getBoundingClientRect();
              if (top <= 120 && bottom > 120) setActiveId(id);
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Mouse parallax (menu open only) ────────────────────────────── */
  useEffect(() => {
    if (!isMenuOpen) return;
    const onMove = (e) => { setMx(e.clientX / window.innerWidth); setMy(e.clientY / window.innerHeight); };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [isMenuOpen]);

  /* ── Body scroll lock ────────────────────────────────────────────── */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const handleMenuClick = () => { setIsMenuOpen(prev => !prev); onMenuClick?.(); };

  const navItems = [
    { label: 'Home', id: 'hero', num: '01' },
    { label: 'Architect', id: 'about', num: '02' },
    { label: 'Work', id: 'projects', num: '03' },
    { label: 'Connect', id: 'contact', num: '04' },
  ];

  /* ── Pill surface tokens ─────────────────────────────────────────── */
  const pillBg = isDark ? 'rgba(10,10,12,0.82)' : 'rgba(255,255,255,0.78)';
  const pillBorder = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';
  const textPrimary = isDark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.85)';
  const textSecondary = isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.35)';
  const navHoverBg = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)';

  return (
    <>
      {/* ══ Floating Command Bar ══════════════════════════════════════ */}
      <header
        ref={headerRef}
        className="fixed bottom-6 sm:bottom-8 left-1/2 z-[100]"
        style={{
          transform: `translateX(-50%) scale(${scrolled ? 1.01 : 1})`,
          transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1)',
          maxWidth: '96vw',
        }}
      >
        {/* ── Bloom glow beneath ──────────────────────────────────── */}
        <div className="absolute pointer-events-none" style={{
          bottom: '-14px', left: '5%', right: '5%', height: '28px',
          borderRadius: '50%',
          background: 'linear-gradient(to bottom, rgba(99,102,241,0.5), rgba(168,85,247,0.2), transparent)',
          filter: 'blur(16px)',
          opacity: scrolled ? 0.75 : 0.35,
          animation: 'navBloom 4s ease-in-out infinite',
          transition: 'opacity 1s ease',
          zIndex: 0,
        }} />
        {/* Beam line */}
        <div className="absolute pointer-events-none" style={{
          bottom: '-3px', left: '10%', right: '10%', height: '1px',
          background: 'linear-gradient(90deg, transparent, #3b82f6 25%, #a855f7 55%, #ec4899 80%, transparent)',
          filter: 'blur(1.5px)',
          opacity: scrolled ? 0.9 : 0.45,
          animation: 'navBeam 3.5s ease-in-out infinite',
          transition: 'opacity 1s ease',
          zIndex: 0,
        }} />

        {/* ── Pill ─────────────────────────────────────────────────── */}
        <div
          className="relative z-10 overflow-hidden"
          style={{
            borderRadius: '999px',
            padding: scrolled ? '8px 10px 8px 16px' : '7px 9px 7px 15px',
            background: pillBg,
            backdropFilter: 'blur(56px) saturate(200%)',
            WebkitBackdropFilter: 'blur(56px) saturate(200%)',
            border: `1px solid ${pillBorder}`,
            transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
            boxShadow: scrolled
              ? `0 0 0 0.5px rgba(168,85,247,0.2), 0 2px 20px rgba(0,0,0,0.3), 0 8px 40px rgba(0,0,0,0.2)`
              : `0 2px 16px rgba(0,0,0,0.12), 0 0 0 0.5px ${pillBorder}`,
          }}
        >
          {/* Spinning chromatic border (visible on scroll) */}
          <div className="absolute inset-0 z-0 pointer-events-none rounded-full" style={{
            padding: '1px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor', maskComposite: 'exclude',
          }}>
            <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2" style={{
              background: 'conic-gradient(from 0deg, transparent 40%, rgba(59,130,246,0.9), rgba(168,85,247,1), rgba(236,72,153,0.9), transparent 60%)',
              animation: 'navSpin 3s linear infinite',
              opacity: scrolled ? 1 : 0,
              transition: 'opacity 0.7s ease',
            }} />
          </div>

          {/* Scroll progress bar */}
          <div className="absolute top-0 left-0 pointer-events-none z-20" style={{
            height: '1.5px', borderRadius: '0 2px 2px 0',
            width: 'var(--sp, 0%)',
            background: 'linear-gradient(90deg, #3b82f6, #a855f7 55%, #ec4899)',
            boxShadow: '0 0 8px rgba(99,102,241,0.8)',
            opacity: scrolled ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }} />

          {/* ── Row ───────────────────────────────────────────────── */}
          <div className="relative z-10 flex items-center gap-0">

            {/* LEFT: Identity mark ──────────────────────────────── */}
            <div className="flex items-center gap-3 flex-shrink-0 pr-4" style={{
              borderRight: `1px solid ${pillBorder}`,
            }}>
              {/* Live dot */}
              <div className="relative w-2 h-2 flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-50" />
                <div className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: '0 0 6px rgba(74,222,128,0.8)' }} />
              </div>
              {/* Monogram — gradient on hover */}
              <div
                className="group cursor-default flex-shrink-0"
                onClick={() => scrollTo('hero')}
                style={{ cursor: 'pointer' }}
              >
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.28em] font-semibold select-none"
                  style={{
                    color: textPrimary,
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.target.style.backgroundImage = 'linear-gradient(90deg, #3b82f6, #a855f7, #ec4899)';
                    e.target.style.WebkitBackgroundClip = 'text';
                    e.target.style.WebkitTextFillColor = 'transparent';
                    e.target.style.backgroundClip = 'text';
                  }}
                  onMouseLeave={e => {
                    e.target.style.backgroundImage = 'none';
                    e.target.style.WebkitTextFillColor = textPrimary;
                  }}
                >
                  G.L
                </span>
              </div>
            </div>

            {/* CENTER: Nav links ────────────────────────────────── */}
            <nav className="hidden sm:flex items-center px-2">
              {navItems.map((item, i) => {
                const isActive = activeId === item.id;
                const isHovered = hoveredIdx === i;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="relative group px-3.5 py-2 rounded-full transition-all duration-300"
                    style={{
                      background: isHovered ? navHoverBg : 'transparent',
                    }}
                  >
                    {/* Active dot */}
                    {isActive && (
                      <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ background: 'linear-gradient(90deg, #3b82f6, #a855f7)', boxShadow: '0 0 4px rgba(99,102,241,0.8)' }} />
                    )}
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300 block"
                      style={{
                        color: isActive
                          ? (isDark ? '#fff' : '#000')
                          : isHovered
                            ? textPrimary
                            : textSecondary,
                        fontWeight: isActive ? '600' : '400',
                        transform: isHovered ? 'translateY(-1px)' : 'translateY(0)',
                      }}
                    >
                      {item.label}
                    </span>
                    {/* Hover underline sweep */}
                    <span className="absolute bottom-1 left-3.5 right-3.5 h-[1px] rounded-full transition-all duration-400 origin-left"
                      style={{
                        background: 'linear-gradient(90deg, #3b82f6, #a855f7)',
                        transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                        opacity: isHovered ? 0.8 : 0,
                        boxShadow: '0 0 6px rgba(99,102,241,0.6)',
                      }} />
                  </button>
                );
              })}
            </nav>

            {/* RIGHT: Theme + Menu ─────────────────────────────── */}
            <div className="flex items-center gap-2 flex-shrink-0 pl-3" style={{
              borderLeft: `1px solid ${pillBorder}`,
            }}>

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="group relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-400 hover:scale-110 active:scale-95"
                style={{
                  background: isDark ? 'rgba(250,204,21,0.1)' : 'rgba(99,102,241,0.10)',
                  border: isDark ? '1px solid rgba(250,204,21,0.25)' : '1px solid rgba(99,102,241,0.25)',
                }}
              >
                {isDark
                  ? <Sun className="w-3.5 h-3.5 text-yellow-300 group-hover:rotate-90 transition-transform duration-700" />
                  : <Moon className="w-3.5 h-3.5 text-indigo-400 group-hover:-rotate-12 transition-transform duration-500" />
                }
              </button>

              {/* Menu button — pill with lines */}
              <button
                onClick={handleMenuClick}
                aria-label="Toggle menu"
                className="group relative flex items-center gap-2 pl-3 pr-3.5 h-8 rounded-full transition-all duration-500 hover:scale-105 active:scale-95"
                style={{
                  background: isMenuOpen
                    ? (isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)')
                    : (isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'),
                  border: isMenuOpen
                    ? `1px solid rgba(168,85,247,0.5)`
                    : `1px solid ${pillBorder}`,
                  boxShadow: isMenuOpen ? '0 0 16px rgba(168,85,247,0.25)' : 'none',
                  transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                {/* Animated hamburger lines */}
                <div className="flex flex-col justify-center items-center gap-[4.5px]" style={{ width: '14px' }}>
                  <span style={{
                    display: 'block', height: '1.5px', borderRadius: '2px', width: '14px',
                    background: isMenuOpen ? 'linear-gradient(90deg,#3b82f6,#ec4899)' : textPrimary,
                    transform: isMenuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                  }} />
                  <span style={{
                    display: 'block', height: '1.5px', borderRadius: '2px', width: '10px', alignSelf: 'flex-start',
                    background: textSecondary,
                    opacity: isMenuOpen ? 0 : 1,
                    transform: isMenuOpen ? 'scaleX(0)' : 'scaleX(1)',
                    transition: 'all 0.3s ease',
                  }} />
                  <span style={{
                    display: 'block', height: '1.5px', borderRadius: '2px', width: '14px',
                    background: isMenuOpen ? 'linear-gradient(90deg,#ec4899,#3b82f6)' : textPrimary,
                    transform: isMenuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                  }} />
                </div>
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] hidden sm:block" style={{ color: textSecondary }}>
                  {isMenuOpen ? 'Close' : 'Menu'}
                </span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ══ Full-screen Menu Overlay ══════════════════════════════════ */}
      <div
        className="fixed inset-0 z-[90] overflow-hidden"
        style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
      >
        {/* Dark curtain */}
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(3,3,6,0.97)',
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
          <div className="absolute inset-0 opacity-[0.025]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
            backgroundSize: '80px 80px',
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col" style={{
          opacity: isMenuOpen ? 1 : 0,
          transition: 'opacity 0.3s ease',
          transitionDelay: isMenuOpen ? '0.2s' : '0s',
        }}>
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

          {/* Nav body */}
          <div className="flex-1 flex overflow-hidden">
            {/* LEFT nav links */}
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
                    {/* Sweep underline */}
                    <div className="absolute bottom-0 left-0 h-[1px] transition-all duration-500"
                      style={{
                        width: hoveredIdx === i ? '100%' : '0%',
                        background: 'linear-gradient(90deg, #3b82f6, #a855f7)',
                        boxShadow: '0 0 8px rgba(59,130,246,0.5)',
                      }} />
                    <div className="flex items-center justify-between pr-2">
                      <div className="flex items-baseline gap-5 md:gap-8">
                        <span className="font-mono text-[10px] tracking-widest w-6 transition-all duration-400"
                          style={{ color: hoveredIdx === i ? '#60a5fa' : 'rgba(255,255,255,0.15)' }}>
                          {item.num}
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

            {/* RIGHT ghost number */}
            <div className="hidden md:flex w-[38%] flex-shrink-0 flex-col justify-between py-8 px-10 lg:px-14"
              style={{ borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="flex-1 flex items-center justify-center overflow-hidden relative">
                <span
                  className="absolute font-light select-none pointer-events-none"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(10rem, 22vw, 26rem)',
                    fontWeight: 300, lineHeight: 1, letterSpacing: '-0.06em',
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(255,255,255,0.07)',
                    transform: `translate(${(mx - 0.5) * 20}px, ${(my - 0.5) * 20}px)`,
                    transition: 'transform 2s cubic-bezier(0.16,1,0.3,1)',
                    userSelect: 'none',
                  }}
                >
                  0{hoveredIdx !== null ? hoveredIdx + 1 : 1}
                </span>
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
        @keyframes navBloom {
          0%, 100% { opacity: 0.35; transform: scaleY(0.7) scaleX(0.92); }
          50%       { opacity: 0.7;  transform: scaleY(1)   scaleX(1.04); }
        }
        @keyframes navBeam {
          0%, 100% { opacity: 0.45; transform: scaleX(0.9); }
          50%       { opacity: 0.9;  transform: scaleX(1.05); }
        }
        @keyframes navSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default Header;
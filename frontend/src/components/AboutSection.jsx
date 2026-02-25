import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import siteConfig from '../config/siteConfig';

/* ─── Animated index number ──────────────────────────────────────────────── */
const AnimatedIndex = ({ num, active, dark }) => (
  <span
    className="font-mono text-sm font-bold transition-all duration-500"
    style={{
      color: active
        ? '#3b82f6'
        : dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
      transform: active ? 'scale(1.2)' : 'scale(1)',
      display: 'block',
    }}
  >
    {num}
  </span>
);

/* ─── Manifesto Card ─────────────────────────────────────────────────────── */
const ManifestoCard = ({ index, section, dark }) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect(); // Trigger once to prevent scroll jitter
        }
      },
      { threshold: 0.3 }
    );
    if (cardRef.current) obs.observe(cardRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative cursor-default transition-all duration-700 pl-8 py-2"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.9s ease ${index * 200}ms, transform 0.9s ease ${index * 200}ms`,
      }}
    >
      {/* Glowing left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full transition-all duration-700"
        style={{
          background: hovered
            ? 'linear-gradient(to bottom, #3b82f6, #a78bfa, transparent)'
            : dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
          boxShadow: hovered ? '0 0 12px rgba(59,130,246,0.5)' : 'none',
        }}
      />

      {/* Index row */}
      <div className="flex items-center gap-4 mb-5">
        <AnimatedIndex num={`0${index + 1}`} active={hovered} dark={dark} />
        <div
          className="h-[1px] flex-1 transition-all duration-700"
          style={{
            background: hovered
              ? 'linear-gradient(to right, #3b82f6, transparent)'
              : dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
            transform: hovered ? 'scaleX(1)' : 'scaleX(0.3)',
            transformOrigin: 'left',
          }}
        />
      </div>

      {/* Title */}
      <h3
        className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-5 transition-all duration-700"
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          color: dark
            ? (hovered ? '#fff' : 'rgba(255,255,255,0.85)')
            : (hovered ? '#000000' : 'rgba(0,0,0,0.75)'),
          transform: hovered ? 'skewX(-3deg) translateX(8px)' : 'skewX(0deg) translateX(0)',
        }}
      >
        {section.title}
      </h3>

      {/* Description */}
      <p
        className="font-mono text-sm leading-relaxed transition-all duration-500"
        style={{
          color: hovered
            ? (dark ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.7)')
            : (dark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.4)'),
          transform: hovered ? 'translateY(0)' : 'translateY(4px)',
        }}
      >
        {section.description}
      </p>

      {/* Sweep underline */}
      <div
        className="mt-6 h-[1px] rounded-full transition-all duration-700"
        style={{
          background: 'linear-gradient(to right, #3b82f6, #a78bfa)',
          width: hovered ? '100%' : '0%',
        }}
      />
    </div>
  );
};

/* ─── Main AboutSection ───────────────────────────────────────────────────── */
const AboutSection = () => {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const cardRef = useRef(null);

  // Antigravity Parallax State
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glareX, setGlareX] = useState(50);
  const [glareY, setGlareY] = useState(50);
  const [isHoveringCard, setIsHoveringCard] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation (-10 to 10 degrees)
    const rY = ((x / rect.width) - 0.5) * 20;
    const rX = ((y / rect.height) - 0.5) * -20;

    setRotateX(rX);
    setRotateY(rY);
    setGlareX((x / rect.width) * 100);
    setGlareY((y / rect.height) * 100);
  };

  const handleMouseEnter = () => setIsHoveringCard(true);
  const handleMouseLeave = () => {
    setIsHoveringCard(false);
    setRotateX(0);
    setRotateY(0);
    setGlareX(50);
    setGlareY(50);
  };

  return (
    <section
      id="about"
      className="w-full relative z-30 overflow-hidden transition-colors duration-700"
      style={{ background: dark ? '#000000' : '#ffffff' }}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-[1600px] py-24 md:py-32">

        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <span
            className="font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase mb-6 block transition-colors duration-700"
            style={{ color: dark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)' }}
          >
            System Identity
          </span>
          <h2
            className="text-7xl md:text-[10rem] font-light tracking-tighter leading-none transition-colors duration-700"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              color: dark ? '#ffffff' : '#000000',
            }}
          >
            The Architect
          </h2>
        </div>

        {/* 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* LEFT — manifesto */}
          <div className="flex flex-col gap-14 md:gap-20 order-2 md:order-1 pt-2">
            {siteConfig.aboutSections.map((section, i) => (
              <ManifestoCard key={i} index={i} section={section} dark={dark} />
            ))}
          </div>

          {/* RIGHT — portrait (Antigravity Parallax Wrapper) */}
          <div className="order-1 md:order-2 md:sticky top-20 self-start perspective-[1500px]">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative w-full overflow-hidden transition-all duration-300 ease-out"
              style={{
                minHeight: '88vh',
                borderRadius: '2.5rem',
                background: dark ? '#000000' : '#f7f6f2',
                isolation: 'isolate',
                border: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.08)',
                boxShadow: isHoveringCard
                  ? (dark ? '0 50px 100px -20px rgba(99,102,241,0.25), 0 30px 60px -30px rgba(0,0,0,1)' : '0 50px 100px -20px rgba(0,0,0,0.2), 0 30px 60px -30px rgba(0,0,0,0.15)')
                  : (dark ? '0 40px 120px rgba(0,0,0,0.6)' : '0 40px 100px rgba(0,0,0,0.12)'),
                transform: isHoveringCard
                  ? `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
                  : 'translateY(0) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                transition: isHoveringCard ? 'transform 0.1s ease-out, box-shadow 0.4s ease-out' : 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.6s ease-out',
                transformStyle: 'preserve-3d',
              }}
            >

              {/* Image layer inside 3D transforms */}
              <div
                className="absolute inset-0 w-full h-full transition-transform duration-300"
                style={{
                  transform: isHoveringCard ? `translateZ(40px) scale(1.05)` : 'translateZ(0px) scale(1)',
                }}
              >
                <img
                  src={siteConfig.architectImage}
                  alt={siteConfig.name}
                  className="w-full h-full object-cover object-center"
                  style={{ display: 'block' }}
                />
              </div>

              {/* Dynamic Mouse Glare Overlay */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
                style={{
                  opacity: isHoveringCard ? 1 : 0,
                  background: `radial-gradient(circle at ${glareX}% ${glareY}%, ${dark ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.4)'} 0%, transparent 60%)`,
                  mixBlendMode: dark ? 'screen' : 'overlay'
                }}
              />
              {/* Bottom-only gradient — just enough for text contrast, photo top is 100% clear */}
              <div
                className="absolute bottom-0 left-0 right-0 transition-colors duration-700"
                style={{
                  height: '45%',
                  background: dark
                    ? 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)'
                    : 'linear-gradient(to top, rgba(247,246,242,0.95) 0%, rgba(247,246,242,0.5) 55%, transparent 100%)',
                }}
              />
              {/* Identity text - pops out in 3D */}
              <div
                className="absolute bottom-0 left-0 right-0 p-8 md:p-10 transition-transform duration-300 z-20"
                style={{
                  transform: isHoveringCard ? `translateZ(60px)` : 'translateZ(0px)',
                }}
              >
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.25em] mb-3 block font-bold text-blue-400"
                >
                  System Architect
                </span>
                <h3
                  className="text-4xl md:text-6xl font-light leading-none transition-colors duration-700"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    color: dark ? '#ffffff' : '#000000',
                    textShadow: isHoveringCard
                      ? (dark ? '0 10px 20px rgba(0,0,0,0.5)' : '0 10px 20px rgba(255,255,255,0.5)')
                      : 'none',
                  }}
                >
                  {siteConfig.name}
                </h3>
                <div className="flex items-center gap-2.5 mt-4">
                  <div className="relative w-2 h-2">
                    <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-70" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <span
                    className="font-mono text-[10px] uppercase tracking-widest transition-colors duration-700"
                    style={{ color: dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)' }}
                  >
                    Available for collaboration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import React from 'react';
import siteConfig from '../config/siteConfig';
import SpotlightButton from './ui/SpotlightButton';
import { ArrowUpRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden section-border border-b">
      {/* Deep ambient background lighting */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-[100px] mix-blend-screen pointer-events-none ambient-orb opacity-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-emerald-500/5 via-transparent to-transparent rounded-full blur-[100px] mix-blend-screen pointer-events-none opacity-30" />

      {/* Structured Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">

        {/* Editorial Section Header */}
        <div className="mb-20 md:mb-32 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-[pulse_2s_ease-in-out_infinite]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">Designer & Engineer</span>
          </div>
          <h2
            className="text-5xl md:text-7xl font-light leading-tight text-white/90 mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            The Art of <span className="italic text-white/50">Systems</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* JAW-DROPPING BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          {siteConfig.aboutSections.map((section, index) => {
            const isHero = index === 0;
            const isWide = index === 3;
            const isStandard = index === 1 || index === 2;

            return (
              <SpotlightButton
                key={index}
                className={`group relative flex flex-col border border-white/10 bg-[#0a0a0a]/60 backdrop-blur-2xl rounded-[32px] overflow-hidden hover:border-white/25 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,1)]
                  ${isHero ? 'md:col-span-2 md:row-span-2 p-10 md:p-16 lg:p-20 min-h-[400px]' : ''}
                  ${isStandard ? 'md:col-span-1 md:row-span-1 p-8 md:p-10 min-h-[300px]' : ''}
                  ${isWide ? 'md:col-span-3 md:row-span-1 p-10 md:p-16 flex-col md:flex-row' : ''}
                `}
              >
                {/* 3D Mass Scale Number */}
                <div
                  className={`absolute font-bold leading-none select-none pointer-events-none transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
                    text-white/[0.02] group-hover:text-white/[0.06] group-hover:scale-110 group-hover:rotate-[-5deg] origin-bottom-right
                    ${isHero ? '-bottom-16 -right-12 text-[20rem] md:text-[28rem]' : ''}
                    ${isStandard ? '-bottom-8 -right-8 text-[12rem] md:text-[16rem]' : ''}
                    ${isWide ? '-bottom-16 right-0 text-[14rem] md:text-[22rem] md:top-1/2 md:-translate-y-1/2' : ''}
                  `}
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {index + 1}
                </div>

                {/* Laser scanline border highlight */}
                <div className="absolute top-0 left-0 h-[1px] w-full overflow-hidden opacity-50">
                  <div className="h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent w-[200%] -translate-x-full group-hover:translate-x-[50%] transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </div>

                {/* Content Matrix */}
                <div className={`relative z-10 flex ${isWide ? 'md:flex-1 md:flex-row md:items-center md:gap-16' : 'flex-col h-full'} justify-between`}>

                  {/* Header Pillar */}
                  <div className={`${isWide ? 'md:w-5/12' : 'mb-8'}`}>
                    <div className="flex items-center gap-3 mb-6">
                      {/* Interactive diode */}
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-blue-400 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.8)] transition-all duration-500 scale-100 group-hover:scale-150" />
                      <span className="text-[10px] font-mono text-white/30 tracking-[0.2em] uppercase group-hover:text-white/70 transition-colors">Principle // {String(index + 1).padStart(2, '0')}</span>
                    </div>

                    <h3
                      className={`font-light leading-snug text-white/80 group-hover:text-white transition-colors duration-500
                        ${isHero ? 'text-4xl md:text-5xl lg:text-6xl mb-8' : ''}
                        ${isStandard ? 'text-2xl md:text-3xl mb-4' : ''}
                        ${isWide ? 'text-3xl md:text-4xl lg:text-5xl' : ''}
                      `}
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {section.title}
                    </h3>

                    {/* Retracting rule line on hero */}
                    {isHero && (
                      <div className="w-12 h-[1px] bg-white/20 mt-8 group-hover:w-24 group-hover:bg-white/50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    )}
                  </div>

                  {/* Body Paragraph */}
                  <div className={`${isWide ? 'md:w-7/12 border-t md:border-t-0 md:border-l border-white/10 md:pl-16 pt-8 md:pt-0' : 'mt-auto pt-8 border-t border-white/5 group-hover:border-white/15 transition-colors duration-500'}`}>
                    <p className={`text-white/50 leading-relaxed group-hover:text-white/80 transition-colors duration-500
                      ${isHero ? 'text-xl md:text-2xl max-w-xl font-light' : 'text-base md:text-lg'}
                    `}>
                      {section.description}
                    </p>
                  </div>
                </div>

                {/* Premium corner actionable icon */}
                <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:bg-white/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <ArrowUpRight className="w-4 h-4 text-white/70" />
                </div>
              </SpotlightButton>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes ambientDrift {
          0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
          33% { transform: translate(-45%, -55%) rotate(120deg) scale(1.1); }
          66% { transform: translate(-55%, -45%) rotate(240deg) scale(0.9); }
          100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
        }
        .ambient-orb {
          animation: ambientDrift 25s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
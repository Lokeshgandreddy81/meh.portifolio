import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import siteConfig from '../config/siteConfig';
import LotusFlower from './decorative/LotusFlower';
import BotanicalLeaf from './decorative/BotanicalLeaf';
import ProjectAccessModal from './ProjectAccessModal';
import useScrollReveal from '../hooks/useScrollReveal';

const WorkSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const [saraRef, saraVisible] = useScrollReveal({ threshold: 0.3, delay: 0 });
  const [vaagishaRef, vaagishaVisible] = useScrollReveal({ threshold: 0.3, delay: 0 });

  const handleProjectClick = (projectName) => {
    setSelectedProject(projectName);
    setModalOpen(true);
  };

  return (
    <>
      <ProjectAccessModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        projectName={selectedProject}
      />

      <section className="py-0">
        <div className="w-full">
          {/* Sara.ai Section - Text Left, Decoration Right */}
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 border-b section-border min-h-screen">
            <div
              ref={saraRef}
              className="px-6 py-12 md:px-16 md:py-24 flex flex-col justify-center section-border md:border-r border-t md:border-t-0"
            >
              {/* Premium Company Logo */}
              <div
                className="group w-24 h-24 rounded-3xl flex items-center justify-center mb-8 md:mb-12 relative overflow-hidden cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)',
                  border: '2px solid var(--border)',
                  opacity: saraVisible ? 1 : 0,
                  transform: saraVisible ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(-20deg)',
                  transition: 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s'
                }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                {/* Rotating border effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))',
                    animation: 'spin 3s linear infinite',
                    filter: 'blur(8px)'
                  }}
                />

                {/* Letter */}
                <span
                  className="relative z-10 text-5xl font-bold text-foreground group-hover:scale-110 transition-all duration-500"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    textShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
                  }}
                >
                  {siteConfig.workExperiences[0].logo}
                </span>
              </div>

              {/* Title */}
              <h2
                className="text-4xl md:text-5xl font-light leading-tight mb-6 md:mb-8 text-foreground"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  opacity: saraVisible ? 1 : 0,
                  transform: saraVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
                }}
              >
                {siteConfig.workExperiences[0].title}
              </h2>

              {/* Description */}
              <div className="text-muted text-lg leading-relaxed space-y-4 mb-8 md:mb-12">
                {siteConfig.workExperiences[0].descriptions.map((desc, index) => (
                  <p
                    key={index}
                    style={{
                      opacity: saraVisible ? 1 : 0,
                      transform: saraVisible ? 'translateX(0)' : 'translateX(-20px)',
                      transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.6 + index * 0.1}s`
                    }}
                  >
                    {desc}
                  </p>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => handleProjectClick(siteConfig.workExperiences[0].company)}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 theme-button-border transition-all duration-300 group self-start cursor-pointer hover:scale-110"
                style={{
                  opacity: saraVisible ? 1 : 0,
                  transform: saraVisible ? 'scale(1)' : 'scale(0.8)',
                  transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.9s'
                }}
              >
                <ArrowRight className="w-6 h-6 text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300" />
              </button>
            </div>
            <div className="px-6 py-12 md:px-16 md:py-24 flex items-center justify-center">
              <LotusFlower className="decorative-svg w-3/4 h-3/4 md:w-full md:h-full" />
            </div>
          </div>

          {/* Vaagisha Section - Decoration Left, Text Right */}
          <div className="flex flex-col md:grid md:grid-cols-2 border-b section-border min-h-screen">
            <div className="px-6 py-12 md:px-16 md:py-24 flex items-center justify-center section-border md:border-r border-b md:border-b-0">
              <BotanicalLeaf className="decorative-svg w-3/4 h-3/4 md:w-full md:h-full" />
            </div>
            <div
              ref={vaagishaRef}
              className="px-6 py-12 md:px-16 md:py-24 flex flex-col justify-center"
            >
              {/* Premium Company Logo - Dual Letter */}
              <div
                className="group w-24 h-24 rounded-3xl flex items-center justify-center mb-8 md:mb-12 relative overflow-hidden cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(251, 146, 60, 0.1) 100%)',
                  border: '2px solid var(--border)',
                  opacity: vaagishaVisible ? 1 : 0,
                  transform: vaagishaVisible ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(20deg)',
                  transition: 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s'
                }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                {/* Rotating border effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(45deg, rgba(236, 72, 153, 0.3), rgba(251, 146, 60, 0.3))',
                    animation: 'spin 3s linear infinite',
                    filter: 'blur(8px)'
                  }}
                />

                {/* Letters */}
                <span
                  className="relative z-10 text-3xl font-bold text-foreground group-hover:scale-110 transition-all duration-500"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    letterSpacing: '0.05em',
                    textShadow: '0 0 20px rgba(236, 72, 153, 0.3)'
                  }}
                >
                  {siteConfig.workExperiences[1].logo}
                </span>
              </div>

              {/* Title */}
              <h2
                className="text-4xl md:text-5xl font-light leading-tight mb-6 md:mb-8 text-foreground"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  opacity: vaagishaVisible ? 1 : 0,
                  transform: vaagishaVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
                }}
              >
                {siteConfig.workExperiences[1].title}
              </h2>

              {/* Description */}
              <p
                className="text-muted text-lg leading-relaxed mb-8 md:mb-12"
                style={{
                  opacity: vaagishaVisible ? 1 : 0,
                  transform: vaagishaVisible ? 'translateX(0)' : 'translateX(-20px)',
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
                }}
              >
                {siteConfig.workExperiences[1].description}
              </p>

              {/* CTA Button */}
              <button
                onClick={() => handleProjectClick(siteConfig.workExperiences[1].company)}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 theme-button-border transition-all duration-300 group self-start cursor-pointer hover:scale-110"
                style={{
                  opacity: vaagishaVisible ? 1 : 0,
                  transform: vaagishaVisible ? 'scale(1)' : 'scale(0.8)',
                  transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.8s'
                }}
              >
                <ArrowRight className="w-6 h-6 text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Premium animations */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default WorkSection;
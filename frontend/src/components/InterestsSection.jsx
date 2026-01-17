import React from 'react';
import { Code2, Headphones, BookOpen } from 'lucide-react';
import siteConfig from '../config/siteConfig';
import useScrollReveal from '../hooks/useScrollReveal';

const InterestsSection = () => {
  const [buildingRef, buildingVisible] = useScrollReveal({ threshold: 0.3, delay: 0 });
  const [learningRef, learningVisible] = useScrollReveal({ threshold: 0.3, delay: 150 });
  const [readingRef, readingVisible] = useScrollReveal({ threshold: 0.3, delay: 300 });

  return (
    <section className="py-0">
      <div className="w-full border-b section-border">
        {/* Interests Grid */}
        <div className="grid grid-cols-3">
          {/* Building */}
          <div
            ref={buildingRef}
            className="px-16 py-24 border-r section-border"
            style={{
              opacity: buildingVisible ? 1 : 0,
              transform: buildingVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <div className="icon-wrapper group">
              <Code2
                className="w-16 h-16 text-foreground mb-8 transition-all duration-500 group-hover:scale-110"
                strokeWidth={1}
                style={{
                  opacity: buildingVisible ? 1 : 0,
                  transform: buildingVisible ? 'rotate(0deg) scale(1)' : 'rotate(-20deg) scale(0.5)',
                  transition: 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s'
                }}
              />
            </div>
            <h3
              className="text-2xl font-semibold mb-6 text-foreground"
              style={{
                opacity: buildingVisible ? 1 : 0,
                transform: buildingVisible ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
              }}
            >
              Building:
            </h3>
            <ul className="space-y-3 text-muted text-lg">
              {siteConfig.interests.building.map((item, index) => (
                <li
                  key={index}
                  style={{
                    opacity: buildingVisible ? 1 : 0,
                    transform: buildingVisible ? 'translateX(0)' : 'translateX(-15px)',
                    transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${0.7 + index * 0.1}s`
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Learning */}
          <div
            ref={learningRef}
            className="px-16 py-24 border-r section-border"
            style={{
              opacity: learningVisible ? 1 : 0,
              transform: learningVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <div className="icon-wrapper group">
              <Headphones
                className="w-16 h-16 text-foreground mb-8 transition-all duration-500 group-hover:scale-110"
                strokeWidth={1}
                style={{
                  opacity: learningVisible ? 1 : 0,
                  transform: learningVisible ? 'rotate(0deg) scale(1)' : 'rotate(20deg) scale(0.5)',
                  transition: 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s'
                }}
              />
            </div>
            <h3
              className="text-2xl font-semibold mb-6 text-foreground"
              style={{
                opacity: learningVisible ? 1 : 0,
                transform: learningVisible ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
              }}
            >
              Learning:
            </h3>
            <ul className="space-y-3 text-muted text-lg">
              {siteConfig.interests.learning.map((item, index) => (
                <li
                  key={index}
                  style={{
                    opacity: learningVisible ? 1 : 0,
                    transform: learningVisible ? 'translateX(0)' : 'translateX(-15px)',
                    transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${0.7 + index * 0.1}s`
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Reading */}
          <div
            ref={readingRef}
            className="px-16 py-24"
            style={{
              opacity: readingVisible ? 1 : 0,
              transform: readingVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <div className="icon-wrapper group">
              <BookOpen
                className="w-16 h-16 text-foreground mb-8 transition-all duration-500 group-hover:scale-110"
                strokeWidth={1}
                style={{
                  opacity: readingVisible ? 1 : 0,
                  transform: readingVisible ? 'rotate(0deg) scale(1)' : 'rotate(-20deg) scale(0.5)',
                  transition: 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s'
                }}
              />
            </div>
            <h3
              className="text-2xl font-semibold mb-6 text-foreground"
              style={{
                opacity: readingVisible ? 1 : 0,
                transform: readingVisible ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
              }}
            >
              Reading:
            </h3>
            <ul className="space-y-3 text-muted text-lg">
              {siteConfig.interests.reading.map((item, index) => (
                <li
                  key={index}
                  style={{
                    opacity: readingVisible ? 1 : 0,
                    transform: readingVisible ? 'translateX(0)' : 'translateX(-15px)',
                    transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${0.7 + index * 0.1}s`
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Icon hover animations */}
      <style>{`
        .icon-wrapper {
          position: relative;
          display: inline-block;
        }

        .icon-wrapper:hover svg {
          filter: drop-shadow(0 0 8px currentColor);
        }

        @keyframes iconPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .icon-wrapper svg {
          animation: iconPulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default InterestsSection;
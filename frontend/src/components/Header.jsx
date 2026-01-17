import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Menu, X, Clock, Sparkles } from 'lucide-react';
import siteConfig from '../config/siteConfig';
import { useTheme } from '../context/ThemeContext';

const Header = ({ onMenuClick }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAvailable, setIsAvailable] = useState(true);
  const headerRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Advanced scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / windowHeight) * 100;

      setScrolled(scrollY > 20);
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Magnetic cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const formatTime = (date) => {
    const timeZones = {
      'et': 'America/New_York',
      'ist': 'Asia/Kolkata',
      'pst': 'America/Los_Angeles',
      'cst': 'America/Chicago',
      'gmt': 'Europe/London'
    };

    const timeZone = timeZones[siteConfig.timezone.toLowerCase()] || 'America/New_York';

    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: timeZone
    });
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuClick();
  };

  return (
    <>
      {/* Floating Pill Navigation */}
      <header
        ref={headerRef}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ${scrolled
            ? 'w-[95%] max-w-[1200px]'
            : 'w-[95%] max-w-[1300px]'
          }`}
        style={{
          animation: 'floatIn 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        {/* Scroll Progress Bar */}
        <div
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 rounded-full"
          style={{
            width: `${scrollProgress}%`,
            opacity: scrollProgress > 5 ? 1 : 0
          }}
        />

        {/* Main Navigation Container - Premium Pill */}
        <div
          className={`relative backdrop-blur-2xl border transition-all duration-500 ${scrolled
              ? 'bg-background/98 border-border shadow-2xl rounded-full py-3 px-6'
              : 'bg-background/95 border-border/60 shadow-xl rounded-full py-4 px-8'
            }`}
          style={{
            boxShadow: scrolled
              ? '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 1px rgba(255, 255, 255, 0.1) inset'
              : '0 10px 40px rgba(0, 0, 0, 0.2), 0 0 1px rgba(255, 255, 255, 0.05) inset'
          }}
        >
          <div className="flex items-center justify-between gap-8">
            {/* Left Section - Branding & Status */}
            <div className="flex items-center gap-6">
              {/* Availability Indicator */}
              <div
                className="group flex items-center gap-2.5 cursor-pointer"
                style={{
                  animation: 'fadeSlideIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s backwards'
                }}
              >
                <div className="relative">
                  <div className={`w-2 h-2 rounded-full ${isAvailable ? 'bg-green-500' : 'bg-orange-500'}`}>
                    <div className={`absolute inset-0 rounded-full ${isAvailable ? 'bg-green-500' : 'bg-orange-500'} animate-ping opacity-75`} />
                  </div>
                </div>
                <span className="text-xs font-medium text-foreground/80 group-hover:text-foreground transition-colors hidden md:inline">
                  {isAvailable ? 'Available' : 'Busy'}
                </span>
              </div>

              {/* Domain with hover effect */}
              <div
                className="group relative cursor-pointer hidden md:block"
                style={{
                  animation: 'fadeSlideIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s backwards'
                }}
              >
                <span className="text-sm text-muted group-hover:text-foreground transition-all duration-300 font-medium">
                  lokesh-ai-portfolio
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500" />
              </div>
            </div>

            {/* Center Section - Time & Location */}
            <div
              className="flex items-center gap-4 text-sm"
              style={{
                animation: 'fadeSlideIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s backwards'
              }}
            >
              {/* Location */}
              <div className="hidden lg:flex items-center gap-2 text-muted hover:text-foreground transition-colors cursor-pointer group">
                <Sparkles className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-medium">{siteConfig.location}</span>
              </div>

              {/* Separator */}
              <div className="hidden lg:block w-px h-4 bg-border" />

              {/* Live Clock */}
              <div className="flex items-center gap-2 group cursor-pointer">
                <Clock className="w-3.5 h-3.5 text-muted group-hover:rotate-180 transition-all duration-500" />
                <span className="font-mono text-muted group-hover:text-foreground transition-colors tabular-nums">
                  {formatTime(currentTime)}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-muted/60">
                  {siteConfig.timezone}
                </span>
              </div>
            </div>

            {/* Right Section - Controls */}
            <div
              className="flex items-center gap-3"
              style={{
                animation: 'fadeSlideIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s backwards'
              }}
            >
              {/* Theme Toggle - Premium Button */}
              <button
                onClick={toggleTheme}
                className="group relative p-3 rounded-full overflow-hidden hover:scale-110 active:scale-95 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                {/* Background */}
                <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                {/* Icon Container */}
                <div className="relative z-10 w-5 h-5">
                  {theme === 'dark' ? (
                    <Sun
                      className="w-5 h-5 text-foreground absolute inset-0 transition-all duration-500 group-hover:rotate-180 group-hover:scale-110"
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(250, 204, 21, 0.5))'
                      }}
                    />
                  ) : (
                    <Moon
                      className="w-5 h-5 text-foreground absolute inset-0 transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110"
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))'
                      }}
                    />
                  )}
                </div>
              </button>

              {/* Morphing Menu Button */}
              <button
                onClick={handleMenuClick}
                className="group relative flex items-center gap-2.5 px-5 py-2.5 rounded-full overflow-hidden hover:scale-105 active:scale-95 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Animated background */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
                  }}
                />

                {/* Text */}
                <span className="relative z-10 text-sm font-medium text-foreground">
                  Menu
                </span>

                {/* Morphing Icon */}
                <div className="relative z-10 w-5 h-5">
                  <div
                    className="absolute inset-0 transition-all duration-500"
                    style={{
                      opacity: isMenuOpen ? 0 : 1,
                      transform: isMenuOpen ? 'rotate(180deg) scale(0.5)' : 'rotate(0deg) scale(1)',
                    }}
                  >
                    <Menu className="w-5 h-5 text-foreground" />
                  </div>
                  <div
                    className="absolute inset-0 transition-all duration-500"
                    style={{
                      opacity: isMenuOpen ? 1 : 0,
                      transform: isMenuOpen ? 'rotate(0deg) scale(1)' : 'rotate(-180deg) scale(0.5)',
                    }}
                  >
                    <X className="w-5 h-5 text-foreground" />
                  </div>
                </div>

                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-100 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Premium Animations & Keyframes */}
      <style>{`
        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translate(-50%, -40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
        }

        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Magnetic effect on hover */
        @media (min-width: 768px) {
          header button:hover {
            cursor: pointer;
          }
        }

        /* Smooth font rendering */
        header {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </>
  );
};

export default Header;
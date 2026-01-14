import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import siteConfig from '../config/siteConfig';
import { useTheme } from '../context/ThemeContext';

const Header = ({ onMenuClick }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
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
      second: '2-digit',
      hour12: true,
      timeZone: timeZone
    }) + ' ' + siteConfig.timezone.toLowerCase();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1400px] mx-auto px-4 py-4 md:px-8 md:py-6 flex items-center justify-between">
        <div className="flex items-center gap-6 text-sm text-muted">
          <span className="hover:text-foreground transition-colors cursor-pointer">lokesh-ai-portfolio.vercel.app</span>
          <span className="hidden md:inline">·</span>
          <span className="hidden md:inline">{siteConfig.location}</span>
          <span className="hidden md:inline">·</span>
          <span className="hidden md:inline font-mono">{formatTime(currentTime)}</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 text-muted hover:text-foreground transition-colors rounded-full hover:bg-accent"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={onMenuClick}
            className="flex items-center gap-3 text-sm text-muted hover:text-foreground transition-colors"
          >
            <span>Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
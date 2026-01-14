import React, { useState, useEffect } from 'react';
import { Moon } from 'lucide-react';
import siteConfig from '../config/siteConfig';

const Header = ({ onMenuClick }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-6 text-sm text-[#999]">
          <span className="hover:text-[#e8e8e8] transition-colors cursor-pointer">lokesh-ai-portfolio.vercel.app</span>
          <span className="hidden md:inline">·</span>
          <span className="hidden md:inline">{siteConfig.location}</span>
          <span className="hidden md:inline">·</span>
          <span className="hidden md:inline font-mono">{formatTime(currentTime)}</span>
        </div>
        <button 
          onClick={onMenuClick}
          className="flex items-center gap-3 text-sm text-[#999] hover:text-[#e8e8e8] transition-colors"
        >
          <span>Menu</span>
          <Moon className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
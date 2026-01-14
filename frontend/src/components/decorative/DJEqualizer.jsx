import React from 'react';

const DJEqualizer = ({ className = "" }) => {
  return (
    <svg
      width="180"
      height="120"
      viewBox="0 0 180 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Equalizer bars */}
      <rect x="20" y="60" width="12" height="40" stroke="#666" strokeWidth="1.5" fill="none" opacity="0.4" />
      <rect x="40" y="30" width="12" height="70" stroke="#666" strokeWidth="1.5" fill="none" opacity="0.4" />
      <rect x="60" y="50" width="12" height="50" stroke="#666" strokeWidth="1.5" fill="none" opacity="0.4" />
      <rect x="80" y="20" width="12" height="80" stroke="#666" strokeWidth="1.5" fill="none" opacity="0.4" />
      <rect x="100" y="40" width="12" height="60" stroke="#666" strokeWidth="1.5" fill="none" opacity="0.4" />
      <rect x="120" y="35" width="12" height="65" stroke="#666" strokeWidth="1.5" fill="none" opacity="0.4" />
      <rect x="140" y="55" width="12" height="45" stroke="#666" strokeWidth="1.5" fill="none" opacity="0.4" />
      
      {/* Baseline */}
      <line x1="15" y1="105" x2="165" y2="105" stroke="#666" strokeWidth="1" opacity="0.3" />
      
      {/* Decorative waveform */}
      <path
        d="M10 10 Q30 5, 50 15 T90 10 Q110 5, 130 12 T170 8"
        stroke="#666"
        strokeWidth="1"
        fill="none"
        opacity="0.2"
      />
    </svg>
  );
};

export default DJEqualizer;
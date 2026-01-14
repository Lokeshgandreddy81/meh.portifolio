import React from 'react';

const DJEqualizer = ({ className = "" }) => {
  return (
    <svg
      width="220"
      height="150"
      viewBox="0 0 180 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Equalizer bars - thicker and more visible */}
      <rect x="20" y="60" width="14" height="40" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.6" />
      <rect x="42" y="30" width="14" height="70" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.6" />
      <rect x="64" y="50" width="14" height="50" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.6" />
      <rect x="86" y="20" width="14" height="80" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.6" />
      <rect x="108" y="40" width="14" height="60" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.6" />
      <rect x="130" y="35" width="14" height="65" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.6" />
      <rect x="152" y="55" width="14" height="45" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.6" />
      
      {/* Inner bars for depth */}
      <rect x="23" y="75" width="8" height="18" fill="currentColor" opacity="0.3" />
      <rect x="45" y="45" width="8" height="40" fill="currentColor" opacity="0.3" />
      <rect x="67" y="65" width="8" height="25" fill="currentColor" opacity="0.3" />
      <rect x="89" y="35" width="8" height="50" fill="currentColor" opacity="0.3" />
      <rect x="111" y="55" width="8" height="35" fill="currentColor" opacity="0.3" />
      <rect x="133" y="50" width="8" height="38" fill="currentColor" opacity="0.3" />
      <rect x="155" y="70" width="8" height="20" fill="currentColor" opacity="0.3" />
      
      {/* Baseline */}
      <line x1="15" y1="105" x2="170" y2="105" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      
      {/* Decorative waveform */}
      <path
        d="M10 10 Q30 5, 50 15 T90 10 Q110 5, 130 12 T170 8"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.4"
      />
      
      {/* Speaker dots */}
      <circle cx="27" cy="110" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="93" cy="110" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="159" cy="110" r="2" fill="currentColor" opacity="0.4" />
    </svg>
  );
};

export default DJEqualizer;
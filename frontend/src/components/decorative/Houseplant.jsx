import React from 'react';

const Houseplant = ({ className = "" }) => {
  return (
    <svg
      width="160"
      height="200"
      viewBox="0 0 160 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Pot */}
      <path
        d="M50 180 L55 200 L105 200 L110 180 Z"
        stroke="#666"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <line x1="45" y1="180" x2="115" y2="180" stroke="#666" strokeWidth="1.5" opacity="0.4" />
      
      {/* Main stems */}
      <path d="M70 180 Q65 150, 55 120" stroke="#666" strokeWidth="1.5" opacity="0.4" />
      <path d="M80 180 Q80 150, 80 120" stroke="#666" strokeWidth="1.5" opacity="0.4" />
      <path d="M90 180 Q95 150, 105 120" stroke="#666" strokeWidth="1.5" opacity="0.4" />
      
      {/* Large leaves */}
      <path
        d="M55 120 C40 110, 30 95, 35 80 C38 70, 48 68, 58 75 L55 120"
        stroke="#666"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M80 120 C80 105, 75 85, 80 70 C85 60, 95 60, 100 70 L85 115"
        stroke="#666"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M105 120 C120 110, 130 95, 125 80 C122 70, 112 68, 102 75 L105 120"
        stroke="#666"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      
      {/* Small leaves */}
      <path
        d="M65 140 C55 138, 50 132, 52 125 C54 120, 60 122, 65 125"
        stroke="#666"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M95 140 C105 138, 110 132, 108 125 C106 120, 100 122, 95 125"
        stroke="#666"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />
      
      {/* Leaf veins */}
      <path d="M48 95 L52 85" stroke="#666" strokeWidth="0.5" opacity="0.2" />
      <path d="M85 85 L88 75" stroke="#666" strokeWidth="0.5" opacity="0.2" />
      <path d="M112 95 L108 85" stroke="#666" strokeWidth="0.5" opacity="0.2" />
    </svg>
  );
};

export default Houseplant;
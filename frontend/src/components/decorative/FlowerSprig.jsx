import React from 'react';

const FlowerSprig = ({ className = "" }) => {
  return (
    <svg
      width="140"
      height="180"
      viewBox="0 0 140 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main stem */}
      <path
        d="M70 170 Q65 140, 70 110 T75 80 Q72 60, 75 40"
        stroke="#666"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      {/* Flower 1 */}
      <circle cx="75" cy="35" r="8" stroke="#666" strokeWidth="1" fill="none" opacity="0.4" />
      <circle cx="70" cy="30" r="4" stroke="#666" strokeWidth="1" fill="none" opacity="0.3" />
      <circle cx="80" cy="32" r="4" stroke="#666" strokeWidth="1" fill="none" opacity="0.3" />
      <circle cx="75" cy="40" r="4" stroke="#666" strokeWidth="1" fill="none" opacity="0.3" />
      
      {/* Side branch 1 */}
      <path
        d="M70 100 Q55 95, 45 90"
        stroke="#666"
        strokeWidth="1"
        opacity="0.3"
      />
      <circle cx="42" cy="88" r="5" stroke="#666" strokeWidth="1" fill="none" opacity="0.4" />
      <circle cx="38" cy="85" r="3" stroke="#666" strokeWidth="1" fill="none" opacity="0.3" />
      
      {/* Side branch 2 */}
      <path
        d="M72 120 Q85 115, 95 110"
        stroke="#666"
        strokeWidth="1"
        opacity="0.3"
      />
      <circle cx="98" cy="108" r="5" stroke="#666" strokeWidth="1" fill="none" opacity="0.4" />
      <circle cx="102" cy="105" r="3" stroke="#666" strokeWidth="1" fill="none" opacity="0.3" />
      
      {/* Leaves */}
      <path
        d="M68 140 C60 138, 55 142, 58 148 C60 152, 65 150, 68 145"
        stroke="#666"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M72 145 C80 143, 85 147, 82 153 C80 157, 75 155, 72 150"
        stroke="#666"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
};

export default FlowerSprig;
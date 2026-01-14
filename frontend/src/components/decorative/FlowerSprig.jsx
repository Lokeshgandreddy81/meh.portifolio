import React from 'react';

const FlowerSprig = ({ className = "" }) => {
  return (
    <svg
      width="170"
      height="220"
      viewBox="0 0 140 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main stem */}
      <path
        d="M70 170 Q65 140, 70 110 T75 80 Q72 60, 75 40"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        opacity="0.6"
      />
      {/* Flower 1 - larger */}
      <circle cx="75" cy="35" r="10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />
      <circle cx="70" cy="30" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="80" cy="32" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="75" cy="40" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="75" cy="35" r="3" fill="currentColor" opacity="0.5" />
      
      {/* Side branch 1 */}
      <path
        d="M70 100 Q55 95, 45 90"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.5"
      />
      <circle cx="42" cy="88" r="7" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />
      <circle cx="38" cy="85" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="42" cy="88" r="2.5" fill="currentColor" opacity="0.5" />
      
      {/* Side branch 2 */}
      <path
        d="M72 120 Q85 115, 95 110"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.5"
      />
      <circle cx="98" cy="108" r="7" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />
      <circle cx="102" cy="105" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="98" cy="108" r="2.5" fill="currentColor" opacity="0.5" />
      
      {/* Leaves */}
      <path
        d="M68 140 C60 138, 55 142, 58 148 C60 152, 65 150, 68 145"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M72 145 C80 143, 85 147, 82 153 C80 157, 75 155, 72 150"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      {/* Additional small buds */}
      <circle cx="70" cy="65" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
      <circle cx="73" cy="85" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
    </svg>
  );
};

export default FlowerSprig;
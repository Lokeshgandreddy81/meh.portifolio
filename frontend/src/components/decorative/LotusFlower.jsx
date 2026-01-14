import React from 'react';

const LotusFlower = ({ className = "" }) => {
  return (
    <svg
      width="240"
      height="240"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Lotus petals */}
      <path
        d="M100 150 C80 140, 70 120, 75 100 C80 80, 90 70, 100 75 L100 150Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M100 150 C120 140, 130 120, 125 100 C120 80, 110 70, 100 75 L100 150Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M100 75 C85 65, 70 60, 60 70 C50 80, 55 95, 65 105 L100 75Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M100 75 C115 65, 130 60, 140 70 C150 80, 145 95, 135 105 L100 75Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        opacity="0.6"
      />
      {/* Additional outer petals */}
      <path
        d="M65 105 C55 110, 45 120, 48 135 C50 145, 60 148, 72 145 L70 115"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M135 105 C145 110, 155 120, 152 135 C150 145, 140 148, 128 145 L130 115"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      {/* Center circle */}
      <circle cx="100" cy="100" r="10" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.7" />
      {/* Small dots */}
      <circle cx="95" cy="95" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="105" cy="95" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="100" cy="105" r="3" fill="currentColor" opacity="0.5" />
    </svg>
  );
};

export default LotusFlower;
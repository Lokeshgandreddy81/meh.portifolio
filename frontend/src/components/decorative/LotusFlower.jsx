import React from 'react';

const LotusFlower = ({ className = "" }) => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Lotus petals */}
      <path
        d="M100 150 C80 140, 70 120, 75 100 C80 80, 90 70, 100 75 L100 150Z"
        stroke="#666"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M100 150 C120 140, 130 120, 125 100 C120 80, 110 70, 100 75 L100 150Z"
        stroke="#666"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M100 75 C85 65, 70 60, 60 70 C50 80, 55 95, 65 105 L100 75Z"
        stroke="#666"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M100 75 C115 65, 130 60, 140 70 C150 80, 145 95, 135 105 L100 75Z"
        stroke="#666"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      {/* Center circle */}
      <circle cx="100" cy="100" r="8" stroke="#666" strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* Small dots */}
      <circle cx="95" cy="95" r="2" fill="#666" opacity="0.3" />
      <circle cx="105" cy="95" r="2" fill="#666" opacity="0.3" />
      <circle cx="100" cy="105" r="2" fill="#666" opacity="0.3" />
    </svg>
  );
};

export default LotusFlower;
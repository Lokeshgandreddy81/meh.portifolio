import React from 'react';

const BotanicalLeaf = ({ className = "" }) => {
  return (
    <svg
      width="220"
      height="260"
      viewBox="0 0 180 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main stem */}
      <path
        d="M90 200 L90 40"
        stroke="currentColor"
        strokeWidth="3"
        opacity="0.6"
      />
      {/* Leaves on left */}
      <path
        d="M90 60 C60 50, 40 60, 35 80 C30 100, 45 110, 65 105 L90 90"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M90 100 C65 95, 50 100, 45 115 C40 130, 50 140, 70 135 L90 125"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M90 140 C70 135, 55 145, 50 160 C45 175, 60 180, 75 175 L90 165"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        opacity="0.6"
      />
      {/* Leaves on right */}
      <path
        d="M90 70 C120 60, 140 70, 145 90 C150 110, 135 120, 115 115 L90 100"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M90 110 C115 105, 130 110, 135 125 C140 140, 130 150, 110 145 L90 135"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M90 150 C110 145, 125 155, 130 170 C135 185, 120 190, 105 185 L90 175"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        opacity="0.6"
      />
      {/* Top leaf */}
      <path
        d="M90 40 C80 30, 75 20, 80 10 C85 5, 95 5, 100 10 C105 20, 100 30, 90 40Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        opacity="0.6"
      />
      {/* Leaf veins */}
      <path d="M60 80 L50 75" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M55 95 L45 92" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M120 85 L130 80" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M125 100 L135 98" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    </svg>
  );
};

export default BotanicalLeaf;
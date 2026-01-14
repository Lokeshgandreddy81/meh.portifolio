import React from 'react';

const TreeIllustration = ({ className = "" }) => {
  return (
    <svg
      width="200"
      height="240"
      viewBox="0 0 160 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Trunk */}
      <path
        d="M75 200 L75 120 C75 110, 70 100, 72 90 L88 90 C90 100, 85 110, 85 120 L85 200"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        opacity="0.6"
      />
      {/* Foliage - organic blob shapes */}
      <path
        d="M80 100 C60 95, 45 85, 40 70 C35 55, 45 40, 60 38 C70 37, 75 45, 80 50 C85 45, 90 37, 100 38 C115 40, 125 55, 120 70 C115 85, 100 95, 80 100Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        opacity="0.6"
      />
      {/* Additional foliage detail */}
      <path
        d="M70 80 C60 78, 52 72, 50 65 C48 58, 52 50, 60 49 C65 48, 68 52, 70 55"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M90 80 C100 78, 108 72, 110 65 C112 58, 108 50, 100 49 C95 48, 92 52, 90 55"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      {/* Small branch details */}
      <path
        d="M75 110 C65 105, 55 100, 50 95"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.5"
      />
      <path
        d="M85 110 C95 105, 105 100, 110 95"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.5"
      />
      {/* Texture dots */}
      <circle cx="70" cy="60" r="2.5" fill="currentColor" opacity="0.4" />
      <circle cx="90" cy="55" r="2.5" fill="currentColor" opacity="0.4" />
      <circle cx="80" cy="70" r="2.5" fill="currentColor" opacity="0.4" />
      <circle cx="65" cy="75" r="2.5" fill="currentColor" opacity="0.4" />
      <circle cx="95" cy="72" r="2.5" fill="currentColor" opacity="0.4" />
    </svg>
  );
};

export default TreeIllustration;
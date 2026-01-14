import React from 'react';

const TreeIllustration = ({ className = "" }) => {
  return (
    <svg
      width="160"
      height="200"
      viewBox="0 0 160 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Trunk */}
      <path
        d="M75 200 L75 120 C75 110, 70 100, 72 90 L88 90 C90 100, 85 110, 85 120 L85 200"
        stroke="#666"
        strokeWidth="2"
        fill="none"
        opacity="0.4"
      />
      {/* Foliage - organic blob shapes */}
      <path
        d="M80 100 C60 95, 45 85, 40 70 C35 55, 45 40, 60 38 C70 37, 75 45, 80 50 C85 45, 90 37, 100 38 C115 40, 125 55, 120 70 C115 85, 100 95, 80 100Z"
        stroke="#666"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      {/* Small branch details */}
      <path
        d="M75 110 C65 105, 55 100, 50 95"
        stroke="#666"
        strokeWidth="1"
        opacity="0.3"
      />
      <path
        d="M85 110 C95 105, 105 100, 110 95"
        stroke="#666"
        strokeWidth="1"
        opacity="0.3"
      />
      {/* Texture dots */}
      <circle cx="70" cy="60" r="2" fill="#666" opacity="0.2" />
      <circle cx="90" cy="55" r="2" fill="#666" opacity="0.2" />
      <circle cx="80" cy="70" r="2" fill="#666" opacity="0.2" />
      <circle cx="65" cy="75" r="2" fill="#666" opacity="0.2" />
      <circle cx="95" cy="72" r="2" fill="#666" opacity="0.2" />
    </svg>
  );
};

export default TreeIllustration;
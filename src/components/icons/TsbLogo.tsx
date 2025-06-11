import React from 'react';

const TsbLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Simplified TSB-like logo representation. Replace with actual SVG if available. */}
    <rect x="5" y="5" width="30" height="30" rx="15" />
    <rect x="40" y="12" width="55" height="8" />
    <rect x="40" y="23" width="45" height="8" />
    <text x="19" y="29" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="white" textAnchor="middle">T</text>
  </svg>
);

export default TsbLogo;
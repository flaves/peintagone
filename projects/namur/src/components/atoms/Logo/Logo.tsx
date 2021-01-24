import React from 'react';

const Logo = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="67">
      <rect fill="#ddd" width="50" height="67" />
      <text
        fill="rgba(0,0,0,0.5)"
        fontFamily="sans-serif"
        fontSize="30"
        dy="10.5"
        fontWeight="bold"
        x="50%"
        y="50%"
        textAnchor="middle"
      >
        Logo
      </text>
    </svg>
  );
};

export default Logo;

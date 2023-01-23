import React from 'react';

type LogoProps = {
  size: number;
};

const Logo = ({ size = 24 }: LogoProps) => {
  return (
    <h3
      style={{ fontSize: size + 'px' }}
      className="inline-block font-black text-transparent bg-gradient-to-r bg-clip-text from-emerald-600 to-teal-500 padding-none margin-none"
    >
      NiekForm
    </h3>
  );
};

export default Logo;

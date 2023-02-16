import React from 'react';

type LogoProps = {
  size: number;
};

const Logo = ({ size = 24 }: LogoProps) => {
  return <img src="/img/niekform-logo-sm.png" className="h-16"></img>;
};

export default Logo;

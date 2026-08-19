'use client';

import React from 'react';
import Link from 'next/link';

interface WearGuardLogoProps {
  className?: string;
  imgClassName?: string;
  isLight?: boolean;
}

export const WearGuardLogo: React.FC<WearGuardLogoProps> = ({ 
  className = '',
  imgClassName = ''
}) => {
  return (
    <Link href="/" className={`inline-flex items-center group ${className}`}>
      <img 
        src="/images/wearguard-logo.svg" 
        alt="WEARGUARD" 
        className={`h-10 sm:h-12 lg:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${imgClassName}`}
      />
    </Link>
  );
};

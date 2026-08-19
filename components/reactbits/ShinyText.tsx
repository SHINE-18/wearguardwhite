'use client';

import React from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 4,
  className = '',
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block ${
        disabled
          ? ''
          : 'bg-[200%_auto] bg-clip-text text-transparent animate-shimmer font-semibold'
      } ${className}`}
      style={{
        animationDuration,
        backgroundImage: disabled
          ? undefined
          : 'linear-gradient(120deg, #0b192c 0%, #a67c1e 35%, #d4a340 50%, #f5dc96 60%, #a67c1e 75%, #0b192c 100%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {text}
    </span>
  );
};

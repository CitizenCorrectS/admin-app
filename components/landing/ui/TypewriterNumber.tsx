// components/landing/ui/TypewriterNumber.tsx
"use client";
import { useEffect, useState } from "react";

interface TypewriterNumberProps {
  endNumber: number;
  duration?: number;
  className?: string;
}

export const TypewriterNumber = ({ 
  endNumber, 
  duration = 2000,
  className = "" 
}: TypewriterNumberProps) => {
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setDisplayNumber(Math.floor(endNumber * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [endNumber, duration]);

  return <span className={className}>{displayNumber}</span>;
};
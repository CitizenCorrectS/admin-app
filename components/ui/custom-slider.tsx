"use client"
import { useRef } from 'react';
import { useSliderCalculations } from '@/hooks/use-slider-calculations';

interface CustomSliderProps {
  maxValue: number;
  pricePerUnit: number;
  onValueChange?: (value: number) => void;
  className?: string;
}

export const CustomSlider = ({ maxValue, pricePerUnit, onValueChange, className }: CustomSliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { value, isDragging, setIsDragging, updateValue } = useSliderCalculations({
    maxValue,
    pricePerUnit
  });

  const handleMouseMove = (clientX: number) => {
    if (!sliderRef.current || !isDragging) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const newValue = ((clientX - rect.left) / rect.width) * maxValue;
    updateValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <div 
      ref={sliderRef}
      className={`relative h-2 bg-gray-200 rounded-full cursor-pointer ${className}`}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMouseMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMouseMove(e.touches[0].clientX);
      }}
    >
      <div 
        className="absolute h-full bg-green-600 rounded-full"
        style={{ width: `${(value / maxValue) * 100}%` }}
      />
      <button
        style={{ left: `${(value / maxValue) * 100}%` }}
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-green-600 border-2 border-gray-100"
      />
    </div>
  );
};
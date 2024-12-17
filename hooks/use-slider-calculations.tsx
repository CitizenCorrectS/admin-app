import { useState, useCallback } from 'react';

interface SliderConfig {
  maxValue: number;
  pricePerUnit: number;
  multiplier?: number;
}

export const useSliderCalculations = ({ maxValue, pricePerUnit, multiplier = 84.74 }: SliderConfig) => {
  const [value, setValue] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  const calculateEstimatedCredits = useCallback(() => {
    return value * pricePerUnit * multiplier;
  }, [value, pricePerUnit, multiplier]);

  const updateValue = useCallback((newValue: number) => {
    setValue(Math.max(1, Math.min(newValue, maxValue)));
  }, [maxValue]);

  return {
    value,
    isDragging,
    setIsDragging,
    updateValue,
    estimatedCredits: calculateEstimatedCredits()
  };
};
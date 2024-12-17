'use client';

import { useState, useRef, useEffect } from 'react';
import { useSlider } from '@/components/slider-context';
import { BadgeIndianRupee, SunIcon, Fan, TreePineIcon, Sunset } from 'lucide-react';
// import { CustomSlider } from '@/components/ui/custom-slider';

// type Rotation = [number, number, number];

interface CustomSliderProps {
  maxSlider?: number;
  pricePerCredit?: number;
  iconDescription?: 'Hectares' | 'kW solar' | 'wind credits';
  icon?: 'tree' | 'solar' | 'wind';
}



export const TreeSlider = ({
    maxSlider = 100,
    pricePerCredit = 1.64,
    icon = 'tree'
}: CustomSliderProps) => {
    const { value, setValue } = useSlider();
    const [hectares, setHectares] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);

    const updateSliderValue = (clientX: number) => {
        if (sliderRef.current) {
          const rect = sliderRef.current.getBoundingClientRect();
          let newSlider = ((clientX - rect.left) / rect.width) * maxSlider;
          newSlider = Math.max(1, Math.min(newSlider, maxSlider));
          setHectares(newSlider);
          
          // Convert hectares to rotation (0 to Math.PI/2)
          const rotation = (newSlider / maxSlider) * (Math.PI / 2);
          setValue({ rotation: rotation }); // Update to match the context type
        }
      };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateSliderValue(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    updateSliderValue(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) updateSliderValue(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) updateSliderValue(e.touches[0].clientX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const estimatedCredits = hectares * pricePerCredit * 84.74;
  const iconConfig = {
    'solar': {
      icon: <SunIcon className="w-10 h-10 text-gray-100" />,
      description: 'kW solar'
    },
    'wind': {
      icon: <Fan className="w-10 h-10 text-gray-100" />,
      description: 'kW turbine'
    },
    'tree': {
      icon: <TreePineIcon className="w-10 h-10 text-gray-100" />,
      description: 'Hectares'
    }
  };
  
  // Then you can use it like this:
  const getIconAndDescription = (iconType: 'tree' | 'solar' | 'wind') => {
    return iconConfig[iconType] || iconConfig.tree;
  };

  
  useEffect(() => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const initialX = rect.left + rect.width * (hectares / maxSlider);
      updateSliderValue(initialX);
    }
  }, []);
  
  return (
    <div>
    <div className="relative w-full">      
    <div className="flex items-center justify-evenly gap-4 mb-8">
        <div className="bg-green-950 p-4 rounded-lg">
            <div className="flex flex-col items-center gap-2">
                <div className="flex flex-row items-center justify-between gap-2">
                {getIconAndDescription(icon).icon}
                    <p className="text-2xl text-white font-bold">{hectares.toFixed(0)}</p>
                </div>
                <div className="flex flex-row text-center items-center gap-2 w-[90px]">
                    <p className="text-gray-100 w-full">{getIconAndDescription(icon).description}</p>
                </div>
            </div>
        </div>
        <div className="bg-green-950 p-4 rounded-lg">
            <div className="flex flex-col items-center gap-2">
                <div className="flex flex-row items-center justify-between gap-2">
                    <BadgeIndianRupee className="w-10 h-10 text-gray-100" />
                    <p className="text-2xl text-white font-bold">{estimatedCredits.toFixed(0)}</p>
                </div>
                <div className="flex flex-row text-center items-center gap-2 w-[140px]">
                    <p className="text-gray-100 w-full">Estimated Value</p>
                </div>
            </div>
        </div>
    </div>
    <div 
        ref={sliderRef}
        className="relative h-2 bg-gray-200 rounded-full cursor-pointer w-[80%] mx-auto z-[10]"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
    >
        <div 
            className="absolute h-full bg-green-600 rounded-full"
            style={{ width: `${(hectares / maxSlider) * 100}%` }}
        />
            <button
                style={{ left: `${(hectares / maxSlider) * 100}%` }}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 z-[4] rounded-full bg-green-600 bg-clip-padding backdrop-filter border-2 border-gray-100 text-gray-100 drop-shadow-lg flex items-center justify-center hover:bg-green-600 hover:scale-105 transition-all duration-300"
            >
                <svg
                clipRule="evenodd"
                fillRule="evenodd"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                className="fill-gray-100"
                >
                <path d="M21.67 3.955l-2.825-2.202.665-.753 4.478 3.497-4.474 3.503-.665-.753 2.942-2.292h-4.162c-3.547.043-5.202 3.405-6.913 7.023 1.711 3.617 3.366 6.979 6.913 7.022h4.099l-2.883-2.247.665-.753 4.478 3.497-4.474 3.503-.665-.753 2.884-2.247h-4.11c-3.896-.048-5.784-3.369-7.461-6.858-1.687 3.51-3.592 6.842-7.539 6.858h-2.623v-1h2.621c3.6-.014 5.268-3.387 6.988-7.022-1.72-3.636-3.388-7.009-6.988-7.023h-2.621v-1h2.623c3.947.016 5.852 3.348 7.539 6.858 1.677-3.489 3.565-6.81 7.461-6.858h4.047z" />
                </svg>
            </button>
        </div>
        {/* <CustomSlider maxValue={maxHectares} pricePerUnit={pricePerCredit} onValueChange={setHectares} /> */}
    </div>
    </div>
  );
};
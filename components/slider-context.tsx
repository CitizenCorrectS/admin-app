'use client'
import React, { createContext, useContext, useState } from 'react';

type Rotation = [0, number, 0];

interface SliderContextType {
  value: {
    rotation: number;
  };
  setValue: React.Dispatch<React.SetStateAction<{
    rotation: number;
  }>>;
}

// const SliderContext = createContext<SliderContextType | undefined>(undefined);

// export const SliderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [value, setValue] = useState({ 
//     rotation: 0 
//   });

//   return (
//     <SliderContext.Provider value={{ value, setValue }}>
//       {children}
//     </SliderContext.Provider>
//   );
// };

// export const useSlider = () => {
//   const context = useContext(SliderContext);
//   if (!context) {
//     throw new Error('useSlider must be used within a SliderProvider');
//   }
//   return context;
// };


// import React, { createContext, useContext, useState } from 'react';

const SliderContext = createContext<SliderContextType | undefined>(undefined);


export const SliderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [value, setValue] = useState({ rotation:[Math.PI/2, Math.PI/2, Math.PI/2]});

  return (
    <SliderContext.Provider value={{ value, setValue }}>
      {children}
    </SliderContext.Provider>
  );
};

export const useSlider = () => {
  const context = useContext(SliderContext);
  if (!context) {
    throw new Error('useSlider must be used within a SliderProvider');
  }
  return context;
};
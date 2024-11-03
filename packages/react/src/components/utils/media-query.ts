// import { useState, useEffect } from 'react';

// // Define the shape of the screen size state
// interface ScreenSize {
//   width: number;
//   height: number;
// }

// export const useScreenSize = (): ScreenSize => {
//   // Initialize state with the current window dimensions
//   const [screenSize, setScreenSize] = useState<ScreenSize>({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   useEffect(() => {
//     // Handler to update the screen size state when the window resizes
//     const handleResize = () => {
//       setScreenSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };

//     // Add event listener for window resize
//     window.addEventListener('resize', handleResize);
    
//     // Clean up event listener on component unmount
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return screenSize;
// };
import { useState, useEffect } from 'react';

// Define the shape of the screen size and breakpoints state
interface ScreenSize {
  width: number;
  height: number;
  isXSmall: boolean;
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
  isXLarge: boolean;
}

// Define your breakpoint values (in pixels)
const breakpoints = {
  xSmall: 480,
  small: 768,
  medium: 1024,
  large: 1280,
  xLarge: 1536,
};

export const useScreenSize = (): ScreenSize => {
  // Initialize state with the current window dimensions and calculated breakpoints
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: window.innerWidth,
    height: window.innerHeight,
    isXSmall: window.innerWidth < breakpoints.xSmall,
    isSmall: window.innerWidth >= breakpoints.xSmall && window.innerWidth < breakpoints.small,
    isMedium: window.innerWidth >= breakpoints.small && window.innerWidth < breakpoints.medium,
    isLarge: window.innerWidth >= breakpoints.medium && window.innerWidth < breakpoints.large,
    isXLarge: window.innerWidth >= breakpoints.large,
  });

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      setScreenSize({
        width: innerWidth,
        height: innerHeight,
        isXSmall: innerWidth < breakpoints.xSmall,
        isSmall: innerWidth >= breakpoints.xSmall && innerWidth < breakpoints.small,
        isMedium: innerWidth >= breakpoints.small && innerWidth < breakpoints.medium,
        isLarge: innerWidth >= breakpoints.medium && innerWidth < breakpoints.large,
        isXLarge: innerWidth >= breakpoints.large,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};
import { useState, useEffect } from "react";

// Constants to define breakpoints
const MOBILE_BREAKPOINT = 952;

function useDeviceSize() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update state based on device size
    const handleResize = () => {
      if (window.innerWidth <= MOBILE_BREAKPOINT) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

export default useDeviceSize;

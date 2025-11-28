import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT_PX = 640;

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT_PX,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT_PX);
    };

    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

import { useEffect, useState } from "react";
import { mobileVersionBreakpoint } from "../../shared/utils/responsiveConfig";

export const useIsMobile = () => {
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleWindowWidth = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWindowInnerWidth(window.innerWidth), 150);
    };

    window.addEventListener("resize", handleWindowWidth);
    return () => window.removeEventListener("resize", handleWindowWidth);
  }, []);

  const isMobile = windowInnerWidth < mobileVersionBreakpoint;

  return { isMobile };
};

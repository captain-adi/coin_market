import { useEffect, useState } from "react";

export function useIsMobileOrTablet() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(() =>
    window.matchMedia("(max-width: 1024px)").matches // 1024px is a common breakpoint for tablets
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1024px)");
    const listener = () => setIsMobileOrTablet(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return isMobileOrTablet;
}
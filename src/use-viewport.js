import React, { createContext, useContext, useEffect, useState } from "react";

const ViewportContext = createContext({
  isMobile: window.innerWidth < 500,
  width: window.innerWidth,
  height: window.innerHeight,
});

export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 450);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 450);
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ViewportContext.Provider value={{ isMobile, width, height }}>
      {children}
    </ViewportContext.Provider>
  );
};

export function useViewport() {
  return useContext(ViewportContext);
}

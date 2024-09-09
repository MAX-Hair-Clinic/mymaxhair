import React from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        multiplier: 1.5,
        reloadOnContextChange: true,
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        {children}
      </main>
    </LocomotiveScrollProvider>
  );
};

export default SmoothScroll;

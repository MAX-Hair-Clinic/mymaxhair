import React, { useEffect, useRef } from "react";

interface SmoothScrollWrapperProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollWrapperProps> = ({ children }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollYRef = useRef(0);
  const currentScrollYRef = useRef(0);
  const velocityRef = useRef(0);
  const requestRef = useRef<number | null>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;

      if (!isInitialized.current) {
        currentScrollYRef.current = scrollYRef.current;
        isInitialized.current = true;
        window.scrollTo(0, scrollYRef.current);
      } else if (!requestRef.current) {
        requestRef.current = requestAnimationFrame(animateScroll);
      }
    };

    const animateScroll = () => {
      const targetY = scrollYRef.current;
      const currentY = currentScrollYRef.current;

      const stiffness = 0.4;
      const damping = 0.75;

      const springForce = stiffness * (targetY - currentY);
      velocityRef.current = damping * (velocityRef.current + springForce);

      const maxScrollY =
        document.documentElement.scrollHeight - window.innerHeight;
      const newScrollY = Math.min(
        Math.max(currentY + velocityRef.current, 0),
        maxScrollY
      );

      if (
        Math.abs(targetY - currentY) > 0.5 ||
        Math.abs(velocityRef.current) > 0.5
      ) {
        currentScrollYRef.current = newScrollY;
        window.scrollTo(0, newScrollY);

        requestRef.current = requestAnimationFrame(animateScroll);
      } else {
        requestRef.current = null;
        currentScrollYRef.current = targetY;
        window.scrollTo(0, targetY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main
      id="Smooth_Scroll"
      className="overflow-hidden flex-1"
      ref={scrollContainerRef}
    >
      {children}
    </main>
  );
};

export default SmoothScroll;

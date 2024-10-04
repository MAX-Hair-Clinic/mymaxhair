import React, { FC, ReactNode, useEffect, useRef } from "react";

interface MarqueeProps {
  children: ReactNode;
  direction: "left" | "right";
  speed?: number; // Speed in pixels per second
}

const Marquee: FC<MarqueeProps> = ({ children, direction, speed = 100 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content || !content.firstChild) return;

    // Clone the first child if it exists to append for a continuous loop
    const firstChild = content.firstChild.cloneNode(true);
    content.appendChild(firstChild); // Append the cloned node to the end

    let position = 0;
    const maxScrollWidth = content.scrollWidth / 2;

    const updatePosition = () => {
      if (direction === "left") {
        position -= speed / 60; // assuming 60 FPS
        if (-position >= maxScrollWidth) position = 0;
      } else {
        position += speed / 60;
        if (position >= 0) position = -maxScrollWidth;
      }

      content.style.transform = `translateX(${position}px)`;
      animationRef.current = requestAnimationFrame(updatePosition);
    };

    updatePosition();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [direction, speed, children]); // Added children as a dependency to re-run effect when children change

  return (
    <div
      ref={containerRef}
      className="overflow-hidden whitespace-nowrap w-full"
    >
      <div ref={contentRef} className="flex will-change-transform">
        {children}
      </div>
    </div>
  );
};

export default Marquee;

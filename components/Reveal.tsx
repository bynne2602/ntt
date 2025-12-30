import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number; // delay in seconds (e.g., 0.1, 0.2)
  className?: string;
  fullHeight?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({ children, width = 'fit-content', delay = 0, className = '', fullHeight = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Wait for animation (0.8s) + delay to finish before removing overflow hidden
          // This allows hover effects (shadows, transforms) to work properly after entrance
          const timeout = setTimeout(() => {
            setIsDone(true);
          }, 800 + (delay * 1000));
          
          observer.unobserve(entry.target); // Only animate once
          return () => clearTimeout(timeout);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before element is fully in view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={ref} 
      className={className}
      style={{ 
        width,
        position: 'relative',
        overflow: isDone ? 'visible' : 'hidden',
        height: fullHeight ? '100%' : 'auto'
      }}
    >
      <div
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(75px)',
          opacity: isVisible ? 1 : 0,
          transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
          height: fullHeight ? '100%' : 'auto'
        }}
      >
        {children}
      </div>
    </div>
  );
};

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealAnimationProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "fade" | "scale" | "blur";
  threshold?: number;
  rootMargin?: string;
};

export const RevealAnimation: React.FC<RevealAnimationProps> = ({
  children,
  className,
  delay = 0,
  direction = "fade",
  threshold = 0.1,
  rootMargin = "0px 0px -100px 0px",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  const animationClass = {
    up: "animate-slide-up",
    fade: "animate-fade-in",
    scale: "animate-scale-in",
    blur: "animate-blur-in",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0",
        isVisible && animationClass[direction],
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default RevealAnimation;

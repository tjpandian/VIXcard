import React, { useEffect, useRef, useState } from "react";

function AnimatedSection({ children, className = "", animation = "case", delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        } else {
          setIsVisible(false); // 👈 Reset when leaving viewport
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  const getAnimationClasses = () => {
    switch (animation) {
      case "fade-up":
        return `transform transition-all duration-700 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`;
      case "fade-in":
        return `transition-opacity duration-700 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`;
      case "scale":
        return `transform transition-all duration-700 ease-out ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`;
      case "fade-left":
        return `transform transition-all duration-700 ease-out ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
        }`;
      case "fade-right":
        return `transform transition-all duration-700 ease-out ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
        }`;
      case "rotate-left":
        return `transform transition-all duration-1000 ease-out ${
          isVisible
            ? "translate-x-0 opacity-100 rotate-[360deg]"
            : "-translate-x-12 opacity-0 rotate-0"
        }`;
      case "rotate-right":
        return `transform transition-all duration-1000 ease-out ${
          isVisible
            ? "translate-x-0 opacity-100 rotate-[360deg]"
            : "translate-x-12 opacity-0 rotate-0"
        }`;
      case "scroll-left":
        return `transform transition-all duration-1000 ease-out ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-[150px] opacity-0"
        }`;
      case "scroll-right":
        return `transform transition-all duration-1000 ease-out ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "translate-x-[150px] opacity-0"
        }`;
      default:
        return "";
    }
  };

  return (
    <div ref={ref} className={`${className} ${getAnimationClasses()}`}>
      {children}
    </div>
  );
}

export default AnimatedSection;

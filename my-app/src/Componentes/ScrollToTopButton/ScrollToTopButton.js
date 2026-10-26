import React, { useState, useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTopButton.css";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const animationFrame = useRef(null);

  // Mostra o botão apenas quando o usuário rola para baixo
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      if (animationFrame.current !== null) {
        window.cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    if (animationFrame.current !== null) {
      window.cancelAnimationFrame(animationFrame.current);
    }

    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";

    const startPosition = window.scrollY;
    const duration = 700;
    const startTime = performance.now();
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || startPosition <= 0) {
      window.scrollTo(0, 0);
      root.style.scrollBehavior = previousScrollBehavior;
      return;
    }

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const position = Math.round(startPosition * (1 - easedProgress));

      window.scrollTo(0, position);

      if (progress < 1) {
        animationFrame.current = window.requestAnimationFrame(animate);
      } else {
        animationFrame.current = null;
        window.scrollTo(0, 0);
        root.style.scrollBehavior = previousScrollBehavior;
      }
    };

    animationFrame.current = window.requestAnimationFrame(animate);
  };

  return (
    <button
      type="button"
      className="scroll-to-top"
      onClick={scrollToTop}
      aria-label="Voltar ao topo da página"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      hidden={!isVisible}
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTopButton;

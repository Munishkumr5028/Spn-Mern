import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const duration = 21; // in ms
    const start = window.scrollY;
    const startTime = performance.now();

    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const scroll = () => {
      const now = performance.now();
      const time = Math.min(1, (now - startTime) / duration);
      const timeFunction = easeInOutQuad(time);

      window.scrollTo(0, Math.ceil(start - start * timeFunction));

      if (time < 1) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  }, [pathname]);

  return null;
};

export default ScrollToTop;

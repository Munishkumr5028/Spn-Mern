import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";

const images = [
  "https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg",
  "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg",
  "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg",
  "https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg",
  "https://images.pexels.com/photos/256451/pexels-photo-256451.jpeg"
];

function Slider() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Fix transition when looping back
  useEffect(() => {
    if (index === images.length) {
      const timer = setTimeout(() => {
        trackRef.current.style.transition = "none";
        setIndex(0);
        trackRef.current.style.transform = `translateX(0%)`;

        // Force reflow and re-enable transition
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            trackRef.current.style.transition = "transform 0.6s ease-in-out";
          });
        });
      }, 600); // match your transition duration
      return () => clearTimeout(timer);
    }
  }, [index]);

  const handleClick = () => {
    setIndex((prev) => prev + 1);
  };

  return (
    <div className="slider-container" onClick={handleClick}>
      <div
        ref={trackRef}
        className="slider-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt={`slide-${i}`} className="slide" />
        ))}
        {/* Cloned first slide at the end */}
        <img src={images[0]} alt="clone-first" className="slide" />
      </div>
    </div>
  );
}

export default Slider;

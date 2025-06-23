import React, { useState } from "react";
import "./Gallery.css";

const galleryImages = Array.from(
  { length: 60 },
  (_, i) => `https://picsum.photos/300/200?random=${i + 1}`
);

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-marquee">
      <div className="gallery-grid">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => setSelectedImage(src)}
          >
            <img src={src} alt={`Gallery ${index + 1}`} />
            <span className="hover-border"></span>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Enlarged view" />
        </div>
      )}
    </div>
  );
}

export default Gallery;

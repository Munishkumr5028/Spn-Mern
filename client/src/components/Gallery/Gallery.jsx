import React from 'react';
import './Gallery.css';

const galleryImages = Array.from({ length: 60 }, (_, i) => `https://picsum.photos/300/200?random=${i + 1}`);

function Gallery() {
  return (
    <div className="gallery-marquee">
      <div className="gallery-grid">
        {galleryImages.concat(galleryImages).map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Gallery ${index + 1}`} />
            <span className="hover-border"></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
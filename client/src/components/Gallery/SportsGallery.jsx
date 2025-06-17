import React, { useState, useEffect } from "react";
import "./gallery.css";

function SportsGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const sportsImages = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/863926/pexels-photo-863926.jpeg?auto=compress&cs=tinysrgb&w=300",
      caption: "Cricket Final Match",
      event: "Annual Sports Meet 2024",
      date: "November 7, 2024",
      sport: "Cricket",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/863926/pexels-photo-863926.jpeg?auto=compress&cs=tinysrgb&w=300",
      caption: "Football Championship",
      event: "Inter-Departmental Tournament 2024",
      date: "October 20, 2024",
      sport: "Football",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/6296070/pexels-photo-6296070.jpeg?auto=compress&cs=tinysrgb&w=300",
      caption: "100m Sprint Finals",
      event: "Annual Sports Meet 2024",
      date: "November 6, 2024",
      sport: "Athletics",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=300",
      caption: "Basketball Semi-Finals",
      event: "Inter-Departmental Tournament 2024",
      date: "October 22, 2024",
      sport: "Basketball",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=300",
      caption: "Cricket Award Ceremony",
      event: "Annual Sports Meet 2024",
      date: "November 7, 2024",
      sport: "Cricket",
    },
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden"; // Disable background scrolling
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = ""; // Re-enable scrolling
  };

  // Handle Esc key to close lightbox
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape" && selectedImage) {
        closeLightbox();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [selectedImage]);

  return (
    <section className="gallery-section" id="sports-gallery">
      <div className="gallery-container">
        <h2>Sports Gallery</h2>
        <div className="gallery-grid">
          {sportsImages.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => openLightbox(item)}
            >
              <div className="gallery-image">
                <img src={item.image} alt={item.caption} loading="lazy" />
              </div>
              <div className="gallery-content">
                <span
                  className={`sport-type ${
                    item.sport === "Cricket"
                      ? "type-cricket"
                      : item.sport === "Football"
                      ? "type-football"
                      : item.sport === "Athletics"
                      ? "type-athletics"
                      : "type-basketball"
                  }`}
                >
                  {item.sport}
                </span>
                <p className="gallery-caption">{item.caption}</p>
                <p className="gallery-event">{item.event}</p>
                <p className="gallery-date">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox-modal" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage.image} alt={selectedImage.caption} />
            <p className="lightbox-caption">{selectedImage.caption}</p>
            <button className="lightbox-close" onClick={closeLightbox}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default SportsGallery;

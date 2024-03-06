import React, { useState, useEffect } from "react";
import "./gallery.css"; // Add your custom styles for the carousel
import img1 from "../../assets/gallery/pic1.JPG";
import img2 from "../../assets/gallery/pic2.JPG";
import img3 from "../../assets/gallery/pic3.JPG";
import img4 from "../../assets/gallery/pic4.JPG";

const Gallery = () => {
  const images = [img1, img2, img3, img4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <h1 className="gallery-title">Gallery</h1>
      <div className="carousel-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Image ${index + 1}`}
            className={index === currentImageIndex ? "active" : ""}
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;

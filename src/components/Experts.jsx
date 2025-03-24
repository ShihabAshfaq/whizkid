import React from 'react';

const Experts = ({ images }) => {
  return (
    <div className="sixth-page">
      <h2 className="sixth-page-heading">Trusted by Experts</h2>
      <div className="image-gallery">
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Evidence ${index + 1}`} 
            className="gallery-image" 
          />
        ))}
      </div>
    </div>
  );
};

export default Experts;
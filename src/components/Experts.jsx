import React from 'react';

const Experts = ({ images }) => {
  // To ensure the Red Dot award icon appears only once,
  // make sure the images array passed to this component contains unique values.
  // For demonstration, let's assume 'images' contains multiple entries but should only display once.
  // We can use a Set to filter out duplicates if that's the case:
  const uniqueImages = [...new Set(images)]; // This removes duplicates if present.

  return (
    <div className="sixth-page">
      <h2 className="sixth-page-heading">Trusted by Experts</h2>
      <div className="image-gallery">
        {uniqueImages.map((image, index) => (
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

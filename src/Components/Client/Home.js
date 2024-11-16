import React, { useState, useEffect } from 'react';
import '../../Assets/Styles/ProductSlider.css'; // Optional CSS for styling

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Define images array directly in this component
  const images = [
    require('../../Assets/Images/imageslider.webp'),
    require('../../Assets/Images/imageslider2.webp'),
    require('../../Assets/Images/imageslider3.webp')
  ];
  
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          {index === currentIndex && (
            <img src={image} alt={`product-${index}`} className="slider-image" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;

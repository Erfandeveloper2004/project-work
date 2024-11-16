import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
import '../../Assets/Styles/Shop.css';

const Mycomponents = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeLeft, setTimeLeft] = useState(8 * 60 * 60); // 8 hours in seconds
  const carouselRef = useRef(null); // Reference to the products grid

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
     .then(response => {
        setData(response.data);
        setLoading(false);
      })
     .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -150, // Adjust scroll distance as needed
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 150, // Adjust scroll distance as needed
        behavior: 'smooth',
      });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="shop-container">
      <div className="products-carousel">
        <div className="countdown-timer">
          <h1>پیشنهاد شگفت‌انگیز</h1> {formatTime(timeLeft)}
        </div>
        <button className="carousel-control left" onClick={scrollLeft}>
          &#10094;
        </button>
        <div className="products-grid" ref={carouselRef}>
          {data.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
        <button className="carousel-control right" onClick={scrollRight}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

const ProductItem = ({ product }) => (
  <div className="product-item">
    <img src={product.image} alt={product.title} className="product-image" />
    <h3 className="product-title">{product.title}</h3>
    <p className="product-price">Price: ${product.price.toFixed(2)}</p>
    <p className="product-rating">Rating: {product.rating.rate}/5 ({product.rating.count} reviews)</p>
    <button className="buy-button">Buy</button>
  </div>
);


export default Mycomponents;

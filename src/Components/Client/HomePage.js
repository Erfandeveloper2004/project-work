// HomePage.js
import React from 'react';
import Home from './Home'; // Adjust the path if needed
import Shop from './Shop'; // Adjust the path if needed
import '../../Assets/Styles/HomePage.css'; // Optional CSS for styling

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Home /> {/* Image slider */}
      <Shop /> {/* Product carousel */}
    </div>
  );
};

export default HomePage;

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Components/Public/Header';
import Footer from './Components/Public/Footer';
import HomePage from './Components/Client/HomePage'; // Import the combined HomePage component
import Logo from './digikala.svg';
import Logo1 from './cart.png';

const App = () => {
  return (
    <Router>
      <Header logo={Logo} cartLogo={Logo1} />
      <Routes>
        <Route path="*" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<HomePage />} /> {/* Render HomePage on /Home */}
        <Route path="/Shop" element={<HomePage />} /> {/* Optional: if you want /Shop to show HomePage as well */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

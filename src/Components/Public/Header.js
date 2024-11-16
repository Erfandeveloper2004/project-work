
import React from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/Styles/Header.css'; // Adjust the path to your CSS file

const Header = ({ logo, cartLogo }) => {
    return (
      <header className="shop-header">
        {/* Top banner */}
        <div className="top-banner">
          <p>بهترین فرصت خرید | حراج سرماه تا ۷ آبان</p>
        </div>
  
        {/* Main Header */}
        <div className="header-main">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Shop Logo" className="shop-logo" />
            </Link>
          </div>
  
          {/* Search Bar */}
          <div className="search-bar">
            <input type="text" placeholder="جستجو" />
          </div>
          
          
          <div className="header-actions">
            <div className="login-register">
              <button className="login-button"> ثبت نام | ورود</button>
             
            </div>
            <div className="cart-icon">
              <img src={cartLogo} alt="Cart" />
            </div>
          </div>
        </div>
  
        {/* Secondary Menu */}
        <div className="secondary-menu">
          
          <nav>
            
            <Link to="/category" className="category">دسته‌بندی کالاها</Link>
            <Link to="/discounts" className="khat1">|</Link>
            <Link to="/supermarket" className="market"> شگفت انگیزها</Link>
            <Link to="/supermarket" className="market"> سوپرمارکت </Link>
            <Link to="/giftcards" className="giftcards"> کارت هدیه</Link>
            <Link to="/discounts" className="offer"> پروفروشترین ها</Link>
            <Link to="/discounts" className="offer">تخفیف‌ ها و پیشنهاد ها</Link>
            <Link to="/discounts" className="khat">|</Link>
            <Link to="/faq" className="faq">سوالی دارید؟ </Link>
            <Link to="/faq" className="faq">در دیجیکالا بفروشید  </Link>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
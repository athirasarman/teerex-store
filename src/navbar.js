import React, { useState } from 'react';
import './navbar.css';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Teerex Store</div>
      <div className={`nav-items ${isOpen ? 'open' : ''}`}>                                             
        <a href="#about">Geektrust Challenge</a>
        <a href="#services">Products</a>
        <a href="#contact" className='cart-icon'><FaShoppingCart /></a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
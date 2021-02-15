import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <div className="navbar-container">
      <Link to="/" className="custom-link">
        <span className="logo">
          <i
            className={icon}
            style={{ marginRight: '4px', fontSize: '24px' }}
          ></i>
          {title}
        </span>
      </Link>

      <ul className="navbar">
        <li className="navbar-link">
          <Link to="/" className="custom-link">
            Home
          </Link>
        </li>

        <li className="navbar-link">
          <Link to="/about" className="custom-link">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

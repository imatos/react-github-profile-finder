import React from 'react';
import './Navbar.css';

const Navbar = ({ title, icon }) => {
  return (
    <div className="navbar-container">
      <span className="logo">
        <i
          className={icon}
          style={{ marginRight: '4px', fontSize: '24px' }}
        ></i>
        {title}
      </span>
      <div className="searchBox">
        <input
          className="search-input"
          type="text"
          placeholder="Search Github profile..."
        />
      </div>
    </div>
  );
};

export default Navbar;

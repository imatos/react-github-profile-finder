import React from 'react';
import SearchForm from '../shared/searchForm/SearchForm';
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
      <SearchForm />
    </div>
  );
};

export default Navbar;

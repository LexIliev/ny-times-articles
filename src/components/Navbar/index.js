import React from 'react';

import './styles.scss';

const Navbar = () => (
  <header className="navbar">
    <img
      className="navbar__menu"
      src={require('../../../assets/three-horizontal-lines.svg')}
      alt="Tree Horizontal Lines Icon"
    />
    <h2 className="navbar__title">NY Times Most Popular</h2>
    <div className="navbar__icons-wrapper">
      <img
        className="navbar__item"
        src={require('../../../assets/search.svg')}
        alt="Search Icon"
      />
      <img
        className="navbar__item"
        src={require('../../../assets/dots.svg')}
        alt="Dots Icon"
      />
    </div>
  </header>
);

export default Navbar;

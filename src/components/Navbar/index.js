import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Navbar = () => (
  <header className="navbar">
    <div className="navbar__title navbar_item">NY Times Most Popular</div>
    <div className="navbar__item">
      <NavLink to="/">Home</NavLink>
    </div>
  </header>
);

export default Navbar;

import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const menuIcon = require('../../../assets/three-horizontal-lines.svg');
const searchIcon = require('../../../assets/search.svg');
const dotsIcon = require('../../../assets/dots.svg');

const Navbar = ({ navigationTitle, menuIcon, searchIcon, dotsIcon }) => (
  <header className="navbar">
    <img
      className="navbar__menu"
      src={menuIcon}
      alt="Tree Horizontal Lines Icon"
    />
    <h2 className="navbar__title">{navigationTitle}</h2>
    <div className="navbar__icons-wrapper">
      <img className="navbar__item" src={searchIcon} alt="Search Icon" />
      <img className="navbar__item" src={dotsIcon} alt="Dots Icon" />
    </div>
  </header>
);

Navbar.defaultProps = {
  menuIcon: menuIcon,
  searchIcon: searchIcon,
  dotsIcon: dotsIcon,
};

Navbar.propTypes = {
  navigationTitle: PropTypes.string.isRequired,
  menuIcon: PropTypes.any.isRequired,
  searchIcon: PropTypes.any.isRequired,
  dotsIcon: PropTypes.any.isRequired,
};

export default Navbar;

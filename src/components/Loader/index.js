import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Loader = ({ loaderText }) => (
  <div>
    <h2 className="text">{loaderText}</h2>
  </div>
);

Loader.defaultProps = {
  loaderText: 'Loading...',
};

Loader.propTypes = {
  loaderText: PropTypes.string,
};

export default Loader;

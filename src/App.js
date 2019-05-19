import React from 'react';
import { withRouter } from 'react-router-dom';

import { Navbar } from './components';
import Routes from './routes';

const App = () => (
  <div>
    <Navbar onClick={() => {}} />
    <Routes />
  </div>
);

export default withRouter(App);

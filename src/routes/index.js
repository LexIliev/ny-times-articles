import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ArticlesContainer, ArticleDetailsContainer } from '../containers';

import { ROUTES } from './constants';

const Routes = () => (
  <Switch>
    <Route exact path={ROUTES.ROOT} component={ArticlesContainer} />
    <Route path={ROUTES.DETAILS} component={ArticleDetailsContainer} />
  </Switch>
);

export default Routes;

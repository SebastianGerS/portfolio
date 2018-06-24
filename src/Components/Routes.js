import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Views from '../Views';
import Header from './Header';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        render={() => (
          <div>
            <Header />
            <Views.Home />
          </div>
        )}
      />
    </Switch>
  </BrowserRouter>
);

export default Router;

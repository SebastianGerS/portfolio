import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Views from '../Views';
import Header from './Header';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <div>
            <Header />
            <Views.Home />
          </div>
        )}
      />
      <Route
        path="/portfolio"
        render={() => (
          <div>
            <Header />
            <Views.Portfolio />
          </div>
        )}
      />
      <Route
        path="/cv"
        render={() => (
          <div>
            <Header />
            <Views.Cv />
          </div>
        )}
      />
      <Route
        path="/links"
        render={() => (
          <div>
            <Header />
            <Views.Links />
          </div>
        )}
      />
    </Switch>
  </BrowserRouter>
);

export default Router;

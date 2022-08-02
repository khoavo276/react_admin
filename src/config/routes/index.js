import React from 'react';
import { Switch } from 'react-router-dom';
import AppRoute from './AppRoute';
import { ROUTES } from './routes';

const Routes = () => {
  return (
    <Switch>
      {ROUTES.map((route, i) => (
        <AppRoute key={i} {...route} />
      ))}
    </Switch>
  );
};

export default Routes;

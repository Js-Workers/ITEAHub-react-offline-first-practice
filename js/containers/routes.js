import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './app';

const Routes = () => {
  return (
    <div>
      <Route component={ App } />
      <Switch>
        <Route path='/foo' getComponent={
          (nextState, cb) =>
            require.ensure([], require => cb(null, require('../components/foo').default), 'foo')
        } />
      </Switch>
    </div>
  );
};

export default Routes;

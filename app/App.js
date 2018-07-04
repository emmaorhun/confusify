import React from 'react';
import {Switch, Route, withRouter} from 'react-router';
import RoutePropagator from '@shopify/react-shopify-app-route-propagator';

const Propagator = withRouter(RoutePropagator);

import Home from './Home';
import Settings from './Settings';
import NotFound from './NotFound';

export default function() {
  return (
    <React.Fragment>
    <link rel="stylesheet" href="https://sdks.shopifycdn.com/polaris/2.2.0/polaris.min.css" />
      <Propagator />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/settings" component={Settings}/>
        <Route exact path="/notfound" component={NotFound}/>
      </Switch>
    </React.Fragment>
  );
}

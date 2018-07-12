import React from 'react';
import {Switch, Route, withRouter} from 'react-router';
import RoutePropagator from '@shopify/react-shopify-app-route-propagator';
const Propagator = withRouter(RoutePropagator);

import Home from './routes/Home.js';
import NotFound from './routes/NotFound.js';
import CreateStar from './routes/CreateStar.js';
import AllProducts from './routes/AllProducts.js';
import AllGalaxies from './routes/AllGalaxies.js';
import CreateGalaxy from './routes/CreateGalaxy.js';

export default function() {
  return (
    <React.Fragment>
    <link rel="stylesheet" href="https://sdks.shopifycdn.com/polaris/2.2.0/polaris.min.css" />
      <Propagator />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/mystars" component={AllProducts}/>
        <Route exact path="/newstar" component={CreateStar}/>
        <Route exact path="/notfound" component={NotFound}/>
        <Route exact path="/mygalaxies" component={AllGalaxies}/>
        <Route exact path="/newgalaxy" component={CreateGalaxy}/>
      </Switch>
    </React.Fragment>
  );
}

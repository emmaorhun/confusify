import React from 'react';
import Fetch from 'react-fetch-component';
import {StarList, ProductList, WelcomeMessage} from '../components';
import {AppProvider, Page} from '@shopify/polaris';

export default function Home() {

  return (<AppProvider>
    <Page title="Starzaar" secondaryActions={[
        {
          content: 'Home',
          url: '/'
        }, {
          content: 'New Star',
          url: '/newstar'
        }, {
          content: 'My Stars',
          url: '/mystars'
        }, {
          content: 'My Galaxies',
          url: '/mygalaxies'
        }, {
          content: 'New Galaxy',
          url: '/newgalaxy'
        }
      ]}>
      <WelcomeMessage/>
      <StarList/>
    </Page>

  </AppProvider>)
}

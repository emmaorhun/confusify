import React from 'react';
import {GalaxyList} from '../components';
import {Page, AppProvider} from '@shopify/polaris'

export default function CreateProduct() {
  return (<AppProvider>
    <Page title='My Galaxies' secondaryActions={[
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
        }
      ]}>
      <GalaxyList/>
    </Page>
  </AppProvider>)
}

import React from 'react';
import {ProductList} from '../components';
import {Page, AppProvider} from '@shopify/polaris'

export default function CreateProduct() {
  return (<AppProvider>
    <Page title='My Stars' secondaryActions={[
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
      <ProductList/>
    </Page>
  </AppProvider>)
}

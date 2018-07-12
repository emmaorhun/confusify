import React from 'react';
import {NewStar} from '../components';
import {Page, AppProvider} from '@shopify/polaris'

export default function CreateProduct() {
  return (<AppProvider>
    <Page title='Create Star' secondaryActions={[
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
      <NewStar/>
    </Page>
  </AppProvider>)
}

import React from 'react';
import Fetch from 'react-fetch-component';
import {StarList, ProductList, WelcomeMessage} from '../components';
import {AppProvider, Page} from '@shopify/polaris';

export default function Home() {

  return (<AppProvider>
    <Page title="Home" secondaryActions={[
        {
          content: 'Home',
          url: '/'
        }, {
          content: 'Settings',
          url: '/settings'
        }, {
          content: 'New Product',
          url: '/createproduct'
        }
      ]}>
      <WelcomeMessage/>
      <ProductList/>
    </Page>

  </AppProvider>)
}

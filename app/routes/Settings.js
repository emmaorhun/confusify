import React from 'react';
import {
  AppProvider,
  Page,
  Card,
  Button,
  ResourceList,
  TextStyle,
  Avatar
} from '@shopify/polaris';

export default function Settings() {
  return (<AppProvider>
    <Page title='Settings' secondaryActions={[
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
      <Card sectioned="sectioned" title='Your store is perfect just the way it is :)'></Card>
    </Page>
  </AppProvider>)
}

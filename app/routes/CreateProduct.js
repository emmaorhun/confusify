import React from 'react';
import {NewProduct} from '../components';
import {Page, AppProvider} from '@shopify/polaris'

export default function CreateProduct() {
  return (
    <AppProvider>
      <Page title='Create Product...'   secondaryActions={[{content: 'Home', url:'/'},{content: 'Settings', url:'/settings'}, {content: 'New Product', url: '/createproduct' }]}>
      <NewProduct />
      </Page>
    </AppProvider>
  )
}

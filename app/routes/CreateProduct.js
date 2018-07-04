import React from 'react';
import {NewProduct} from '../components';
import {Page, AppProvider} from '@shopify/polaris'

export default function CreateProduct() {
  return (
    <AppProvider>
      <Page title='Create Goofy Product'>
      <NewProduct />
      </Page>
    </AppProvider>
  )
}

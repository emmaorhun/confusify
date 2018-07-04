import React from 'react';
import {NewProduct} from '../components';

export default function CreateProduct() {
  return (
    <AppProvider>
      <Page title='Create'>
      <NewProduct />
      </Page>
    </AppProvider>
  )
}

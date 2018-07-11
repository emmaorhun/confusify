import {StarList} from '../components';
import React from 'react';
import {AppProvider} from '@shopify/polaris';

export default function StarHome() {
  return (
    <AppProvider>
    <StarList/>
    </AppProvider>
  )
}

import React from 'react';
import Fetch from 'react-fetch-component';
import ProductList from './components/ProductList';
import {
  AppProvider,
  Page,
  Card,
  Button,
  ResourceList,
  TextStyle,
  Avatar,
} from '@shopify/polaris';

import ApolloClient, {gql} from 'apollo-boost';
import {ApolloProvider, Mutation, Query} from 'react-apollo';

const CREATE_PRODUCT = gql `
  mutation CreateProduct($product: ProductInput!) {
    productCreate(input: $product) {
      product {
        id
        title
        price
      }
    }
  }
`;

export default function Home() {

  return (<AppProvider>
    <Page title="Home" secondaryActions={[{content: 'Settings', url:'/settings'}]}>
    <ProductList />
    </Page>
  </AppProvider>)
}

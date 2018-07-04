import React from 'react';
import Fetch from 'react-fetch-component';
import {ProductList} from '../components';
import ApolloClient, {gql} from 'apollo-boost';
import {ApolloProvider, Mutation, Query} from 'react-apollo';
import {AppProvider, Page} from '@shopify/polaris';


export default function Home() {

  return (<AppProvider>
    <Page title="Home" secondaryActions={[{content: 'Settings', url:'/settings'}]}>
    <ProductList />
    </Page>
  </AppProvider>)

}

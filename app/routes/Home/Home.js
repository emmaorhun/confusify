import React from 'react';
import Fetch from 'react-fetch-component';
import {StarList, ProductList} from '../../components';
import ApolloClient, {gql} from 'apollo-boost';
import {ApolloProvider, Query} from 'react-apollo';
import {AppProvider, Page, Heading, Spinner} from '@shopify/polaris';
import ShopNameQuery from './ShopNameQuery'


export default function Home() {

  const client = new ApolloClient({
    fetchOptions: {
      credentials: 'include'
    }
  });


  return (<AppProvider>
      <ApolloProvider client={client}>
      <Page title="Home" secondaryActions={[{content: 'Home', url:'/'},{content: 'Settings', url:'/settings'}, {content: 'New Product', url: '/createproduct' }]}>
        <Query query={ShopNameQuery}>{
          ({loading, error, data}) => {
            if (loading)
              return(<Spinner size="small" color="teal" />);
            if (error)
              return `Error! ${error.message}`;
            const storeName = data.shop.name;
            return(<Heading>Let's get your shop, {storeName}, down to business!</Heading>);
          }
        }
        </Query>

        <ProductList />
      </Page>
    </ApolloProvider>
  </AppProvider>
  )
}

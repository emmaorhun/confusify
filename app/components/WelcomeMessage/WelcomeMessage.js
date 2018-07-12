import * as React from 'react';
import SHOP_NAME_QUERY from './ShopNameQuery'
import {ApolloProvider, Query} from 'react-apollo';
import ApolloClient from 'apollo-boost';
import {Heading, Spinner} from '@shopify/polaris';

export default function WelcomeMessage() {

  const client = new ApolloClient({
    fetchOptions: {
      credentials: 'include'
    }
  });

  return (<ApolloProvider client={client}>
    <Query query={SHOP_NAME_QUERY}>{
        ({loading, error, data}) => {
          if (loading)
            return (<Spinner size="small" color="teal"/>);
          if (error)
            return `Error! ${error.message}`;
          const storeName = data.shop.name;
          return (<Heading>Let's make your shop, {storeName}, out of this world!</Heading>);
        }
      }
      </Query>
  </ApolloProvider>)
}

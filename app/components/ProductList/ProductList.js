import * as React from 'react';
import AllProductsQuery from './AllProductsQuery'
import ApolloClient, {gql} from 'apollo-boost';
import {ApolloProvider, Mutation, Query} from 'react-apollo';
import {
  AppProvider,
  Page,
  Card,
  ResourceList,
  TextStyle,
  Avatar,
} from '@shopify/polaris';

export default function ProductList() {

  const client = new ApolloClient({
    fetchOptions: {
      credentials: 'include'
    }
  });

  return (
    <AppProvider>
      <ApolloProvider client={client}>
        <Query query={AllProductsQuery}>
          {
            ({loading, error, data}) => {
              if (loading)
                return "Loading...";
              if (error)
                return `Error! ${error.message}`;

              const products = data.shop.products.edges;
              return (
                <Card>
                  <ResourceList resourceName={{
                    singular: 'product',
                    plural: 'products'
                  }} items={products} renderItem={(item) => {
                    const {id, title, price} = item.node;
                    const media = <Avatar customer="customer" size="medium" name={title}/>;

                    return (<ResourceList.Item id={id} media={media} accessibilityLabel={`View details for ${title}`}>
                      <h3>
                        <TextStyle variation="strong">{title}</TextStyle>
                      </h3>
                      <div>{price}</div>
                    </ResourceList.Item>);
                }}/>
              </Card>
            );
            }
          }
        </Query>
      </ApolloProvider>
    </AppProvider>
  );
}

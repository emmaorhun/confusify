import React from 'react';
import Fetch from 'react-fetch-component';
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

const ALL_PRODUCTS = gql `
{
  shop {
    products(first: 5) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
}
`;

const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include'
  }
});

export default function Home() {
  return (<AppProvider>
    <Page>
      <ApolloProvider client={client}>
        <Heading>Products</Heading>
        <Query query={ALL_PRODUCTS}>
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
    </Page>
  </AppProvider>)
}

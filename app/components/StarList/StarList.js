import * as React from 'react';
import ApolloClient, {gql} from 'apollo-boost';
import {ApolloProvider, Query, Mutation} from 'react-apollo';
import NEW_PRODUCT_MUTATION from './NewProductMutation'
import Fetch from 'react-fetch-component';
import hiker from './hiker.png';
import {
  AppProvider,
  TextContainer,
  SkeletonBodyText,
  SkeletonDisplayText,
  Card,
  Button,
  Banner,
  TextStyle,
  ResourceList,
  Layout,
  Avatar
} from '@shopify/polaris';

function mutate(createProduct, name) {
  const productInput = {
    title: name,
    productType: 'Star'
  };

  createProduct({
    variables: {
      product: productInput
    }
  });

}

export default function StarList() {

  const client = new ApolloClient({
    fetchOptions: {
      credentials: 'include'
    }
  });

  return (
    <Layout>
      <Layout.Section oneHalf>
  
        <AppProvider>
          <ApolloProvider client={client}>
            <Fetch url="https://www.astropical.space/api.php?table=stars&which=distance&limit=20&format=json" as="json">
              {
                (fetchResults) => {
                  if (fetchResults.loading) {
                    return (<div>
                      <Card>
                        <Card sectioned="sectioned">
                          <TextContainer>
                            <SkeletonDisplayText size="small"/>
                            <SkeletonBodyText/>
                          </TextContainer>
                        </Card>
                        <Card sectioned="sectioned">
                          <TextContainer>
                            <SkeletonDisplayText size="small"/>
                            <SkeletonBodyText/>
                          </TextContainer>
                        </Card>
                        <Card sectioned="sectioned">
                          <TextContainer>
                            <SkeletonDisplayText size="small"/>
                            <SkeletonBodyText/>
                          </TextContainer>
                        </Card>
                      </Card>
                    </div>);
                  }

                  if (fetchResults.error) {
                    return (<p>failed to fetch games</p>)
                  }

                  if (fetchResults.data) {
                    let stars = fetchResults.data.hipstars;

                    for (let i = stars.length - 1; i >= 0; i--) {
                      if (stars[i].name == "") {
                        stars.splice(i, 1);
                      }
                    }

                    return (<Mutation mutation={NEW_PRODUCT_MUTATION}>
                      {
                        (createProduct, mutationResults) => {

                          const loading = mutationResults.loading && <Banner title="Loading...">
                            <p>Creating product</p>
                          </Banner>;

                          const error = mutationResults.error && <Banner title="Error" status="warning">
                            <p>Product could not be created</p>
                          </Banner>;

                          const success = mutationResults.data && (<Banner title="Success" status="success">
                            <p>Successfully created {mutationResults.data.productCreate.product.title}</p>
                          </Banner>);

                          return (<Card>
                            {loading}
                            {error}
                            {success}
                            <ResourceList resourceName={{
                                singular: 'star',
                                plural: 'stars'
                              }} showHeader={true} items={stars} renderItem={(star) => {
                                const {id, name, desig} = star;
                                const media = <Avatar customer="customer" size="medium" name={name}/>;
                                return (<ResourceList.Item id={id} media={media} accessibilityLabel={`View details for ${name}`}>
                                  <h3>
                                    <TextStyle variation="strong">{name}</TextStyle>
                                  </h3>
                                  <p>{desig}</p>
                                  <Button onClick={() => mutate(createProduct, name)}>Add star to store</Button>
                                </ResourceList.Item>);

                              }}/>
                          </Card>)
                        }
                      }
                    </Mutation>)
                  }
                }
              }
            </Fetch>
          </ApolloProvider>
        </AppProvider>

      </Layout.Section>

      <Layout.Section oneHalf>
        <img src={require('./hiker.png')} />
      </Layout.Section>

      </Layout>
  )

}

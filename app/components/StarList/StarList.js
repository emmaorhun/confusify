import * as React from 'react';
import ApolloClient, {gql} from 'apollo-boost';
import {ApolloProvider, Query} from 'react-apollo';
import Fetch from 'react-fetch-component';
import {AppProvider,
  Card,
  TextStyle,
  ResourceList,
  Avatar} from '@shopify/polaris';


export default function StarList() {

  const client = new ApolloClient({
    fetchOptions: {
      credentials: 'include'
    }
  });

  return (<AppProvider>
    <ApolloProvider client={client}>
      <Fetch url="https://www.astropical.space/astrodb/api.php?table=stars&which=distance&limit=30&format=json" as="json">
        {
          (fetchResults) => {
            if (fetchResults.loading) {
              return (<p>Loading</p>)
            }

            if (fetchResults.error) {
              return (<p>failed to fetch games</p>)
            }

            if (fetchResults.data) {

              let stars = fetchResults.data.hipstars;

              for(let i = stars.length-1; i >=0; i--){
                if(stars[i].name == ""){
                  stars.splice(i,1);
                }
              }

              return(<Card>
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
                      </ResourceList.Item>);

                  }}/>
              </Card>);
            }
          }
        }
      </Fetch>
    </ApolloProvider>
  </AppProvider>)

}

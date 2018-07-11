import * as React from 'react';
import ApolloClient, {gql} from 'apollo-boost';
import {ApolloProvider, Query, Fetch} from 'react-apollo';
import {AppProvider} from '@shopify/polaris';

export default function StarList() {

  const client = new ApolloClient({
    fetchOptions: {
      credentials: 'include'
    }
  });

  return (<AppProvider>
    <ApolloProvider client={client}>

      <Fetch url="http://www.astropical.space/astrodb/api.php?table=stars&which=distance&limit=20&format=json" as="json">
        {
          (fetchResults) => {
            if (fetchResults.loading) {
              return <p>Loading</p>
            }

            if (fetchResults.error) {
              return <p>failed to fetch games</p>
            }

            console.log(fetchResults);
          }
        }
      </Fetch>
    </ApolloProvider>
  </AppProvider>)

}

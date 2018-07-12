import * as React from 'react';
import ALL_GALAXY_QUERY from './AllGalaxyQuery'
import ApolloClient, {gql} from 'apollo-boost';
import {ApolloProvider, Query, Mutation} from 'react-apollo';
import {
  AppProvider,
  Page,
  Card,
  ResourceList,
  TextStyle,
  Thumbnail,
  Avatar,
  SkeletonBodyText,
  SkeletonDisplayText,
  SkeletonPage,
  Button,
  TextContainer,
  Layout
} from '@shopify/polaris';

export default function GalaxyList() {

  const client = new ApolloClient({
    fetchOptions: {
      credentials: 'include'
    }
  });

  return (<AppProvider>
    <ApolloProvider client={client}>
        <Query query={ALL_GALAXY_QUERY}>
          {
            ({loading, error, data}) => {
              if (loading)
                return (<div>
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
                    </div>);
              if (error)
                return `Error! ${error.message}`;

              const galaxies = data.shop.collections.edges;
              console.log(galaxies);
              return(<Card>
                <ResourceList resourceName={{
                    singular: 'galaxy',
                    plural: 'galaxies'
                  }} showHeader={true} items={galaxies} renderItem={(galaxy) => {
                    const {id, title, description} = galaxy.node;
                    let media;
                    if(galaxy.node.image){
                      media =  <Thumbnail customer size="medium" source={galaxy.node.image.transformedSrc}/>
                    } else {
                      media = <Avatar customer={false} size="medium" initials={title[0]} />
                    }

                    return (<ResourceList.Item id={id} media={media} accessibilityLabel={`View details for ${title}`}>
                      <h3>
                        <TextStyle variation="strong">{title}</TextStyle>
                      </h3>
                      <p>{description}</p>
                    </ResourceList.Item>);
                  }}/>
              </Card>);
            }
          }
        </Query>
      </ApolloProvider>
  </AppProvider>);
}

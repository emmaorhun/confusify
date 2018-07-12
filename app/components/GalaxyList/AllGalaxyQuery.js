import{gql} from 'apollo-boost';

const ALL_GALAXY_QUERY = gql `
{
  shop {
    collections(first:10) {
      edges {
        node {
          id
          title
          productsCount
          description
          image{
            transformedSrc
          }
        }
      }
    }
  }
}
`;

export default ALL_GALAXY_QUERY;

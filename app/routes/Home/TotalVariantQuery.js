import{gql} from 'apollo-boost';

const TotalVariantQuery = gql `
{
  shop {
    products(first:10) {
      edges {
        node {
          totalVariants
        }
      }
    }
  }
}
`;

export default TotalVariantQuery;

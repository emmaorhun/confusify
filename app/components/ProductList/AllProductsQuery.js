import{gql} from 'apollo-boost';

const AllProductsQuery = gql `
{
  shop {
    products(first:10) {
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

export default AllProductsQuery;

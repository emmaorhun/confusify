import{gql} from 'apollo-boost';

const AllProductsQuery = gql `
{
  shop {
    products(first:10) {
      edges {
        node {
          id
          title
          variants(first: 1){
            edges{
              node{
                price
              }
            }
          }
        }
      }
    }
  }
}
`;

export default AllProductsQuery;

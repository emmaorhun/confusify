import {gql} from 'apollo-boost';

const NewProductQuery = gql`
  mutation CreateProduct($product: ProductInput!) {
    productCreate(input: $product) {
      product {
        id
        title
      }
    }
  }
`;

export default NewProductQuery;

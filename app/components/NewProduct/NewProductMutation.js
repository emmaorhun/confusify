import {gql} from 'apollo-boost';

const NewProductMutation = gql`
  mutation CreateProduct($product: ProductInput!) {
    productCreate(input: $product) {
      product {
        id
        title
      }
    }
  }
`;

export default NewProductMutation;

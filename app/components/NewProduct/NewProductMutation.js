import {gql} from 'apollo-boost';
import { graphql } from 'react-apollo'
import NewProduct from './NewProduct'

const NEW_PRODUCT_MUTATION = gql`
  mutation CreateProduct($product: ProductInput!) {
    productCreate(input: $product) {
      product {
        id
        title
      }
    }
  }
`;

export default NEW_PRODUCT_MUTATION;

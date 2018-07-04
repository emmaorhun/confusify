import {gql} from 'apollo-boost';

const ShopNameQuery = gql`
  query {
    shop {
      name
    }
  }
`;

export default ShopNameQuery;

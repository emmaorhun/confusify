import {gql} from 'apollo-boost';

const SHOP_NAME_QUERY = gql`
  query {
    shop {
      name
    }
  }
`;

export default SHOP_NAME_QUERY;

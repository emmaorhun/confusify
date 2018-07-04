import * as React from 'react';
import NewProductQuery from './NewProductQuery'
import ApolloClient, {gql} from 'apollo-boost';
import {ApolloProvider, Mutation, Query} from 'react-apollo';
import {
  Form,
  FormLayout,
  Card,
  TextField,
  Button
} from '@shopify/polaris';

class NewProduct extends React.Component {

  state = {
    title: ''
  };

  render() {
      const {title} = this.state;

      return (
        <Form onSubmit={this.handleSubmit}>
          <FormLayout>
            <TextField
              value={title}
              onChange={this.handleChange('title')}
              label="Title"
              type="text"
              helpText={
                <span>
                  This will be the name of your product.
                </span>
              }
            />

            <Button submit>Submit</Button>
          </FormLayout>
        </Form>
      );
    }

    handleSubmit = (event) => {
      this.setState({title: ''});
    };

    handleChange = (field) => {
      return (value) => this.setState({[field]: value});
    };

}
export default NewProduct;

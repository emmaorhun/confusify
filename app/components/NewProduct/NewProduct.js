import * as React from 'react';
import ApolloClient, {gql} from 'apollo-boost';
import NEW_PRODUCT_MUTATION from './NewProductMutation'
import {ApolloProvider, Mutation, Query, graphql} from 'react-apollo';
import {
  Form,
  FormLayout,
  Card,
  TextField,
  Button,
  Banner
} from '@shopify/polaris';

class NewProduct extends React.Component {

  state = {
    title: '',
    price: 0,
    description: ''
  };

  handleChange = (field) => {
    return(value) => this.setState({[field]: value});
  };

  render() {

    const client = new ApolloClient({
      fetchOptions: {
        credentials: 'include'
      }
    });

    const {title, price, description} = this.state;

    function mutate(createProduct, mutationResults) {
      const productInput = {
        title: description,
        bodyHtml: title
      };

      createProduct({
        variables: {
          product: productInput
        }
      });

      console.log(productInput);
    }

    return (<ApolloProvider client={client}>

      <Mutation mutation={NEW_PRODUCT_MUTATION}>
        {
          (createProduct, mutationResults) => {

            const loading = mutationResults.loading && <Banner title="Loading...">
              <p>Creating product</p>
            </Banner>;

            const error = mutationResults.error && <Banner title="Error" status="warning">
              <p>Product could not be created</p>
            </Banner>;

            const success = mutationResults.data && (<Banner title="Success" status="success">
              <p>Successfully created {mutationResults.data.productCreate.product.title}</p>
            </Banner>);

            return (<Card sectioned="sectioned">
              <Form onSubmit={this.handleSubmit}>
                <FormLayout>
                  <TextField value={title} onChange={this.handleChange('title')} label="Title" type="text" helpText={<span> This will be the name of your product ...Hehe ...</span>}/>
                  <TextField value={price} label="Price" type="number" onChange={this.handleChange('price')} helpText={<span> Do not even worry about the currency </span>}/>
                  <TextField value={description} multiline={3} label="Description" type="text" onChange={this.handleChange('description')} helpText={<span> You might want to remember what your intentions were </span>}/>
                  <Button onClick={() => mutate(createProduct, mutationResults)}>Submit</Button>
                </FormLayout>
              </Form>
              {loading}
              {error}
              {success}
            </Card>)
          }
        }
      </Mutation>
    </ApolloProvider>);

  }
}
export default NewProduct;

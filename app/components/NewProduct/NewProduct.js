import * as React from 'react';
import NewProductMutation from './NewProductMutation'
import ApolloClient, {gql} from 'apollo-boost';
import {ApolloProvider, Mutation, Query} from 'react-apollo';
import {Form, FormLayout, Card, TextField, Button} from '@shopify/polaris';

class NewProduct extends React.Component {

  state = {
    title: '',
    price: 0
  };

  render() {

    const {title, price} = this.state;

    handleChange = (field) => {
      return(value) => this.setState({[field]: value});
    };

    return (<Card sectioned="sectioned">
      <Form onSubmit={this.handleSubmit}>
        <FormLayout>
          <TextField value={title} onChange={this.handleChange('title')} label="Title" type="text" helpText={<span> This will be the name of your product ...Hehe ...</span>}/>
          <TextField value={price} label="Price" type="number" onChange={this.handleChange('price')} helpText={<span> Do not even worry about the currency </span>}/>
          <Button submit="submit">Submit</Button>
        </FormLayout>
      </Form>
    </Card>);



    handleSubmit = (event) => {
      console.log(this.state.title);

      const client = new ApolloClient({
        fetchOptions: {
          credentials: 'include'
        }
      });

      <ApolloProvider client={client}>
        <Mutation mutation={NewProductMutation}>
          {
            (createProduct, mutationResults) => {
              const loading = mutationResults.loading && <p>loading...
              </p>;

              const error = mutationResults.error && <p>error creating product</p>;

              const success = mutationResults.data && (<p>
                successfully created &nbsp; {mutationResults.data.productCreate.product.title}
              </p>);

              const productInput = {
                title: this.state.title
              };

              createProduct({
                variables: {
                  product: productInput
                }
              });

              {loading} {error} {success}
          }
        }

          );
        </Mutation>
      </ApolloProvider>
    };
  }
}
export default NewProduct;

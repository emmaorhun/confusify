import * as React from 'react';
import ApolloClient, {gql} from 'apollo-boost';
import NEW_COLLECTION_MUTATION from './NewCollectionMutation'
import {ApolloProvider, Mutation, Query, graphql} from 'react-apollo';
import {
  Form,
  FormLayout,
  Card,
  TextField,
  Button,
  Banner
} from '@shopify/polaris';

class NewGalaxy extends React.Component {

  state = {
    title: '',
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

    const {title, description} = this.state;

    function mutate(createCollection) {

      const collectionInput = {
        title: title,
        descriptionHtml: description
      };

      createCollection({
        variables: {
          collection: collectionInput
        }
      });

    }

    return (<ApolloProvider client={client}>

      <Mutation mutation={NEW_COLLECTION_MUTATION}>
        {
          (createCollection, mutationResults) => {

            const loading = mutationResults.loading && <Banner title="Loading...">
              <p>Creating collection</p>
            </Banner>;

            const error = mutationResults.error && <Banner title="Error" status="warning">
              <p>Collection could not be created</p>
            </Banner>;

            const success = mutationResults.data && (<Banner title="Success" status="success">
              <p>Successfully created {mutationResults.data.collectionCreate.collection.title}</p>
            </Banner>);

            return (<Card sectioned="sectioned">
              <Form onSubmit={this.handleSubmit}>
                <FormLayout>
                  <TextField value={title} onChange={this.handleChange('title')} label="Title" type="text" helpText={<span> This will be the name of your collection</span>}/>
                  <TextField value={description} multiline={3} label="Description" type="text" onChange={this.handleChange('description')} helpText={<span> Be descriptive </span>}/>
                  <Button onClick={() => mutate(createCollection)}>Submit</Button>
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
export default NewGalaxy;

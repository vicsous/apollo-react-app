import React from 'react';
import ReactDOM from 'react-dom';
import { useQuery, gql, ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

require('dotenv').config();

// our GraphQL query, stored as a variable
const GET_USERS = gql`
query{
    users{
      _id
      username
      email
    }
  }   
`;

function Home() {
    const { loading, data, error, fetchMore } = useQuery(GET_USERS)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>
    return (
        <div>
            <h1>{console.log(data)}!</h1>
        </div>
    );
};

// configure our API URI & cache
const uri = process.env.API_URI;
const cache = new InMemoryCache();

// configure Apollo Client
const client = new ApolloClient({
    uri,
    cache,
    connectToDevTools: true
});

function App (){
    return (
    <ApolloProvider client={client}>
        <Home />
    </ApolloProvider>
)}

ReactDOM.render(<App />, document.getElementById('root'));
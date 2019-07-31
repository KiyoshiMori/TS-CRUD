import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

const client = new ApolloClient({
    link: createHttpLink(),
    cache: new InMemoryCache(),
    ssrMode: true,
    connectToDevTools: true,
});

export default client;

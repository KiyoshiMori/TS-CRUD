import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import expressPlayground from 'graphql-playground-middleware-express';

const server = express();

const { typeDefs, resolvers } = require('../lib/graphql/schema');

export default () => {
    const apolloServer = new ApolloServer({ typeDefs, resolvers });

    apolloServer.applyMiddleware({ app: server });

    server.use('/playground', expressPlayground({ endpoint: '/graphql' }));

    server.use('/test', (req, res) => res.json({ test: '123' }));

    console.log('gql mw');

    return server;
}
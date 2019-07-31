import express, { Express } from 'express';
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import expressPlayground from 'graphql-playground-middleware-express';
import { buildSchema } from 'type-graphql';

import resolvers from '../lib/graphql/schemas';

export default async (server: Express, cb: () => Express): Promise<Express | null> => {
    let isBuilt = false;

    if (isBuilt) return null;

    const schema = await buildSchema({
        resolvers,
    });

    const apolloServer: ApolloServer = new ApolloServer({ schema });

    apolloServer.applyMiddleware({ app: server });

    server.use('/playground', expressPlayground({ endpoint: '/graphql' }));

    server.use(cb());

    server.listen(3000, () => {
        isBuilt = true;
    });

    return server;
};

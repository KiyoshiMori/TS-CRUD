import express, { Express } from 'express';
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import expressPlayground from 'graphql-playground-middleware-express';
import { buildSchema } from 'type-graphql';

import resolvers from '../lib/graphql/schemas';

const server: Express = express();

export default async (): Promise<Express | null> => {
    let isBuilt: boolean = false;

    if (isBuilt) return null;

    const schema = await buildSchema({
        resolvers,
    });

    const apolloServer: ApolloServer = new ApolloServer({ schema });

    apolloServer.applyMiddleware({ app: server });

    server.use('/playground', expressPlayground({ endpoint: '/graphql' }));

    server.listen(3000, () => {
        isBuilt = true;
    });
    return server;
}
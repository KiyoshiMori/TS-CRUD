import 'isomorphic-fetch';
import express, { Express } from 'express';

import graphqlMW from './graphql';
import webpackCompiler from './webpackCompiler';

const server: Express = express();

server.use(graphqlMW());

let isBuilt: boolean = false;

const done = () => {
    if (isBuilt) return;

    server.listen(3000, () => {
        isBuilt = true;
        console.log('server started: 3000');
    });
};

server.use(webpackCompiler());

done();
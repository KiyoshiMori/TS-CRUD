import 'isomorphic-fetch';
import express from 'express';

import graphqlMW from './graphql';
import webpackCompiler from './webpackCompiler';

const server = express();

server.use(graphqlMW());

let isBuilt = false;

const done = () => {
    if (isBuilt) return;

    server.listen(3000, () => {
        isBuilt = true;
        console.log('server started: 3000');
    });
};

server.use(webpackCompiler());

done();
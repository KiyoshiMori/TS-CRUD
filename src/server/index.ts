import 'isomorphic-fetch';
import express, { Express } from 'express';

import startServer from './graphql';
import webpackCompiler from './webpackCompiler';

const server: Express = express();

server.use('/test', (req, res) => res.json({ test: 'test' }));
server.use(webpackCompiler());

startServer();
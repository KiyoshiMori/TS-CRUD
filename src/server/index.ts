import 'isomorphic-fetch';
import express, { Express } from 'express';

import startServer from './graphql';
import webpackCompiler from './webpackCompiler';
import db from '../lib/db';

db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err: string) => {
        console.error('Unable to connect to the database:', err);
    });

const server: Express = express();

server.use('/test', (req, res) => res.json({ test: 'test' }));

startServer(server, () => webpackCompiler());

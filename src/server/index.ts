import 'isomorphic-fetch';
import express, { Express } from 'express';

import startServer from './graphql';
import webpackCompiler from './webpackCompiler';
import db from '../lib/db';

db.sequelize
    .authenticate()
    .then((): void => {
        console.log('Connection has been established successfully.');
    })
    .catch((err: string): void => {
        console.error('Unable to connect to the database:', err);
    });

db.sequelize.sync({ force: true });

const server: Express = express();

startServer(server, (): Express => webpackCompiler());

import express from 'express';
import webpack from 'webpack';
import webpackDevMW from 'webpack-dev-middleware';
import webpackHotMw from 'webpack-hot-middleware';
import webpackHotServer from 'webpack-hot-server-middleware';

const server = express();

import { client as configDevClient, server as configDevServer } from '../../config/webpack';

console.log(configDevClient.devServer);

let isBuilt = false;

const compiler = webpack([configDevClient, configDevServer]);

const clientCompiler = compiler.compilers[0];

server.use(webpackDevMW(compiler, configDevClient.devServer));
server.use(webpackHotMw(clientCompiler, configDevClient.devServer));
server.use(webpackHotServer(compiler));

const done = () => {
    if (isBuilt) return;
    isBuilt = true;

    server.listen(3000, () => {
        console.log('server started: 3000');
    });
};

done();
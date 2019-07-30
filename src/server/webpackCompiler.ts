import express from 'express';
import webpack from 'webpack';
import webpackDevMW from 'webpack-dev-middleware';
import webpackHotMw from 'webpack-hot-middleware';
import webpackHotServer from 'webpack-hot-server-middleware';
import webpackConfig from '../../config/webpack';

const server = express();

const compiler = webpack([webpackConfig.client, webpackConfig.server]);

const clientCompiler = compiler.compilers[0];

server.use(webpackDevMW(compiler, webpackConfig.client.devServer));
server.use(webpackHotMw(clientCompiler, webpackConfig.client.devServer));
server.use(webpackHotServer(compiler));

export default () => server;

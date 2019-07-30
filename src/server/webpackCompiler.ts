import express from 'express';
import webpack from 'webpack';
import webpackDevMW from 'webpack-dev-middleware';
import webpackHotMw from 'webpack-hot-middleware';
import webpackHotServer from 'webpack-hot-server-middleware';
import { client as configDevClient, server as configDevServer } from '../../config/webpack';

const server = express();

const compiler = webpack([configDevClient, configDevServer]);

const clientCompiler = compiler.compilers[0];

server.use(webpackDevMW(compiler, configDevClient.devServer));
server.use(webpackHotMw(clientCompiler, configDevClient.devServer));
server.use(webpackHotServer(compiler));

export default () => server;
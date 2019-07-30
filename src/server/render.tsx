import * as React from 'react';
import { Request, Response } from 'express';
import { Stats } from 'webpack';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import flushChunks from 'webpack-flush-chunks';
import { flushChunkNames } from 'react-universal-component/server';
import { ApolloProvider } from 'react-apollo';
import App from '../shared/mainPage';

import client from '../lib/graphql/client';

export default ({ clientStats }: { clientStats: Stats }) => (req:Request, res:Response) => {
    const { js } = flushChunks(clientStats, {
        chunkNames: flushChunkNames(),
    });

    res.status(200);
    res.send(`<!doctype html>\n${renderToStaticMarkup(
    <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>TS-CRUD</title>
            </head>
            <body>
            <div
                id="root"
                dangerouslySetInnerHTML={{
                    __html: renderToString(
                        <ApolloProvider client={client}>
                            <App />
                        </ApolloProvider>
                    )
                }}
            />
            <div id="scripts" dangerouslySetInnerHTML={{ __html: js.toString() }} />
            </body>
        </html>
    )}`);
    res.end();
}
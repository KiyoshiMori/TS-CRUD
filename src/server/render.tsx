import * as React from 'react';
import { Request, Response } from 'express';
import { Stats } from 'webpack';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import flushChunks from 'webpack-flush-chunks';
import { flushChunkNames } from 'react-universal-component/server';
import App from '../shared/mainPage';

export default ({ clientStats }: { clientStats: Stats }) => (req:Request, res:Response) => {
    const { js } = flushChunks(clientStats, {
        chunkNames: flushChunkNames(),
    });

    console.log(typeof js, js);

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
                    __html: renderToString(<App />)
                }}
            />
            <div id="scripts" dangerouslySetInnerHTML={{ __html: js.toString() }} />
            </body>
        </html>
    )}`);
    res.end();
}
import * as React from 'react';
import { Request, Response } from 'express';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import App from '../shared/mainPage';

export default () => (req:Request, res:Response) => {
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
            </body>
        </html>
    )}`);
    res.end();
}
import React from 'react';
import { Route } from 'react-router-dom';

import { pages } from './routes';

export default (props?: any) => {
    return (
        <div>
            {pages.map(page => (
                <Route
                    exact
                    path={page.path}
                    render={(rProps: any) => <page.Component {...rProps} />}
                />
            ))}
        </div>
    );
};

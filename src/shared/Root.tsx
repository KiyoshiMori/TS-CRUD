import React from 'react';
import { Route, RouteProps, RouteComponentProps } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import Header from 'containers/Header';
import { pages } from './routes';

export default (props?: RouteProps): React.ReactElement => {
    return (
        <div>
            <CssBaseline />
            <Header />
            {pages.map(page => (
                <Route exact path={page.path} render={(rProps?: any) => <page.Component {...rProps} />} />
            ))}
        </div>
    );
};

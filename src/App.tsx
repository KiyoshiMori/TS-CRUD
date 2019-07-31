import * as React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { AppContainer as HotContainer } from 'react-hot-loader';

import App from './shared/Root';
import client from 'lib/graphql/client';

hydrate(
    <ApolloProvider client={client}>
        <HotContainer>
            <Router>
                <App />
            </Router>
        </HotContainer>
    </ApolloProvider>,
    document.getElementById('root'),
);

if (module.hot) {
    module.hot.accept();
}

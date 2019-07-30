import * as React from 'react';
import { hydrate } from 'react-dom/server';

import MainPage from './shared/mainPage';

hydrate(
    <MainPage />,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
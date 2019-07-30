import * as React from 'react';
import { hydrate } from 'react-dom';
import { AppContainer as HotContainer } from 'react-hot-loader';

import MainPage from './shared/mainPage';

hydrate(
    <HotContainer>
        <MainPage />
    </HotContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
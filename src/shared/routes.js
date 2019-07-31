import mainPage from './pages/mainPage';

export const routes = {
    main: '/',
};

export const pages = [
    {
        Component: mainPage,
        path: routes.main,
    },
];

export default routes;

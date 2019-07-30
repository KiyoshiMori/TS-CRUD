module.exports = {
    vendor: ['react', 'react-dom'],
    main: ['@babel/polyfill', 'react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', './src/App.tsx'],
};

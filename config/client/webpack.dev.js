import main from '../main';

const configuration = {
    mode: 'development',
    name: 'client',
    entry: main.client.entry,
    output: main.client.output,
    devServer: {
        contentBase: 'dist',
        overlay: true,
        hot: true,
        stats: {
            colors: true,
        },
    },
    resolve: main.client.resolve,
    module: {
        rules: main.client.rules.devRules,
    },
    plugins: main.client.plugins,
    node: { fs: 'empty' },
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
};

module.exports = configuration;
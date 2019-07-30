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
    plugins: [],
};

module.exports = configuration;
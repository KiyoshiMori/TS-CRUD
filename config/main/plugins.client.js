import webpack from 'webpack';

module.exports = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
    }),
];

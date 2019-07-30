interface webpack {
    devServer: devServerType
}

type devServerType = {
    contentBase: string,
    overlay: boolean,
    hot: boolean,
    stats: statsType,
};

type statsType = {
    colors: boolean,
};

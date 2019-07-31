interface webpack {
    devServer: devServerType;
}

interface devServerType {
    contentBase: string;
    overlay: boolean;
    hot: boolean;
    stats: statsType;
}

interface statsType {
    colors: boolean;
}

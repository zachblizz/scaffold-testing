const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const { InjectManifest } = require("workbox-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "production",
    entry: {
        main: "./src/index.js",
        'service-worker': "./src/service-worker.js",
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    resolve: { extensions: ['.js', '.jsx'] },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
        }),
        // new InjectManifest({
        //     swSrc: path.join(__dirname, 'src/service-worker.js'),
        // }),
    ],
}
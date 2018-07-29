const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "source-map",
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true
    },
    resolve: {
        alias: {
          "@": "src"
        },
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "awesome-typescript-loader"
                }
            },
            {
                test: /\.tsx?$/,
                enforce: "pre",
                loader: "tslint-loader",
                options: {
                    configFile: "tslint.json"
                }
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}

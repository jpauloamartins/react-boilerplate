const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

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
      '@': path.resolve(__dirname, "../src/")
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".scss"]
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
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/'
            }
          }
        ]
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

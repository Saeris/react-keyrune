const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "demo/public/index.html"),
    favicon: path.join(__dirname, "demo/public/favicon.ico")
})

module.exports = {
  entry: ["@babel/polyfill", path.join(__dirname, "demo/index.js")],
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.(css|s[ac]ss)$/, use: [
          `style-loader`,
          { loader: `css-loader`, options: { sourceMap: true } },
          { loader: `resolve-url-loader`, options: { sourceMap: true } },
          { loader: `sass-loader`, options: { sourceMap: true, precision: 8 } }
        ]
      },
      { test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif|mp4|mov|ogg|webm)(\?.*)?$/i, use: "url-loader" }
    ]
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    port: 8000
  }
};

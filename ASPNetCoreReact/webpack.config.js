const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('allstyles.css');

module.exports = {
  entry: "./wwwroot/source/app.js",
  output: {
    path: path.resolve(__dirname, "wwwroot/dist"),
    filename: "bundle.js"
  },
  plugins: [
    extractCSS,
    //explicitly importing jquery in our files
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Popper: ["popper.js", "default"]
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract(['css-loader?minimize'])
      },
      {
        test: /\.js?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};

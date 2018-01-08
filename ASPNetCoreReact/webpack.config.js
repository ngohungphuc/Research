const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./wwwroot/source/app.js",
  output: {
    path: path.resolve(__dirname, "wwwroot/dist"),
    filename: "bundle.js"
  },
  plugins: [
    //explicitly importing jquery in our files
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Popper: ["popper.js", "default"]
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
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

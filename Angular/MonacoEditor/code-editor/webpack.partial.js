const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyWebpackPlugin([{
      from: 'node_modules/monaco-editor/min/vs',
      to: 'vs',
    }]),
  ]
}

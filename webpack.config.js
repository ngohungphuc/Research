/**
 * Created by phuc.ngo on 9/12/2016.
 */
var path = require('path');
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');
module.exports = {
    //look for file in js folder
    context: path.resolve('js'),
    entry: {
        about: './about_page.js',
        contact: './contact_page.js',
        home: './home_page.js'
    },
    output: {
        //put bundle file in this dir,
        //setup virtual path 
        path: path.resolve('build/js'),
        publicPath: '/public/assets/js',
        //[name] to match the name of the entry
        filename: '[name].js'
    },
    plugins: [commonsPlugin],
    devServer: {
        contentBase: 'public'
    },
    //watch:true
    module: {
        preLoaders: [{
            test: /\.js%/,
            exclude: /node_modules/,
            loader: 'jshint-loader'
        }],
        loaders: [{
            test: /\.es6$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    //look for either js or es6 extension
    resolve: {
        extensions: ['', '.js', '.es6']
    }
};
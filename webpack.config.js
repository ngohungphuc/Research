/**
 * Created by phuc.ngo on 9/12/2016.
 */
var path = require('path');
module.exports = {
    //look for file in js folder
    context:path.resolve('js'),
    entry: [
        "./app", "./util.js"
    ],
    output: {
        //put bundle file in this dir,
        //setup virtual path 
        path:path.resolve('build/js'),
        publicPath:'/public/assets/js',
        filename: 'bundle.js'
    },
    devServer:{
        contentBase:'public'
    },
    //watch:true
    module: {
        preLoaders: [
            {
                test: /\.js%/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            }
        ],
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    //look for either js or es6 extension
    resolve: {
        extensions: ['', '.js', '.es6']
    }
};

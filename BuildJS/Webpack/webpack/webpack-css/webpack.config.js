const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './app.js',
    output: {
        filename: './build.js'
    },
    module: {
        preLoaders: [{
            test: /\.js$/, // include .js files 
            exclude: /node_modules/, // exclude any and all files in the node_modules folder 
            loader: "jshint-loader"
        }],
        loaders: [{
                test: /\.scss$/,
                //run css loader and then style loader
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    use: [{
                            loader: 'sass-loader'
                        },
                        {
                            loader: 'css-loader'
                        }
                    ]
                })
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('dist/style.css')
    ],
    watch: true,
};
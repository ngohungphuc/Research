module.exports = {
    entry: './app.js',
    output: {
        filename: './build.js'
    },
    watch: true,
    module: {
        preLoaders: [{
            test: /\.js$/, // include .js files 
            exclude: /node_modules/, // exclude any and all files in the node_modules folder 
            loader: "jshint-loader"
        }],
        loaders: [{
                test: /\.scss$/,
                //run css loader and then style loader
                loader: 'style-loader!css-loader!sass-loader'
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
    }
};
module.exports = {
    entry: './app.js',
    output: {
        filename: './build.js'
    },
    watch: true,
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }]
    }
};
/**
 * Created by phuc.ngo on 9/12/2016.
 */
module.exports = {
    entry: [
        "./app.js","./util.js"
    ],
    output: {
        filename: "bundle.js"
    },
    //watch:true
    module:{
        loaders:[
            {
                test: /\.es6$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            }
        ]
    },
    //look for either js or es6 extension
    resolve:{
        extensions:['','.js','.es6']
    }
};

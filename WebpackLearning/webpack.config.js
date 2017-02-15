'use strict';
module.exports = {
    entry: "./home",
    output: {
        filename: "build.js",
        //exports to global variable
        library: "home"
    },
    watch: true,
    watchOptions: {
        // After a change the watcher waits that time (in milliseconds) for more changes
        aggregateTimeout: 100
    },
    //skip unnecessary line of code
    //devtool: "source-map"
    //devtool: "inline-source-map"
    //devtool: "cheap-inline-module-source-map"
    devtool: "eval"
}

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
//Code example 01-minify
module.exports = function(grunt) {

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // configure grunt
    grunt.initConfig({
        uglify: {
            target: {
                src: 'Grunt/js/foo.js',
                dest: 'Grunt/js/foo.min.js'
            }
        }
    });

    // log something
    grunt.log.write('Grunt ex 1\n');

    //Default task
    grunt.registerTask('default', ['uglify']);
};
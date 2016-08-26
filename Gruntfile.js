// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
//Code example 01-minify
module.exports = function(grunt) {

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //Code example 04-linting
    grunt.loadNpmTasks('grunt-contrib-jshint');
    // configure grunt
    grunt.initConfig({
        uglify: {
            target: {
                src: 'Grunt/js/foo.js',
                dest: 'Grunt/js/foo.min.js'
            }
        },
        //Code example 03-simple-config
        bar: {
            foo: 42
        },
        //Code example 04-linting
        jshint: {
            options: {
                //ensures that curly braces are always used in if, for, and while statements;
                curly: true,
                //ensures that strict equality === is always used.
                eqeqeq: true
            },
            //from src and subdirectory
            target1: ['Gruntfile.js', 'Grunt/src/**/*.js']
        }
    });

    // log something
    grunt.log.write('Grunt ex 1\n');

    //Default task
    grunt.registerTask('default', ['uglify']);
    //Code example 02-simple-task
    grunt.registerTask('foo', function() {
        console.log('Foo task is running....');
    });
    //Code example 03-simple-config
    grunt.registerTask('bar', function() {
        var bar = grunt.config.get('bar');
        var bazz = bar.foo + 7;
        grunt.log.writeln("Bazz is " + bazz);
    });
    //Code example 04-linting
    grunt.registerTask('jshintnoti', ['jshint']);
};
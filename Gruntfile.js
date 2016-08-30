// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
//Code example 09-deploy-log-task
var fs = require('fs');
//Code example 13-async-webget
var request = require('request');
var url = 'https://raw.githubusercontent.com/jpillora/gswg-examples/master/README.md';

module.exports = function(grunt) {
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Code example 04-linting
    grunt.loadNpmTasks('grunt-contrib-jshint');

    //Code example 05-coffeescript Load the plugin that provides the "coffee" task.
    grunt.loadNpmTasks('grunt-contrib-coffee');

    //Code example 06-jade
    grunt.loadNpmTasks('grunt-contrib-jade');

    //Code example 07-stylus
    grunt.loadNpmTasks('grunt-contrib-stylus');

    //Code example 08-concatenate
    grunt.loadNpmTasks('grunt-contrib-concat');

    //Code example 09-deploy-log-task
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
        },
        coffee: {
            target1: {
                expand: true,
                flatten: true,
                cwd: 'Grunt/src/',
                src: ['*.coffee'],
                dest: 'Grunt/build/',
                ext: '.js'
            },
            target2: {
                files: {
                    'Grunt/build/bazz.js': 'Grunt/src/*.coffee'
                }
            }
        },
        //Code example 06-jade
        jade: {
            target1: {
                files: {
                    "Grunt/build/foo.html": "Grunt/src/foo.jade",
                    "Grunt/build/bar.html": "Grunt/src/bar.jade",
                }
            }
        },
        //Code example 07-stylus
        stylus: {
            target1: {
                files: {
                    "Grunt/build/foo.css": "Grunt/src/foo.styl"
                }
            }
        },
        //Code example 08-concatenate
        concat: {
            target1: {
                files: {
                    "Grunt/build/abc.js": ["Grunt/src/a.js", "Grunt/src/b.js", "Grunt/src/c.js"]
                }
            }
        },
        //Code example 12-copy-multi-task
        copy: {
            target1: {
                files: {
                    'Grunt/build/file1.txt': 'Grunt/src/file1.txt',
                    'Grunt/build/file2.txt': 'Grunt/src/file2.txt',
                }
            },
            target2: {
                files: {
                    'Grunt/build/file3.txt': 'Grunt/src/file3.txt',
                    'Grunt/build/file4.txt': 'Grunt/src/file4.txt',
                }
            }
        }
    });

    // log message
    grunt.log.write('Grunt is running\n');

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
    grunt.registerTask('jshinttask', ['jshint']);

    //Code example 05-coffeescript
    grunt.registerTask('coffeetask', ['coffee']);

    //Code example 06-jade
    grunt.registerTask('jadetask', ['jade']);

    //Code example 07-stylus
    grunt.registerTask('stylustask', ['stylus']);

    //Code example 08-concatenate
    grunt.registerTask('concatenatetask', ['concat']);

    //Code example 09-deploy-log-task
    grunt.registerTask('log-deploy', function() {
        var message = 'Deployment on ' + new Date();
        fs.appendFileSync('deploy.log', message + '\n');
        grunt.log.writeln('Append "' + message + '"');
    });

    //Code example 10-task-object
    grunt.registerTask('task-object', function() {
        console.log('The "%foo" has arguments %j', this.name, this.args);
    });

    //Code example 11-task-aliasing
    grunt.registerTask('build', function() {
        console.log('building...');
    });
    grunt.registerTask('test', function() {
        console.log('testing...');
    });
    grunt.registerTask('upload', function() {
        console.log('uploading...');
    });

    grunt.registerTask('deploy', ['build', 'test', 'upload']);

    //Code example 12-copy-multi-task
    grunt.registerMultiTask('copy', function() {
        this.files.forEach(function(file) {
            grunt.file.copy(file.src, file.dest);
        });
        grunt.log.writeln('Copied' + this.files.length + ' files');
    });

    //Code example 13-async-webget
    grunt.registerTask('webget', function() {
        var done = this.async();
        request(url, function(err, response, contents) {
            if (err) {
                done(err);
            } else if (response.statusCode !== 200) {
                done(new Error('Not ok'));
            } else {
                grunt.file.write('Grunt/build/Ex13.md', contents);
                grunt.log.ok('Ex13.md successfully created');
                done();
            }
        });
    });

    //Code example 14-task-help
    grunt.registerTask('analyze',
        'Analyzes the source',
        function() {
            console.log('analyzing...');
        }
    );
    grunt.registerMultiTask('compile',
        'Compiles the source',
        function() {
            console.log('compiling...');
        }
    );
    grunt.registerTask('all',
        'Analyzes and compiles the source', ['analyze', 'compile']
    );
};
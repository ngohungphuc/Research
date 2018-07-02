module.exports = function(grunt) {
    // Initialize environment
    var env = grunt.option('env') || 'dev';
    // Environment specific tasks
    if (env === 'prod') {
        grunt.registerTask('scripts', ['coffee', 'uglify']);
        grunt.registerTask('styles', ['stylus', 'cssmin']);
        grunt.registerTask('views', ['jade', 'htmlmin']);
    } else {
        grunt.registerTask('scripts', ['coffee']);
        grunt.registerTask('styles', ['stylus']);
        grunt.registerTask('views', ['jade']);
    }
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("mocha");
    grunt.initConfig({
        coffee: {
            build: {
                src: 'src/scripts/app.coffee',
                dest: 'build/js/app.js'
            }
        },
        stylus: {
            options: {
                //compress: false,
                //linenos:true
            },
            build: {
                src: 'src/styles/app.styl',
                dest: 'build/css/app.css'
            }
        },
        jade: {
            build: {
                options: {
                    pretty: true
                },
                src: 'src/views/app.jade',
                dest: 'build/app.html'
            }
        },
        uglify: {
            compress: {
                src: "<%= coffee.build.dest %>",
                dest: "<%= coffee.build.dest %>"
            },
            options: {
                compress: {
                    global_defs: {
                        "DEBUG": false
                    },
                    dead_code: true
                }
            }
        },
        cssmin: {
            compress: {
                src: "<%= stylus.build.dest %>",
                dest: "<%= stylus.build.dest %>"
            },
        },
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                removeAttributeQuotes: true,
                removeRedundantAttributes: true,
                removeOptionalTags: true
            },
            compress: {
                src: "<%= jade.build.dest %>",
                dest: "<%= jade.build.dest %>"
            }
        },
        watch: {
            scripts: {
                files: "src/scripts/**/*.coffee",
                tasks: "scripts"
            },
            styles: {
                files: "src/styles/**/*.styl",
                tasks: "styles"
            },
            views: {
                files: "src/views/**/*.jade",
                task: "views"
            }
        }
    });
    grunt.log.write('Grunt is running\n');
    //grunt.registerTask('default', ['coffee', 'stylus', 'jade', 'uglify', 'cssmin']);
    //grunt.registerTask('default', ['scripts', 'styles','views']);
    //grunt.registerTask('build', ['scripts','styles','views']);
    //grunt.registerTask('default', ['build', 'watch']);
    grunt.registerTask('default', ['mocha']);
};
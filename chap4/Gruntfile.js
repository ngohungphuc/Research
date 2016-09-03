module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
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
        }
    });
    grunt.log.write('Grunt is running\n');
    grunt.registerTask('default', ['coffee', 'stylus', 'jade', 'uglify', 'cssmin']);
};
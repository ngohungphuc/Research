module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-jade');

    grunt.initConfig({
        coffee: {
            build: {
                src: 'src/scripts/app.coffee',
                dest: 'build/js/app.js'
            }
        },
        stylus: {
            options: {
                compress: false,
                linenos:true
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
        }
    });
    grunt.log.write('Grunt is running\n');
    grunt.registerTask('default', ['coffee', 'stylus', 'jade']);
};
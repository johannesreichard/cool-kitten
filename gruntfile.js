module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            main: {
                options: {
                    config: 'config.rb'
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: '.',
                        src: ['index.html'],
                        dest: 'build/css'
                    },{
                        expand: true,
                        cwd: 'js/',
                        src: ['**/*'],
                        dest: 'build/js'
                    },{
                        expand: true,
                        cwd: 'css',
                        src: ['**/*'],
                        dest: 'build/'
                    },{
                        expand: true,
                        cwd: 'images/',
                        src: ['**/*'],
                        dest: 'build/images'
                    }
                ]
            }
        },
    clean: {
        build: {
            src: ["build"]
        }
    }

    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('build', ['compass', 'copy']);
    grunt.registerTask('default', ['build']);

};

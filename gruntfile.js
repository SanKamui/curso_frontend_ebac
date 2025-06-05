module.exports = function(grunt) {

    grunt.initConfig({

    less: {
        development: {
        files: {
            'dist/style.css': 'src/style.less'
            }
        }
    },

    uglify: {
        build: {
        files: {
            'dist/main.min.js': ['src/main.js']
            }
        }
    }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify']);
};

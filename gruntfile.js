// Image minification in Grunt
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        imagemin: {
            png: {
                options: {
                    optimizationLevel: 3//0 to 7; the default value is 3
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src/img/',
                        src: ['**/*.PNG','**/*.JPEG'],
                        dest: 'minified/img/'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');

    //setting this task to default
    grunt.registerTask('default', ['imagemin']);
}
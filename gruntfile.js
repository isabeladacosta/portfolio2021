module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      watch: {
        css: {
            files: ['src/styles/*.css'],
            tasks: ['cssmin']
        }
      },

      cssmin: {
          my_target: {
            files: {
                'src/styles/main.min.css': ['src/styles/index.css', 'src/styles/pagetransition.css', 'src/styles/projectpage.css']
            }
            /*
              files: [{
                  expand: true,
                  cwd: 'src/styles',
                  src: ['*.css', '!*.min.css'],
                  dest: 'src/styles',
                  ext: '.min.css'

              }]
              */
          } 
      }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
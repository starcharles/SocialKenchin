module.exports = function(grunt) {

  // config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jade: {
      compile: {
        files: {
          'recipe.html': 'recipe.jade',
          'chat.html': 'chat.jade'
        }
      }
    },

    jshint: {
      files: ['./*.js'],
      options: {}
    },
    watch: {
      options: {
        livereload: true
      },
      files: ['./*.jade', './*.js','./*.php'],
      tasks: ['jade', 'jshint']
    },
    connect: {
      server: {
        options: {
          port: 2000,
          hostname: 'localhost'
        }
      }
    }
  });
  // plugin
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // tasks
  grunt.registerTask('default', ['jade', 'jshint', 'connect', 'watch']);

};

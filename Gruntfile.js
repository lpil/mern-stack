module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    watch: {
      jsFront: {
        files: ['client/**/*.js', 'client/app/tags/**/*'],
        tasks: ['browserify:front']
      },
    },

    browserify: {
      options: {
        transform: ['babelify', 'riotify']
      },
      front: {
        files: {
          'dist/front/main.js': 'client/app/main.js'
        }
      }
    },

  });

  grunt.registerTask('default', [
    'riot', 'browserify', 'watch'
  ]);
};

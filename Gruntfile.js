module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    watch: {
      jsFront: {
        files: ['client/**/*.js'],
        tasks: ['browserify:front']
      },
      jsBack: {
        files: ['app/**/*.js'],
        tasks: ['browserify:back']
      },
    },

    browserify: {
      options: {
        transform: ['babelify']
      },
      back: {
        files: {
          'dist/back/main.js': 'app/main.js'
        }
      },
      front: {
        files: {
          'dist/front/main.js': 'client/app/main.js'
        }
      }
    },

  });

  grunt.registerTask('default', [
    'browserify', 'watch'
  ]);
};

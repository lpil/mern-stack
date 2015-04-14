module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    watch: {
      jsFront: {
        files: ['client/**/*.js', '.tmp/tags.js'],
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

    // riot: {
    //   options:{
    //     type : 'es6'
    //   },
    //   dist: {
    //     src: 'client/app/tags/**/*.tag',
    //     dest: 'client/app/tags/compiled_tags.js'
    //   }
    // },

  });

  grunt.registerTask('default', [
    'riot', 'browserify', 'watch'
  ]);
};

// author arcseldon@icloud.com
'use strict';

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks( 'grunt-contrib-qunit' );

  grunt.initConfig({

    jshint: {
      files: ['Gruntfile.js', 'lib/**/*.js', 'spec/**/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    watch: {
      files: ['Gruntfile.js', 'lib/**/*.js', 'spec/**/*.js'],
      tasks: ['jshint']
    },

    qunit: {
      files: [ 'lib/index.html' ]
    }

  });

  grunt.registerTask('default', ['jshint', 'qunit']);

};


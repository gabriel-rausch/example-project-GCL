'use strict';

module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);
  require('google-closure-compiler').grunt(grunt);
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.initConfig({
    'closure-compiler': {
      dev: {
        options: {
          'js': ['src/**/*.js', 'node_modules/google-closure-library/**.js'],
          'entry_point': 'goog:kstatic.init',
          'js_output_file': 'dest/script.min.js',
          'compilation_level': 'ADVANCED', // SIMPLE, ADVANCED, WHITESPACE_ONLY
          'dependency_mode': 'STRICT',
          'language_in': 'ECMASCRIPT5_STRICT'
        }
      }
    },

    copy: {
      markupFiles: {
        expand: true,
        flatten: true,
        src: ['src/**/*.html', 'src/**/*.php'],
        dest: 'dest/'
      },
      tsFiles: {
        expand: true,
        cwd: 'src/ts/',
        src: '**/*',
        dest: 'dest/ts'
      },
      imgFiles: {
        expand: true,
        cwd: 'src/img/',
        src: '**/*',
        dest: 'dest/img'
      },
      webfonts: {
        expand: true,
        cwd: 'src/css/',
        src: 'webfonts/*',
        dest: 'dest/'
      }
    },

    php: {
      dist: {
        options: {
          hostname: '127.0.0.1',
          port: 8888,
          base: './dest/',
          keepalive: true,
          open: false
        }
      }
    },

    less: {
      options: {
        paths: ['less'],
        compress: true,
        strictMath: true,
        strictUnits: true
      },
      dev: {
        src: ['src/**/*.less', 'src/**/*.css'],
        dest: 'dest/screen.min.css'
      }
    },
    autoprefixer:{
      dist:{
        files:{
          'dest/screen.min.css': 'dest/screen.min.css'
        }
      },
      options: {
        browsers: [
          'last 2 versions',
          'ie 8',
          'ie 9'
          ]
      }
    },
    pixrem: {
      options: {
        rootvalue: '85%',
        replace: true
      },
      dist: {
        src: 'dest/screen.min.css',
        dest: 'dest/screen-IE.min.css'
      }
    },

    uglify: {
      options: {
        mangle: true
      },
      dev: {
        src: ['src/js/libs/**/*.js', 'dest/script.min.js'],
        dest: 'dest/script.min.js'
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', '!src/js/libs/**/*.js'],
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: ['Gruntfile.js', 'src/**/*.js', '!src/js/libs/**/*.js'],
      options: {
        config: '.jscsrc'
      }
    },

    watch: {
      options: {
        spawn: false,
        livereload: true
      },
      statics: {
        files: ['./src/**/*.html', './src/**/*.php'],
        tasks: ['copy']
      },
      scripts: {
        files: ['./src/**/*.js'],
        tasks: ['scripts']
      },
      styles: {
        files: ['./src/**/*.less'],
        tasks: ['less', 'autoprefixer', 'ie8']
      },
      ts: {
        files: ['./src/**/*.ts'],
        tasks: ['copy']
      }
    },

    clean: ['./dest/**']
  });

  grunt.registerTask('ie8', ['pixrem']);
  grunt.registerTask('scripts', ['jshint', 'jscs', 'closure-compiler', 'uglify']);
  grunt.registerTask('push', ['ftp_push']);
  grunt.registerTask('run', ['clean', 'scripts', 'less', 'ie8', 'autoprefixer', 'copy']);
  grunt.registerTask('default', ['run', 'focus:watch']);
};

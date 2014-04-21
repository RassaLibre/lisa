module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    stylus : {
      compile : {
        options : {},
        files : {
          'app/css/compiled.css' : 'app/styl/*.styl'
        }
      }
    },
    coffee: {
      compile : {
        files : {
          'app/js/dist/dist.js' : [
            'app/js/app/app.coffee',
            'app/js/configs/*.coffee',
            'app/js/controllers/*.coffee',
            'app/js/directives/*.coffee',
            'app/js/filters/*.coffee',
            'app/js/services/*.coffee'
          ]         
        }
      }
    },
    watch : {
      scripts : {
        files : ["app/js/**/*.coffee","app/styl/*.styl","app/index.html","app/partials/*.html"],
        tasks : ['default'],
        options : {
          spawn : false,
          livereload: true
        }
      }
    },
    coffeelint : {
      app : ['app/js/**/*.coffee']
    },
    closurecompiler : {
      minify: {
        files : {
          'build/js/compiled.js' : 'app/js/dist/dist.js'
        },
        options: {
          "compilation_level" : "SIMPLE_OPTIMIZATIONS",
          "max_processes" : 5,
          "banner" : "/* Genereted with Lisa Dev-Stack by @popplagip */"
        }
      }
    },     
    copy : {
      main : {
        files : [
          {expand : false, src : 'app/index.html', dest : 'build/index.html'},
          {expand : true, cwd: 'app/', src : 'partials/*', dest : 'build/'},
          {expand : true, cwd: 'app/', src : 'css/*', dest : 'build/'},
          {expand: true, cwd: 'app/', src : 'assets/**', dest : 'build/'},
          {expand: true, cwd: 'app/js/vendor/', src: 'angular.min.js', dest: 'build/js/vendor/'},
          {expand: true, cwd: 'app/js/vendor/', src: 'angular-route.min.js', dest: 'build/js/vendor/'},
          {expand: true, cwd: 'app/js/vendor/', src: 'angular-route.min.js.map', dest: 'build/js/vendor/'}
        ]
      }
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-stylus');

  // compiling coffeescript
  grunt.loadNpmTasks('grunt-contrib-coffee');

  // compiling coffeescript
  grunt.loadNpmTasks('grunt-contrib-watch');

  // compiling coffeescript
  grunt.loadNpmTasks('grunt-coffeelint');

  //copy
  grunt.loadNpmTasks('grunt-contrib-copy');  

  //compiler
  grunt.loadNpmTasks('grunt-closurecompiler');      

  // Default task(s).
  grunt.registerTask('default', ['stylus','coffeelint','coffee','watch']);

  grunt.registerTask('build', ['closurecompiler:minify','copy']);

};
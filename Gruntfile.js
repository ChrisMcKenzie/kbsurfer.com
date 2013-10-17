module.exports = function(grunt) {
  // Do grunt-related things in here
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
  	concat: {
      css: {
        src: ['public/css/*.css', '!public/css/*.min.css'],
        dest: 'public/css/build/all.concat.css'
      }
    },
  	uglify: {
	    app: {
	      options: {
	        sourceMap: 'public/js/app.map.js',
	        sourceMapPrefix: 2,
	        sourceMappingURL: 'app.map.js'
	      },
	      files: {
	        'public/js/app.min.js': ['public/js/*.js', '!public/js/*.min.js', '!public/js/*.map.js']
	      }
	    }
	  },
    cssmin: {
		  minify: {
		  	keepSpecialComments: 1,
		    expand: true,
		    cwd: 'public/css/build',
		    src: ['all.concat.css'],
		    dest: 'public/css/',
		    ext: '.min.css'
		  },
		},
		watch: {
      css: {
		    files: ['public/css/*.css', '!public/css/*.min.css'],
		    tasks: ['concat', 'cssmin', 'clean'],
		    options: {
		      livereload: true,
		    },
		  },
		  js: {
		  	files: ['public/js/*.js', '!public/js/*.min.js', '!public/js/*.map.js'],
		  	tasks: ['uglify'],
		  	options: {
		  		livereload: true,
		  	}
		  },
		  jade: {
		  	files: ['views/*'],
		  	options: {
		  		livereload: true
		  	}
		  }
    },
    clean: {
		  build: {
		    src: ['public/css/build']
		  }
		}
  });

  grunt.registerTask('default', ['concat', 'cssmin', 'uglify', 'clean'])
  grunt.registerTask('css:minify', ['concat', 'cssmin', 'clean'])
};
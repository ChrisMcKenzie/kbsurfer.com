module.exports = function(grunt) {
  // Do grunt-related things in here
  grunt.initConfig({
    cssmin: {
		  minify: {
		  	keepSpecialComments: 1,
		    expand: true,
		    cwd: 'public/css/',
		    src: ['*.css', '!*.min.css'],
		    dest: 'public/css/',
		    ext: '.min.css'
		  },
		  combine: {
		    files: {
		      'public/css/all.min.css': ['public/css/*.min.css']
		    }
		  }
		}
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['cssmin'])
};
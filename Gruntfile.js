module.exports = function(grunt) {
  // Do grunt-related things in here
  grunt.initConfig({
    cssmin: {
		  minify: {
		    expand: true,
		    cwd: 'public/css/',
		    src: ['*.css', '!*.min.css'],
		    dest: 'public/css/',
		    ext: '.min.css'
		  }
		}
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', 'cssmin')
};
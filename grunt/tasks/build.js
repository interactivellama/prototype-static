module.exports = function(grunt) {
	/* -------------
		BUILD
	------------- */

	// CSS distribution task
	grunt.registerTask('distcss', 'Compile LESS into CSS', ['less:dist', 'less:minify']);

	// Full distribution task
	grunt.registerTask('dist', 'Build "dist." Contributors: do not commit "dist."',
			['distcss']);
};
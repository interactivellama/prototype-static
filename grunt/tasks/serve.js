module.exports = function(grunt) {

	/* -------------
		SERVE
	------------- */
	// default serve task that runs tests and builds and tests dist by default.
	grunt.registerTask('serve', 'Test, build, serve files.', function () {
		var tasks = ['connect:server', 'watch:less'];
		grunt.task.run(tasks);
	});

};
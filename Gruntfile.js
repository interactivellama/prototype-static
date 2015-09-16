/*jshint expr:true*/
/*global module:false, process:false*/
module.exports = function (grunt) {
	'use strict';

	/*
	 *	Welcome to our GruntFile.js!
	 *	Configuration tasks (initConfig) are external JS modules that can be found in 
	 *	`./grunt/config`. Additional custom tasks can be found in `./grunt/task`.	
	 *	The "shared variables" belowcannot use grunt.config(), 
	 *	since it has not been initialized yet, until grunt.initConfig() is executed.
	 */
	
	function getPackage() {
		return grunt.file.readJSON('./package.json');
	}

	// external libraries	
	var fs = require('fs');
	var path = require('path');

	// use --no-livereload to disable livereload. Helpful to 'serve' multiple projects
	var isLivereloadEnabled = (typeof grunt.option('livereload') !== 'undefined') ? grunt.option('livereload') : true;

	// load and initialize configuration tasks, including package.json's devDependencies
	require('load-grunt-config')(grunt, {
		configPath: path.join(process.cwd(), 'grunt/config'),
		loadGruntTasks: {
			pattern: 'grunt-*',
			config: require('./package.json'),
			scope: 'dependencies'
		},
		data: {
			pkg: getPackage(),
		}
	});

	grunt.registerTask('default', '', ['dist']);

	// load custom build, release, serve, and test tasks from the folder specified
	grunt.loadTasks('./grunt/tasks');
	
};
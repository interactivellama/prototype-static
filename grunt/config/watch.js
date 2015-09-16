module.exports = {
	source: {
		files: ['Gruntfile.js',
			'fonts/**',
			'grunt/**/*',
			'js/**',
			'less/**',
			'test/**',
			'index.html',
			'dev.html'
		],
		options: {
			livereload: true
		},
		tasks: ['jshint',
			'connect:testServer',
			'blanket_qunit:source',
			'qunit:noMoment',
			'qunit:globals',
			'htmllint'
		]
	},
	less: {
		files: ['fonts/**', 
			'less/**'],
		options: {
			livereload: true
		},
		tasks: ['distcss']
	},
	dist: {
		files: ['fonts/**', 
			'grunt/**',
			'js/**', 
			'less/**'],
		options: {
			livereload: true
		},
		tasks: ['dist']
	},
	lite: {
		files: [],
		options: {
			livereload: true
		},
		tasks: []
	}
};
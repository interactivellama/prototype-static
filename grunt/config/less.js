module.exports = function (grunt) {

	var minifiedOutput = 'dist/css/' + '<%= pkg.name %>' + '.min.css';

	var minifyFiles = function() {
		var minifyFiles = {};
		var output = 'dist/css/' + '<%= pkg.name %>' + '.min.css'
		minifyFiles[output] = 'dist/css/' + '<%= pkg.name %>' + '.css'
		return minifyFiles
	};

	return {
		dist: {
			options: {
				strictMath: true,
				sourceMap: true,
				outputSourceFiles: true,
				sourceMapURL: '<%= pkg.name %>' + '.css.map',
				sourceMapFilename: 'dist/css/' + '<%= pkg.name %>' + '.css.map'
			},
			files: {
				'dist/css/prototype-static.css': 'less/prototype-static.less'
			}
		},
		minify: {
			options: {
				cleancss: true,
				compress: true,
				report: 'min'
			},
			files: minifyFiles()
		}
	}

};
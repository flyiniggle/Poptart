const path = require("path");

module.exports = function(grunt) {
	require('jit-grunt')(grunt);
	require('time-grunt')(grunt);

	const baseUIPath = path.join('presentation', 'ui');

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sync: {
			build: {
				cwd: baseUIPath,
				src: '**',
				dest: path.join('presentation', 'static', 'ui'),
				expand: true
			}
		},
		watch: {
			options: {
				spawn: false
			},
			js: {
				files: ['presentation/ui/**/*.js'],
				tasks: ['sync', 'uglify-build-all-javascript-file-mapping', 'newer:uglify']
			},
			css: {
				files: ['presentation/ui/**/*.css'],
				tasks: ['sync', 'newer:cssmin']
			},
			less: {
				files: ['presentation/ui/css/ignite/themes/infragistics/LESS/*.less'],
				tasks: ['less', 'newer:cssmin']
			}
		},
		uglify: {
			build: {
				cwd: path.join('presentation', 'static', 'ui'),
				extDot: 'last',
				expand: true
			},
			options: {
				sourceMap: true,
				compress: false
			}
		},
		cssmin: {
			options: {
				sourceMap: true
			},
			build: {
				cwd: 'presentation/static/ui/',
				src: ['**/*.css', '!css/jquery-ui/**', '!css/ionicons/**', '!**/*.min.css'],
				dest: 'presentation/static/ui/',
				ext: '.min.css',
				expand: true
			}
		},
		less: {
			options: {
				cwd: 'presentation/ui/css/ignite/themes/infragistics',
				paths: ['/LESS']
			},
			files: {
				'infragistics.theme.css': 'infragistics.theme.less'
			}
		},
		eslint: {
			all: {
				options: {
					configFile: 'presentation/build/eslint.json',
					ignorePath: 'presentation/build/.eslintignore'
				},
				target: ['presentation/**/*.js', '!presentation/ui/scripts/**', '!presentation/static/**']
			},
			changed: {
				options: {
					configFile: 'presentation/build/eslint.json',
					ignorePath: 'presentation/build/.eslintignore',
					fix: true
				}
			}
		},
		shell: {
			test: {
				command: 'python manage.py test -p "*tests.py"',
				options: {
					stdout: true,
					failOnError: true
				}
			}
		},
		karma: {
			unit: {
				configFile: 'karma.conf.js',
				singleRun: true
			}
		},
		mochaTest: {
			unit: {
				options: {
					reporter: 'spec'
				},
				src: ['presentation/test/server/*.js']
			}
		}
	});

	grunt.loadTasks('tasks');

	grunt.registerTask('default', ['lint', 'test']);
	grunt.registerTask('test', ['shell:test', 'mochaTest:unit', 'karma:unit']);
	grunt.registerTask('lint', ['eslint:all']);
	grunt.registerTask('build-static', ['uglify-build-all-javascript-file-mapping', 'sync', 'uglify', 'cssmin']);

	/*grunt.event.on('watch', function(action, filepath, target) {

		leaving this here till we integrate test coverage
	});*/
};
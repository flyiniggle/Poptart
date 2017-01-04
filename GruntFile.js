const path = require("path");

module.exports = function(grunt) {
	require('jit-grunt')(grunt);
	require('time-grunt')(grunt);

	const baseUIPath = path.join('presentation', 'ui');

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			all: {
				cwd: baseUIPath,
				src: '**',
				dest: path.join('presentation', 'static', 'ui'),
				expand: true
			},
			changed: {
				cwd: '',
				expand: false
			}
		},
		watch: {
			options: {
				spawn: false
			},
			js: {
				files: ['presentation/ui/**/*.js'],
				tasks: ['copy:changed', 'uglify-build-all-javascript-file-mapping', 'newer:uglify']
			},
			css: {
				files: ['presentation/ui/**/*.css'],
				tasks: ['newer:css']
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
				src: ['**/*.css', '!css/jquery-ui/**', '!css/ionicons/**', '!**/*.min.js'],
				dest: 'presentation/static/ui/',
				ext: '.min.css',
				expand: true
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
	grunt.registerTask('build-static', ['uglify-build-all-javascript-file-mapping', 'newer:copy:all', 'uglify', 'cssmin']);

	grunt.event.on('watch', function(action, filepath, target) {

		if(target === 'js') {
			let pathArr = filepath.split(path.sep)

			grunt.config.set('copy.changed.src', filepath);
			grunt.config.set('eslint.changed.src', [filepath]);
			pathArr.splice(pathArr.indexOf('ui'), 0, 'static');
			grunt.config.set('copy.changed.dest', pathArr.join(path.sep));
		}

	});
};
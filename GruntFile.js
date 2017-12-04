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
			nunjucks: {
				files: ['presentation/templates/**/client/*.*', 'presentation/templates/**/shared/*.*'],
				tasks: ['nunjucks-precompile-mapping', 'newer:nunjucks']
			},
			css: {
				files: ['presentation/ui/**/*.css'],
				tasks: ['sync', 'newer:cssmin']
			},
			less: {
				files: ['presentation/ui/css/**/*.less'],
				tasks: ['less']
			}
		},
		uglify: {
			build: {
				cwd: 'presentation/static/ui/',
				extDot: 'last',
				expand: true
			},
			options: {
				sourceMap: true,
				compress: false
			}
		},
		nunjucks: {
			precompile: {
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
				paths: ['/LESS']
			},
			ignite: {
				files: [
					{
						dest: 'presentation/ui/css/ignite/themes/infragistics/infragistics.theme.css',
						src: 'presentation/ui/css/ignite/themes/infragistics/LESS/infragistics.theme.less'
					},
					{
						dest: 'presentation/ui/css/ignite/themes/infragistics/poptart.infragistics.modules.css',
						src: 'presentation/ui/css/ignite/themes/infragistics/LESS/poptart.infragistics.modules.less'
					}
				]
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
			options: {
				configFile: 'karma.conf.js'
			},
			unit: {
				options: {
					files: [
						'./static/ui/scripts/*.js',
						'./static/ui/scripts/ignite/*.js',
						'./static/ui/scripts/ignite/modules/*.js',
						'./static/ui/poptart.min.js',
						'./static/ui/**/*.min.js',
						'./static/ui/components/**/*.min.js',
						'./static/ui/modules/**/*.min.js',
						'./test/client/unit/**/*.js'
					],
					browsers: ['PhantomJS'],
					singleRun: true
				}
			},
			integration: {
				options: {
					files: [
						{pattern: './static/ui/scripts/*.js', noCache: true},
						{pattern: './static/ui/scripts/ignite/*.js', noCache: true},
						{pattern: './static/ui/scripts/ignite/modules/*.js', noCache: true},
						{pattern: './static/ui/poptart.min.js', noCache: true},
						{pattern: './static/ui/**/*.min.js', noCache: true},
						{pattern: './static/ui/components/**/*.min.js', noCache: true},
						{pattern: './static/ui/modules/**/*.min.js', noCache: true},
						{pattern: './test/client/integration/*.js', noCache: true}
					],
					browsers: ['PhantomJS'],
					singleRun: true
				}
			},
			dev: {
				options: {
					files: [
						{pattern: 'static/ui/scripts/*.js', noCache: true},
						{pattern: 'static/ui/scripts/ignite/*.js', noCache: true},
						{pattern: 'static/ui/scripts/ignite/modules/*.js', noCache: true},
						{pattern: 'static/ui/poptart.min.js', noCache: true},
						{pattern: 'static/ui/**/*.min.js', noCache: true},
						{pattern: 'static/ui/components/**/*.min.js', noCache: true},
						{pattern: 'static/ui/modules/**/*.min.js', noCache: true},
						{pattern: 'test/client/**/*.js', noCache: true}
					],
					browsers: ['PhantomJS'],
					singleRun: false
				}
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

	grunt.registerTask('default', ['build-static', 'lint', 'test']);
	grunt.registerTask('test', ['shell:test', 'mochaTest:unit', 'karma:unit', 'karma:integration']);
	grunt.registerTask('lint', ['eslint:all']);
	grunt.registerTask('build-static', ['uglify-build-all-javascript-file-mapping', 'nunjucks-precompile-mapping', 'nunjucks', 'sync', 'uglify', 'cssmin']);

	/*grunt.event.on('watch', function(action, filepath, target) {

		leaving this here till we integrate test coverage
	});*/
};
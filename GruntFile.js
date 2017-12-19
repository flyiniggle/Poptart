const path = require("path");
const webpackConfig = require("./webpack.config.js");

module.exports = function(grunt) {
	require('jit-grunt')(grunt);
	require('time-grunt')(grunt);

	const baseUIPath = path.join('presentation', 'ui');

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concurrent: {
			options: {
				logConcurrentOutput: true
			},
			dev: ['webpack:watch', 'watch']
		},
		sync: {
			build: {
				cwd: baseUIPath,
				src: ['**'],
				dest: path.join('presentation', 'static', 'ui'),
				expand: true
			}
		},
		watch: {
			options: {
				spawn: false
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
		webpack: {
			watch: webpackConfig.map(config => Object.assign({ watch: true, progress: true }, config)),
			build: webpackConfig.map(config => Object.assign({ progress: false }, config))
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
			options: {
				configFile: '.eslintrc',
				ignorePath: '.eslintignore'
			},
			target: ['presentation/**/*.js', '!presentation/ui/scripts/**', '!presentation/static/**']
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
						{pattern: './static/ui/polyfills.js', noCache: true},
						{pattern: './static/ui/scripts/bluebird.js', noCache: true},
						{
							pattern: './static/ui/scripts/Ignite/**/*.js',
							noCache: true,
							served: true,
							included: false
						},
						{
							pattern: './static/ui/css/ignite/**/*.*',
							noCache: true,
							served: true,
							included: false
						},
						{
							pattern: './static/ui/components/Poptart.Ignite.Adding.*',
							noCache: true,
							served: true,
							included: false
						},
						{pattern: 'test/client/unit/**/*.js', noCache: true},
						{pattern: '../node_modules/phantomjs-polyfill-find/find-polyfill.js', noCache: true}
					],
					browsers: ['PhantomJS'],
					singleRun: true
				}
			},
			integration: {
				options: {
					files: [
						{pattern: './static/ui/polyfills.js', noCache: true},
						{pattern: './static/ui/scripts/bluebird.js', noCache: true},
						{
							pattern: './static/ui/scripts/Ignite/**/*.js',
							noCache: true,
							served: true,
							included: false
						},
						{
							pattern: './static/ui/css/ignite/**/*.*',
							noCache: true,
							served: true,
							included: false
						},
						{
							pattern: './static/ui/components/Poptart.Ignite.Adding.*',
							noCache: true,
							served: true,
							included: false
						},
						{pattern: './test/client/integration/**/*.js', noCache: true},
						{pattern: '../node_modules/phantomjs-polyfill-find/find-polyfill.js', noCache: true}
					],
					browsers: ['PhantomJS'],
					singleRun: true
				}
			},
			dev: {
				options: {
					files: [
						{pattern: './static/ui/polyfills.js', noCache: true},
						{pattern: './static/ui/scripts/Ignite/*.js', noCache: true},
						{pattern: './static/ui/scripts/Ignite/modules/*.js', noCache: true},
						{pattern: './static/ui/scripts/bluebird.js', noCache: true},
						{pattern: 'test/client/**/*.min.js', noCache: true}
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
	grunt.loadNpmTasks('grunt-webpack');

	grunt.registerTask('default', ['build-static', 'eslint', 'test']);
	grunt.registerTask('test', ['shell:test', 'mochaTest:unit', 'karma:unit', 'karma:integration']);
	grunt.registerTask('build-static', ['sync', 'webpack:build', 'nunjucks-precompile-mapping', 'nunjucks', 'cssmin']);
	grunt.registerTask('dev', 'concurrent');

	/*grunt.event.on('watch', function(action, filepath, target) {

		leaving this here till we integrate test coverage
	});*/
};
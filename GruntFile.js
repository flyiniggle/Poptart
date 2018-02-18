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
			build: webpackConfig.map(config => Object.assign({ progress: false }, config)),
			ignite: webpackConfig[2]
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
						{pattern: './ui/**/*.test.js', noCache: true},
						{pattern: '../node_modules/phantomjs-polyfill-find/find-polyfill.js', noCache: true},
					],
					exclude: [
						'./ui/components/**/*.test.js',
						'./ui/components/**/*.spec.js'
					],
					browsers: ['ChromeHeadless'],
					singleRun: true
				}
			},
			integration: {
				options: {
					files: [
						{pattern: './static/ui/polyfills.js', noCache: true},
						{pattern: './static/ui/scripts/bluebird.js', noCache: true},
						{pattern: './ui/**/*.spec.js', noCache: true},
						{pattern: '../node_modules/phantomjs-polyfill-find/find-polyfill.js', noCache: true}
					],
					exclude: [
						'./ui/components/**/*.test.js',
						'./ui/components/**/*.spec.js'
					],
					browsers: ['ChromeHeadless'],
					singleRun: true
				}
			},
			/*dev: {
				options: {
					files: [
						{pattern: './static/ui/polyfills.js', noCache: true},
						{pattern: './static/ui/scripts/Ignite/!*.js', noCache: true},
						{pattern: './static/ui/scripts/Ignite/modules/!*.js', noCache: true},
						{pattern: './static/ui/scripts/bluebird.js', noCache: true},
						{pattern: 'test/client/!**!/!*.min.js', noCache: true}
					],
					browsers: ['ChromeHeadless'],
					singleRun: false
				}
			},*/
			igUnit: {
					options: {
						files: [
							{pattern: './static/ui/polyfills.js', noCache: true},
							{pattern: './static/ui/scripts/bluebird.js', noCache: true},
							{pattern: '../node_modules/jquery/dist/jquery.min.js', noCache: true},
							{pattern: '../node_modules/jqueryui/jquery-ui.min.js', noCache: true},
							{pattern: '../node_modules/nunjucks/browser/nunjucks.js', noCache: true},
							{pattern: './ui/scripts/Ignite/*.js', noCache: true},
							{pattern: './ui/scripts/Ignite/modules/*.js', noCache: true},
							{pattern: './ui/components/Poptart.Ignite.Adding.js', noCache: true},
							{pattern: './ui/components/**/*.test.js', noCache: true},
							{pattern: '../node_modules/phantomjs-polyfill-find/find-polyfill.js', noCache: true}
						],
						browsers: ['ChromeHeadless'],
						singleRun: true
				}
			},
			igIntegration: {
				options: {
					files: [
						{pattern: './static/ui/polyfills.js', noCache: true},
						{pattern: './static/ui/scripts/bluebird.js', noCache: true},
						{pattern: '../node_modules/jquery/dist/jquery.min.js', noCache: true},
						{pattern: '../node_modules/jqueryui/jquery-ui.min.js', noCache: true},
						{pattern: '../node_modules/nunjucks/browser/nunjucks.js', noCache: true},
						{pattern: './ui/scripts/Ignite/*.js', noCache: true},
						{pattern: './ui/scripts/Ignite/modules/*.js', noCache: true},
						{pattern: './ui/components/Poptart.Ignite.Adding.js', noCache: true},
						{pattern: './ui/components/**/*.spec.js', noCache: true},
						{pattern: '../node_modules/phantomjs-polyfill-find/find-polyfill.js', noCache: true}
					],
					browsers: ['ChromeHeadless'],
					singleRun: true
				}
			}
		},
		mochaTest: {
			unit: {
				options: {
					reporter: 'spec',
					require: 'babel-register'
				},
				src: ['presentation/test/server/*.js']
			}
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-webpack');

	grunt.registerTask('default', ['build-static', 'test']);
	grunt.registerTask('test-infragistics', ['karma:igUnit', 'karma:igIntegration'])
	grunt.registerTask('test', ['shell:test', 'mochaTest:unit', 'karma:unit', 'karma:integration', 'test-infragistics']);
	grunt.registerTask('build-static', ['sync', 'webpack:build', 'nunjucks-precompile-mapping', 'nunjucks', 'cssmin']);
	grunt.registerTask('dev', 'concurrent');

	/*grunt.event.on('watch', function(action, filepath, target) {

		leaving this here till we integrate test coverage
	});*/
};
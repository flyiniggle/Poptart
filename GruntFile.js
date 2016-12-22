const path = require("path");

module.exports = function(grunt) {
	require('jit-grunt')(grunt);
	require('time-grunt')(grunt);

	const ignoredSourceScriptPatterns = ['!**/*.debug.js', '!**/*.min.js', '!scripts/*', '!**/*.map'],
		baseUIPath = 'presentation/ui';

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			build: {
				cwd: 'presentation/ui',
				src: '**',
				dest: path.join('presentation', 'static', 'ui'),
				expand: true
			}
		},
		uglify: {
			options: {
				sourceMap: true,
				compress: false
			},
			build: {
				cwd: baseUIPath,
				files: function() {
					var modules = grunt.file.expand({
							filter: 'isDirectory',
							expand: true,
							cwd: 'presentation/ui/modules'
						}, ['**', '!**/css', '!**/scripts', ...ignoredSourceScriptPatterns]),
						components = grunt.file.expand({
							filter: 'isFile',
							expand: true,
							cwd: 'presentation/ui/components'
						}, ['*.js', ...ignoredSourceScriptPatterns]),
						files, componentFiles;

					files = modules.map(function(pathFragment) {
						var modulePath = `modules/${pathFragment}/scripts`,
							moduleName = modulePath.split('/').reduce(function(result, next) {
								var nameFragment;

								switch(next) {
								case "modules":
									nameFragment = "Poptart.";
									break;
								case "scripts":
									nameFragment = "min.js";
									break;
								default:
									nameFragment = `${next.charAt(0).toUpperCase() + next.slice(1)}.`;
									break;
								}
								return result + nameFragment;
							}, "");

						return {
							src: grunt.file.expand({
								cwd: `${baseUIPath}/${modulePath}`,
								filter: 'isFile'
							}, ['*.js', ...ignoredSourceScriptPatterns]).sort(
								function(a, b) {
									return a.length - b.length;
								}
							).map(function(piece) {
								return path.join(baseUIPath, modulePath, piece);
							}),
							dest: path.join(baseUIPath, modulePath, moduleName)
						};
					});

					componentFiles = components.map(function(componentPath) {
						return {
							src: `${baseUIPath}/components/${componentPath}`,
							dest: `${baseUIPath}/components/${componentPath.replace('.js', '.min.js')}`
						};
					});

					files = [...files, ...componentFiles];

					files.push({
						src: grunt.file.expand({
							filter: 'isFile',
							cwd: baseUIPath
						}, ['*.js', ...ignoredSourceScriptPatterns]).map(function(path) {
							return `${baseUIPath}/${path}`;
						}),
						dest: `${baseUIPath}/poptart.min.js`
					});

					return files;
				}(),
				extDot: 'last',
				expand: true
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
			options: {
				configFile: 'presentation/build/eslint.json',
				ignorePath: 'presentation/build/.eslintignore'
			},
			target: ['presentation/**/*.js', '!presentation/ui/scripts/*', '!presentation/static/**']
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

	grunt.registerTask('default', ['lint', 'test']);
	grunt.registerTask('test', ['shell:test', 'mochaTest:unit', 'karma:unit']);
	grunt.registerTask('lint', ['eslint']);
	grunt.registerTask('build-static', ['uglify', 'copy', 'cssmin']);

};
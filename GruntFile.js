const path = require("path");

module.exports = function(grunt) {
	const ignoredSourceScriptPatterns = ['!**/*.debug.js', '!**/*.min.js', '!scripts/*', '!**/*.map'],
		baseUIPath = 'presentation/ui',
		scripts = grunt.file.expand({filter: 'isFile',
			matchBase: true,
			cwd: baseUIPath},
		['*.js', ...ignoredSourceScriptPatterns]);

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			build: {
				cwd: 'presentation/',
				src: 'ui/**',
				dest: path.join('presentation', 'static'),
				expand: true
			}
		},
/*		concat: {
			options: {
				sourceMap: true
			},
			build: {
				cwd: baseUIPath,
				expand: true,
				files: function() {
					var modules = grunt.file.expand({
							filter: 'isDirectory',
							expand: true,
							cwd: 'presentation/ui/modules'
						}, ['**', '!**!/css', '!**!/scripts']),
						components = grunt.file.expand({
							filter: 'isFile',
							expand: true,
							cwd: 'presentation/ui'
						}, ['components/!*.js', ...ignoredSourceScriptPatterns]),
						files, componentFiles;

					files = modules.map(function(path) {
						var modulePath = `modules/${path}/scripts`,
							moduleName = modulePath.split('/').reduce(function(result, next) {
								var nameFragment;

								switch(next) {
								case "modules":
									nameFragment = "Poptart.";
									break;
								case "scripts":
									nameFragment = "debug.js";
									break;
								default:
									nameFragment = `${next.charAt(0).toUpperCase() + next.slice(1)}.`;
									break;
								}
								return result + nameFragment;
							}, "");

						return {
							src: grunt.file.expand({
								filter: 'isFile'
							}, [`${baseUIPath}/${modulePath}/!*.js`, ...ignoredSourceScriptPatterns]).sort(
								function(a, b) {
									return a.length - b.length;
								}
							),
							dest: `${baseUIPath}/${modulePath}/${moduleName}`
						};
					});

					componentFiles = components.map(function(componentPath) {
						return {
							src: `${baseUIPath}/${componentPath}`,
							dest: `${baseUIPath}/${componentPath.replace('.js', '.debug.js')}`
						};
					});

					files = [...files, ...componentFiles];

					files.push({
						src: grunt.file.expand({
							filter: 'isFile'
						}, [`${baseUIPath}/!*.js`, ...ignoredSourceScriptPatterns]),
						dest: `${baseUIPath}/poptart.debug.js`
					});

					return files;
				}()
			}
		},
		uglify: {
			options: {
				compress: true,
				sourceMap: true,
				sourceMapIncludeSources: true
			},
			build: {
				src: ['presentation/ui/!**!/!*.debug.js', '!presentation/ui/scripts/!*', '!**!/!*.min.js'],
				rename: function(dest, src) {
					return src.replace('.debug.js', '.min.js');
				},
				extDot: 'last',
				expand: true
			}
		},*/
		uglify: {
			options: {
				compress: true,
				sourceMap: true,
				beautify: true,
				sourceMapIncludeSources: true
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
							cwd: 'presentation/ui'
						}, ['components/*.js', ...ignoredSourceScriptPatterns]),
						files, componentFiles;

					files = modules.map(function(path) {
						var modulePath = `modules/${path}/scripts`,
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
								filter: 'isFile'
							}, [`${baseUIPath}/${modulePath}/*.js`, ...ignoredSourceScriptPatterns]).sort(
								function(a, b) {
									return a.length - b.length;
								}
							),
							dest: `${baseUIPath}/${modulePath}/${moduleName}`
						};
					});

					componentFiles = components.map(function(componentPath) {
						return {
							src: `${baseUIPath}/${componentPath}`,
							dest: `${baseUIPath}/${componentPath.replace('.js', '.min.js')}`
						};
					});

					files = [...files, ...componentFiles];

					files.push({
						src: grunt.file.expand({
							filter: 'isFile'
						}, [`${baseUIPath}/*.js`, ...ignoredSourceScriptPatterns]),
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

	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['lint', 'test']);
	grunt.registerTask('test', ['shell:test', 'mochaTest:unit', 'karma:unit']);
	grunt.registerTask('lint', ['eslint']);
	grunt.registerTask('build-static', ['uglify', 'copy', 'cssmin']);

};
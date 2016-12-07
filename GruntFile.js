const path = require("path");

module.exports = function(grunt) {

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
		uglify: {
			options: {
				compress: true,
				sourceMap: true
			},
			build: {
				src: ['presentation/static/ui/**/*.js', '!presentation/static/ui/scripts/*', '!**/*.min.js'],
				ext: '.min.js',
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

	grunt.registerTask('default', ['lint', 'test']);
	grunt.registerTask('test', ['shell:test', 'mochaTest:unit', 'karma:unit']);
	grunt.registerTask('lint', ['eslint']);
	grunt.registerTask('build-static', ['copy', 'uglify', 'cssmin']);

};
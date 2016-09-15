module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		shell: {
			test: {
				command: 'python manage.py test',
				options: {
					stdout: true,
					failOnError: true
				}
			}
		},
	});

	grunt.loadNpmTasks('grunt-shell');
	grunt.registerTask('default', ['test']);
	grunt.registerTask('test', ['shell:test']);

};
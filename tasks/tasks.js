const path = require("path");

module.exports = function(grunt) {
	const ignoredSourceScriptPatterns = ['!**/*.debug.js', '!**/*.min.js', '!scripts/*', '!**/*.map'],
		baseUIPath = 'presentation/ui',
		baseDestUIPath = 'presentation/static/ui';

	grunt.registerTask("uglify-build-all-javascript-file-mapping", "Set src and dest mappings for the uglify task to all javascript files.", function() {
		var uglify = grunt.config.get('uglify'),
			modules = grunt.file.expand({
				filter: 'isDirectory',
				expand: true,
				cwd: 'presentation/static/ui/modules'
			}, ['**', '!**/css', '!**/scripts', ...ignoredSourceScriptPatterns]),
			components = grunt.file.expand({
				filter: 'isFile',
				expand: true,
				cwd: 'presentation/static/ui/components'
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
					cwd: `${baseDestUIPath}/${modulePath}`,
					filter: 'isFile'
				}, ['*.js', ...ignoredSourceScriptPatterns]).sort(
					function(a, b) {
						return a.length - b.length;
					}
				).map(function(piece) {
					return path.join(baseDestUIPath, modulePath, piece);
				}),
				dest: path.join(baseDestUIPath, modulePath, moduleName)
			};
		});

		componentFiles = components.map(function(componentPath) {
			return {
				src: `${baseDestUIPath}/components/${componentPath}`,
				dest: `${baseDestUIPath}/components/${componentPath.replace('.js', '.min.js')}`
			};
		});

		files = [...files, ...componentFiles];

		files.push({
			src: grunt.file.expand({
				filter: 'isFile',
				cwd: baseUIPath
			}, ['*.js', ...ignoredSourceScriptPatterns]).map(function(path) {
				return `${baseDestUIPath}/${path}`;
			}),
			dest: `${baseDestUIPath}/poptart.min.js`
		});

		uglify.all.files = files;
		grunt.config.set("uglify", uglify);
	});
};
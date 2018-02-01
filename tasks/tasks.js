const path = require("path");

module.exports = function(grunt) {
	const baseDestUIPath = 'presentation/static/ui';

	grunt.registerTask("nunjucks-precompile-mapping", "Set src and dest mappings for precompiling nunjucks templates for client side use.", function() {
		var nunjucksBuild = grunt.config.get('nunjucks'),
			modules = grunt.file.expand({
				filter: 'isDirectory',
				expand: true,
				cwd: 'presentation/templates/modules'
			}, ['**', '!**/client', '!**/shared', '!**/server']),
			components = grunt.file.expand({
				filter: 'isFile',
				expand: true,
				cwd: 'presentation/templates/components'
			}, ['**/*.ninja']),
			files, componentFiles;

		files = modules.map(function(pathFragment) {
			var modulePath = `modules/${pathFragment}`,
				moduleName = modulePath.split('/').reduce(function(result, next) {
					var nameFragment;

					switch(next) {
					case "modules":
						nameFragment = "Poptart.Templates.";
						break;
					default:
						nameFragment = `${next.charAt(0).toUpperCase() + next.slice(1)}.`;
						break;
					}
					return result + nameFragment;
				}, "");

			return {
				src: grunt.file.expand({
					cwd: `presentation/templates/${modulePath}`,
					filter: 'isFile'
				}, ['/client/*.ninja', '/shared/*.ninja']).map(function(piece) {
					return path.join(baseDestUIPath, modulePath, piece) + '.js';
				}),
				dest: path.join(baseDestUIPath, 'templates', modulePath, moduleName) + "js"
			};
		});

		componentFiles = components.map(function(componentPath) {
			return {
				src: `presentation/templates/components/${componentPath}`,
				dest: `${baseDestUIPath}/templates/components/${componentPath.replace('.ninja', '.js')}`
			};
		});

		files = [...files, ...componentFiles];

		files.push({
			src: grunt.file.expand({
				filter: 'isFile',
				cwd: 'presentation/templates/support'
			}, ['**/*.ninja', '!**/server/**']).map(function(path) {
				return `presentation/templates/support/${path}`;
			}),
			dest: `${baseDestUIPath}/templates/support/Poptart.Templates.Support.js`
		});

		nunjucksBuild.precompile.files = files;
		grunt.config.set("nunjucks", nunjucksBuild);
	});
};
const path = require('path');

module.exports = [{
	entry: {
		integration: path.resolve(__dirname, "client", "integration", "test.js"),
		unit: path.resolve(__dirname, "client", "unit", "test.js")
	},
	resolve: {
		modules: [
			"node_modules"
		],
		alias: {
			Poptart: path.resolve(__dirname, "../ui"),
			Templates: path.resolve(__dirname, "../templates"),
			Lib: path.resolve(__dirname, "../ui/lib")
		}
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['env']
				}
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}
		]
	}
}];
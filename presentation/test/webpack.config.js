const path = require('path');

module.exports = [{
	resolve: {
		modules: [
			"node_modules",
		],
		alias: {
			Poptart: path.resolve(__dirname, "../ui"),
			Templates: path.resolve(__dirname, "../templates"),
			Lib: path.resolve(__dirname, "../ui/lib")
		}
	},
	output: {
		filename: 'test.min.js'
	},
	module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}
		]
	}
}];
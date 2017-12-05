const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: __dirname + "/presentation/ui/",
	devtool: 'source-map',
	entry: {
		Core: ["./poptart.js", "./polyfills.js", "jquery", "jquery-ui", "knockout"],
		Account: "./modules/account/scripts/Poptart.Account.js",
		Dashboard: "./modules/dashboard/scripts/Poptart.Dashboard.js",
		"monitors/account": "./modules/monitors/account/scripts/Poptart.Monitor.Account.js",
		"monitors/security": "./modules/monitors/security/scripts/Poptart.Monitor.Security.js"
	},
	output: {
		path: __dirname,
		filename: './presentation/static/ui/modules/[name]/scripts/main.js',
		library: ['Poptart', '[name]']
	},
	resolve: {
		alias: {
			"Poptart": path.join(__dirname, "presentation", "ui"),
			"Templates": path.join(__dirname, "presentation", "templates"),
			"lib": path.join(__dirname, "presentation", "ui", "scripts")
		}
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
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "Poptart",
			filename: "./presentation/static/ui/Poptart.js",
			minChunks: 2
		})
	]
};
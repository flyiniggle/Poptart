const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const sharedConfig = {
	context: __dirname + "/presentation/ui/",
	devtool: 'source-map',
	resolve: {
		alias: {
			"Poptart": __dirname + "/presentation/ui/",
			"Templates": "../presentation/templates",
			"Lib": __dirname + "/presentation/ui/lib"
		}
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			}
		],
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
};

const topLevelPackagesConfig = Object.assign(
	{
		entry: {
			Account: "./modules/account/scripts/Poptart.Account.js",
			Dashboard: "./modules/dashboard/scripts/Poptart.Dashboard.js"
		},
		output: {
			path: __dirname,
			filename: './presentation/static/ui/modules/[name]/scripts/main.js',
			libraryTarget: 'umd',
			library: ['Poptart', '[name]']
		},
		plugins: [
			new ExtractTextPlugin('./presentation/static/ui/modules/[name]/css/main.css')
		]
	},
	sharedConfig
);

const monitorPackagesConfig = Object.assign(
	{
		entry: {
			Account: "./modules/monitors/account/scripts/Poptart.Monitor.Account.js",
			Security: "./modules/monitors/security/scripts/Poptart.Monitor.Security.js"
		},
		output: {
			path: __dirname,
			filename: './presentation/static/ui/modules/monitors/[name]/scripts/main.js',
			libraryTarget: 'umd',
			library: ['Poptart', 'Monitor', '[name]']
		},
		plugins: [
			new ExtractTextPlugin('./presentation/static/ui/modules/monitors/[name]/css/main.css')
		]
	},
	sharedConfig
);

module.exports = [
	topLevelPackagesConfig,
	monitorPackagesConfig
];